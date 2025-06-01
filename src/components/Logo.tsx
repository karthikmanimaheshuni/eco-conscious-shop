
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-auto" }: LogoProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 180 40"
        className="h-8 w-auto mr-2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tree trunk */}
        <rect
          x="18"
          y="15"
          width="4"
          height="15"
          fill="#8B4513"
          rx="2"
        />
        
        {/* Tree leaves/canopy */}
        <ellipse
          cx="20"
          cy="12"
          rx="8"
          ry="6"
          fill="#228B22"
        />
        <ellipse
          cx="16"
          cy="8"
          rx="6"
          ry="4"
          fill="#32CD32"
        />
        <ellipse
          cx="24"
          cy="8"
          rx="6"
          ry="4"
          fill="#32CD32"
        />
        
        {/* Root curling around 'c' in Eco */}
        <path
          d="M16 30 Q12 32 8 30 Q6 28 8 26 Q12 28 16 30"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Root curling around 'o' in Eco */}
        <path
          d="M20 30 Q24 32 28 30 Q30 28 28 26 Q24 28 20 30"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Root curling around 'p' in Shop */}
        <path
          d="M22 30 Q26 34 32 32 Q36 30 34 28 Q30 30 26 32 Q22 30 22 30"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Additional decorative roots */}
        <path
          d="M18 30 Q14 34 10 32"
          stroke="#8B4513"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M22 30 Q18 34 14 32"
          stroke="#8B4513"
          strokeWidth="1.5"
          fill="none"
        />
        
        {/* EcoShop text with positioned letters */}
        <text x="45" y="25" className="fill-[#007A3D] font-bold text-xl">
          E
        </text>
        <text x="55" y="25" className="fill-[#007A3D] font-bold text-xl">
          c
        </text>
        <text x="65" y="25" className="fill-[#007A3D] font-bold text-xl">
          o
        </text>
        <text x="80" y="25" className="fill-[#228B22] font-bold text-xl">
          S
        </text>
        <text x="90" y="25" className="fill-[#228B22] font-bold text-xl">
          h
        </text>
        <text x="100" y="25" className="fill-[#228B22] font-bold text-xl">
          o
        </text>
        <text x="110" y="25" className="fill-[#228B22] font-bold text-xl">
          p
        </text>
      </svg>
    </div>
  );
};

export default Logo;
