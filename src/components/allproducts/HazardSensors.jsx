import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../index.css';

const ProductCard = ({ product }) => {
  return (
    <div className="px-2">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="p-4">
          <img src={`images/sensors/${product.imageUrl}`} alt={product.name} className="w-full h-auto" style={{ maxWidth: '100%' }} />
          <div className="mt-4 text-center" style={{ width: '100%' }}>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-blue-600 text-base underline">See details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HazardSensors = ({products}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

 
  return (
    <>
   
   

<div>
 <h1 className='text-3xl ml-7 mt-3'> Intrusion </h1>

   
    <div className="mt-4 pb-4">
      <Slider {...settings}>
        {products.slice(4,8).map(product => <ProductCard key={product.name} product={product} />)}
      </Slider>
    </div>
    </div>
   
    </>
  );
};
export default HazardSensors