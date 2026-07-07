import React,{useState} from "react";
import cake from "../assets/images/cake.jpg";
import beautifulcity from "../assets/images/beautifulcity.jpg";
import city from "../assets/images/city.jpg";
import congrats from "../assets/images/congrats.jpg";
import gate from "../assets/images/gate.jpg";
import leaf from "../assets/images/leaf.jpg";
import life from "../assets/images/life.jpg";
import nature from "../assets/images/nature.jpg";
import pizza from "../assets/images/pizza.jpg";
import night from "../assets/images/night.jpg";
import room from "../assets/images/room.jpg";
import waterfall from "../assets/images/waterfall.jpg";

import '../style/homestyle.css'

import Imagecard from "./Imagecard";

function Home() {
const [selectedImage, setSelectedImage] = useState(null);

function openModal(imgUrl){
setSelectedImage(imgUrl);
}

function closeModal(){
  setSelectedImage(null);
}

  const imageArray = [
    { id: 1, src: cake, alt: "cake image" },
    {
      id: 2,
      src: beautifulcity,
      alt: "beautifulcity image",
    },
    {
      id: 3,
      src: city,
      alt: "city image",
    },
    {
      id: 4,
      src: congrats,
      alt: "congrats image",
    },
    {
      id: 5,
      src: gate,
      alt: "gate image",
    },
    {
      id: 6,
      src: leaf,
      alt: "leaf image",
    },
    {
      id: 7,
      src: life,
      alt: "life image",
    },
    {
      id: 8,
      src: nature,
      alt: "nature image",
    },
    {
      id: 9,
      src: pizza,
      alt: "pizza image",
    },
    {
      id: 10,
      src: night,
      alt: "night image",
    },
    {
      id: 11,
      src: room,
      alt: "room image",
    },
    {
      id: 12,
      src: waterfall,
      alt: "waterfall image",
    },
  ];
  return (
   <>
    <div className="home-div">
      {imageArray.map((i) => {
        return(
          <>
          
            <Imagecard key={i.id} src={i.src} alt={i.alt} onView={()=>openModal(i.src)}/>
          
          </>
        )
      })}
    </div>

    {
      selectedImage && (
        <div className="modal-overlay">
         <div className="modal">
           <button onClick={()=>closeModal()} className="close-btn">close</button>
          <img src={selectedImage} alt="modal image" className="modal-image"/>
         </div>
        </div>
      )
    }
   </>
  );
}

export default Home;
