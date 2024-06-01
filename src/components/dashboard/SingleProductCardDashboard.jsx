/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onDelete }) => {
  const token = localStorage.getItem("token");
  const { _id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`https://stride-final-project-server.vercel.app/shoes/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product Deleted");
        onDelete(_id);
      });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-indigo-500 text-white">
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="btn bg-green-600 text-white">
            <Link to={`edit/${_id}`}>Edit</Link>
          </button>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCardDashboard;
