import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: '',
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0,
    },
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    cargar(state, payload) {
      state.tareas = payload
      console.log(`state tareas ${state.tareas}`)
    },
    set(state, payload) {
      state.tareas.push(payload)
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter(item => item.id !== payload)
    },
    tarea(state, payload) {
      if(!state.tareas.find(item => item.id === payload)) {
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
      router.push('/')
    }
  },
  actions: {
    async registrarUsuario({ commit }, usuario) {
      console.log(usuario)
    },
    async cargarLista({ commit }) {
      try {
        const res = await fetch(`https://objectivize-games-default-rtdb.firebaseio.com/tareas.json`)
        const dataDB = await res.json()
        const arrayTareas = []

        for(let id in dataDB) {
          console.log(dataDB[id])
          arrayTareas.push(dataDB[id])
        }

        console.log(arrayTareas)
        commit('cargar', arrayTareas)

      } catch (error) {
        console.log(error)
      }
    },
    async setTareas({ commit }, tarea) {
      try {
        const res = await fetch(`https://objectivize-games-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(tarea),
        })

        const dataDB = await res.json();
        console.log(dataDB)

      } catch (error) {
        console.log(error)
      }
      commit('set', tarea)
    },
    async deleteTareas({ commit }, id) {
      try {
        await fetch(`https://objectivize-games-default-rtdb.firebaseio.com/tareas/${id}.json`, {
          method: 'DELETE',
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
      
    },
    setTarea({ commit }, id) {
      commit('tarea', id)
    },
    async updateTarea({ commit }, tarea) {
      try {
        const res = await fetch(`https://objectivize-games-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()
        commit('update', tarea)
      } catch (error) {
        console.log(error)
      }
      
    }
  },
  modules: {
  }
})
