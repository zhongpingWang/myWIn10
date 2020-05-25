<template>
<div id="windowsTaskBar">
    <ul>
        <li class="itemTask winStart" @click="_showStartList">
            <i class="account-iconfont account-iconfont-windows"></i>
            <StartLiST v-if="isShowStartList"></StartLiST>
        </li>

        <li @click="_selectedDialog(item)" :class="{selected:item.selected}" class="itemTask" v-for="(item,index) in WindowsStore.WinDialogs" :key="index">
            {{item.data.title}}
        </li>
    </ul>

</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex"

import StartLiST from "./components/StartList.vue"

export default {

    computed: {
        ...mapGetters({
            WindowsStore: "WindowsStore"
        })
    },

    data() {

        return {
            isShowStartList: false
        }
    },

    components: {
        StartLiST
    },

    methods: {

        ...mapActions({
            activeWindow:"activeWindow"
        }),

        //选中dialog
        _selectedDialog(item){
            this.activeWindow(item);
        },

        //显示开始菜单
        _showStartList() {
            this.isShowStartList = true;
        }
    },

    mounted() {

        var that = this;

        $("body").on("click", function (event) {

            if ($(event.target).closest(".winStart").length <= 0) {
                that.isShowStartList = false;
            }

        });

    },

}
</script>

<style lang="less" scoped>
#windowsTaskBar {
    position: fixed;
    bottom: 0px;
    background: #000;
    color: #fff;
    width: 100%;
    height: 45px;
    line-height: 45px;

    .itemTask {
        text-align: center;
        float: left;
        min-width: 50px;
        font-size: 12px;
        overflow: hidden;
        padding: 5px;
        box-sizing: border-box;
        line-height: 38px;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100px;
        cursor: default;

        &.selected{
            background: rgba(255, 255, 255, .3);
        }

        &:hover {
            background: rgba(255, 255, 255, .2);
        }

        .account-iconfont {
            font-size: 20px;
        }
    }

}
</style>
