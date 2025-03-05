import './home.scss'
import Feature from '../../components/Feature'
import featureData from '../../data/feature-data.js'

function Home() {

    return (
        <>
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <Feature features={featureData} />
            </main>
        </>
    )
}

export default Home