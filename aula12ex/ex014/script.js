let carregar = function(){
    let msg = document.getElementById('msg'),
    img = document.getElementById('imagem');

    let data = new Date(),
        hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora < 12){
        img.src = './imagens/manhã.jpg';
        document.body.style.setProperty('--background', '#b8a840');
    }
    else if(hora < 18){
        img.src = './imagens/tarde.jpg';
        document.body.style.setProperty('--background', '#ff9003');
    }
    else{
        img.src = './imagens/noite.jpg';
        document.body.style.setProperty('--background', '#0c0e1b');
    }
}

window.addEventListener('load', carregar);