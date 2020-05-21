<template>
    <div class="appItemInstance" v-if="AppItemObj.type!=0" @dblclick="_showDialog">
        <i class="account-iconfont" :class="[AppItemObj.iconName || 'account-iconfont-error']"></i>
        <div class="text">{{AppItemObj.text || ''}}</div>
    </div>
</template>

<script>
export default {
    
    props:{
        AppItemObj:{
            type:Object
        }
    },

    methods: {
        _showDialog(){
            AppWindow.Plugins.Dialog({
                showMask:false,
                title:this.AppItemObj.text
            }); 
        }
    },

}
</script>

<style lang="less" scoped>
.appItemInstance{
    text-align: center;
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border:1px transparent solid;

    &:hover{
        border:1px #000 dashed;
        background: rgba(255,255,255,.3);
    }
    .account-iconfont{ 
        font-size: 34px;
    }
    .text{
        margin-top: 8px;
    }
}

</style>