import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../index.css"

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // show 3 images at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640, // break point for smaller screens
        settings: {
          slidesToShow: 1 // show 1 image at a time for smaller screens
        }
      }
    ],
   
  };

  return (
    <>
    <h2 className="text-4xl font-bold mb-4  text-center">Top products</h2>
    <div className="  py-2 mx-4 rounded-lg">
    
      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          <div className="p-4">
            <div className=" overflow-hidden">
              <img className="w-full rounded-lg" src="images/product10-removebg-preview.png" alt="image1" />
            </div>
            <div className="mt-2">
              
              
            </div>
          </div>
          <div className="p-4">
            <div className="  overflow-hidden">
              <img className="w-full rounded-lg" src="images/product3-removebg-preview.png" alt="image2" />
            </div>
            <div className="mt-2">
        

            </div>
          </div>
          <div className="p-4">
            <div className="  overflow-hidden">
              <img className="w-full rounded-lg" src="images/product4-removebg-preview.png" alt="image3" />
            </div>
            <div className="mt-2">
      
              
            </div>
          </div>
          <div className="p-4">
            <div className="  overflow-hidden">
              <img className="w-full rounded-lg" src="images/product_5-removebg-preview.png" alt="image4" />
            </div>
            <div className="mt-2">
              
             
            </div>
          </div>
          <div className="p-4">
            <div className="  overflow-hidden">
<img className="w-full rounded-lg" src="images/product11-removebg-preview.png" alt="image5" />
</div>
<div className="mt-2">


</div>
</div>
</Slider>
</div>
</div>
</>
);
};

export default ImageCarousel;
