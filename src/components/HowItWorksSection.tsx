import { Camera, Cpu, FileText, Volume2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  {
    number: "01",
    icon: Camera,
    key: "capture",
  },
  {
    number: "02",
    icon: Cpu,
    key: "recognition",
  },
  {
    number: "03",
    icon: FileText,
    key: "translation",
  },
  {
    number: "04",
    icon: Volume2,
    key: "voice",
  },
] as const;

const stepContent = {
  capture: {
    title: {
      kinyarwanda: "Fata Ikimenyetso",
      english: "Capture Gesture",
      french: "Capturer le geste",
    },
    description: {
      kinyarwanda:
        "Shyira kamera imbere. Sisitemu ibona intoki n'imiterere y'umubiri mu gihe nyacyo.",
      english:
        "Point your camera. Our system detects hands, fingers, and body posture in real-time.",
      french:
        "Pointez votre caméra. Le système détecte en temps réel les mains et la posture.",
    },
  },
  recognition: {
    title: {
      kinyarwanda: "Kumenya",
      english: "AI Recognition",
      french: "Reconnaissance",
    },
    description: {
      kinyarwanda:
        "Modeli z'ikoranabuhanga zisuzuma imyitwarire zikayigereranya n'ibimenyetso.",
      english:
        "Advanced AI models analyze captures and match them with trained gestures.",
      french:
        "Des modèles d'IA analysent les mouvements et les comparent aux gestes entraînés.",
    },
  },
  translation: {
    title: {
      kinyarwanda: "Guhindura",
      english: "Translation",
      french: "Traduction",
    },
    description: {
      kinyarwanda:
        "Ikimenyetso gihindurwa ako kanya mu magambo asomeka.",
      english:
        "The gesture is instantly translated into highly readable text output.",
      french:
        "Le geste reconnu est immédiatement traduit en texte clair.",
    },
  },
  voice: {
    title: {
      kinyarwanda: "Ijwi",
      english: "Voice Output",
      french: "Sortie vocale",
    },
    description: {
      kinyarwanda:
        "Gana amagambo yasobanuwe akavamo ijwi ryiza rya kinyarwanda.",
      english:
        "Convert the translated text into natural speech for seamless talk.",
      french:
        "Convertissez le texte traduit en voix naturelle et fluide.",
    },
  },
} as const;

const HowItWorksSection = () => {
  const { language } = useLanguage();
  return (
    <section id="how-it-works" className="bg-slate-50 dark:bg-background py-16 md:py-24 font-sans text-foreground">
      <div className="w-full mx-auto px-4 z-10 relative">
        
        {/* Main Rounded Container */}
        <div className="bg-white dark:bg-[#111] mx-auto max-w-[1200px] rounded-[3rem] p-6 lg:p-16 pt-16 lg:pt-24 pb-8 lg:pb-16 shadow-none border-none relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ksl-yellow text-slate-900 font-bold text-[13px] mb-8 tracking-tight">
              {language === "kinyarwanda"
                ? "Uko Bikora"
                : language === "french"
                  ? "Comment ça marche"
                  : "How It Works"}
            </div>
            
            <h2 style={{ letterSpacing: "-0.04em" }} className="text-[50px] md:text-[75px] font-bold leading-[0.95] lowercase mb-8 text-foreground transition-colors">
              {language === "kinyarwanda"
                ? "uburyo bworoshye,"
                : language === "french"
                  ? "un processus simple,"
                  : "simple process,"} <br className="hidden md:block"/>
              <span className="text-ksl-blue">
                {language === "kinyarwanda"
                  ? "ibisubizo byiza"
                  : language === "french"
                    ? "résultats puissants"
                    : "powerful results"}
              </span>
            </h2>
            
            <p className="text-[18px] md:text-[20px] text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto tracking-tight">
              {language === "kinyarwanda"
                ? "Sisitemu yacu ituma guhindura ururimi rw'ibimenyetso rigerwaho mu ntambwe nke gusa."
                : language === "french"
                  ? "Notre système rend la traduction en langue des signes accessible à tous en quelques étapes."
                  : "Our intuitive system makes sign language translation accessible to everyone in just a few simple steps."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px] relative z-10">
            {steps.map((step, index) => {
              // Assign solid premium brand colors to cards
              const bgClass = index === 0 ? "bg-ksl-dark text-white" : 
                              index === 1 ? "bg-ksl-blue text-white" : 
                              index === 2 ? "bg-ksl-yellow text-slate-900" : 
                              "bg-[#0a0a0a] text-white";
              
              const iconBgClass = index === 2 ? "bg-black/10" : "bg-white/10";
              const iconColorClass = index === 2 ? "text-slate-900" : "text-white";

              return (
                <div key={step.number} className={`${bgClass} rounded-[24px] p-8 shadow-none transition-transform hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group border-none`}>
                  
                  {/* Huge Number Watermark Background */}
                  <span className="absolute -right-4 -top-8 text-[140px] font-black opacity-5 tracking-tighter leading-none group-hover:scale-110 transition-transform pointer-events-none select-none">
                    {step.number}
                  </span>

                  <div className={`w-14 h-14 rounded-full ${iconBgClass} flex items-center justify-center mb-10 transition-colors`}>
                    <step.icon className={`w-6 h-6 ${iconColorClass}`} />
                  </div>

                  <div className="mt-auto relative z-10">
                    <p className="text-[12px] font-bold opacity-70 mb-2 tracking-widest uppercase">
                      {language === "kinyarwanda" ? "Intambwe" : language === "french" ? "Étape" : "Step"} {step.number}
                    </p>
                    <h3 className="text-[24px] font-bold mb-3 tracking-tight leading-[1.1]">
                      {stepContent[step.key].title[language]}
                    </h3>
                    <p className={`font-semibold opacity-80 leading-snug text-[15px] tracking-tight ${index === 2 ? 'text-slate-800' : 'text-gray-300'}`}>
                      {stepContent[step.key].description[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
