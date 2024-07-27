import parts from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="max-w-sm rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="max-w-sm rounded-lg border-white border-8 shadow-2xl absolute h-[200px] right-32 top-1/2"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl text-orange-500 font-bold py-6">About Us</h2>
          <h1 className="text-5xl font-bold text-[#fff]">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-white text-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6 text-white text-4">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-primary">Get More info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
