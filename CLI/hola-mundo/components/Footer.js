app.component('footer-banco', {
    props: {
        valor: String,
        fecha: String
    },
    template: /*html*/ `
    <div class="bg-dark py-3 mt-3 text-white">
        <h3>{{texto}} - {{valor}}</h3>
        <p>{{fecha}}</p>
    </div>
    `,
    data() {
        return {
            texto: 'Footer de mi sitio web dinamico',
        }
    }
})