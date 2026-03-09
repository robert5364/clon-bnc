// Fecha actual
const hoy = new Date();
// Obtener nombre del día
const diaNombre = hoy.toLocaleDateString('es-ES', {weekday: 'long'});
// Formatear fecha (DD/MM/YY)
const fechaNumerica = hoy.toLocaleDateString('es-ES',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

// Capitalizar la primera letra del día y mostrar
const diaCapitalizado = diaNombre.toUpperCase();
document.getElementById('fecha-actual').textContent = `${diaCapitalizado}, ${fechaNumerica}`;

// Hora actual
const hora = new Date().getHours();
const elementoSaludo = document.getElementById('elemento-saludo');
let mensaje = "";

// Dividimos el día en bloques de 6 horas
if ( hora >= 0 && hora < 6) {
    mensaje = "Buenos días";
} else if ( hora >= 6 && hora < 12) {
    mensaje = "Buenos días";
} else if ( hora>=12 && hora < 18) {
    mensaje = "Buenas tardes";
} else {
    mensaje = "Buenas noches";
}

// Insertamos el mensaje en el HTML
    elementoSaludo.textContent = mensaje;

//Formulario no completado
const boton = document.getElementById('btnValidar');
const tarjeta = document.getElementById('numeroDeTarjeta');
const cedula = document.getElementById('cedulaDeIdentidad');
const errorTarjeta = document.getElementById('error-tarjeta');
const errorCedula = document.getElementById('error-cedula');

 function validarFormulario() {

    // Validamos tarjeta
    errorTarjeta.style.display = tarjeta.value === "" ? "block" : "none";

    // Validamos cédula
    errorCedula.style.display = cedula.value === "" ? "block" : "none";

 }

 boton.addEventListener('click',validarFormulario);

    tarjeta.addEventListener('input', () => errorTarjeta.style.display = "none" );
    cedula.addEventListener('input', () => errorCedula.style.display = "none" );


// Tipo de tarjeta
const botones = document.querySelectorAll('.mi-boton');
botones.forEach (boton => {
    boton.addEventListener('click', ()=>{
        botones.forEach ( b => {
            if ( b === boton) {
                // Al que clikeamos: le ponemos 'activo' y quitamos 'apagado'
                b.classList.add('activo');
                b.classList.remove('apagado');
            } else {
                // A los demás: Les quitamos 'activo' y ponemos 'apagado'
                b.classList.add('apagado');
                b.classList.remove('activo');
            }
        });
    });
});

// Tipo de persona
const persona = document.querySelectorAll('.mi-tipo');
const contenedor = document.querySelector('.conte-nedor');
    persona.forEach ( per => {
        per.addEventListener ('click', ()=> {
            persona.forEach ( (p,i) => {
                if ( p === per) {
                    p.classList.add('tipo-activo');
                    p.classList.remove('tipo-apagado');
                } else {
                    p.classList.add('tipo-apagado');
                    p.classList.remove('tipo-activo');
                }
                if ( p === per && i === 1) {
                    contenedor.style.display = "none";
                    botones[0].textContent = "BNCNET";
                    botones[1].textContent = "Débito Jurídica";
                } else {
                    contenedor.style.display = "flex";
                     botones[0].textContent = "Débito | Crédito";
                    botones[1].textContent = "Tarjeta Débito BOD";
                }
            });
        });
    });