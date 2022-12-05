import { useSelector } from "react-redux"
import { useFormRegister } from "../hooks/useFormRegister"
import { MultipleSelectChip } from "./dropdown-select"

export const Filter = ({ onChangeFilter, onSortBy }) => {

    const { filterBy } = useSelector(state => state.toyModule)
    const [register] = useFormRegister(filterBy , onChangeFilter)


    return <section className="filter-by">
        <div>
            <label htmlFor="name">Name: </label>
            <input className="input-filter" {...register('name', 'text')} />

            <label htmlFor="price">Min Price: </label>
            <input className="input-filter" {...register('price', 'text')} />

            <section>
                <input {...register('inStock', 'checkbox')} />
                <label htmlFor="inStock">Availble Only</label>
            </section>
        </div>

        <MultipleSelectChip onChangeFilter={onChangeFilter} />


        <div className="sort-opts">
            <span onClick={() => onSortBy('name')}>Name</span>
            <span onClick={() => onSortBy('price')}>Price</span>
        </div>

    </section>
}
