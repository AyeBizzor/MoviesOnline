import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {


  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);


  const buscarPeli = (e) => {
    //Crear estado y actualizarlo para obtener esa palabra
      setBusqueda(e.target.value);
      console.log(busqueda)
    
    //aca pego lo que borre
    let pelisEncontradas = listadoState.filter(peli=>{
      return peli.titulo?.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if(busqueda.length<=1 || pelisEncontradas <= 0){
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {

      setNoEncontrado(false);
    }

    


    //console.log(pelisEncontradas);

   setListadoState(pelisEncontradas)


    //hasta aca
  }




  return (
    <>
    <div className="search" >
       <h3 className="tittle" >¿Qué estás buscando?</h3>

       { (noEncontrado === true && busqueda.length > 3)  && (
       <span className='no-encontrado'>No se ha encontrado ninguna coincidencia para tu búsqueda</span> )}
       <form>
           <input type="text" 
           id="search_field"
           name='busqueda'
           autoComplete='off'
           value={busqueda}
           onChange={buscarPeli}
           />
           <button id='search'>Buscar</button>
       </form>
   </div>
   </>
  )
}