function contar(){
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0  || passo.value.length == 0 ){
        alert ("Preencha todos campos para executar o contador")
        res.innerHTML = "Impossível contar"
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0) {
            window.alert("Passo precisa ser no minimo 1 , vamos considerar o passo igual a 1")
            p=1
        }
        if ( i < f){
          for (let c = i; c<= f; c+= p){
            res.innerHTML += `${c} \u{2192} `
        }         
        }else {
            for (let c = i; c>= f; c-= p){
            res.innerHTML += `${c} \u{2192} `
        }
    }
    res.innerHTML += 'Fim'  
        
    }
}