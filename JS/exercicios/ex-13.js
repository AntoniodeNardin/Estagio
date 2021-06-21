let num = [4, 2, 1, 3, 5]
num[5] = 7
num.push(10)
num.sort(function(a, b){return a-b})
console.log(`o vetor tem ${num.length} posiçoes`)
console.log(`o vetor em ordem crescente é ${num}`)
console.log(`o ultimo valor é ${num[num.length]}`)
console.log(`o valor 7 esta na posição ${num.indexOf(7)}`)

for (let index = 0; index < num.length; index++) {
    console.log(`a posição ${index} tem o valor: ${num[index]}\n`)
}
for (let i in num){
    console.log(`a posição ${i} tem o valor: ${num[i]}`)
}