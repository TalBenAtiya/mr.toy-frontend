import { useEffect } from "react"
import { toyService } from "../services/toy.service"
import { useDispatch, useSelector } from 'react-redux'
import { loadToys, removeToy, setFilterBy, setToys } from "../store/actions/toy.action"
import { ToyList } from "../cmps/toy-list"
import { Link } from "react-router-dom"
import { Filter } from "../cmps/filter"
import { Loader } from "../cmps/loader"


export const ToyApp = () => {


    const { user } = useSelector(state => state.userModule)
    const { toys, isLoading } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const onRemoveToy = (toyId) => {
        dispatch(removeToy(toyId))
    }

    const onSortBy = (type) => {
        const newToys = toyService.sortBy(type, toys)
        dispatch(setToys(newToys))
    }

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadToys())
    }


    return <section className="toy-app main-layout">
        <div className="side-links">
            {user?.isAdmin &&
                <Link to={`/edit`}>
                    <button className="add-toy-btn">Add Toy</button>
                </Link>}
            <Link to={`/dashboard`}>
                <button className="dashboard-btn">Dashboard</button>
            </Link>

        </div>
        <Filter onSortBy={onSortBy} onChangeFilter={onChangeFilter} />
        <ToyList user={user} toys={toys} onRemoveToy={onRemoveToy} />

    </section>
}