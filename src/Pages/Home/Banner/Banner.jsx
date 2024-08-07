import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="rounded-xl w-full" />
        <div className="absolute rounded-xl left-0 flex h-full right-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="pl-5 pt-5 text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-secondary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle  bg-red-600 mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="rounded-xl w-full" />
        <div className="absolute rounded-xl left-0 flex h-full right-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="pl-5 pt-5 text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-secondary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle  bg-red-600 mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="rounded-xl w-full" />
        <div className="absolute rounded-xl left-0 flex h-full right-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="pl-5 pt-5 text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-secondary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle  bg-red-600 mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="rounded-xl w-full" />
        <div className="absolute rounded-xl left-0 flex h-full right-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="pl-5 pt-5 text-white space-y-7 w-1/3">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-active btn-secondary mr-5">
                Discover More
              </button>
              <button className="btn btn-outline">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-5 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle  bg-red-600 mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-red-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
