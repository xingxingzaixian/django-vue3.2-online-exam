module.exports = {
  root: true,
  env: {
    // 识别defineProps、defineEmit等vue3的宏命令
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint-config-airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  plugins: ['prettier', 'import', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: true }],
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'no-prototype-builtins': 'off',
    'import/no-unresolved': [
      2,
      {
        "ignore": ["^/@/"]
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', './src'],
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    parser: '@typescript-eslint/parser'
  },
  globals: {
    // 配置全局变量识别
  }
}
