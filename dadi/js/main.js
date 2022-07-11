const numero = Math.floor(Math.random()*6) +1;
alert('Giocatore lancia dado' + numero);

const numeroPc = Math.floor(Math.random()*6) +1;
alert('Pc lancia dado' + numeroPc);

if (numero > numeroPc) {
    alert('vince giocatore!');
} else if(numero < numeroPc){
    alert('vince Pc');
} else {
    alert ('pareggio')
}