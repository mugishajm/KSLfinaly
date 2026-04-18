import {
  Camera,
  MessageSquare,
  Volume2,
  Type,
  Database,
  BarChart3,
  Globe,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const baseFeatures = [
  { key: "realtimeCapture", icon: Camera, color: "primary" },
  { key: "kslToText", icon: MessageSquare, color: "secondary" },
  { key: "kslToSpeech", icon: Volume2, color: "accent" },
  { key: "textToKsl", icon: Type, color: "primary" },
  { key: "gestureDb", icon: Database, color: "secondary" },
  { key: "analytics", icon: BarChart3, color: "accent" },
  { key: "auth", icon: Shield, color: "secondary" },
  { key: "multiLang", icon: Globe, color: "primary" },
] as const;

const featureContent = {
  realtimeCapture: {
    title: {
      kinyarwanda: "Ifatwa ry'Ibimenyetso mu Kayanya",
      english: "Real-Time Gesture Capture",
      french: "Capture de gestes en temps réel",
    },
    description: {
      kinyarwanda:
        "Koresha kamera yawe cyangwa telefoni kugira ngo ufate imiterere y'intoki n'umubiri ukora ibimenyetso bya KSL mu gihe nyacyo.",
      english:
        "Uses your webcam or smartphone camera to capture hand and body movements performing KSL gestures in real time.",
      french:
        "Utilise votre webcam ou smartphone pour capturer en temps réel les mouvements des mains et du corps effectuant les gestes KSL.",
    },
  },
  kslToText: {
    title: {
      kinyarwanda: "Guhindura KSL mu Magambo",
      english: "KSL-to-Text Translation",
      french: "Traduction KSL vers texte",
    },
    description: {
      kinyarwanda:
        "Ihindura ibimenyetso bya Kinyarwanda Sign Language mu magambo yanditse mu Kinyarwanda cyangwa Icyongereza.",
      english:
        "Converts detected Kinyarwanda Sign Language gestures into readable Kinyarwanda or English text on the screen.",
      french:
        "Convertit les gestes de la langue des signes kinyarwanda en texte lisible en kinyarwanda ou en anglais à l'écran.",
    },
  },
  kslToSpeech: {
    title: {
      kinyarwanda: "Guhindura KSL mu Majwi",
      english: "KSL-to-Speech Translation",
      french: "Traduction KSL vers voix",
    },
    description: {
      kinyarwanda:
        "Ihindura amagambo yasobanuwe akavamo ijwi, bigafasha abumva kumva ubutumwa bwasizwe.",
      english:
        "Transforms translated text into spoken audio, enabling hearing individuals to understand signed messages.",
      french:
        "Transforme le texte traduit en audio parlé, permettant aux entendants de comprendre les messages signés.",
    },
  },
  textToKsl: {
    title: {
      kinyarwanda: "Amagambo ajya muri KSL",
      english: "Text-to-KSL Translation",
      french: "Traduction texte vers KSL",
    },
    description: {
      kinyarwanda:
        "Andika amagambo mu Kinyarwanda cyangwa Icyongereza maze urebe uko ahinduka ibimenyetso bya KSL.",
      english:
        "Input text in Kinyarwanda or English and see it translated into corresponding KSL gestures as animations.",
      french:
        "Saisissez du texte en kinyarwanda ou en anglais et voyez-le traduit en gestes KSL correspondants sous forme d'animations.",
    },
  },
  gestureDb: {
    title: {
      kinyarwanda: "Igereranya ry'Ibimenyetso",
      english: "Gesture Database",
      french: "Base de données de gestes",
    },
    description: {
      kinyarwanda:
        "Isanduku nini y'ibimenyetso bya KSL n'amashusho, amashusho agendanwa, inyito n'igisobanuro cyabyo.",
      english:
        "Comprehensive library of KSL gestures including images, videos, labels, and meanings for accurate recognition.",
      french:
        "Bibliothèque complète de gestes KSL incluant images, vidéos, étiquettes et significations pour une reconnaissance précise.",
    },
  },
  analytics: {
    title: {
      kinyarwanda: "Isesengura ry'Imikorere",
      english: "Performance Analytics",
      french: "Analytique de performance",
    },
    description: {
      kinyarwanda:
        "Kurikira ukuri kw'isobanura, umuvuduko n'imikoreshereze kugira ngo umenye uko sisitemu ikora.",
      english:
        "Track recognition accuracy, response time, and usage statistics to monitor system effectiveness.",
      french:
        "Suivez la précision de reconnaissance, le temps de réponse et les statistiques d'utilisation pour mesurer l'efficacité du système.",
    },
  },
  auth: {
    title: {
      kinyarwanda: "Kwizera Konti",
      english: "Secure Authentication",
      french: "Authentification sécurisée",
    },
    description: {
      kinyarwanda:
        "Kwiyandikisha no kwinjira mu buryo bwizewe bigufasha kugira ubwirinzi n'uburyo bwihariye bwo gukoresha sisitemu.",
      english:
        "User authentication ensures privacy and enables personalized system usage for students and interpreters.",
      french:
        "L'authentification des utilisateurs garantit la confidentialité et permet une utilisation personnalisée pour les étudiants et interprètes.",
    },
  },
  multiLang: {
    title: {
      kinyarwanda: "Inkunga y'Indimi nyinshi",
      english: "Multi-Language Support",
      french: "Support multilingue",
    },
    description: {
      kinyarwanda:
        "Hitamo hagati y'Ikinyarwanda, Icyongereza n'Igifaransa mu magambo n'amajwi asohoka.",
      english:
        "Choose between Kinyarwanda and English for translated text and speech output.",
      french:
        "Choisissez entre kinyarwanda et anglais pour le texte traduit et la sortie vocale.",
    },
  },
} as const;

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        bg: "bg-primary/10",
        icon: "text-primary",
        border: "hover:border-primary/30",
      };
    case "secondary":
      return {
        bg: "bg-secondary/30",
        icon: "text-ksl-yellow",
        border: "hover:border-secondary/50",
      };
    case "accent":
      return {
        bg: "bg-accent/10",
        icon: "text-accent",
        border: "hover:border-accent/30",
      };
    default:
      return {
        bg: "bg-primary/10",
        icon: "text-primary",
        border: "hover:border-primary/30",
      };
  }
};

