import { Link } from "react-router-dom";
const Products = ({ products }) => {
  return (
    <div className="container mx-auto md:px-2 mt-4  rounded-lg ">
      <h2 className="mb-4 text-center uppercase">Featured Products</h2>
      <p className="text-center font-bold text-3xl">
        Donture systems has a wide range of products that <br />
        cater to different sectors
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="rounded-lg overflow-hidden shadow-lg"> 
           
            <img src={`images/${product.image}`} className="w-full h-auto" alt={product.name} />
            <div className="p-4 bg-gray-100 mb-0">
              <h3 className="text-lg font-bold mb-2 text-blue-600">{product.name}</h3>
       
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
