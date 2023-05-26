// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 注册 POST /register */
export async function registerUsingPOST(body: API.RegisterBody, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
