const Home = () => {
    return (
        <div className={`container flex h-[85vh] items-center py-10`}>
            <div className={`flex justify-between gap-2.5`}>
                <div className={`flex basis-[624px] flex-col gap-6`}>
                    <h1 className={`text-5xl font-bold`}>Home</h1>
                    <p className={`text-2xl text-[#828282]`}>Subheading for description or instructions</p>
                    <p className={`text-[20px] font-medium text-black `}>
                        Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out
                        page might look:
                    </p>
                    <p className={`text-[20px] font-medium text-black`}>
                        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation
                        exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut.
                        Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming
                        Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning.
                        Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset
                        hound. Zürich sleepy perfect consectetur.
                    </p>
                </div>
                <div className={` `}>
                    <img
                        className={`h-auto w-full max-w-full`}
                        src={'/assets/Home/hero.jpg'}
                        alt="Hero image"
                        width={508}
                        height={657}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
