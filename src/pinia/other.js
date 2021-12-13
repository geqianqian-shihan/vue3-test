import { defineStore } from "pinia";

export const otherState = defineStore({ 
    // id 必须 在所有 store中 唯一
    id: 'piniaOtherId',
    // state: 返回对象的函数
    state: () => ({
        countPinia: 12
    })
 });