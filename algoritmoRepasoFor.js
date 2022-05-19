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
            - calcular edad aproximada con el año de nacimiento ingresado
            - hacer automatica la lista de años ( alguna estructura de iteracion o lo que me sirva)
            - hacer que el boton muestre la informacion
*/

const ANIO_ACTUAL = 2022;

let nombreRecibido = "nombre por def";