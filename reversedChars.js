function reversedChars(a, b, c) {

    let total = a + b + c;
    let buff = '';

    for (let i = 2; i >= 0; i--) {
        buff += total[i] + ' ';
    }

    console.log(buff);

}

reversedChars('A', 'B', 'C');