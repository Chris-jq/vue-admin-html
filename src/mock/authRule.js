/**
 * Created by lk on 18/4/28.
 */

const index = {
    'data': {
        'merge_list': [
            {
                'id': 1,
                'pid': 0,
                'name': 'user_manage',
                'title': '用户管理',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 2,
                        'pid': 1,
                        'name': 'user_manage/admin',
                        'title': '管理组',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 3,
                                'pid': 2,
                                'name': 'admin/admin/index',
                                'title': '管理员管理',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [
                                    {
                                        'id': 4,
                                        'pid': 3,
                                        'name': 'admin/admin/save',
                                        'title': '添加管理员',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 5,
                                        'pid': 3,
                                        'name': 'admin/admin/edit',
                                        'title': '编辑管理员',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 6,
                                        'pid': 3,
                                        'name': 'admin/admin/delete',
                                        'title': '删除管理员',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    }
                                ],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 7,
                                'pid': 2,
                                'name': 'admin/role/index',
                                'title': '角色管理',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [
                                    {
                                        'id': 8,
                                        'pid': 7,
                                        'name': 'admin/role/save',
                                        'title': '添加角色',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 9,
                                        'pid': 7,
                                        'name': 'admin/role/edit',
                                        'title': '编辑角色',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 10,
                                        'pid': 7,
                                        'name': 'admin/role/delete',
                                        'title': '删除角色',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 11,
                                        'pid': 7,
                                        'name': 'admin/role/auth',
                                        'title': '角色授权',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    }
                                ],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 12,
                                'pid': 2,
                                'name': 'admin/authrule/index',
                                'title': '权限管理',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [
                                    {
                                        'id': 13,
                                        'pid': 12,
                                        'name': 'admin/authrule/save',
                                        'title': '添加权限',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 14,
                                        'pid': 12,
                                        'name': 'admin/authrule/edit',
                                        'title': '编辑权限',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 15,
                                        'pid': 12,
                                        'name': 'admin/authrule/delete',
                                        'title': '删除权限',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    }
                                ],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                            }
                        ],
                        'level': 2,
                        'html': '&nbsp;&nbsp;├&nbsp;'
                    }
                ],
                'level': 1,
                'html': '&nbsp;'
            },
            {
                'id': 16,
                'pid': 0,
                'name': 'setting',
                'title': '设置',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 17,
                        'pid': 16,
                        'name': 'admin/wxconf/index',
                        'title': '小程序',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 18,
                                'pid': 17,
                                'name': 'admin/wxconf/save',
                                'title': '保存修改',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;└&nbsp;'
                            }
                        ],
                        'level': 2,
                        'html': '&nbsp;&nbsp;├&nbsp;'
                    }
                ],
                'level': 1,
                'html': '&nbsp;'
            }
        ],
        'tree_list': [
            {
                'id': 1,
                'pid': 0,
                'name': 'user_manage',
                'title': '用户管理',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 2,
                        'pid': 1,
                        'name': 'user_manage/admin',
                        'title': '管理组',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 3,
                                'pid': 2,
                                'name': 'admin/admin/index',
                                'title': '管理员管理',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [
                                    {
                                        'id': 4,
                                        'pid': 3,
                                        'name': 'admin/admin/save',
                                        'title': '添加管理员',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 5,
                                        'pid': 3,
                                        'name': 'admin/admin/edit',
                                        'title': '编辑管理员',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 6,
                                        'pid': 3,
                                        'name': 'admin/admin/delete',
                                        'title': '删除管理员',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    }
                                ],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 7,
                                'pid': 2,
                                'name': 'admin/role/index',
                                'title': '角色管理',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [
                                    {
                                        'id': 8,
                                        'pid': 7,
                                        'name': 'admin/role/save',
                                        'title': '添加角色',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 9,
                                        'pid': 7,
                                        'name': 'admin/role/edit',
                                        'title': '编辑角色',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 10,
                                        'pid': 7,
                                        'name': 'admin/role/delete',
                                        'title': '删除角色',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 11,
                                        'pid': 7,
                                        'name': 'admin/role/auth',
                                        'title': '角色授权',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    }
                                ],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 12,
                                'pid': 2,
                                'name': 'admin/authrule/index',
                                'title': '权限管理',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [
                                    {
                                        'id': 13,
                                        'pid': 12,
                                        'name': 'admin/authrule/save',
                                        'title': '添加权限',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 14,
                                        'pid': 12,
                                        'name': 'admin/authrule/edit',
                                        'title': '编辑权限',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    },
                                    {
                                        'id': 15,
                                        'pid': 12,
                                        'name': 'admin/authrule/delete',
                                        'title': '删除权限',
                                        'status': 1,
                                        'condition': '',
                                        'listorder': 999,
                                        'children': [],
                                        'level': 4,
                                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                                    }
                                ],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                            }
                        ],
                        'level': 2,
                        'html': '&nbsp;&nbsp;├&nbsp;'
                    }
                ],
                'level': 1,
                'html': '&nbsp;'
            },
            {
                'id': 2,
                'pid': 1,
                'name': 'user_manage/admin',
                'title': '管理组',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 3,
                        'pid': 2,
                        'name': 'admin/admin/index',
                        'title': '管理员管理',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 4,
                                'pid': 3,
                                'name': 'admin/admin/save',
                                'title': '添加管理员',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 5,
                                'pid': 3,
                                'name': 'admin/admin/edit',
                                'title': '编辑管理员',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 6,
                                'pid': 3,
                                'name': 'admin/admin/delete',
                                'title': '删除管理员',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            }
                        ],
                        'level': 3,
                        'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 7,
                        'pid': 2,
                        'name': 'admin/role/index',
                        'title': '角色管理',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 8,
                                'pid': 7,
                                'name': 'admin/role/save',
                                'title': '添加角色',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 9,
                                'pid': 7,
                                'name': 'admin/role/edit',
                                'title': '编辑角色',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 10,
                                'pid': 7,
                                'name': 'admin/role/delete',
                                'title': '删除角色',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 11,
                                'pid': 7,
                                'name': 'admin/role/auth',
                                'title': '角色授权',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            }
                        ],
                        'level': 3,
                        'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 12,
                        'pid': 2,
                        'name': 'admin/authrule/index',
                        'title': '权限管理',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 13,
                                'pid': 12,
                                'name': 'admin/authrule/save',
                                'title': '添加权限',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 14,
                                'pid': 12,
                                'name': 'admin/authrule/edit',
                                'title': '编辑权限',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            },
                            {
                                'id': 15,
                                'pid': 12,
                                'name': 'admin/authrule/delete',
                                'title': '删除权限',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 4,
                                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                            }
                        ],
                        'level': 3,
                        'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
                    }
                ],
                'level': 2,
                'html': '&nbsp;&nbsp;├&nbsp;'
            },
            {
                'id': 3,
                'pid': 2,
                'name': 'admin/admin/index',
                'title': '管理员管理',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 4,
                        'pid': 3,
                        'name': 'admin/admin/save',
                        'title': '添加管理员',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 5,
                        'pid': 3,
                        'name': 'admin/admin/edit',
                        'title': '编辑管理员',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 6,
                        'pid': 3,
                        'name': 'admin/admin/delete',
                        'title': '删除管理员',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    }
                ],
                'level': 3,
                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 4,
                'pid': 3,
                'name': 'admin/admin/save',
                'title': '添加管理员',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 5,
                'pid': 3,
                'name': 'admin/admin/edit',
                'title': '编辑管理员',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 6,
                'pid': 3,
                'name': 'admin/admin/delete',
                'title': '删除管理员',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 7,
                'pid': 2,
                'name': 'admin/role/index',
                'title': '角色管理',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 8,
                        'pid': 7,
                        'name': 'admin/role/save',
                        'title': '添加角色',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 9,
                        'pid': 7,
                        'name': 'admin/role/edit',
                        'title': '编辑角色',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 10,
                        'pid': 7,
                        'name': 'admin/role/delete',
                        'title': '删除角色',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 11,
                        'pid': 7,
                        'name': 'admin/role/auth',
                        'title': '角色授权',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    }
                ],
                'level': 3,
                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 8,
                'pid': 7,
                'name': 'admin/role/save',
                'title': '添加角色',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 9,
                'pid': 7,
                'name': 'admin/role/edit',
                'title': '编辑角色',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 10,
                'pid': 7,
                'name': 'admin/role/delete',
                'title': '删除角色',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 11,
                'pid': 7,
                'name': 'admin/role/auth',
                'title': '角色授权',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 12,
                'pid': 2,
                'name': 'admin/authrule/index',
                'title': '权限管理',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 13,
                        'pid': 12,
                        'name': 'admin/authrule/save',
                        'title': '添加权限',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 14,
                        'pid': 12,
                        'name': 'admin/authrule/edit',
                        'title': '编辑权限',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    },
                    {
                        'id': 15,
                        'pid': 12,
                        'name': 'admin/authrule/delete',
                        'title': '删除权限',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 4,
                        'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
                    }
                ],
                'level': 3,
                'html': '&nbsp;&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 13,
                'pid': 12,
                'name': 'admin/authrule/save',
                'title': '添加权限',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 14,
                'pid': 12,
                'name': 'admin/authrule/edit',
                'title': '编辑权限',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 15,
                'pid': 12,
                'name': 'admin/authrule/delete',
                'title': '删除权限',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 4,
                'html': '&nbsp;&nbsp;│&nbsp;│&nbsp;├&nbsp;'
            },
            {
                'id': 16,
                'pid': 0,
                'name': 'setting',
                'title': '设置',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 17,
                        'pid': 16,
                        'name': 'admin/wxconf/index',
                        'title': '小程序',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [
                            {
                                'id': 18,
                                'pid': 17,
                                'name': 'admin/wxconf/save',
                                'title': '保存修改',
                                'status': 1,
                                'condition': '',
                                'listorder': 999,
                                'children': [],
                                'level': 3,
                                'html': '&nbsp;&nbsp;│&nbsp;└&nbsp;'
                            }
                        ],
                        'level': 2,
                        'html': '&nbsp;&nbsp;├&nbsp;'
                    }
                ],
                'level': 1,
                'html': '&nbsp;'
            },
            {
                'id': 17,
                'pid': 16,
                'name': 'admin/wxconf/index',
                'title': '小程序',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [
                    {
                        'id': 18,
                        'pid': 17,
                        'name': 'admin/wxconf/save',
                        'title': '保存修改',
                        'status': 1,
                        'condition': '',
                        'listorder': 999,
                        'children': [],
                        'level': 3,
                        'html': '&nbsp;&nbsp;│&nbsp;└&nbsp;'
                    }
                ],
                'level': 2,
                'html': '&nbsp;&nbsp;├&nbsp;'
            },
            {
                'id': 18,
                'pid': 17,
                'name': 'admin/wxconf/save',
                'title': '保存修改',
                'status': 1,
                'condition': '',
                'listorder': 999,
                'children': [],
                'level': 3,
                'html': '&nbsp;&nbsp;│&nbsp;└&nbsp;'
            }
        ]
    }
}

const save = {
    'data': {
        'id': '999',
        'pid': 0,
        'name': 'admin/test/test',
        'title': '测试',
        'status': '1',
        'condition': '',
        'listorder': 999,
        'update_time': 1524812649,
        'create_time': 1524812649
    }
}

const edit = {
    'data': 'success'
}

const del = {
    'data': 'success'
}

export default {
    index,
    save,
    edit,
    del
}
