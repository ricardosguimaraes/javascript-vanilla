function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if( fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] VERIFIQUE OS DADOS')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //bebe
                img.setAttribute('src','img/mBebe.jpg')
            }else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','img/mJovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img/mAdulto.jpg')
            }else{
                //idoso
                img.setAttribute('src','img/mIdoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //bebe
                img.setAttribute('src','img/fBebe.jpg')
            }else if(idade >=10 && idade < 21){
                //jovem
                img.setAttribute('src','img/fJovem.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','img/fAdulto.jpg')
            }else{
                //idoso
                img.setAttribute('src','img/fIdoso.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}