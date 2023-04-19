import React, { useState } from "react";

const Rating = ({ productDetail }) => {
  const [stars, setStars] = useState(
    Array.from({ length: 5 }, (_, i) => i < productDetail?.rating?.rate)
  );
  return (
    <div className="bg-gray-300 mx-2 rounded-lg">
      {stars.map((filled, i) => (
        <span key={i} style={{ color: filled ? "orange" : "gray" }}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
