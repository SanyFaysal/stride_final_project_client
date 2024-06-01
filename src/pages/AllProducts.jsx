import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://stride-final-project-server.vercel.app/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Produts</h1>
      <div className="my-16 flex flex-wrap gap-4">
        {products.map((shoe) => (
          <SingleProductCardDashboard
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
