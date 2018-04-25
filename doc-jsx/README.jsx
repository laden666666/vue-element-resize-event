<doc>
    <h1>vue-element-resize-event</h1>
    <p>一个扩展vue的时间，使其可以监听普通元素的resize事件。HTML中如果在窗口或框架被调整大小时发生resize事件，但是元素尺寸变化的时候却没有对应的事件。但是基于js的奇巧淫技可以模拟出这个事件。</p>
    <p>模拟的方法主要有两种：<a href="https://github.com/KyleAMathews/element-resize-event">监听scroll事件</a>和嵌入<a href="https://github.com/developit/simple-element-resize-detector">object（iframe）</a>。因为object（iframe）很耗费资源，而且会被CSP策略限制，所以vue-element-resize-event选用了第一种方法。</p>

    <h2>安装</h2>
    <code>{
`npm install vue-element-resize-event`
    }</code>
    <p>可以采用插件形式的全局安装：</p>
    <code>{
`import Vue from 'vue'
import * as ElResize from 'vue-element-resize-event'
Vue.use(ElResize)
`
    }</code>
    <p>也可以采用局部安装：</p>
    <code>{
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
    <p>使用<span>v-elresize</span>指令监听elresize事件。要求v-elresize所在的元素的position值不能为static：</p>
    <code>{
`<div style="position: relative;" v-elresize @elresize="test"></div>
</doc>`
    }</code>
    <p>使用<span>Elresize</span>控件监听elresize事件：</p>
    <code>{
`<Elresize @elresize="test"></Elresize>`
    }</code>
    <p>大家可以结合项目的需求选用事件或者是指令。</p>
</doc>
    