import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewCategory } from "../../../../store/slices/products/productsFetching";

const Category = () => {
  const [title, setTitle] = useState("men");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    const category = {
      title,
      image,
    };
    dispatch(addNewCategory(category));
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="Select the category">Select the category</option>
            <option value="men">men</option>
            <option value="women">women</option>
          </select>
        </div>
        <div>
          <label htmlFor="upload Image">upload Image</label>
          <input
            type="file"
            name="upload Image"
            id="upload Image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit">New Category</button>
      </form>
    </div>
  );
};

export default Category;
