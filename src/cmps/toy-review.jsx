import moment from "moment/moment"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormRegister } from "../hooks/useFormRegister"
import { addReview } from "../store/actions/review.actions"

export const ToyReview = ({ reviews, onAddReview, onRemoveReview }) => {
    
    const dispatch = useDispatch()
    const [newReview, setNewReview] = useState({
        content: '',
    })

    const handleChange = (newReview) => {
        setNewReview(newReview)
    }
    const { user } = useSelector(state => state.userModule)
    const [register] = useFormRegister(newReview, handleChange)


    useEffect(() => {

    }, [reviews])
        


    return <div className="toy-review-container">
        {user && <form onSubmit={(ev) => onAddReview(ev, newReview)} className="add-review-container">
            <h3>Add Review</h3>
            <input {...register('content', 'text')} />
            <button>Submit</button>
        </form>}

            <h3>Reviews</h3>
        {reviews && <div className="reviews-container">
            {reviews.map(review => <section key={review.content}>
                {user.isAdmin && <button onClick={() => onRemoveReview(review._id)} className="remove-review-btn">X</button>}
                <h4>{review.user.fullname}</h4>
                <span>{moment().calendar()}</span>
                <p>{review.content}</p>
                <h5>{review.name}</h5>
                <h5>{review.rating}</h5>
            </section>
            )}
        </div>}
    </div>
}
