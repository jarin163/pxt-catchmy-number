input.onButtonPressed(Button.A, function () {
    tip--;
    basic.showNumber(tip);
});
input.onButtonPressed(Button.B, function () {
    tip++;
    basic.showNumber(tip);
});
input.onButtonPressed(Button.AB, function () {
    pokusy++;
    if (tip > tajneCislo) {
        basic.showString("Mensi");
    } else if (tip < tajneCislo) {
        basic.showString("Vetsi");
    } else {
        basic.showString("Uhodl jsi na ");
        basic.showNumber(pokusy);
    }
});

let min = 1;
let max = 100;
let tajneCislo = Math.randomRange(min, max);
let pokusy = 0;
let tip = 50;
basic.showNumber(tip);

