import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Item.css";


const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getItem = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      const data = response.data;
      setItem(data);
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };

  useEffect(() => {
    const itemURL = `${ApiURL}object/${id}?apikey=${ApiKEY}`;
    getItem(itemURL);
  }, []);

  return (
    <div>
      {item && (
        <div className="containerItem">
          <h1 className="titleItem">{item.title}</h1>
          <img src={item.primaryimageurl} alt="" className="ImageItem" />
          <div className="descricao">
            <h2 className="subtilte">Descrição:</h2>
            <p>
              Ano de adesão: {item.accessionyear}
            </p>
            <p>
              Classificação: {item.classification}
            </p>
            <p>
              Cultura: {item.culture}
            </p>
            <p>
              Datado em: {item.dated}
            </p>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Item;
