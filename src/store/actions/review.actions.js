import { reviewService } from "../../services/review.service"

// Action Creators
export function getActionRemoveReview(reviewId) {
  return { type: 'REMOVE_REVIEW', reviewId }
}
export function getActionAddReview(review) {
  return { type: 'ADD_REVIEW', review }
}
export function getActionSetWatchedUser(user) {
  return { type: 'SET_WATCHED_USER', user }
}

export function setReviews(item) {
  return async dispatch => {
    try {
      dispatch({ type: 'SET_REVIEWS', item })

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err)
    }
  }
}


export function loadReviews(toyId) {
  return async dispatch => {
    try {
      const reviews = await reviewService.query(toyId)
      dispatch({ type: 'SET_REVIEWS', reviews })

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err)
    }
  }
}

export function addReview(review) {
  return async dispatch => {
    try {
      const addedReview = await reviewService.add(review)
      dispatch(getActionAddReview(addedReview))
    } catch (err) {
      console.log('ReviewActions: err in addReview', err)
      throw err
    }
  }
}

export function removeReview(reviewId) {
  return async dispatch => {
    try {
      await reviewService.remove(reviewId)
      dispatch(getActionRemoveReview(reviewId))
    } catch (err) {
      console.log('ReviewActions: err in removeReview', err)
      throw err
    }
  }
}
