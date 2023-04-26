import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar pelicula";
    const guardarEdicion = (e, id) => {
        e.preventDefault();
        //Tengo que conseguir el target del evento, es decir, los datos del formulario que ya está:
        let target = e.target
        //Buscar el indice del obj de la pelicula a actualizar dentro del localstorage
        const pelis_almacenadas= conseguirPeliculas();
        const indice= pelis_almacenadas.findIndex(peli => peli.id === id);  
        console.log(pelis_almacenadas)     
        //Esa porcion de codigo de arriba me busca el indice del objeto donde estoy parada.
        // Ahora tengo que crear un obj con ese indice:

       console.log(indice)
       let peli_actualizada = {
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      };
      console.log(peli_actualizada)


      //Actualizar el elemento con ese indice
      pelis_almacenadas[indice] = peli_actualizada

      //Hasta acá se puede ver en consola que los datos se modifican, pero si damos F5 o refrescamos la pagina, lo moficiado se pierde. Entonces quedan dos pasos:

      //Guardar el nuevo arreglo obj en el localstorage
      localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));
      //actualizar estados
      setListadoState(pelis_almacenadas);
      setEditar(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='tittle'> {titulo_componente}</h3>
    <form onSubmit={e => guardarEdicion(e, peli.id)}>
    <input type='text'
           name='titulo'
           className='titulo_editado'
           defaultValue= {peli.titulo} />

    <textarea 
                name='descripcion'
                defaultValue= {peli.descripcion}
                className='descripcion_editada'/>

    <input type='submit' className='editar' value='Actualizar'/>

    </form>


    </div>
  )
}
