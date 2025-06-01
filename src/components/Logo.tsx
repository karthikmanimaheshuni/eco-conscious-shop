
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-auto" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 mr-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle representing earth */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#007A3D"
          stroke="#005A2D"
          strokeWidth="2"
        />
        
        {/* Leaf shape */}
        <path
          d="M12 20C12 16 16 12 20 12C24 12 28 16 28 20C28 24 24 20 20 20C16 20 12 24 12 20Z"
          fill="#00A651"
        />
        
        {/* Leaf vein */}
        <path
          d="M20 12C20 12 18 16 20 20C22 16 20 12 20 12Z"
          stroke="#007A3D"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Shopping cart handle */}
        <path
          d="M26 26H30L31 28H25L26 26Z"
          stroke="#00FF7F"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Shopping cart body */}
        <path
          d="M25 28V30H29V28"
          stroke="#00FF7F"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Cart wheels */}
        <circle cx="26" cy="32" r="1" fill="#00FF7F" />
        <circle cx="28" cy="32" r="1" fill="#00FF7F" />
      </svg>
      <span className="text-2xl font-bold text-[#007A3D]">EcoShop</span>
    </div>
  );
};

export default Logo;
