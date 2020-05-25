import * as Types from './mutationTypes.js'
import $http from '@/api/http.js'


export default { 

    //最大化
    maxDialog({commit},params){
        commit(Types.MAX_DIALOG,params.payload || params);
    },

    //最小化
    minDialog({commit},params){
        commit(Types.MIN_DIALOG,params.payload || params);
    },

    //关闭窗口
    closeDialog({commit},params){ 
        commit(Types.CLOSE_WINDOW,params.payload || params);
    },

    //激活窗口
    activeWindow({commit},params){  
        commit(Types.ACTIVE_WINDOW,params.payload || params);
    },

    //添加新的窗口
    addNewWindow({commit},params){
        commit(Types.ADD_NEW_WINDOW,params);
    }, 

    //登陆
    register({ commit }, params) {

        $http.post({

            URLType: "register",

            data: params.data,

            callback: function (data) {

                if (data.code == 0) { 
                    params.callback && params.callback(data);
                } else {
                    params.callback && params.callback(data);
                }
            }

        });

    },

    //登陆
    login({ commit }, params) {

        $http.post({

            URLType: "login",

            data: params.data,

            callback: function (data) {

                if (data.code == 0) {
                    commit(Types.LOGIN, data);
                    params.callback && params.callback(data);
                } else {
                    params.callback && params.callback(data);
                }
            }

        });

    }
}