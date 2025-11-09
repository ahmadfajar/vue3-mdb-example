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

const shikiFactory: HighlighterGeneric<
  'vue' | 'typescript' | 'javascript' | 'css',
  'material-theme-ocean'
> = await shikiBundle({
  langs: ['javascript', 'typescript', 'vue', 'css'],
  themes: ['material-theme-ocean'],
});

export function highlightCode(
  code: string,
  lang: 'vue' | 'typescript' | 'javascript' | 'css'
): string {
  return shikiFactory.codeToHtml(code, { lang: lang, theme: 'material-theme-ocean' });
}

export function disposeShiki(): void {
  shikiFactory?.dispose();
}
