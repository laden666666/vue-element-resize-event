<template>
    <div v-bind="$attrs" v-elresize v-on="listeners" style="position: relative;">
        <slot></slot>
    </div>
</template>
<script>
export default {
    computed: {
        listeners(){
            return {
                ...this.$listeners,
                elresize: event => this.$emit('elresize', event)
            }
        }
    }
}
</script>
