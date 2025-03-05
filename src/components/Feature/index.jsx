import PropTypes from "prop-types"
import "./feature.scss"

function Feature({ features }) {

    if (!features || features.length === 0) {
        return <h1>No Features</h1>;
    }

    return (
        <>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                        <img src={feature.icon} alt="Icon" className="feature-icon" />
                        <h3 className="feature-item-title">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

Feature.propTypes = {
    features: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Feature