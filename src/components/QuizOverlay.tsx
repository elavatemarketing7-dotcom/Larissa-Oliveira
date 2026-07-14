import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Star, Heart, MessageSquare, ChevronRight, Sparkles, Phone, ShieldCheck, X } from 'lucide-react';
import { QuizQuestion, QuizAnswers } from '../types';

interface QuizOverlayProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function QuizOverlay({ onClose, isOpen }: QuizOverlayProps) {
  // States: 'greeting' | 'quiz' | 'analyzing' | 'result'
  const [step, setStep] = useState<'greeting' | 'quiz' | 'analyzing' | 'result'>('greeting');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [analysisProgress, setAnalysisProgress] = useState<number>(0);
  const [analysisText, setAnalysisText] = useState<string>('Processando suas respostas...');

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: "Qual é o seu principal objetivo hoje?",
      options: [
        { text: "Transformar a estética do meu sorriso (Estética Dental / Harmonização)", value: "Estética do Sorriso & Harmonização" },
        { text: "Cuidar da saúde bucal do meu filho(a) (Odontopediatria Especializada)", value: "Odontopediatria Especializada" },
        { text: "Restaurar dentes, implantes ou tratar dores e sensibilidade", value: "Restauração, Implante ou Dores" },
        { text: "Alinhamento invisível ou correção ortodôntica premium", value: "Alinhador Invisível / Ortodontia" }
      ]
    },
    {
      id: 2,
      question: "Como você avalia a satisfação atual com o seu sorriso?",
      options: [
        { text: "Satisfeita, mas sei que pode melhorar com detalhes estéticos", value: "Satisfeita com margem de melhora" },
        { text: "Insegura, evito sorrir em fotos ou falar muito de perto", value: "Insegura ao sorrir em público" },
        { text: "Preciso de um tratamento completo (saúde + aparência)", value: "Necessidade de saúde + estética integrada" },
        { text: "Busco prevenção, limpeza e manutenção de alta qualidade", value: "Prevenção e manutenção premium" }
      ]
    },
    {
      id: 3,
      question: "O que você mais valoriza em uma consulta profissional?",
      options: [
        { text: "Atendimento 100% exclusivo com a própria especialista, sem pressa", value: "Exclusividade e atenção individual" },
        { text: "Procedimentos modernos, sem dor e com tecnologia de ponta", value: "Tecnologia, conforto e zero dor" },
        { text: "Naturalidade extrema nos resultados, sem parecer artificial", value: "Naturalidade refinada e segurança" },
        { text: "Ambiente acolhedor e seguro (especialmente para a família)", value: "Acolhimento e calma para a família" }
      ]
    },
    {
      id: 4,
      question: "Qual é a sua disponibilidade ideal para a sua primeira consulta?",
      options: [
        { text: "O mais rápido possível (esta semana)", value: "Imediata (esta semana)" },
        { text: "Próximos 15 dias", value: "Próximos 15 dias" },
        { text: "Dias de semana no período da manhã/tarde", value: "Dias de semana, horário comercial" },
        { text: "Apenas horários especiais ou flexíveis", value: "Horários especiais e flexibilidade" }
      ]
    }
  ];

  // Auto-running loading animation when 'analyzing' is triggered
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'analyzing') {
      setAnalysisProgress(0);
      const textStages = [
        'Analisando suas respostas...',
        'Calculando compatibilidade clínica...',
        'Formatando seu diagnóstico exclusivo...',
        'Pronto! Perfil qualificado encontrado.'
      ];
      
      let stageIdx = 0;
      interval = setInterval(() => {
        setAnalysisProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setStep('result');
            }, 300);
            return 100;
          }
          const nextProgress = prev + 5;
          // Dynamically change text based on progress stage
          if (nextProgress > 25 && nextProgress <= 50) stageIdx = 1;
          if (nextProgress > 50 && nextProgress <= 75) stageIdx = 2;
          if (nextProgress > 75) stageIdx = 3;
          setAnalysisText(textStages[stageIdx]);
          return nextProgress;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleSelectOption = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setStep('analyzing');
    }
  };

  const getWhatsAppMessage = () => {
    let msg = `Olá Dra. Larissa Oliveira! Respondi ao seu Quiz de Avaliação Personalizada no site:\n\n`;
    questions.forEach((q) => {
      msg += `*${q.question}*\n👉 R: ${answers[q.id] || 'Não respondido'}\n\n`;
    });
    msg += `Gostaria de agendar minha consulta exclusiva e enviar esta avaliação para análise!`;
    return encodeURIComponent(msg);
  };

  const whatsappBaseUrl = "https://api.whatsapp.com/message/HVLTJ63A64LOO1?autoload=1&app_absent=0&utm_source=ig";
  
  const handleSendEvaluation = () => {
    const textMsg = getWhatsAppMessage();
    window.open(`https://wa.me/send?phone=&text=${textMsg}`, '_blank');
    // Also redirect with default link if empty phone or use their official direct link
    window.open(`${whatsappBaseUrl}&text=${textMsg}`, '_blank');
  };

  const handleSimpleChat = () => {
    window.open(whatsappBaseUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-xl overflow-y-auto">
      {/* Container holding the quiz overlay content */}
      <div id="quiz-container-card" className="relative w-full max-w-md bg-brand-emerald-950/95 border border-brand-gold-500/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden premium-gradient-bg animate-fade-in my-auto">
        
        {/* Absolute Background Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-36 h-36 bg-brand-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-36 h-36 bg-brand-gold-700/5 rounded-full blur-3xl pointer-events-none" />

        {/* HEADER: ALWAYS shows Expert Name */}
        <div className="flex flex-col items-center justify-center mb-3 sm:mb-4 border-b border-brand-gold-500/15 pb-2 sm:pb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-500 animate-pulse-slow" />
            <h1 className="font-display font-semibold text-sm sm:text-base text-brand-gold-100 tracking-wider">
              DRA. LARISSA OLIVEIRA
            </h1>
            <Sparkles className="w-3.5 h-3.5 text-brand-gold-500 animate-pulse-slow" />
          </div>
          <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-gold-500/80 mt-0.5 font-sans">
            Dentist & Dental Office • Pediatria
          </p>
        </div>

        {/* PORTRAIT: Floating Expert avatar in a beautiful golden circular frame */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-brand-gold-500 overflow-hidden bg-brand-emerald-900 shadow-md">
              <img 
                src="https://i.imgur.com/Ikrd7Yz.png" 
                alt="Dra. Larissa Oliveira" 
                className="w-full h-full object-cover object-top scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 bg-brand-emerald-700 text-brand-gold-500 p-0.5 rounded-full border border-brand-gold-500 text-[9px] shadow">
              <Check className="w-2.5 h-2.5" />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STATE 1: GREETING SCREEN */}
          {step === 'greeting' && (
            <motion.div
              key="greeting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center"
            >
              <h2 className="font-serif text-lg sm:text-xl text-brand-gold-100 font-medium leading-tight mb-2">
                Sua beleza merece cuidado exclusivo.
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6 font-sans">
                Olá, sou a Dra. Larissa Oliveira. Desenvolvi um quiz rápido para entender suas necessidades estéticas ou pediátricas e guiar sua jornada de forma personalizada e segura.
              </p>

              <div className="space-y-2">
                {/* Button 1: Start Quiz */}
                <button
                  id="btn-start-quiz"
                  onClick={() => setStep('quiz')}
                  className="w-full bg-gradient-to-r from-brand-gold-600 to-brand-gold-500 hover:from-brand-gold-500 hover:to-brand-gold-600 text-brand-emerald-950 font-bold py-3 px-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 group text-xs sm:text-sm transform hover:scale-[1.01]"
                >
                  <span>Iniciar Avaliação de Sorriso (Quiz)</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Button 2: Direct to WhatsApp */}
                <button
                  id="btn-greeting-whatsapp"
                  onClick={handleSimpleChat}
                  className="w-full bg-transparent hover:bg-brand-emerald-900/30 text-white border border-emerald-500/30 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-xs sm:text-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Chamar direto no WhatsApp</span>
                </button>

                {/* Button 3: Direct to Website */}
                <button
                  id="btn-skip-to-site"
                  onClick={onClose}
                  className="w-full bg-brand-emerald-900/20 hover:bg-brand-emerald-900/40 text-brand-gold-100/80 hover:text-brand-gold-500 text-[10px] sm:text-xs font-medium py-2 rounded-lg transition-all"
                >
                  Pular e navegar pelo site oficial
                </button>
              </div>

              <div className="mt-4 flex items-center justify-center gap-3 text-[10px] text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-brand-gold-500" /> Segurança médica
                </span>
                <span className="text-gray-600">•</span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3 h-3 text-brand-gold-500" /> Naturalidade
                </span>
              </div>
            </motion.div>
          )}

          {/* STATE 2: INTERACTIVE QUIZ QUESTIONS */}
          {step === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col"
            >
              {/* Question progress */}
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-brand-gold-500">
                  Pergunta {currentQuestionIdx + 1} de {questions.length}
                </span>
                <span className="text-[10px] text-gray-400">
                  {Math.round(((currentQuestionIdx) / questions.length) * 100)}% concluído
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-brand-emerald-900 rounded-full mb-4 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-brand-gold-600 to-brand-gold-500 transition-all duration-300"
                  style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}
                />
              </div>

              {/* Current Question */}
              <h3 className="font-serif text-base sm:text-lg text-brand-gold-100 font-medium mb-4 leading-snug">
                {questions[currentQuestionIdx].question}
              </h3>

              {/* Answer options */}
              <div className="space-y-2 mb-4">
                {questions[currentQuestionIdx].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(questions[currentQuestionIdx].id, opt.value)}
                    className="w-full text-left bg-brand-emerald-900/30 hover:bg-brand-emerald-900/60 active:bg-brand-emerald-800/80 text-gray-200 border border-brand-gold-500/10 hover:border-brand-gold-500/30 rounded-xl p-3 transition-all duration-200 flex justify-between items-center group cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-sans leading-relaxed pr-2">{opt.text}</span>
                    <span className="w-4.5 h-4.5 rounded-full border border-brand-gold-500/20 flex items-center justify-center group-hover:bg-brand-gold-500/10 group-hover:border-brand-gold-500 transition-colors shrink-0">
                      <ChevronRight className="w-3 h-3 text-brand-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </button>
                ))}
              </div>

              {/* Action buttons footer inside Quiz */}
              <div className="flex justify-between items-center border-t border-brand-gold-500/10 pt-3 gap-4">
                {currentQuestionIdx > 0 ? (
                  <button
                    onClick={() => setCurrentQuestionIdx((p) => p - 1)}
                    className="text-[10px] sm:text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    ← Voltar pergunta
                  </button>
                ) : (
                  <div />
                )}
                
                <button
                  onClick={onClose}
                  className="text-[10px] sm:text-xs text-brand-gold-500/80 hover:text-brand-gold-500 transition-colors underline"
                >
                  Sair e Ver o Site
                </button>
              </div>
            </motion.div>
          )}

          {/* STATE 3: LOADING / ANALYSIS PROGRESS BAR */}
          {step === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-4"
            >
              <div className="w-12 h-12 border-3 border-brand-gold-500/20 border-t-brand-gold-500 rounded-full animate-spin mx-auto mb-4" />
              <h3 className="font-serif text-lg text-brand-gold-100 font-medium mb-1">
                {analysisText}
              </h3>
              
              <div className="w-full max-w-xs h-1.5 bg-brand-emerald-900 rounded-full mx-auto overflow-hidden mt-4 mb-2">
                <div 
                  className="h-full bg-gradient-to-r from-brand-gold-600 to-brand-gold-500 transition-all duration-100"
                  style={{ width: `${analysisProgress}%` }}
                />
              </div>
              <span className="text-[10px] text-brand-gold-500 font-mono tracking-widest uppercase">
                {analysisProgress}% ANALISANDO
              </span>
            </motion.div>
          )}

          {/* STATE 4: QUIZ RESULT SCREEN */}
          {step === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center flex flex-col items-center"
            >
              {/* Top compatible tag */}
              <div className="bg-brand-emerald-900 border border-brand-gold-500/30 text-brand-gold-500 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 inline-flex items-center gap-1 shadow-sm">
                <Star className="w-3 h-3 fill-brand-gold-500" />
                Perfil Compatível. Paciente ideal.
              </div>

              {/* Subtitle / Statement */}
              <h2 className="font-serif text-sm sm:text-base text-brand-gold-100 font-medium leading-snug mb-5 px-1">
                Com base nas suas respostas, o Método da Dra. Larissa Oliveira consegue entregar exatamente a naturalidade e segurança que você procura.
              </h2>

              {/* 3 Buttons Grouped compactly for mobile */}
              <div className="w-full space-y-2">
                {/* Button 1: Send Diagnostic */}
                <button
                  id="btn-send-evaluation"
                  onClick={handleSendEvaluation}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold py-2.5 px-3 rounded-lg shadow transition-all duration-300 flex items-center justify-center gap-2 group text-xs transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>1 - Enviar minha avaliação à Dra.</span>
                </button>

                {/* Button 2: Call WhatsApp without commitment */}
                <button
                  id="btn-call-whatsapp-no-commitment"
                  onClick={handleSimpleChat}
                  className="w-full bg-brand-emerald-900/40 hover:bg-brand-emerald-900/60 text-brand-gold-100 border border-brand-gold-500/20 font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold-500" />
                  <span>2 - CHAMAR NO WHATSAPP SEM COMPROMISSO</span>
                </button>

                {/* Button 3: Close and continue to site */}
                <button
                  id="btn-close-result-continue"
                  onClick={onClose}
                  className="w-full bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-medium py-1.5 px-3 rounded-lg transition-all duration-200 text-[10px]"
                >
                  3 - NÃO ENVIAR E CONTINUAR NO SITE
                </button>
              </div>

              <p className="text-[9px] text-gray-500 mt-2.5 leading-relaxed font-sans">
                Suas respostas serão enviadas via WhatsApp para agilizar sua triagem personalizada.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
