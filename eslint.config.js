import prettierConfig from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';

import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

export default defineConfigWithVueTs(
  vue.configs['flat/strongly-recommended'],
  vueTsConfigs.recommendedTypeChecked,
  {
    ignores: ['node_modules', 'vite.config.*', 'tailwind.config.js'],
  },
  {
    rules: {
      'vue/max-attributes-per-line': 'warn',
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  prettierConfig
);
