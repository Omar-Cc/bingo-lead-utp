export interface IceBreaker {
  category: "tech" | "utp" | "random";
  question: string;
}

export const iceBreakers: IceBreaker[] = [
  // 💻 Categoría Tech / Dev
  {
    category: "tech",
    question: "¿Prefieres trabajar remoto o presencial? ¿Por qué?",
  },
  {
    category: "tech",
    question: "¿Cuál fue el primer lenguaje de programación que aprendiste?",
  },
  {
    category: "tech",
    question: "¿Team Windows, Team Mac o Team Linux?",
  },
  {
    category: "tech",
    question: "¿Qué es lo más difícil que te ha tocado programar?",
  },
  {
    category: "tech",
    question: "¿Prefieres Backend, Frontend o Datos?",
  },
  {
    category: "tech",
    question:
      "¿Usas ChatGPT para estudiar o para que haga tu tarea? (Sé honesto/a)",
  },
  {
    category: "tech",
    question: "¿Modo Oscuro o Modo Claro en tu IDE?",
  },

  // 🎓 Categoría Vida UTP / Estudiante
  {
    category: "utp",
    question: '¿Cuál es tu "hueco" favorito para comer cerca de la U?',
  },
  {
    category: "utp",
    question: "¿En qué ciclo estás y qué tal te va?",
  },
  {
    category: "utp",
    question: "¿Alguna vez se te ha cerrado el Canvas enviando una tarea?",
  },
  {
    category: "utp",
    question: "¿Tren, Metropolitano o Bus? ¿Cuánto tardas en llegar?",
  },
  {
    category: "utp",
    question: "¿Has hecho alguna amanecida en la UTP o en casa esta semana?",
  },
  {
    category: "utp",
    question: "¿Qué consejo le darías a un cachimbo (nuevo ingreso)?",
  },
  {
    category: "utp",
    question: "¿Cuál fue el curso que más te hizo sufrir en la UTP y por qué?",
  },

  // ⚡ Categoría Random / Personal
  {
    category: "random",
    question: "¿Marvel o DC?",
  },
  {
    category: "random",
    question: "¿Qué serie estás viendo ahora mismo?",
  },
  {
    category: "random",
    question: "¿Tienes algún talento oculto fuera de la tecnología?",
  },
  {
    category: "random",
    question: "¿Pizza con piña: sí o no?",
  },
  {
    category: "tech",
    question: "¿Escuchas música para programar/estudiar? ¿Qué género?",
  },
  {
    category: "tech",
    question: "¿Cuál es la tecnología que todos aman pero tú no soportas?",
  },
  {
    category: "tech",
    question: "¿Teclado mecánico ruidoso o teclado de laptop silencioso?",
  },
  {
    category: "tech",
    question: "¿Chrome, Firefox, Brave o (te juzgaré) Edge?",
  },
  {
    category: "tech",
    question: "Si pudieras crear una App para solucionar un problema de tu vida, ¿qué haría?",
  },
  {
    category: "tech",
    question: "¿Tabs (Tabulaciones) o Espacios? ¡El debate eterno!",
  },
  {
    category: "tech",
    question: "¿Alguna vez borraste algo importante y no tenías backup? Cuéntame el drama.",
  },
  {
    category: "tech",
    question: "¿Prefieres trabajar en una Startup caótica o en un Banco estable?",
  },
  {
    category: "tech",
    question: "¿Python es lento o la gente no sabe optimizarlo? Debate.",
  },
  {
    category: "tech",
    question: "¿Has intentado usar Linux? ¿Sigues ahí o volviste a Windows?",
  },
  {
    category: "tech",
    question: "¿Cuál es el atajo de teclado sin el cual no podrías vivir (ej. Ctrl+Z)?",
  },
  {
    category: "tech",
    question: "¿Videojuegos: PC Master Race o Consola?",
  },
  {
    category: "tech",
    question: "¿Qué opinas del 'Low Code' / 'No Code'? ¿Nos quitará el trabajo?",
  },
  {
    category: "tech",
    question: "¿Cuál es tu red social favorita para ver contenido Tech (Twitter, LinkedIn, TikTok)?",
  },
  {
    category: "tech",
    question: "Si tuvieras presupuesto infinito, ¿qué gadget te comprarías ahora mismo?",
  },

  // 🎓 EXPANSIÓN: VIDA UTP / ESTUDIANTE
  {
    category: "utp",
    question: "¿Prefieres clases a las 7:00 AM o salir a las 10:00 PM?",
  },
  {
    category: "utp",
    question: "¿Cuál es el mejor lugar de la U para dormir una siesta entre clases?",
  },
  {
    category: "utp",
    question: "¿Ascensor lleno: esperas 15 min o subes 8 pisos por escalera?",
  },
  {
    category: "utp",
    question: "¿Alguna vez te tocó un grupo de trabajo donde tuviste que hacerlo todo tú?",
  },
  {
    category: "utp",
    question: "¿Prefieres examen final escrito o presentación de proyecto?",
  },
  {
    category: "utp",
    question: "¿Qué es lo más raro que has comido en los 'agachaditos' cerca de la U?",
  },
  {
    category: "utp",
    question: "¿Alguna vez te olvidaste el carnet y tuviste que rogar para entrar?",
  },
  {
    category: "utp",
    question: "¿Baños de la U: sabes cuál es el más limpio y secreto?",
  },
  {
    category: "utp",
    question: "¿Cuál ha sido tu promedio ponderado más bajo? (Sin vergüenza)",
  },
  {
    category: "utp",
    question: "¿Has llevado algún curso por segunda (o tercera) vez?",
  },
  {
    category: "utp",
    question: "¿Te has enamorado alguna vez de alguien solo por verlo en la biblioteca?",
  },
  {
    category: "utp",
    question: "¿Prefieres estudiar solo/a con música o en grupo con bulla?",
  },
  {
    category: "utp",
    question: "¿Viernes Culturales: vas por los créditos o porque te gusta?",
  },
  {
    category: "utp",
    question: "¿Cuál es la excusa más falsa que le has dicho a un profe para entregar tarde algo?",
  },
  {
    category: "utp",
    question: "Si fueras Rector de la UTP por un día, ¿qué cambiarías primero?",
  },

  // ⚡ EXPANSIÓN: RANDOM / PERSONAL
  {
    category: "random",
    question: "¿Si fueras un animal, cuál serías y por qué?",
  },
  {
    category: "random",
    question: "¿Ceviche o Pollo a la Brasa? (Solo puedes elegir uno de por vida)",
  },
  {
    category: "random",
    question: "¿Cuál es tu canción de Karaoke infalible?",
  },
  {
    category: "random",
    question: "¿Crees en los extraterrestres o fantasmas?",
  },
  {
    category: "random",
    question: "¿Team Verano (Calor) o Team Invierno (Frío)?",
  },
  {
    category: "random",
    question: "¿Cuál es la película más mala que has visto completa?",
  },
  {
    category: "random",
    question: "Si ganaras la lotería hoy, ¿dejarías la carrera?",
  },
  {
    category: "random",
    question: "¿Tienes algún placer culposo (música, comida o TV)?",
  },
  {
    category: "random",
    question: "¿Viajar al pasado o al futuro? ¿Por qué?",
  },
  {
    category: "random",
    question: "¿Quién ganaría en una pelea: Batman o Iron Man?",
  },
  {
    category: "random",
    question: "¿Cuál es tu meme o sticker de WhatsApp favorito últimamente?",
  },
  {
    category: "random",
    question: "¿Eres de los que llega 1 hora antes o 5 minutos tarde a todo?",
  },
  {
    category: "random",
    question: "¿Sabes cocinar o sobrevives a base de atún y huevos?",
  },
  {
    category: "random",
    question: "¿Qué es lo primero que harías si hubiera un apocalipsis zombie?",
  },
  {
    category: "random",
    question: "¿TikTok, Instagram o Twitter (X)? ¿Dónde pierdes más tiempo?",
  },
  {
    category: "random",
    question: "¿Prefieres hablar por llamada o puros mensajes de texto?",
  },
  {
    category: "random",
    question: "¿Gatos o Perros? ¡Defiende tu bando!",
  },
  {
    category: "random",
    question: "¿Agua con gas o sin gas?",
  },
  {
    category: "random",
    question: "¿Cuál es el mejor concierto al que has ido (o al que mueres por ir)?",
  },
  {
    category: "random",
    question: "Si pudieras cenar con cualquier personaje histórico, ¿quién sería?",
  },
];

export function getRandomIceBreaker(): IceBreaker {
  const randomIndex = Math.floor(Math.random() * iceBreakers.length);
  return iceBreakers[randomIndex];
}
