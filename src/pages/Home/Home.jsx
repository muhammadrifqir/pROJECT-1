import Button from "../../components/Button/Button";
import { ColorHome } from "../../assets/warna/warna";
import img from "../../assets/foto/foto.png";
import IndonesiaPage from "../IndonesiaPage/Indonesia/Indonesia";
import ProvinsiPage from "../IndonesiaPage/Provinsi/Provinsi";
import FormPage from "../Form/Form";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center py-8 sm:py-16 md:py-24 lg:py-32">
        <div className="bg-white container px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1
                style={ColorHome.h1fontStyle}
                className="text-3xl sm:text-4xl md:text-5xl mb-4"
              >
                Covid ID
              </h1>
              <h3
                className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 md:mb-8"
                style={ColorHome.h3fontStyle}
              >
                Monitoring Perkembangan Covid
              </h3>
              <p
                className="mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base md:text-lg"
                style={ColorHome.pfontStyle}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <Button title="Vaksin" className="w-full sm:w-auto" />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img
                src={img}
                alt="Image"
                className="w-full max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
