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
    'import/extensions': [
      'never',
      {
        'vue': 'always',
      }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { ignoreTypeReferences: true }],
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    // 组件不需要使用多个单词组成
    'vue/multi-word-component-names': 'off',
    // 函数参数不能重新赋值，对象类型的属性可以重新赋值
    'no-param-reassign': [
      'error',
      {
        'props': false
      }
    ],
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
