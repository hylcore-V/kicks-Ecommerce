import React from "react";
import Image from "next/image";

// Components
import Button from "../button";

const ProductCard = ({ className, name, image, price }) => {
  return (
    <div
      className={`relative flex flex-col flex-wrap gap-y-4 ${className ?? ""}`}
    >
      <div className="absolute top-[8px] left-[8px] z-[1] bg-blue w-fit rounded-tl-[21px] rounded-br-[21px] py-3 px-4">
        <p className="text-[12px] leading-[14.22px] text-white font-semibold">
          New
        </p>
      </div>
      <div className="relative w-full xl:h-[340px] xxl:h-[400px] border-[8px] border-white rounded-[28px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <h3 className="uppercase xl:text-[22px] xxl:text-[24px] leading-[28.44px] font-semibold text-gray_dark">
        {name}
      </h3>
      <Button className="bg-gray_dark text-white">
        View product - <span className="text-yellow">${price}</span>
      </Button>
    </div>
  );
};

export default ProductCard;
