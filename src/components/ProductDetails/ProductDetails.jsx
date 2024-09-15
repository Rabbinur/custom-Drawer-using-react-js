import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import Description from "./Description";
import { useParams } from "react-router-dom";
import { getSingleDetails } from "../../Context/ApiServices";

const ProductDetails = () => {
  const [activeSection, setActiveSection] = useState("description");
  const [productDetails, setSingleData] = useState({});
  const { brand, category, title } = useParams();

  console.log(brand, category, title);

  useEffect(() => {
    getSingleDetails(setSingleData, brand, category, title);
  }, [brand, category, title]);
  console.log(productDetails);
  return (
    <>
      <ProductItem data={productDetails} setActiveSection={setActiveSection} />
      <Description
        description={productDetails?.description}
        feature={productDetails?.feature}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <RelatedProducts
        brand={productDetails?.brand}
        title={productDetails?.title}
        category={productDetails?.category}
      />
    </>
  );
};

export default ProductDetails;
