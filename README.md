# vue-element-resize-event
扩展vue的事件，使其可以监听支持元素尺寸变化

## npm
暂未完成，下一次更新就放上去

## 原理
https://blog.crimx.com/2017/07/15/element-onresize/

## 使用
使用 **v-elresize** 指令，监听elresize事件。要求div的position值不能为static
```
<div :style="{width: width + 'px', height: height + 'px'}" v-elresize @elresize="test"></div>
```
使用 **Elresize** 控件，监听elresize事件
```
<Elresize :style="{width: width + 'px', height: height + 'px'}" @elresize="test"></Elresize>
```