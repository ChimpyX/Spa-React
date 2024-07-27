import { getHerosbyTipo } from "../helpers/getHerosbyTipo"
import { HeroeCard } from "./HeroeCard";


export const HeroeList = ({tipo}) => {

    const heroes = getHerosbyTipo(tipo);
  return (
    <>
        <h1 id="titulo-principal">Heroe List</h1>
        

        <div className="container">
            <div className="col-md-8 offset-md-2">
            {
                heroes.map(aux => (
                    <HeroeCard key= {aux.id} {...aux}/>
                ))
            }
            </div>

        </div>
    </>
  )
}
