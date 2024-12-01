// src/app/product/[productId]/review/[reviewId]/page.tsx
import React from "react";

const Reviews = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (params.reviewId === "3") {
    throw new Error("Error while fetching reviews details");
  }
  return (
    <div>
      Product Details {params.productId} and Review {params.reviewId}
    </div>
  );
};

export default Reviews;
