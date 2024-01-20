import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "./AllCardComp.css";

const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const ArtesComp = () => {
  const [artes, setArtes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const getArtes = async () => {
    try {
      const response = await axios.get(
        `${ApiURL}object?apikey=${ApiKEY}&page=${currentPage}&size=${itemsPerPage}&classification=Prints`
      );

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

  useEffect(() => {
    getArtes();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Artes</h1>
      {artes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {artes.map((arte) => (
            
            <div className="Artes" key={arte.id} >
              <Link to={`/item/${arte.id}`}>
              <img src={arte.primaryimageurl || "src/media/image-not-found.jpg"} alt="" />
              <h2>{arte.title}</h2>
              </Link>
            </div>
          ))}
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Página Anterior
            </button>
            <button onClick={handleNextPage}>Próxima Página</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtesComp;
