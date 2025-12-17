'use client'; // keep for compatibility with Next style

import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Zap, 
  Users, 
  MessageSquare, 
  ChevronDown, 
  Cpu, 
  Network, 
  ArrowRight,
  Menu,
  X,
  Youtube,
  BookOpen,
  Terminal,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Video
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const faqs = [
    {
      question: "¿Es gratis entrar a la comunidad IA360 Labs?",
      answer: "Sí, el acceso a la comunidad en Skool es 100% gratuito. Allí compartimos recursos, networking y resolvemos dudas básicas."
    },
    {
      question: "¿Necesito saber programar para usar Make o n8n?",
      answer: "No necesariamente. Make es muy visual (No-Code). n8n es Low-Code, lo que significa que puedes hacer mucho sin código, pero saber un poco de JavaScript ayuda a potenciarlo."
    },
    {
      question: "¿Ofreces consultoría para implementar IA en mi empresa?",
      answer: "Sí, ofrecemos servicios de consultoría estratégica e implementación técnica para empresas que buscan escalar operaciones con automatización."
    }
     },
     {
       question: "¿Cuál es la diferencia entre Make.com y n8n?",
       answer: "Make.com es No-Code: visual, rápido de implementar, perfecto para startups y pymes. n8n es Low-Code: más control técnico, mejor para deployments escalables. Ambos tienen 2000+ integraciones y excelente ROI en automatización empresarial."
     },
     {
       question: "¿Cuánto cuesta implementar una automatización?",
       answer: "Depende de la complejidad. Una auditoría cuesta €500-1000. Una automatización simple: €1500-3000. Implementación completa con agentes IA: €5000+. El ROI promedio se recupera en 2-3 meses."
     },
     {
       question: "¿Qué son los agentes IA y cómo se relacionan con automatizaciones?",
       answer: "Los agentes IA (basados en GPT-4) son sistemas autónomos que toman decisiones dentro de automatizaciones. Van más allá del No-Code: pueden analizar contenido, generar respuestas personalizadas y adaptarse a cambios. Perfectos para customer service, análisis de datos y operaciones complejas."
     },
     {
       question: "¿Puedo automatizar procesos en mi empresa si usamos software legacy?",
       answer: "Sí. n8n y Make.com tienen integraciones con webhooks, APIs y bases de datos SQL. Podemos conectar sistemas antiguos con herramientas modernas. La mayoría de procesos son automatizables, incluso con infraestructura compleja."
     },
     {
       question: "¿Qué tipo de empresas se benefician más de la automatización?",
       answer: "Agencias digitales, SaaS, e-commerce, consultoría, marketing agencies y equipos en operaciones. Cualquier empresa con procesos repetitivos: seguimiento de leads, reportes, integraciones entre herramientas, atención al cliente. Si tu equipo pierde tiempo en tareas manuales, hay oportunidad de automatización."
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* HEADER */}
      <nav className="fixed w-full z-50 top-0 left-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Victor Garcia <span className="text-blue-500">IA</span>
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#academia" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Academia</a>
                <a href="#videos" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Vídeos</a>
                <a href="#herramientas" className="hover:text-blue-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Herramientas</a>
                <a href="#consultoria" className="bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all">Consultoría</a>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none button-focus" aria-label="Abrir menú" aria-expanded={isMenuOpen} type="button">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-b border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#academia" className="text-gray-300 hover:text-white block px-4 py-3 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Academia</a>
              <a href="#videos" className="text-gray-300 hover:text-white block px-4 py-3 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Vídeos</a>
              <a href="#herramientas" className="text-gray-300 hover:text-white block px-4 py-3 rounded-md text-base font-medium" onClick={() => setIsMenuOpen(false)}>Herramientas</a>
              <a href="#consultoria" className="text-blue-400 font-bold block px-4 py-3 rounded-md text-base" onClick={() => setIsMenuOpen(false)}>Consultoría</a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse float"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 float"></div>

        <div data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2 fill-current" /> Revoluciona tu flujo de trabajo
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">Domina la IA y la <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Automatización</span></h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">Aprende a escalar tu productividad conectando herramientas como Make.com, n8n y APIs personalizadas. Deja que los robots hagan el trabajo sucio.</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button aria-label="Entrar a IA360 Labs" className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 rounded-2xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] pulse-soft">
              <Users className="w-5 h-5 mr-2" /> Entrar a IA360 Labs <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a aria-label="Ver tutoriales" href="#videos" className="inline-flex items-center justify-center w-full sm:inline-flex sm:w-auto px-8 py-4 text-base font-bold text-gray-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:text-white backdrop-blur-sm"><Play className="w-5 h-5 mr-2" /> Ver Tutoriales</a>
          </div>
        </div>
      </section>

      {/* HERRAMIENTAS */}
      <section id="herramientas" className="py-20 bg-[#0d0d0d] border-y border-white/5">
        <div data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Mi Tech Stack Favorito</h2>
            <p className="mt-4 text-gray-400">Las herramientas que uso a diario para construir sistemas autónomos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group card relative p-8 bg-[#151515] rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
              <div className="w-14 h-14 bg-[#2a1b3d] rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform"><Network className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Make.com</h3>
              <p className="text-gray-400 mb-6 text-sm">La mejor opción para automatizaciones visuales rápidas y robustas. Ideal para comenzar.</p>
              <a href="#" className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors">Acceso Directo <ExternalLink className="w-4 h-4 ml-2" /></a>
            </div>

            <div className="group card relative p-6 sm:p-8 bg-[#151515] rounded-3xl border border-white/5 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
              <div className="w-14 h-14 bg-[#3d2a1b] rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform"><Terminal className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-white mb-2">n8n</h3>
              <p className="text-gray-400 mb-6 text-sm">Automatización de flujos de trabajo con la potencia del código abierto. Control total de tus datos.</p>
              <a href="#" className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors">Acceso Directo <ExternalLink className="w-4 h-4 ml-2" /></a>
            </div>

            <div className="group card relative p-6 sm:p-8 bg-[#151515] rounded-3xl border border-white/5 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity"></div>
              <div className="w-14 h-14 bg-[#1b3d25] rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform"><Cpu className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-white mb-2">Webhooks & APIs</h3>
              <p className="text-gray-400 mb-6 text-sm">Conecta cualquier cosa con cualquier cosa. JSONs y endpoints personalizados.</p>
              <a href="#" className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors">Acceso Directo <ExternalLink className="w-4 h-4 ml-2" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIA */}
      <section id="academia" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 font-bold text-sm mb-2">🌟 Comunidad Gratuita</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Únete a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IA360 Labs</span></h2>
              <p className="text-gray-400 text-lg max-w-xl">Deja de aprender solo. Entra en el ecosistema donde compartimos Blueprints, resolvemos errores de código y hacemos networking real.</p>
              <ul className="space-y-3 text-gray-300 inline-block text-left">
                <li className="flex items-center"><Zap className="w-5 h-5 mr-3 text-blue-500" /> JSONs y Blueprints descargables</li>
                <li className="flex items-center"><Users className="w-5 h-5 mr-3 text-purple-500" /> Networking con expertos</li>
                <li className="flex items-center"><MessageSquare className="w-5 h-5 mr-3 text-green-500" /> Soporte de la comunidad</li>
              </ul>
            </div>
            <div className="flex-shrink-0">
               <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl text-lg hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">Acceder Gratis Ahora</button>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section id="videos" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none float"></div>
        <div data-animate className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-12 md:p-20 shadow-2xl flex flex-col items-center group hover:border-red-600/20 transition-all duration-500">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-xl animate-pulse"></div>
              <a href="https://www.youtube.com/@VictorGarciaIA" target="_blank" rel="noopener noreferrer" title="Ir al canal de YouTube" className="inline-block" aria-label="Ir al canal de YouTube">
                <div className="yt-bubble w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center relative z-10 ring-4 ring-red-600/20 shadow-lg hover:scale-105 transition-transform duration-300" role="img" aria-hidden="false">
                  <Play className="play-icon w-8 h-8 text-white" aria-hidden="true" />
                  <span className="sr-only">Canal de YouTube de Victor Garcia IA</span>
                </div>
              </a>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Explora el Canal Oficial</h2>
            <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">Accede a la biblioteca más completa de habla hispana sobre automatización con IA. Más de <span className="text-white font-bold">50 tutoriales gratuitos</span>, masterclasses en vivo y casos de uso reales esperándote.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-3xl">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center hover:bg-white/10 transition-colors"><Video className="w-6 h-6 text-red-500 mb-3" /><div className="font-bold text-white text-lg">Masterclasses</div><div className="text-gray-500 text-sm">Make y n8n desde cero</div></div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center hover:bg-white/10 transition-colors"><Cpu className="w-6 h-6 text-blue-500 mb-3" /><div className="font-bold text-white text-lg">Agentes IA</div><div className="text-gray-500 text-sm">Tutoriales avanzados</div></div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center hover:bg-white/10 transition-colors"><Users className="w-6 h-6 text-purple-500 mb-3" /><div className="font-bold text-white text-lg">Comunidad</div><div className="text-gray-500 text-sm">Casos de uso reales</div></div>
            </div>
            <a href="https://www.youtube.com/@VictorGarciaIA" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-200 bg-red-600 rounded-2xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] hover:-translate-y-1"><Play className="w-6 h-6 mr-3 fill-current" /> Ir al Canal de YouTube <ExternalLink className="w-5 h-5 ml-3 opacity-70 group-hover/btn:opacity-100 transition-opacity" /></a>
          </div>
        </div>
      </section>

      {/* CONSULTORIA & FAQ */}
            {/* GUIA RAPIDA DE AUTOMATIZACION */}
            <section id="guia" className="py-24 bg-[#0a0a0a] border-t border-white/5">
              <div data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Qué son las Automatizaciones Empresariales?</h2>
                  <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">La automatización empresarial permite a las organizaciones conectar herramientas como Make.com y n8n para crear workflows inteligentes que ejecutan tareas repetitivas sin intervención humana. Esto libera tiempo para trabajo estratégico y reduce errores operacionales.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                      <Terminal className="w-6 h-6" />
                      Automatización No-Code
                    </h3>
                    <p className="text-gray-300 mb-6">Crea automatizaciones sin escribir código usando Make.com. Arrastra módulos, conecta servicios y construye workflows complejos en minutos.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Interfaz visual intuitiva</strong> - No necesitas programación</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>2000+ integraciones</strong> - Conecta cualquier herramienta SaaS</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Rapidez de implementación</strong> - Automatiza procesos en horas</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                      <Cpu className="w-6 h-6" />
                      Automatización Low-Code
                    </h3>
                    <p className="text-gray-300 mb-6">n8n te permite combinar low-code con potencia técnica. Perfecta para developers que necesitan mayor control y escalabilidad.</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Arquitectura descentralizada</strong> - Ejecuta en tu servidor</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Código JavaScript nativo</strong> - Extensible y personalizable</span>
                      </li>
                      <li className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span><strong>Seguridad avanzada</strong> - Control total de tus datos</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl p-12">
                  <h3 className="text-2xl font-bold text-white mb-6">Casos Prácticos de Automatización</h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-blue-400 mb-3">📧 Marketing Automation</h4>
                      <p className="text-gray-300 text-sm">Automáticamente agrega leads a tu CRM, envía emails segmentados y notifica a tu equipo de nuevas oportunidades.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-400 mb-3">💼 Gestión de Proyectos</h4>
                      <p className="text-gray-300 text-sm">Sincroniza tareas entre Asana, Monday.com y Slack. Mantén a todo tu equipo actualizado sin meetings innecesarias.</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-pink-400 mb-3">📊 Reportes Automáticos</h4>
                      <p className="text-gray-300 text-sm">Genera reportes diarios compilando datos de múltiples fuentes y distribúyelos automáticamente a stakeholders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* BENEFICIOS Y RESULTADOS */}
            <section id="beneficios" className="py-24 bg-[#0d0d0d] border-t border-white/5">
              <div data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">¿Qué Logras Automatizando tu Negocio?</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">Resultados verificados de empresas que implementaron automatización con nuestros servicios</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <div className="bg-[#151515] p-8 rounded-2xl border border-blue-500/20 text-center hover:border-blue-500/50 transition-colors">
                    <div className="text-5xl font-bold text-blue-400 mb-2">-70%</div>
                    <p className="text-gray-300 font-semibold mb-2">Tiempo en tareas repetitivas</p>
                    <p className="text-gray-500 text-sm">Equipos liberan 10+ horas/semana para trabajo estratégico</p>
                  </div>
                  <div className="bg-[#151515] p-8 rounded-2xl border border-purple-500/20 text-center hover:border-purple-500/50 transition-colors">
                    <div className="text-5xl font-bold text-purple-400 mb-2">-95%</div>
                    <p className="text-gray-300 font-semibold mb-2">Errores en procesos</p>
                    <p className="text-gray-500 text-sm">Workflows automatizados eliminan errores humanos</p>
                  </div>
                  <div className="bg-[#151515] p-8 rounded-2xl border border-pink-500/20 text-center hover:border-pink-500/50 transition-colors">
                    <div className="text-5xl font-bold text-pink-400 mb-2">+300%</div>
                    <p className="text-gray-300 font-semibold mb-2">ROI promedio</p>
                    <p className="text-gray-500 text-sm">En primeros 6 meses de implementación</p>
                  </div>
                  <div className="bg-[#151515] p-8 rounded-2xl border border-green-500/20 text-center hover:border-green-500/50 transition-colors">
                    <div className="text-5xl font-bold text-green-400 mb-2">24/7</div>
                    <p className="text-gray-300 font-semibold mb-2">Operación sin pausas</p>
                    <p className="text-gray-500 text-sm">Tus workflows funcionan día y noche automáticamente</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-3xl p-12 mb-12">
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-6">¿Por qué implementar automatización ahora?</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300"><strong>Competencia usa IA:</strong> Si tu competencia automatiza y tú no, quedas atrás</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300"><strong>Talento caro:</strong> La automatización es más barata que contratar personal</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300"><strong>Escalabilidad:</strong> Crece sin contratar proporcionalmenteal crecimiento</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300"><strong>Retención de talento:</strong> Tu equipo se enfoca en tareas creativas</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5">
                      <h4 className="text-xl font-bold text-white mb-6">Ejemplo de Ahorro Mensual</h4>
                      <div className="space-y-4 text-sm text-gray-300">
                        <div className="flex justify-between pb-3 border-b border-white/10">
                          <span>Costo de 1 empleado a tiempo completo:</span>
                          <span className="text-white font-bold">€2,500-4,000</span>
                        </div>
                        <div className="flex justify-between pb-3 border-b border-white/10">
                          <span>Automatización Make.com (escalado):</span>
                          <span className="text-white font-bold">€100-300</span>
                        </div>
                        <div className="flex justify-between text-lg pt-3">
                          <span><strong>Ahorro mensual:</strong></span>
                          <span className="text-green-400 font-bold">€2,200-3,900</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      <section id="consultoria" className="py-24 bg-[#0d0d0d] border-t border-white/5">
        <div data-animate className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20"><h2 className="text-4xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h2><p className="text-gray-400 text-lg max-w-2xl mx-auto">Te ayudo a escalar tu negocio implementando sistemas de Inteligencia Artificial y Automatización Estratégica.</p></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Servicios de Consultoría</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"> 
            <div className="card bg-[#151515] p-8 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400"><Zap className="w-7 h-7" /></div>
              <h3 className="text-2xl font-bold text-white mb-2">Auditoría Express</h3>
              <p className="text-gray-400 text-sm mb-8 flex-1">Analizo tus procesos actuales para identificar cuellos de botella y oportunidades claras de automatización inmediata.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2"/> Mapa de procesos actual</li>
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2"/> Informe de herramientas recomendadas</li>
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-500 mr-2"/> Plan de acción paso a paso</li>
              </ul>
              <button className="w-full py-3 border border-blue-500/30 text-blue-400 font-bold rounded-xl hover:bg-blue-500/10 transition-colors">Ver Detalles</button>
            </div>

            <div className="card bg-gradient-to-b from-[#1a1a1a] to-[#111] p-8 rounded-3xl border border-blue-500/30 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-b-lg">MÁS POPULAR</div>
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white mt-4"><Cpu className="w-7 h-7" /></div>
              <h3 className="text-2xl font-bold text-white mb-2">Implementación a Medida</h3>
              <p className="text-gray-400 text-sm mb-8 flex-1">Diseño y construcción de sistemas completos "Llave en mano". Desde la conexión de APIs hasta Agentes de IA autónomos.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2"/> Desarrollo en Make.com / n8n</li>
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2"/> Integración de Agentes GPT-4</li>
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-blue-400 mr-2"/> Testing y Soporte técnico</li>
              </ul>
              <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25">Solicitar Presupuesto</button>
            </div>

            <div className="card bg-[#151515] p-8 rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400"><Users className="w-7 h-7" /></div>
              <h3 className="text-2xl font-bold text-white mb-2">Mentoría 1 a 1</h3>
              <p className="text-gray-400 text-sm mb-8 flex-1">Acompañamiento personalizado para dueños de agencias o desarrolladores que quieren desbloquear un problema técnico complejo.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-2"/> Sesiones por Zoom grabadas</li>
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-2"/> Revisión de código en vivo</li>
                <li className="flex items-center text-gray-300 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500 mr-2"/> Acceso a mi librería de recursos</li>
              </ul>
              <button className="w-full py-3 border border-purple-500/30 text-purple-400 font-bold rounded-xl hover:bg-purple-500/10 transition-colors">Agendar Sesión</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <div className="bg-[#151515] p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><MessageSquare className="w-6 h-6 text-blue-500"/> Envíame un mensaje</h2>
              <form className="space-y-4 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nombre</label>
                  <input id="name" name="name" type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input id="email" name="email" type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="tu@email.com" />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-1">Tipo de Proyecto</label>
                  <select id="projectType" name="projectType" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
                    <option>Selecciona una opción...</option>
                    <option>Implementación de Automatización</option>
                    <option>Consultoría de Agentes IA</option>
                    <option>Formación / Mentoría</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensaje</label>
                  <textarea id="message" name="message" rows="4" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Cuéntame brevemente tu idea..."></textarea>
                </div>
                <button type="button" className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-900/30 flex justify-center items-center gap-2">Enviar Propuesta <ArrowRight className="w-4 h-4"/></button>
              </form>
            </div>
            <div className="space-y-6"><div><h2 className="text-2xl font-bold text-white mb-2">Preguntas Frecuentes</h2><p className="text-gray-400 text-sm">Todo lo que necesitas saber antes de empezar.</p></div><div className="space-y-4">{faqs.map((faq, index) => (<div key={index} className="border border-white/10 rounded-2xl bg-[#151515] overflow-hidden hover:border-white/20 transition-colors"><button onClick={() => toggleAccordion(index)} className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" aria-expanded={activeAccordion === index} aria-controls={`faq-${index}`} type="button"><span className="text-gray-200 font-medium pr-4">{faq.question}</span><ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${activeAccordion === index ? 'rotate-180' : ''}`} /></button><div id={`faq-${index}`} role="region" aria-hidden={activeAccordion !== index} className={`px-6 text-gray-400 text-sm overflow-hidden transition-all duration-300 accordion-content ${activeAccordion === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>{faq.answer}</div></div>))}</div><div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-blue-500/20 flex items-start gap-4"><div className="p-3 bg-blue-600/20 rounded-xl text-blue-400"><Calendar className="w-6 h-6"/></div><div><h4 className="text-white font-bold mb-1">¿Prefieres hablar directamente?</h4><p className="text-xs text-gray-400 mb-3">Agenda una llamada de descubrimiento de 15 minutos gratis.</p><button className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">Ver disponibilidad <ArrowRight className="w-3 h-3"/></button></div></div></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer data-animate className="bg-black py-12 border-t border-white/5 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-bold text-xl tracking-tight text-white block mb-2">Victor Garcia <span className="text-blue-500">IA</span></span>
            <p className="text-gray-500 text-sm">© 2024 IA360 Labs. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-6"><a href="#" className="text-gray-500 hover:text-white transition-colors"><Youtube className="w-6 h-6" /></a><a href="#" className="text-gray-500 hover:text-white transition-colors"><BookOpen className="w-6 h-6" /></a><a href="#" className="text-gray-500 hover:text-white transition-colors"><Network className="w-6 h-6" /></a></div>
        </div>
      </footer>

    </div>
  )
}

export default App
