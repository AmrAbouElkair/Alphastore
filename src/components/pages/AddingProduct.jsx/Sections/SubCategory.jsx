import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewSubCategory } from "../../../../store/slices/products/productsFetching";

const SubCategory = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(addNewSubCategory(title));
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="category">Sub-Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="Select the category">Select the sub-category</option>
            <option value="t-shirt">T-Shirt</option>
            <option value="suit">Suit</option>
            <option value="hoddie">Hoddie</option>
            <option value="dress">Dress</option>
            <option value="shirt">Shirt</option>
            <option value="jacket">Jacket</option>
            <option value="pyjamas">Pyjamas</option>
          </select>
        </div>
        <button type="submit">New Sub-Category</button>
      </form>
    </div>
  );
};

export default SubCategory;
