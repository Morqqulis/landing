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
        <ul className={`flex gap-2 -translate-x-3`}>
            {list.map(item => (
                <li key={item.id}>
                    <a className={`duration-300 hover:scale-110 block`} href={'#'}>
                        <img src={item.src} alt="social icon" width={40} height={40} />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialList
