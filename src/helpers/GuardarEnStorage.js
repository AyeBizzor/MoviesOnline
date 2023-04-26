export const GuardarEnStorage = (clave, elemento) => {

    //conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos)
    //comprobar si es un array
    if(Array.isArray(elementos)){
  //añadir dentro del array un elemento nuevo
  elementos.push(elemento);
    }else{
      //crear un array con la nueva peli
      elementos = [elemento];
    }
    //guardar en el localstorage
    localStorage.setItem("pelis",JSON.stringify(elementos));
    //devolver obj
    return elemento;
  }