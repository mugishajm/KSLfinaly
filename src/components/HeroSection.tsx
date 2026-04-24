import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { Play, Check, Plus } from "lucide-react";
import heroImg1 from "C:/Users/lenovo/.gemini/antigravity/brain/6b7eefe3-d7af-4698-bd49-e6fc0e5e8909/marketing_hero_1777047467594.png";
import heroImg2 from "C:/Users/lenovo/.gemini/antigravity/brain/6b7eefe3-d7af-4698-bd49-e6fc0e5e8909/marketing_about_1777047493841.png";
import heroImg3 from "C:/Users/lenovo/.gemini/antigravity/brain/6b7eefe3-d7af-4698-bd49-e6fc0e5e8909/marketing_demo_1777047520057.png";
import kslLogo from "@/assets/ksl-logo.png";

const languageContent: Record<
  Language,
  {
    headlinePrefix: string;
    headlineHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bentoCard1: {
      title: string;
      date: string;
      row1Left: string;
      row1Right: string;
      row2Left: string;
      row2Right: string;
      btn: string;
    };
    bentoCard3: string;
    bentoCard4: {
      header: string;
      sub: string;
      stat1Title: string;
      stat1Desc: string;
      stat2Title: string;
      stat2Desc: string;
    };
    bentoCard5: string;
    watchDemo: string;
  }
> = {
  kinyarwanda: {
    headlinePrefix: "dusimbuka inzitizi",
    headlineHighlight: "n'ikimenyetso", 
    description: "Igenzura ry'imiterere y'intoki mu gihe nyacyo no guhindura hagati y'Ururimi rw'ibimenyetso n'Ikinyarwanda. Guhuza abafite ubumuga bwo kutumva n'abumva.",
    ctaPrimary: "Tangira Guhindura",
    ctaSecondary: "koresha kubuntu",
    bentoCard1: {
      title: "Guhindura",
      date: "Mu gihe nyacyo",
      row1Left: "👋",
      row1Right: "Muraho",
      row2Left: "🙏",
      row2Right: "Murakoze",
      btn: "Andi magambo..."
    },
    bentoCard3: "Guhuza <br/> abantu <br/> bose",
    bentoCard4: {
      header: "Imiterere",
      sub: "Isuzuma nyacyo",
      stat1Title: "Kuri 96%",
      stat1Desc: "Yizewe cyane",
      stat2Title: "Vuba (<1s)",
      stat2Desc: "Nta gutinda",
    },
    bentoCard5: "Sobanukirwa <br/> ibimenyetso <br/> ako kanya",
    watchDemo: "Reba uko bikora"
  },
  english: {
    headlinePrefix: "breaking barriers",
    headlineHighlight: "with sign language",
    description: "Real-time gesture recognition and translation between Kinyarwanda Sign Language and spoken/written Kinyarwanda. Empowering communities to connect.",
    ctaPrimary: "Start Translating",
    ctaSecondary: "free for personal use",
    bentoCard1: {
      title: "Live Translation",
      date: "Real-time accuracy",
      row1Left: "👋",
      row1Right: "Hello (Muraho)",
      row2Left: "🙏",
      row2Right: "Thanks (Murakoze)",
      btn: "More phrases..."
    },
    bentoCard3: "Empowering <br/> seamless <br/> connection",
    bentoCard4: {
      header: "System Status",
      sub: "Live accuracy metrics",
      stat1Title: "96% Accuracy",
      stat1Desc: "High Precision",
      stat2Title: "<1s Latency",
      stat2Desc: "Instant Translation",
    },
    bentoCard5: "Understand <br/> sign language <br/> instantly",
    watchDemo: "Watch how it works"
  },
  french: {
    headlinePrefix: "briser les barrières",
    headlineHighlight: "avec les signes",
    description: "Reconnaissance et traduction des gestes en temps réel. Renforcer les liens entre les communautés sourdes et entendantes rwandaises.",
    ctaPrimary: "Commencer",
    ctaSecondary: "gratuit pour tous",
    bentoCard1: {
      title: "Traduction en direct",
      date: "Temps réel",
      row1Left: "👋",
      row1Right: "Bonjour (Muraho)",
      row2Left: "🙏",
      row2Right: "Merci (Murakoze)",
      btn: "Plus de phrases..."
    },
    bentoCard3: "Une <br/> connexion <br/> fluide",
    bentoCard4: {
      header: "État du système",
      sub: "Précision en direct",
      stat1Title: "Précision 96%",
      stat1Desc: "Haute précision",
      stat2Title: "Latence <1s",
      stat2Desc: "Traduction instantanée",
    },
    bentoCard5: "Comprenez <br/> les signes <br/> instantanément",
    watchDemo: "Voir la démo"
  },
};

