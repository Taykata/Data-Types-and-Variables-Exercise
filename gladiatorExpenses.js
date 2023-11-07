function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let gameCounter = 0;
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;

    let isReady = false;

    for (let i = 1; i <= lostFights; i++) {
        gameCounter++;

        if (gameCounter % 2 === 0 && gameCounter % 3 !== 0) {
            helmetCounter++;
        }

        if (gameCounter % 3 === 0 && gameCounter % 2 !== 0) {
            swordCounter++;
        }

        if (gameCounter % 2 === 0 && gameCounter % 3 === 0) {
            shieldCounter++;

            if (shieldCounter % 2 === 0) {
                isReady = true;
            }

            helmetCounter++;
            swordCounter++;
        }

        if (shieldCounter % 2 === 0 && shieldCounter !== 0) {

            if (isReady) {
                armorCounter++;
                isReady = false;
            }

        }
    }

    let helmetSum = helmetPrice * helmetCounter;
    let swordSum = swordPrice * swordCounter;
    let shieldSum = shieldPrice * shieldCounter;
    let armorSum = armorPrice * armorCounter;

    let totalSum = helmetSum + swordSum + shieldSum + armorSum;

    console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);

}

gladiatorExpenses(23, 12.50, 21.50, 40, 200);