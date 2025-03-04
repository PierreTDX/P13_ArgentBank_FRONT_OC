import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { logoutAction } from "../../app/logSlice" // Import de l'action logout
import { useNavigate } from "react-router-dom"

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        // Déclenche l'action de déconnexion
        dispatch(logoutAction())

        // Redirige vers la page d'accueil après déconnexion
        navigate("/")
    }, [dispatch, navigate])

    return (
        <>
            <div className='bodyPage'>
                <main className="main bg-dark error">
                    <h1>Disconnection in progress...</h1>
                </main>
            </div>
        </>
    )
}

export default Logout
