import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function about(){
    return(
        <>
        <Navbar />
        <div className="about-page">
            <div className="user-sec">
                <h1>For Buyer:</h1>
                <p>All Hand Crafts You Need In one Place.</p>
                <p>Exclusive Offers For Buyers From Our website.</p>
                <p>Easy Find to Your Best Gadget.</p>
            </div>
            <div className="port-sec">
                <h1>For Seller:</h1>
                <p>Free 4 Month Pro Portfolio.</p>
                <p>Easy Access to your Buyers.</p>
            </div>
        </div>
        <Footer />
        </>
    )
}