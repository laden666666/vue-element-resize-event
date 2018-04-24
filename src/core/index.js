import elresizeEventDirective from './elresizeEventDirective'
import Elresize from './Elresize'

function install(Vue, options) {
    Vue.directive('elresize', elresizeEventDirective)
    Vue.component('Elresize', Elresize)
}

export {
    install
}