import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-10">
      <div className="text-center ">
        <h3 className="text-2xl text-red-600">Service</h3>
        <h3 className=" py-6 text-5xl font-bold text-white">
          Our Service Area
        </h3>
        <p className="text-4 text-white">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
