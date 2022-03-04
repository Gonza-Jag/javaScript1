function CotizarNuevaPoliza(){

    m2 = parseInt(prompt("Ingrese los M2 de la propiedad"))
    const cotizadorSeguroHogar = new Cotizador(m2, valorMetro2Seguro)
    res = cotizadorSeguroHogar.cotizarPoliza()
    console.log(res)
}