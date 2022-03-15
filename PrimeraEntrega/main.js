/// variables de entrada para el bucle
let entrada                   // entrada de usuario
let salida = ""               // salida de texto en la consola 
let repetir = entrada-1       // variable de ayuda para generar espacios en blanco en la salida
let ancho = 1                 // ancho del arbol, la cantidad de '*' de cada nivel del arbol

/// usamos do~while porque es necesario ingresar al menos una ves al bucle
do{
      /// se le pide al usuario ingresar un numero
      entrada = prompt("Ingresar un numero");
      /// si el usario ingresa un caracter que no sea un numero, se lo
      /// envia a un bucle que le pida ingresar un numero hasta que lo ingrese
      /// o le de click a cancelar
      if (entrada==null) {
            break
      }
      while (!parseInt(entrada)) {
            entrada = prompt("Ingresar un número para generar tu arbol de Navidad");
            /// condicional por si el usuario hace click en cancelar
            /// para no generar un bucle infinito en la entrada
            if (entrada==null) {
                  break
            }
      }
      /// se le da valor al helper de los espacios en blanco
      repetir = entrada-1
      /// ingresa al primero bucle, tamaño del arbol
      for (let i=1;i<=entrada;i++){
            /// espacios en blanco para la identacion del arbol
            for (let j=0;j<repetir;j++){
                  salida = salida + " "
            }
            /// caracter '*' que le da forma al arbol
            for (let j=0;j<ancho;j++){
                  salida = salida + '*'
            }
            /// al texto le sumamos un salto de linea
            salida = salida + "\n"
            /// modificamos las variables para que ingresen
            /// a los bucles con los valores deseados
            repetir=repetir-1
            ancho=ancho+2
      }
      /// salida del arbol
      salida  = salida + "\n" + "Arbol de Navidad"
      console.log(salida)
      /// re definimos las variables para darles nuevos valores
      /// y prepararlos para la siguiente entrada
      salida = ""
      ancho = 1
}while(parseInt(entrada))
