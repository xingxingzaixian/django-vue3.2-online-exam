module.exports = {
  extends: ["stylelint-config-recommended-vue"],
  rules: {
      // 识别未知的@语法
      'at-rule-no-unknown': [
          true,
          {
              ignoreAtRules: [
                  'tailwind',
                  'layer',
                  'apply',
                  'variants',
                  'responsive',
                  'screen'
              ]
          }
      ]
  }
}