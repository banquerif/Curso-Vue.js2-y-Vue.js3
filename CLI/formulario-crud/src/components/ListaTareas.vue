<template>
{{ tareas }}
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="tarea in tareas" :key="tarea.id">
      <th scope="row">{{ tarea.id }}</th>
      <td>{{ tarea.nombre }}</td>
      <td>
          {{ tarea.categorias.join(', ') }}
      </td>
      <td>{{ tarea.estado }}</td>
      <td>{{ tarea.numero }}</td>
      <td>
          <button @click="deleteTareas(tarea.id)" class="btn btn-danger btn-sm">
              Eliminar
          </button>
          <router-link 
            :to="{
                name: 'Editar',
                params: {
                    id: tarea.id
                }
            }"
            class="btn btn-warning btn-sm ml-2"
          >
              Editar
          </router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }
}
</script>