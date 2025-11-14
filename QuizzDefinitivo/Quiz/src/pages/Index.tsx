import { Link } from "react-router-dom";
import { ArcadeButton } from "@/components/ui/arcade-button";
import { Card } from "@/components/ui/card";
import { Rocket, Target, TrendingUp, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-cyan blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-magenta blur-[100px] rounded-full animate-pulse" />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold text-neon-cyan neon-text mb-6 animate-glow-pulse">
            CONVIERTE TU IDEA EN UN PRODUCTO REAL
          </h1>
          <p className="text-xl md:text-3xl text-neon-magenta neon-text-magenta mb-4">
            RÁPIDO Y SIN HUMO 💥
          </p>
          <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto mb-12">
            Haz el quiz (3-6 min). Descubre tu nivel real y recibe un plan personalizado.
          </p>
          
          <Link to="/quiz">
            <ArcadeButton variant="arcade" size="xl" className="text-lg px-12 py-6 animate-bounce">
              HACER EL QUIZ — ES GRATIS 🎮
            </ArcadeButton>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-neon-yellow neon-text-yellow mb-12">
            ¿QUÉ OBTENDRÁS?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-2 border-neon-cyan pixel-corners hover:border-neon-magenta transition-all hover:scale-105">
              <div className="text-center">
                <Target className="w-16 h-16 mx-auto mb-4 text-neon-cyan" />
                <h3 className="text-xl font-bold text-neon-cyan mb-4">DIAGNÓSTICO REAL</h3>
                <p className="text-foreground">
                  Evaluación honesta de dónde estás y qué tan viable es tu proyecto ahora mismo.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-neon-magenta pixel-corners hover:border-neon-yellow transition-all hover:scale-105">
              <div className="text-center">
                <Rocket className="w-16 h-16 mx-auto mb-4 text-neon-magenta" />
                <h3 className="text-xl font-bold text-neon-magenta mb-4">RECOMENDACIONES PERSONALIZADAS</h3>
                <p className="text-foreground">
                  Plan de acción específico con los pasos exactos para avanzar al siguiente nivel.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card border-2 border-neon-yellow pixel-corners hover:border-neon-green transition-all hover:scale-105">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-neon-yellow" />
                <h3 className="text-xl font-bold text-neon-yellow mb-4">VEREDICTO HONESTO</h3>
                <p className="text-foreground">
                  Sabrás si podemos ayudarte ahora o qué necesitas mejorar primero.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-arcade-medium">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-neon-cyan neon-text mb-12">
            CÓMO FUNCIONA 🎯
          </h2>
          
          <div className="space-y-6">
            {[
              { step: "01", title: "Responde 30 preguntas", desc: "Divididas en 6 bloques sobre estrategia, producto, ventas y más." },
              { step: "02", title: "Descubre tu nivel", desc: "De 'Idea Confusa' a 'Startup Creciendo' con badge incluido." },
              { step: "03", title: "Recibe tu plan", desc: "Recomendaciones accionables basadas en tus respuestas." },
              { step: "04", title: "Acelera tu startup", desc: "Accede a mentoría personalizada o recursos gratuitos según tu nivel." },
            ].map((item, index) => (
              <Card key={index} className="p-6 bg-card border-2 border-neon-cyan pixel-corners hover:border-neon-magenta transition-all">
                <div className="flex items-center gap-6">
                  <div className="text-5xl font-bold text-neon-magenta neon-text-magenta">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neon-cyan mb-2">{item.title}</h3>
                    <p className="text-foreground">{item.desc}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-neon-green flex-shrink-0" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neon-yellow neon-text-yellow mb-8">
            MÁS DE 500 FOUNDERS YA LO HICIERON
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-arcade-medium border-2 border-neon-cyan pixel-corners">
              <div className="text-4xl font-bold text-neon-cyan neon-text mb-2">92%</div>
              <p className="text-foreground">Completaron el quiz</p>
            </div>
            <div className="p-6 bg-arcade-medium border-2 border-neon-magenta pixel-corners">
              <div className="text-4xl font-bold text-neon-magenta neon-text-magenta mb-2">4.8/5</div>
              <p className="text-foreground">Valoración promedio</p>
            </div>
            <div className="p-6 bg-arcade-medium border-2 border-neon-yellow pixel-corners">
              <div className="text-4xl font-bold text-neon-yellow neon-text-yellow mb-2">78%</div>
              <p className="text-foreground">Implementaron cambios</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-neon-cyan neon-text mb-6">
            ¿LISTO PARA SUBIR DE NIVEL? 🚀
          </h2>
          <p className="text-xl text-foreground mb-8">
            3-6 minutos que pueden cambiar el rumbo de tu startup
          </p>
          <Link to="/quiz">
            <ArcadeButton variant="magenta" size="xl" className="text-lg px-12 py-6">
              EMPEZAR AHORA 🎮
            </ArcadeButton>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-2 border-neon-cyan">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 — Hecho con 💥 para founders que quieren avanzar rápido
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;