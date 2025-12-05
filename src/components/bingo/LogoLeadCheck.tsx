import React from "react";
import Image from "next/image";
import logoImage from "@/assets/logo/LEAD_CHECK.svg";

interface LogoProps {
  className?: string;
}

export function LogoLeadCheck({ className = "" }: Readonly<LogoProps>) {
  return (
    <div className={className}>
      <Image src={logoImage} alt="LEAD UTP Logo" className="w-full h-auto" unoptimized/>
    </div>
  );
}
