import React, { useState } from "react";

const Rating = ({ productDetail }) => {
  const [stars, setStars] = useState(
    Array.from({ length: 5 }, (_, i) => i < productDetail?.rating?.rate)
  );
  return (
    <div>
      {stars.map((filled, i) => (
        <span key={i} style={{ color: filled ? "orange" : "gray" }}>
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
