import * as Types from './mutationTypes'

export default {

    //最大化
    [Types.MAX_DIALOG](state, params) {

        let uid = params.id;

        let WinDialogs = state.WinDialogs;

        for (var i = 0; i < WinDialogs.length; i++) {

            let item = WinDialogs[i];

            if (item.id == uid) {
                item.isMax = !item.isMax;
                break;
            }
        }
    },

    //最小化
    [Types.MIN_DIALOG](state, params) {

        let uid = params.id;

        let WinDialogs = state.WinDialogs;

        for (var i = 0; i < WinDialogs.length; i++) {

            let item = WinDialogs[i];

            if (item.id == uid) {
                item.isMin = true;
                break;
            }
        }
    },

    //关闭窗口
    [Types.CLOSE_WINDOW](state, params) {


        let uid = params._uid;

        let WinDialogs = state.WinDialogs;

        for (var i = 0; i < WinDialogs.length; i++) {

            let item = WinDialogs[i];

            if (item.id == uid) {
                state.WinDialogs.splice(i, 1);
                break;
            }


        }


    },

    //激活当前狂口
    [Types.ACTIVE_WINDOW](state, params) {

        let WinDialogs = state.WinDialogs;

        for (var i = 0; i < WinDialogs.length; i++) {

            let item = WinDialogs[i];

            if (item.id == params.id) {
                item.selected = true;
                item.isMin = false;
            } else {
                item.selected = false;
            }


        }
    },

    //添加新的窗口
    [Types.ADD_NEW_WINDOW](state, data) {

        for (var i = 0; i < state.WinDialogs.length; i++) {
            state.WinDialogs[i].selected = false;
        }

        data.selected = true;
        data.isMin = false;
        data.isMax = false;
        state.WinDialogs.push(data);
    },


    //登陆
    [Types.LOGIN](state, data) {
        state.UserInfo = data;
    }
}