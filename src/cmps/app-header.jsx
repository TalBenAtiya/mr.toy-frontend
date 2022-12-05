import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { logout } from "../store/actions/user.action"
export const AppHeader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.userModule)

    const onLogin = () => {
        navigate('/')
    }

    const onLogout = () => {
        dispatch(logout())
        navigate('/')
    }

    return <header className="app-header">
        <div className="main-header main-layout">
            <div className="logo">
                <h1>Mr.Toy</h1>
            </div>
            <nav>
                {user ? <button onClick={onLogout} className="header-user-log-btn">Logout</button> :
                    <button onClick={onLogin} className="header-user-log-btn">Login</button>}
                <NavLink to="/about">About</NavLink>
                <NavLink to="/toys">Shop</NavLink>
                <NavLink to="/">Home</NavLink>
            </nav>
        </div>
        <div className="header-sign-up main-layout">
                {!user && <Link to="/signup"><p >not a user? Sign Up</p></Link>}
        </div>
    </header>
}