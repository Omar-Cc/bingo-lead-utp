export interface BingoMission {
  id: number;
  shortText: string;
  mission: string;
}

export const bingoMissions: BingoMission[] = [
  // --- NIVEL: TECNOLOGÍA GENERAL (Para todos) ---
  {
    id: 1,
    shortText: "Diseña en Canva",
    mission:
      "Busca a alguien que haga sus presentaciones o posts en Canva. Pregúntale: ¿Cuál es tu truco favorito de diseño?",
  },
  {
    id: 2,
    shortText: "Master en Excel",
    mission:
      "Encuentra a alguien que sepa usar Tablas Dinámicas en Excel. Pregúntale: ¿El Excel te ha salvado la vida en algún curso?",
  },
  {
    id: 3,
    shortText: "Usa ChatGPT",
    mission:
      "Busca a alguien que use IA para estudiar (no para plagiar 👀). Pregúntale: ¿Cuál es el prompt más raro que ha escrito?",
  },
  {
    id: 4,
    shortText: "Edita videos",
    mission:
      "Encuentra a alguien que edite videos (TikTok, YouTube, etc.). Pregúntale: ¿Qué app usas y cuánto tiempo te toma?",
  },
  {
    id: 5,
    shortText: "Gamer",
    mission:
      "Busca a un gamer. Pregúntale: ¿Cuál es tu juego favorito y cuántas horas le has metido?",
  },
  {
    id: 6,
    shortText: "Streamer",
    mission:
      "Encuentra a alguien que haya hecho stream alguna vez. Pregúntale: ¿De qué fue y cómo te fue?",
  },
  {
    id: 7,
    shortText: "Fotógrafo",
    mission:
      "Busca a alguien que tome fotos con cámara profesional. Pregúntale: ¿Qué cámara usas?",
  },
  {
    id: 8,
    shortText: "Podcaster",
    mission:
      "Encuentra a alguien que escuche podcasts regularmente. Pregúntale: ¿Cuál recomiendas?",
  },
  {
    id: 9,
    shortText: "Redes Sociales Pro",
    mission:
      "Busca a alguien que maneje redes sociales de alguna marca o proyecto. Pregúntale: ¿Cuál es tu red favorita?",
  },
  {
    id: 10,
    shortText: "Notion Fan",
    mission:
      "Encuentra a alguien que use Notion para organizarse. Pregúntale: ¿Qué templates usas?",
  },

  // --- VIDA UTP ---
  {
    id: 11,
    shortText: "Madrugador",
    mission:
      "Busca a alguien que llegue a la U antes de las 7am. Pregúntale: ¿Cómo le haces?",
  },
  {
    id: 12,
    shortText: "Trasnochador",
    mission:
      "Encuentra a alguien que se haya desvelado esta semana estudiando. Pregúntale: ¿Hasta qué hora?",
  },
  {
    id: 13,
    shortText: "Comida Favorita",
    mission:
      "Busca a alguien que tenga un 'hueco' favorito cerca de la U. Pregúntale: ¿Cuál y qué pides?",
  },
  {
    id: 14,
    shortText: "Transporte",
    mission:
      "Encuentra a alguien que venga en tren/metro. Pregúntale: ¿Cuánto tardas en llegar?",
  },
  {
    id: 15,
    shortText: "Biblioteca",
    mission:
      "Busca a alguien que estudie en la biblioteca. Pregúntale: ¿Cuál es tu spot favorito?",
  },
  {
    id: 16,
    shortText: "Grupo de Estudio",
    mission:
      "Encuentra a alguien que tenga un grupo de estudio fijo. Pregúntale: ¿Cómo se organizan?",
  },
  {
    id: 17,
    shortText: "Curso Difícil",
    mission:
      "Busca a alguien que esté llevando un curso muy difícil. Pregúntale: ¿Cuál y por qué?",
  },
  {
    id: 18,
    shortText: "Profesor Favorito",
    mission:
      "Encuentra a alguien que tenga un profesor favorito. Pregúntale: ¿Quién y por qué?",
  },
  {
    id: 19,
    shortText: "Actividad Extracurricular",
    mission:
      "Busca a alguien que participe en algún club o taller. Pregúntale: ¿Cuál y qué hacen?",
  },
  {
    id: 20,
    shortText: "Proyecto Final",
    mission:
      "Encuentra a alguien que esté en proyecto final/tesis. Pregúntale: ¿De qué trata?",
  },

  // --- HABILIDADES Y HOBBIES ---
  {
    id: 21,
    shortText: "Habla Otro Idioma",
    mission:
      "Busca a alguien que hable otro idioma además de español. Pregúntale: ¿Cuál y cómo lo aprendió?",
  },
  {
    id: 22,
    shortText: "Toca un Instrumento",
    mission:
      "Encuentra a alguien que toque un instrumento musical. Pregúntale: ¿Cuál y desde cuándo?",
  },
  {
    id: 23,
    shortText: "Deportista",
    mission:
      "Busca a alguien que practique algún deporte. Pregúntale: ¿Cuál y con qué frecuencia?",
  },
  {
    id: 24,
    shortText: "Artista",
    mission:
      "Encuentra a alguien que dibuje, pinte o haga arte. Pregúntale: ¿Qué tipo de arte haces?",
  },
  {
    id: 25,
    shortText: "Cocinero",
    mission:
      "Busca a alguien que sepa cocinar bien. Pregúntale: ¿Cuál es tu platillo estrella?",
  },
  {
    id: 26,
    shortText: "Lector",
    mission:
      "Encuentra a alguien que lea libros regularmente. Pregúntale: ¿Qué estás leyendo ahora?",
  },
  {
    id: 27,
    shortText: "Viajero",
    mission:
      "Busca a alguien que haya viajado fuera del país. Pregúntale: ¿A dónde y qué fue lo mejor?",
  },
  {
    id: 28,
    shortText: "Emprendedor",
    mission:
      "Encuentra a alguien que tenga o haya tenido un negocio. Pregúntale: ¿De qué fue?",
  },
  {
    id: 29,
    shortText: "Voluntario",
    mission:
      "Busca a alguien que haya hecho voluntariado. Pregúntale: ¿Dónde y cómo fue la experiencia?",
  },
  {
    id: 30,
    shortText: "Coleccionista",
    mission:
      "Encuentra a alguien que coleccione algo. Pregúntale: ¿Qué coleccionas y cuántos tienes?",
  },

  // --- TECH & DESARROLLO ---
  {
    id: 31,
    shortText: "Programador",
    mission:
      "Busca a alguien que sepa programar. Pregúntale: ¿Cuál fue tu primer lenguaje?",
  },
  {
    id: 32,
    shortText: "GitHub Activo",
    mission:
      "Encuentra a alguien que tenga proyectos en GitHub. Pregúntale: ¿Cuál es tu repo favorito?",
  },
  {
    id: 33,
    shortText: "Hackathon",
    mission:
      "Busca a alguien que haya participado en un hackathon. Pregúntale: ¿Cómo fue la experiencia?",
  },
  {
    id: 34,
    shortText: "Certificación",
    mission:
      "Encuentra a alguien que tenga alguna certificación tech. Pregúntale: ¿Cuál y valió la pena?",
  },
  {
    id: 35,
    shortText: "Curso Online",
    mission:
      "Busca a alguien que haya completado un curso online (Udemy, Coursera, etc.). Pregúntale: ¿De qué fue?",
  },
  {
    id: 36,
    shortText: "Stack Favorito",
    mission:
      "Encuentra a alguien con un stack tecnológico favorito. Pregúntale: ¿Cuál y por qué?",
  },
  {
    id: 37,
    shortText: "Bug Épico",
    mission:
      "Busca a alguien que haya tenido un bug épico. Pregúntale: ¿Cuál fue y cómo lo resolviste?",
  },
  {
    id: 38,
    shortText: "IA Generativa",
    mission:
      "Encuentra a alguien que haya usado IA para generar imágenes/código. Pregúntale: ¿Qué herramienta usas?",
  },
  {
    id: 39,
    shortText: "Base de Datos",
    mission:
      "Busca a alguien que sepa SQL. Pregúntale: ¿Prefieres SQL o NoSQL?",
  },
  {
    id: 40,
    shortText: "Cloud",
    mission:
      "Encuentra a alguien que haya usado servicios cloud (AWS, Azure, GCP). Pregúntale: ¿Cuál prefieres?",
  },

  // --- RANDOM & FUN ---
  {
    id: 41,
    shortText: "Cumpleaños Cercano",
    mission: "Busca a alguien que cumpla años este mes. Pregúntale: ¿Qué día?",
  },
  {
    id: 42,
    shortText: "Mismo Signo",
    mission:
      "Encuentra a alguien de tu mismo signo zodiacal. Pregúntale: ¿Crees en el horóscopo?",
  },
  {
    id: 43,
    shortText: "Café o Té",
    mission:
      "Busca a alguien que prefiera té sobre café. Pregúntale: ¿Qué tipo de té?",
  },
  {
    id: 44,
    shortText: "Serie Favorita",
    mission:
      "Encuentra a alguien que esté viendo una serie ahora. Pregúntale: ¿Cuál y la recomiendas?",
  },
  {
    id: 45,
    shortText: "Mascota",
    mission:
      "Busca a alguien que tenga mascota. Pregúntale: ¿Qué mascota y cómo se llama?",
  },
  {
    id: 46,
    shortText: "Concierto",
    mission:
      "Encuentra a alguien que haya ido a un concierto. Pregúntale: ¿De quién y cómo estuvo?",
  },
  {
    id: 47,
    shortText: "Maratón",
    mission:
      "Busca a alguien que haya hecho un maratón de series/películas. Pregúntale: ¿De qué fue?",
  },
  {
    id: 48,
    shortText: "Meme Favorito",
    mission:
      "Encuentra a alguien que tenga un meme favorito. Pregúntale: ¿Cuál es?",
  },
  {
    id: 49,
    shortText: "Red Social Favorita",
    mission:
      "Busca a alguien cuya red social favorita NO sea Instagram. Pregúntale: ¿Cuál prefieres?",
  },
  {
    id: 50,
    shortText: "Playlist",
    mission:
      "Encuentra a alguien que tenga una playlist de Spotify con más de 100 canciones. Pregúntale: ¿Cómo se llama?",
  },
  {
    id: 51,
    shortText: "Usa Tema Light ☀️",
    mission: "¡Reto difícil! Encuentra a alguien que programe con fondo blanco (Light Mode). Pregúntale: ¿Por qué odias tus ojos?",
  },
  {
    id: 52,
    shortText: "Copió de StackOverflow",
    mission: "Busca a alguien honesto que admita copiar código de internet. Pregúntale: ¿Le funcionó a la primera?",
  },
  {
    id: 53,
    shortText: "Odia Java (o PHP)",
    mission: "Encuentra a alguien que tenga un lenguaje de programación 'enemigo'. Pregúntale: ¿Por qué lo detesta tanto?",
  },
  {
    id: 54,
    shortText: "Centrar un Div",
    mission: "Busca a alguien que sepa centrar un `div` en CSS sin sufrir. Pídele que te explique el secreto.",
  },
  {
    id: 55,
    shortText: "Teclado Mecánico",
    mission: "Encuentra a alguien que ame los teclados ruidosos. Pregúntale: ¿Qué switches usa (Blue, Red, Brown)?",
  },
  {
    id: 56,
    shortText: "Linux User 🐧",
    mission: "Busca a un usuario de Linux (Ubuntu, Arch, Kali...). Pregúntale: ¿Por qué es mejor que Windows?",
  },
  {
    id: 57,
    shortText: "Team Tabs vs Spaces",
    mission: "Encuentra a alguien que prefiera usar TABS en lugar de espacios para indentar código. ¡Debatan!",
  },

  // --- EXPANSIÓN: SUPERVIVENCIA UTP (Más anécdotas) ---
  {
    id: 58,
    shortText: "Odia los Ascensores",
    mission: "Busca a alguien que prefiera subir escaleras antes que hacer la fila del ascensor en hora punta.",
  },
  {
    id: 59,
    shortText: "Olvidó su Carnet",
    mission: "Encuentra a alguien que haya tenido que rogar para entrar a la U porque olvidó su carnet. ¿Qué excusa puso?",
  },
  {
    id: 60,
    shortText: "Almuerzo 'Agachaditos'",
    mission: "Busca a alguien que conozca los huecos más baratos para comer fuera de la U. ¡Pídele el dato!",
  },
  {
    id: 61,
    shortText: "Jaló un curso",
    mission: "Encuentra a un guerrero que admita haber jalado (reprobado) un curso. ¡Dile que la resiliencia es clave!",
  },
  {
    id: 62,
    shortText: "Delegado Fantasma",
    mission: "Busca a alguien que haya tenido un delegado de salón que nunca aparecía. ¿Cómo sobrevivieron?",
  },

  // --- EXPANSIÓN: CURIOSIDADES & DEBATES ---
  {
    id: 63,
    shortText: "Pizza con Piña 🍍",
    mission: "Encuentra a alguien que le GUSTE la pizza con piña. (O que la odie con pasión). Pregúntale: ¿Por qué?",
  },
  {
    id: 64,
    shortText: "Es Zurdo/a",
    mission: "Busca a alguien que escriba con la mano izquierda. ¡Solo el 10% de la población lo hace!",
  },
  {
    id: 65,
    shortText: "Otaku Confirmado",
    mission: "Encuentra a alguien que vea Anime regularmente. Pregúntale: ¿Cuál es su favorito de todos los tiempos?",
  },
  {
    id: 66,
    shortText: "Sin Redes Sociales",
    mission: "Busca a alguien 'Off the grid' que casi no publique nada en redes. Pregúntale: ¿Cómo se entera de los chismes?",
  },
  {
    id: 67,
    shortText: "Habla con Jerga",
    mission: "Encuentra a alguien que use jerga peruana clásica (Batería, Causa, Mano). Pídele un saludo con estilo.",
  },
  {
    id: 68,
    shortText: "Team Android vs iPhone",
    mission: "Busca a alguien que defienda a muerte su sistema operativo móvil. ¿Por qué el otro es malo?",
  },
  {
    id: 69,
    shortText: "PC Master Race",
    mission: "Encuentra a alguien que haya armado su propia computadora por piezas. ¿Qué tarjeta de video tiene?",
  },
  
  // --- EL COMODÍN DE LA COMUNIDAD (Importante) ---
  {
    id: 70,
    shortText: "¡VAMOS LEAD!",
    mission: "Comodín: Encuentra a un organizador o voluntario del evento y choca las manos gritando el nombre de la comunidad.",
  },
  // --- EXPANSIÓN TECH & DEV (71-120) ---
{ id: 71, shortText: "Sabe C++", mission: "Busca a alguien que programe en C++. Pregúntale: ¿Es tan difícil como dicen?" },
{ id: 72, shortText: "Usa Docker", mission: "Encuentra a alguien que sepa usar Docker. Pregúntale: ¿Cuántos contenedores ha levantado a la vez?" },
{ id: 73, shortText: "Frontend Lover", mission: "Busca a alguien que ame CSS y React. Pregúntale: ¿Tailwind o Bootstrap?" },
{ id: 74, shortText: "Backend Lover", mission: "Encuentra a alguien que prefiera la lógica y las bases de datos. Pregúntale: ¿Node, Java o Python?" },
{ id: 75, shortText: "Full Stack", mission: "Busca al 'elegido' que hace de todo (Front y Back). Pregúntale: ¿Qué prefiere en realidad?" },
{ id: 76, shortText: "Tester / QA", mission: "Encuentra a alguien que se dedique a encontrar bugs. Pregúntale: ¿Cuál fue el bug más obvio que se les pasó?" },
{ id: 77, shortText: "Usa VS Code", mission: "Busca a alguien que use Visual Studio Code. Pregúntale: ¿Cuál es su extensión favorita?" },
{ id: 78, shortText: "Usa Vim/Neovim", mission: "¡Nivel Dios! Encuentra a alguien que programe en Vim. Pídele que te enseñe cómo salir de ahí." },
{ id: 79, shortText: "Desarrollador Móvil", mission: "Busca a alguien que haga Apps (Android o iOS). Pregúntale: ¿Nativo, Flutter o React Native?" },
{ id: 80, shortText: "Data Scientist", mission: "Encuentra a alguien que analice datos. Pregúntale: ¿Python o R?" },
{ id: 81, shortText: "Ciberseguridad", mission: "Busca a alguien interesado en hacking ético. Pregúntale: ¿Alguna vez ha 'hackeado' el WiFi del vecino?" },
{ id: 82, shortText: "Arduino / IoT", mission: "Encuentra a alguien que juegue con hardware (Arduino, Raspberry). Pregúntale: ¿Qué ha construido?" },
{ id: 83, shortText: "Impresión 3D", mission: "Busca a alguien que tenga o use una impresora 3D. Pregúntale: ¿Qué es lo más inútil que ha impreso?" },
{ id: 84, shortText: "Blockchain / Crypto", mission: "Encuentra a alguien que entienda de Cripto o Web3. Pregúntale: ¿Bitcoin o Ethereum?" },
{ id: 85, shortText: "Game Dev", mission: "Busca a alguien que quiera crear videojuegos. Pregúntale: ¿Unity o Unreal Engine?" },
{ id: 86, shortText: "Usa Jira", mission: "Encuentra a alguien que sufra (o ame) mover tickets en Jira. Pregúntale: ¿Cuántos tickets tiene pendientes?" },
{ id: 87, shortText: "Slack / Discord", mission: "Busca a alguien que viva en canales de Discord. Pregúntale: ¿En cuántos servidores está?" },
{ id: 88, shortText: "Windows 11", mission: "Encuentra a alguien que ya use Windows 11. Pregúntale: ¿Le gusta o extraña el 10?" },
{ id: 89, shortText: "Macbook User", mission: "Busca a alguien con Mac. Pregúntale: ¿Extraña los puertos USB normales?" },
{ id: 90, shortText: "Doble Monitor", mission: "Encuentra a alguien que use dos (o más) pantallas. Pregúntale: ¿Podría volver a usar solo una?" },
{ id: 91, shortText: "Sabe Photoshop", mission: "Busca a alguien que sepa retocar fotos. Pregúntale: ¿Lo usa para memes o trabajo?" },
{ id: 92, shortText: "Usa Figma", mission: "Encuentra a alguien que diseñe interfaces. Pregúntale: ¿Cuál es su plugin favorito?" },
{ id: 93, shortText: "Hostea su web", mission: "Busca a alguien que tenga su propia página web online. Pídele el link." },
{ id: 94, shortText: "Compró Dominio", mission: "Encuentra a alguien que haya comprado un dominio web y nunca lo usó. (Típico)." },
{ id: 95, shortText: "Fan de Elon Musk", mission: "Busca a alguien que siga a Elon. Pregúntale: ¿Qué opina de X (Twitter)?" },
{ id: 96, shortText: "Odia las 'Meetings'", mission: "Encuentra a alguien que crea que 'esa reunión pudo ser un email'. ¡Solidarízate!" },
{ id: 97, shortText: "Trabajo Remoto", mission: "Busca a alguien que trabaje desde casa. Pregúntale: ¿Trabaja en pijama?" },
{ id: 98, shortText: "Freelance en dólares", mission: "Encuentra a alguien que gane en moneda extranjera. ¡Pídele el secreto!" },
{ id: 99, shortText: "LinkedIn 'Open to Work'", mission: "Busca a alguien buscando chamba activamente. ¡Deseale suerte!" },
{ id: 100, shortText: "CV de una hoja", mission: "Encuentra a alguien que haya logrado resumir su CV en una sola cara. ¿Cómo lo hizo?" },
{ id: 101, shortText: "Sabe SQL", mission: "Busca a alguien que sueñe con 'SELECT * FROM'. Pregúntale: ¿Cuál es su Join favorito?" },
{ id: 102, shortText: "NoSQL (Mongo)", mission: "Encuentra a alguien que prefiera bases de datos no relacionales. ¿Por qué?" },
{ id: 103, shortText: "Java Lover", mission: "Busca a un defensor de Java. Pregúntale: ¿Qué opina de los que lo odian?" },
{ id: 104, shortText: "C# / .NET", mission: "Encuentra a alguien del ecosistema Microsoft. Pregúntale: ¿Visual Studio o VS Code?" },
{ id: 105, shortText: "PHP Survivor", mission: "Busca a alguien que programe en PHP. ¡Dile que PHP no ha muerto!" },
{ id: 106, shortText: "Rustacean (Rust)", mission: "¡Difícil! Encuentra a alguien que esté aprendiendo Rust. Pregúntale: ¿Es tan rápido como dicen?" },
{ id: 107, shortText: "Go (Golang)", mission: "Busca a alguien que use el lenguaje de Google. ¿Para qué lo usa?" },
{ id: 108, shortText: "Swift (iOS)", mission: "Encuentra a alguien que programe para Apple. ¿Tiene iPad también?" },
{ id: 109, shortText: "Kotlin (Android)", mission: "Busca a alguien que programe Android moderno. ¿Java ya fue?" },
{ id: 110, shortText: "Ensamblador", mission: "¡Leyenda! Busca a alguien que haya tocado código ensamblador en la U. ¿Lloró?" },
{ id: 111, shortText: "Matlab", mission: "Encuentra a alguien que use Matlab para ingeniería. ¿Le gusta o lo obliga el profe?" },
{ id: 112, shortText: "Latex", mission: "Busca a alguien que haga sus documentos en Latex. ¡Qué elegancia!" },
{ id: 113, shortText: "Power BI", mission: "Encuentra a alguien que haga dashboards bonitos. ¿Es mejor que Excel?" },
{ id: 114, shortText: "Tableau", mission: "Busca a otro experto en visualización de datos." },
{ id: 115, shortText: "AWS Cloud", mission: "Encuentra a alguien certificado o que use AWS. ¿Le han cobrado de más por error?" },
{ id: 116, shortText: "Azure Cloud", mission: "Busca a un usuario de la nube de Microsoft." },
{ id: 117, shortText: "Google Cloud", mission: "Encuentra a alguien que prefiera GCP." },
{ id: 118, shortText: "Heroku Survivor", mission: "Busca a alguien que usaba Heroku cuando era gratis. ¿A dónde migró?" },
{ id: 119, shortText: "Vercel Fan", mission: "Encuentra a alguien que ame Vercel para sus deploys. (Como nosotros)." },
{ id: 120, shortText: "Netlify User", mission: "Busca a alguien que use Netlify." },
// --- EXPANSIÓN VIDA UTP & ESTUDIANTE (121-170) ---
{ id: 121, shortText: "Beca UTP", mission: "Encuentra a alguien que tenga beca. Pregúntale: ¿Qué promedio necesita mantener?" },
{ id: 122, shortText: "Sustitutorio", mission: "Busca a alguien que se haya salvado en un examen sustitutorio. ¡Héroe!" },
{ id: 123, shortText: "Adelanta Cursos", mission: "Encuentra a alguien que esté adelantando cursos en verano. ¿No descansa?" },
{ id: 124, shortText: "Retiró Curso", mission: "Busca a alguien que sabiamente se retiró de un curso antes de jalar. ¿Cuál fue?" },
{ id: 125, shortText: "Viernes Cultural", mission: "Encuentra a alguien que participe en las actividades de los viernes. ¿Qué hace?" },
{ id: 126, shortText: "Deportes UTP", mission: "Busca a alguien que esté en una selección deportiva de la U." },
{ id: 127, shortText: "Elenco de Danza", mission: "Encuentra a alguien que baile en el elenco de la universidad." },
{ id: 128, shortText: "Voluntariado UTP", mission: "Busca a alguien que haga voluntariado con la U." },
{ id: 129, shortText: "SAE", mission: "Encuentra a alguien que haya tenido que ir al SAE (Servicio al Estudiante). ¿Le resolvieron?" },
{ id: 130, shortText: "Carnet Medio Pasaje", mission: "Busca a alguien que le saque el jugo al medio pasaje. ¿Lo usa los domingos?" },
{ id: 131, shortText: "Clases 7 AM", mission: "Encuentra a alguien que ame (u odie) las clases de las 7 de la mañana." },
{ id: 132, shortText: "Clases Noche", mission: "Busca a alguien del turno noche. ¿Trabaja y estudia?" },
{ id: 133, shortText: "Sede Lima Centro", mission: "Encuentra a alguien que estudie o haya ido a la sede de la Av. Arequipa." },
{ id: 134, shortText: "Sede SJL", mission: "Busca a alguien de la sede San Juan de Lurigancho. ¡La torre tecnológica!" },
{ id: 135, shortText: "Sede Norte/Sur", mission: "Encuentra a alguien de las sedes de Lima Norte o Sur." },
{ id: 136, shortText: "Carrera Híbrida", mission: "Busca a alguien que tenga mitad clases virtuales y mitad presenciales." },
{ id: 137, shortText: "Full Virtual", mission: "Encuentra a alguien que lleve casi todo virtual. ¿Extraña ir a la U?" },
{ id: 138, shortText: "Ha repetido plato", mission: "Busca a alguien que haya llevado un curso dos veces. ¡La segunda es la vencida!" },
{ id: 139, shortText: "Tesis", mission: "Encuentra a alguien que ya esté pensando en su tesis. ¿Tiene tema?" },
{ id: 140, shortText: "Prácticas Pre", mission: "Busca a alguien que ya esté haciendo sus prácticas pre-profesionales. ¿Dónde?" },
{ id: 141, shortText: "Egresado", mission: "¡Un veterano! Encuentra a alguien que ya haya terminado o esté por graduarse." },
{ id: 142, shortText: "Cachimbo", mission: "Busca a alguien de primer ciclo. ¡Dale la bienvenida!" },
{ id: 143, shortText: "Mochila Pesada", mission: "Encuentra a alguien que cargue una mochila gigante. ¿Qué lleva ahí?" },
{ id: 144, shortText: "Tablet para apuntes", mission: "Busca a alguien que tome apuntes en iPad o Tablet. ¿Es mejor que el papel?" },
{ id: 145, shortText: "Cuaderno Viejo", mission: "Encuentra a alguien que use un solo cuaderno para 5 cursos. (Clásico)." },
{ id: 146, shortText: "Lapiceros de colores", mission: "Busca a alguien que tenga apuntes super coloridos y organizados." },
{ id: 147, shortText: "Graba las clases", mission: "Encuentra a alguien que grabe el audio de las clases. ¿Luego los escucha?" },
{ id: 148, shortText: "Se duerme en clase", mission: "Busca a alguien que haya 'cabeceado' en una clase presencial. ¿Qué curso era?" },
{ id: 149, shortText: "Llega Tarde", mission: "Encuentra a alguien que siempre llegue corriendo al salón. ¿El tráfico?" },
{ id: 150, shortText: "Profesor Barco", mission: "Busca a alguien que recomiende un profe 'barco' (fácil). ¡Pide el dato!" },
{ id: 151, shortText: "Profesor Yuca", mission: "Encuentra a alguien que haya aprobado con el profe más difícil de la carrera." },
{ id: 152, shortText: "Sala de Computo", mission: "Busca a alguien que se quede en los laboratorios jugando o avanzando trabajos." },
{ id: 153, shortText: "Perdió DNI", mission: "Encuentra a alguien que haya perdido su DNI alguna vez." },
{ id: 154, shortText: "Almuerzo Taper", mission: "Busca a alguien que traiga su propia comida en taper. ¡Ahorro es progreso!" },
{ id: 155, shortText: "Menu de la Tía", mission: "Encuentra a alguien que coma en los puestos callejeros cerca de la U." },
{ id: 156, shortText: "Máquina Expendedora", mission: "Busca a alguien que haya perdido dinero en la máquina de snacks. ¿Se atascó?" },
{ id: 157, shortText: "Baños del último piso", mission: "Encuentra a alguien que conozca el baño más tranquilo de la U." },
{ id: 158, shortText: "Ascensor Lleno", mission: "Busca a alguien que haya subido por las escaleras 10 pisos por no esperar." },
{ id: 159, shortText: "Olvidó Cargador", mission: "Encuentra a alguien que sufra porque se le muere la batería y no trajo cargador." },
{ id: 160, shortText: "Presta Internet", mission: "Busca a alguien que comparta datos de su celular cuando el WiFi falla." },
{ id: 161, shortText: "Grupo de WhatsApp", mission: "Encuentra a alguien que sea admin de su grupo de salón." },
{ id: 162, shortText: "Stickers de Profes", mission: "Busca a alguien que tenga stickers de WhatsApp de algún profesor." },
{ id: 163, shortText: "Delegado General", mission: "Encuentra a alguien que aspire a ser delegado de toda la carrera." },
{ id: 164, shortText: "Feria de Ciencias", mission: "Busca a alguien que haya expuesto en una feria de proyectos." },
{ id: 165, shortText: "Hackathon UTP", mission: "Encuentra a alguien que haya participado en una Hackathon organizada por la U." },
{ id: 166, shortText: "Evento LEAD", mission: "Busca a alguien que haya venido a un evento LEAD anterior. ¿Cuál?" },
{ id: 167, shortText: "Vino solo/a", mission: "Encuentra a alguien que haya venido solo al evento. ¡Intégralo!" },
{ id: 168, shortText: "Trajo Amigos", mission: "Busca a alguien que haya traído a su 'mancha' al evento." },
{ id: 169, shortText: "No es de Sistemas", mission: "Encuentra a alguien de Industrial, Civil, Psicología, etc. ¡La tecnología es para todos!" },
{ id: 170, shortText: "Invitado Externo", mission: "Busca a alguien que no sea de la UTP. ¿De qué U o instituto viene?" },
// --- EXPANSIÓN RANDOM & GEEK (171-230) ---
{ id: 171, shortText: "Pollo a la Brasa", mission: "Busca a alguien que ame el Pollo a la Brasa. ¿Pechuga o Pierna?" },
{ id: 172, shortText: "Ceviche Lover", mission: "Encuentra a alguien que prefiera el Ceviche antes que nada. ¿Con o sin picante?" },
{ id: 173, shortText: "Chifa Fan", mission: "Busca a alguien que pida Chifa. ¿Sopa Wantan o no?" },
{ id: 174, shortText: "No le gusta la Pizza", mission: "¡Raro! Encuentra a alguien que no le guste la pizza." },
{ id: 175, shortText: "Toma Mate", mission: "Busca a alguien que tome infusiones o mate en vez de café." },
{ id: 176, shortText: "Vegetariano/Vegano", mission: "Encuentra a alguien que no coma carne. ¿Es difícil encontrar comida cerca de la U?" },
{ id: 177, shortText: "Sabe Cocinar", mission: "Busca a alguien que sepa preparar Lomo Saltado. ¡Que invite!" },
{ id: 178, shortText: "Postres", mission: "Encuentra a alguien dulcero. ¿Cuál es su postre favorito?" },
{ id: 179, shortText: "Gym Rat", mission: "Busca a alguien que vaya al gym todos los días. ¿Cuánto carga?" },
{ id: 180, shortText: "Runner", mission: "Encuentra a alguien que salga a correr. ¿Ha corrido una maratón?" },
{ id: 181, shortText: "Juega Voley", mission: "Busca a alguien que juegue voley. ¿Posición?" },
{ id: 182, shortText: "Juega Basket", mission: "Encuentra a alguien que juegue baloncesto." },
{ id: 183, shortText: "Natación", mission: "Busca a alguien que practique natación." },
{ id: 184, shortText: "Bicicleta", mission: "Encuentra a alguien que venga en bici a la U. ¿Es seguro?" },
{ id: 185, shortText: "Skater", mission: "Busca a alguien que ande en Skate." },
{ id: 186, shortText: "Músico", mission: "Encuentra a alguien que tenga banda de rock." },
{ id: 187, shortText: "Canta en la Ducha", mission: "Busca a alguien que admita cantar a todo pulmón cuando está solo." },
{ id: 188, shortText: "Karaoke", mission: "Encuentra al rey/reina del Karaoke. ¿Cuál es su canción fija?" },
{ id: 189, shortText: "Baila Salsa", mission: "Busca a alguien que sepa bailar salsa bien." },
{ id: 190, shortText: "K-Pop Fan", mission: "Encuentra a un fan del K-Pop. ¿BTS o Blackpink?" },
{ id: 191, shortText: "Taylor Swift Fan", mission: "Busca a un 'Swiftie'. ¿Cuál es su era favorita?" },
{ id: 192, shortText: "Rockero", mission: "Encuentra a alguien que prefiera el Rock clásico o Metal." },
{ id: 193, shortText: "Reggaeton Viejo", mission: "Busca a alguien que prefiera el reggaetón 'antigüito'." },
{ id: 194, shortText: "Marvel Fan", mission: "Encuentra a alguien que haya visto todas las pelis de Marvel." },
{ id: 195, shortText: "DC Fan", mission: "Busca a alguien que defienda a Batman y Superman." },
{ id: 196, shortText: "Star Wars Fan", mission: "Encuentra a alguien que entienda qué es la Fuerza. ¿Lado oscuro o luz?" },
{ id: 197, shortText: "Harry Potter Fan", mission: "Busca a un Potterhead. ¿De qué casa es (Gryffindor, Slytherin...)?" },
{ id: 198, shortText: "El Señor de los Anillos", mission: "Encuentra a alguien que haya visto las versiones extendidas." },
{ id: 199, shortText: "Anime Shonen", mission: "Busca a un fan de Dragon Ball, Naruto o One Piece." },
{ id: 200, shortText: "Anime Seinen", mission: "Encuentra a alguien que vea animes más 'serios' (Attack on Titan, Evangelion)." },
{ id: 201, shortText: "Lee Mangas", mission: "Busca a alguien que lea manga en vez de ver el anime." },
{ id: 202, shortText: "Cosplayer", mission: "Encuentra a alguien que haya hecho Cosplay alguna vez. ¿De qué?" },
{ id: 203, shortText: "Juega LoL", mission: "Busca a un jugador de League of Legends. ¿Qué línea va?" },
{ id: 204, shortText: "Juega Dota 2", mission: "Encuentra a un dotero. ¿Cuántas horas tiene en Steam?" },
{ id: 205, shortText: "Juega Valorant", mission: "Busca a alguien que juegue Valorant. ¿Tiene skins?" },
{ id: 206, shortText: "Juega FIFA/PES", mission: "Encuentra a alguien que juegue fútbol en consola. ¿Gana o pierde?" },
{ id: 207, shortText: "Minecraft", mission: "Busca a alguien que haya construido una casa en Minecraft." },
{ id: 208, shortText: "Juegos de Mesa", mission: "Encuentra a alguien que juegue Catan, Monopoly o D&D." },
{ id: 209, shortText: "Ajedrez", mission: "Busca a alguien que sepa jugar ajedrez. ¿Ha visto Gambito de Dama?" },
{ id: 210, shortText: "Cubo Rubik", mission: "Encuentra a alguien que sepa armar el cubo Rubik. ¿En cuánto tiempo?" },
{ id: 211, shortText: "Viaje a Cusco", mission: "Busca a alguien que haya ido a Machu Picchu. ¿Subió caminando?" },
{ id: 212, shortText: "Viaje a la Selva", mission: "Encuentra a alguien que conozca Iquitos o Tarapoto." },
{ id: 213, shortText: "Playa o Campo", mission: "Busca a alguien que prefiera el campo antes que la playa." },
{ id: 214, shortText: "Miedo a las alturas", mission: "Encuentra a alguien con vértigo." },
{ id: 215, shortText: "Miedo a las arañas", mission: "Busca a alguien aracnofóbico." },
{ id: 216, shortText: "Sabe manejar", mission: "Encuentra a alguien que tenga brevete. ¿Maneja bien?" },
{ id: 217, shortText: "No sabe nadar", mission: "Busca a alguien que no sepa nadar. ¡Nunca es tarde!" },
{ id: 218, shortText: "Zurdo", mission: "Encuentra a alguien zurdo. (Repetido pero vale la pena confirmar)." },
{ id: 219, shortText: "Usa Lentes de Contacto", mission: "Busca a alguien que use lentes de contacto en vez de gafas." },
{ id: 220, shortText: "Tatuajes Ocultos", mission: "Encuentra a alguien que tenga un tatuaje que no se vea a simple vista." },
{ id: 221, shortText: "Piercing", mission: "Busca a alguien con piercings." },
{ id: 222, shortText: "Pelo Pintado", mission: "Encuentra a alguien con el cabello de color (azul, rojo, rubio...)." },
{ id: 223, shortText: "Hermanos Gemelos", mission: "¡Difícil! Busca a alguien que tenga un gemelo o mellizo." },
{ id: 224, shortText: "Hijo Único", mission: "Encuentra a alguien que no tenga hermanos." },
{ id: 225, shortText: "Familia Numerosa", mission: "Busca a alguien que tenga más de 3 hermanos." },
{ id: 226, shortText: "Nombre Raro", mission: "Encuentra a alguien con un nombre poco común. ¿Le gusta?" },
{ id: 227, shortText: "Cumple en Navidad", mission: "Busca a alguien de Diciembre. (El regalo doble)." },
{ id: 228, shortText: "Cumple en Año Bisiesto", mission: "¡Imposible! Alguien que cumpla el 29 de febrero." },
{ id: 229, shortText: "Signo de Agua", mission: "Busca a un Cáncer, Escorpio o Piscis." },
{ id: 230, shortText: "Signo de Fuego", mission: "Encuentra a un Aries, Leo o Sagitario." },
];

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get 25 random missions from the available
 * Uses localStorage to persist the selection
 */
export function getRandomBingoMissions(): BingoMission[] {
  const STORAGE_KEY = "bingo_selected_missions";

  // Check if we already have a selection in localStorage
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Validate that we have exactly 25 missions
        if (Array.isArray(parsed) && parsed.length === 25) {
          return parsed;
        }
      } catch (err) {
        console.error("Error parsing stored missions:", err);
      }
    }

    // If no valid stored selection, create a new one
    const shuffled = shuffleArray(bingoMissions);
    const selected = shuffled.slice(0, 25);

    // Store the selection
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    return selected;
  }

  // Fallback for SSR
  return bingoMissions.slice(0, 25);
}

/**
 * Clear the stored mission selection (for testing or reset)
 */
export function resetBingoMissions(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("bingo_selected_missions");
  }
}
