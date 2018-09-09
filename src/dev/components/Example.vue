<template>
    <div class="test">
        <label class="label">
            <span class="title">width:</span>
            <input id="widthInput" type="range" class="range" max="200" min="100" v-model="width">px
        </label>
        <label class="label">
            <span class="title">height:</span>
            <input id="heightInput" type="range" class="range" max="200" min="100" v-model="height">px
        </label>
        <label class="label">
            <span class="title">v-if:</span>
            <input clss="checkbox" type="checkbox" v-model="vif">
        </label>

        <!-- <Elresize class="box" v-if="vif" :style="{width: width + 'px', height: height + 'px'}" @elresize="test">
            resize count : {{resizeCount}}
        </Elresize> -->

        <div class="box" v-if="vif" :style="{width: width + 'px', height: height + 'px'}" v-elresize @elresize="test">
            resize count : {{resizeCount}}
        </div>


    </div>
</template>

<script>
export default {
    data () {
        return {
            width: '200',
            height: '200',
            resizeCount: 0,
            vif: true,
        }
    },
    methods: {
        test(e){
            this.resizeCount++
        },
        toggleIf(e){
            this.vif = !this.vif
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .test{
        margin: 0;
        background: #e6e6e6;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
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
    .checkbox{
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
