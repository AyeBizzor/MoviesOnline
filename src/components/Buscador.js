import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {


const [busqueda, setBusqueda] = useState('');
  const buscarPeli = (e) => {
    //Crear estado y actualizarlo para obtener esa palabra
      setBusqueda(e.target.value);
      console.log(busqueda)

    //El listado completo de pelis

    console.log(listadoState)

    //Filtrarlo para tener la coincidencia con lo q busco
 // let pelis_encontradas = listadoState.filter(peli => {
 //  return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
 // });
    //Comprobar 
//if(busqueda.length <= 1){
//  pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
}
 // 
 //console.log(pelis_encontradas)

    //Actualizar el estado del listado principal con lo que filtré

  //setListadoState(pelis_encontradas);
  }




  return (
    <>
    <div className="search" >
       <h3 className="tittle" >¿Qué estás buscando?</h3>
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

