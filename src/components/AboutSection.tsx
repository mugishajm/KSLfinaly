import { Heart, Users, Target, Lightbulb } from "lucide-react";
import kslLogo from "@/assets/ksl-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const values = [
  {
    icon: Heart,
    key: "accessibility",
  },
  {
    icon: Users,
    key: "community",
  },
  {
    icon: Target,
    key: "accuracy",
  },
  {
    icon: Lightbulb,
    key: "innovation",
  },
] as const;

const valueContent = {
  accessibility: {
    title: {
      kinyarwanda: "Kubanza Uburenganzira",
      english: "Accessibility First",
      french: "Accessibilité d'abord",
    },
    description: {
      kinyarwanda: "Gusenya inzitizi z'itumanaho ku muryango w'abafite ubumuga bwo kutumva no kutavuga mu Rwanda.",
      english: "Breaking communication barriers for the deaf community in Rwanda.",
      french: "Briser les barrières de communication pour la communauté sourde au Rwanda.",
    },
  },
  community: {
    title: {
      kinyarwanda: "Gushingira ku Muryango",
      english: "Community Driven",
      french: "Porté par la communauté",
    },
    description: {
      kinyarwanda:
        "Yubatswe ifatanyije n'umuryango w'abafite ubumuga bwo kutumva no kutavuga n'inzobere mu rurimi rw'ibimenyetso.",
      english: "Built with input from the deaf community and sign language experts.",
      french:
        "Construit avec la contribution de la communauté sourde et des experts en langue des signes.",
    },
  },
  accuracy: {
    title: {
      kinyarwanda: "Gushimangira Ukuri",
      english: "Accuracy Focused",
      french: "Centré sur la précision",
    },
    description: {
      kinyarwanda:
        "Guhora tunoza modeli z'ubwenge bw'ikoranabuhanga kugira ngo tumenye ibimenyetso neza.",
      english: "Continuously improving AI models for precise gesture recognition.",
      french: "Amélioration continue des modèles d'IA pour une reconnaissance précise des gestes.",
    },
  },
  innovation: {
    title: {
      kinyarwanda: "Ireme ry'Iterambere",
      english: "Innovation",
      french: "Innovation",
    },
    description: {
      kinyarwanda:
        "Gukoresha ikoranabuhanga rigezweho mu kubungabunga no guteza imbere Kinyarwanda Sign Language.",
      english: "Leveraging cutting-edge AI to preserve and promote KSL.",
      french: "Exploiter une IA de pointe pour préserver et promouvoir la langue des signes KSL.",
    },
  },
} as const;

const AboutSection = () => {
  const { language } = useLanguage();
  return (
    <section id="about" className="bg-slate-50 dark:bg-background py-16 md:py-24 font-sans text-foreground">
      <div className="w-full mx-auto px-4 z-10 relative">
        
        {/* Main Rounded Container */}
        <div className="bg-white dark:bg-[#111] mx-auto max-w-[1200px] rounded-[3rem] p-6 lg:p-16 pt-16 lg:pt-24 pb-16 lg:pb-24 border-none relative overflow-hidden shadow-none">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content Area */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ksl-yellow text-slate-900 font-bold text-[13px] mb-8 tracking-tight">
                {language === "kinyarwanda"
                  ? "Ibyerekeye KSL"
                  : language === "french"
                    ? "À propos de KSL"
                    : "About KSL"}
              </div>
              
              <h2 style={{ letterSpacing: "-0.04em" }} className="text-[50px] md:text-[75px] font-bold leading-[0.95] lowercase mb-8 text-foreground transition-colors border-none">
                {language === "kinyarwanda"
                  ? "gutanga imbaraga,"
                  : language === "french"
                    ? "renforcer,"
                    : "empowering,"} <br className="hidden md:block"/>
                <span className="text-ksl-blue">
                  {language === "kinyarwanda"
                    ? "itumanaho rya bose"
                    : language === "french"
                      ? "la communication"
                      : "communication"}
                </span>
              </h2>
              
              <p className="text-[18px] md:text-[20px] text-muted-foreground font-medium leading-relaxed mb-6 tracking-tight border-none">
                {language === "kinyarwanda"
                  ? "KSL ni urubuga rukoreshwa n'ubwenge bw'ikoranabuhanga rugamije gusenya icyuho cy'itumanaho."
                  : language === "french"
                    ? "KSL est une plateforme IA dédiée à combler le fossé de communication au Rwanda."
                    : "KSL is an AI-powered platform dedicated to bridging the communication gap in Rwanda."}
              </p>

              <div className="grid sm:grid-cols-2 gap-[14px]">
                {values.map((value, index) => {
                  const iconColor = index % 2 === 0 ? "text-ksl-blue" : "text-ksl-dark";
                  const bgColor = index % 2 === 0 ? "bg-ksl-blue/10" : "bg-ksl-dark/10";
                  
                  return (
                    <div
                      key={value.key}
                      className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-slate-50 dark:bg-[#0a0a0a] border-none shadow-none"
                    >
                      <div className={`w-12 h-12 rounded-[1rem] flex items-center justify-center shrink-0 ${bgColor}`}>
                        <value.icon className={`w-5 h-5 ${iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[16px] mb-1.5 tracking-tight text-foreground">
                          {valueContent[value.key].title[language]}
                        </h4>
                        <p className="text-[13px] text-muted-foreground font-medium leading-relaxed tracking-tight">
                          {valueContent[value.key].description[language]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Visual/Bento Stats Area */}
            <div className="relative flex flex-col gap-[18px] min-h-[400px]">
              
              {/* Massive Branding Bento Card */}
              <div className="w-full aspect-square rounded-[2rem] bg-[#0a0a0a] border-none p-12 flex items-center justify-center relative overflow-hidden shadow-none group">
                <div className="absolute inset-0 bg-ksl-blue/5 group-hover:bg-ksl-blue/10 transition-colors" />
                <img
                  src={kslLogo}
                  alt="KSL Logo"
                  className="w-full max-w-[200px] object-contain drop-shadow-2xl z-10 transition-transform group-hover:scale-105 duration-500"
                />
              </div>

              {/* Stats Bento Grid Row */}
              <div className="grid grid-cols-2 gap-[18px]">
                <div className="bg-ksl-blue rounded-[2rem] p-8 border-none flex flex-col justify-center shadow-none text-white hover:-translate-y-1 transition-transform">
                  <p style={{ letterSpacing: "-0.04em" }} className="text-[40px] md:text-[50px] font-bold leading-none mb-2">
                    500K<span className="text-ksl-yellow">+</span>
                  </p>
                  <p className="text-[14px] font-bold opacity-80 tracking-tight">
                    {language === "kinyarwanda" ? "Abatumva mu Rwanda" : language === "french" ? "Communauté sourde" : "Deaf community"}
                  </p>
                </div>
                
                <div className="bg-ksl-yellow rounded-[2rem] p-8 border-none flex flex-col justify-center shadow-none text-slate-900 hover:-translate-y-1 transition-transform">
                  <p style={{ letterSpacing: "-0.04em" }} className="text-[40px] md:text-[50px] font-bold leading-none mb-2">
                    1st
                  </p>
                  <p className="text-[14px] font-bold opacity-80 tracking-tight">
                    {language === "kinyarwanda" ? "Umuhinduzi w'AI wa KSL" : language === "french" ? "Interprète IA KSL" : "AI KSL Interpreter"}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
