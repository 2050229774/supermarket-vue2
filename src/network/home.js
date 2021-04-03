import {request} from './request.js'

export function getdata() {
  return request({
    url: '/home/mutidata'
  })
}