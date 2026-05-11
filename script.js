// Seleção dos elementos
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const temaBtn = document.getElementById('tema-btn');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Função de validação do formulário
formulario.addEventListener('submit', function(event) {

    // Impede recarregamento da página
    event.preventDefault();

    // Campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples
    if(nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos.');
        return;
    }

    // Validação de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)) {
        alert('Digite um e-mail válido.');
        return;
    }

    // Mensagem de sucesso
    resultado.innerHTML = 'Mensagem enviada com sucesso!';

    // Limpa formulário
    formulario.reset();
});

// Alternância de tema claro/escuro
temaBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Menu responsivo
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});
