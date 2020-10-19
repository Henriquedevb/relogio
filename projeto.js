function carregar() {
    let mensagem = window.document.getElementById('msg');
    let imagem = window.document.getElementById('imagem');
    let data = new Date();
    let hora =  data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    mensagem.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`

    if(hora >= 0 && hora < 12) {

        imagem.src = 'manha.png'
        document.body.style.background = '#F9FBF2'
        //MANHA

    } else if (hora > 12 && hora <= 18) {
        
        imagem.src = 'tarde.png'
        document.body.style.background = '#66CC96'
        //TARDE

    } else if (hora > 18) {

        imagem.src = 'noite.png'
        document.body.style.background = '#242331'
        //NOITE

    }
}

window.setInterval(carregar, 1000);