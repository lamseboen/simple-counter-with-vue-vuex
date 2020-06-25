<template>
    <div>
        <div class="container">
            <button @click="increment">+</button>
            <span style="margin-left:10px; margin-right:10px">{{count}}</span>
            <button @click="decrementCount">-</button>
            <br>
            <button style="margin-top:10px" @click="reset">reset</button>
        </div>
    </div>    
</template>

<script>
import {mapActions} from 'vuex'
export default {
    computed:{
        count: function () {
            return this.$store.state.count
        }    
    },
    methods:{
        //contoh langsung menggunakan mapActions
        ...mapActions({
            increment: 'increment',
            decrement: 'decrement'
        }),
        //contoh menggunakan method di component yang memanggil action dari vuex melalui mapActions
        decrementCount(){
            this.decrement()
        },
        //contoh akses langsung ke action
        reset(){
            this.$store.dispatch('resetCount')
        }

    }

}
</script>
