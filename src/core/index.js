import elresizeDirective from './elresizeEventDirective'
import Elresize from './Elresize'

function install(Vue, options) {
    Vue.directive('elresize', elresizeDirective)
    Vue.component('Elresize', Elresize)
}

const version = PLUGIN_VERSION

export {
    install,
    elresizeDirective,
    Elresize,
    version
}

export default {
    install,
    elresizeDirective,
    Elresize,
    version
}
