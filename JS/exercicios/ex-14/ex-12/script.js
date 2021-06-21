let num = window.document.getElementById('fnum')
let lista = window.document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []
function isNumero(n){
if (Number(n) >= 1 && Number(n) <=100 ) {
    return true
}else{
    return false
}
}
function isLista(n, l){
if (l.indexof(Number(n)) != -1) {
    return true
}else{
    return false
}
}
function adicionar() {
if (isNumero(num.value) && isLista(num.value, valores)) { 
  window.alert('tudo ok')
}else{
    window.alert('[ERRO] Número ja está na lista.') 
}
}



