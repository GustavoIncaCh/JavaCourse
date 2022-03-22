///* http://127.0.0.1:5500/JavaCourse/SegundaEntrega/Entrega2.html



/// variables de entrada para el simulador
let primeraEntrada                  // entrada del tipo de moneda
let cantidad                        // entrada de la cantidad de la moneda
let usd = 0.0                       // variable de ayuda para transformar la cripto a dolar
let usdTotal = 0.0                  // variable de ayuda sumar el total de nuestras criptomonedas en dolares 

// funcion para alertar el error de entrada
function invalidAlert(){
    alert("Cantidad no validada!!!\nDebes ingresar una cantidad valida: Ejemplo: 0.5, 15, 0.0007")
}

/// funcion para recoger y convertir la moneda deseada
function getUserCoin(cointype){
    switch (cointype){
        case "BTC":
            /// obtenemos la cantidad de moneda en "cantidad", tratamos de recibir facciones
            /// de moneda por la valuacion de la criptomoneda: Ejem: 0.000058 BTC
            cantidad = prompt("Ingresar cantidad de Bitcoin");
            /// si el usuario ingreso un valor no Numerico, QUE NO SEA FRACCION
            /// funciona tambien si el usuario ingresa 0, que es una cantidad nula
            if (!parseFloat(cantidad)||cantidad<0.0){
                /// llamamos a nuestra funcion de alerta
                invalidAlert()
                break
            }
            /// transformamos el bitcoin a dolar
            /// asumiendo que el valor de 1 BTC = 41057.60 USD
            usd = cantidad * 41057.60
            /// agregamos esta cantidad a la suma total de nuestros
            /// criptomonedas
            usdTotal = usdTotal + usd
            /// le indicamos al usuario cual es el valor 
            /// de su cripto en dolares
            console.log(cantidad+" BTC equivale en dolares un total de: "+usd+" USD")
            break;
            /// este caso se repite en cada caso
        case "ETH":
            cantidad = prompt("Ingresar cantidad de Etherium");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * 1784.11
            usdTotal = usdTotal + usd
            console.log(cantidad+" ETH equivale en dolares un total de: "+usd+" USD")
            break;
        case "DASH":
            cantidad = prompt("Ingresar cantidad de Dash");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * 123.79
            usdTotal = usdTotal + usd
            console.log(cantidad+" DASH equivale en dolares un total de: "+usd+" USD")
            break;
        case "SYS":
            cantidad = prompt("Ingresar cantidad de Syscoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * 0.58
            usdTotal = usdTotal + usd
            console.log(cantidad+" SYS equivale en dolares un total de: "+usd+" USD")
            break;
        case "FIL":
            cantidad = prompt("Ingresar cantidad de Filecoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * 17.80
            usdTotal = usdTotal + usd
            console.log(cantidad+" FIL equivale en dolares un total de: "+usd+" USD")
            break;
        case "LTC":
            cantidad = prompt("Ingresar cantidad de Litecoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * 116.33
            usdTotal = usdTotal + usd
            console.log(cantidad+" LTC equivale en dolares un total de: "+usd+" USD")
            break;
        case "GRS":
            cantidad = prompt("Ingresar cantidad de Groestlcoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * 0.59
            usdTotal = usdTotal + usd
            console.log(cantidad+" GRS equivale en dolares un total de: "+usd+" USD")
            break;
        default:
            /// si el usuario ingresa una moneda no valida o un valor no valido 
            /// de acuerdo a la peticion de entrada se le envia este mensaje
            alert("Moneda no validada!!!\nDebes ingresar una moneda valida: Ejemplo: BTC, ingresa la palabra en mayusculas")
            break;
    }
}

do{
    // el usuario debe ingresar un tipo de moneda por escrito
    // ejemplo: usuario ingresa BTC y accede a la siguiente pantalla  
    primeraEntrada = prompt("Ingresa el tipo de moneda que vas a agregar:\nBTC\nETH\nDASH\nSYS\nFIL\nLTC\nGRS\nEscriba TOTAL para conocer su dinero total");
    // el usuario desea saber el total de sus criptos, debe escribir "TOTAL" o "total" o "Total"
    if (primeraEntrada==null||primeraEntrada=="TOTAL"||primeraEntrada=="total"||primeraEntrada=="Total") {
          if (usdTotal!=0.0) console.log("Usted posee un total de: "+usdTotal+" USD en criptomonedas")
          // no ingreso ninguna moneda y no sabemos si posee o no criptos,
          // simplemente lo retiramos del systema y le agradecemos su visita
          else if (primeraEntrada==null) break
          // si su total es 0.0 es porque no posee criptomonedas
          else console.log("No posees criptomonedas :'c ...")
          // al entrar a esta condicion si o si debemos salir del bucle, por ende siempre
          // llegaremos al break
          break
      }
      // guiamos al usuario a nuestra funcion para ingresar sus criptomonedas
      getUserCoin(primeraEntrada)
}while(primeraEntrada!=null)
// final del programa
console.log("¡Gracias por revisar tu billetera de criptomonedas!")