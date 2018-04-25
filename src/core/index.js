import elresizeDirective from './elresizeEventDirective'
import Elresize from './Elresize'

function install(Vue, options) {
    Vue.directive('elresize', elresizeDirective)
    Vue.component('Elresize', Elresize)
}

export {
    install,
    elresizeDirective,
    elresize,
}