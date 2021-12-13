import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 状态管理
import { createPinia } from 'pinia';
// eventBus
import mitt from 'mitt';

// import { store } from './store';
import store from './store';

// Element 相关 ==== start
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 仅引入一个图标
// import { Avatar } from '@element-plus/icons';

// Element 相关 ==== end 

// 阿里图标
import '@/assets/font/iconfont.css';

// windi
import 'virtual:windi.css';


let app = createApp(App);

app.use(router)
    .use(store)
    .use(ElementPlus)
    .use(createPinia())
    // .component('expand',Avatar)
    .mount('#app');



// eventBus 在 vue 3 中全局实例要挂载在 app.config.globalProperties
app.config.globalProperties.$myhub = new mitt();

// 应用 api
// 1、component 注册或检索全局组件
// app.component('test', import("@/views/index/index.vue"));
// console.log(app.component('test'));







