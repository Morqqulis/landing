import { navList } from '@data/index'
import Logo from '@ui/Logo'

const Header = () => {
    return (
        <header className={`py-5 lg:py-10`}>
            <div className={`container`}>
                <nav className={`flex items-center justify-between gap-2.5`}>
                    <Logo />
                    <ul className={`flex items-center gap-2.5`}>
                        {navList.map(item => (
                            <li key={item.id}>
                                <a className={`p-5 duration-300 hover:text-blue-500 hover:underline`} href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
