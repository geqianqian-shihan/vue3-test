import { defineStore } from "pinia";
import { otherState } from "@/pinia/other.js";

// import Name from '@/components/Name.vue';

export const useStore = defineStore({ 
    // id 必须 在所有 store中 唯一
    id: 'piniaId',
    // state: 返回对象的函数
    state: () => ({
        countPinia: 1
    }),
    getters: {
        countPow2(state) {
            return state.count ** 2;
        },
        countPow2Getter() {
            return this.countPow2
        },
        // 使用其他 store
        otherStoreCount(state) {
            // 这里时其他的 store 调用获取 store 就和在 setup 中一样
            const otherStore = piniaOtherId();
            return otherStore.count;
        }
    }
 });