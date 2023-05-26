// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户信息 GET /getInfo */
export async function getInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.RUserInfoVo>('/getInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取路由信息 GET /getRouters */
export async function getRoutersUsingGET(options?: { [key: string]: any }) {
  return request<API.RListRouterVo>('/getRouters', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /login */
export async function loginUsingPOST(body: API.LoginBody, options?: { [key: string]: any }) {
  return request<API.RLoginVo>('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
