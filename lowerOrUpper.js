function lowerOrUpper(letter) {

    let n = letter.charCodeAt();

    if (n >= 65 && n <= 90) {
        console.log('upper-case');
    } else if (n >= 97 && n <= 122) {
        console.log('lower-case');
    }

}

lowerOrUpper('A');