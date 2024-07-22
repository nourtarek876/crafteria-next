import Footer from "./Footer";
import Navbar from "./Navbar";

const Landing = () => {
    return(
        <>
        <Navbar />
       {/* start landing */}
       <div className="landing">
          <div className="landing-text">
            <h1>Top Rating</h1>
            <h2>Explore Best Crafts</h2>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div className="card1">
                  <div className="card-image"></div>
                  <p className="card-title">Ahmed Nour (Furniture)</p>
                  <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                    <a href="/pro-two"><h1>See More</h1></a>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div className="card1">
                  <div className="card-image"></div>
                  <p className="card-title">Kaled Amr (Pottery)</p>
                  <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                    <a href="/pro-one"><h1>See More</h1></a>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div className="card1">
                  <div className="card-image"></div>
                  <p className="card-title">Omar Ahmed (Copper)</p>
                  <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                    <a href="/pro-one"><h1>See More</h1></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div className="card1">
                  <div className="card-image"></div>
                  <p className="card-title">Ahmed Nour (Furniture)</p>
                  <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                    <a href="/pro-one"><h1>See More</h1></a>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div className="card1">
                  <div className="card-image"></div>
                  <p className="card-title">Kaled Amr (Pottery)</p>
                  <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                    <a href="/pro-one"><h1>See More</h1></a>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div className="card1">
                  <div className="card-image"></div>
                  <p className="card-title">Omar Ahmed (Copper)</p>
                  <p className="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                    <a href="/pro-one"><h1>See More</h1></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end landing */}
        <Footer />
        </>
    )
}


export default Landing;