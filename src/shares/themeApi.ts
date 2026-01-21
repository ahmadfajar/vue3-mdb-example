import { readonly, ref } from 'vue';

type Appearance = 'light' | 'dark' | 'system';

const storageName = 'VueMDB-theme-appearance';

function updateTheme(value: Appearance): void {
  if (typeof window === 'undefined') {
    return;
  }

  if (value === 'system') {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQueryList.matches ? 'dark' : 'light';

    document.documentElement.classList.toggle('dark', systemTheme === 'dark');
  } else {
    document.documentElement.classList.toggle('dark', value === 'dark');
  }
}

export function themeNameFrom(value: Appearance) {
  if (value === 'system') {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQueryList.matches ? 'dark' : 'light';
  } else {
    return value;
  }
}

function getStoredAppearance(): Appearance | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem(storageName) as Appearance | null;
}

const appearance = ref<Appearance>('system');

export function initializeTheme(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Initialize theme from saved preference or default to system...
  const savedAppearance = getStoredAppearance();
  updateTheme(savedAppearance || 'system');

  if (savedAppearance) {
    appearance.value = savedAppearance;
  }
}

export function useTheme() {
  function saveTheme(value: Appearance) {
    appearance.value = value;

    // Store in localStorage for client-side persistence...
    localStorage.setItem(storageName, value);
    updateTheme(value);
  }

  return {
    theme: readonly(appearance),
    saveTheme,
  };
}
