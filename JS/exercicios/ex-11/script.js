function contar() {
let ini = window.document.getElementById('txtini')
let end = window.document.getElementById('txtend')
let passo = window.document.getElementById('txtpasso')
let res = window.document.getElementById('res')
if (ini.value.length == 0 || end.value.length == 0 || passo.value.length == 0 ) {
    window.alert('[ERRO] Faltam dados')  
}else{
    res.innerHTML = 'Contando: '

let i = Number(ini.value)
let f = Number(end.value)
let p = Number(passo.value)
if(p <= 0){
p = 1
}
if (i  < f) {
    for (let c = i; c <= f; c +=p) {
        res.innerHTML += `${c} \u{1F449} `
    }
}else{
    for (let c = i; c >= f; c -=p) {
        res.innerHTML += `${c} \u{1F449} `
    } 
}
res.innerHTML += `\u{1F3C1}`
}
}
