// 导入express作为渲染服务器
const express = require('express')
// 导入Vue用于声明待渲染实例
const Vue = require('Vue')
// 导入createRenderer用于获取渲染器
const { createRenderer } = require('vue-server-renderer')
// 创建express实例
const app = new express()
// 获取渲染器
const renderer = createRenderer()

// 动态获取html
const fs = require('fs')
const path = require('path')

app.get('*', async (req, res) => {
  console.log(req.url)
  // 解析模板名称/use
  let template = req.url.substr(1) || 'index'
  const buffer = fs.readFileSync(path.join(__dirname, `${template}.html`))


  // 待渲染vue实例
  const vm = new Vue({
    data: {
      name: '开课吧'
    },
    template: buffer.toString()
  })
  // renderToString可以将vue实例转换成html字符串
  // 若为传递回调函数，则返回Promise
  try {
    const html = await renderer.renderToString(vm)
    res.send(html)
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
})

app.listen(3000, () => {
  console.log('启动成功')
})