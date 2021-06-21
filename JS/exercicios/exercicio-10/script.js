function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')

if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO]Verifique os dados e tente novamente!')
}else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    //res.innerHTML = `sua idade é : ${idade}`
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        window.document.body.style.backgroundColor = 'rgba(0, 162, 255, 0.452)'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'foto-bebe-m.png')
        }
        else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'foto-jovem-m.png')
        }
        else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'foto-adulto-m.png')
        }
        else{
            //idoso
            img.setAttribute('src', 'foto-idoso-m.png')
        }
 
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        window.document.body.style.backgroundColor = '#F98C88'
     if (idade >=0 && idade<10) {
        //criança
        img.setAttribute('src', 'foto-bebe-f.png')
    }
    else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'foto-jovem-f.png')
    }
    else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'foto-adulto-f.png')
    }
    else{
        //idoso
        img.setAttribute('src', 'foto-idoso-f.png')
    }
} 
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
}
}

