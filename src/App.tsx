import { useState } from "react";
import {
  BookOpen,
  Brain,
  Bug,
  CheckCircle2,
  Code2,
  Gift,
  Heart,
  Lightbulb,
  LockOpen,
  PartyPopper,
  Rocket,
  Sparkles,
  Stars,
  TerminalSquare,
  Trophy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";

const surpriseMessages = [
  "Angela, cada línea de código que escribas puede convertirse en una puerta nueva.",
  "Tu curiosidad ya es una ventaja real dentro de computer science.",
  "No necesitas saberlo todo hoy: solo seguir explorando con ganas.",
  "Tu creatividad también es una herramienta poderosa para programar.",
];

const tracks = [
  {
    title: "Explora",
    description: "Haz preguntas, rompe cosas pequeñas y disfruta descubrir cómo funcionan.",
    icon: Sparkles,
  },
  {
    title: "Construye",
    description: "Tus primeros proyectos no tienen que ser perfectos; tienen que ser tuyos.",
    icon: Code2,
  },
  {
    title: "Brilla",
    description: "Tu voz, tus ideas y tu estilo pueden dejar huella en este mundo.",
    icon: Rocket,
  },
];

const missions = [
  "Escribir tu primer 'Hola mundo' con orgullo.",
  "Guardar una idea loca para convertirla en proyecto.",
  "Celebrar cada bug resuelto como una victoria real.",
];

const powerProfiles = [
  {
    title: "Arquitecta creativa",
    description: "Conviertes ideas bonitas en experiencias que hacen sentir algo a otras personas.",
    motto: "Diseñar también es programar con intención.",
    command: "npm run crear-magia",
    icon: Sparkles,
    accent: "from-[#c794ff] to-fuchsia-300",
    badge: "Creatividad activa",
  },
  {
    title: "Cazadora de bugs",
    description: "Tienes paciencia para observar, entender y convertir errores en aprendizaje real.",
    motto: "Cada bug resuelto te hace más fuerte.",
    command: "debug --with-courage",
    icon: Bug,
    accent: "from-[#9fff94] to-emerald-300",
    badge: "Modo detective",
  },
  {
    title: "Exploradora lógica",
    description: "Sabes avanzar paso a paso y encontrar claridad incluso cuando algo parece difícil.",
    motto: "La lógica también puede ser elegante.",
    command: "solve --step-by-step",
    icon: Brain,
    accent: "from-sky-300 to-[#c794ff]",
    badge: "Pensamiento en expansión",
  },
];

const starterPack = [
  {
    title: "Curiosidad infinita",
    description: "La chispa que hace que siempre quieras entender un poquito más.",
    icon: Lightbulb,
  },
  {
    title: "Valentía para intentar",
    description: "La energía para empezar aunque todavía no tengas todas las respuestas.",
    icon: Rocket,
  },
  {
    title: "Paciencia para crecer",
    description: "El recordatorio de que aprender a programar también toma tiempo, y eso está bien.",
    icon: Heart,
  },
];

const pixelPet = [
  "000000000000",
  "000D0000D000",
  "00DDD00DDD00",
  "0DPPDDDDPPD0",
  "0DPPPPPPPPD0",
  "DPPWDPPDWPPD",
  "DPPPPPPPPPPD",
  "DPMPPDDPPMPD",
  "0DPPPPPPPPD0",
  "00DDPPPPDD00",
  "000DMMMMD000",
  "0000D00D0000",
];

const progressWidths = ["w-0", "w-1/3", "w-2/3", "w-full"];

export function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [selectedMission, setSelectedMission] = useState(0);
  const [selectedPower, setSelectedPower] = useState(0);
  const [unlockedTools, setUnlockedTools] = useState<number[]>([]);

  const currentMessage = surpriseMessages[messageIndex];
  const currentPower = (powerProfiles[selectedPower] ?? powerProfiles[0])!;
  const unlockedCount = unlockedTools.length;
  const allUnlocked = unlockedCount === starterPack.length;
  const PowerIcon = currentPower.icon;

  const toggleStarterPack = (index: number) => {
    setUnlockedTools((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index].sort((a, b) => a - b),
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-[8%] h-44 w-44 rounded-full bg-[#c794ff]/30 blur-3xl" />
        <div className="absolute right-[8%] top-[16%] h-56 w-56 rounded-full bg-[#9fff94]/30 blur-3xl" />
        <div className="absolute bottom-[8%] left-[18%] h-52 w-52 rounded-full bg-pink-300/20 blur-3xl" />
        <div className="absolute bottom-[12%] right-[14%] h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />

        {Array.from({ length: 18 }, (_, index) => (
          <span key={index} className={`floating-dot dot-${index + 1}`} />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Card className="overflow-hidden border-white/40 bg-white/70 shadow-[0_30px_80px_rgba(156,93,255,0.18)] backdrop-blur-xl">
          <CardContent className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <Gift className="size-4 text-[#a855f7]" />
                Un regalo interactivo de cumpleaños para Angela 💜
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl leading-tight font-black text-balance sm:text-5xl lg:text-6xl">
                  Feliz cumpleaños, Angela ✨
                  <span className="mt-2 block bg-gradient-to-r from-[#8d47d9] via-[#c794ff] to-[#59c96f] bg-clip-text text-transparent">
                    bienvenida al mundo de computer science
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                  Esta tarjeta es una pequeña aventura para recordarte que programar también puede sentirse bonito,
                  creativo, emocionante y muy tuyo.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 rounded-full bg-[#c794ff] px-7 text-base font-semibold text-slate-950 shadow-lg shadow-[#c794ff]/35 hover:bg-[#b97eff]"
                  onClick={() => setIsOpened((value) => !value)}
                >
                  <PartyPopper className="size-5" />
                  {isOpened ? "Cerrar sorpresa" : "Abrir sorpresa"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-[#9fff94]/70 bg-white/70 px-7 text-base font-semibold text-slate-800 hover:bg-[#9fff94]/20"
                  onClick={() => setMessageIndex((value) => (value + 1) % surpriseMessages.length)}
                >
                  <Stars className="size-5 text-[#59c96f]" />
                  Angela, dame otra pista
                </Button>
              </div>

              <div className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#8d47d9]">Mensaje sorpresa</p>
                <p className="text-lg font-medium text-slate-800">“{currentMessage}”</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#c794ff]/35 via-white/20 to-[#9fff94]/35 blur-2xl" />
              <Card className="relative border-white/50 bg-slate-950/90 text-white shadow-2xl">
                <CardHeader className="gap-3 border-b border-white/10 pb-5">
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                    <TerminalSquare className="size-6 text-[#9fff94]" />
                    Terminal de bienvenida
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Angela.exe está iniciando su aventura tech.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 font-mono text-sm sm:text-base">
                  <div className="space-y-2 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p>
                      <span className="text-[#9fff94]">$</span> {currentPower.command}
                    </p>
                    <p className="text-[#c794ff]">✔ superpoder detectado: {currentPower.title}</p>
                    <p className="text-[#9fff94]">✔ starter pack desbloqueado: {unlockedCount}/3</p>
                    <p className="text-slate-200">✔ potencial brillante en progreso...</p>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-[#c794ff]/20 to-[#9fff94]/20 p-4 ring-1 ring-white/10">
                    <p className="text-slate-100">const nombre = "Angela";</p>
                    <p className="text-slate-300">while (curiosidad) {'{'} crecer(); {'}'}</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 text-xs uppercase tracking-[0.28em] text-white/55">Estado actual</p>
                    <p className="text-base text-white">{currentPower.motto}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-white/40 bg-white/65 backdrop-blur-xl">
            <CardHeader className="gap-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <PowerIcon className="size-6 text-[#8d47d9]" />
                Elige el superpoder tech de Angela
              </CardTitle>
              <CardDescription className="text-base text-slate-600">
                Toca una opción y mira cómo cambia su energía de inicio.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3 md:grid-cols-3">
                {powerProfiles.map((profile, index) => {
                  const Icon = profile.icon;
                  const isActive = index === selectedPower;

                  return (
                    <button
                      key={profile.title}
                      type="button"
                      onClick={() => setSelectedPower(index)}
                      className={`rounded-3xl border p-4 text-left transition-all duration-300 ${isActive
                        ? "border-[#c794ff] bg-[#c794ff]/12 shadow-lg shadow-[#c794ff]/15"
                        : "border-white/70 bg-white/75 hover:-translate-y-1 hover:border-[#9fff94] hover:bg-[#9fff94]/10"
                        }`}
                    >
                      <div
                        className={`mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${profile.accent} text-slate-950 shadow-md`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-slate-900">{profile.title}</h3>
                      <p className="text-sm leading-6 text-slate-600">{profile.description}</p>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-white/70 bg-gradient-to-r from-white to-white/70 p-5 shadow-sm">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                  <Stars className="size-4 text-[#9fff94]" />
                  {currentPower.badge}
                </div>
                <p className="text-lg font-semibold text-slate-900">{currentPower.motto}</p>
                <p className="mt-2 leading-7 text-slate-600">{currentPower.description}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/40 bg-white/65 backdrop-blur-xl">
            <CardHeader className="gap-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <LockOpen className="size-6 text-[#59c96f]" />
                Starter pack interactivo
              </CardTitle>
              <CardDescription className="text-base text-slate-600">
                Desbloquea las 3 piezas esenciales del viaje de Angela.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                  <span>Progreso desbloqueado</span>
                  <span>{unlockedCount}/3</span>
                </div>
                <div className="h-3 rounded-full bg-slate-200/80">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r from-[#c794ff] to-[#9fff94] transition-all duration-500 ${progressWidths[unlockedCount]}`}
                  />
                </div>
              </div>

              <div className="space-y-3">
                {starterPack.map((item, index) => {
                  const Icon = item.icon;
                  const isUnlocked = unlockedTools.includes(index);

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => toggleStarterPack(index)}
                      className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${isUnlocked
                        ? "border-[#9fff94] bg-[#9fff94]/15 shadow-lg shadow-[#9fff94]/10"
                        : "border-white/70 bg-white/70 hover:border-[#c794ff] hover:bg-[#c794ff]/10"
                        }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl ${isUnlocked ? "bg-[#9fff94] text-slate-950" : "bg-slate-200 text-slate-700"
                            }`}
                        >
                          {isUnlocked ? <CheckCircle2 className="size-5" /> : <Icon className="size-5" />}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-dashed border-[#c794ff]/40 bg-white/60 p-4 text-sm leading-6 text-slate-700">
                {allUnlocked ? (
                  <span>
                    <strong>Bonus desbloqueado:</strong> Angela ya tiene su kit inicial completo. El próximo commit ya
                    viene con confianza incluida.
                  </span>
                ) : (
                  <span>Desbloquea todo el pack para activar el bonus especial de bienvenida.</span>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="border-white/40 bg-white/65 backdrop-blur-xl">
            <CardHeader className="gap-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <Rocket className="size-6 text-[#8d47d9]" />
                El mapa de Angela para empezar
              </CardTitle>
              <CardDescription className="text-base text-slate-600">
                No hace falta correr. Solo avanzar con ilusión y celebrar cada paso.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {tracks.map((track) => {
                const Icon = track.icon;

                return (
                  <div
                    key={track.title}
                    className="group rounded-3xl border border-white/70 bg-gradient-to-br from-white to-white/50 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c794ff] to-[#9fff94] text-slate-950 shadow-md">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{track.title}</h3>
                    <p className="leading-7 text-slate-600">{track.description}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-white/40 bg-white/65 backdrop-blur-xl">
            <CardHeader className="gap-3">
              <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <BookOpen className="size-6 text-[#59c96f]" />
                Tu primera misión, Angela
              </CardTitle>
              <CardDescription className="text-base text-slate-600">
                Elige una misión y conviértela en tu primer mini logro tech.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {missions.map((mission, index) => {
                const active = selectedMission === index;

                return (
                  <button
                    key={mission}
                    type="button"
                    onClick={() => setSelectedMission(index)}
                    className={`w-full rounded-2xl border p-4 text-left transition-all duration-300 ${active
                      ? "border-[#c794ff] bg-[#c794ff]/15 shadow-lg shadow-[#c794ff]/15"
                      : "border-white/70 bg-white/70 hover:border-[#9fff94] hover:bg-[#9fff94]/10"
                      }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${active ? "bg-[#9fff94] text-slate-900" : "bg-slate-200 text-slate-700"
                          }`}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{mission}</p>
                        <p className="mt-1 text-sm text-slate-600">
                          {active
                            ? `Elegida. Combina perfecto con tu modo ${currentPower.title.toLowerCase()}.`
                            : "Tócala para activarla."}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>
        </div>

      </div>

      {isOpened && (
        <div className="birthday-modal-backdrop" onClick={() => setIsOpened(false)}>
          <div className="birthday-modal-panel" onClick={(event) => event.stopPropagation()}>
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div className="flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-white/15 bg-white/8 px-6 py-8 text-center">
                <div className="pixel-pet-wrapper">
                  <div className="pixel-grid" aria-hidden="true">
                    {pixelPet.flatMap((row, rowIndex) =>
                      row.split("").map((cell, cellIndex) => (
                        <span
                          key={`${rowIndex}-${cellIndex}`}
                          className={`pixel-cell ${cell === "0" ? "pixel-empty" : `pixel-${cell.toLowerCase()}`}`}
                        />
                      )),
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#9fff94]">animal 8-bit</p>
                  <p className="mt-2 text-lg font-bold text-white">Gatita guardiana de Angela</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Lista para acompañarla entre commits, ideas nuevas y bugs derrotados.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15">
                  <Heart className="size-4 text-pink-300" />
                  Mensaje especial para Angela
                </div>

                <div className="space-y-3">
                  <h2 className="text-3xl font-black text-balance text-white sm:text-4xl">
                    Feliz cumpleaños, Angela 🎂
                  </h2>
                  <p className="text-lg leading-8 text-white/80">
                    Que este nuevo año venga con un inicio victorioso en la programación, mucha curiosidad, paciencia
                    para aprender y momentos en los que descubras todo lo increíble que puedes construir.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                    <Sparkles className="mb-3 size-6 text-[#c794ff]" />
                    <h3 className="mb-1 text-lg font-bold text-white">Curiosidad</h3>
                    <p className="text-sm leading-6 text-white/75">Que nunca se apague tu ganas de explorar.</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                    <Code2 className="mb-3 size-6 text-[#9fff94]" />
                    <h3 className="mb-1 text-lg font-bold text-white">Valentía</h3>
                    <p className="text-sm leading-6 text-white/75">Que te animes a crear incluso sin saberlo todo.</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                    <Stars className="mb-3 size-6 text-yellow-300" />
                    <h3 className="mb-1 text-lg font-bold text-white">Brillo propio</h3>
                    <p className="text-sm leading-6 text-white/75">Que tu estilo deje huella en cada proyecto.</p>
                  </div>
                </div>

                {allUnlocked && (
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4">
                    <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#9fff94]">
                      <Trophy className="size-4" />
                      Bonus secreto desbloqueado
                    </p>
                    <p className="text-white/85">
                      Angela ya desbloqueó curiosidad, valentía y paciencia. Su viaje en programación arrancó con gran
                      energía.
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="h-12 rounded-full bg-[#c794ff] px-7 text-base font-semibold text-slate-950 hover:bg-[#b97eff]"
                    onClick={() => setIsOpened(false)}
                  >
                    Seguir explorando
                  </Button>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-3 text-sm font-medium text-white/75">
                    <PartyPopper className="size-4 text-[#9fff94]" />
                    Feliz cumple y victorioso inicio en programación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
