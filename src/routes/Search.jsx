import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const ApiURL = import.meta.env.VITE_Api_Url;
const ApiKEY = import.meta.env.VITE_Api_Key;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [itens, setItens] = useState([]);
  const query = searchParams.get("q");

  const getSearchedItens = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response);
      const data = response.data.records;
      setItens(data);
    } catch (error) {
      console.error("Error fetching searched items:", error);
    }
  };

  useEffect(() => {
    const searchWithQueryURL = `${ApiURL}object?apikey=${ApiKEY}&q=${query}`;
    getSearchedItens(searchWithQueryURL);
  }, [query]);
  

  return (
    <div>
      <h1>Resultados para: {query}</h1>
      {itens.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <div className="cotainerCard">
          {itens.map((item) => (
            <div className="Artes" key={item.id}>
              <Link to={`/item/${item.id}`}>
                <img
                  src={item.primaryimageurl || "src/media/image-not-found.jpg"}
                  alt=""
                />
                <h2 className="textTitle">{item.title}</h2>
              </Link>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
