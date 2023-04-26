import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir película";
    const [peliState, setPeliState] = useState({
                titulo: '',
                descripcion: ''
    });

    const{titulo, descripcion} = peliState


    const ConseguirDatosForm = e => {
        e.preventDefault();
        //conseguir datos del form??
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear obj de la peli a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
        }
        //Guardar el estado
        setPeliState(peli);

      //Actualizar//refresh 

      setListadoState(elementos => {
        return [...elementos, peli];
      });


        //Guardar en el almacenamiento local
       
        GuardarEnStorage("pelis", peli);

    }







  return (
    <div className="add" >
    <h3 className="tittle" > {tituloComponente} </h3>

       <strong> {(titulo && descripcion ) && "Has agregado la película:" + titulo }</strong>

    <form onSubmit={ConseguirDatosForm}>
        <input type="text" 
        id="titulo"
        name='titulo'
        placeholder="Titulo" />

        <textarea 
                id='descripcion'
                name="descripcion"
                placeholder="Descripción">

                </textarea>
        <input 
        id='save'
        type="submit" 
        value="Guardar" />
    </form>
</div>
  )
}
