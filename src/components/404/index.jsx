import './404.scss'
import { NavLink } from 'react-router-dom'

function Error() {

    return (
        <>
            <div className='bodyPage'>
                <main className="main bg-dark error">
                    <h1>Cette page n&apos;existe pas</h1>
                    <NavLink to={'/'}>retour accueil</NavLink >
                </main>
            </div>
        </>
    )
}

export default Error