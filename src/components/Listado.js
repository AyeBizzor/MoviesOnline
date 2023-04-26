import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {
//const [listadoState, setListadoState] = useState([]);

const [editar, setEditar] = useState(0)
  
  

  useEffect(()=>{
    console.log("componentes del listado cargado!")
    conseguirPeliculas();
  }, []);
  

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas)
    return peliculas;
  }

const borrarPeli = (id) => {
  //Conseguir peliculas almacenadas
  let pelis_almacenadas = conseguirPeliculas();
  //Filtrar las pelis para que elimine del array la que no quiero
  let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
  console.log(pelis_almacenadas, nuevo_array_pelis);
  //Actualizar estado del Listado.js
  setListadoState(nuevo_array_pelis);
  //Actualizar los datos en localStorage
  localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
}

  return (
    <>
    {listadoState != null ? 
    listadoState.map((peli,index) => {
      
      return (
        <article key={index} className="peli-item" > 
        <h3 className="title" > {peli.titulo} </h3>
        <p className="desciption"> {peli.descripcion} </p>

        <button className="edit" onClick={() => {
          setEditar(peli.id);
        }} > Editar  </button>
        <button className="delete" onClick={()=> borrarPeli(peli.id)} > Borrar </button>
       

        {editar === peli.id && (
        <Editar  peli={peli}
        conseguirPeliculas={conseguirPeliculas} 
        setEditar= {setEditar}
        setListadoState= {setListadoState} />
      )}
        



       </article>
      );
       
    })
  : <h2>No hay peliculas para mostrar</h2>
  }
    </>
  )
}


// conseguir la key pelis y reflejarlo en la tarjetita