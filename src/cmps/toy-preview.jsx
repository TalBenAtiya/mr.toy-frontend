import { Link } from "react-router-dom"
import {SiCkeditor4} from "react-icons/si"
import {IoTrashBin} from "react-icons/io5"


export const ToyPreview = ({ toy, onRemoveToy, user}) => {



    return <section className="toy-preview">
        {user?.isAdmin &&<Link  to={`/edit/${toy._id}`}><button className='edit-btn'><SiCkeditor4 title="Edit"/></button></Link>}
        {user?.isAdmin &&<button onClick={() => onRemoveToy(toy._id)} className='remove-btn'><IoTrashBin title="Remove" /></button>}
        <h3>{toy.name}</h3>
        <img src={require(`../assets/img/${toy.img}.png`)} />
        <div className="toy-lables">
            {toy.labels.map(label => <span key={label}>{label}</span>)}
        </div>
        <div className="preview-btns">
            <button className='add-to-cart-btn'>Add To Cart</button>
            <h4>${toy.price}</h4>
           <Link to={`/toys/${toy._id}`}>
           <button className='details-btn'>Details</button>
           </Link> 
        </div>
    </section>
}