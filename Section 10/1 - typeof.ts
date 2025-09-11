const userName = 'Max';
console.log(typeof userName);

type UserName = typeof userName;


const settings = {
    difficulty: 'easy',
    minLevel: 1,
    didStart: false,
    players: ['Max', 'Anna'],
}

type Settings = typeof settings;

const gameSettings: Settings = {    
    difficulty: 'easy',
    minLevel: 1,
    didStart: false,
    players: ['Max', 'Anna'],
}