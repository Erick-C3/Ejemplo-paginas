/*
    Construir una pagina que permita recibir el nombre, año de nacimiento entre 1922 y 2004
    Una vez el usuario ingrese la informacion y la envie deberia mostrarse un mensaje 
    informando el nombre y la edad aproximada del usuario

    info

        info agregada:
            - año actual: 2022 (la fecha del sistema)

        requisitos
            - recibir un nombre
            - recibir el año de nacimiento entre 1922 y 2004 
            - mostrar informacion nombre y edad aproximada

        Front
            - Titulo
            - Ingreso de nombre (lo que sea de html que me sirva para esto)
                - id
            - Lista de un rango de años
            - boton para enviar la informacion o enter (o alguna forma que sirva para activar alguna funcionalidad)
            - Respuesta en un cuadro de nombre y edad 
                ej:  "Erick tenes 26 años"
            
        Logica
            + calcular edad aproximada con el año de nacimiento ingresado
            + hacer automatica la lista de años ( alguna estructura de iteracion o lo que me sirva)
            + hacer que el boton muestre la informacion
*/

const ANIO_ACTUAL = 2022;
const ANIO_MIN_LISTA = 1922;
const ANIO_MAX_LISTA = 2004;


//for para generar las opciones de años en la lista
// - opcionAnio = 2004 (ESTO NO SE REPITE)
// - verifica la condicion de corte/iteracion (2004 >= 1922 ?)
// 1º 2004
// - resta opcionAnio - 1 entonces ahora es igual a 2003
// - verificamos la condicion ? 2003 >= 1922
// 2º 2003
for( let opcionAnio =  ANIO_MAX_LISTA; opcionAnio >= ANIO_MIN_LISTA ; opcionAnio-- ){
    // Reto
    //      - que la lista de años comience 2004 y termine 1922
    //      + la opcion tiene que ser: seleccione año ...    
    variable = "erick";
    document.querySelector("#lista_anios").innerHTML += `
        <option>  ${opcionAnio} </option>
    `;
}



/**
 * Calcula la edad dependiendo del año recibido
 * Muestra en la pagina  el resultado de la edad calculada y el nombre del usuario
 */
function calcularEdad(){
    let nombreRecibido = document.querySelector("#nombre").value;
    let anioRecibido = document.querySelector("#lista_anios").value;
    let edad = "edad def";
    //calcular la edad
    edad = ANIO_ACTUAL - anioRecibido;

    document.querySelector("#respuesta").innerHTML = `
        <h2>  ${nombreRecibido} tenes ${edad} años </h2>
    `;
}