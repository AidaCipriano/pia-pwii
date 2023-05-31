import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import Navigation from '../Components/NavigationLayout';
import Cards from '../Components/Cards'
import './Test.css'

import { useState, useEffect } from "react";
import {ref, uploadBytes, getDownloadURL, listAll, list,} from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const Test= () => {
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

    return  (
      
        <div>
          <Navigation />
          
         
          {imageUrls.map((url) => {
return <img src={url} />;
})}
          
          
          </div>
    )
}

export default Test;