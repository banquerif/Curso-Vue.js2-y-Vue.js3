<template>
    <div>
        <input 
        type="text"
        class="form-control my-2"
        placeholder="Ingrese nombre"
        v-model.trim="tarea.nombre"
        >

        <div class="form-check form-check-inline">
        <input 
            id="check-1" 
            type="checkbox"
            class="form-check-input"
            v-model="tarea.categorias"
            value="javascript"
        >
        <label for="check-1" class="form-check-label">JavaScript</label>
        </div>
        <div class="form-check form-check-inline">
        <input 
            id="check-2" 
            type="checkbox"
            class="form-check-input"
            v-model="tarea.categorias"
            value="node js"
        >
        <label for="check-2" class="form-check-label">Node JS</label>
        </div>

        <div class="form-check form-check-inline">
        <input 
            id="radio-1"
            type="radio"
            class="form-check-input"
            v-model="tarea.estado"
            value="urgente"
        >
        <label for="check-2" class="form-check-label">Urgente</label>
        </div>
        <div class="form-check form-check-inline">
        <input 
            id="radio-2"
            type="radio"
            class="form-check-input"
            v-model="tarea.estado"
            value="relax"
        >
        <label for="check-2" class="form-check-label">Relax</label>
        </div>

        <div class="form-check form-check-inline">
        <input
            type="number"
            class="form-control"
            v-model.number="tarea.numero"
        >
        </div>

        <button 
        class="btn btn-secondary mt-2 btn-block" 
        type="submit"
        :disabled="bloquear"
        >Procesar
        </button>
    </div>
</template>

<script>
export default {
    props: {
        tarea: Object,
    },
    computed: {
        bloquear(){
            return this.tarea.nombre.trim() === '' ? true : false
        }
    },
}
</script>