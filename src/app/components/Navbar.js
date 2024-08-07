"use client";

import FadeInLeftComponent from "./FadeInLeftComponent";
import FadeInRightComponent from "./FadeInRightComponent";

export default function Navbar() {
  return (
    <>
      {/* start header */}
      <header className=" text-black">
        <div className="container navbar mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center">
              <a href="/" className="title">
                <FadeInLeftComponent>
                  <h1>Crafteria</h1>
                  <h5 className="text-sm font-light">Craft Your Dreams</h5>
                </FadeInLeftComponent>
              </a>
            </div>
            <div>
              <FadeInRightComponent>
                {" "}
                <nav className="lg:flex space-x-4">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/special">Special Deals</a>
                  <a href="/contact">Contact</a>
                </nav>
              </FadeInRightComponent>
            </div>
          </div>
        </div>
      </header>
      {/* end header */}
    </>
  );
}
