import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AllCardComp.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const EsculturasComp = () => {
  const [esculturas, setEsculturas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const getEsculturas = async () => {
    try {
      const response = await axios.get(
        `${ApiURL}object?apikey=${ApiKEY}&page=${currentPage}&size=${itemsPerPage}&classification=Sculpture`
      );

      if (response.data && response.data.records) {
        const data = response.data.records;
        setEsculturas(data);
      } else {
        console.error("Invalid API response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getEsculturas();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Sculptures</h1>
      {esculturas.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div className="cotainerCard">
          {esculturas.map((escultura) => (
            <div className="Artes" key={escultura.id}>
              <Link to={`/item/${escultura.id}`}>
              <img
                src={escultura.primaryimageurl || "src/media/image-not-found.jpg"}
                alt=""
              />
              <h2 className="textTitle">{escultura.title}</h2>
              </Link>
            </div>
          ))}
          </div>
          <div className="buttonPage">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="ButtonNP">
              <FaArrowLeft /> Página Anterior 
            </button>
            <button onClick={handleNextPage} className="ButtonNP">
              Próxima Página <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EsculturasComp;
