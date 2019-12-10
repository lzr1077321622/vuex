import request from './http.js'

export function getList(){
  return request ({
    url: "class",//接口地址
    data:{//请求参数
      pageNo:1,
      pageSize:6
    }
  })

}
