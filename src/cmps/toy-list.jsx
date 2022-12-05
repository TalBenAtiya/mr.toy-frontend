import { ToyPreview } from "./toy-preview"

export const ToyList = ({toys, onRemoveToy, user}) => {

    return <section className="toy-list">
        {toys.map(toy => <ToyPreview key={toy._id}
         toy={toy} 
         user={user}
         onRemoveToy={onRemoveToy}
         />)}
    </section>
}