
let num = +prompt('Enter the number of scale')
while (isNaN(num) || num == 0) {
    num = +prompt('This not a number')
}
let total = ""
for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
        if (i == j || i == 0 || j == 0 || i == (num - 1) || j == (num -1)) {
            total = total + "[*]"
        } else {
            total += "   "
        }


    }
    console.log(total)
    total = ""
}