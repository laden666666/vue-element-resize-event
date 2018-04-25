# vue-element-resize-event
一个扩展vue的时间，使其可以监听普通元素的resize事件。HTML中如果在窗口或框架被调整大小时发生resize事件，但是元素尺寸变化的时候却没有对应的事件。但是基于js的奇巧淫技可以模拟出这个事件。

模拟的方法主要有两种：[监听scroll事件](https://github.com/KyleAMathews/element-resize-event "") 和嵌入[object（iframe）](https://github.com/developit/simple-element-resize-detector "") 。因为object（iframe）很耗费资源，而且会被CSP策略限制，所以vue-element-resize-event选用了第一种方法。

## 安装
```javascript
npm install vue-element-resize-event
```
可以采用插件形式的全局安装：

```javascript
import Vue from 'vue'
import * as ElResize from 'vue-element-resize-event'
Vue.use(ElResize)

```
也可以采用局部安装：

```javascript
import {
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

```

## 使用
vue-element-resize-event提供了两种使用方式——directive和component。

使用v-elresize指令监听elresize事件。要求v-elresize所在的元素的position值不能为static：

```html
<div style="position: relative;" v-elresize @elresize="test"></div>
</doc>
```
使用Elresize控件监听elresize事件：

```html
<Elresize @elresize="test"></Elresize>
```
大家可以结合项目的需求选用事件或者是指令。



