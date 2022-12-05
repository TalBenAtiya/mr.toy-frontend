import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import backgroundImg from '../assets/img/background.jpg'
import { useFormRegister } from '../hooks/useFormRegister'
import { userService } from '../services/user.service'
import { login, logout } from '../store/actions/user.action'
export const Home = () => {

    const { user } = useSelector(state => state.userModule)
    const dispatch = useDispatch()
    const handleChange = (credentials) => {
        setCredentials(credentials)
    }


    const onLogin = (ev) => {
        ev.preventDefault()
        dispatch(login(credentials))
    }

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    const onLogout = () => {
        dispatch(logout())
    }

    const [register] = useFormRegister(credentials, handleChange)

    return <section className="home">
        <div className='main-layout'>
            {!user ? <form onSubmit={onLogin} className='login-box'>
                <span>
                    <p>L</p>
                    <p>O</p>
                    <p>G</p>
                    <p>I</p>
                    <p>N</p>
                </span>
                <label>Username:</label>
                <input {...register('username', 'text')} />
                <label>Password:</label>
                <input {...register('password', 'password')} />
                <button>Submit</button>
                
                    <Link to={`/signup`}>
                        <div className='sign-up-btn'>not a user? Sign Up</div>
                    </Link>
            </form> :
                <div className='login-box'>
                    Hello, {user.fullname}
                    <button onClick={onLogout} className='logout-btn'>Logout</button>
                </div>}

        </div>
    </section>
}