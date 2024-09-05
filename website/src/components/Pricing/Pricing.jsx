import React from "react";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <img
        decoding="async"
        sizes="100vw"
        srcSet="
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png?scale-down-to=512 512w,
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png?scale-down-to=1024 1024w,
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png?scale-down-to=2048 2048w,
          https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png 2600w"
        src="https://framerusercontent.com/images/QGd2LAhPyOoCywdLVMHxzhQ1XU.png"
        alt="Hero image"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          objectPosition: "center",
          objectFit: "cover",
          imageRendering: "auto"
        }}
      />
    </div>
  );
};

export default Pricing;
