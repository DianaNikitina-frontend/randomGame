const min = 0;
const max = 100;
const attCount = 10;


function getUserName () {
    const userName = prompt("Привет! Как тебя зовут?");
    return userName;
}
const userName = getUserName();

const getRandomNumber = maxLimit => Math.round(Math.random() * maxLimit);
const randomNumber = getRandomNumber(max);


const playGame = (minLimit, maxLimit, attsNumber, number, name) => {
   alert(`Приветик, ${userName}!
   Я загадал число большее, чем ${minLimit} и меньшее чем ${maxLimit}.
   тебя ${attsNumber} попыток отгадать его. Успехов!`)
   for (let i = 1; i <= attCount; i++) {
      const answer = prompt(`Ну, что думаешь?`)
      if(answer > number){
         alert(`число,которое я загадал меньше.
         У тебя осталось ${attsNumber -i}попыток`)
      } else if (answer < number){
         alert(`число,которое я загадал больше.
         У тебя осталось ${attsNumber -i}попыток`)
      } else {
         alert(`${name}, ты умничка! Угадал с ${i}-ой попытки`)
         return
      }
   }
   alert(`${name}, гейм овер , чувак....Сегодня не твой день: ты продул!`)

}

playGame(min, max, attCount, randomNumber, userName)