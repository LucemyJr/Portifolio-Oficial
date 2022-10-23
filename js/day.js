const agora = new Date()
const diaSem = agora.getDay()
const phrase = document.getElementById("phrase")

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(diaSem){
    case 0:
        phrase.innerHTML = "Oh man, is tomorrow already monday?"
        break 
    case 1:
        phrase.innerHTML = "Monday... here we go again."
        break
    case 2:
        phrase.innerHTML = "Taco tuuuuuuesday."
        break
    case 3:
        phrase.innerHTML = "Wednesday, it's already half the week."
        break
    case 4:
        phrase.innerHTML = "Thursday waiting for love."
        break
    case 5:
        phrase.innerHTML = "IT'S FRIDAY BABYY!!"
        break
    case 6:
        phrase.innerHTML = "Let's have a beer, it's saturday"
        break
    
}