<template>

  <div>
    <form @submit.prevent="procesarFormulario">
      <Input :tarea="tarea"/>
    </form>

    <hr>

    <ListaTareas />
  </div>
  
</template>

<script>
import Input from '../components/Input';
import ListaTareas from '../components/ListaTareas';
import {mapActions} from 'vuex'
const shortid = require('shortid');

export default {
  name: 'Home',
  components: {
    Input,
    ListaTareas,
  },
  data() {
    return {
      tarea: {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      },
    }
  },
  methods: {
    ...mapActions(['setTareas']),
    procesarFormulario() {
      console.log(this.tarea);
      if(this.tarea.nombre.trim() === "") {
        console.log('Campo vacio');
        return;
      }

      // Generar id
      this.tarea.id = shortid.generate()
      console.log(this.tarea.id)

      // Envian los datos
      this.setTareas(this.tarea)

      // Limpiar datos
      this.tarea = {
        id: '',
        nombre: '',
        categorias: [],
        estado: '',
        numero: 0,
      }
      
    }
  },
}
</script>
