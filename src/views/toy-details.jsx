import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getToy, setToy } from "../store/actions/toy.action"
import { HiBackspace } from "react-icons/hi"
import moment from "moment/moment"
import { Loader } from "../cmps/loader"
import { addReview, loadReviews, removeReview, setReviews } from "../store/actions/review.actions"
import { ToyReview } from "../cmps/toy-review"
import { Chat } from "../cmps/chat"


export const ToyDetails = () => {

    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()


    const { reviews } = useSelector(state => state.reviewModule)
    const { user } = useSelector(state => state.userModule)
    const { toy, isLoading } = useSelector(state => state.toyModule)

    useEffect(() => {
        const toyId = params.toyId
        dispatch(getToy(toyId))
        dispatch(loadReviews({ byToyId: toyId }))
        return () => {
            dispatch(setReviews([]))
            dispatch(setToy(null))
        }
    }, [])

    const onGoBack = () => {
        navigate('/toys')
    }

    const onAddReview = (ev, newReview) => {
        ev.preventDefault()
        newReview.byToyId = toy._id
        dispatch(addReview(newReview))
    }

    const onRemoveReview = (reviewId) => {
        dispatch(removeReview(reviewId))
    }


    if (isLoading) return <Loader />
    if (!toy) return <Loader />
    return <section className="toy-details main-layout">
        <Chat toy={toy} />
        <button onClick={onGoBack} className="back"><HiBackspace /></button>
        <h3>{toy.name}</h3>
        <img src={require(`../assets/img/${toy.img}.png`)} />
        <div className="toy-properties">
            <p>{moment(toy.createdAt).format("MMM Do YY")}</p>
            <h4 className="price">{`$` + toy.price}</h4>
            <h4 className={toy.inStock ? 'available' : 'unavailable'}>
                {toy.inStock ? 'Toy Available' : 'Not In Stock'}</h4>
        </div>
        <ToyReview onRemoveReview={onRemoveReview}
            onAddReview={onAddReview}
            toyId={toy._id}
            reviews={reviews} />
    </section>
}