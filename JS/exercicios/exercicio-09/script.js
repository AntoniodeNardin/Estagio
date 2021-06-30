function carregar() {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('img')
var data =new Date()
var hora = data.getHours() 
var hora = 20
msg.innerHTML = `<h2>Agora são ${hora} horas</h2>`
if (hora >=6 && hora <= 12) {
    img.src = 'img-dia.jpg'
    document.body.style.background = '#F2BE7E'
}else if (hora >12 && hora <= 18) {
    img.src = 'img-tarde.jpg'
    document.body.style.background = '#012626'
}else {
    img.src = 'img-noite.jpg'
    document.body.style.background = '#171C26'
}
}
