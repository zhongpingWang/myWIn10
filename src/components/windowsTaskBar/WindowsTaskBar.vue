<template>
    <div id="windowsTaskBar">
        <ul>
            <li class="itemTask winStart" @click="_showStartList">
                <i class="account-iconfont account-iconfont-windows"></i>
                <StartLiST v-if="isShowStartList"></StartLiST>
            </li>
        </ul>

        
    </div>
</template>


<script>

import StartLiST from "./components/StartList.vue"

export default {

    data(){

        return {
            isShowStartList:false
        }
    },
    
    components:{
        StartLiST
    },


    methods: {

        //显示开始菜单
        _showStartList(){
            this.isShowStartList = true;
        }
    },


    mounted() {

        var that = this;
        
        $("body").on("click",function(event){ 
            
            if($(event.target).closest(".winStart").length <=0 ){
                that.isShowStartList = false;
            }

        });


    },



}
</script>

<style lang="less" scoped>

#windowsTaskBar{
    position: fixed;
    bottom: 0px;
    background: #000;
    color:#fff;
    width: 100%;
    height: 45px;
    line-height: 45px;
    .itemTask{
        text-align: center;
        float: left;
        width: 50px;
        &:hover{
            background: rgba(255,255,255,.2);
        }
        .account-iconfont{
            font-size: 20px;
        }
    }

}

</style>