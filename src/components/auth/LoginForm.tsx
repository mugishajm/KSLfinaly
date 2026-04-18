import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import kslLogo from "@/assets/ksl-logo.png";

const API_URL = (() => {
  const raw = import.meta.env.VITE_API_URL as string | undefined;
  if (raw && raw.trim()) return raw.replace(/\/$/, "");
  return window.location.origin;
})();

function parseJsonOrNull(response: Response): Promise<Record<string, unknown> | null> {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return Promise.resolve(null);
  return response.json().catch(() => null);
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupPasswordConfirm, setShowSignupPasswordConfirm] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await parseJsonOrNull(response);

      if (!response.ok) {
        const message =
          (data && typeof data.message === "string")
            ? data.message
            : response.status === 404
              ? "Service unavailable. Please check that the server is running."
              : "Failed to log in. Please check your credentials.";
        setError(message);
        return;
      }

      if (data && typeof data.token === "string") {
        localStorage.setItem("ksl_token", data.token);
      }
      if (data && data.user && typeof data.user === "object") {
        localStorage.setItem("ksl_user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("ksl-user-update"));
      }

      const userData = data?.user as { role?: string; profileCompleted?: boolean } | undefined;
      const role = userData?.role ?? "user";
      const profileCompleted = userData?.profileCompleted ?? false;

      if (role === "admin") {
        navigate("/admin", { replace: true });
      } else if (!profileCompleted) {
        navigate("/complete-profile", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
      return;
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (signupPassword !== signupPasswordConfirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: signupFirstName,
          lastName: signupLastName,
          email: signupEmail,
          password: signupPassword,
        }),
      });

      const data = await parseJsonOrNull(response);

      if (!response.ok) {
        const message =
          (data && typeof data.message === "string")
            ? data.message
            : response.status === 404
              ? "Service unavailable. Please check that the server is running."
              : "Failed to create account. Please try again.";
        setError(message);
        return;
      }

      if (data && typeof data.token === "string") {
        localStorage.setItem("ksl_token", data.token);
      }
      if (data && data.user && typeof data.user === "object") {
        localStorage.setItem("ksl_user", JSON.stringify(data.user));
        window.dispatchEvent(new Event("ksl-user-update"));
      }

      const userData = data?.user as { role?: string; profileCompleted?: boolean } | undefined;
      const role = userData?.role ?? "user";
      const profileCompleted = userData?.profileCompleted ?? false;

      if (role === "admin") {
        navigate("/admin", { replace: true });
      } else if (!profileCompleted) {
        navigate("/complete-profile", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
      return;
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-background flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10 font-sans border-none overflow-x-hidden">
      
      <div className="w-full max-w-[500px] relative z-10 flex flex-col">
        {/* Back Link positioned above the card */}
        <div className="mb-6 ml-2">
          <Link to="/" className="text-muted-foreground hover:text-foreground font-bold text-[14px] flex items-center gap-2 transition-colors tracking-tight">
            ← {language === "kinyarwanda" ? "Subira ku rubuga" : language === "french" ? "Retour à l'accueil" : "Back to home"}
          </Link>
        </div>

        <div className="bg-white dark:bg-[#111] rounded-[2.5rem] shadow-sm border-none p-8 sm:p-12 relative overflow-hidden">
          
          {/* Internal Minimalist Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-50 dark:bg-[#0a0a0a] rounded-[1.2rem] flex items-center justify-center shadow-sm">
              <img 
                src={kslLogo} 
                alt="KSL Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-10">
            <h1 style={{ letterSpacing: "-0.04em" }} className="text-[36px] sm:text-[44px] font-bold text-foreground lowercase leading-[1] mb-3 tracking-tight">
              {language === "kinyarwanda"
                ? "ikaha neza"
                : language === "french"
                ? "bienvenue"
                : "welcome back"}
            </h1>
            <p className="text-[16px] text-muted-foreground font-medium tracking-tight">
              {language === "kinyarwanda"
                ? "Injira muri konti kugira ngo utangire"
                : language === "french"
                ? "Connectez-vous pour commencer"
                : "Sign in to your account"}
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 bg-slate-100 dark:bg-[#222] p-1.5 rounded-full border-none">
              <TabsTrigger 
                value="login" 
                className="data-[state=active]:bg-ksl-blue data-[state=active]:text-white rounded-full transition-all duration-300 text-muted-foreground text-[14px] py-2.5 font-bold tracking-tight shadow-sm"
              >
                {language === "kinyarwanda"
                  ? "Injira"
                  : language === "french"
                  ? "Connexion"
                  : "Sign In"}
              </TabsTrigger>
              <TabsTrigger 
                value="signup" 
                className="data-[state=active]:bg-ksl-dark data-[state=active]:text-white rounded-full transition-all duration-300 text-muted-foreground text-[14px] py-2.5 font-bold tracking-tight shadow-sm"
              >
                {language === "kinyarwanda"
                  ? "Fungura konti"
                  : language === "french"
                  ? "Créer un compte"
                  : "Sign Up"}
              </TabsTrigger>
            </TabsList>

            {error && (
              <Alert className="mb-6 rounded-[1rem] border-none bg-red-500/10 shadow-none px-4 py-3">
                <AlertCircle className="h-5 w-5 text-red-500 font-bold" />
                <AlertDescription className="ml-2 text-[14px] text-red-500 font-bold tracking-tight">{error}</AlertDescription>
              </Alert>
            )}
            {successMessage && (
              <Alert className="mb-6 rounded-[1rem] border-none bg-slate-50 dark:bg-[#222] shadow-none px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-ksl-blue font-bold" />
                <AlertDescription className="ml-2 text-[14px] text-ksl-blue font-bold tracking-tight">{successMessage}</AlertDescription>
              </Alert>
            )}

            <TabsContent value="login" className="mt-0">
              <form className="space-y-5" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <label className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest pl-2" htmlFor="login-email">
                    {language === "kinyarwanda" ? "Imeli" : language === "french" ? "E-mail" : "Email"}
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    required
                    className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-5 py-4 text-[16px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 transition-all placeholder:text-muted-foreground/50 shadow-sm"
                    placeholder="you@example.com"
                    value={loginEmail}
                    onChange={(event) => setLoginEmail(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center pl-2 pr-2">
                    <label className="text-[13px] font-bold text-muted-foreground uppercase tracking-widest" htmlFor="login-password">
                      {language === "kinyarwanda" ? "Ijambobanga" : language === "french" ? "Mot de passe" : "Password"}
                    </label>
                    <button type="button" className="text-ksl-blue hover:text-ksl-blue/80 font-bold text-[13px] tracking-tight transition-colors">
                      {language === "kinyarwanda" ? "Wibagiwe?" : language === "french" ? "Oublié ?" : "Forgot?"}
                    </button>
                  </div>
                  <div className="relative">
                    <input
                      id="login-password"
                      type={showLoginPassword ? "text" : "password"}
                      required
                      className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-5 py-4 text-[16px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 transition-all placeholder:text-muted-foreground/50 shadow-sm pr-14"
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(event) => setLoginPassword(event.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-ksl-blue hover:bg-ksl-blue/90 text-white font-bold py-6 text-[16px] rounded-full shadow-sm hover:-translate-y-[1px] transition-all tracking-tight border-none" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? language === "kinyarwanda" ? "Kwinjira..." : language === "french" ? "Connexion..." : "Signing in..."
                      : language === "kinyarwanda" ? "Injira" : language === "french" ? "Connexion" : "Sign In"}
                  </Button>
                </div>

                <p className="text-[14px] text-center font-medium mt-6 text-muted-foreground tracking-tight">
                  {language === "kinyarwanda" ? "Ntufite konti?" : language === "french" ? "Vous n'avez pas de compte ?" : "Don't have an account?"}{" "}
                  <button
                    type="button"
                    className="text-foreground hover:text-ksl-blue font-bold transition-colors underline-offset-4"
                    onClick={() => {
                      const signupTab = document.querySelector<HTMLButtonElement>('[data-state][data-value="signup"]');
                      signupTab?.click();
                    }}
                  >
                    {language === "kinyarwanda" ? "Fungura" : language === "french" ? "Créer" : "Sign up"}
                  </button>
                </p>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-0">
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-2" htmlFor="signup-first-name">
                      {language === "kinyarwanda" ? "Izina" : language === "french" ? "Prénom" : "First name"}
                    </label>
                    <input
                      id="signup-first-name"
                      type="text"
                      required
                      className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-4 py-3.5 text-[15px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 placeholder:text-muted-foreground/50 shadow-sm"
                      placeholder="Jane"
                      value={signupFirstName}
                      onChange={(event) => setSignupFirstName(event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-2" htmlFor="signup-last-name">
                      {language === "kinyarwanda" ? "Umuryango" : language === "french" ? "Nom" : "Last name"}
                    </label>
                    <input
                      id="signup-last-name"
                      type="text"
                      required
                      className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-4 py-3.5 text-[15px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 placeholder:text-muted-foreground/50 shadow-sm"
                      placeholder="Doe"
                      value={signupLastName}
                      onChange={(event) => setSignupLastName(event.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-2" htmlFor="signup-email">
                    {language === "kinyarwanda" ? "Imeli" : language === "french" ? "E-mail" : "Email"}
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    required
                    className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-4 py-3.5 text-[15px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 placeholder:text-muted-foreground/50 shadow-sm"
                    placeholder="you@example.com"
                    value={signupEmail}
                    onChange={(event) => setSignupEmail(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-2" htmlFor="signup-password">
                    {language === "kinyarwanda" ? "Ijambobanga" : language === "french" ? "Mot de passe" : "Password"}
                  </label>
                  <div className="relative">
                    <input
                      id="signup-password"
                      type={showSignupPassword ? "text" : "password"}
                      required
                      className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-4 py-3.5 text-[15px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 placeholder:text-muted-foreground/50 shadow-sm pr-12"
                      placeholder="Create a password"
                      value={signupPassword}
                      onChange={(event) => setSignupPassword(event.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowSignupPassword(!showSignupPassword)}
                    >
                      {showSignupPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[12px] font-bold text-muted-foreground uppercase tracking-widest pl-2" htmlFor="signup-password-confirm">
                    {language === "kinyarwanda" ? "Emeza" : language === "french" ? "Confirmez" : "Confirm"}
                  </label>
                  <div className="relative">
                    <input
                      id="signup-password-confirm"
                      type={showSignupPasswordConfirm ? "text" : "password"}
                      required
                      className="w-full rounded-[1.2rem] border-none bg-slate-50 dark:bg-[#0a0a0a] text-foreground px-4 py-3.5 text-[15px] font-medium outline-none focus:ring-2 focus:ring-ksl-blue/50 placeholder:text-muted-foreground/50 shadow-sm pr-12"
                      placeholder="Repeat your password"
                      value={signupPasswordConfirm}
                      onChange={(event) => setSignupPasswordConfirm(event.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setShowSignupPasswordConfirm(!showSignupPasswordConfirm)}
                    >
                      {showSignupPasswordConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="pt-3">
                  <Button 
                    type="submit" 
                    className="w-full bg-ksl-dark hover:bg-slate-900 dark:hover:bg-ksl-dark/90 text-white font-bold py-6 text-[16px] rounded-full shadow-sm hover:-translate-y-[1px] transition-all tracking-tight border-none" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? language === "kinyarwanda" ? "Gufungura..." : language === "french" ? "Création..." : "Creating..."
                      : language === "kinyarwanda" ? "Fungura konti" : language === "french" ? "Créer un compte" : "Create account"}
                  </Button>
                </div>
              </form>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;
