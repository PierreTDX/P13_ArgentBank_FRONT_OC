import './404.scss'
import { NavLink } from 'react-router-dom'

function Error() {

    return (
        <>
            <div className='bodyPage'>
                <main className="main bg-dark error">
                    <h1>This page does not exist</h1>
                    <NavLink to={'/'}>return home</NavLink >
                </main>
            </div>
        </>
    )
}

export default Error