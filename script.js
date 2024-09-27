function mudarImagem(imagem) {
    document.body.style.backgroundImage = `url(${imagem})`;
    document.body.style.backgroundSize = 'cover'; // Para cobrir toda a tela
    document.body.style.backgroundPosition = 'center'; // Centralizar a imagem
}

// Defina uma imagem padrão quando a página carregar
window.onload = function() {
    mudarImagem('imagem1.jpg'); // Imagem padrão
};
