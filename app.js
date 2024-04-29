const config = {
    misteryNumber: [1, 100],
    maxAttempts: 10,
    attempt: []
}

//Générer le numéro mystère grâce au mysteryNumber dans le config
const mysteryNumber = randomNumber();
console.log("Le nombre mystère est : ", mysteryNumber);

//Selon le nombre d'essais, il faudra recréer des numéros au hasard qu'on va mettre dans les attempt 

for(let index= 0; index < config.maxAttempts; index++)
{
    const randomnumber2 = randomNumber();
    config.attempt.push(randomnumber2);
}
console.log(config.attempt);



//Pour chaque essai, il faut vérifier si c'est le numéro mystère et indiquer si c'est plus ou moins

config.attempt.forEach((number, index) =>
{
    if(number < mysteryNumber)
    {
        console.log('+')
    }
    if(number> mysteryNumber)
    {
        console.log('-')
    }
    if(number == mysteryNumber)
    {
        console.log(`Bien ouej, le numéro mystère était : ${mysteryNumber}, vous avez réussi en ${index + 1} coup `)

    }    
})

//Afficher en combien d'essai on a gagné, et si on perd, on affiche le numéro qui était gagnant 

function randomNumber()
{
    const randomnumber = Math.floor(Math.random() * (config.misteryNumber[1] - config.misteryNumber[0] + 1)) + config.misteryNumber[0];
    return randomnumber;
}
