declare namespace API {
  type deleteUsingDELETEParams = {
    /** 用户ID */
    userId: number;
  };

  type getInfoUsingGET1Params = {
    /** menuId */
    menuId: number;
  };

  type getUserUsingGETParams = {
    /** 用户ID */
    userId: number;
  };

  type listUsingGETParams = {
    component?: string;
    createBy?: string;
    createTime?: string;
    icon?: string;
    isCache?: string;
    isFrame?: string;
    menuId?: number;
    menuName: string;
    menuType: string;
    orderNum: number;
    params?: Record<string, any>;
    parentId?: number;
    parentName?: string;
    path?: string;
    perms?: string;
    query?: string;
    remark?: string;
    searchValue?: string;
    status?: string;
    updateBy?: string;
    updateTime?: string;
    visible?: string;
  };

  type LoginBody = {
    /** 验证码（暂时不用） */
    code?: string;
    /** 用户密码 */
    password?: string;
    /** 用户名 */
    username?: string;
    /** 唯一标识（暂时不用） */
    uuid?: string;
  };

  type LoginVo = {
    /** token */
    token?: string;
  };

  type MetaVo = {
    /** 设置该路由的图标，对应路径src/assets/icons/svg */
    icon?: string;
    /** 内链地址（http(s)://开头） */
    link?: string;
    /** 设置为true，则不会被 <keep-alive>缓存 */
    noCache?: boolean;
    /** 设置该路由在侧边栏和面包屑中展示的名字 */
    title?: string;
  };

  type RegisterBody = {
    /** 验证码（暂时不用） */
    code?: string;
    /** 用户密码 */
    password?: string;
    /** 用户名 */
    username?: string;
    /** 唯一标识（暂时不用） */
    uuid?: string;
  };

  type removeUsingDELETEParams = {
    /** menuId */
    menuId: number;
  };

  type RListRouterVo = {
    code?: number;
    data?: RouterVo[];
    msg?: string;
  };

  type RListUserEntity = {
    code?: number;
    data?: UserEntity[];
    msg?: string;
  };

  type RLoginVo = {
    code?: number;
    data?: LoginVo;
    msg?: string;
  };

  type roleMenuTreeselectUsingGETParams = {
    /** roleId */
    roleId: number;
  };

  type RouterVo = {
    /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
    alwaysShow?: boolean;
    /** 子路由 */
    children?: RouterVo[];
    /** 组件地址 */
    component?: string;
    /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
    hidden?: boolean;
    /** 其他元素 */
    meta?: MetaVo;
    /** 路由名字 */
    name?: string;
    /** 路由地址 */
    path?: string;
    /**  路由参数：如 {"id": 1, "name": "ry"} */
    query?: string;
    /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
    redirect?: string;
  };

  type Rstring = {
    code?: number;
    data?: string;
    msg?: string;
  };

  type RUserEntity = {
    code?: number;
    data?: UserEntity;
    msg?: string;
  };

  type RUserInfoVo = {
    code?: number;
    data?: UserInfoVo;
    msg?: string;
  };

  type saveUsingPOSTParams = {
    /** 用户手机 */
    mobile?: string;
    /** 用户密码 */
    password?: string;
    /** 用户id */
    userId?: number;
    /** 用户名称 */
    username?: string;
  };

  type SysMenu = {
    children?: SysMenu[];
    component?: string;
    createBy?: string;
    createTime?: string;
    icon?: string;
    isCache?: string;
    isFrame?: string;
    menuId?: number;
    menuName: string;
    menuType: string;
    orderNum: number;
    params?: Record<string, any>;
    parentId?: number;
    parentName?: string;
    path?: string;
    perms?: string;
    query?: string;
    remark?: string;
    status?: string;
    updateBy?: string;
    updateTime?: string;
    visible?: string;
  };

  type SysRole = {
    admin?: boolean;
    createBy?: string;
    createTime?: string;
    dataScope?: string;
    delFlag?: string;
    deptCheckStrictly?: boolean;
    deptIds?: number[];
    flag?: boolean;
    menuCheckStrictly?: boolean;
    menuIds?: number[];
    params?: Record<string, any>;
    permissions?: string[];
    remark?: string;
    roleId?: number;
    roleKey: string;
    roleName: string;
    roleSort: number;
    status?: string;
    updateBy?: string;
    updateTime?: string;
  };

  type SysUser = {
    admin?: boolean;
    /** 用户头像 */
    avatar?: string;
    createBy?: string;
    createTime?: string;
    /**  删除标志（0代表存在 2代表删除） */
    delFlag?: string;
    /** 用户基本信息 */
    deptId?: number;
    /** 用户邮箱 */
    email?: string;
    /** 最后登录时间 */
    loginDate?: string;
    /** 最后登录IP */
    loginIp?: string;
    /** 用户昵称 */
    nickName?: string;
    params?: Record<string, any>;
    /** 密码 */
    password?: string;
    /** 手机号码 */
    phonenumber?: string;
    remark?: string;
    /** 角色ID */
    roleId?: number;
    /** 角色组 */
    roleIds?: number[];
    /** 角色对象 */
    roles?: SysRole[];
    /** 用户性别 0=男,1=女,2=未知 */
    sex?: string;
    /** 帐号状态（0正常 1停用） */
    status?: string;
    updateBy?: string;
    updateTime?: string;
    /** 用户ID */
    userId?: number;
    /** 用户基本信息 */
    userName?: string;
  };

  type treeselectUsingGETParams = {
    component?: string;
    createBy?: string;
    createTime?: string;
    icon?: string;
    isCache?: string;
    isFrame?: string;
    menuId?: number;
    menuName: string;
    menuType: string;
    orderNum: number;
    params?: Record<string, any>;
    parentId?: number;
    parentName?: string;
    path?: string;
    perms?: string;
    query?: string;
    remark?: string;
    searchValue?: string;
    status?: string;
    updateBy?: string;
    updateTime?: string;
    visible?: string;
  };

  type UserEntity = {
    /** 用户手机 */
    mobile?: string;
    /** 用户密码 */
    password?: string;
    /** 用户ID */
    userId?: number;
    /** 用户名称 */
    username?: string;
  };

  type UserInfoVo = {
    /** 权限集合 */
    permissions?: string[];
    /** 角色集合 */
    roles?: string[];
    /** 用户基本信息 */
    user?: SysUser;
  };
}
