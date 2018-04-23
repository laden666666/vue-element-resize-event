import {onelresize} from './elresizeEvent'

export default {
    inserted: function (el) {
        onelresize(el, function(){
            // 创建
            var evt = document.createEvent("HTMLEvents");
            // 初始化，事件类型，是否冒泡，是否阻止浏览器的默认行为
            evt.initEvent("elresize", false, false);
            // 触发
            el.dispatchEvent(evt);
        })
    }
}