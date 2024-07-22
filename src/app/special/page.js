import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Special(){
    return(
        <>
        <Navbar />
        {/* start Special */}
        <div className="special">
        <div className="special-text">
            <h1>special deals</h1>
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
                  <div className="card-link">
                    <a href="/User1">See More</a>
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
                  <div className="card-link">
                    <a href="/User2">See More</a>
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
                  <div className="card-link">
                    <a href="/User1">See More</a>
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
                  <div className="card-link">
                    <a href="/User1">See More</a>
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
                  <div className="card-link">
                    <a href="/User2">See More</a>
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
                  <div className="card-link">
                    <a href="/User1">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
        {/* end Special */}
        <Footer />
        </>
    )
}