declare namespace API {
  
        type allocatedListUsingGETParams =
          {
              /** 手机号码 */
                'phonenumber'?: string;
              /** 角色ID */
                'roleId': number;
              /** 用户账号 */
                'userName'?: string;
          }
        
  
        type AuthUserAllVo =
          {
              /** 角色ID */
                'roleId'?: number;
              /** 用户ID集合 */
                'userIds'?: number[];
          }
        
  
        type deleteUsingDELETEParams =
          {
              /** 用户ID */
                'userId': number;
          }
        
  
        type getInfoUsingGET1Params =
          {
              /** 菜单ID */
                'menuId': number;
          }
        
  
        type getInfoUsingGET2Params =
          {
              /** 角色ID */
                'roleId': number;
          }
        
  
        type getUserUsingGETParams =
          {
              /** 用户ID */
                'userId': number;
          }
        
  
        type listUsingGET1Params =
          {
              /** 角色ID */
                'roleId'?: number;
              /** 角色权限 */
                'roleKey'?: string;
              /** 角色名称 */
                'roleName'?: string;
              /** 角色状态（0正常 1停用） */
                'status'?: string;
          }
        
  
        type listUsingGETParams =
          {
              /** 菜单名称 */
                'menuName'?: string;
              /** 菜单状态（0正常 1停用） */
                'status'?: string;
              /** 显示状态（0显示 1隐藏） */
                'visible'?: string;
          }
        
  
        type LoginBody =
          {
              /** 验证码（暂时不用） */
                'code'?: string;
              /** 用户密码 */
                'password'?: string;
              /** 用户名 */
                'username'?: string;
              /** 唯一标识（暂时不用） */
                'uuid'?: string;
          }
        
  
        type LoginVo =
          {
              /** 选中菜单列表 */
                'checkedKeys'?: number[];
              /** 下拉树结构列表 */
                'menus'?: TreeSelect[];
          }
        
  
        type MetaVo =
          {
              /** 设置该路由的图标，对应路径src/assets/icons/svg */
                'icon'?: string;
              /** 内链地址（http(s)://开头） */
                'link'?: string;
              /** 设置为true，则不会被 <keep-alive>缓存 */
                'noCache'?: boolean;
              /** 设置该路由在侧边栏和面包屑中展示的名字 */
                'title'?: string;
          }
        
  
        type R =
          {
                'code'?: number;
                'data'?: Record<string, any>;
                'msg'?: string;
          }
        
  
        type removeUsingDELETE1Params =
          {
              /** 角色ID集合{1,2,3,4} */
                'roleIds': string;
          }
        
  
        type removeUsingDELETEParams =
          {
              /** 菜单ID */
                'menuId': number;
          }
        
  
        type RListRouterVo =
          {
                'code'?: number;
                'data'?: RouterVo[];
                'msg'?: string;
          }
        
  
        type RListSysMenu =
          {
                'code'?: number;
                'data'?: SysMenu[];
                'msg'?: string;
          }
        
  
        type RListSysRole =
          {
                'code'?: number;
                'data'?: SysRoleRes[];
                'msg'?: string;
          }
        
  
        type RListTreeSelect =
          {
                'code'?: number;
                'data'?: TreeSelect[];
                'msg'?: string;
          }
        
  
        type RListUserEntity =
          {
                'code'?: number;
                'data'?: UserEntity[];
                'msg'?: string;
          }
        
  
        type RLoginVo =
          {
                'code'?: number;
                'data'?: LoginVo;
                'msg'?: string;
          }
        
  
        type roleMenuTreeselectUsingGETParams =
          {
              /** 角色ID */
                'roleId': number;
          }
        
  
        type RouterVo =
          {
              /** 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面 */
                'alwaysShow'?: boolean;
              /** 子路由 */
                'children'?: RouterVo[];
              /** 组件地址 */
                'component'?: string;
              /** 是否隐藏路由，当设置 true 的时候该路由不会再侧边栏出现 */
                'hidden'?: boolean;
              /** 其他元素 */
                'meta'?: MetaVo;
              /** 路由名字 */
                'name'?: string;
              /** 路由地址 */
                'path'?: string;
              /**  路由参数：如 {"id": 1, "name": "ry"} */
                'query'?: string;
              /** 重定向地址，当设置 noRedirect 的时候该路由在面包屑导航中不可被点击 */
                'redirect'?: string;
          }
        
  
        type Rstring =
          {
                'code'?: number;
                'data'?: string;
                'msg'?: string;
          }
        
  
        type RSysMenu =
          {
                'code'?: number;
                'data'?: SysMenu;
                'msg'?: string;
          }
        
  
        type RSysRole =
          {
                'code'?: number;
                'data'?: SysRoleRes;
                'msg'?: string;
          }
        
  
        type RUserEntity =
          {
                'code'?: number;
                'data'?: UserEntity;
                'msg'?: string;
          }
        
  
        type RUserInfoVo =
          {
                'code'?: number;
                'data'?: UserInfoVo;
                'msg'?: string;
          }
        
  
        type saveUsingPOSTParams =
          {
              /** 用户手机 */
                'mobile'?: string;
              /** 用户密码 */
                'password'?: string;
              /** 用户id */
                'userId'?: number;
              /** 用户名称 */
                'username'?: string;
          }
        
  
        type SysMenu =
          {
              /** 子菜单 */
                'children'?: SysMenu[];
              /** 组件路径 */
                'component'?: string;
              /** 创建者 */
                'createBy'?: string;
              /** 创建时间(yyyy-MM-dd HH:mm:ss) */
                'createTime'?: string;
              /** 菜单图标 */
                'icon'?: string;
              /** 是否缓存（0缓存 1不缓存） */
                'isCache'?: string;
              /** 是否为外链（0是 1否） */
                'isFrame'?: string;
              /** 菜单ID */
                'menuId'?: number;
              /** 菜单名称 */
                'menuName'?: string;
              /** 类型（M目录 C菜单 F按钮） */
                'menuType'?: string;
              /** 显示顺序 */
                'orderNum'?: number;
                'params'?: Record<string, any>;
              /** 父菜单ID */
                'parentId'?: number;
              /** 父菜单名称 */
                'parentName'?: string;
              /** 路由地址 */
                'path'?: string;
              /** 权限字符串 */
                'perms'?: string;
              /** 路由参数 */
                'query'?: string;
              /** 备注 */
                'remark'?: string;
              /** 菜单状态（0正常 1停用） */
                'status'?: string;
              /** 更新者 */
                'updateBy'?: string;
              /** 更新时间(yyyy-MM-dd HH:mm:ss) */
                'updateTime'?: string;
              /** 显示状态（0显示 1隐藏） */
                'visible'?: string;
          }
        
  
        type SysRole =
          {
                'admin'?: boolean;
              /** 创建者 */
                'createBy'?: string;
              /** 创建时间(yyyy-MM-dd HH:mm:ss) */
                'createTime'?: string;
              /** (暂时不用)数据范围(暂时不用) */
                'dataScope'?: string;
              /** 删除标志（0代表存在 2代表删除） */
                'delFlag'?: string;
                'deptCheckStrictly'?: boolean;
              /** (暂时不用)部门组（数据权限） */
                'deptIds'?: number[];
              /**  用户是否存在此角色标识 默认不存在 */
                'flag'?: boolean;
                'menuCheckStrictly'?: boolean;
              /** 菜单组 */
                'menuIds'?: number[];
                'params'?: Record<string, any>;
              /** 角色菜单权限 */
                'permissions'?: string[];
              /** 备注 */
                'remark'?: string;
              /** 角色ID */
                'roleId'?: number;
              /** 角色权限 */
                'roleKey'?: string;
              /** 角色名称 */
                'roleName'?: string;
              /** 角色排序 */
                'roleSort'?: number;
              /** 角色状态（0正常 1停用） */
                'status'?: string;
              /** 更新者 */
                'updateBy'?: string;
              /** 更新时间(yyyy-MM-dd HH:mm:ss) */
                'updateTime'?: string;
          }
        
  
        type SysRoleReq =
          {
              /** 创建者 */
                'createBy'?: string;
              /** 创建时间(yyyy-MM-dd HH:mm:ss) */
                'createTime'?: string;
              /** (暂时不用)数据范围(暂时不用) */
                'dataScope'?: string;
              /** 删除标志（0代表存在 2代表删除） */
                'delFlag'?: string;
                'deptCheckStrictly'?: boolean;
              /** (暂时不用)部门组（数据权限） */
                'deptIds'?: number[];
              /**  用户是否存在此角色标识 默认不存在 */
                'flag'?: boolean;
                'menuCheckStrictly'?: boolean;
              /** 菜单组 */
                'menuIds'?: number[];
                'params'?: Record<string, any>;
              /** 角色菜单权限 */
                'permissions'?: string[];
              /** 备注 */
                'remark'?: string;
              /** 角色ID */
                'roleId'?: number;
              /** 角色权限 */
                'roleKey'?: string;
              /** 角色名称 */
                'roleName'?: string;
              /** 角色排序 */
                'roleSort'?: number;
              /** 角色状态（0正常 1停用） */
                'status'?: string;
              /** 更新者 */
                'updateBy'?: string;
              /** 更新时间(yyyy-MM-dd HH:mm:ss) */
                'updateTime'?: string;
          }
        
  
        type SysRoleRes =
          {
                'admin'?: boolean;
              /** 创建者 */
                'createBy'?: string;
              /** 创建时间(yyyy-MM-dd HH:mm:ss) */
                'createTime'?: string;
              /** (暂时不用)数据范围(暂时不用) */
                'dataScope'?: string;
              /** 删除标志（0代表存在 2代表删除） */
                'delFlag'?: string;
                'deptCheckStrictly'?: boolean;
              /** (暂时不用)部门组（数据权限） */
                'deptIds'?: number[];
              /**  用户是否存在此角色标识 默认不存在 */
                'flag'?: boolean;
                'menuCheckStrictly'?: boolean;
              /** 菜单组 */
                'menuIds'?: number[];
                'params'?: Record<string, any>;
              /** 角色菜单权限 */
                'permissions'?: string[];
              /** 备注 */
                'remark'?: string;
              /** 角色ID */
                'roleId'?: number;
              /** 角色权限 */
                'roleKey'?: string;
              /** 角色名称 */
                'roleName'?: string;
              /** 角色排序 */
                'roleSort'?: number;
              /** 角色状态（0正常 1停用） */
                'status'?: string;
              /** 更新者 */
                'updateBy'?: string;
              /** 更新时间(yyyy-MM-dd HH:mm:ss) */
                'updateTime'?: string;
          }
        
  
        type SysUser =
          {
                'admin'?: boolean;
              /** 用户头像 */
                'avatar'?: string;
              /** 创建者 */
                'createBy'?: string;
              /** 创建时间(yyyy-MM-dd HH:mm:ss) */
                'createTime'?: string;
              /**  删除标志（0代表存在 2代表删除） */
                'delFlag'?: string;
              /** 部门ID */
                'deptId'?: number;
              /** 用户邮箱 */
                'email'?: string;
              /** 最后登录时间 */
                'loginDate'?: string;
              /** 最后登录IP */
                'loginIp'?: string;
              /** 用户昵称 */
                'nickName'?: string;
                'params'?: Record<string, any>;
              /** 密码 */
                'password'?: string;
              /** 手机号码 */
                'phonenumber'?: string;
              /** 备注 */
                'remark'?: string;
              /** 角色ID */
                'roleId'?: number;
              /** 角色组 */
                'roleIds'?: number[];
              /** 角色对象 */
                'roles'?: SysRole[];
              /** 用户性别 0=男,1=女,2=未知 */
                'sex'?: string;
              /** 帐号状态（0正常 1停用） */
                'status'?: string;
              /** 更新者 */
                'updateBy'?: string;
              /** 更新时间(yyyy-MM-dd HH:mm:ss) */
                'updateTime'?: string;
              /** 用户ID */
                'userId'?: number;
              /** 用户账号 */
                'userName'?: string;
          }
        
  
        type SysUserRole =
          {
                'roleId'?: number;
                'userId'?: number;
          }
        
  
        type TableDataInfo =
          {
                'code'?: number;
                'msg'?: string;
                'rows'?: Record<string, any>[];
                'total'?: number;
          }
        
  
        type TreeSelect =
          {
              /** 子节点 */
                'children'?: TreeSelect[];
              /** 节点ID */
                'id'?: number;
              /** 节点名称 */
                'label'?: string;
          }
        
  
        type treeselectUsingGETParams =
          {
              /** 菜单名称 */
                'menuName'?: string;
              /** 菜单状态（0正常 1停用） */
                'status'?: string;
              /** 显示状态（0显示 1隐藏） */
                'visible'?: string;
          }
        
  
        type unallocatedListUsingGETParams =
          {
              /** 手机号码 */
                'phonenumber'?: string;
              /** 角色ID */
                'roleId': number;
              /** 用户账号 */
                'userName'?: string;
          }
        
  
        type UserEntity =
          {
              /** 用户手机 */
                'mobile'?: string;
              /** 用户密码 */
                'password'?: string;
              /** 用户ID */
                'userId'?: number;
              /** 用户名称 */
                'username'?: string;
          }
        
  
        type UserInfoVo =
          {
              /** 权限集合 */
                'permissions'?: string[];
              /** 角色集合 */
                'roles'?: string[];
              /** 用户基本信息 */
                'user'?: SysUser;
          }
        
  
}
