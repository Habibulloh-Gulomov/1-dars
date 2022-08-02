
import  "../components/countries.css"

const Card = (props) =>{
  let {common ,region,  flags , population , capital} = props.name
    return(
    <li className="item">
      <img src={flags.png} className='img'></img>
      <div className="info">
      
         <p className="german">{props.name.name.common}</p> 
         <p className="detail"><span>Population:</span>{population}</p>
        <p className="detail"><span>Region:</span>{region}</p>
        <p className="detail"><span>Capital:</span>{capital}</p> 
      </div>
    </li>
  )
}



export default Card;

