///* http://127.0.0.1:5500/JavaCourse/SegundaEntrega/Entrega2.html



/// variables de entrada para el simulador
let primeraEntrada                  // entrada del tipo de moneda
let cantidad                        // entrada de la cantidad de la moneda
let usd = 0.0                       // variable de ayuda para transformar la cripto a dolar
let usdTotal = 0.0                  // variable de ayuda sumar el total de nuestras criptomonedas en dolares 
/// creamos la lista de criptomonedas
const cryptoList = []
/// agregamos las monedas con sus valores
cryptoList.push({id:1, crypto: "Bitcoin", coin: "BTC", usd: 41057.60, cantidadTotal: 0})
cryptoList.push({id:2, crypto: "Etherium", coin: "ETH", usd: 1784.11, cantidadTotal: 0})
cryptoList.push({id:3, crypto: "Dash", coin: "DASH", usd: 123.79, cantidadTotal: 0})
cryptoList.push({id:4, crypto: "Syscoin", coin: "SYS", usd: 0.58, cantidadTotal: 0})
cryptoList.push({id:5, crypto: "Filecoin", coin: "FIL", usd: 17.80, cantidadTotal: 0})
cryptoList.push({id:6, crypto: "Litecoin", coin: "LTC", usd: 116.33, cantidadTotal: 0})
cryptoList.push({id:7, crypto: "Groestlcoin", coin: "GRS", usd: 0.59, cantidadTotal: 0})

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
            /// usamos los valores de nuestro array
            /// para realizar las operaciones y tener una
            /// mejor visualizacion de los datos en el array
            usd = cantidad * cryptoList[0].usd
            cryptoList[0].cantidadTotal = cryptoList[0].cantidadTotal + usd
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
            usd = cantidad * cryptoList[1].usd
            cryptoList[1].cantidadTotal = cryptoList[1].cantidadTotal + usd
            console.log(cantidad+" ETH equivale en dolares un total de: "+usd+" USD")
            break;
        case "DASH":
            cantidad = prompt("Ingresar cantidad de Dash");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * cryptoList[2].usd
            cryptoList[2].cantidadTotal = cryptoList[2].cantidadTotal + usd
            console.log(cantidad+" DASH equivale en dolares un total de: "+usd+" USD")
            break;
        case "SYS":
            cantidad = prompt("Ingresar cantidad de Syscoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * cryptoList[3].usd
            cryptoList[3].cantidadTotal = cryptoList[3].cantidadTotal + usd
            console.log(cantidad+" SYS equivale en dolares un total de: "+usd+" USD")
            break;
        case "FIL":
            cantidad = prompt("Ingresar cantidad de Filecoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * cryptoList[4].usd
            cryptoList[4].cantidadTotal = cryptoList[4].cantidadTotal + usd
            console.log(cantidad+" FIL equivale en dolares un total de: "+usd+" USD")
            break;
        case "LTC":
            cantidad = prompt("Ingresar cantidad de Litecoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * cryptoList[5].usd
            cryptoList[5].cantidadTotal = cryptoList[5].cantidadTotal + usd
            console.log(cantidad+" LTC equivale en dolares un total de: "+usd+" USD")
            break;
        case "GRS":
            cantidad = prompt("Ingresar cantidad de Groestlcoin");
            if (!parseFloat(cantidad)||cantidad<0.0){
                invalidAlert()
                break
            }
            usd = cantidad * cryptoList[6].usd
            cryptoList[6].cantidadTotal = cryptoList[6].cantidadTotal + usd
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
    if (primeraEntrada==null) break
    if (primeraEntrada.toLowerCase()=="total"){
        console.log("Posee un total de cripto:")
        break
    }
      // guiamos al usuario a nuestra funcion para ingresar sus criptomonedas
      getUserCoin(primeraEntrada.toUpperCase())
}while(primeraEntrada)

// se imprime la lista de todas las monedas con la cantidad de dinero que 
// se tiene en cada billetera
console.log("---------------------------------------------------------------")
for (const cryptoMoneda of cryptoList){
    console.log(cryptoMoneda.coin);
    console.log("A un cambio de "+cryptoMoneda.usd+" USD. Se tienen "+cryptoMoneda.cantidadTotal+" dolares de "+cryptoMoneda.crypto+".");
    console.log("---------------------------------------------------------------------")
}
// final del programa
console.log("¡Gracias por revisar tu billetera de criptomonedas!")