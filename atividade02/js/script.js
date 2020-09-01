window.addEventListener('load', start);
let button = document.querySelector('#button')
function start() {
  button.addEventListener('click', boxAlert);
}

function boxAlert() {
  `
  <div class="dropdown-form">
        <div class="input-box">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Usuário">
        </div>
        <div class="input-box">
          <i class="far fa-envelope"></i>
          <input type="email" placeholder="E-mail">
        </div>
        <div class="input-box">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Senha">
        </div>
      </div>
      `
}