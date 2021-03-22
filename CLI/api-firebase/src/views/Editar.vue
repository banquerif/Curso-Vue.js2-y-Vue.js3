<template>
    <div>
        <span>Editar {{ $route.params.id }} - {{ tarea }}</span>
        <form @submit.prevent="updateTarea(tarea)">
            <Input :tarea="tarea" />
        </form>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Input from '../components/Input'

export default {
    computed: {
        ...mapState(['tarea'])
    },
    methods: {
        ...mapActions(['setTarea', 'updateTarea'])
    },
    created() {
        this.setTarea(this.$route.params.id);
    },
    components: {
        Input,
    }
}
</script>

<style>

</style>