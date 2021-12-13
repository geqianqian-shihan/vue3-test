import { createRouter, createWebHashHistory, useRoute } from 'vue-router';
import login from '../views/login/login.vue';

// 文件名不可以 service !!!
import Layout from '../views/layout/index.vue';

const routes = [
  { path: '/login', name: 'login', component: login },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    meta: { title: 'Layout' },
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/index/index.vue"),
        meta: { title: '首页', icon: 'test', noCache: true }
      },
      {
        path: "service",
        name: "service",
        component: () => import("@/views/serviceInfo/serviceInfo.vue"),
        meta: { title: '服务', icon: 'test', noCache: true }
      },
      {
        path: "search",
        name: "search",
        component: () => import("@/views/searchInfo/searchInfo.vue"),
        meta: { title: '搜索', icon: 'test', noCache: true }
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/testInfo/testInfo.vue"),
        meta: { title: '测试', icon: 'test', noCache: true },
        // beforeEnter: (to, from, next) => {
          // console.log(to, from);
          // 调用跳转到对应页面
          // next();
        // }
      },
    ]
  }
];



const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// 全局导航守卫
router.beforeEach(( to, form, next ) => {
  // 路由发生变化 修改页面 title
  if(to.meta.title){
    document.title = to.meta.title;
  }
  // 设置完 跳转对应页
  next();
  // next(false);   url 地址 重置到 form 地址
  // next(error); (2.4.0+)  导航终止 且 错误传递给  router.onError() 注册过的回调

  // ## 确保调用一次！  可以出现多次但 只能再所有路径不重叠时，否则钩子不会解析或报错
});

// 全局后置钩子
router.afterEach((to, form) => {
  // console.log(to);
  // console.log(form);
});

export default router;