import { useEffect } from 'react'
import { useState } from 'react'
import { getUsers } from '../utils'

const Table = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(users => setUsers(users.users))

        return () => setUsers([])
    }, [])

    return (
        <section className={`py-10`}>
            <div className="container ">
                <h1 className={`title mb-10`}>Table</h1>

                <table className={`table w-full`}>
                    <thead>
                        <tr>
                            <th className={`border border-green-800`}>First Name</th>
                            <th className={`border border-green-800`}>Last Name</th>
                            <th className={`border border-green-800`}>Email</th>
                            <th className={`border border-green-800`}>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr className={`text-center`} key={user.id}>
                                <td className={`border border-cyan-500`}>{user.firstName}</td>
                                <td className={`border border-cyan-500`}>{user.lastName}</td>
                                <td className={`border border-cyan-500`}>{user.email}</td>
                                <td className={`border border-cyan-500`}>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Table
