// Menu hamburguer responsivo
const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav.primary ul');
if (toggle && navList) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

// Máscaras simples (CPF, telefone, CEP)
const masks = {
  cpf: v => v.replace(/\D/g,'').replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2'),
  telefone: v => v.replace(/\D/g,'')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d{4})$/, '$1-$2'),
  cep: v => v.replace(/\D/g,'').replace(/(\d{5})(\d{3})$/, '$1-$2')
};

document.querySelectorAll('.input--mask').forEach(input => {
  input.addEventListener('input', e => {
    const id = e.target.id;
    let val = e.target.value;
    if (masks[id]) e.target.value = masks[id](val);
  });
});

// Toast simples ao enviar formulário
const form = document.getElementById('formCadastro');
const toastContainer = document.getElementById('toastContainer');
if (form && toastContainer) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '✅ Cadastro enviado com sucesso!';
    toastContainer.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
    form.reset();
  });
}
