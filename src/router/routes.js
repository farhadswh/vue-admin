const routes = [
    { 
        path: '/', 
        component: () => import('@/layouts/DefaultLayout.vue'),
        redirect: "/dashboard",
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/pages/DashboardPage.vue'),
            },
            {
                path: 'userpanel',
                name: 'Userpanel',
                component: () => import('@/pages/UserpanelPage.vue'),
            },
        ]
    }
 ]

export default routes