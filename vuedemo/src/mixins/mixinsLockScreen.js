import Vue from 'vue'
const mixin = Vue.mixin({
    data: function() {
        return {}
    },
    methods: {
        blockScreen() {
            this.$store.dispatch("act_lockScreen");
        },
        unlockScreen() {
            this.$store.dispatch("act_unlockScreen");
        },
    },
})
export default mixin