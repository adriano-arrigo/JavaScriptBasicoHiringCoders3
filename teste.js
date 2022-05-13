//Validador do primeiro dígito do CPF explicado pra quem, assim como eu, não conseguia entender um laço de repetição  =/
var cpf = '11144477735';

//Defininindo quais são os 9 primeiros
var numeros = cpf.substring(0, 9);
//definindo quais são os dois últimos
var digitos = cpf.substring(9);
console.log('Os pimeiros 9 dígitos do cpf são ' + numeros);

//gerando uma variável para recebr o valor da soma
var soma = 0;
//criando um laço de repetição para efetuar os cálculos
for (var i = 10; i > 1; i--) {
  console.log(`A variável i nesse momento vale ${i}`);
  console.log(
    `Portanto, numeros.charAt(10-i) é a posição ${
      10 - i
    } da var numeros:" ${numeros.charAt(10 - i)}"`
  );

  //conta sendo realziada abaixo
  soma += numeros.charAt(10 - i) * i;

  console.log(
    `Então dentro do laço de repetição na passagem ${i} a var soma é igual a ${soma}`
  );
}
console.log(`Fora do laço de repetição a var soma é igual a : ${soma}`);
console.log(`Com o valor ${soma} em mãos, fazemos a conta a seguir`);
console.log(
  `${soma} divide por 11 e pego só o que restar dessa conta, se esse 'resto' for menor do que 2, o primeiro digito será 0, se for maior do que 2, eu faço uma terceira conta que é 11 menos o resto, se o resto for 3, então o dígito será 8`
);

//gerando o primeiro dígito do cpf
var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

console.log(`O dígito encontrado nessa conta foi ${resultado}`);

//comparando o valor resultante da conta com o valor informado
if (resultado != digitos.charAt(0)) {
  console.log('O dígito está errado');
} else {
  console.log('O dígito está correto!');
}
