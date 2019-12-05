// 云函数入口文件
const cloud = require('wx-server-sdk')
const { ImageClient } = require('image-node-sdk');

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 1. 取出小程序端传入的fileURL
  const fileURL = event.fileURL

  // 2. 使用腾讯云AI功能进行识别
  let AppId = '1258338029' // 腾讯云 AppId
  let SecretId = 'AKIDf9OQDkbILAk5CrJRYR4RdaOxPtBEcatw' // 腾讯云 SecretId
  let SecretKey = 'wcHhrpX0d198uZ0C9rJVhfiX8VcT4Zu0' // 腾讯云 SecretKey

  let idCardImageUrl = fileURL
  let imgClient = new ImageClient({ AppId, SecretId, SecretKey })
  const result = await imgClient.ocrIdCard({
    data: {
      url_list: [idCardImageUrl]
    }
  })
  return JSON.parse(result.body).result_list[0].data
}