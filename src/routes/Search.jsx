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
                  src={item.primaryimageurl || "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/not_found.png?alt=media&token=e6ade276-a274-4c9f-856d-19ddb8856195"}
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
