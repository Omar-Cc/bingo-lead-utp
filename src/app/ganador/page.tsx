"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Trophy, Sparkles, Award, Users } from "lucide-react";
import { useBingoStore } from "@/lib/store";

export default function GanadorPage() {
  const { connections } = useBingoStore();
  const [showConfetti, setShowConfetti] = useState(false);

  const validatedCount = connections.filter((c) => c.validated).length;

  useEffect(() => {
    // Trigger confetti animation
    setShowConfetti(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: Math.random() * window.innerWidth,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ["#7856ee", "#d93340", "#cb2f4a", "#a6249d"][
                Math.floor(Math.random() * 4)
              ],
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl w-full space-y-8">
        {/* Trophy Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] rounded-full blur-2xl opacity-50"
            />
            <div className="relative p-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-4 border-primary">
              <Trophy className="w-24 h-24 text-primary" />
            </div>
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)] bg-clip-text text-transparent">
            ¡Felicidades!
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium">
            ¡Completaste el Bingo LEAD UTP!
          </p>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-card border border-border rounded-lg p-6 space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-card-foreground">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Tus Logros</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/10 rounded-lg p-4 text-center border border-primary/20">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">
                {validatedCount}
              </div>
              <div className="text-sm text-muted-foreground">Conexiones</div>
            </div>

            <div className="bg-accent/10 rounded-lg p-4 text-center border border-accent/20">
              <Award className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Completado</div>
            </div>
          </div>
        </motion.div>

        {/* Connections List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-card border border-border rounded-lg p-6 space-y-4"
        >
          <h3 className="font-semibold text-card-foreground text-center">
            Personas que conociste:
          </h3>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {connections
              .filter((c) => c.validated)
              .map((connection, index) => (
                <motion.div
                  key={connection.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {connection.scannedUserName}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {connection.question}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center space-y-2"
        >
          <p className="text-muted-foreground">
            Has expandido tu red de contactos en LEAD UTP
          </p>
          <p className="text-sm text-muted-foreground">
            ¡Sigue conectando y construyendo relaciones valiosas!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
