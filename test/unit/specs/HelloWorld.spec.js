import Vue from 'vue'
import HelloWorld from '../../../src/dev/components/HelloWorld'

describe('HelloWorld.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()

        vm.$el.querySelector('#widthInput').value = 300
        setTimeout(function(){
            expect(vm.$el.querySelector('#resizeCount').textContent)
                .to.equal('1')
        })
       
    })
})
