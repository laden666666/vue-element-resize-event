import elresizeEventDirective from './elresizeEventDirective'
import Elresize from './Elresize'

export default {
    install: function (Vue, options) {
        Vue.directive('elresize', elresizeEventDirective)
        Vue.component('Elresize', Elresize)
    }
}