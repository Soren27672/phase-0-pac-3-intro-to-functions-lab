function shout(message) {
    return message.toUpperCase();
}

function whisper(message) {
    return message.toLowerCase();
}

function logShout(message) {
    console.log(message.toUpperCase());
}

function logWhisper(message) {
    console.log(message.toLowerCase());
}

function sayHiToHeadphonedRoommate(message) {
    switch (true) {
        case message === "Let\'s have dinner together!":
            return "I would love to!";
        case message.toUpperCase() === message:
            return "YES INDEED!";
        default:
            return "I can\'t hear you!";
    }
}

console.log(sayHiToHeadphonedRoommate('Let\'s have dinner together!'));