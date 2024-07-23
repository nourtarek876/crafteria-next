import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from 'next/image'

export default function Pro2() {
  return (
    <>
    <Navbar />
      {/* start user1 */}
      <div className="user-port">
        <div className="portfolio">
          <div className="user-name">
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
            </div>
            <div className="name-text">
              <h1>Ahmed nour</h1>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="icon-user"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                Cairo - New Giza
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="icon-user"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                01234567890
              </p>
            </div>
          </div>
          <div className="experience">
            <h1>experience</h1>
            <p>10 Years of Experience in Pottery industry in Aswan</p>
          </div>
        </div>
        <div className="gallery">
          <div className="gallert-text">
            <h1>gallery</h1>
          </div>
          <div className="video">
            <video width="720" controls muted preload="none" >
              <source src="/video.mp4" type="video/mp4" />
              <track src="/video.mp4" kind="subtitles" srcLang="en" label="English" />
              Super Video
            </video>
          </div>
          <div className="gallery-photos">
            <a href="#"><div className="img-cont1 img-cont"></div></a>
            <a href="#"><div className="img-cont2 img-cont"></div></a>
            <a href="#"><div className="img-cont3 img-cont"></div></a>
            <a href="#"><div className="img-cont1 img-cont"></div></a>
            <a href="#"><div className="img-cont2 img-cont"></div></a>
            <a href="#"><div className="img-cont3 img-cont"></div></a>
            <a href="#"><div className="img-cont1 img-cont"></div></a>
            <a href="#"><div className="img-cont2 img-cont"></div></a>
            <a href="#"><div className="img-cont3 img-cont"></div></a>
          </div>
        </div>
      </div>
      {/* end user1 */}
      <Footer />
    </>
  );
}
