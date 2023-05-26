// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 生成验证码 GET /captchaImage */
export async function getCodeUsingGET(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/captchaImage', {
    method: 'GET',
    ...(options || {}),
  });
}
