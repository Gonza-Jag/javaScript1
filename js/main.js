
let usuario = prompt('Ingrese su nombre de usuario:');


if (usuario == null) {
    console.error('El usuario canceló su identificación');

}else if (usuario != '') {
    console.log('Bienvenido ', usuario);

}else{
    console.warn('Debe ingresar un nombre válido');
}


for ( let dia = 1; dia < 28; dia++){

    console.log('Día ', dia, ' de febrero')
    if (dia ==23){
        break;
    }
}