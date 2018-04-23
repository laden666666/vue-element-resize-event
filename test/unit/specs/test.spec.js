import Vue from 'vue'
import ElResize from '../../../dist/vue-element-resize-event'

Vue.use(ElResize)

describe('ElResize', () => {
    it('elresize directive test', async () => {
        const Constructor = Vue.extend({
            data: function(){
                return {
                    width: '200',
                    height: '200',
                    resizeCount: 0
                }
            },
            methods: {
                test(e){
                    this.resizeCount++
                },
                resize(){
                    this.width = '300'
                    this.height = '100'
                    debugger
                }
            },
            template: 
                `<div class="box" :style="{width: width + 'px', height: height + 'px'}" v-elresize @elresize="test">
                    resize count : <span id="resizeCount">{{resizeCount}}</span>
                    <button id="resize" @click="resize">resize</button>
                </div>`
        })
        const vm = new Constructor().$mount()

        vm.$el.querySelector('#resize').click()

        await new Promise(r=>{
            setTimeout(function(){
                expect(vm.$el.querySelector('#resizeCount').textContent).to.equal('2')
                r()
            }, 100)
        })
    })
    
    it('Elresize component test', async () => {
        const Constructor = Vue.extend({
            data: function(){
                return {
                    width: '200',
                    height: '200',
                    resizeCount: 0
                }
            },
            methods: {
                test(e){
                    this.resizeCount++
                },
            },
            template: 
                `<Elresize class="box" :style="{width: width + 'px', height: height + 'px'}" @elresize="test">
                    resize count : <span id="resizeCount2">{{resizeCount}}</span>
                </Elresize>`
        })
        const vm = new Constructor().$mount()

        vm.width = 300
        vm.height = 100

        await new Promise(r=>{
            setTimeout(function(){
                expect(vm.$el.querySelector('#resizeCount2').textContent).to.equal('2')
                r()
            })
        })
    })
})
