const screen = document.getElementById("calculator-screen"),
    keys = document.getElementById("calculator-keys")

let operationStatus = false,
    number1, typeOperation

screen.textContent = "0"
const calculator = () => {

    if (!keys) return

    keys.addEventListener("click", e => {

        const t = e.target,
            d = t.dataset
            //Detectar un numero
        if (d.number) {
            writeScreen(d.number)
        }
        //Detectar un calculo
        if (d.math) {
            getOperation(t, d.math)
        }
        //Detectar una operacion
        if (d.operation) {
            runOperation(d.operation)
        }
    })
}


const writeScreen = (number) => {

    if (screen.textContent === "0" || operationStatus === true) {
        screen.textContent = number
    } else {
        screen.textContent += number
    }

    operationStatus = false

}

const getOperation = (element, operation) => {
    operationStatus = true
    number1 = parseFloat(screen.textContent)

    typeOperation = operation

    screen.textContent = element.textContent

}

const runOperation = clearOigual => {

    const getResult = (number1, typeOperation) => {

        number2 = parseFloat(screen.textContent)
        let result;

        switch (typeOperation) {
            case 'add':
                console.log("mas")
                result = number1 + number2
                break;

            case 'minus':
                result = number1 - number2
                break;

            case 'multiply':
                result = number1 * number2
                break;

            case 'divide':
                result = number1 / number2
                break;


            default:
                result = "culo"
                break;


        }
        if (result === Infinity) {
            screen.textContent = "Error"
        } else {
            screen.textContent = result
        }




    }
    if (clearOigual === "clear") {
        screen.textContent = "0"

    } else {
        getResult(number1, typeOperation)
    }

    operationStatus = true


}



// calculator()