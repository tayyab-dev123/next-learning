import { Metadata } from "next";
import Link from "next/link";
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
//create a list of fake prodoct data in the form of an array of objects
const products = [
  { id: "1", name: "Product 1" },
  { id: "2", name: "Product 2" },
  { id: "3", name: "Product 3" },
];
const Product = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <Link key={product.id} href={`product/${product.id}`}>
            <li key={product.id}>{product.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Product;
