import { useEffect, useState } from 'react'
import { getTodos } from '../utils'

const Table = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getTodos().then(todos => {
            setTodos(todos.todos)
            console.log(todos)
            setLoading(false)
        })

        return () => setTodos([])
    }, [])

    return (
        <section className={`py-10`}>
            <div className="container ">
                <h1 className={`title mb-10`}>Table</h1>

                {loading && <h2 className={`subtitle`}>Loading...</h2>}

                {!loading && (
                    <table className={`table w-full`}>
                        <thead>
                            <tr>
                                <th className={`border border-green-800`}>Todo Id</th>
                                <th className={`border border-green-800`}>Todo</th>
                                <th className={`border border-green-800`}>Completed</th>
                                <th className={`border border-green-800`}>User ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos
                                .sort((a, b) => a.id - b.id)
                                .map(todo => (
                                    <tr className={`text-center`} key={todo.id}>
                                        <td className={`border border-cyan-500`}>{todo.id}</td>
                                        <td className={`border border-cyan-500`}>{todo.todo}</td>
                                        <td className={`border border-cyan-500`}>{todo.completed ? 'Yes' : 'No'}</td>
                                        <td className={`border border-cyan-500`}>{todo.userId}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    )
}

export default Table
