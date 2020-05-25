<template>
<div class="appItemInstance" v-if="AppItemObj.type!=0" @dblclick="_showDialog">
    <i class="account-iconfont" :class="[AppItemObj.iconName || 'account-iconfont-error']"></i>
    <div class="text">{{AppItemObj.text || ''}}</div>
</div>
</template>

<script>

import Vue from "vue";

import {
    mapActions,
    mapGetters
} from "vuex"

import AppShop from "../shops/Shops"
let AppShopConstructor = Vue.extend(AppShop);

import FormDesign from "../formDesign/FormDesign.vue"
let FormDesignConstructor = Vue.extend(FormDesign);

export default {

    props: {
        AppItemObj: {
            type: Object
        }
    },

    methods: {

        ...mapActions({
            addNewWindow:"addNewWindow"
        }),

        //新疆窗口
        _showDialog() {

            
            let Options = {
                message:false,
                showMask: false,
                showFooter:false,
                title: this.AppItemObj.text
            };

            let key = this.AppItemObj.key;

            if(key=="appShop"){
                Options.Constructor = AppShopConstructor;
            }else if(key=="fromDesign"){
                 Options.Constructor = FormDesignConstructor;
            }

            let DialogObj = AppWindow.Plugins.Dialog(Options);

            this.addNewWindow({
                id:DialogObj._uid,
                data: DialogObj.$props.Settings
            });
             
            
        }
    },

}
</script>

<style lang="less" scoped>
.appItemInstance {
    text-align: center;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px transparent solid;

    &:hover {
        border: 1px #000 dashed;
        background: rgba(255, 255, 255, .3);
    }

    .account-iconfont {
        font-size: 34px;
    }

    .text {
        margin-top: 8px;
    }
}
</style>
