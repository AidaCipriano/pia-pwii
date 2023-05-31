import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from '../Components/NavigationLayout';
import './Test.css'

import { useState, useEffect } from "react";
import {ref, uploadBytes, getDownloadURL, listAll, list,} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const MiPerfil = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (

    <div>
    <Navigation />
    <Container> 
    <div className='card card-body'>
<h3 className='text-center'>Agregar Productos</h3>
<form /*onSubmit={uploadFile}*/ >
<label>Nombre: </label>
<div className='form-group'>
    <input type="text" placeholder='Ingresa el nombre del producto' id='nombre' className='form-control mt-1' required />
</div>

<label>Precio: </label>
<div className='form-group'>
    <input type="text" placeholder='Ingresa el precio' id='precio' className='form-control mt-1' required />
</div>
<label>Agregar Imagen: </label>



<input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        className='form-control' />
      <button  className='btn btn-primary mt-3 form-control'onClick={uploadFile}> Upload Image</button>



   
</form>
</div>

</Container>
{imageUrls.map((url) => {
return <img src={url} />;
})}

</div>


    
  );
}

export default MiPerfil;
/*

 <div>
              <Navigation />
              <Container> 
              <div className='card card-body'>
          <h3 className='text-center'>Agregar Productos</h3>
          <form /*onSubmit={uploadFile} >
          <label>Nombre: </label>
          <div className='form-group'>
              <input type="text" placeholder='Ingresa el nombre del producto' id='nombre' className='form-control mt-1' required />
          </div>

          <label>Precio: </label>
          <div className='form-group'>
              <input type="text" placeholder='Ingresa el precio' id='precio' className='form-control mt-1' required />
          </div>
        <label>Agregar Imagen: </label>
       
        <input  type="file" onChange={(event) => { setImageUpload(event.target.files[0]);  }}  className='form-control'/>
        <button  className='btn btn-primary mt-3 form-control' onClick={uploadFile}> Guardar</button>
        
      </form>
  </div>
     
          </Container>
         {imageUrls.map((url) => {
          return <img src={url} />;
        })}
          
          </div>


          <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
    </div>

*/ 