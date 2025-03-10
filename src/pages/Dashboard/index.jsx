import './dashboard.scss'
import EditNameForm from '../../components/EditNameForm'
import AccountCard from '../../components/AccountCard'
import accountData from '../../data/account-data.json'
import { selectUser } from '../../app/selectors'
import { useSelector } from "react-redux"

function Dashboard() {
    const { id } = useSelector(selectUser)
    // Filtrer tous les comptes où l'`id` est présent dans le tableau `userId`
    const userAccounts = accountData.filter(account => account.userId.includes(id)) || []

    return (
        <>
            <div className='bodyPage'>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back</h1>
                        <EditNameForm />
                    </div>
                    <AccountCard accounts={userAccounts} />
                </main>
            </div>
        </>
    )
}

export default Dashboard