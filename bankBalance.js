let operaciones = [1200, -600, 4000, -2000, 2500, -1000];

function calculateBalances(operaciones) {
  let totalDepositos = 0;
  let totalRetiros = 0;
  

  operaciones.forEach(operacion => {
    if (operacion > 0) {
      totalDepositos += operacion;
    } else {
      totalRetiros += Math.abs(operacion); 
    }
  });

  const saldoActual = totalDepositos - totalRetiros;
  return { totalDepositos, totalRetiros, saldoActual };
}


function bankBalance(nombre, apellido, operaciones) {
  const { totalDepositos, totalRetiros, saldoActual } = calculateBalances(operaciones);

  return {
    nombre,
    apellido,
    totalDepositos,
    totalRetiros,
    saldoActual
  };
}


const resultado = bankBalance("Gloria", "Medina", operaciones);

console.log(`Estimada ${resultado.nombre} ${resultado.apellido}:`);
console.log(`El monto total de los depósitos es de: $${resultado.totalDepositos}.`);
console.log(`El monto total de los retiros es de: $${resultado.totalRetiros}.`);
console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${resultado.saldoActual}.`);


module.exports = bankBalance;