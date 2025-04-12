import Image from "next/image";
import React from "react";

const ItemCard = ({ name, price, image }: ItemCard) => {
  return (
    <div>
      <div className="bg-gray-100">
        <Image src={image} width={512} height={512} alt="Bike Photo" />
      </div>
      <div className="flex justify-between w-full text-black text-xl">
        <p className="uppercase">{name}</p>
        <p className="text-gray-500">${price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
