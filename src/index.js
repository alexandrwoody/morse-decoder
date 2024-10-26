const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    function remZero(str) {

        let b = str.substr(str.indexOf('1'));

        return b;
    }

    let arr = expr.split('**********');
    function convertWord(word) {
        let letterArr = [];
        let letter = '';
        word = word.split('');
        word.forEach((element) => {
            letter += element;
            if (letter.length === 10) {
                letter = remZero(letter);
                letter = splArr(letter);
                letter = MORSE_TABLE[letter];
                letterArr.push(letter);
                letter = '';

            }

        });
        return letterArr.join('');
    }
    function splArr(s) {
        s = s.replace(/10/g, '.');
        s = s.replace(/11/g, '-');
        return s;
    }
    let result = arr.map(x => convertWord(x));
    return result.join(' ');
}

module.exports = {
    decode
}