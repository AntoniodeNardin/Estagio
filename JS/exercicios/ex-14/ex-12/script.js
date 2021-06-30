let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <=100 ) {
        return true
    }else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
    return true
}else{
    return false
  }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores) ) {
        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor invalido ou ja está na lista ')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos]> maior) {
                maior = valores[pos]
            }
            if (valores[pos]< menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>o maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>o menorr valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores foi: ${soma}</p>`
        res.innerHTML += `<p>media dos valores foi: ${soma/valores.length.toFixed(0)}</p>`
    }
}


