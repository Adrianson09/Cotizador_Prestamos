 const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC'
    })
    return formatter.format(valor)
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total;

    // Mientras mayor es la cantidad, menor es el interés
    if (cantidad < 50000) {
        total = cantidad * 1.5
    }else if(cantidad >= 50000 && cantidad < 100000){
        total = cantidad * 1.4
    }else if(cantidad >= 100000 && cantidad < 150000){
        total = cantidad * 1.3
    }else{
        total = cantidad * 1.2
    }
    // Plazo - más plazo, mayor interes
    if (plazo === 6) {
        total *= 1.1
    }else if(plazo === 12){
        total *= 1.2
    }else{
        total *= 1.3
    }
    return total
}

export {
    formatearDinero,
    calcularTotalPagar
}