import React from 'react';
import Container from 'react-bootstrap/Container';
import Navigation from '../Components/NavigationLayout';
import './Test.css'

import { getFirestore, collection, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../firebase"

const db= getFirestore(app)
const storage = getStorage(app)

const MiPerfil = () => {
  
  let urlImDesc;

    const guardarProductos = async(e)=>{
      e.preventDefault()
      const nombre = e.target.nombre.value;
      const precio = e.target.precio.value;

      const newProduct = {
        nombre: nombre,
        precio: precio,
        imagen: urlImDesc
      }

      try{
        await updateDoc(collection(db, 'productos'), {
            ...newProduct
        })
      } catch (error){
         console.log(error);
      }  

      e.target.nombre.value='';
      e.target.precio.value='';
      e.target.file.value='';
  
    }

    const fileHandler = async(e)=>{
      const archivoI = e.target.files[0];
      const refArchivo = ref(storage, `documentos/${archivoI.name}`)
      await uploadBytes(refArchivo, archivoI)

      urlImDesc = await getDownloadURL(refArchivo)
    }
    
    

   



        return  (
          
            <div>
              <Navigation />
              <Container> 
              <div className='card card-body'>
          <h3 className='text-center'>Agregar Productos</h3>
          <form onSubmit={guardarProductos}>
            <label>Nombre: </label>
              <div className='form-group'>
                  <input type="text" placeholder='Ingresa el nombre del producto' id='nombre' className='form-control mt-1' required />
              </div>

              <label>Precio: </label>
              <div className='form-group'>
                  <input type="text" placeholder='Ingresa el precio' id='precio' className='form-control mt-1' required />
              </div>
            <label>Agregar Imagen: </label>
            <input type="file" placeholder='Agregar imagen' id='file' className='form-control' onChange={fileHandler} />

            <button className='btn btn-primary mt-3 form-control'>Guardar</button>
          </form>
      </div>
              </Container>
              </div>
        
              )
            
      
    

}

export default MiPerfil;