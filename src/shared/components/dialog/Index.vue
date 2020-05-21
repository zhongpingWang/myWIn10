<template>
<div class="dialogSite" :class="[Settings.cssClass]">

    <div class="myDialogMask" v-if="Settings.showMask" :style="Settings.MarkStyle"></div>

    <div class="myDialogWapper-nouser" :style="Settings.Warpstyle">

        <div class="myDialog" :class="[Settings.cssClass]" :style="Settings.style">

            <div class="dialogHeader" v-if="Settings.showHeader" @mousedown="_bindMove($event)">
                <div class="rightOp">
                    <i class="account-iconfont account-iconfont-min ThemeDarkColorHover btnMin" @click="_close"></i>
                    <i class="account-iconfont account-iconfont-max ThemeDarkColorHover btnMax" @click="_close"></i>
                    <i class="account-iconfont account-iconfont-close ThemeDarkColorHover btnClose" @click="_close"></i>
                </div>

                <span class="title">{{Settings.title}}</span>
            </div>

            <div class="dialogBody">
                <div v-if="Settings.message" v-html="Settings.message"></div>
                <div v-if="Settings.Constructor" class="DConstructor"></div>
            </div>

            <div class="dialogFooter" v-if="Settings.showFooter">
                <span class="btn" @click="_close">取消</span>
                <span class="btn primary btnEnter" @click="_enter">确定</span>
            </div>

            <div @mousedown="_changeWindowSize($event)" class="moveSize"></div>
        </div>

    </div>

</div>
</template>

<script>
import store from '@/store/index.js'

export default {

    props: ["Settings"],

    methods: {

        //绑定移动
        _bindMove(event) {
            this.drag(event.target.parentNode, event);
        },
        
        //改变窗口大小
        _changeWindowSize(event){
            this.dragWindowSize(event,this.$el.querySelector(".myDialog"));
        },

        //关闭
        _close() {

            var result = true;

            if (this.Settings.canelCb) {
                result = this.Settings.canelCb();
            }

            if (result == false) {
                return;
            }

            this.close();
        },

        //确定
        _enter() {

            var result = true;

            if (this.Settings.okCb) {
                result = this.Settings.okCb();
            }

            if (result == false) {
                return;
            }

            this.close();
        },

        _setLeft: function () {

            //$(this.$el).find(".myDialog").height()

            let timer = setTimeout(() => {
                clearTimeout(timer);

                let $dialog = $(this.$el).find(".myDialog");
                let bdoyW = $("body").width() / 2;

                let leftW = bdoyW - ($dialog.width() / 2);
                $dialog.css({
                    left: `${leftW}px`
                });

            }, 10);

        }

    },

    mounted() {

        this._setLeft();

        if (this.Settings.Constructor) {

            this.Settings.close = this.close;

            let instance = new this.Settings.Constructor({
                store,
                propsData: {
                    Settings: this.Settings
                }
            });

            //实例化
            instance.vm = instance.$mount();

            this.$nextTick(function () {

                $(this.$el).find(".DConstructor").append(instance.vm.$el);

                let sourceClose = this.close;

                this.close = function (isAnimate, isNotCallabck) {
                    isAnimate = false
                    //这里是 如果 手动返回 false 在 关闭的时候 是否回调 看 参数了 如果没有返回 false  就 直接 关闭了 
                    if (!isNotCallabck) {

                        let result = this.Settings.canelCb && this.Settings.canelCb();

                        if (result == false) {
                            return;
                        }
                    }
                    instance.$destroy(true);
                    //元素 如果提前移除 动画里面 是空白的 dialog 移除的时候 元素 也会 移除 这里 就 不做 移除了
                    //instance.$el.parentNode && instance.$el.parentNode.removeChild(instance.$el);

                    //关闭回调已经 调用过了 不需要在回调了
                    sourceClose(isAnimate, true);
                }

            });

        }

    },
};
</script>

<style lang="less" scoped>
.myDialogMask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
    z-index: 1;
}

.myDialogWapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 45px;
    left: 0;
    overflow: auto;
    margin: 0;

}

.myDialog {
    position: absolute;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 500px;
    left: 50%;
    top: 50px;
    z-index: 2;
    overflow: hidden;

    .dialogHeader {
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px #ccc solid;

        .title {
            color: #303133;
            font-size: 14px;
            margin-left: 8px;
        }

        .rightOp {
            float: right;
            color: #777;

            .account-iconfont {
                width: 35px;
                display: inline-block;
                text-align: center;
                vertical-align: top;
                height: 30px;
                box-sizing: border-box;
            }

            .btnClose {
                padding-top: 4px;

                &:hover {
                    background: red;
                    color: #fff;
                }
            }

            .btnMax {
                font-size: 14px;
                padding-top: 5px;

                &:hover {
                    background: #ccc;
                }
            }

            .btnMin {
                padding-top: 5px;

                &:hover {
                    background: #ccc;
                }
            }
        }
    }

    .moveSize {
        position: absolute;
        bottom: 0px;
        right: 0px;
        width: 12px;
        height: 12px;

        cursor: nw-resize;
    }
}

.dialogBody {
    color: #606266;
    font-size: 14px;
    word-break: break-all;
}

.dialogFooter {
    padding: 10px 20px 20px;
    text-align: right;
    box-sizing: border-box;

    .btnEnter {
        margin-left: 10px;
    }
}
</style>
