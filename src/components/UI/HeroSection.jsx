import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h2 className="heading-xl">
            Explore the World, One Country at a Time.
          </h2>
          <p className="paragraph">
            Discover the history, culture, and beauty of every namtion. Sort,
            search, and filter though countries to find the details you need
          </p>
          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/world.png"
            alt="world beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
