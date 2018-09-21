<doc>
    <title>vue-element-resize-event</title>

    <npm-info version downloads license name="vue-element-resize-event"></npm-info>
    <browser-list Android=">=4.4" Firefox Chrome IE=">=9" iPhone Edge Safari/>

    <p><strong>vue-element-resize-event</strong>，简称elresize，是一个扩展vue事件的插件，使vue可以监听普通元素的resize事件。HTML中如果在页面或框架被调整大小时会触发resize事件，但是普通元素尺寸变化的时候却没有对应的事件。<strong>vue-element-resize-event</strong>基于js的奇巧淫技可以模拟出这个事件。</p>

    <h2>源码</h2>
    <p><a href="https://github.com/laden666666/vue-element-resize-event">github</a>，<a href="https://gitee.com/laden666666/vue-element-resize-event">码云</a></p>

    <h2>安装</h2>
    <code lang="javascript">{
`npm install vue-element-resize-event`
    }</code>
    <p>可以采用插件形式的全局安装：</p>
    <code lang="javascript">{
`import Vue from 'vue'
import * as ElResize from 'vue-element-resize-event'
Vue.use(ElResize)
`
    }</code>
    <p>也可以采用局部安装：</p>
    <code lang="javascript">{
`import {
    elresizeDirective,
    elresize,
} from 'vue-element-resize-event'

export default {
    ...
    directive: {
        elresizeDirective,
    }
    component: {
        elresize,
    },
}
`
    }</code>

    <h2>使用</h2>
    <p>vue-element-resize-event提供了两种使用方式——directive和component。</p>

    <h3>指令</h3>
    <p>使用<span>v-elresize</span>指令监听elresize事件。要求v-elresize所在的元素的position值不能为static：</p>
    <code lang="html">{
`<div style="position: relative;" v-elresize @elresize="test"></div>
</doc>`
    }</code>
    <html-example code>{
`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="./vue-element-resize-event.js"></script>
    <style>
        body, html{
            padding: 0;
            margin: 0;
        }
        .test{
            margin: 0;
            background: #e6e6e6;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            box-sizing: border-box;
        }
        .elresize{
            background: red;
            width: 100px;
            height: 100px;
            resize: both;
        }
        .box {
            position: relative;
            background: #2ecc71;
        }
        .label{
            width: 220px;
            height: 40px;
            line-height: 40px;
            text-align: left;
        }
        .title{
            width: 50px;
            display: inline-block;
        }
        .range{
            width: 140px;
            -webkit-appearance: none;
            background: #059CFA;
            height: 3px;
            outline: none;
            vertical-align: middle;
        }
        .range::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 26px;
            width: 26px;
            background: #fff;
            border-radius: 50%;
            border: solid 1px #ddd;
        }
    </style>

</head>
<body>

    <div id="app">
        <div class="test">
            <label class="label">
                <span class="title">width:</span>
                <input id="widthInput" type="range" class="range" max="200" min="100" v-model="width">px
            </label>

            <Elresize class="box" :style="{width: width + 'px', height: '100px'}" @elresize="test">
                resize count : {{resizeCount}}
            </Elresize>
        </div>
    </div>
    <script>
        Vue.use(vueElementResizeEvent)
        var app = new Vue({
            el: '#app',
            data: {
                width: '200',
                resizeCount: 0
            },
            methods: {
                test(e){
                    this.resizeCount++
                },
            }
        })
    </script>
</body>
</html>
`
    }</html-example>

    <h3>控件</h3>
    <p>使用<span>Elresize</span>控件监听elresize事件：</p>
    <code lang="html">{
`<Elresize @elresize="test"></Elresize>`
    }</code>
    <html-example code>{
`<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue"></script>
    <script src="./vue-element-resize-event.js"></script>
    <style>
        body, html{
            padding: 0;
            margin: 0;
        }
        .test{
            margin: 0;
            background: #e6e6e6;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            box-sizing: border-box;
        }
        .elresize{
            background: red;
            width: 100px;
            height: 100px;
            resize: both;
        }
        .box {
            position: relative;
            background: #2ecc71;
        }
        .label{
            width: 220px;
            height: 40px;
            line-height: 40px;
            text-align: left;
        }
        .title{
            width: 50px;
            display: inline-block;
        }
        .range{
            width: 140px;
            -webkit-appearance: none;
            background: #059CFA;
            height: 3px;
            outline: none;
            vertical-align: middle;
        }
        .range::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 26px;
            width: 26px;
            background: #fff;
            border-radius: 50%;
            border: solid 1px #ddd;
        }
    </style>

</head>
<body>

    <div id="app">
        <div class="test">
            <label class="label">
                <span class="title">width:</span>
                <input id="widthInput" type="range" class="range" max="200" min="100" v-model="width">px
            </label>

            <Elresize class="box" :style="{width: width + 'px', height: '100px'}" @elresize="test">
                resize count : {{resizeCount}}
            </Elresize>
        </div>
    </div>
    <script>
        Vue.use(vueElementResizeEvent)
        var app = new Vue({
            el: '#app',
            data: {
                width: '200',
                resizeCount: 0
            },
            methods: {
                test(e){
                    this.resizeCount++
                },
            }
        })
    </script>
</body>
</html>


`
    }</html-example>

    <h2>原理</h2>
    <p>模拟resize事件目前主要有两种：</p>
    <li>方法一，监听scroll事件：</li>
    <p>要求可以监听resize事件的元素的css的position属性不可以是static，然后创建两个和该元素等大的div，一个监听元素放大事件，一个监听元素缩小事件。两个div都是绝对定位，并且css的visibility属性是hidden，同时使用js将水平和垂直滚动条的值都设置大最大。实现的例子有：<a href="https://github.com/KyleAMathews/element-resize-event">KyleAMathews/element-resize-event</a></p>

    <li>方法二，监听object（iframe）的resize事件：</li>
    <p>同样要求可以监听resize事件的元素的css的position属性不可以是static，然后创建一个iframe或者object。因为frame和object可以监听resize事件，所以只要要求frame或object和被监听元素等大，就可以让frame或object的resize事件实现该元素的resize事件了。实现的例子有：<a href="https://github.com/developit/simple-element-resize-detector">developit/simple-element-resize-detector</a></p>

    <p>因为object（iframe）更耗费资源，而且会被CSP策略限制，所以vue-element-resize-event选用了第一种方法。</p>
</doc>
