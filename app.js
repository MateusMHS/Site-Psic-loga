// MOBILE 

const btnMobile = document.getElementById('btn-mobile');


function toggleMenu() {

  const nav = document.getElementById('nav');
  nav.classList.toggle('active')
}



btnMobile.addEventListener('click', toggleMenu);

// REQUISIÇÃO DO FORMULÁRIO

const form = document.querySelector('#formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que o formulário seja enviado

  const nome = form.elements.nome.value;
  const email = form.elements.email.value;
  const telefone = form.elements.telefone.value;
  const texto = form.elements.texto.value;

  console.log('Nome:', nome);
  console.log('E-mail:', email);
  console.log('Telefone:', telefone);
  console.log('Texto:', texto);

  Swal.fire(
    'Meus Parabéns',
    'Sua mensagem foi enviada!',
    'success'
  )
  form.reset();
});

// CARROSSEL

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 5000)

function proximaImg() {
  cont++

  if (cont > 4) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true
}