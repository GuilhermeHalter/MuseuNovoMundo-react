import "./HeaderComp.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";


const HeaderComp = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!search) return

    navigate(`/search?q=${search}`);
    setSearch("");

  };

  return (
    <nav className="navbar">
    <h2>
      <Link to={"/"}>Titulo</Link>
    </h2>
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
      <Link to={"/artes"}>Artes</Link>
      </li>
      <li>
      <Link to={"/coins"}>Coins</Link>
      </li>
      <li>
      <Link to={"/esculturas"}>Esculturas</Link>
      </li>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Busque aqui" 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
        />
        <button type="submit">
        <IoSearchOutline />
        </button>

      </form>

      
    </ul>
  </nav>
  )
}

export default HeaderComp