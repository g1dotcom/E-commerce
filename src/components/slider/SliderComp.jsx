import React from "react";

//react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Css
import "./sliderComp.css";

//images
import Img1 from "./images/bf.png";
import Img2 from "./images/bg.png";
import Img3 from "./images/hh.png";
import Img4 from "./images/sl2.png";
import Img5 from "./images/sl3.png";
import Img6 from "./images/bg3.png";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full !z-20 ">
      <Slider {...settings}>
        <div className=" !z-20 !h-full !w-full max-md:flex-row !flex md:flex-row flex-col !items-center !justify-evenly !text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
          <div className="flex md:flex-row flex-col items-center justify-center">
            <img
              src={Img1}
              alt=""
              className="md:w-72 w-56 h-auto mx-6 2xl:mx-12 2xl:w-96"
            />
            <div className="flex flex-col text-center 2xl:ml-24  ">
              <h1 className=" xl:my-2">
                <span className="text-orange-600 mr-2 font-bold">
                  Black Friday`e
                </span>
                Özel
              </h1>
              <h1 className="xl:my-2">Kaçırmak İstemiyceginiz</h1>
              <h1 className="xl:my-2"> İndirimleri Sizlere Buluşturuyoruz</h1>
              <h1 className="xl:my-2">
                <span className="text-red-500 text-4xl xl:text-6xl">%50</span> `
                ye Varan İndirimler
              </h1>
            </div>
          </div>
          <div className="max-md:hidden">
            <img src={Img2} alt="" className="md:w-96 w-80 h-auto  " />
          </div>
        </div>
        <div className=" !z-20 !h-full !w-full max-md:flex-row-reverse !flex md:flex-row-reverse flex-col !items-center !justify-evenly !text-white xl:text-4xl text-xl md:text-2xl lg:text-3xl">
          <div className="flex md:flex-row-reverse flex-col items-center justify-center">
            <img
              src={Img3}
              alt=""
              className="md:w-72 w-48 h-auto mx-6 2xl:mx-12 "
            />
            <div className="flex flex-col text-center 2xl:mr-32">
              <h1 className=" xl:my-2">
                {" "}
                <span className="text-red-500 text-2xl lg:text-6xl mx-2 font-bold">
                  5.
                </span>{" "}
                Yılımıza Özel
              </h1>
              <h1 className="xl:my-2">
                <span className="text-red-500">Yanızca Seçili Ürünlerde</span>
              </h1>
              <h1 className="xl:my-2">
                <span className="text-red-500 text-2xl lg:text-6xl mx-2 font-bold">
                  2
                </span>
                Alana
                <span className="text-red-500 mx-2 text-2xl lg:text-6xl font-bold">
                  1
                </span>
                Bedava
              </h1>
              <h1>
                Kampanyasına Son{" "}
                <span className="text-red-500 text-2xl lg:text-6xl mx-2 font-bold">
                  10
                </span>{" "}
                gün!
              </h1>
            </div>
          </div>

          <div className="max-md:hidden">
            <img src={Img4} alt="" className="md:w-96 w-80 h-auto " />
          </div>
        </div>
        <div className=" !z-20 !h-full !w-full max-md:flex-row !flex md:flex-row flex-col !items-center !justify-evenly !text-white xl:text-4xl text-xl md:text-2xl lg:text-3xl">
          <div className="flex md:flex-row flex-col items-center justify-center">
            <img
              src={Img5}
              alt=""
              className="md:w-72 w-56 h-auto mx-6 2xl:mx-12 2xl:w-96"
            />
            <div className="flex flex-col text-center 2xl:ml-24">
              <h1 className=" xl:my-2 text-red-500 font-bold">
                Öncelik Memnuniyet
              </h1>
              <h1 className=" xl:my-2  font-bold">
                Dünya Çapında Kanıtlanmıs Ürünler
              </h1>
              <h1 className=" xl:my-2 text-red-500 font-bold">
                Binlerce Memnun Müsteri
              </h1>
              <h1 className=" xl:my-2  font-bold">Anında Değisim Ve İade</h1>
            </div>
          </div>
          <div className="max-md:hidden">
            <img src={Img6} alt="" className="md:w-96 w-64 h-auto  " />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