const HeroSection = () => {
  const { language } = useLanguage();
  const content = languageContent[language];

  return (
    <section id="home" className="relative min-h-screen pt-36 lg:pt-40 pb-20 font-sans overflow-hidden border-none text-foreground z-0">
      
      {/* Background Video Wrapper (From Header down to middle) */}
      <div className="absolute top-0 left-0 w-full h-[70vh] -z-10 overflow-hidden bg-slate-100 dark:bg-slate-900 border-none">
        <iframe 
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[70vh] min-w-[177.7vh] -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-40 pointer-events-none"
          src="https://www.youtube.com/embed/U6fC4Ij608A?autoplay=1&mute=1&loop=1&playlist=U6fC4Ij608A&controls=0&showinfo=0&rel=0&modestbranding=1" 
          allow="autoplay; encrypted-media" 
          style={{ border: 0 }}
        ></iframe>
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-black/50 pointer-events-none mix-blend-overlay"></div>
        {/* Bottom Gradient Overlay to fade smoothly horizontally */}
        <div className="absolute bottom-[-2px] left-0 w-full h-64 bg-gradient-to-t from-slate-50 dark:from-background to-transparent pointer-events-none border-none"></div>
      </div>

      {/* Solid fallback background covering below the video grid */}
      <div className="absolute top-[70vh] bottom-0 left-0 w-full bg-slate-50 dark:bg-background -z-20 border-none"></div>

      <div className="w-full mx-auto px-4 text-center relative z-10">
        
        {/* Headings Container (Untouched) */}
        {/* Headings Container (Untouched) */}
        <div className="bg-white dark:bg-[#111] mx-auto max-w-[1200px] rounded-[3rem] p-6 lg:p-16 pt-16 lg:pt-24 pb-16 lg:pb-24 border-none relative overflow-hidden backdrop-blur-sm bg-white/95 dark:bg-[#111]/95 shadow-none">
          
          <h1 style={{ letterSpacing: "-0.04em" }} className="text-[50px] md:text-[85px] lg:text-[105px] font-bold leading-[0.95] text-foreground lowercase mb-8 font-sans mx-auto max-w-5xl relative z-10 border-none transition-all">
            {content.headlinePrefix} <br className="hidden md:block"/>
            <span className="text-ksl-blue">{content.headlineHighlight}</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-[18px] md:text-[22px] text-muted-foreground font-medium leading-relaxed mb-12 tracking-tight relative z-10 border-none">
            {content.description}
          </p>

          {/* Primary Action Buttons inline (No absolute positioning) */}
          <div className="flex flex-col items-center justify-center w-full z-20 relative mb-16 lg:mb-24">
            <Button asChild className="h-[64px] px-12 rounded-full bg-ksl-blue text-white hover:bg-ksl-blue/90 font-bold text-[18px] active:scale-95 transition-transform cursor-pointer border-none shadow-none">
              <Link to="/translate">{content.ctaPrimary}</Link>
            </Button>
            <p className="mt-4 text-[13px] text-ksl-dark font-bold px-5 py-2 bg-slate-100 dark:bg-black/20 rounded-full tracking-tight border-none shadow-none">
              {content.ctaSecondary}
            </p>
          </div>

          {/* Bento Section */}
          <div className="relative border-none">
             {/* Staggered Grid Container */}
             <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-[18px] w-full max-w-[1000px] mx-auto scale-95 md:scale-100 z-10 relative border-none">
               
               {/* Card 1: KSL Dark UI mock - Tall */}
               <div className="w-[300px] md:w-[230px] lg:w-[250px] h-[370px] lg:h-[390px] bg-ksl-dark rounded-[24px] p-5 text-left flex flex-col text-white transition-transform hover:-translate-y-2 shrink-0 group shadow-lg border-none order-1 relative overflow-hidden">

                  <p className="text-[12px] text-ksl-yellow font-bold mb-1 tracking-widest uppercase relative border-none">{content.bentoCard1.title}</p>
                  <h3 className="text-[18px] font-bold mb-6 tracking-tight relative border-none">{content.bentoCard1.date}</h3>
                  
                  <div className="flex items-center gap-3 w-full mb-4 relative border-none">
                    <span className="text-[20px] font-medium text-white/50 w-8 border-none">{content.bentoCard1.row1Left}</span>
                    <div className="bg-ksl-blue text-white rounded-2xl flex-1 p-3.5 font-bold flex items-center gap-3 shadow-md border-none">
                      <span className="text-[13px] tracking-tight border-none">{content.bentoCard1.row1Right}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full mb-4 relative border-none">
                    <span className="text-[20px] font-medium text-white/50 w-8 border-none">{content.bentoCard1.row2Left}</span>
                    <div className="bg-white/10 text-gray-300 rounded-2xl flex-1 p-3.5 flex items-center gap-3 border-none">
                      <span className="text-[13px] font-medium tracking-tight text-white border-none">{content.bentoCard1.row2Right}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full mt-auto mb-1 relative border-none">
                    <div className="bg-white/10 text-gray-300 rounded-2xl flex-1 p-3.5 flex items-center justify-center gap-2 border-none hover:bg-white/20 transition-all cursor-pointer">
                      <span className="w-4 h-4 rounded-[4px] border-none bg-white/20 flex items-center justify-center text-white">
                         <Plus size={12} />
                      </span>
                      <span className="text-[13px] font-medium tracking-tight border-none">{content.bentoCard1.btn}</span>
                    </div>
                  </div>
               </div>

               {/* Inner flex section for bottom cards */}
               <div className="flex gap-[18px] lg:gap-5 flex-col xs:flex-row order-2 md:order-2 border-none">
                 {/* Card 2: Photo Square */}
                 <div className="w-[300px] xs:w-[190px] lg:w-[200px] h-[200px] lg:h-[220px] rounded-[24px] overflow-hidden transition-transform hover:-translate-y-2 shrink-0 border-none">
                    <img src={heroImg2} className="w-full h-full object-cover scale-[1.1] border-none" alt="User presenting KSL" />
                 </div>

                 {/* Card 3: Solid KSL Blue text card */}
                 <div className="w-[300px] xs:w-[190px] lg:w-[200px] h-[200px] lg:h-[220px] rounded-[24px] p-6 bg-ksl-blue text-white text-left flex flex-col justify-end transition-transform hover:-translate-y-2 shrink-0 border-none shadow-sm">
                    <h3 className="text-[26px] lg:text-[28px] font-bold leading-[1.05] tracking-tight mb-[1px] font-sans border-none" dangerouslySetInnerHTML={{ __html: content.bentoCard3 }}></h3>
                    <div className="mt-4 flex flex-col gap-1.5 self-end absolute right-5 bottom-8 border-none">
                       <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                       <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                       <span className="w-1.5 h-1.5 rounded-full bg-ksl-yellow"></span>
                    </div>
                 </div>
               </div>

               {/* Right Side Inner Container */}
               <div className="flex gap-[18px] lg:gap-5 flex-col md:flex-row order-3 md:items-end border-none">
                 
                 {/* Card 4: Solid KSL Yellow vertical card (Pushed UP!) */}
                 <div className="w-[300px] md:w-[200px] lg:w-[210px] h-[250px] lg:h-[260px] rounded-[24px] p-4 bg-ksl-yellow text-slate-900 text-left flex flex-col md:self-start md:mb-[90px] transition-transform hover:-translate-y-2 shrink-0 shadow-sm border-none relative z-0">
                    <div className="flex items-center gap-3 mb-4 mt-2 px-1 border-none">
                       <div className="w-10 h-10 rounded-full bg-white overflow-hidden shadow-sm flex items-center justify-center p-1.5 border-none">
                         <img src={kslLogo} className="w-full h-full object-contain border-none" />
                       </div>
                       <div className="flex items-end gap-1.5 relative top-0.5 border-none">
                          <p className="text-[17px] font-bold leading-none tracking-tight border-none">{content.bentoCard4.header}</p>
                       </div>
                    </div>
                    
                    <p className="text-[12px] text-slate-800 font-bold mb-3 px-1 tracking-tight border-none">{content.bentoCard4.sub}</p>
                    
                    <div className="flex flex-col gap-2 relative z-20 border-none">
                       <div className="bg-slate-900 text-white p-2.5 rounded-2xl flex items-center gap-3 shadow-md border-none">
                         <div className="bg-ksl-blue text-white pt-1.5 pb-1 px-2.5 rounded-xl text-center leading-[1.1] border-none">
                            <p className="text-[10px] font-bold capitalize relative border-none">Acc</p>
                            <p className="text-[16px] font-black tracking-tight border-none">96</p>
                         </div>
                         <div className="flex-1 border-none">
                            <p className="text-[14px] font-bold tracking-tight leading-none mb-1 border-none">{content.bentoCard4.stat1Title}</p>
                            <p className="text-[11px] text-gray-300 font-medium border-none">{content.bentoCard4.stat1Desc}</p>
                         </div>
                       </div>
                       
                       <div className="bg-slate-900 text-white p-2.5 rounded-2xl flex items-center gap-3 shadow-md border-none relative -mt-1 group z-10 hover:z-30 hover:-translate-y-1 transition-transform">
                         <div className="bg-white text-black pt-1.5 pb-1 px-2.5 rounded-xl text-center leading-[1.1] border-none">
                            <p className="text-[10px] font-bold capitalize border-none">Lat</p>
                            <p className="text-[16px] font-black tracking-tight border-none">&lt;1</p>
                         </div>
                         <div className="flex-1 border-none">
                            <p className="text-[14px] font-bold tracking-tight leading-none mb-1 text-white border-none">{content.bentoCard4.stat2Title}</p>
                            <p className="text-[11px] text-gray-300 font-medium border-none">{content.bentoCard4.stat2Desc}</p>
                         </div>
                       </div>
                    </div>
                 </div>

                 {/* Card 5: Tall Image with Play Button */}
                 <div className="w-[300px] md:w-[230px] lg:w-[250px] h-[370px] lg:h-[390px] rounded-[24px] overflow-hidden shadow-md relative transition-transform hover:-translate-y-2 shrink-0 group bg-[#090b10] border-none">
                    <img src={heroImg3} className="w-full h-full object-cover scale-[1.05] opacity-80 border-none" alt="Video demo" />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 pointer-events-none border-none"></div>
                    
                    <div className="absolute top-6 left-5 right-6 border-none">
                      <h3 className="text-white text-[25px] font-bold leading-[1.05] tracking-tight text-left drop-shadow-lg border-none" dangerouslySetInnerHTML={{ __html: content.bentoCard5 }}></h3>
                    </div>
                    
                    <div className="absolute bottom-6 left-5 right-5 w-[calc(100%-40px)] 
                                    bg-white/10 backdrop-blur-md rounded-full 
                                    flex items-center gap-3 p-1.5 pl-2 cursor-pointer 
                                    group-hover:bg-white/20 transition-colors border-none">
                       <div className="w-10 h-10 bg-ksl-yellow rounded-full flex items-center justify-center text-ksl-dark shrink-0 transition-transform group-hover:scale-105 shadow-md shadow-ksl-yellow/50 border-none">
                          <Play fill="currentColor" size={16} className="ml-0.5" />
                       </div>
                       <span className="text-white font-medium text-[13px] leading-tight tracking-tight drop-shadow-md border-none">{content.watchDemo}</span>
                    </div>
                 </div>

               </div>
               
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
