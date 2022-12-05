import { Map } from "../cmps/map"
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate()

    const onBack = () => {
        navigate('/toy')
    }

    return <section className="about main-layout">
        <h2>Where to find us</h2>
        <Map />
    </section>
}