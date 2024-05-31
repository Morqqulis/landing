import ReactDOM from 'react-dom/client'

import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import './styles/index.scss'
import { Provider } from './providers/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <main>
            <Provider />
        </main>
        <Footer />
    </>
)
