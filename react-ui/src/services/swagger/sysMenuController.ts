// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 修改菜单 PUT /system/menu */
export async function editUsingPUT(body: API.SysMenu, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/system/menu', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 新增菜单 POST /system/menu */
export async function addUsingPOST(body: API.SysMenu, options?: { [key: string]: any }) {
  return request<Record<string, any>>('/system/menu', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据菜单编号获取详细信息 GET /system/menu/${param0} */
export async function getInfoUsingGET1(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getInfoUsingGET1Params,
  options?: { [key: string]: any },
) {
  const { menuId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/system/menu/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除菜单 DELETE /system/menu/${param0} */
export async function removeUsingDELETE(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeUsingDELETEParams,
  options?: { [key: string]: any },
) {
  const { menuId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/system/menu/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取菜单列表 GET /system/menu/list */
export async function listUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/system/menu/list', {
    method: 'GET',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}

/** 加载对应角色菜单列表树 GET /system/menu/roleMenuTreeselect/${param0} */
export async function roleMenuTreeselectUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.roleMenuTreeselectUsingGETParams,
  options?: { [key: string]: any },
) {
  const { roleId: param0, ...queryParams } = params;
  return request<Record<string, any>>(`/system/menu/roleMenuTreeselect/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 获取菜单下拉树列表 GET /system/menu/treeselect */
export async function treeselectUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.treeselectUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>('/system/menu/treeselect', {
    method: 'GET',
    params: {
      ...params,
      params: undefined,
      ...params['params'],
    },
    ...(options || {}),
  });
}
