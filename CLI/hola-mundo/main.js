const app = Vue.createApp({
    data() { // Datos
        return {
            titulo: 'Este es un hola mundo con Vue.js',
            cantidad: 0,
            enlace: 'http://youtube.com/bluuweb',
            estado: true,
            servicios: ['transferencias', 'pagos', 'giros', 'cheques'],
            desactivar: false
        }
    },
    methods: { // Metodos
        agregarSaldo() {
            this.cantidad = this.cantidad + 100
            if (this.cantidad >= 100) {
                this.desactivar = false
            }
        },
        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                alert('Saldo en cero !')
                this.desactivar = true
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
    computed: {
        // Propiedades computadas, siempre tienen que realizar 'return'
        // Devolver informacion respecto a algun calculo
        colorCantidad() {
            return this.cantidad > 500 ? 'text-success' : 'text-danger'
        },
        mayusculasTexto() {
            return this.titulo.toUpperCase()
        }
    }
})