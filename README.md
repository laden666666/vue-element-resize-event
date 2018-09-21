<h1 align="center">vue-element-resize-event</h1>
<p class="mydoc_api_npm-info" align="center">
            <a href="https://www.npmjs.com/package/vue-element-resize-event"><img src="https://img.shields.io/npm/v/vue-element-resize-event.svg" alt="Version"></a>
            <a href="https://www.npmjs.com/package/vue-element-resize-event"><img src="https://img.shields.io/npm/dm/vue-element-resize-event.svg" alt="Downloads"></a>
            <a href="https://www.npmjs.com/package/vue-element-resize-event"><img src="https://img.shields.io/npm/l/vue-element-resize-event.svg" alt="License"></a>
        </p>
<center>
    <table cellspacing="1" style="margin: 0 auto;font-size: 14px;background-color: #f9f9f9;color: #036;padding: 3px;border-radius: 4px;border: 1px solid rgba(220, 220, 220, .5);">
        <colgroup width="100" span="7" align="center"></colgroup>
        <tr style="height: 30px;">
            <th align="center">Android</td><th align="center">Firefox</td><th align="center">Chrome</td><th align="center">IE</td><th align="center">iPhone</td><th align="center">Edge</td><th align="center">Safari</td>
        </tr>
        <tr style="color: #000;line-height: 28px;font-weight: bold;">
            <td align="center" style="background-color: #60d848">>=4.4</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">>=9</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">√</td><td align="center" style="background-color: #60d848">√</td>
        </tr>
    </table>
</center>

 **vue-element-resize-event** ，简称elresize，是一个扩展vue事件的插件，使其可以监听普通元素的resize事件。HTML中如果在窗口或框架被调整大小时发生resize事件，但是元素尺寸变化的时候却没有对应的事件。但是基于js的奇巧淫技可以模拟出这个事件。

## 源码
[github](https://github.com/laden666666/vue-element-resize-event "") ，[码云](https://gitee.com/laden666666/vue-element-resize-event "") 


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

### 指令
使用v-elresize指令监听elresize事件。要求v-elresize所在的元素的position值不能为static：

```html
<div style="position: relative;" v-elresize @elresize="test"></div>
```
[demo](https://laden666666.github.io/vue-element-resize-event/directive.html "") 


### 控件
使用Elresize控件监听elresize事件：

```html
<Elresize @elresize="test"></Elresize>
```
[demo](https://laden666666.github.io/vue-element-resize-event/component.html "") 



## 原理
模拟resize事件目前主要有两种：

*   方法一，监听scroll事件：
要求可以监听resize事件的元素的css的position属性不可以是static，然后创建两个和该元素等大的div，一个监听元素放大事件，一个监听元素缩小事件。两个div都是绝对定位，并且css的visibility属性是hidden，同时使用js将水平和垂直滚动条的值都设置大最大。实现的例子有：[KyleAMathews/element-resize-event](https://github.com/KyleAMathews/element-resize-event "") 

*   方法二，监听object（iframe）的resize事件：
同样要求可以监听resize事件的元素的css的position属性不可以是static，然后创建一个iframe或者object。因为frame和object可以监听resize事件，所以只要要求frame或object和被监听元素等大，就可以让frame或object的resize事件实现该元素的resize事件了。实现的例子有：[developit/simple-element-resize-detector](https://github.com/developit/simple-element-resize-detector "") 

因为object（iframe）更耗费资源，而且会被CSP策略限制，所以vue-element-resize-event选用了第一种方法。


