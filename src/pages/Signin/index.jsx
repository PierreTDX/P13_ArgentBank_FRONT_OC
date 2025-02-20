import './signin.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { login } from "./../../app/userSlice"; // Import de l'action login et logout si besoin

function Signin() {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login()); // Connexion de l'utilisateur
        // setTimeout(() => {
        //     dispatch(logout()); // Déconnexion après 10 secondes
        // }, 10000);
    };

    return (
        <>
            <div className='bodyPage'>
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        <form>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                                >Remember me</label>
                            </div>
                            <NavLink to={`/dashboard`} className="sign-in-button" onClick={handleLogin}>Sign In</NavLink>
                        </form>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Signin