
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-auto" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/lovable-uploads/d9f35c7c-ee56-49c0-b7bd-0b849b5cd55f.png"
        alt="EcoShop Tree Logo"
        className="h-8 w-8 mr-2"
      />
      <span className="text-2xl font-bold text-[#007A3D]">EcoShop</span>
    </div>
  );
};

export default Logo;
