import facebook from '@assets/Footer/facebook.svg'
import instagram from '@assets/Footer/insta.svg'
import linkendin from '@assets/Footer/linkedin.svg'
import youtube from '@assets/Footer/youtube.svg'

const list = [
    {
        id: 1,
        src: facebook,
        link: '#'
    },
    {
        id: 2,
        src: linkendin,
        link: '#'
    },
    {
        id: 3,
        src: youtube,
        link: '#'
    },
    {
        id: 4,
        src: instagram,
        link: '#'
    }
]
const SocialList = () => {
    return (
        <ul className={`flex -translate-x-3 gap-2`}>
            {list.map(item => (
                <li key={item.id}>
                    <a className={`block duration-300 hover:scale-110`} href={'#'}>
                        <img src={item.src} alt="social icon" width={40} height={40} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialList
