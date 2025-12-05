import React from "react";
import Image from "next/image";
import logoImage from "@/assets/logo/globant-logo-dark.svg";

interface LogoProps {
  className?: string;
}

export function LogoGlobant({ className = "" }: Readonly<LogoProps>) {
  return (
    <div className={className}>
      <Image src={logoImage} alt="Globant Logo" className="w-full h-auto" unoptimized/>
    </div>
  );
}
