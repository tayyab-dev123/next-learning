import { Metadata } from "next";
import React from "react";

//Generate metadata function for dynamic routes
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
    description: `Product ${params.productId} details`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

const ProductDetail = ({ params }: Props) => {
  console.log(params);
  if (params.productId === "1") {
    throw new Error("Error while fetching product details");
  }
  return <div>Product Details {params.productId}</div>;
};

export default ProductDetail;
