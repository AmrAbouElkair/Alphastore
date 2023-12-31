import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./_categories.scss";
import { getCategories } from "../../../../../store/slices/products/productsFetching";

const Categories = () => {
  const dispatch = useDispatch();
  const images = useSelector(
    (state) => state.allImages.homePageImages.categoriesImg
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const categories = useSelector((state) => state.products.categories);

  const women = categories[0]?.id;
  const men = categories[1]?.id;
  return (
    <Fragment>
      <div
        className="categorie container-fluid my-5 d-flex justify-content-between gap-2"
        style={{ height: "85vh" }}
      >
        <div className="row w-100 h-100 p-2">
          <div className="col d-flex flex-column mx-2">
            <div className="card position-relative h-50 w-100 mb-2">
              <img
                src={images.menImg}
                className="card-img-top h-100 w-100 position-absolute"
                alt="new-season"
              />
              <Link to={`products/${men}`} className="position-absolute">
                <span>men</span>
              </Link>
            </div>
            <div className="card position-relative h-50 w-100 mt-2">
              <img
                src={images.womenImg}
                className="card-img-top h-100 w-100 position-absolute"
                alt="women-img"
              />
              <Link to={`products/${women}`} className="position-absolute">
                <span>women</span>
              </Link>
            </div>
          </div>
          <div className="sale-category card position-relative col d-flex flex-column mx-2">
            <img
              src={images.saleImg}
              className="card-img-top h-100 w-100 position-absolute"
              alt="sale-img"
            />
            <Link to="products/1" className="position-absolute">
              <span>sale</span>
            </Link>
          </div>
          <div className="right-category col d-flex flex-column w-50 h-100 ms-2">
            <div className="row w-100 h-50">
              <div className="card position-relative col w-50 h-100 me-2">
                <img
                  src={images.newSesonImg}
                  className="card-img-top h-100 w-100 position-absolute"
                  alt="men-img"
                />
                <Link to="products/1" className="position-absolute">
                  <span>new season</span>
                </Link>
              </div>
              <div className="card position-relative col w-50 h-100 ms-2 ">
                <img
                  src={images.accessoriesImg}
                  className="card-img-top h-100 w-100 position-absolute"
                  alt="accessories-img"
                />
                <Link to="products/1" className="position-absolute">
                  <span>accessories</span>
                </Link>
              </div>
            </div>
            <div className="row w-100 h-50">
              <div className="card position-relative  col w-100 h-100 mt-2">
                <img
                  src={images.shoesImg}
                  className="card-img-top h-100 w-100 position-absolute"
                  alt="shoes-img"
                />
                <Link to="products/1" className="position-absolute">
                  <span>shoes</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
