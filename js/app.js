const app = new Vue({
    el: '#app',
    data: {
        red: 0,
        green: 0,
        blue: 0,
        cor: "#000000"
    },
    computed: {
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
    watch: {
        cor: {
            handler: function (newVal) {
                this.formatarCorHex(newVal);
            },
            deep: true
        },
        red: {
            handler: function () {
                this.atualizarCor();
            },
            deep: true
        },
        green: {
            handler: function () {
                this.atualizarCor();
            },
            deep: true
        },
        blue: {
            handler: function () {
                this.atualizarCor();
            },
            deep: true
        },
    },
    methods: {
        decimalParaHexa(valor) {
            return ("0" + (Number(valor).toString(16))).slice(-2).toUpperCase();
        },

        atualizarCor() {
            this.cor = "#" + this.redHex + this.greenHex + this.blueHex;
        },

        formatarCorHex(val) {
            val = val.replaceAll("#", "");
            if (val.length == 6) {
                this.red = parseInt("0x" + val.substr(0, 2));
                this.green = parseInt("0x" + val.substr(2, 2));
                this.blue = parseInt("0x" + val.substr(4, 2));
            }
        },
    }
})