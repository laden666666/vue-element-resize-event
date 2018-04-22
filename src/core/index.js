import elresizeEventDirective from './elresizeEventDirective'

export default {
    install: function (Vue, options) {
        Vue.directive('elresize', elresizeEventDirective)
    }
}