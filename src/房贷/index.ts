const init1 = 16001.48;
const dijian = 55.3;
const cunRate = 0.0475;
// 0.485
// 0.66
const lixi1 = 5584.81;
function sum(i: number) {
    const huan = init1 - dijian * (i - 1);
    if (i === 1) {
        return init1;
    } else {
        return sum(i - 1) + huan;
    }
    if (i === 0) {
        return 0;
    }
}
function jihui(len: number) {
    let lixi = 0;
    for (let i = 0; i < len; i++) {
        const huan = init1 - dijian * i;
        // const jihui = ((huan * (len - 1)) / 12) * cunRate;
        const jihui = huan * Math.pow(1 + cunRate / 12, len - 1)-huan
        lixi += jihui;
    }
    return Math.round(lixi);
}
function lixi(n: number) {
    return Math.round(lixi1 * n - ((n * (n - 1)) / 2) * dijian);
}
function sunshi(n: number) {
    return Math.round(jihui(n) + lixi(n));
}
const yue = 12;
console.log(lixi(yue));
console.log(jihui(yue));
console.log(sunshi(yue));
console.log(sum(yue));
function realRate() {
    return Math.pow(1 + 0.0637 / 12, 12);
}
console.log(realRate());
