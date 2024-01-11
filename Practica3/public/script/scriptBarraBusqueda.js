document.addEventListener("keyup", e=>{

    // console.log(e.target.value)
    if (e.target.matches("#buscador")){ //controlamos la entrada del input
        
        document.querySelectorAll("img.nombreBusqueda").forEach(img =>{ //seleccionamos las fotos con la clase nombreBusqueda
            if (img.alt.toLowerCase().includes(e.target.value.toLowerCase())){ //si su alt coincide con el input la mostramos 
                img.classList.remove("filtro")
            }else {                                                            //si no lo escondemos
                img.classList.add("filtro")
            }
            
            
        })
            
    }

    }
)


//           img.parentElement.parentElement.style.display = ''; // Muestra el contenedor de la marca
//         
//           img.parentElement.parentElement.style.display = 'none'; // Oculta el contenedor de la marca

  