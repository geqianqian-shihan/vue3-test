<template>
    <div class="app-wrapper">
        <el-row class="tac">
        <el-col :span="4">
            <!-- 增加 router 属性 点击范围 item -->
            <!-- mode="horizontal" -->
            <el-menu
            default-active="index"
            class="el-menu-vertical-demo"
            router>
                <el-menu-item index="index">
                    <i class="el-icon-menu"></i>
                    <span>首页</span>
                    <!-- 点击范围仅文字 -->
                    <!-- <router-link to="index">首页</router-link> -->
                </el-menu-item>
                <el-menu-item index="search">
                    <i class="el-icon-menu"></i>
                    <span>搜索</span>
                    <!-- 点击范围仅文字 -->
                    <!-- <router-link to="search">搜索</router-link> -->
                </el-menu-item>   
                <el-menu-item index="service">
                    <i class="el-icon-menu"></i>
                    <span>服务</span>
                    <!-- 点击范围仅文字 -->
                    <!-- <router-link to="service">搜索</router-link> -->
                </el-menu-item>   
                <el-menu-item index="test">
                    <i class="el-icon-menu"></i>
                    <span>测试</span>
                    <!-- 点击范围仅文字 -->
                    <!-- <router-link to="test">测试</router-link> -->
                </el-menu-item>   
            </el-menu>
        </el-col>
        <el-col :span="20">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index" :to="{ path: item.path}">{{item.meta.title}}</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
            </el-breadcrumb>
            <!-- <div style="font-size: 20px;">
                <edit style="width: 20px; height: 20px; margin-right: 8px;" />
                <share style="width: 20px; height: 20px; margin-right: 8px;" />
                <delete style="width: 20px; height: 20px; margin-right: 8px;" />
                <search style="width: 20px; height: 20px; margin-right: 8px;" />
            </div> -->
            <!-- 路由出口 -->
            <router-view/>
        </el-col>
        </el-row>
    </div>
</template>

<script>
import { ArrowRight } from '@element-plus/icons'
export default {
    data(){
        return {
            breadcrumb: []
        }
    },
    mounted(){
        console.log(this.$router.options);
        console.log(this.$route.matched);
    }
}
</script>

<style lang="">
    
</style>