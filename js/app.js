const app = new Vue({
    el: '#app',
    data: {
        red: 0,
        green: 0,
        blue: 0
    },
    computed: {
        cor: function () {
            return `#${this.redHex}${this.greenHex}${this.blueHex}`
        },

        redHex: function () {
            return this.decimalParaHexa(this.red);
        },

        greenHex: function () {
            return this.decimalParaHexa(this.green);
        },

        blueHex: function () {
            return this.decimalParaHexa(this.blue);
        },
    },
    methods: {
        decimalParaHexa(valor) {
            return ("0" + (Number(valor).toString(16))).slice(-2).toUpperCase();
        },
    }
})