import { useEffect, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { HiBackspace } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { getToy, setToy, updateToy } from "../store/actions/toy.action"

export const ToyEdit = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()

    const { toy } = useSelector(state => state.toyModule)

    const [updatedToy, handleChange] = useForm({
        name: '',
        price: '',
    })
    const inputRef = useRef()

    useEffect(() => {
        const toyId = params.toyId
        if (toyId) dispatch(getToy(toyId))
        return () => {
            dispatch(setToy(null))
        }
    }, [])


    const onSaveToy = (ev) => {
        ev.preventDefault()
        if (toy) {
            toy.name = updatedToy.name
            toy.price = updatedToy.price
            dispatch(updateToy(toy))
            .then(() => navigate('/toys'))
        }
        else {
            dispatch(updateToy(updatedToy))
            .then(() => navigate('/toys'))
        }
    }

    const onGoBack = () => {
        navigate('/toys')
    }

    return <section className="toy-edit main-layout">
        <button onClick={onGoBack} className="back"><HiBackspace /></button>
        <h1>{toy ? 'Edit' : 'Add'} Toy</h1>
        <form onSubmit={onSaveToy}>

            <label htmlFor="name">Name</label>
            <input ref={inputRef} value={updatedToy.name} placeholder={toy && toy.name} onChange={handleChange} type="text" name="name" id="name" />
            
            <label htmlFor="price">Price</label>
            <input ref={inputRef} value={updatedToy.price} onChange={handleChange} placeholder={toy && toy.price} type="number" name="price" id="price" />
            <button>Save</button>
        </form>
    </section>
}