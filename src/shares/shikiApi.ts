import {
  createdBundledHighlighter,
  createJavaScriptRegexEngine,
  type HighlighterGeneric,
} from 'shiki';

// create custom shiki bundle and loads the themes and languages specified.
const shikiBundle = createdBundledHighlighter({
  engine: () => createJavaScriptRegexEngine({ target: 'ES2025' }),
  langs: {
    javascript: () => import('@shikijs/langs/javascript'),
    typescript: () => import('@shikijs/langs/typescript'),
    vue: () => import('@shikijs/langs/vue'),
    css: () => import('@shikijs/langs/css'),
  },
  themes: {
    'material-theme-ocean': () => import('@shikijs/themes/material-theme-ocean'),
  },
});

let shikiFactory: HighlighterGeneric<
  'vue' | 'typescript' | 'javascript' | 'css',
  'material-theme-ocean'
> | null;

/**
 * Create a singleton Shiki instance from a custom and minimal bundle.
 *
 * Shiki instance is big and don't automatically GC, so don't forget to call
 * {@link disposeShiki} to free resources.
 */
export async function createShikiInstance(): Promise<
  HighlighterGeneric<'vue' | 'typescript' | 'javascript' | 'css', 'material-theme-ocean'>
> {
  if (!shikiFactory) {
    shikiFactory = await shikiBundle({
      langs: ['javascript', 'typescript', 'vue', 'css'],
      themes: ['material-theme-ocean'],
    });
  }

  return shikiFactory;
}

/**
 * Dispose Shiki instance that was created by {@link createShikiInstance} and free resources.
 */
export function disposeShiki(): void {
  if (shikiFactory) {
    console.info('Disposing Shiki instance');
    shikiFactory.dispose();
    shikiFactory = null;
  }
}

/**
 * Highlight source code with Shiki.
 *
 * This method will automatically call {@link createShikiInstance}
 * if the instance doesn't exist.
 *
 * @param code The code to highlight with Shiki
 * @param lang The language to be used to highlight the code
 */
export async function highlightCode(
  code: string,
  lang: 'vue' | 'typescript' | 'javascript' | 'css'
): Promise<string> {
  if (!shikiFactory) {
    await createShikiInstance();
  }

  return shikiFactory!.codeToHtml(code, { lang: lang, theme: 'material-theme-ocean' });
}
