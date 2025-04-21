document.addEventListener("DOMContentLoaded", function () {

      src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
  type="module"


    let gif = document.getElementById("gifPanela");
    let audio = document.getElementById("audio");
    let playPauseBtn = document.getElementById("playPauseBtn");
    let isPlaying = false; // Control del estado

    playPauseBtn.addEventListener("click", function() {
        if (!isPlaying) {
            gif.src = "IMG/video02.gif"; // Activa animación
            audio.play(); // Reproduce el audio
        } else {
            gif.src = "IMG/pausa.png"; // Detiene animación
            audio.pause(); // Pausa el audio
        }
        isPlaying = !isPlaying; // Alterna estado
    });

    // Cuando el audio termine, detiene la animación y resetea el botón
    audio.addEventListener("ended", function() {
        gif.src = "IMG/pausa.png"; // Detiene animación
        isPlaying = false; // Reinicia el estado
    });

    // Función para abrir el formulario de compra
    window.abrirFormulario = function (producto, precio) {
        document.getElementById("modalCompra").style.display = "block";
        document.getElementById("total").textContent = precio;
    };

    // Función para cerrar el formulario
    window.cerrarFormulario = function () {
        document.getElementById("modalCompra").style.display = "none";
    };

    // Función para enviar los datos a WhatsApp
    window.enviarWhatsApp = function () {
        const cantidad = document.getElementById("cantidad").value;
        const ciudad = document.getElementById("ciudad").value;
        const direccion = document.getElementById("direccion").value;
        const nombre = document.getElementById("nombre").value;
        const total = document.getElementById("total").textContent;
        
        const mensaje = `Hola, quiero comprar %0AProducto: Panela %0ACantidad: ${cantidad} %0ACiudad: ${ciudad} %0ADirección: ${direccion} %0ANombre: ${nombre} %0ATotal: ${total} COP`;
        window.open(`https://wa.me/3225358942?text=${mensaje}`, "_blank");
    };
});



window.addEventListener('scroll',e=>{            
    var item= document.querySelectorAll('.content')
    item.forEach(element => {
        if(element.getBoundingClientRect().top <  window.innerHeight){
            element.classList.add('visible')
        }
    });
})

document.querySelector(".btn-comprar").addEventListener("click", function (e) {
    let btn = this;
    let ripple = document.createElement("span");
    let rect = btn.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);
    let x = e.clientX - rect.left - size / 2;
    let y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    btn.appendChild(ripple);

    // Eliminar el efecto después de la animación
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
document.querySelectorAll('.social-icon img').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'translateY(-10px)';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'translateY(0)';
    });
  });

  document.querySelectorAll('.social-icon img').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
      icon.style.boxShadow = '0 0 10px #ff6347, 0 0 20px #ff6347, 0 0 30px #ff6347';
    });
    icon.addEventListener('mouseout', () => {
      icon.style.transform = 'scale(1)';
      icon.style.boxShadow = 'none';
    });
  });