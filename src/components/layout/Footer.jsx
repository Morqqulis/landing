import FooterList from '@ui/FooterList'
import Logo from '../ui/Logo'
import SocialList from '../ui/SocialList'

const Footer = () => {
    return (
        <footer className={`py-12`}>
            <div
                className="container flex justify-between
            gap-2.5"
            >
                <div className={`flex flex-col gap-20`}>
                    <Logo />
                    <SocialList />
                </div>
                <div className={`mr-20 flex w-full basis-1/3 justify-between gap-5`}>
                    <FooterList />
                    <FooterList />
                    <FooterList />
                </div>
            </div>
        </footer>
    )
}

export default Footer
