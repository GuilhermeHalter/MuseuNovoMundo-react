import { useState, useEffect } from "react";
import axios from "axios";
import "./Arts.css"

const Arts = () => {
  
  const [artes, setArtes] = useState([])

  const getArtes = async () => {
    try {
      const response = await axios.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects"
      );

      // Extrai os primeiros 100 IDs da lista
      const ids = response.data.objectIDs.slice(0, 10);

      const responses = await Promise.all(
        ids.map((id) =>
          axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        )
      );

      const data = responses.map((response) => response.data);
      console.log(responses);
      setArtes(data);
    } catch (error) {
      console.log("error!");
    }
  };

  useEffect(() => {
    getArtes();
  }, []);


  return (
    <div>
      <div className="title">
        <h1>Artes</h1>
      </div>
      <div></div>
      {artes.length === 0 ? (<p>Carregando...</p>) : (
      artes.map((arte) => (
         <div className="Artes" key={arte.id}>
          <img src={arte.primaryImage} alt="" />
          <h2>{arte.title}</h2>
          <p>Artista: {arte.artistDisplayName === "" ? (<>None</>) : arte.artistDisplayName}</p>
          <p>departamento: {arte.department}</p>
        </div>
      ))
    )}
    </div>
  )
}

export default Arts             
