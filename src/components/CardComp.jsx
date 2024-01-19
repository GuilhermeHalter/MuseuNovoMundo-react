import { useState, useEffect } from "react";
import axios from "axios";
import "./CardComp.css"

const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const CardComp = () => {
  
  const [artes, setArtes] = useState([])

  const getArtes = async () => {
    try {
      const response = await axios.get(`${ApiURL}object?apikey=${ApiKEY}`);
      console.log(response);
  
      if (response.data && response.data.records) {
        const data = response.data.records;
        setArtes(data);
      } else {
        console.error("Invalid API response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(()=>{
    getArtes()
  }, [])

  return (
    <div>
      <h1>Artes</h1>
      {artes.length === 0 ? (<p>Carregando...</p>) : (
      artes.map((arte) => (
        <div className="Artes" key={arte.id}>
          <img src={arte.primaryimageurl} alt="" />
          <h2>{arte.title}</h2>
        </div>
      ))
    )}
    </div>
  )
}

export default CardComp