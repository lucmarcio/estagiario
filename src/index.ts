console.log("Teste estagiário");
const valores = Array(10, 11, 16, 20, 54, 22, 8, 2);
let total = 0;
// tslint:disable-next-line:prefer-for-of
for (let index = 0; index < valores.length; index++) {
    const element = valores[index];
    if (index % 2 === 0) {
        total += element;
    }
}
console.log("Total: " + total);
/*
  Total apresentado é 88.
  Correto conforme regras deveria ser 45
*/
