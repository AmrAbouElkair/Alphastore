import { Fragment, useEffect, useState } from "react";
import Card from "../../../../UI/Card/Card";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../../config/firebase";

const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const colRef = collection(db, "products");

      try {
        const q = query(colRef, where("product_type", "==", type));
        const querySnapshot = await getDocs(q);
        setProducts(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
      } catch (err) {
        console.error("Error getting product:", err);
      }
    };
    return () => {
      getData();
    };
  }, [type]);

  return (
    <Fragment>
      <div className="featured-top container-fluid">
        <div className="row fratured-top-row">
          <div className="item col">
            <h1>{type} Products</h1>
          </div>
          <div className="item col">
            <p>
              Fugiat consectetur est ea mollit minim minim irure anim amet nisi
              sint laborum aliqua. Non fugiat nulla pariatur velit reprehenderit
              laborum quis sint exercitation qui. Aliqua pariatur est aliquip
              elit consectetur do amet eu. Laborum mollit sint commodo consequat
              occaecat ut tempor fugiat excepteur reprehenderit dolore.
            </p>
          </div>
        </div>
      </div>
      <div className="featured-bottom container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {products?.map((pro, nl) => (
            <Card product={pro} key={pro.id + nl} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedProducts;
