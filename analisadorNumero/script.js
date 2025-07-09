let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
if(isNumero(num.value) && !inlista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
}else{
    alert("valor invalido")
}
num.value = ''
num.focus()
}

function finalizar(){
    if( valores.length == 0){
        alert('Adicione algum valor antes de finalizar')
    }else{
        let tot = valores.length //total de elementos no vetor
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado ${menor}</p>`
        res.innerHTML += `<p> O soma de todos valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores é ${media}</p>`
    }
}