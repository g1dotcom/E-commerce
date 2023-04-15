import React, { Component } from "react";

//css
import "./slider.css";

//slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//image
import img1 from "./hh.png";
import img2 from "./bf.png";

//icons
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      autoplaySpeed: 3000,
      arrows: false,
      fade: true,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="w-full text-3xl lg:text-4xl ">
        <div className="w-full justify-center items-center">
          <Slider {...settings}>
            <div className="mt-28 2xl:mx-20 ">
              <h3 className="text-left ml-6 flex  text-white mb-2 max-lg:left-0 max-lg:absolute max-lg:top-12 max-md:text-sm max-md:ml-0">
                Öncelik Memnuniyet{" "}
                <FiShoppingBag className="mx-2" style={{ color: "gray" }} />
              </h3>
              <h1 className="text-left md:ml-10 md:mb-2  font-bold text-red-500 max-lg:left-0 max-lg:absolute max-lg:top-24 max-lg:text-xl max-md:text-sm max-md:ml-0">
                Dünya Çapında Ürünler
              </h1>
              <h3 className="text-left ml-14 mb-2  flex text-white max-lg:left-0 max-lg:absolute max-lg:top-36 max-md:text-sm max-md:ml-0">
                Anında Değişim Ve İade
                <AiOutlineSafetyCertificate
                  className="mx-2"
                  style={{ color: "gray" }}
                />
              </h3>
              <h1 className="text-left ml-20 mb-2 font-bold text-orange-500 max-lg:left-0 max-lg:absolute max-lg:top-48 max-lg:text-2xl max-md:text-sm max-md:ml-0">
                {" "}
                Binlerce Memnun Müşteri
              </h1>

              <img
                className=" w-64 max-xl:w-48  max-lg:opacity-0 h-auto absolute right-5 top-10  "
                src={img2}
                alt=""
              />
              <h1 className=" text-3xl absolute right-80 top-12 max-lg:right-0 max-xl:right-56 text-white  max-lg:text-2xl max-md:text-sm max-md:ml-0 ">
                {" "}
                <span className="text-red-500 font-bold max-lg:right-0 ">
                  Black Friday`e
                </span>{" "}
                Özel
              </h1>
              <h1 className=" text-2xl absolute right-80 top-24 font-bold max-lg:right-0 max-xl:right-56 text-white max-lg:text-2xl max-md:text-sm max-md:ml-0">
                {" "}
                Kaçırmak İstemiyceginiz
              </h1>
              <h1 className=" text-2xl absolute right-80 top-36 font-bold max-lg:right-0 max-xl:right-56 text-white max-lg:text-2xl max-md:text-sm max-md:ml-0">
                {" "}
                İndirimleri Sizlere Buluşturuyoruz
              </h1>
              <h1 className=" text-2xl absolute right-80 top-48 font-bold max-lg:right-0 max-xl:right-56 text-white max-lg:text-2xl max-md:text-sm max-md:ml-0">
                {" "}
                <span className="text-red-500 text-4xl">%50</span> ` ye Varan
                İndirimler
              </h1>
            </div>

            <div className="mt-28 2xl:mx-20">
              <h3 className="text-left md:ml-6   md:mb-2 font-bold text-red-500">
                Öncelik Memnuniyet
              </h3>
              <h1 className="text-left md:ml-10 md:mb-2 text-white ">
                Dünya Çapında Ürünler
              </h1>
              <h3 className="text-left md:ml-14 md:mb-2 font-bold text-orange-500">
                Anında Değişim Ve İade
              </h3>
              <h1 className="text-left md:ml-20 md:mb-2  text-white">
                {" "}
                Binlerce Memnun Müşteri
              </h1>
              <img
                className="w-64 max-xl:w-48  max-lg:opacity-0 h-auto absolute right-5 top-10  "
                src={img1}
                alt=""
              />
              <h1 className=" text-3xl absolute right-80 top-12 max-xl:right-56 max-lg:right-0 max-lg:absolute max-lg:top-12 font-bold text-red-500 ">
                {" "}
                5. Yılımıza Özel
              </h1>
              <h1 className=" text-2xl absolute right-80 top-24 max-xl:right-56 font-bold text-white max-lg:right-0 max-lg:absolute max-lg:top-24">
                Yanızca Seçili Ürünlerde
              </h1>
              <h1 className=" text-2xl absolute right-80 top-36 max-xl:right-56 text-white max-lg:right-0 max-lg:absolute max-lg:top-36">
                {" "}
                <span className="text-orange-500 font-bold text-2xl mx-2">
                  1
                </span>{" "}
                Alana{" "}
                <span className="text-orange-500 font-bold text-2xl mx-2">
                  1
                </span>{" "}
                Bedava
              </h1>
              <h1 className=" text-2xl absolute right-80 top-48 font-bold max-xl:right-56 text-white max-lg:right-0 max-lg:absolute max-lg:top-48">
                {" "}
                Kampanyamızı Sizlere Buluşturuyoruz
              </h1>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
