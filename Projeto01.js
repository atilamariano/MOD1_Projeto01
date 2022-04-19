console.clear();
const prompt = require("prompt-sync")();

console.log(`                    A Viagem Do João

  Certo dia nosso amigo o João e sua família, começaram
se organizar para uma viagem de férias. Mas como toda
cidade pequena tem seus curiosos... Um grupo de amigos
que estavam conversando viram o João, com a curiosidade
falando mais alto, foram perguntar ao João de que se
tratava.
  Chegando lá onde ele estava, começaram com as perguntas e
criticas.
  _Pessoal olha lá! O nosso amigo João, está parecendo que
vai viajar, veja a quantidade de bagagem, vamos falar com ele.`);
console.log();

let sim = 0;
let nao = 0;

let res1 = prompt(
  "Amigo João, está indo passear de ferias? sim ou nao? "
).toLowerCase();
while (res1 != "sim" && res1 != "nao") {
  console.log('Responda apenas com "sim" ou "nao"');
  res1 = prompt(
    "Amigo João, está indo passear de ferias? sim ou nao? "
  ).toLowerCase();
}
if (res1 == "sim") {
  console.log(res1 + "? Muito Bom!");
} else {
  console.log(res1 + "? Mas é muita bagagem para uma viagem curta!");
}
if (res1 == "sim") {
  sim++;
} else {
  nao = nao + 1;
}
console.log();

let res2 = prompt("Chegou a calibrar os pneus? sim ou nao? ").toLowerCase();
while (res2 != "sim" && res2 != "nao") {
  console.log('Responda apenas com "sim" ou "nao"');
  res2 = prompt("Chegou a calibrar os pneus? sim ou nao? ").toLowerCase();
}
if (res2 == "sim") {
  console.log(res2 + "? Segurança sempre!");
} else {
  console.log(res2 + "? Assim você não chega!");
}
if (res2 == "sim") {
  sim++;
} else {
  nao = nao + 1;
}
console.log();

let res3 = prompt(
  "Mas os cintos de segurança estão ok? sim ou nao? "
).toLowerCase();
while (res3 != "sim" && res3 != "nao") {
  console.log('Responda apenas com "sim" ou "nao"');
  res3 = prompt(
    "Mas os cintos de segurança estão ok? sim ou nao? "
  ).toLowerCase();
}
if (res3 == "sim") {
  console.log(res3 + "? É assim que se faz João!");
} else {
  console.log(res3 + "? To vendo que você não tem amor a vida João!");
}
if (res3 == "sim") {
  sim++;
} else {
  nao = nao + 1;
}
console.log();

let res4 = prompt("Já tem o roteiro turistico? sim ou nao? ").toLowerCase();
while (res4 != "sim" && res4 != "nao") {
  console.log('Responda apenas com "sim" ou "nao"');
  res4 = prompt("Já tem o roteiro turistico? sim ou nao? ").toLowerCase();
}
if (res4 == "sim") {
  console.log(res4 + "! Nosso paiz tem lugares lindos!");
} else {
  console.log(res4 + "? Vai se perder nessa viagem!");
}
if (res4 == "sim") {
  sim++;
} else {
  nao = nao + 1;
}
console.log();

let res5 = prompt(
  "Mas tenho certeza! você abasteceu? sim ou nao? "
).toLowerCase();
while (res5 != "sim" && res5 != "nao") {
  console.log('Responda apenas com "sim" ou "nao"');
  res5 = prompt(
    "Mas tenho certeza! você abasteceu? sim ou nao? "
  ).toLowerCase();
}
if (res5 == "sim") {
  console.log(res5 + "? Melhor companheiro de viagem é você!");
} else {
  console.log(res5 + "? Nunca me convide para essas viagens suas!");
}
if (res5 == "sim") {
  sim++;
} else {
  nao = nao + 1;
}
console.log();

console.log(`  E o João entra no carro para partir com sua família.`);
if (sim == 0) {
  console.log(`  A esposa do nosso amigo ao tentar colocar o sinto nos seus
filhos não os encontrou, imediatamente sai do carro esbravejando" Sem cinto
ninguém vai!" ao sair do carro também notou seus 2 pneus dianteiros furados,
como toda desgraça nunca vem só, soube da notícia que a bomba do único posto
da cidade estava quebrada.
   E nosso amigo vai ter que deixar essa viagem para o ano que vem. `);
} else if (sim == 1 || sim == 2) {
  console.log(`  O nosso amigo ao dar a partida no carro, percebeu que no painel
acendeu a luz do óleo do motor, não acreditando na situação e já com sua esposa
esbravejando pela falta de manutenção no veículo, depois de muito discutirem e vendo
que já não teria como ir à viagem, resolveram ir para uma pizzaria, ao menos sairão
de casa.
  
    E nosso amigo João não irar viajar este ano.`);
} else if (sim == 3) {
  console.log(`  Felizes por conseguirem a tão esperada viagem, com muita emoção
e alegria durante todo o percurso, chegou ao seu destino, João como todo
brasileiro nato, deixou para alugar o quarto do hotel no momento em que
chegasse, mas para sua surpresa e de toda a família, o mesmo estava sem
vagas até o mês seguinte.
    Infelizmente tiveram que retornar para casa, pobre João sua viagem
vai ficar para o próximo ano. `);
} else if (sim == 4) {
  console.log(`  Felizes por conseguirem a tão esperada viagem, com muita emoção
  e alegria durante todo o percurso, chegou ao seu destino, João como todo
  brasileiro nato, deixou para alugar o quarto do hotel 5 estrelas no momento em que
  chegasse, mas para sua surpresa e de toda a família, o mesmo estava sem
  vagas até o mês seguinte.
      Infelizmente tiveram que ficar em um Hostel, mas as férias continuam. Boas Ferias João!.`);
} else {
  console.log(`  Com tudo checado e carro bem abastecido,
despreocupado com hotel já reservado, João partiu com 
sua família para suas tão sonhadas viagem de férias.

             Boa viagem de férias João!`);
}
console.log();
console.log();

console.log("       Resumo das respostas escolhidas");
console.log(`Foram escolhidos um total de ${sim} 'sim', e ${nao} 'nao'.`);
console.log();
