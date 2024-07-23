import React from "react";
import { Cardstyles } from "../../assets/warna/warna";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/3 rounded-lg bg-white p-4 sm:p-6 flex flex-col justify-center items-center"
          style={Cardstyles.card}
        >
          <h2
            className="text-center text-lg sm:text-md md:text-xl font-bold mb-2 sm:mb-4"
            style={Cardstyles.head}
          >
            {item.status}
          </h2>
          <div>
            <p
              className="text-center text-base sm:text-md md:text-xl"
              style={{
                ...Cardstyles.text,
                color:
                  index === 0
                    ? Cardstyles.color1.color
                    : index === 1
                    ? Cardstyles.color2.color
                    : Cardstyles.color3.color,
              }}
            >
              {item.total.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
