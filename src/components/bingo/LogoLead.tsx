import React from "react";
import Image from "next/image";
import logoImage from "@/assets/logo/lead_blanco_&_utp_blanco.png";

interface LogoProps {
  className?: string;
}

export function LogoLead({ className = "" }: Readonly<LogoProps>) {
  return (
    <div className={className}>
      <Image src={logoImage} alt="LEAD UTP Logo" className="w-full h-auto" unoptimized/>
    </div>
  );
}
