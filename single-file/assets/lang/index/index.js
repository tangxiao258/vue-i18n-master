function getLang() {
    return {
        en: {
            title: 'FBMS',
            navbar: [
                {
                    component: 'Operators'
                },
                {
                    component: 'Customer Analysis',
                    children: [
                        {
                            component: 'Active'
                        },
                        {
                            component: 'Remain'
                        },
                        {
                            component: 'Region'
                        }
                    ]
                },
                {
                    component: 'Sales'
                }
            ]
        },
        zh: {
            title: '后台管理系统',
            navbar: [
                {
                    component: '操作员管理'
                },
                {
                    component: '用户分析',
                    children: [
                        {
                            component: '活跃度'
                        },
                        {
                            component: '留存率'
                        },
                        {
                            component: '地域分布'
                        }
                    ]
                },
                {
                    component: '销售分析'
                }
            ]
        }
    };
};