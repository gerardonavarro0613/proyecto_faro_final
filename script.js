// NAVBAR
const enlacesMenu = document.querySelectorAll('.navbar-nav .nav-link');
const menuPrincipal = document.getElementById('menuPrincipal');

enlacesMenu.forEach((enlace) => {
  enlace.addEventListener('click', () => {
    const menuAbierto = menuPrincipal.classList.contains('show');

    if (menuAbierto) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(menuPrincipal);
      collapse.hide();
    }
  });
});

// SCROLL ACTIVO
const secciones = document.querySelectorAll('section[id], header[id]');

window.addEventListener('scroll', () => {
  let actual = '';

  secciones.forEach((seccion) => {
    const inicioSeccion = seccion.offsetTop - 120;

    if (window.scrollY >= inicioSeccion) {
      actual = seccion.getAttribute('id');
    }
  });

  enlacesMenu.forEach((enlace) => {
    enlace.classList.remove('active');

    if (enlace.getAttribute('href') === `#${actual}`) {
      enlace.classList.add('active');
    }
  });
});

// NOVEDADES
const imagenModal = document.getElementById('imagenModal');
const imagenModalFoto = document.getElementById('imagenModalFoto');
const imagenModalTitulo = document.getElementById('imagenModalTitulo');

imagenModal.addEventListener('show.bs.modal', (evento) => {
  const boton = evento.relatedTarget;
  const imagen = boton.getAttribute('data-img');
  const titulo = boton.getAttribute('data-title');

  imagenModalFoto.setAttribute('src', imagen);
  imagenModalFoto.setAttribute('alt', titulo);
  imagenModalTitulo.textContent = titulo;
});

imagenModal.addEventListener('hidden.bs.modal', () => {
  imagenModalFoto.setAttribute('src', '');
});

// ANIMACIONES
const elementosAnimados = document.querySelectorAll('.animar-entrada');

const mostrarElemento = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
      mostrarElemento.unobserve(entrada.target);
    }
  });
}, {
  threshold: 0.12
});

elementosAnimados.forEach((elemento) => {
  mostrarElemento.observe(elemento);
});

// CONTACTO
const formContacto = document.getElementById('formContacto');

formContacto.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  alert(`Gracias, ${nombre}. Tu consulta fue registrada.`);
  formContacto.reset();
});

// FOOTER
const anioActual = document.getElementById('anioActual');
anioActual.textContent = new Date().getFullYear();
