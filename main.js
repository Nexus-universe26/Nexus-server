function trocarPagina(pagina) {
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(p => p.style.display = 'none');

    document.getElementById(pagina).style.display = 'block';
}

function entrarDiscord() {
    window.location.href = "https://discord.gg/seulink";
}
