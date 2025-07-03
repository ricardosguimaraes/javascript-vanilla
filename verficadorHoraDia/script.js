function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora}:${minuto}`
    if (hora >= 0 && hora < 12){
        img.src= 'img/manha.jpg'
        document.body.style.background = '#fdf3d2'
    }else if (hora > 12 && hora <= 18){
        img.src= 'img/tarde.jpg'
        document.body.style.background = '#eaf2fd'
    }else{
        img.src= 'img/noite.jpg'
        document.body.style.background = '#3e3b36'
        document.querySelectorAll('h1,footer')
                .forEach(el=>el.style.color = 'white'); //arrow-function ainda devo aprender.
     }
}