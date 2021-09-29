import * as valida from "./validaciones.js";

let usuario=document.forms['form_registro_usuario']['in_usuario'].value;
let validacion=valida.validar_nombreUsuario(usuario);
console.log(validacion);

let contrasena=document.forms['form_registro_usuario']['in_contrasena'].value;
let valida_contrasena=valida.validar_contrasena(contrasena);
console.log(valida_contrasena);