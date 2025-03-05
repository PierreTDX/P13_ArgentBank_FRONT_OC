import './dashboard.scss'
import EditNameForm from '../../components/EditNameForm'
import AcountCard from '../../components/AcountCard'
import acountData from '../../data/account-data.json'
import { selectUser } from '../../app/selectors'
import { useSelector } from "react-redux"

function Dashboard() {
    const { id } = useSelector(selectUser)
    const userAccounts = acountData.find(user => user.userId === id)?.account || []

    return (
        <>
            <div className='bodyPage'>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back</h1>
                        <EditNameForm />
                    </div>
                    <AcountCard accounts={userAccounts} />
                </main>
            </div>
        </>
    )
}

export default Dashboard