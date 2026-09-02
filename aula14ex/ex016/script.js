//alert("Olá")

const contar = function(){
    let inicio = document.querySelector("#txti"),
        fim = document.querySelector("#txtf"),
        passo = document.getElementById("txtp"),
        res = document.querySelector("#res");

        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            res.innerHTML = "Impossível contar!";
            //alert("Faltam dados!")
        }
        else{
            res.innerHTML = "Contando: <br>";
            let i = Number(inicio.value),
                f = Number(fim.value),
                p = Number(passo.value);

                if(p <= 0){
                    alert("Passo inválido! Considerando passo 1");
                    p = 1;
                }
            
                if(i < f){
                    //Contagem crescente
                    for(let c=i; c <= f; c+=p){
                        res.innerHTML += `${c} \u{1F449}`;
                    }
                }
                else{
                    //Contagem regressiva
                    for(let c=i; c >= f; c-=p){
                        res.innerHTML += `${c} \u{1F449}`;
                    }
                }

                res.innerHTML += `\u{1F3C1}`;
        }
}