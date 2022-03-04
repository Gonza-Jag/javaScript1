class Cotizador {
    constructor(m2, valorM2) {
        this.metros2 = m2
        this.valorM2 = valorM2
    }
    cotizarPoliza() {
        let resultado = this.metros2 * this.valorM2
        return(resultado)
    }
}