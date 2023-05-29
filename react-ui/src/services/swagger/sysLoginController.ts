// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户信息 GET /api/getInfo */
export async function getInfoUsingGET(options?: { [key: string]: any }) {
  return request<API.RUserInfoVo>('/api/getInfo', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取路由信息 GET /api/getRouters */
export async function getRoutersUsingGET(options?: { [key: string]: any }) {
  return request<API.RListRouterVo>('/api/getRouters', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /api/login */
export async function loginUsingPOST(body: API.LoginBody, options?: { [key: string]: any }) {
  return request<API.RLoginVo>('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
