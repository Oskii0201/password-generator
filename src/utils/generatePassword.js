const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const capitalLetters = letters.map(letter => letter.toUpperCase());
const numbers = '0123456789'.split('');
const specialChars = '!@#$%^&*()_+-={}[]|;:<>?/'.split('');

export const generatePassword = settings => {
    const { passwordLength } = settings
    const charsArray = getChars(settings)

    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        const randomArray = charsArray[Math.floor(Math.random() * charsArray.length)];
        const randomChar = randomArray[Math.floor(Math.random() * randomArray.length)];
        password += randomChar
    }

    return password
}

const getChars = ({ includeLetters, includeCapitalLetters, includeNumbers, includeSpecialChars }) => {
    const mergedArray = []

    includeCapitalLetters && mergedArray.push(capitalLetters)
    includeLetters && mergedArray.push(letters)
    includeNumbers && mergedArray.push(numbers)
    includeSpecialChars && mergedArray.push(specialChars)

    return mergedArray
}