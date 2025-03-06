import global from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended
  ],
  files: ['**/*.ts'],
  ignores: ['*.js', 'node_modules'],
  rules: {
    'no-console': 'off'
  },
  languageOptions: {
    parser: tseslint.parser,
    globals: {
      ...global.node,
    },
    parserOptions: {
      project: ['./tsconfig.eslint.json', '**/*/tsconfig.json'],
      tsconfigRootDir: import.meta.dirname
    },
  }
})
