"use client";

import { motion } from "motion/react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LogoLeadCheck} from "@/components/bingo/LogoLeadCheck";

interface BingoCardProps {
  readonly isValidated: boolean;
  readonly userName?: string;
  readonly isPending?: boolean;
  readonly isEmpty?: boolean;
  readonly onClick?: () => void;
  readonly index: number;
}

export function BingoCard({
  isValidated,
  userName,
  isPending = false,
  isEmpty = false,
  onClick,
  index,
}: BingoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      onClick={!isValidated ? onClick : undefined}
      className={cn(
        "aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-3 transition-all relative overflow-hidden",
        isValidated
          ? "bg-primary/10 border-primary shadow-lg shadow-primary/20"
          : isPending
          ? "bg-card border-border cursor-pointer hover:border-primary/50 hover:shadow-md"
          : isEmpty
          ? "bg-secondary/30 border-dashed border-muted cursor-pointer hover:border-primary/50 hover:shadow-md"
          : "bg-card border-border cursor-pointer hover:border-primary/50 hover:shadow-md"
      )}
    >
      {isValidated ? (
        <>
          {/* LEAD Logo Check */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <Image
              src="/assets/logo/lead_blanco_check_bingo.png"
              alt="Validated"
              width={80}
              height={80}
              className="object-contain opacity-90"
              unoptimized
            /> */}
            <LogoLeadCheck className="w-20 h-20 opacity-90" />
          </div>

          {/* User name at bottom */}
          {userName && (
            <p className="absolute bottom-2 left-2 right-2 text-xs font-medium text-center text-foreground line-clamp-2 z-10">
              {userName}
            </p>
          )}
        </>
      ) : isPending ? (
        <>
          <Circle className="w-8 h-8 text-muted-foreground mb-2" />
          <p className="text-xs text-center text-muted-foreground line-clamp-2">
            En proceso...
          </p>
        </>
      ) : isEmpty ? (
        <Circle className="w-8 h-8 text-muted-foreground" />
      ) : (
        <Circle className="w-8 h-8 text-muted-foreground" />
      )}
    </motion.div>
  );
}
