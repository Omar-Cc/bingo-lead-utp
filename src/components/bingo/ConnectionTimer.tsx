"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConnectionTimerProps {
  readonly startTime: number;
  readonly duration?: number;
  readonly onComplete: () => void;
  readonly userName: string;
  readonly question: string;
}

export function ConnectionTimer({
  startTime,
  duration = 45,
  onComplete,
  userName,
  question,
}: ConnectionTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(0, duration - elapsed);

      setTimeLeft(remaining);

      if (remaining === 0 && !isComplete) {
        setIsComplete(true);
        // Don't call onComplete here - let user click the button
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [startTime, duration, isComplete]);

  const progress = (timeLeft / duration) * 100;
  const circumference = 2 * Math.PI * 120;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            ¡Conexión Iniciada!
          </h1>
          <p className="text-xl text-foreground">
            con <span className="font-semibold text-primary">{userName}</span>
          </p>
        </div>

        {/* Countdown Circle */}
        <div className="relative flex items-center justify-center">
          <svg className="w-64 h-64 transform -rotate-90">
            {/* Background circle */}
            <circle
              cx="128"
              cy="128"
              r="120"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              stroke="url(#gradient)"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--gradient-start)" />
                <stop offset="50%" stopColor="var(--gradient-mid)" />
                <stop offset="100%" stopColor="var(--gradient-end)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timer display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Clock className="w-8 h-8 mb-2 text-primary" />
            <div className="text-5xl font-bold text-foreground">{timeLeft}</div>
            <div className="text-sm text-muted-foreground">segundos</div>
          </div>
        </div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-6 space-y-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <h2 className="text-lg font-semibold text-card-foreground">
              La Misión
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            Para validar este punto, pregúntale a{" "}
            <span className="font-medium text-foreground">{userName}</span>:
          </p>

          <div className="bg-secondary/50 rounded-md p-4 border-l-4 border-primary">
            <p className="text-base font-medium text-foreground leading-relaxed">
              &ldquo;{question}&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={isComplete ? onComplete : undefined}
          disabled={!isComplete}
          className={cn(
            "w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300",
            isComplete
              ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 cursor-pointer"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          )}
        >
          {isComplete ? "✅ Validar Punto" : "Conversando..."}
        </motion.button>

        {/* Progress indicator */}
        {!isComplete && (
          <p className="text-center text-sm text-muted-foreground">
            Espera {timeLeft}s para validar la conexión
          </p>
        )}
      </motion.div>
    </div>
  );
}
