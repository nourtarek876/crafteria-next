import Footer from "./Footer";
import Navbar from "./Navbar";

const Landing = () => {
    return(
        <>
        <Navbar />
       {/* start landing */}
       <div className="landing">
          <div class="landing-text">
            <h1>Top Rating</h1>
            <h2>Explore Best Crafts</h2>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Ahmed Nour (Furniture)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                   <h1><a href="/pro-two">See More</a></h1>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Kaled Amr (Pottery)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                   <h1><a href="/pro-one">See More</a></h1>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Omar Ahmed (Copper)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                   <h1><a href="/pro-one">See More</a></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-main">
            <div className="cards">
              <div className="first-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Ahmed Nour (Furniture)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                   <h1><a href="/pro-one">See More</a></h1>
                  </div>
                </div>
              </div>
              <div className="secound-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Kaled Amr (Pottery)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                   <h1><a href="/pro-one">See More</a></h1>
                  </div>
                </div>
              </div>
              <div className="third-card">
                <div class="card1">
                  <div class="card-image"></div>
                  <p class="card-title">Omar Ahmed (Copper)</p>
                  <p class="card-body">
                    Nullam ac tristique nulla, at convallis quam. Integer
                    consectetur mi nec magna tristique, non lobortis.
                  </p>
                  <div className="cord-lenk">
                   <h1><a href="/pro-one">See More</a></h1>
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