const FeaturesSection = () => {
  const { language } = useLanguage();
  return (
    <section id="features" className="bg-slate-50 dark:bg-background py-16 md:py-24 font-sans text-foreground">
      <div className="w-full mx-auto px-4 z-10 relative">
        
        {/* Main Rounded Container */}
        <div className="bg-white dark:bg-[#111] mx-auto max-w-[1200px] rounded-[3rem] p-6 lg:p-16 pt-16 lg:pt-24 pb-8 lg:pb-16 border-none relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ksl-yellow text-slate-900 font-bold text-[13px] mb-8 tracking-tight">
              {language === "kinyarwanda" ? "Ibiranga" : language === "french" ? "Fonctionnalités" : "Features"}
            </div>
            
            <h2 style={{ letterSpacing: "-0.04em" }} className="text-[50px] md:text-[75px] font-bold leading-[0.95] lowercase mb-8 text-foreground transition-colors border-none">
              {language === "kinyarwanda"
                ? "ibikoresho byiza,"
                : language === "french"
                  ? "outils puissants,"
                  : "powerful tools,"} <br className="hidden md:block"/>
              <span className="text-ksl-blue">
                {language === "kinyarwanda"
                  ? "itumanaho ryoroshye"
                  : language === "french"
                    ? "communication facile"
                    : "seamless talk"}
              </span>
            </h2>
            
            <p className="text-[18px] md:text-[20px] text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto tracking-tight border-none">
              {language === "kinyarwanda"
                ? "Urubuga rukoreshwa n'ubwenge bw'ikoranabuhanga rutanga ibikoresho byuzuye byo guhindura ururimi rw'ibimenyetso."
                : language === "french"
                  ? "Notre plateforme IA fournit des outils complets pour traduire la langue des signes."
                  : "Our AI-powered platform provides comprehensive tools for translating sign language."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[18px] relative z-10">
            {baseFeatures.map((feature, index) => {
              // Assign solid premium brand colors to cards
              const bgClass = index % 4 === 0 ? "bg-ksl-dark text-white" : 
                              index % 4 === 1 ? "bg-ksl-blue text-white" : 
                              index % 4 === 2 ? "bg-ksl-yellow text-slate-900" : 
                              "bg-[#0a0a0a] text-white";
              
              const iconBgClass = index % 4 === 2 ? "bg-black/10" : "bg-white/10";
              const iconColorClass = index % 4 === 2 ? "text-slate-900" : "text-white";
              const content = featureContent[feature.key];

              return (
                <div key={index} className={`${bgClass} rounded-[24px] p-8 transition-transform hover:-translate-y-2 flex flex-col items-start relative overflow-hidden group border-none`}>
                  
                  <div className={`w-14 h-14 rounded-full ${iconBgClass} flex items-center justify-center mb-10 transition-colors`}>
                    <feature.icon className={`w-6 h-6 ${iconColorClass}`} />
                  </div>

                  <div className="mt-auto relative z-10">
                    <h3 className="text-[20px] font-bold mb-3 tracking-tight leading-[1.1]">
                      {content.title[language]}
                    </h3>
                    <p className={`font-semibold opacity-80 leading-snug text-[14px] tracking-tight ${index % 4 === 2 ? 'text-slate-800' : 'text-gray-300'}`}>
                      {content.description[language]}
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

export default FeaturesSection;
