import { useState } from "react";
import { useFormRegister } from "../hooks/useFormRegister";
import { userService } from "../services/user.service";

export const Signup = () => {

    const handleChange = (credentials) => {
        setCredentials(credentials)
    }

    const onSignup = (ev) => {
        ev.preventDefault()
        userService.signup(credentials)
    }

    const [credentials, setCredentials] = useState({
        fullname: '',
        username: '',
        password: '',
    })

    const [register] = useFormRegister(credentials, handleChange)
    return <section className="signup">
        <h2>Sign Up</h2>
        <pre className="signup-info">Join us to unlock all Features
            <br /> and Updates on <span>Mr.Toy</span>
        </pre>
        <form onSubmit={onSignup}>
            <label>Fullname:</label>
            <input {...register('fullname', 'text')} />
            <label>Username:</label>
            <input {...register('username', 'text')} />
            <label>Password:</label>
            <input {...register('password', 'password')} />
            <button>Submit</button>
        </form>
    </section>
}