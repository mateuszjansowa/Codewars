/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */


function reverseWords(str) {
    const wordsArr = str.split(' ');

    const newArr = wordsArr.map(word => word.split('').reverse().join(''))

    return newArr.join(' ');
}

reverseWords('The quick brown fox jumps over the lazy dog.');