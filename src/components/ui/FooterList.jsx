const list = ['page', 'page', 'page']
const FooterList = () => {
    return (
        <div>
            <h6 className={`text-lg font-medium mb-6`}>Topic</h6>
            <ul className={`grid gap-6`}>
                {list.map((item, index) => (
                    <li key={index}>
                        <a className={`text-[#454545]`} href={'#'}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterList
