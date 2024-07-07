const countVowels = function (s) {
    const vowels = 'aeiou';
    let count = 0;
    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

module.exports = countVowels;
