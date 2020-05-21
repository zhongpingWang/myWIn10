<template>
<div class="startListBox">
    <ul class="startList">
        <li class="startItem">
            <i class="account-iconfont-guanji account-iconfont"></i>
            <span class="text">设置</span>
        </li>
        <li class="startItem">
            <i class="account-iconfont-guanji account-iconfont"></i>
            <span class="text">退出</span>
        </li>
    </ul>
</div>
</template>

<style lang="less" scoped>
.startListBox {
    width: 200px;
    position: fixed;
    bottom: 45px;
    left: 0px;
    height: 400px;
    background: rgba(0, 0, 0, .9);

    .startList {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: left;

        .startItem {
            align-items: flex-end;
            padding-left: 8px;
            &:hover{
                background: rgba(255,255,255,.1);
            }
            .text{
                margin-left: 8px;
            }
        }
    }

}
</style>
