// Iniciando javaScript
// crio um objeto para ficar mais facil de acessar os campos do html 
const html = {
  btnEnviar: document.getElementById('btnEnviar'),
  nome: document.getElementById('nome'),
  telefone: document.getElementById('telefone'),
  endereco: document.getElementById('endereco'),
  assunto: document.getElementById('assunto'),
  myAlert: document.getElementById('alert'),
  bemVindo: document.getElementById('bv')
}
// função para setar as informações que estão em local storange ao abrir a página
window.onload = () => {
  html.nome.value = localStorage.getItem('nome');
  html.telefone.value = localStorage.getItem('telefone');
  html.endereco.value = localStorage.getItem('endereco');
  html.assunto.value = localStorage.getItem('assunto');
  // Monta a mensagem de bem vindo
  if (localStorage.getItem('nome')) {
    html.bemVindo.innerHTML = `<h3>Bem vindo(a) de volta, ${html.nome.value}!</h3>`;
  }
}
// Atribui a função ao botão, verificando se estão preenchidas as informações, e caso tiver salva tudo em localStorage
html.btnEnviar.addEventListener('click', () => {
  if (html.nome.value == '') {
    this.alerting('Informe o nome!', 'Atenção!');
  } else if (html.telefone.value == '') {
    this.alerting('Informe o Telefone!', 'Atenção!');
  } else if (html.endereco.value == '') {
    this.alerting('Informe o Endereço!', 'Atenção!');
  } else if (html.assunto.value == '') {
    this.alerting('Informe o Assunto!', 'Atenção!');
  } else {
    localStorage.setItem('nome', html.nome.value);
    localStorage.setItem('telefone', html.telefone.value);
    localStorage.setItem('endereco', html.endereco.value);
    localStorage.setItem('assunto', html.assunto.value);
    this.alerting('Informações gravadas em localStorange!', 'Sucesso!');
  }
})
// Função de alerta, que recebe o texto e o tipo de alerta 
function alerting(text, type) {
  // Muda a cor de acordo com o tipo
  type == 'Sucesso!'
    ? html.myAlert.style.backgroundColor = '#155900'
    : html.myAlert.style.backgroundColor = '#c48a02';
  // Monta a mensagem
  html.myAlert.innerHTML =
    `<h3 style='margin-top: 3px; margin-left: 7px; margin-bottom: 
    0px'><b>${type}</b></h3>`
    + `<h4 style=' margin-left: 7px; margin-top: 4px'>${text}</h4>`;
  // Faz mostrar o alerta e sumir depois de 2500 ms
  html.myAlert.hidden = false;
  setTimeout(() => {
    html.myAlert.hidden = true
  }, 2500);
}
