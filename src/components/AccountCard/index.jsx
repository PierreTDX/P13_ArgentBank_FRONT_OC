import PropTypes from "prop-types"
import "./accountCard.scss"

function AccountCard({ accounts }) {

    if (!accounts || accounts.length === 0) {
        return <h1>No Account</h1>;
    }

    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map((account, index) => (
                <section className="account" key={index}>
                    <div className="account-content-wrapper">
                        <h3 className="account-title">{account.title} ({account.accountNumber})</h3>
                        <p className="account-amount">${account.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
                        <p className="account-amount-description">{account.description}</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            ))}
        </>
    )
}

AccountCard.propTypes = {
    accounts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default AccountCard