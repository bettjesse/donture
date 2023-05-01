import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

const ProductCard = ({ product }) => {
  return (
    <>
    
    <div className="px-2">
      <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
        <div className="p-4">
        <Link to={`product/${product.id}`}>
          <img src={`images/${product.imageUrl}`} alt={product.name} className="w-full h-auto" style={{ maxWidth: '100%' }} />
          <div className="mt-4" style={{ width: '100%' }}>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 text-base">{product.description}</p>
            
          </div>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

const AllProducts = () => {
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

  const products = [
    {
      id: 1,
      name: "CCTV",
      description: "3D Surveillance dome camera security camera",
      imageUrl: "dome.png"
    },
    {
      id: 2,
      name: "Smoke Sensor",
      description: "Advanced smoke Sensor detects smoke and harmful particles",
      imageUrl: "smoke.png"
      },
      {
        id:3,
        name: "Access Control",
        description: "Advanced access control for secure premises entry",
        imageUrl: "access-control.png"
        },
    {
      id:4,
      name: "Bullet camera",
      description: "Bullet camera captures high-resolution video for security.",
      imageUrl: "buttet.png"
    }


    
  ];

  return (
    <>
    <div className=' text-center font-bold text-4xl'>
      <h2>Top products</h2>
      </div>
    <div className="mt-4 pb-4">
      <Slider {...settings}>
        {products.map(product => <ProductCard key={product.name} product={product} />)}
      </Slider>
    </div>
    </>
  );
};
export default AllProducts