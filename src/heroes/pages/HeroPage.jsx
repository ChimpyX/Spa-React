import { useNavigate, useParams } from "react-router-dom"
import { getHerosbyID } from "../helpers/getHerosbyID";



export const HeroPage = () => {

  const { id} = useParams();
  const hero = getHerosbyID(id);
  const url = useNavigate();

  console.log("",hero);

  const handleReturn = () =>{
    if (hero.tipo === 'anime') {
        url('/animes');
    } else {
        url('/comics');
    }
  }

  return (
    <>
    {
      hero ? (<div className="card">
        <div className="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src={`/assets/heroes/${hero.id}.jpg`} className="img-fluid"/>
          <a href="#!">
            <div className="mask"></div>
          </a>
        </div>
        <div className="card-body">
          <h5 className="card-text">{hero.nombre}</h5>
          <p className="card-text">{hero.origen}</p>
          <p className="card-text">{hero.tipo}</p>
          <p className="card-text">{hero.descripción}</p>
          <button className="btn btn-primary" data-mdb-ripple-init onClick={handleReturn}>Volver</button>
        </div>
      </div>
      

    
    
    
    
    ) : (
            <h1>
                El heroe no se a encontrado...
            </h1>
        ) 
    }  
      
    </>
  )
}
