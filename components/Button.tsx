import { cn } from "@/lib/utils";
import { ChevronRight, X } from "lucide-react";
import React from "react";

const Button = ({ text, type, className }: Button) => {
  return (
    <>
    {/* maybe make buttons blue */}
      <button
       className={cn(
        `rounded-full flex justify-center items-center ${className}`,
        type === "inset"
          ? "w-56 h-12 bg-black text-white"
          : type === "outset"
          ? "w-64 h-12 bg-transparent border border-white text-white"
          : type === "outline"
          ? "w-72 h-12 bg-transparent text-black border border-black"
          : "w-72 h-12 bg-white text-black"
      )}
        
      >
        <p className="text-lg">{text}</p>
        <ChevronRight className={
            type === "inset"
            ? "text-white"
            : type === "outset"
            ? "text-white"
            : type === "outline"
            ? "text-black"
            : "text-black"
        }/>
      </button>
    </>
  );
};

export default Button;
