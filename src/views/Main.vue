<template>
<div class="windowMian">
    <ul class="appbox">
        <li class="appItem" v-for="(item,index) in applist" :key="index">
             <AppItem :AppItemObj="item"></AppItem>
        </li>
    </ul>

</div>
</template>

<script>
import AppItem from "@/components/desktop/AppItem.vue"


export default {


    components:{
        AppItem
    },

    data() {
        return {
            //type:0：空的  1 快捷方式 2：实体
            applist: [{
                key:"recycle",
                type:1,
                iconName:"account-iconfont-huishouzhan",
                text:"回收站"
            },{
                key:"icomputer",
                type:1,
                iconName:"account-iconfont-diannao",
                text:"我的电脑"
            },{
                key:"fromDesign",
                type:1,
                iconName:"account-iconfont-biaodansheji",
                text:"表单设计"
            },{
                key:"appShop",
                type:1,
                iconName:"account-iconfont-shopapps",
                text:"应用市场"
            }]
        }
    },


    created() {
        for (var i = 0; i < 256; i++) { 
            this.applist.push({
                type:0
            }); 

        }
    },
}
</script>

<style lang="less" scoped>
.windowMian {
    height: 100%;

    .appbox {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100%;
        justify-items: center;
        align-items: center;
    }

    .appItem {
        width: 100px;
        height: 100px;
        border: 1px transparent solid;
        margin-top: 5px;
    }
}
</style>
