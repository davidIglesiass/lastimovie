import Slider from '../components/Slider'

function Home() {
    const imgs = [
        {
            src: "/img/woman.webp",
            alt: "women img"
        },
        {
            src: "/img/sunset.webp",
            alt: "sunset img"
        },
        {
            src: "/img/anime.jpg",
            alt: "anime img"
        }
    ]
    return (
        <>
            <div className="container mt-5">
                <h1 className="mb-5 text-center text-gray">Bienvenido...</h1>
                <Slider images={imgs} id="SliderHomeImgs" />
                <div className="row mt-5">
                    <div className="col">
                        <h3 className="mb-3 text-center text-gray">Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati magnam, aut error perspiciatis ea iusto amet temporibus cum ducimus odit officia distinctio eius consequatur veniam, esse libero. Ad, inventore.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque aspernatur similique officia consequuntur tempore nam accusantium nihil vel fugit! Architecto nam tempora iure quibusdam adipisci qui id fugit! Eius, dignissimos! Corrupti quisquam impedit omnis suscipit doloribus vero placeat consectetur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa sint obcaecati incidunt aliquam sequi porro similique, esse explicabo exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos beatae facilis dolor. Voluptatum incidunt, quasi ea doloribus atque cum similique impedit nesciunt ipsam quas numquam unde repudiandae? Expedita, aliquid!</p>
                    </div>
                    <div className="col">
                        <img className="w-100" src="/img/woman.webp" alt="woman img" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <img className="w-100" src="/img/woman.webp" alt="woman img" />
                    </div>
                    <div className="col">
                        <h3 className="mb-3 text-center text-gray">Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati magnam, aut error perspiciatis ea iusto amet temporibus cum ducimus odit officia distinctio eius consequatur veniam, esse libero. Ad, inventore.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloremque aspernatur similique officia consequuntur tempore nam accusantium nihil vel fugit! Architecto nam tempora iure quibusdam adipisci qui id fugit! Eius, dignissimos! Corrupti quisquam impedit omnis suscipit doloribus vero placeat consectetur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa sint obcaecati incidunt aliquam sequi porro similique, esse explicabo exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos beatae facilis dolor. Voluptatum incidunt, quasi ea doloribus atque cum similique impedit nesciunt ipsam quas numquam unde repudiandae? Expedita, aliquid!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home