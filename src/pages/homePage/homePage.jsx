import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className="desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus lorem ut purus tempus, quis consequat lacus venenatis. Sed non sollicitudin ante. Phasellus at tristique nibh, sed fermentum nisl. Donec et tellus eget mauris scelerisque posuere quis quis massa.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="imageContainer">
                <img src="/bg.png" alt="backgroundImage" />
            </div>
        </div>
    )
}

export default HomePage