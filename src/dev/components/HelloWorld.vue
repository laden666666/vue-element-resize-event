<template>
    <div class="test">
        <!-- <div class="elresize" v-elresize @elresize="test"></div> -->
        <div class="box" :style="{width: width + 'px', height: height + 'px'}" v-elresize @elresize="test">
        </div>

        <label>width: <input id="widthInput" type="text" class="text" v-model="width">px</label>
        <label>height: <input id="heightInput" type="text" class="text" v-model="height">px</label>
        <div id="resizeCount">{{resizeCount}}</div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            width: '200',
            height: '200',
            resizeCount: 0
        }
    },
    methods: {
        test(e){
            console.log(e)
            this.resizeCount++
        }
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
</style>
