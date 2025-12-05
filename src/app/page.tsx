"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LogoLead } from "@/components/bingo/LogoLead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Loader2, X } from "lucide-react";
import { generateUserId, saveUserData } from "@/lib/user";
import { LogoGlobant } from "@/components/bingo/LogoGlobant";

export const CARRERAS = [
  "Adm. Banca y Finanzas",
  "Adm. Hotelera y de Turismo",
  "Adm. Negocios Internacionales",
  "Adm. de Empresas",
  "Adm. y Marketing",
  "Arquitectura",
  "Ciencias de la Comunicación",
  "Comunicación y Publicidad",
  "Contabilidad",
  "Derecho",
  "Diseño Digital Publicitario",
  "Diseño Profesional Gráfico",
  "Diseño Profesional de Interiores",
  "Economía",
  "Educación Inicial",
  "Educación Primaria",
  "Enfermería",
  "Farmacia y Bioquímica",
  "Ing. Aeronáutica",
  "Ing. Ambiental",
  "Ing. Automotriz",
  "Ing. Biomédica",
  "Ing. Civil",
  "Ing. Electrónica",
  "Ing. Eléctrica y de Potencia",
  "Ing. Empresarial",
  "Ing. Industrial",
  "Ing. Mecatrónica",
  "Ing. Mecánica",
  "Ing. Seguridad Industrial y Minera",
  "Ing. de Minas",
  "Ing. de Sistemas e Informática",
  "Ing. de Software",
  "Ing. de Telecomunicaciones",
  "Laboratorio Clínico y Anatomía Patológica",
  "Medicina",
  "Nutrición y Dietética",
  "Obstetricia",
  "Odontología",
  "Psicología",
  "Terapia Física",
  "Otra",
];

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCarrera, setSelectedCarrera] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    carrera: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Generate unique user ID
      const userId = generateUserId();

      // Save user data to localStorage
      saveUserData({
        userId,
        userName: formData.nombre,
        carrera: formData.carrera,
      });

      // Navigate to bingo page
      router.push("/bingo");
    } catch (error) {
      console.error("Error during registration:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020c3e] relative overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Gradiente radial de fondo */}
      <div className="absolute inset-0 bg-gradient-radial from-[#a6249d]/20 via-[#020c3e] to-[#020c3e]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d93340]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7856ee]/10 rounded-full blur-3xl" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-md">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <LogoLead className="w-48 mx-6"/>
            <X className="w-36 mx-6" />
            <LogoGlobant className="w-48 mx-6" />
          </div>

          <h1 className="text-5xl md:text-6xl mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-[#7856ee] via-[#a6249d] to-[#d93340] bg-clip-text text-transparent">
              BINGO TECH
            </span>
          </h1>

          <p className="text-white/60 text-lg">Conecta, escanea y gana.</p>
        </motion.div>

        {/* Card del Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="border-[#7856ee]/20 bg-[#0b174a]/80 backdrop-blur-xl shadow-2xl shadow-[#7856ee]/10">
            <CardContent className="pt-6 pb-6">
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Input Nombre */}
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-white">
                    Tu Nombre
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Ej. Matthew Zegarra"
                    value={formData.nombre}
                    onChange={(e) =>
                      setFormData({ ...formData, nombre: e.target.value })
                    }
                    className={`bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-[#7856ee] focus:ring-[#7856ee]/20 transition-all ${
                      formData.nombre ? "border-[#d93340]" : ""
                    }`}
                  />
                </div>

                {/* Select Carrera */}
                <div className="space-y-2">
                  <Label htmlFor="carrera" className="text-white">
                    Carrera
                  </Label>
                  <Select
                    value={selectedCarrera}
                    onValueChange={(value) => {
                      setSelectedCarrera(value);
                      setFormData({ ...formData, carrera: value });
                    }}
                  >
                    <SelectTrigger
                      id="carrera"
                      className={`bg-white/5 border-white/20 text-white focus:border-[#7856ee] focus:ring-[#7856ee]/20 ${
                        selectedCarrera ? "border-[#d93340]" : ""
                      }`}
                    >
                      <SelectValue placeholder="Selecciona tu carrera" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0b174a] border-white/20">
                      {CARRERAS.map((carrera) => (
                        <SelectItem
                          key={carrera}
                          value={carrera}
                          className="text-white hover:bg-[#7856ee]/20 focus:bg-[#7856ee]/20"
                        >
                          {carrera}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Botón de Submit */}
                <Button
                  type="submit"
                  disabled={!formData.nombre || !selectedCarrera || isLoading}
                  className="w-full bg-[#7856ee] hover:bg-[#a6249d] text-white py-6 text-base disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-[#7856ee]/30 hover:shadow-[#7856ee]/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Cargando...
                    </>
                  ) : (
                    "¡INGRESAR AL JUEGO!"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-white/30 text-sm">Powered by LEAD UTP</p>
        </motion.div>
      </div>
    </div>
  );
}
