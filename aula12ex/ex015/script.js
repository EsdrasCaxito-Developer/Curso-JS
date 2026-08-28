const verificar = () => {
    let data = new Date(),
        ano = data.getFullYear();

    let fano = document.getElementById("txtano"),
        res = document.querySelector("#res");

    if (fano.length == 0 || fano.value > ano) {
        alert("Veifique os dados e tente novamente");
    }
    else {
        let fsexo = document.getElementsByName("radsexo"),
            idade = ano - Number(fano.value);

        let gen = "";

        fsexo.forEach((sexo) => {
            if (sexo.checked) {
                if (sexo.value == "masc") {
                    gen = "Homem";
                }
                else {
                    gen = "Mulher";
                }
            }
        })

        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`;

        let img = document.createElement("img");
        img.id = "foto";

        if (gen == "Homem") {
            if (idade >= 0) {
                if (idade < 10) {
                    //Criança
                    img.src = "imagens/crianca_homem.jpg";
                }
                else if (idade < 21) {
                    //Jovem
                    img.src = "imagens/jovem_homem.jpg";
                    
                }
                else if (idade < 50) {
                    //Adulto
                    img.src = "imagens/adulto_homem.jpg";
                    
                }
                else {
                    //Idoso
                    img.src = "imagens/idoso_homem.jpg";

                }
            }
        }
        else {
            if (idade >= 0) {
                if (idade < 10) {
                    //Criança
                    img.src = "imagens/criança_mulher.jpg";
                }
                else if (idade < 21) {
                    //Jovem
                    img.src = "imagens/jovem_mulher.jpg";
                    
                }
                else if (idade < 50) {
                    //Adulto
                    img.src = "imagens/adulto_mulher.jpg";
                    
                }
                else {
                    //Idoso
                    img.src = "imagens/idoso_mulher.jpg";

                }
            }
        }

        res.appendChild(img)
    }
}