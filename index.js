const goodBeginning = [
    'The gods have listened to your wish!',
    'Good news!'
];

const badBeginning = [
    'Bad news.', 
    'Oh no!', 
    'dam dam daaaaam', 
    ': (', 
    'Careful!', 
    'Be aware!', 
    "I'm sorry..."
];

const goodMiddle = [
    'A long awaited opportunity is coming',
    'The desired change will fall from the sky', 
    'The monetary wish is finally approaching',
    'A romantic adventure will entice you', // is this good or bad?
];

const badMiddle = [
    'A betreyal is approaching',
    'A harsh fight will come',
    'A recession is coming',
    'You will be broke',
];

const time = [
    'today', 
    'tomorrow', 
    'during this week', 
    'over the next month', 
    'during this season', 
    'this year'
];


// returns a random element of the inputted array regardless of the size of the array
const pickRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    //console.log('the randomly picked item is: ', array[randomIndex])
    return array[randomIndex]
}

const buildMessage = () => {
    const message = []
    // randomly deciding whether message will be good or bad
    if (Math.random() < 0.5) {
        message.push(pickRandom(goodBeginning))
        message.push(pickRandom(goodMiddle))
    } else {
        message.push(pickRandom(badBeginning))
        message.push(pickRandom(badMiddle))
    }

    message.push(pickRandom(time) + '.');
    return message
}


let myMessage = buildMessage()
myMessage = myMessage.join(' ')
console.log(myMessage)