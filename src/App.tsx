import React from 'react';
import { motion } from 'framer-motion';
import fotoSessao1 from './assets/foto-sessao-1.png';
import fotoSessao2 from './assets/foto-sessao-2.png';
import assinatura from './assets/assinatura.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const LogoN = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 C 20 50, 40 20, 60 20 C 80 20, 80 50, 80 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
    <path d="M20 80 L 20 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const whatsappLink = "https://wa.me/5592994785643?text=Ol%C3%A1%2C%20Havilah%21%20Tenho%20interesse%20na%20mentoria...%21";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFCF9] font-montserrat text-[#2A2A2A] overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full flex-grow flex items-stretch min-h-[85vh] overflow-hidden pt-20 md:pt-0">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="w-full md:w-[65%] h-full bg-[#FDFCF9]"></div>
          <div className="w-full md:w-[35%] h-full relative overflow-hidden">
            {/* Blurred office background */}
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
              alt="Office Background"
              className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
            {/* Abstract curved line */}
            <svg
              className="absolute inset-0 w-full h-full text-[#D4C5B9] opacity-60"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M-20,80 Q30,20 70,60 T120,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
            {/* Diagonal overlay to blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FDFCF9] via-[#FDFCF9]/80 to-transparent w-[150%] -left-[50%] skew-x-[-15deg] hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF9] via-[#FDFCF9]/80 to-transparent h-[150%] -top-[50%] block md:hidden"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col md:flex-row items-stretch h-full py-0">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-[65%] pt-10 pb-12 md:py-28 pr-0 md:pr-12 lg:pr-20 z-20 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.35rem] leading-[1.2] font-normal mb-8 text-[#2A2A2A] tracking-tight"
            >
              Você já comprou <br className="hidden lg:block" />
              <span className="font-bold">inúmeros cursos</span> que <br className="hidden lg:block" />
              prometem faturamento? <br className="hidden lg:block" />
              Você se <span className="font-bold">sente inseguro</span> <br className="hidden lg:block" />
              ao atender clientes <span className="font-bold">e sem</span> <br className="hidden lg:block" />
              <span className="font-bold">controle</span> da rotina do <br className="hidden lg:block" />
              escritório?
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base md:text-[1.1rem] mb-10 text-[#4A4A4A] max-w-[480px] leading-relaxed">
              Não é normal se sentir assim. <br />
              <span className="font-bold text-[#2A2A2A]">O problema</span> não é o seu conhecimento <br className="hidden md:block" />
              jurídico — <span className="font-bold text-[#2A2A2A]">
                é a ausência de método <br className="hidden md:block" />
                claro e sustentável.
              </span>
            </motion.p>

            <motion.div variants={fadeInUp} className="w-full sm:w-max">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-wider rounded-full overflow-hidden bg-gradient-to-r from-[#A66B4A] via-[#5C3922] to-[#A66B4A] animate-gradient transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
                <span>Entre em contato</span>
                <WhatsAppIcon />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="w-full md:w-[35%] relative flex justify-center md:justify-end items-end mt-10 md:mt-0 min-h-[400px] md:min-h-[85vh]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Placeholder for the cutout image */}
            <div className="relative w-full h-full flex flex-col items-center justify-end md:items-end">
              <img
                src={fotoSessao1}
                alt="Havilah Nasser"
                className="object-contain object-bottom scale-[1.35] md:scale-[2.0] origin-bottom drop-shadow-2xl translate-y-2 lg:translate-x-8"
              />

              {/* Circular Badge */}
              <div className="absolute bottom-20 left-0 md:-left-24 w-32 h-32 md:w-40 md:h-40 z-30">
                <div className="relative w-full h-full animate-spin-slow opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#5C3922]">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fontSize="9" letterSpacing="2.5" fontWeight="600" fill="currentColor">
                      <textPath href="#circlePath" startOffset="0%">
                        HAVILAH NASSER • HAVILAH NASSER •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={assinatura} alt="Assinatura n" className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="w-full bg-gradient-to-r from-[#8E5B3F] via-[#6B442E] to-[#4A2D1A] py-5 overflow-hidden flex relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mx-8 text-white/90">
              <img src={assinatura} alt="Assinatura" className="w-8 h-8 object-contain mr-6 opacity-80 brightness-0 invert" />
              <span className="text-lg tracking-[0.25em] font-medium">HAVILAH NASSER</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex whitespace-nowrap animate-marquee" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <div key={`dup-${i}`} className="flex items-center mx-8 text-white/90">
              <img src={assinatura} alt="Assinatura" className="w-8 h-8 object-contain mr-6 opacity-80 brightness-0 invert" />
              <span className="text-lg tracking-[0.25em] font-medium">HAVILAH NASSER</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: O Problema */}
      <section className="w-full bg-white py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.div
          className="container mx-auto max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Overline */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center mb-8">
            <div className="h-px bg-[#A66B4A] w-12 opacity-40"></div>
            <span className="mx-4 text-[#A66B4A] uppercase tracking-widest text-sm font-medium">O problema</span>
            <div className="h-px bg-[#A66B4A] w-12 opacity-40"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-[2.5rem] text-center text-[#A66B4A] font-medium mb-16 leading-[1.3]">
            Em um dia você está na faculdade, <br />
            no outro, é jogado no mercado.
          </motion.h2>

          {/* Grid of 6 items */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto mb-20">
            {[
              "Sem saber se posicionar.",
              "Sem saber conduzir atendimentos.",
              "Sem saber precificar.",
              "Sem saber gerir sua equipe.",
              "Sem saber organizar a rotina.",
              "Sem saber definir prioridades."
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-gradient-to-r from-white to-gray-50/30 py-3 px-6 rounded-sm shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100/50">
                <span className="text-[#2A2A2A] font-bold mr-4 text-lg leading-none">×</span>
                <span className="text-[#4A4A4A]">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Paragraph */}
          <motion.p variants={fadeInUp} className="text-center text-[#4A4A4A] max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
            O problema não é falta de conhecimento jurídico. <br className="hidden md:block" />
            É a ausência de um método claro, aplicado à prática profissional, que organize o <br className="hidden md:block" />
            atendimento, o fechamento de contrato e a rotina — e permita crescimento em <br className="hidden md:block" />
            constância.
          </motion.p>

          {/* Sub-heading */}
          <motion.h3 variants={fadeInUp} className="text-3xl lg:text-4xl font-bold text-center text-[#A66B4A] mb-20">
            Você sente
          </motion.h3>

          {/* Three Columns */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Vertical Dividers for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-[33.33%] w-px bg-gray-200"></div>
            <div className="hidden md:block absolute top-0 bottom-0 right-[33.33%] w-px bg-gray-200"></div>

            {/* Column 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-8 h-16 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="9" r="4" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  <path d="M21 10c0 2.2-2.2 4-5 4-.5 0-1-.1-1.5-.2l-2.5 1 .5-2A4.5 4.5 0 0 1 11 10c0-2.2 2.2-4 5-4s5 1.8 5 4z" />
                </svg>
              </div>
              <h4 className="text-[#A66B4A] font-medium text-lg mb-4">No atendimento</h4>
              <p className="text-[#4A4A4A] leading-relaxed">
                Insegurança na condução. <br />
                Atendimentos inconsistentes e <br />
                sem um padrão claro.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-8 h-16 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="12" y2="17" />
                  <line x1="8" y1="9" x2="10" y2="9" />
                  <circle cx="17" cy="17" r="5" fill="white" />
                  <path d="M15 17l1.5 1.5 2.5-2.5" />
                </svg>
              </div>
              <h4 className="text-[#A66B4A] font-medium text-lg mb-4">No fechamento de contrato</h4>
              <p className="text-[#4A4A4A] leading-relaxed">
                Dificuldade na apresentação <br />
                dos honorários. <br />
                Perda de firmeza na proposta.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="mb-8 h-16 flex items-center justify-center">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#2A2A2A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <rect x="7" y="13" width="2" height="2" />
                  <rect x="11" y="13" width="2" height="2" />
                  <rect x="15" y="13" width="2" height="2" />
                  <rect x="7" y="17" width="2" height="2" />
                  <rect x="11" y="17" width="2" height="2" />
                </svg>
              </div>
              <h4 className="text-[#A66B4A] font-medium text-lg mb-4">Na rotina</h4>
              <p className="text-[#4A4A4A] leading-relaxed">
                Atuação reativa. <br />
                Retrabalho, prazos perdidos e <br />
                ausência de evolução.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: Infelizmente... */}
      <section className="w-full bg-gradient-to-r from-[#8E5B3F] to-[#4A2D1A] py-20 px-6 md:px-12 lg:px-24 text-white text-center overflow-hidden">
        <motion.div
          className="container mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-px bg-white/30 w-16 mx-auto mb-8"></div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight">
            Infelizmente isso é mais comum do que parece.
          </h2>
          <p className="text-lg md:text-xl font-light italic text-white/90 leading-relaxed max-w-3xl mx-auto">
            "Eu sei todas as leis desse processo, tenho experiência, mas me perco com os clientes e no dia a dia do escritório."
          </p>
        </motion.div>
      </section>

      {/* Section 4: A solução */}
      <section className="w-full relative py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1600"
            alt="Law Office Background"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF9]/90 via-[#FDFCF9]/80 to-[#FDFCF9]/90"></div>
        </div>

        <motion.div
          className="container mx-auto max-w-4xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="h-px bg-[#A66B4A] w-16 mx-auto mb-8 opacity-40"></motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-[2.5rem] text-center text-[#A66B4A] font-bold mb-6 leading-tight">
            A solução não é mais conteúdo. <br />
            É ter um método claro e eficiente que se sustente a longo prazo.
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-center text-[#4A4A4A] text-lg mb-16">
            Tenha acesso a uma mentoria online e individual, voltada à prática jurídica, que vai:
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col gap-4 max-w-3xl mx-auto mb-16">
            {[
              "Organizar decisões e critérios.",
              "Estruturar atendimento, fechamento e rotina.",
              "Gerar segurança e previsibilidade.",
              "Construir uma advocacia sustentável."
            ].map((item, index) => (
              <div key={index} className="flex items-center text-[#4A4A4A] text-lg md:text-xl py-3 border-b border-[#A66B4A]/10 last:border-0">
                <span className="text-[#A66B4A] font-bold mr-4">✓</span>
                {item}
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-wider rounded-full overflow-hidden bg-gradient-to-r from-[#A66B4A] via-[#5C3922] to-[#A66B4A] animate-gradient transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base border border-white/20">
              <span>Entre em contato</span>
              <WhatsAppIcon />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 5: About Mentor */}
      <motion.section
        className="w-full bg-[#FDFCF9] pt-20 md:pt-28 px-6 md:px-12 lg:px-24 relative overflow-hidden flex items-end min-h-[600px] md:min-h-[700px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div
          className="container mx-auto max-w-6xl relative z-10 flex flex-col md:flex-row items-stretch h-full w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 pr-0 md:pr-12 lg:pr-20 mb-12 md:mb-0 pb-16 md:pb-32 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-[#A66B4A] text-lg mb-2">Eu serei a sua mentora</motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-[#A66B4A] mb-2">
              Havilah Nasser
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#A66B4A] text-lg mb-10 tracking-wider">OAB/AM nº 16.377</motion.p>

            <motion.div variants={fadeInUp} className="text-[#4A4A4A] text-lg leading-relaxed space-y-6 mb-10">
              <p>
                <span className="font-bold text-[#2A2A2A]">Advogada, formada em Direito pela</span> Universidade <br className="hidden lg:block" />
                do Estado do Amazonas, <span className="font-bold text-[#2A2A2A]">especialista em Direito <br className="hidden lg:block" />
                  Público e LLM em Direito Empresarial pela FGV.</span>
              </p>
              <p>
                Com atuação na área consultiva, entendi que a essência <br className="hidden lg:block" />
                de um escritório sólido mora na <span className="font-bold text-[#2A2A2A]">prevenção e na <br className="hidden lg:block" />
                  estratégia.</span> Hoje, ajudo advogados a estruturarem suas <br className="hidden lg:block" />
                práticas para crescerem de forma constante, com base <br className="hidden lg:block" />
                em <span className="font-bold text-[#2A2A2A]">clareza na comunicação, organização dos <br className="hidden lg:block" />
                  processos e postura ética na advocacia.</span>
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white uppercase tracking-wider rounded-full overflow-hidden bg-gradient-to-r from-[#A66B4A] via-[#5C3922] to-[#A66B4A] animate-gradient transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
                <span>Entre em contato</span>
                <WhatsAppIcon />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="w-full md:w-1/2 relative flex justify-center items-end mt-10 md:mt-0 min-h-[400px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Cutout Image */}
            <div className="relative w-full h-full flex flex-col items-center justify-end md:items-end">
              <img
                src={fotoSessao2}
                alt="Havilah Nasser"
                className="object-contain object-bottom scale-[1.55] md:scale-[1.5] origin-bottom drop-shadow-2xl relative z-20 translate-y-2 lg:translate-x-12"
              />

              {/* Circular Badge - Positioned on the left of the image */}
              <div className="absolute bottom-16 left-0 md:-left-12 lg:-left-20 w-32 h-32 md:w-40 md:h-40 z-30">
                <div className="relative w-full h-full animate-spin-slow opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#A66B4A]">
                    <path
                      id="circlePath2"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fontSize="9" letterSpacing="2.5" fontWeight="600" fill="currentColor">
                      <textPath href="#circlePath2" startOffset="0%">
                        HAVILAH NASSER • MENTORIA •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={assinatura} alt="Assinatura n" className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-80 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Section 6: O Método */}
      <section className="w-full bg-[#F4F3F0] py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.div
          className="container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="h-px bg-[#A66B4A] w-16 mx-auto mb-8 opacity-40"></div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#A66B4A] mb-4">
              O método é estruturado em duas mentorias.
            </h2>
            <p className="text-lg md:text-xl text-[#4A4A4A]">
              A mentoria trabalha dois eixos complementares:
            </p>
          </motion.div>

          {/* Cards Container */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <p className="text-xs font-bold tracking-[0.2em] text-[#8E5B3F] uppercase mb-4">
                Mentoria 1
              </p>
              <h3 className="text-2xl font-bold text-[#A66B4A] mb-6">
                Atendimento e Fechamento de contrato
              </h3>
              <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                Um método estruturado para conduzir atendimentos com segurança e fechar contratos de forma ética e consciente.
              </p>

              <div className="h-px w-full bg-gray-100 mb-8"></div>

              <ul className="space-y-6">
                {[
                  "Organização do atendimento, do início ao fim.",
                  "Clareza na explicação da estratégia, dos riscos e dos próximos passos.",
                  "Segurança ao tratar sobre honorários, escopo e contratos.",
                  "Critérios objetivos para a apresentação de propostas.",
                  "Fechamento de contrato ético, organizado e consciente.",
                  "Posicionamento do serviço sem confronto ou improviso."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A66B4A] mt-2.5 mr-4 flex-shrink-0 opacity-60"></span>
                    <span className="text-[#4A4A4A] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <p className="text-xs font-bold tracking-[0.2em] text-[#8E5B3F] uppercase mb-4">
                Mentoria 2
              </p>
              <h3 className="text-2xl font-bold text-[#A66B4A] mb-6">
                Operacional e Gestão
              </h3>
              <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                Construção de uma prática jurídica estável, previsível e funcional.
              </p>

              <div className="h-px w-full bg-gray-100 mb-8"></div>

              <ul className="space-y-6">
                {[
                  "Fluxo de trabalho após o fechamento do contrato.",
                  "Estruturação operacional do escritório.",
                  "Definição clara de papéis e responsabilidades.",
                  "Redução de retrabalho e de falhas operacionais.",
                  "Integração entre atendimento, execução e pós-contrato.",
                  "Construção de uma rotina previsível e sustentável."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A66B4A] mt-2.5 mr-4 flex-shrink-0 opacity-60"></span>
                    <span className="text-[#4A4A4A] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white uppercase tracking-wider rounded-full overflow-hidden bg-gradient-to-r from-[#A66B4A] via-[#5C3922] to-[#A66B4A] animate-gradient transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
              <span>Entre em contato</span>
              <WhatsAppIcon />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 7: Testimonials */}
      <section className="w-full bg-[#F4F3F0] py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.div
          className="container mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#A66B4A] mb-4 leading-tight">
              Alguns depoimentos que recebemos diariamente de nossos clientes no escritório.
            </h2>
            <p className="text-lg md:text-xl text-[#4A4A4A]">
              Experiências reais de clientes que vivenciaram o método na prática.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
              <div className="flex text-[#A66B4A] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-bold text-[#2A2A2A] text-lg mb-2">Excelente atendimento</h4>
              <p className="text-[#4A4A4A] leading-relaxed flex-grow">
                "Fomos super bem tratadas, doutora... muito bem, eu, minha mãe e os vizinhos. Gostamos muito do seu atendimento, muito bom e de verdade com a senhora. A gente sente confiança naquilo que a senhora transmitiu para a gente. E, assim, desde já eu agradeço de coração pela atenção que a senhora teve com a gente. Eu sou prova viva de que a senhora nos explicou super bem lá para o pessoal da casa onde o papai faleceu. Confiança maravilhosa!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
              <div className="flex text-[#A66B4A] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-bold text-[#2A2A2A] text-lg mb-2">Clareza e confiança</h4>
              <p className="text-[#4A4A4A] leading-relaxed flex-grow">
                "O dia em que a senhora não quiser mais advogar, a senhora tá feita. Não tem explicação de como a senhora é clara do começo ao fim. Não tem nem dúvida, eu só confio hahaha. Pode mandar a chave do PIX para amanhã..."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-6"></div>
              <div className="flex text-[#A66B4A] mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h4 className="font-bold text-[#2A2A2A] text-lg mb-2">Gratidão pela dedicação</h4>
              <p className="text-[#4A4A4A] leading-relaxed flex-grow">
                "A senhora merece todo o nosso carinho, doutora. Agradecemos a Deus por ter você ao nosso lado."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="w-full bg-[#FDFCF9] py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
        <motion.div
          className="container mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-[#A66B4A] mb-8 leading-tight">
            Pronto para parar de improvisar e começar a conduzir sua carreira com clareza e eficiência?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#4A4A4A] mb-16 leading-relaxed max-w-4xl mx-auto">
            Se você já se cansou de bater cabeça tentando encontrar um caminho para resolver esses problemas, entre em contato comigo para mais detalhes da mentoria e dar um passo seguro na sua trajetória jurídica.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white uppercase tracking-wider rounded-full overflow-hidden bg-gradient-to-r from-[#A66B4A] via-[#5C3922] to-[#A66B4A] animate-gradient transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base">
              <span>Entre em contato</span>
              <WhatsAppIcon />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
    </div>
  );
}
