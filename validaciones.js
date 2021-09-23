function validar_nombre_usuario(usuario){
    /* 1. Solo puede contener letras de la A a la Z.
       2. La primera letra debe ser mayúscula.
    */
   user = usuario.toString();
    if (user[0].match(/^[A-Z]$/) && user.match(/^[A-Za-z]+$/)){
        return(true);  
        }
    else {
        return(false);
        }
}

function validar_anoNacimiento_usuario(year){
    /* 1. El valor del parámetro es un número.
       2. El número debe ser positivo.
       3. El número debe ser igual o mayor a 1900 y menor que 2022
    */
   if (Number.isInteger(year) && year > 0 && year >= 1900 && year < 2022){
       return(true);
   }
   else {
       return(false);
   }
}

function validar_contrasena(contrasena) {
    /*  1. Debe tener 6 o más caracteres.
        2. Solo puede contener caracteres alfanuméricos. Es
        decir, letras de la A a la Z y los números del 0 al 9.
        3. Debe contener por lo menos una letra minúscula,
        una letra mayúscula y un número.
    */
   clave = contrasena.toString();
   if (clave.length >=6 && clave.match(/[a-z]+/) && clave.match(/[A-Z]+/) && clave.match(/[0-9]+/) ) {
        return(true);
   }
   else {
        return(false);
   }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;
module.exports.validar_contrasena = validar_contrasena;
