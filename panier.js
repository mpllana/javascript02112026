let prix = Number(prompt("entrer le prix "));
let quantité = Number(prompt("entrer la qantité"))
prixtotal = prix * quantité

if ( prixtotal > 50 )
    prixtotal = prixtotal - (prixtotal * 10 / 100 );

alert("le prix total est" + prixtotal);

