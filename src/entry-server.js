// 调用刚才main里面的工厂函数创建实例
import { createApp } from './main'

export default context => {
  // 返回promise,确保异步的操作都结束
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context)

    // 显示首屏处理
    router.push(context.url)
    // 检查路由就绪事件
    router.onReady(() => {
      resolve(app)
    }, reject)
  })
}