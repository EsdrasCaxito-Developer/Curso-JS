const gerarTabuada = () =>{
    let numero = document.getElementById('numero'),
        tabuada = document.getElementById('seltab');

    let n = Number(numero.value);

    if(n.length == 0){
        alert("Por favor, digite um número")
    }   
    else{
        let c = 1;
        tabuada.innerHTML = `<option value="">
                               Digite um número acima
                             </option>`;

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = \t${n*c}`;
            item.value = `${c}`;
            tabuada.appendChild(item);
            c++;
        }
    }
}