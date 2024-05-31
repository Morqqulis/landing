const list = [
    {
        id: 1,
        src: '/assets/Footer/facebook.svg',
        link: '#'
    },
    {
        id: 2,
        src: '/assets/Footer/linkedin.svg',
        link: '#'
    },
    {
        id: 3,
        src: '/assets/Footer/youtube.svg',
        link: '#'
    },
    {
        id: 4,
        src: '/assets/Footer/insta.svg',
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
