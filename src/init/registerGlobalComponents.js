
 
import Dialog from "@/shared/components/dialog/Index.js"
import MoveMixin from "@/shared/mixins/move.js"
import DropSizeMixin from "@/shared/mixins/dropSize.js"


export default function(Vue){ 

    AppWindow.Plugins.Dialog = Dialog;
    Vue.mixin(MoveMixin);
    Vue.mixin(DropSizeMixin);
}



