import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex justify-center items-center p-4 pr-6 bg-n-9/40 backdrop-blur
    border border-n-1/10 rounded-2xl gap-4 
    `}
    >
      <img
        src={notification1}
        className="rounded-xl"
        width={70}
        height={70}
        alt="image"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((image, index) => (
              <li
                className="flex w-8 h-8 border-2 border-n-12 rounded-full overflow-hidden"
                key={index}
              >
                <img
                  src={image}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={image}
                />
              </li>
            ))}
          </ul>
          <div className="-mr-2 body-2 text-n-13 ">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
