import React from "react";

const Product = ({ params }: { params: { productId: string } }) => {
  console.log(params);

  return <div>Product Details {params.productId}</div>;
};

export default Product;
