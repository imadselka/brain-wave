import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className || ""} `}>
      <h5 className="tagline mb-6 text-center tent-n-1/50">
        Helping people create beutiful content at{" "}
      </h5>
      <ul className="flex ">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center flex-1 h-[8.5rem] justify-center mt-12 gap-12 "
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
