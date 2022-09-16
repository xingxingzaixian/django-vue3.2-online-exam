export const formatHtmlText = (text: string): string => {
  const temp = text.replace(/<[^>]+>/g, '') //截取html标签
  return temp.replace(/&nbsp;/gi, '') //截取空格等特殊标签
}

// 验证wangeditor编辑器内容是否为空
export const validateWangeditor = (rule: any, value: any, callback: any) => {
  console.log(rule)
  if (!formatHtmlText(value).trim()) {
    callback(new Error('请输入内容'))
  } else {
    callback()
  }
}
