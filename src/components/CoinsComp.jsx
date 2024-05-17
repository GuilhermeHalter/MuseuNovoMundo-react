import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllCardComp.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const CoinsComp = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const getCoins = async () => {
    try {
      const response = await axios.get(
        `${ApiURL}object?apikey=${ApiKEY}&page=${currentPage}&size=${itemsPerPage}&classification=Coins`
      );
      if (response.data && response.data.records) {
        const data = response.data.records;
        setCoins(data);
      } else {
        console.error("Invalid API response format:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCoins();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <h1>Coins</h1>
      {coins.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div className="cotainerCard">
          {coins.map((coin) => (
            <div className="Artes" key={coin.id}>
              <Link to={`/item/${coin.id}`}>
              <img src={coin.primaryimageurl || "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/not_found.png?alt=media&token=e6ade276-a274-4c9f-856d-19ddb8856195"} alt="" />
              <h2 className="textTitle">{coin.title}</h2>
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

export default CoinsComp;
