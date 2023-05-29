// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取用户详细 GET /api/test/user/${param0} */
export async function getUserUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserUsingGETParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.RUserEntity>(`/api/test/user/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除用户信息 DELETE /api/test/user/${param0} */
export async function deleteUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.deleteUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { userId: param0, ...queryParams } = params;
  return request<API.Rstring>(`/api/test/user/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api/test/user/list */
export async function userListUsingGET(options?: { [key: string]: any }) {
  return request<API.RListUserEntity>('/api/test/user/list', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 新增用户 POST /api/test/user/save */
export async function saveUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.saveUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.Rstring>('/api/test/user/save', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新用户 PUT /api/test/user/update */
export async function updateUsingPUT(body: API.UserEntity, options?: { [key: string]: any }) {
  return request<API.Rstring>('/api/test/user/update', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
