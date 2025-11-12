import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import { antimicrobianosModule } from './antimicrobianos_module.js'

const App = () => {
  // Estados principais
  const [currentView, setCurrentView] = useState('login')
  const [user, setUser] = useState(null)
  const [currentModule, setCurrentModule] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [showQuestionFeedback, setShowQuestionFeedback] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [userProgress, setUserProgress] = useState({
    xp: 1000,
    level: 2,
    streak: 5,
    completedLessons: []
  })
  const [scrollPosition, setScrollPosition] = useState(0)

  // Gerenciar histórico do navegador
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setCurrentView(event.state.view)
        if (event.state.view === 'dashboard') {
          setCurrentLesson(null)
          // Restaurar posição de scroll
          setTimeout(() => {
            window.scrollTo(0, scrollPosition)
          }, 0)
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [scrollPosition])

  // Atualizar histórico quando mudar de view
  useEffect(() => {
    if (currentView === 'dashboard') {
      window.history.pushState({ view: 'dashboard' }, '', '#dashboard')
    } else if (currentView === 'lesson') {
      window.history.pushState({ view: 'lesson' }, '', '#lesson')
    } else if (currentView === 'login') {
      window.history.pushState({ view: 'login' }, '', '#login')
    }
  }, [currentView])

  // Refs para inputs não controlados
  const loginUsernameRef = useRef(null)
  const loginPasswordRef = useRef(null)
  const registerNomeRef = useRef(null)
  const registerCpfRef = useRef(null)
  const registerDataNascimentoRef = useRef(null)
  const registerTelefoneRef = useRef(null)
  const registerEmailRef = useRef(null)
  const registerLoginRef = useRef(null)
  const registerAtividadeRef = useRef(null)
  const registerSenhaRef = useRef(null)
  const registerConfirmarSenhaRef = useRef(null)

  // Dados educacionais completos - MICROBIOLOGIA EXPANDIDA + ANTIBIOGRAMA TÉCNICO EXPANDIDO + ANTIBIOTICOTERAPIA AMBULATORIAL
  const modulesData = {
    microbiologia: {
      title: "Fundamentos da Microbiologia",
      description: "Aprenda os conceitos essenciais da microbiologia clínica",
      lessons: [
        {
          id: 1,
          title: "Introdução à Coloração de Gram",
          duration: "8 min",
          xp: 50,
          sections: [
            {
              title: "O que é a Coloração de Gram?",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Conceito Fundamental</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>coloração de Gram</strong>, também conhecida como bacterioscopia, é uma das técnicas mais importantes na microbiologia clínica. 
                    Desenvolvida pelo médico dinamarquês Hans Christian Gram em 1884, esta técnica revolucionou 
                    o diagnóstico microbiológico.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Em geral, a coloração de Gram permite a categorização dos microrganismos observados em 
                    <strong>dois grandes grupos</strong>: gram-positivos e gram-negativos. As bactérias gram-positivas 
                    retêm o cristal violeta e aparecem <span style="color: #7c3aed; font-weight: bold;">roxas</span> 
                    na coloração de Gram; as bactérias gram-negativas não retêm o cristal violeta, mas absorvem 
                    o contra-corante safranina e, portanto, aparecem <span style="color: #dc2626; font-weight: bold;">rosas</span>.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Esta diferenciação é crucial porque bactérias gram-positivas e gram-negativas respondem 
                    de forma diferente aos antibióticos, permitindo uma orientação terapêutica mais precisa.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal função da coloração de Gram na prática clínica?",
                options: [
                  "Identificar a espécie exata da bactéria em minutos",
                  "Fornecer uma orientação rápida para o manejo clínico empírico de infecções bacterianas",
                  "Determinar a suscetibilidade do microrganismo aos antibióticos"
                ],
                correct: 1,
                explanation: "A coloração de Gram fornece uma orientação rápida e fundamental para o manejo empírico de infecções, permitindo ao clínico escolher antibióticos apropriados antes dos resultados de cultura e antibiograma."
              }
            },
            {
              title: "Procedimentos",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧪 Etapas do Procedimento</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A primeira etapa consiste na aplicação do <strong>corante violeta de cristal</strong> sobre a lâmina. 
                    Em seguida a lâmina é mergulhada em solução de <strong>iodo (lugol)</strong> que atua como mordente, 
                    aumentando a afinidade entre o corante e o material a ser corado, formando um complexo cristal violeta-iodo.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Depois realiza-se uma <strong>descoloração rápida</strong> (questão de segundos) com acetona ou álcool 
                    onde as bactérias Gram-negativas perdem o complexo cristal violeta-iodo e ficam incolores devido à sua 
                    parede celular mais fina e rica em lipídios.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Por último, aplica-se a <strong>fucsina básica</strong> que cora todas as bactérias presentes na lâmina. 
                    As bactérias Gram-negativas, que perderam o primeiro corante, ficam vermelhas ou rosas pela ação da fucsina.
                  </p>
                </div>
              `,
              question: {
                text: "Na primeira etapa da coloração de Gram:",
                options: [
                  "A violeta de cristal cora todas as bactérias em roxo",
                  "A fucsina ou safranina cora as bactérias Gram negativas.",
                  "O lugol garante que as bactérias Gram positivas vão ficar na cor violeta"
                ],
                correct: 0,
                explanation: "Na primeira etapa, o corante violeta de cristal cora todas as bactérias presentes na lâmina em roxo/violeta, independentemente de serem Gram-positivas ou Gram-negativas. A diferenciação ocorre nas etapas subsequentes."
              }
            },
            {
              title: "Etapa Crítica: Descoloração",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Passo Crítico</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Deve-se realizar uma <strong>descoloração rápida</strong> (questão de segundos) com acetona ou álcool. 
                    A etapa de descoloração é crítica e deve ser cronometrada corretamente; se o agente descolorante 
                    for deixado por muito tempo, o corante cristal violeta será removido tanto das células gram-positivas 
                    quanto das gram-negativas.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🕐 Timing é Fundamental</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Descoloração muito rápida: bactérias gram-negativas podem reter o cristal violeta</li>
                    <li>Descoloração muito lenta: bactérias gram-positivas podem perder o corante</li>
                    <li>Resultado: interpretação incorreta da coloração</li>
                  </ul>
                </div>
              `,
              question: {
                text: "No procedimento da coloração de Gram, qual passo é considerado crítico e, se realizado por muito tempo, pode descolorir até mesmo as bactérias gram-positivas?",
                options: [
                  "A aplicação do cristal violeta.",
                  "A imersão no mordente (iodo de Gram).",
                  "A descoloração com álcool ou acetona."
                ],
                correct: 2,
                explanation: "A etapa de descoloração com álcool ou acetona é o passo mais crítico. Se for muito longa, pode remover o complexo cristal violeta-iodo das bactérias gram-positivas, levando a uma interpretação incorreta como gram-negativas."
              }
            }
          ]
        },
        {
          id: 2,
          title: "Espécimes Clínicos",
          duration: "8 min",
          xp: 45,
          sections: [
            {
              title: "Espécimes de Locais Estéreis",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #15803d; margin-bottom: 15px;">🏥 Espécimes de Locais Estéreis</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    São locais anatômicos nos quais as bactérias não estão presentes na ausência de infecção 
                    (Ex: líquor, líquidos de serosas, líquido sinovial, tecido de órgão parenquimatoso). 
                    Qualquer bactéria detectada em espécime de local estéril deve ser considerada significativa 
                    e potencialmente causadora de infecção.
                  </p>
                </div>
              `,
              question: {
                text: "Sobre os espécimes de local estéril é correto afirmar:",
                options: [
                  "Um único organismo visualizado no Gram de líquor pode ser indicativo de meningite bacteriana, exigindo intervenção imediata.",
                  "Um estreptococo em cultura de saliva é altamente significativo de infecção por essa bactéria",
                  "Se o local é estéril, não se espera nunca encontrar uma infecção nele."
                ],
                correct: 0,
                explanation: "Em locais normalmente estéreis como o líquor, a visualização de qualquer bactéria no Gram é altamente significativa e pode indicar meningite bacteriana, uma emergência médica que requer intervenção imediata."
              }
            },
            {
              title: "Limitações",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Limitações</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A coloração de Gram negativa (sem visualização de bactérias) não exclui infecção por diversos motivos:
                  </p>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Baixa concentração bacteriana (abaixo do limite de detecção)</li>
                    <li>Uso prévio de antibióticos</li>
                    <li>Presença de microrganismos não visualizáveis pelo Gram</li>
                    <li>Problemas técnicos na coleta ou processamento</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Em um paciente em uso de amoxacilina com clavulanato espera-se sempre que:",
                options: [
                  "A amostra esteja com bactéria Gram positiva",
                  "A bactéria visualizada no Gram já esteja morta",
                  "A ausência de bactéria não significa ausência de infecção."
                ],
                correct: 2,
                explanation: "O uso prévio de antibióticos pode reduzir significativamente a carga bacteriana ou eliminar completamente as bactérias da amostra, resultando em um Gram negativo mesmo na presença de infecção ativa."
              }
            },
            {
              title: "Espécimes de Locais Não Estéreis",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🦠 Espécimes de Locais Não Estéreis</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    São espécimes de locais anatômicos com presença normal de microrganismos colonizadores ("microbiota normal"). 
                    Exemplos: escarro, swab de garganta, feridas superficiais, secreção de genitais. Geralmente contêm células 
                    humanas (epiteliais e glóbulos brancos) que são coradas pela fucsina/safranina (rosa ou vermelho).
                  </p>
                </div>
              `,
              question: {
                text: "Em um paciente com uma ferida por mordida de cão seguramente podemos afirmar que:",
                options: [
                  "Se a cultura mostrar estreptococos e bacilos certamente são infectantes por são agentes comuns na boca dos caninos.",
                  "Se a amostra for colhida após uma importante higiene local, certamente o Gram será muito útil.",
                  "O Gram da secreção superficial é de pouca valia clínica a revelia do resultado."
                ],
                correct: 2,
                explanation: "Em feridas superficiais, especialmente por mordida, o Gram tem valor limitado devido à presença de microbiota normal e contaminantes. A interpretação clínica deve considerar outros fatores além do resultado do Gram."
              }
            },
            {
              title: "Critérios para Escarro",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🫁 Avaliação de Escarro</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A qualidade da amostra de escarro é fundamental para um diagnóstico microbiológico confiável. 
                    Uma amostra inadequada pode levar a resultados falso-negativos ou à identificação de 
                    microrganismos colonizadores ao invés de patógenos verdadeiros.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">📊 Critérios de Murray-Washington</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Qualidade</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Neutrófilos/campo</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Células epiteliais/campo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #059669;">Excelente</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">&gt;25</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">&lt;10</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #d97706;">Aceitável</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">10-25</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">10-25</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #dc2626;">Inadequada</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">&lt;10</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">&gt;25</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Dica Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Amostras inadequadas devem ser rejeitadas e uma nova coleta solicitada, exceto em 
                    situações clínicas específicas onde a recoleta não é possível.
                  </p>
                </div>
              `,
              question: {
                text: "Como a qualidade de uma amostra de escarro é tipicamente avaliada?",
                options: [
                  "Pela presença de um único tipo de morfologia bacteriana, indicando infecção pura.",
                  "Pela alta contagem de leucócitos e baixa contagem de células epiteliais.",
                  "Pela ausência total de células humanas na amostra."
                ],
                correct: 1,
                explanation: "Uma amostra de escarro de alta qualidade é caracterizada por um alto número de leucócitos (indicativo de inflamação) e um baixo número de células epiteliais (indicativo de menor contaminação com saliva)."
              }
            },
            {
              title: "Amostras de Locais Estéreis vs. Não Estéreis",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🏥 Locais Estéreis vs. Não Estéreis</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A interpretação do Gram depende fundamentalmente da origem da amostra. Em <strong>locais estéreis</strong> 
                    (ex: líquido cefalorraquidiano, sangue, líquido pleural), qualquer bactéria visualizada é potencialmente 
                    significativa. Em <strong>locais não estéreis</strong> (ex: trato respiratório, pele), a presença de 
                    bactérias deve ser interpretada no contexto da microbiota normal e da resposta inflamatória.
                  </p>
                </div>
              `,
              question: {
                text: "Qual a principal diferença na interpretação de um Gram de líquido pleural vs. um de orofaringe?",
                options: [
                  "Nenhuma, a interpretação é a mesma.",
                  "No líquido pleural, qualquer bactéria é significativa, enquanto na orofaringe, deve-se considerar a microbiota normal.",
                  "Apenas bactérias gram-negativas são relevantes no líquido pleural."
                ],
                correct: 1,
                explanation: "O líquido pleural é um sítio estéril, então qualquer bactéria é um achado crítico. A orofaringe possui uma microbiota comensal rica, e os achados devem ser correlacionados com a clínica e a presença de inflamação."
              }
            }
          ]
        },
        {
          id: 3,
          title: "Limitações da Coloração de Gram",
          duration: "6 min",
          xp: 40,
          sections: [
            {
              title: "Organismos Não Visualizáveis",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Limitações Importantes</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Embora a coloração de Gram seja extremamente útil, é importante reconhecer suas limitações. 
                    Alguns microrganismos clinicamente importantes <strong>não podem ser visualizados</strong> 
                    ou são mal visualizados por esta técnica.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🦠 Organismos Problemáticos</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Mycoplasma:</strong> Não possui parede celular</li>
                    <li><strong>Chlamydia:</strong> Parasita intracelular obrigatório</li>
                    <li><strong>Rickettsia:</strong> Muito pequena para visualização</li>
                    <li><strong>Legionella:</strong> Cora-se mal com Gram</li>
                    <li><strong>Mycobacterium:</strong> Parede cerosa resiste à coloração</li>
                  </ul>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Alternativas Diagnósticas</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Para estes organismos, são necessárias técnicas especiais como coloração ácido-resistente, 
                    culturas específicas, testes de antígenos ou métodos moleculares.
                  </p>
                </div>
              `,
              question: {
                text: "Qual dos seguintes organismos não pode ser visualizado pela coloração de Gram por não possuir parede celular?",
                options: [
                  "Streptococcus pneumoniae.",
                  "Espécies de Mycoplasma.",
                  "Espécies de Candida."
                ],
                correct: 1,
                explanation: "Mycoplasma não possui parede celular, que é a estrutura alvo da coloração de Gram. Portanto, não pode ser classificado como gram-positivo ou gram-negativo por este método."
              }
            },
            {
              title: "Agentes Não Bacterianos",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🍄 Nem Tudo é Bactéria</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Nem tudo que se cora pelo Gram é bactéria. Agentes não bacterianos podem corar de roxo 
                    (como espécies de <strong>Candida</strong>), mas geralmente são diferenciados pela morfologia:
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔍 Características Morfológicas</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Leveduras:</strong> estruturas ovais maiores que bactérias, por vezes com brotamentos</li>
                    <li><strong>Hifas:</strong> estruturas filamentosas ramificadas</li>
                    <li><strong>Esporos:</strong> estruturas refringentes</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Na coloração de Gram, grandes estruturas ovais, por vezes com brotamentos provavelmente se trata de:",
                options: [
                  "Candida",
                  "Aspergillus",
                  "Histoplasma"
                ],
                correct: 0,
                explanation: "Estruturas ovais maiores que bactérias, frequentemente com brotamentos, são características morfológicas típicas de leveduras, especialmente Candida spp., que podem ser visualizadas na coloração de Gram."
              }
            },
            {
              title: "Organismos Gram-Variáveis",
              content: `
                <div style="background: #fef9c3; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #ca8a04; margin-bottom: 15px;">🤔 Gram-Variáveis</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Alguns organismos, como <strong>Gardnerella vaginalis</strong> e <strong>Acinetobacter spp.</strong>, 
                    podem apresentar coloração inconsistente, aparecendo como gram-positivos e gram-negativos na mesma lâmina. 
                    Isso ocorre por características da parede celular ou por fatores técnicos.
                  </p>
                </div>
              `,
              question: {
                text: "Qual bactéria é classicamente descrita como gram-variável e associada à vaginose bacteriana?",
                options: [
                  "Lactobacillus spp.",
                  "Gardnerella vaginalis.",
                  "Candida albicans."
                ],
                correct: 1,
                explanation: "Gardnerella vaginalis é a principal bactéria associada à vaginose bacteriana e é caracteristicamente gram-variável, o que pode ser uma pista diagnóstica importante."
              }
            }
          ]
        },
        {
          id: 4,
          title: "Morfologias e Arranjos Bacterianos",
          duration: "4 min",
          xp: 20,
          sections: [
            {
              title: "Morfologias Bacterianas",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Morfologias Bacterianas</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As bactérias apresentam diferentes formas morfológicas que auxiliam na sua identificação:
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Principais Morfologias</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Cocos:</strong> Bactérias de forma esférica ou ovóide. Exemplos: Staphylococcus, Streptococcus, Enterococcus.</li>
                    <li><strong>Bacilos:</strong> Bactérias em forma de bastonete. Exemplos: Escherichia coli, Klebsiella, Pseudomonas.</li>
                    <li><strong>Cocobacilos:</strong> Forma intermediária entre cocos e bacilos. Exemplos: Haemophilus, Bordetella.</li>
                    <li><strong>Curvas:</strong> Bacilos com curvatura em forma de vírgula ou S. Exemplos: Vibrio, Campylobacter.</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Dessas, as morfologias de maior impacto clínico são as duas primeiras.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das espécies abaixo são cocos?",
                options: [
                  "Staphylococcus aureus.",
                  "Haemophilus influenzae",
                  "Vibrio vulníficus"
                ],
                correct: 0,
                explanation: "Staphylococcus aureus são cocos (bactérias de forma esférica). Haemophilus influenzae são cocobacilos e Vibrio vulníficus são bacilos curvos."
              }
            },
            {
              title: "Arranjos Bacterianos",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #b45309; margin-bottom: 15px;">🔗 Arranjos Bacterianos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As bactérias podem ser descritas de acordo com seu arranjo característico quando observadas ao microscópio:
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">📊 Tipos de Arranjos</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Em cadeias:</strong> células bacterianas conectadas em sequência linear (típico de Streptococcus, Enterococcus)</li>
                    <li><strong>Em aglomerados:</strong> células agrupadas como cachos de uva (típico de Staphylococcus)</li>
                    <li><strong>Em pares (diplococos):</strong> células aos pares (típico de Neisseria, Streptococcus pneumoniae)</li>
                    <li><strong>Em tétrades:</strong> grupos de quatro células (típico de Micrococcus)</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Importante</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    O uso prévio de antibióticos pode induzir morfologia atípica nas bactérias. Bacilos Gram negativos podem se tornar longos e filamentosos quando expostas a antibióticos beta-lactâmicos, pois estes interferem na síntese da parede celular.
                  </p>
                </div>
              `,
              question: {
                text: "Sobre uma lâmina com cocos Gram positivos em cadeia, é certo afirmar:",
                options: [
                  "Certamente é um Streptococcus.",
                  "Arranjo em cadeia não é característico de nenhuma espécie de cocos",
                  "Possivelmente é um Streptococcus, Enterococcus"
                ],
                correct: 2,
                explanation: "Cocos Gram positivos em cadeia podem ser Streptococcus ou Enterococcus, entre outros gêneros menos comuns. Não se pode afirmar com certeza apenas pela morfologia."
              }
            },
          ]
        },
        {
          id: 5,
          title: "Gram Positivos",
          duration: "18 min",
          xp: 90,
          sections: [
            {
              title: "Cocos Gram Positivos em Cachos",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #166534; margin-bottom: 15px;">🍇 Cocos Gram Positivos em Cachos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Cocos Gram positivos em cachos são geralmente do gênero Staphylococcus.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">💡 Dica Mnemônica</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    <strong>"EstaFILO não forma fila (cadeia)"</strong>
                  </p>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A disposição em cachos ocorre devido ao padrão de divisão celular em múltiplos planos. Outros Cocos Gram Positivos em Cachos: Micrococcus, Dermacoccus; Alloiococcus; Rothia, Aerococcus.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Estes gêneros são menos frequentes em amostras clínicas e geralmente representam contaminação ou colonização.
                  </p>
                </div>
              `,
              question: {
                text: "Se você ligar para o laboratório e for informado que o Gram da hemocultura identificou um coco Gram positivo em cachos o que é razoável pensar:",
                options: [
                  "Trata-se de provável contaminação de amostra por bactéria de pele.",
                  "Deve-se ficar atento devido a possibilidade de Staphylococcus aureus que é um agente agressivo.",
                  "A presença de cocos em cachos sugere o gênero Staphylococcus, portanto, de baixa importância clínica."
                ],
                correct: 1,
                explanation: "Cocos Gram positivos em cachos em hemocultura sugerem Staphylococcus, que pode incluir S. aureus, um patógeno agressivo. É importante ficar atento e aguardar identificação e antibiograma."
              }
            },
            {
              title: "Cocos Gram Positivos em Cadeia",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⛓️ Cocos Gram Positivos em Cadeia</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Cocos Gram positivos que se organizam em cadeias são geralmente do gênero Streptococcus ou Enterococcus.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">💡 Dica Mnemônica</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    Sempre lembrar da dica mnemônica anterior: <strong>"EstaFILO não forma fila (cadeia)"</strong>. Se for cadeia, provavelmente é Streptococcus.
                  </p>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Outros gêneros em cadeia são: Leuconostoc, Abiotrophia, Granulicatella, Pediococcus
                  </p>
                </div>
              `,
              question: {
                text: "Um paciente com três hemoculturas positivas para cocos Gram positivos em cadeia e em franca instabilidade hemodinâmica, trata-se de um caso de:",
                options: [
                  "Paciente séptico por Streptococcus ou Enterococcus devendo-se imediatamente investigar possíveis focos como endocardite infecciosa.",
                  "Bactérias de fácil tratamento com betalactâmicos, portanto, não é grave.",
                  "Exceção, já que cocos Gram positivos em cadeia não costumam fazer bacteremia."
                ],
                correct: 0,
                explanation: "Três hemoculturas positivas com cocos Gram positivos em cadeia em paciente instável sugere sepse por Streptococcus ou Enterococcus. Deve-se investigar focos como endocardite infecciosa imediatamente."
              }
            },
            {
              title: "Streptococcus pneumoniae",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Pneumococo</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>Streptococcus pneumoniae</strong> apresenta características morfológicas distintivas 
                    que auxiliam na sua identificação presuntiva. É um dos patógenos mais importantes em 
                    infecções respiratórias e meningites.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Características Morfológicas</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Forma:</strong> Cocos gram-positivos</li>
                    <li><strong>Arranjo:</strong> Aos pares (diplococos) ou cadeias curtas</li>
                    <li><strong>Formato:</strong> Lanceolados (formato de lança)</li>
                    <li><strong>Cápsula:</strong> Frequentemente visível como halo claro</li>
                    <li><strong>Localização:</strong> Pode ser intracelular em neutrófilos</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A identificação rápida do pneumococo é crucial para o manejo de pneumonias e meningites, 
                    especialmente em pacientes imunocomprometidos ou idosos.
                  </p>
                </div>
              `,
              question: {
                text: "Um achado de cocos gram-positivos em pares (diplococos), com formato ligeiramente alongado, é considerado patognomônico para qual organismo?",
                options: [
                  "Staphylococcus aureus.",
                  "Streptococcus pneumoniae.",
                  "Espécies de Enterococcus."
                ],
                correct: 1,
                explanation: "O achado de diplococos gram-positivos lanceolados (formato de lança) é uma característica clássica e patognomônica de Streptococcus pneumoniae, auxiliando na sua rápida identificação presuntiva."
              }
            },
            {
              title: "Bacilos Gram Positivos",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #166534; margin-bottom: 15px;">🦠 Bacilos Gram Positivos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Esse é um grupo bastante heterogêneo compreendendo bactérias com formas diversas.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">📊 Tipos Morfológicos</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Grandes com extremidades quadradas:</strong> Clostridium (anaeróbio), Bacillus (aeróbio)</li>
                    <li><strong>Tamanho médio:</strong> Corynebacterium, Listeria</li>
                    <li><strong>Pequenos em paliçada:</strong> Cutibacterium, Gardnerella</li>
                    <li><strong>Filamentosos:</strong> Nocardia (aeróbica), Actinomyces (anaeróbica)</li>
                  </ul>
                  <p style="font-size: 14px; line-height: 1.5; margin-top: 10px;">
                    <strong>Mas não fique confuso:</strong> para o clínico geral, esse grupo é menos importante clinicamente.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Desse grupo a <strong>Listeria monocytogenes</strong> e a <strong>Nocardia</strong> podem causar 
                    infecções graves em imunossuprimidos. Já o <strong>Actinomyces</strong> comumente faz abscessos 
                    firmes e indolores em geral em abdome.
                  </p>
                </div>
              `,
              question: {
                text: "Entre as bactérias citadas, qual associação entre microrganismo e característica clínica está correta?",
                options: [
                  "Corynebacterium — causa abscessos firmes e indolores em abdome.",
                  "Listeria monocytogenes — pode causar infecções graves em imunossuprimidos.",
                  "Actinomyces — provoca infecções agudas e disseminadas em pacientes hospitalizados."
                ],
                correct: 1,
                explanation: "Listeria monocytogenes pode causar infecções graves em imunossuprimidos, incluindo meningite e bacteremia. Actinomyces causa abscessos firmes e indolores (não Corynebacterium), e geralmente causa infecções crônicas localizadas (não agudas e disseminadas)."
              }
            },
            {
              title: "Bacilos Ramificados: Nocardia e Actinomyces",
              content: `
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #374151; margin-bottom: 15px;">🌿 Bacilos Ramificados</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A observação de bacilos gram-positivos com filamentos ramificados é uma pista importante. 
                    <strong>Nocardia spp.</strong> são aeróbios e parcialmente ácido-resistentes, enquanto 
                    <strong>Actinomyces spp.</strong> são anaeróbios e não ácido-resistentes. Essa distinção é 
                    crucial para o diagnóstico de nocardiose e actinomicose.
                  </p>
                </div>
              `,
              question: {
                text: "A presença de bacilos gram-positivos ramificados em uma amostra clínica sugere principalmente quais gêneros?",
                options: [
                  "Listeria ou Corynebacterium.",
                  "Nocardia (aeróbio) ou Actinomyces (anaeróbio).",
                  "Clostridium ou Bacillus."
                ],
                correct: 1,
                explanation: "A morfologia de bacilos gram-positivos ramificados é característica de Nocardia e Actinomyces, e a coloração de Ziehl-Neelsen modificada pode ajudar a diferenciá-los (Nocardia é parcialmente ácido-resistente)."
              }
            },
            {
              title: "Suspeita de Gangrena Gasosa",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">☠️ Gangrena Gasosa</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Um achado de alerta no Gram de amostras de tecidos moles é a presença de bacilos gram-positivos 
                    grandes (em forma de caixa de trem ou 'boxcar') na <strong>ausência de células inflamatórias (leucócitos)</strong>. 
                    Isso deve levantar a suspeita de gangrena gasosa, uma infecção necrosante causada por 
                    <strong>Clostridium perfringens</strong>, que produz toxinas que lisam os leucócitos.
                  </p>
                </div>
              `,
              question: {
                text: "Em uma coloração de Gram de tecido mole, a presença de bacilos gram-positivos sem a presença de leucócitos deve levantar a suspeita de qual condição?",
                options: [
                  "Infecção por Listeria.",
                  "Gangrena gasosa (causada por Clostridium).",
                  "Tuberculose (causada por Mycobacterium)."
                ],
                correct: 1,
                explanation: "A ausência de leucócitos apesar da presença de bactérias é um sinal de alarme para gangrena gasosa, pois as toxinas produzidas por Clostridium perfringens destroem as células de defesa."
              }
            },
          ]
        },
        {
          id: 6,
          title: "Gram Negativos",
          duration: "15 min",
          xp: 75,
          sections: [
            {
              title: "Cocos Gram Negativos",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚪ Cocos Gram Negativos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Nesse grupo temos o gênero <strong>Neisseria</strong> com as seguintes espécies:
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🦠 Principais Espécies</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Neisseria meningitidis</strong> (meningococo) - causa meningite</li>
                    <li><strong>N. gonorrhoeae</strong> (gonococo) - causa gonorreia</li>
                  </ul>
                  <p style="font-size: 14px; line-height: 1.5; margin-top: 10px;">
                    Ambas podem causar infecções com repercussão sistêmica (sepse). Geralmente aparecem como 
                    <strong>diplococos</strong> (pares) com aspecto de "grão de café".
                  </p>
                  <p style="font-size: 14px; line-height: 1.5; margin-top: 10px;">
                    Além dessas temos a <strong>Moraxella catarrhalis</strong> que pode levar a infecções respiratórias, 
                    principalmente em pacientes com DPOC. Frequentemente presente como diplococos ou em pequenos grupos.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das alternativas corresponde corretamente a uma característica dos cocos Gram negativos descritos?",
                options: [
                  "Neisseria meningitidis e N. gonorrhoeae aparecem como bacilos curtos e isolados.",
                  "Moraxella catarrhalis é típica de infecções respiratórias em pacientes com DPOC.",
                  "As Neisserias nunca causam infecções sistêmicas."
                ],
                correct: 1,
                explanation: "Moraxella catarrhalis está associada a infecções respiratórias, especialmente em pacientes com DPOC. As Neisserias aparecem como diplococos (não bacilos) e podem causar infecções sistêmicas graves."
              }
            },
            {
              title: "Neisseria",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">☕ Diplococos Gram-Negativos</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Cocos gram-negativos são menos comuns, e sua visualização é muito significativa. 
                    <strong>Neisseria spp.</strong> (como N. meningitidis e N. gonorrhoeae) classicamente se apresentam 
                    como <strong>diplococos gram-negativos</strong> com lados achatados, lembrando grãos de café. 
                    A observação de diplococos intracelulares em neutrófilos é altamente sugestiva de infecção por Neisseria.
                  </p>
                </div>
              `,
              question: {
                text: "Qual a aparência típica das espécies de Neisseria na coloração de Gram?",
                options: [
                  "Cocos gram-positivos em cachos.",
                  "Bacilos gram-negativos finos.",
                  "Cocos gram-negativos em pares (diplococos)."
                ],
                correct: 2,
                explanation: "As espécies de Neisseria são caracterizadas por sua morfologia de diplococos gram-negativos, frequentemente com formato de 'grão de café' e localização intracelular em leucócitos."
              }
            },
            {
              title: "Bacilos Gram Negativos de Tamanho Variável",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">📏 Bacilos Gram Negativos de Tamanho Variável</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Podem ser de curto a longo, pleomórficos, roliços ou finos. É o caso das <strong>Enterobacteriaceae</strong> 
                    (Escherichia, Klebsiella, Enterobacter, etc.) e dos <strong>Anaeróbios</strong> (Bacteroides, Prevotella, Fusobacterium).
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    As <strong>Enterobacteriaceae</strong> são de extremada relevância clínica. Têm seu habitat natural 
                    dentro do abdome e estão envolvidas em praticamente todas as infecções dessa área. São importantes 
                    causadoras de sepse liberando endotoxinas.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das afirmações abaixo sobre os bacilos Gram negativos está correta?",
                options: [
                  "As Enterobacteriaceae raramente estão associadas a infecções abdominais.",
                  "Bacteroides e Prevotella são exemplos de bacilos Gram positivos anaeróbios.",
                  "As Enterobacteriaceae habitam o abdome e podem causar sepse com liberação de endotoxinas."
                ],
                correct: 2,
                explanation: "As Enterobacteriaceae têm habitat natural no abdome e são importantes causadoras de infecções abdominais e sepse com liberação de endotoxinas. Bacteroides e Prevotella são Gram negativos (não positivos) anaeróbios."
              }
            },
            {
              title: "Bacilos Gram Negativos Pequenos e Curvos",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">🌊 Bacilos Gram Negativos Pequenos e Curvos</h3>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔬 Bacilos Pequenos</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Haemophilus</strong> - causa infecções respiratórias, incluindo sinusites, otite e pneumonias</li>
                    <li><strong>Acinetobacter</strong> - associado a infecções hospitalares. O A. baumannii é frequentemente altamente resistente a antibióticos</li>
                    <li><strong>Prevotella e Porphyromonas</strong> - anaeróbios orais</li>
                  </ul>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🌀 Bacilos Curvos</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Vibrio cholerae</strong> - causador da cólera, bastante móvel, geralmente estão isolados, mas podem formar pares em "S"</li>
                    <li><strong>Campylobacter jejuni</strong> - delgados, curvos ou em forma de "S" ou "asa de gaivota". Causa comum de gastroenterite bacteriana</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual das alternativas descreve corretamente um dos bacilos Gram-negativos citados?",
                options: [
                  "Acinetobacter baumannii é um agente comunitário, geralmente sensível à maioria dos antibióticos.",
                  "Vibrio cholerae é móvel e pode causar cólera, apresentando-se em forma de \"S\".",
                  "Haemophilus é um bacilo Gram-positivo frequentemente associado a infecções urinárias."
                ],
                correct: 1,
                explanation: "Vibrio cholerae é móvel, causa cólera e pode apresentar-se em forma de \"S\". Acinetobacter baumannii é hospitalar e frequentemente resistente (não sensível). Haemophilus é Gram-negativo (não positivo) e causa infecções respiratórias (não urinárias)."
              }
            },
            {
              title: "Bacilos Gram-Negativos Curvos",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🌙 Bacilos Curvos</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A morfologia curva de bacilos gram-negativos pode sugerir certos patógenos. <strong>Vibrio spp.</strong> 
                    tem formato de vírgula, <strong>Campylobacter spp.</strong> tem formato de 'asa de gaivota' ou 'S', 
                    e <strong>Helicobacter spp.</strong> é espiralado. Essas pistas morfológicas são importantes para 
                    orientar a cultura em meios específicos.
                  </p>
                </div>
              `,
              question: {
                text: "Um bacilo gram-negativo com formato de 'asa de gaivota' é sugestivo de qual gênero?",
                options: [
                  "Vibrio",
                  "Campylobacter",
                  "Helicobacter"
                ],
                correct: 1,
                explanation: "A morfologia em 'asa de gaivota' ou em 'S' é uma característica clássica do gênero Campylobacter, especialmente C. jejuni, um importante causador de gastroenterite."
              }
            },
          ]
        },
        {
          id: 7,
          title: "Provas de Bancada",
          duration: "10 min",
          xp: 50,
          sections: [
            {
              title: "A prova da catalase",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧪 A Prova da Catalase</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Para distinguir os grupos e até espécies de bactérias, são realizadas provas enzimáticas. 
                    Algumas dessas provas são tão corriqueiras que se tornaram prática comum da linguagem médica. 
                    Frequentemente falamos "tem um estafilo coagulase positiva na hemocultura" ou "temos um não 
                    fermentador na cultura do abscesso abdominal".
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Catalase em Cocos Gram Positivos</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    No caso dos cocos Gram positivos, duas provas são essenciais. A primeira é a <strong>catalase</strong>. 
                    Ela distingue entre o grupo dos <strong>estafilococos</strong> (prova da catalase positiva) e dos 
                    <strong>estreptococos/enterococos</strong> (catalase negativa).
                  </p>
                </div>
              `,
              question: {
                text: "O laboratório te liga para avisar de um resultado crítico: Doutor seu paciente tem crescimento em três hemoculturas. Trata-se de um coco Gram positivo em cachos. Sobre essa bactéria, qual afirmação é adequada?",
                options: [
                  "Trata-se, provavelmente, de um agente catalase positiva.",
                  "Espera-se que seja um Enterococcus faecalis.",
                  "Certamente trata-se de um S aureus."
                ],
                correct: 0,
                explanation: "Cocos Gram positivos em cachos são tipicamente do gênero Staphylococcus, que são catalase positivos. Não podemos afirmar com certeza que é S. aureus sem a prova da coagulase, e Enterococcus não forma cachos."
              }
            },
            {
              title: "A prova da coagulase",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #b45309; margin-bottom: 15px;">🔬 A Prova da Coagulase</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Sabe-se que no gênero Staphylococcus, a espécie <strong>S. aureus</strong> é habitualmente produtora 
                    de quadros mais graves, sendo, portanto, de maior importância clínica. Para distinguir essa espécie 
                    de outras "não aureus" existe a prova da coagulase. Dessa forma, todo <strong>S. aureus é um coagulase positiva</strong>.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Alerta: Não Confunda!</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    No meio de siglas e nomenclaturas, é comum a confusão. Existe uma outra classificação muito popular 
                    para o S. aureus que se refere a sua capacidade de resistir à meticilina. Assim, um S. aureus 
                    resistente à meticilina é conhecido por <strong><abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr></strong> (pronuncia-se "marsa").
                  </p>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Não é infrequente colegas confundirem essa classificação com a da prova da coagulase e acharem 
                    que um coagulase positiva é sinônimo de <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr>. <strong>Fique atento!</strong>
                  </p>
                </div>
              `,
              question: {
                text: "O resultado parcial da cultura mostrou que o seu paciente tem uma cultura do fragmento ósseo com um Gram positivo catalase positiva e coagulase negativa. Qual a afirmação te parece mais correta?",
                options: [
                  "Trata-se provavelmente de um S aureus",
                  "O arranjo dessa bactéria é provavelmente em cadeia.",
                  "Possivelmente esse paciente tem uma infecção por um estafilococos \"não aureus\"."
                ],
                correct: 2,
                explanation: "Um coco Gram positivo catalase positivo indica Staphylococcus. Se é coagulase negativo, não é S. aureus, mas sim um estafilococo \"não aureus\" (como S. epidermidis). O arranjo de Staphylococcus é em cachos, não em cadeia."
              }
            },
            {
              title: "Fermentação de Açúcares em Bacilos Gram Negativos",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🧪 Fermentação de Açúcares</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Uma importante prova bioquímica a ser realizada nos bacilos Gram negativos é a <strong>fermentação 
                    de açúcares</strong> (glicose, lactose). Essa prova tem elevada importância clínica, já que os 
                    <strong>não fermentadores</strong> são importantes produtores de mecanismos de resistência.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔬 Métodos de Teste</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A diferenciação entre Gram-negativos fermentadores e não fermentadores é baseada principalmente em 
                    testes de fermentação/oxidação de carboidratos. Existem vários métodos para definir essa prova. 
                    Testes de fermentação de carboidratos em meios como <strong>MacConkey</strong> ou outros meios 
                    diferenciais podem ser utilizados.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal finalidade clínica dos testes de fermentação de açúcares em bacilos Gram-negativos?",
                options: [
                  "Identificar microrganismos produtores de esporos.",
                  "Diferenciar bactérias fermentadoras das não fermentadoras, que podem estar associadas à resistência antimicrobiana.",
                  "Determinar a sensibilidade bacteriana a antibióticos específicos."
                ],
                correct: 1,
                explanation: "A principal finalidade é diferenciar bactérias fermentadoras das não fermentadoras, sendo que os não fermentadores (como Pseudomonas) são frequentemente associados a mecanismos de resistência antimicrobiana, o que tem grande importância clínica."
              }
            }
          ]
        },
        {
          id: 8,
          title: "Cultura Bacteriana: Princípios",
          duration: "15 min",
          xp: 80,
          sections: [
            {
              title: "Meios de Cultura",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧫 Meios de Cultura</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Nas lições sobre o método de Gram, falamos bastante sobre os meios estéreis e não estéreis. No caso das culturas, para espécimes de locais estéreis, utilizam-se meios multiuso enriquecidos:
                  </p>
                  <ul style="font-size: 15px; line-height: 1.6; margin-left: 20px; margin-bottom: 15px;">
                    <li><strong>Ágar sangue:</strong> meio universal</li>
                    <li><strong>Ágar chocolate:</strong> meio enriquecido com hemácias lisadas, ideal para bactérias fastidiosas como Haemophilus</li>
                  </ul>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Para espécimes de locais colonizados por flora normal, além dos meios enriquecidos, utilizam-se meios seletivos para inibir o crescimento de bactérias comensais e favorecer patógenos específicos:
                  </p>
                  <ul style="font-size: 15px; line-height: 1.6; margin-left: 20px;">
                    <li><strong>Ágar MacConkey:</strong> seletivo para Gram-negativos</li>
                    <li><strong>Ágar EMB:</strong> diferencia fermentadores de lactose</li>
                    <li><strong>Ágar Thayer-Martin:</strong> seletivo para Neisseria</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual das alternativas associa corretamente o meio de cultura à sua principal aplicação?",
                options: [
                  "Ágar sangue – seletivo para bactérias Gram-negativas.",
                  "Ágar chocolate – enriquecido para crescimento de bactérias fastidiosas, como Haemophilus.",
                  "Ágar MacConkey – utilizado para isolar Neisseria meningitidis."
                ],
                correct: 1,
                explanation: "O ágar chocolate é um meio enriquecido que contém hemácias lisadas, fornecendo fatores essenciais (V e X) para o crescimento de bactérias fastidiosas como Haemophilus influenzae."
              }
            },
            {
              title: "Um pouco mais sobre o Ágar MacConkey",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">🩷 Ágar MacConkey</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>ágar MacConkey</strong> é um meio de cultura seletivo e diferencial, fundamental para o isolamento de bacilos gram-negativos. 
                    Ele contém sais biliares e cristal violeta, que inibem o crescimento da maioria das bactérias gram-positivas.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Além disso, ele diferencia as bactérias com base na sua capacidade de fermentar a <strong>lactose</strong>. 
                    Bactérias fermentadoras de lactose (ex: E. coli, Klebsiella) produzem ácido, o que diminui o pH e faz com que o indicador vermelho de fenol 
                    torne as colônias <span style="color: #db2777; font-weight: bold;">rosas ou vermelhas</span>. 
                    Bactérias não fermentadoras (ex: Pseudomonas, Salmonella) permanecem incolores.
                  </p>
                </div>
              `,
              question: {
                text: "O ágar MacConkey é um meio seletivo e diferencial usado para:",
                options: [
                  "Inibir o crescimento de bactérias gram-positivas e diferenciar as fermentadoras de lactose (colônias rosas).",
                  "Cultivar organismos fastidiosos como Haemophilus influenzae.",
                  "Observar os padrões de hemólise em espécies de Streptococcus."
                ],
                correct: 0,
                explanation: "O ágar MacConkey inibe o crescimento de gram-positivos e diferencia os gram-negativos pela fermentação da lactose. Fermentadores de lactose formam colônias rosas/vermelhas, enquanto não fermentadores permanecem incolores."
              }
            },
            {
              title: "Um pouco mais sobre o Ágar Chocolate",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🍫 Ágar Chocolate</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    O <strong>ágar chocolate</strong> é um meio enriquecido, não seletivo, usado para cultivar bactérias fastidiosas 
                    (exigentes nutricionalmente), como <strong>Haemophilus influenzae</strong> e <strong>Neisseria gonorrhoeae</strong>. 
                    Ele contém hemácias lisadas pelo calor, que liberam fatores de crescimento essenciais como o Fator V (NAD) 
                    e o Fator X (hemina) no meio.
                  </p>
                </div>
              `,
              question: {
                text: "Para qual finalidade o ágar chocolate é utilizado?",
                options: [
                  "Para detectar a fermentação de lactose por bacilos gram-negativos.",
                  "Para inibir o crescimento de bactérias gram-positivas.",
                  "Para o crescimento de organismos fastidiosos como Haemophilus influenzae."
                ],
                correct: 2,
                explanation: "O ágar chocolate é um meio rico que fornece nutrientes essenciais (Fator V e X) para o crescimento de bactérias fastidiosas, que não crescem em meios de cultura mais simples como o ágar sangue."
              }
            }
          ]
        },
        {
          id: 9,
          title: "Testes Bioquímicos Rápidos",
          duration: "10 min",
          xp: 55,
          sections: [
            {
              title: "Teste da Catalase",
              content: `
                <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">💨 Teste da Catalase</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Após 24 a 48 horas de incubação, as colônias bacterianas se desenvolvem nos meios de cultura, permitindo sua análise macroscópica (forma, tamanho, cor, presença de hemólise). Testes bioquímicos rápidos podem facilitar a identificação preliminar ou presuntiva das bactérias isoladas, direcionando a terapia antimicrobiana antes dos resultados definitivos.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    O <strong>teste da catalase</strong> é um teste rápido e crucial para diferenciar cocos gram-positivos. 
                    A enzima catalase converte peróxido de hidrogênio (H₂O₂) em água e oxigênio, produzindo bolhas visíveis. 
                    <strong>Staphylococcus spp.</strong> são catalase-positivos, enquanto <strong>Streptococcus spp.</strong> 
                    e <strong>Enterococcus spp.</strong> são catalase-negativos.
                  </p>
                </div>
              `,
              question: {
                text: "O teste da catalase é utilizado para diferenciar quais grupos de bactérias?",
                options: [
                  "S. aureus de outros estafilococos.",
                  "Bacilos gram-negativos fermentadores de lactose dos não fermentadores.",
                  "Staphylococcus (catalase-positivos) de Streptococcus e Enterococcus (catalase-negativos)."
                ],
                correct: 2,
                explanation: "A presença da enzima catalase (resultado positivo, com bolhas) é uma característica chave para diferenciar o gênero Staphylococcus de Streptococcus e Enterococcus, que são catalase-negativos."
              }
            },
            {
              title: "Teste da Coagulase",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🩸 Teste da Coagulase</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Dentro do gênero Staphylococcus, o <strong>teste da coagulase</strong> é usado para diferenciar 
                    <strong>Staphylococcus aureus</strong> (coagulase-positivo) dos estafilococos coagulase-negativos (ECN), 
                    como o S. epidermidis. A coagulase é uma enzima que converte fibrinogênio em fibrina, formando um coágulo 
                    visível no plasma.
                  </p>
                </div>
              `,
              question: {
                text: "Qual teste é fundamental para diferenciar Staphylococcus aureus de outros estafilococos?",
                options: [
                  "Teste da catalase",
                  "Teste da coagulase",
                  "Teste de hemólise"
                ],
                correct: 1,
                explanation: "O teste da coagulase é o principal teste fenotípico para identificar S. aureus, que é coagulase-positivo, distinguindo-o dos estafilococos coagulase-negativos (ECN)."
              }
            },
            {
              title: "Outros testes",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #b45309; margin-bottom: 15px;">🧪 Outros testes</h3>
                  <ul style="font-size: 15px; line-height: 1.6; margin-left: 20px;">
                    <li><strong>Oxidase:</strong> positiva em Neisseria e Pseudomonas</li>
                    <li><strong>Teste de Lancefield:</strong> identifica grupos sorológicos de estreptococos</li>
                    <li><strong>Solubilidade em bile:</strong> positiva em S. pneumoniae</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual das alternativas associa corretamente o teste ao microrganismo correspondente?",
                options: [
                  "Teste da oxidase – positivo em Neisseria e Pseudomonas.",
                  "Teste de Lancefield – identifica grupos sorológicos de Staphylococcus.",
                  "Solubilidade em bile – positiva em Streptococcus pyogenes."
                ],
                correct: 0,
                explanation: "O teste da oxidase é positivo em Neisseria e Pseudomonas. O teste de Lancefield é usado para Streptococcus (não Staphylococcus), e a solubilidade em bile é característica de S. pneumoniae (não S. pyogenes)."
              }
            }
          ]
        },
        {
          id: 10,
          title: "Hemólise e Agrupamento de Lancefield",
          duration: "12 min",
          xp: 65,
          sections: [
            {
              title: "Padrões de Hemólise",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🩸 Padrões de Hemólise</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A hemólise em ágar sangue é uma característica fundamental para classificar Streptococcus spp. 
                    <strong>Beta-hemólise (β)</strong> é a lise completa das hemácias, criando um halo transparente. 
                    <strong>Alfa-hemólise (α)</strong> é a lise parcial, resultando em um halo esverdeado. 
                    <strong>Gama-hemólise (γ)</strong> indica ausência de hemólise.
                  </p>
                </div>
              `,
              question: {
                text: "Qual tipo de hemólise é caracterizada pela lise completa das hemácias, resultando em uma zona transparente ao redor das colônias?",
                options: [
                  "Alfa-hemólise.",
                  "Beta-hemólise.",
                  "Gama-hemólise."
                ],
                correct: 1,
                explanation: "A beta-hemólise é a lise total das hemácias no ágar sangue, indicada por um halo claro e transparente ao redor da colônia. É característica de patógenos importantes como Streptococcus pyogenes."
              }
            },
            {
              title: "Agrupamento de Lancefield",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🏷️ Agrupamento de Lancefield</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    O <strong>agrupamento de Lancefield</strong> é um sistema usado para classificar estreptococos 
                    beta-hemolíticos com base em antígenos de carboidratos específicos na parede celular. Por exemplo, 
                    <strong>Streptococcus pyogenes</strong> pertence ao Grupo A de Lancefield (GAS), e 
                    <strong>Streptococcus agalactiae</strong> ao Grupo B (GBS).
                  </p>
                </div>
              `,
              question: {
                text: "O agrupamento de Lancefield é usado para categorizar qual gênero de bactérias com base em carboidratos da parede celular?",
                options: [
                  "Staphylococcus.",
                  "Streptococcus.",
                  "Neisseria."
                ],
                correct: 1,
                explanation: "O sistema de Lancefield foi desenvolvido por Rebecca Lancefield para sorotipar espécies de Streptococcus com base nos antígenos de carboidratos da parede celular, sendo fundamental na epidemiologia e diagnóstico."
              }
            }
          ]
        },
        {
          id: 10,
          title: "Identificação Avançada por MALDI-TOF",
          duration: "10 min",
          xp: 60,
          sections: [
            {
              title: "Princípio do MALDI-TOF",
              content: `
                <div style="background: #eef2ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4338ca; margin-bottom: 15px;">🚀 MALDI-TOF MS</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A tecnologia de <strong>MALDI-TOF (Matrix-Assisted Laser Desorption/Ionization - Time of Flight)</strong> 
                    revolucionou a identificação bacteriana. É uma técnica de espectrometria de massa que analisa o perfil 
                    de proteínas (principalmente ribossomais) de um microrganismo. O espectro de massa gerado é uma 
                    'impressão digital' proteica, que é comparada a um banco de dados para identificação rápida e precisa da espécie.
                  </p>
                </div>
              `,
              question: {
                text: "O que é MALDI-TOF e qual sua principal aplicação no laboratório de microbiologia?",
                options: [
                  "Um teste bioquímico para diferenciar espécies de Staphylococcus.",
                  "Uma ferramenta de espectrometria de massa que permite a identificação rápida e precisa de gênero e espécie a partir de uma cultura pura.",
                  "Um método para avaliar a suscetibilidade a antimicrobianos diretamente da amostra clínica."
                ],
                correct: 1,
                explanation: "MALDI-TOF MS é uma tecnologia de espectrometria de massa que fornece identificação de espécies bacterianas e fúngicas em minutos a partir de colônias isoladas, acelerando drasticamente o diagnóstico microbiológico."
              }
            },
            {
              title: "Vantagens e Limitações",
              content: `
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #374151; margin-bottom: 15px;">✅ Vantagens e ❌ Limitações</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A principal vantagem do MALDI-TOF é a <strong>rapidez e precisão</strong> na identificação a partir 
                    de uma cultura pura. No entanto, ele não fornece informações sobre suscetibilidade a antimicrobianos 
                    e depende da qualidade do banco de dados e da pureza da amostra. A identificação direta de amostras 
                    clínicas (sem cultura) ainda é um desafio.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal limitação do MALDI-TOF na rotina clínica?",
                options: [
                  "É um método muito lento, levando dias para o resultado.",
                  "Não fornece informações sobre o perfil de resistência da bactéria aos antibióticos.",
                  "Só consegue identificar bactérias gram-positivas."
                ],
                correct: 1,
                explanation: "Apesar de sua rapidez na identificação, o MALDI-TOF não realiza testes de suscetibilidade. Portanto, após a identificação, ainda são necessários métodos fenotípicos ou genotípicos para determinar o perfil de resistência do microrganismo."
              }
            }
          ]
        },
        {
          id: 11,
          title: "Revisão: Pontos e Dicas",
          duration: "15 min",
          xp: 75,
          sections: [
            {
              title: "Pontos Essenciais Sobre o Gram I",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Pontos Essenciais Sobre o Gram I</h3>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">💊 Utilidade Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Fundamental para orientar a escolha do antibiótico na pendência de cultura e/ou dados moleculares.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🧱 Base Estrutural</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Bactérias Gram-positivas não têm membrana externa e possuem uma parede celular espessa de peptidoglicano 
                    que cora fortemente com violeta cristal.
                  </p>
                </div>
                
                <div style="background: #fffbeb; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">🎯 Interpretação em Locais Estéreis</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A visualização de bactérias no Gram e o crescimento em culturas de locais estéreis são altamente significativos.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das alternativas descreve corretamente um aspecto da coloração de Gram?",
                options: [
                  "As bactérias Gram-positivas possuem membrana externa e não retêm o corante violeta cristal.",
                  "A coloração de Gram é útil apenas após o resultado da cultura estar disponível.",
                  "A presença de bactérias em locais estéreis observada pelo Gram tem alto valor diagnóstico."
                ],
                correct: 2,
                explanation: "A presença de bactérias visualizadas pelo Gram em locais normalmente estéreis (como sangue, LCR, líquido pleural) tem alto valor diagnóstico e orienta a terapia empírica antes dos resultados de cultura."
              }
            },
            {
              title: "Pontos Essenciais Sobre o Gram II",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Pontos Essenciais Sobre o Gram II</h3>
                  <h4 style="color: #991b1b; margin-bottom: 10px;">Bactérias Não Visualizáveis pelo Gram</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 15px;">
                    Algumas bactérias não podem ser adequadamente visualizadas por dois motivos principais:
                  </p>
                </div>
                
                <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #c2410c; margin-bottom: 10px;">🚫 Ausência de parede celular:</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Mycoplasma pneumoniae</li>
                    <li>Mycoplasma hominis</li>
                    <li>Ureaplasma spp.</li>
                  </ul>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #b45309; margin-bottom: 10px;">🔬 Estrutura de parede celular que não retém reagentes de coloração de Gram:</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Chlamydia trachomatis</li>
                    <li>Mycobacterium tuberculosis</li>
                    <li>Outras micobactérias</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual das alternativas explica corretamente por que certas bactérias não são visíveis na coloração de Gram?",
                options: [
                  "Porque são exclusivamente intracelulares e não possuem DNA próprio.",
                  "Porque carecem de parede celular ou possuem estruturas que não retêm o corante do Gram.",
                  "Porque apresentam cápsula espessa que impede a penetração da fucsina."
                ],
                correct: 1,
                explanation: "Bactérias como Mycoplasma não possuem parede celular, enquanto Chlamydia e Mycobacterium têm estruturas de parede que não retêm adequadamente os corantes do Gram, tornando-as não visualizáveis por este método."
              }
            },
            {
              title: "Pontos Essenciais Sobre o Gram III",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Pontos Essenciais Sobre o Gram III</h3>
                  <h4 style="color: #c2410c; margin-bottom: 10px;">Resultados Falso-Negativos</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 15px;">
                    A ausência de bactérias no Gram ou nas culturas não significa necessariamente ausência de infecção devido a:
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <ul style="font-size: 14px; line-height: 1.8; margin-left: 20px;">
                    <li><strong>Uso prévio de antibióticos</strong> reduzindo a carga bacteriana</li>
                    <li><strong>Concentração bacteriana</strong> abaixo do limite de detecção (≤10⁴ UFC/mL)</li>
                    <li>Presença de <strong>microrganismos fastidiosos</strong> ou de crescimento lento</li>
                    <li><strong>Agentes não-bacterianos</strong> (vírus, fungos ou parasitas)</li>
                    <li><strong>Técnicas de coleta, transporte ou processamento inadequadas</strong></li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual das situações abaixo pode justificar um resultado falso-negativo na coloração de Gram ou cultura?",
                options: [
                  "Elevada concentração de bactérias na amostra.",
                  "Uso prévio de antibióticos pelo paciente.",
                  "Crescimento rápido de microrganismos no meio de cultura."
                ],
                correct: 1,
                explanation: "O uso prévio de antibióticos pode reduzir significativamente a carga bacteriana, resultando em Gram e culturas falsamente negativos, mesmo na presença de infecção ativa."
              }
            },
            {
              title: "Dicas Práticas para Interpretação",
              content: `
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0f766e; margin-bottom: 15px;">💡 Dicas Práticas para Interpretação</h3>
                </div>
                
                <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #1e40af; margin-bottom: 10px;">🧠 Regra Mnemônica</h4>
                  <p style="font-size: 16px; font-weight: bold; line-height: 1.5; margin-bottom: 10px; color: #1e40af;">
                    "EstáFILO não forma fila (cadeia) e estrepto não forma cachos"
                  </p>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Esta regra ajuda a diferenciar rapidamente <strong>Staphylococcus</strong> (em cachos) de 
                    <strong>Streptococcus</strong> (em cadeias).
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🔴 Identificação de S. aureus</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    <strong>Estáfilo coagulase positiva = Staphylococcus aureus</strong>
                  </p>
                  <p style="font-size: 14px; line-height: 1.5; font-weight: bold; color: #dc2626;">
                    ⚠️ Não confundir SCN com <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr>!!!!
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #b45309; margin-bottom: 10px;">🦠 Bacilos Gram-Negativos</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Fermentadores de lactose</strong> geralmente são enterobactérias (E. coli, Klebsiella). 
                    <strong>Não fermentadores</strong> como Acinetobacter, Pseudomonas e Proteus têm maior probabilidade 
                    de resistência antimicrobiana.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💬 Comunicação</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Converse com o laboratório, sempre!</strong> A troca de informações entre clínicos e 
                    microbiologistas é fundamental para o diagnóstico correto e tratamento adequado.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das alternativas está correta segundo as orientações do card?",
                options: [
                  "Streptococcus formam cachos e Staphylococcus formam cadeias.",
                  "S. aureus é coagulase positivo e deve ser distinguido de SCN e MRSA.",
                  "Fermentadores de lactose, como Pseudomonas, raramente são resistentes."
                ],
                correct: 1,
                explanation: "S. aureus é identificado como estafilococo coagulase positivo. É importante distinguir SCN (Staphylococcus coagulase-negativo) de MRSA (S. aureus resistente à meticilina), pois são entidades diferentes com tratamentos distintos."
              }
            }
          ]

        }
        ,{
          id: 12,
          title: "Revisão: Perguntas - Parte 1",
          duration: "45 min",
          xp: 225,
          sections: [
            {
              title: "I. Introdução e Qualidade da Amostra - Q1",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">📝 Seção I: Introdução e Qualidade da Amostra</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre o método de Gram, sua história, aplicações clínicas e a importância da qualidade das amostras.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 14 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "O método de Gram é também conhecido como:",
                options: [
                  "Bacterioscopia",
                  "Baciloscopia",
                  "Micológico direto"
                ],
                correct: 0,
                explanation: "O método de Gram é também conhecido como bacterioscopia, pois permite a visualização microscópica de bactérias."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q2",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "O método de Gram foi desenvolvido por:",
                options: [
                  "Hans Christian Gram em 1884.",
                  "Alexander Fleming em 1928",
                  "Louis Pasteur em 1882"
                ],
                correct: 0,
                explanation: "O método de Gram foi desenvolvido por Hans Christian Gram em 1884, revolucionando a microbiologia clínica."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q3",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "O método de Gram é utilizado em:",
                options: [
                  "Fluidos corporais estéreis e não estéreis, fragmentos de biópsia, em amostra de cultura positiva.",
                  "Fluidos corporais estéreis e não estéreis, fragmentos de biópsia, mas não serve para amostra de cultura. Esta usa outros métodos para descrever a bacteria.",
                  "Fluidos corporais estéreis, fragmentos de biópsia, em amostra de cultura positiva. Fluidos corporais não estéreis não servem para serem usados no Gram devido a presença de bacterias colonizantes."
                ],
                correct: 0,
                explanation: "O método de Gram é versátil e pode ser utilizado em fluidos corporais estéreis e não estéreis, fragmentos de biópsia e amostras de cultura positiva."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q4",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 4 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "É INcorreto afirmar que o método de Gram:",
                options: [
                  "Orienta a escolha do antibiótico inicial enquanto aguardamos os resultados da cultura ou testes moleculares",
                  "Permite uma intervenção terapêutica mais direcionada.",
                  "Determina o antibiótico definitivo a ser usado."
                ],
                correct: 2,
                explanation: "O método de Gram orienta a terapia empírica inicial, mas NÃO determina o antibiótico definitivo. O tratamento definitivo deve ser baseado em cultura e antibiograma."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q5",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 5 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal função da coloração de Gram no manejo clínico, pendente de dados definitivos de cultura?",
                options: [
                  "Determinar o perfil de suscetibilidade intrínseca da bactéria.",
                  "Guiar o manejo clínico empírico para infecções bacterianas.",
                  "Correlacionar a presença de leveduras com a ausência de neutrófilos."
                ],
                correct: 1,
                explanation: "A principal função da coloração de Gram é guiar o manejo clínico empírico para infecções bacterianas enquanto aguardamos os resultados definitivos da cultura."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q6",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 6 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Qual fator pode afetar o valor da coloração de Gram realizada em uma amostra clínica?",
                options: [
                  "A idade do paciente e a presença de comorbidades.",
                  "A qualidade do espécime clínico.",
                  "O tipo de meio de cultura utilizado para o isolamento inicial."
                ],
                correct: 1,
                explanation: "A qualidade do espécime clínico é fundamental para o valor diagnóstico da coloração de Gram. Amostras mal coletadas ou contaminadas comprometem o resultado."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q7",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 7 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "A presença de qualquer bactéria detectada na coloração de Gram em um espécime de um sítio estéril deve ser considerada:",
                options: [
                  "Contaminante, a menos que a cultura seja positiva.",
                  "Significativa, embora uma lâmina de Gram negativa não exclua a infecção.",
                  "Indicativa de infecção viral ou fúngica."
                ],
                correct: 1,
                explanation: "Em sítios estéreis, qualquer bactéria detectada deve ser considerada significativa. No entanto, um Gram negativo não exclui infecção, pois pode haver baixa carga bacteriana."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q8",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 8 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "De acordo com a avaliação semi-quantitativa das células humanas, qual é a característica de um espécime de escarro de alta qualidade?",
                options: [
                  "Alto número de células epiteliais e baixo número de células brancas.",
                  "Alto número de células brancas e baixo número de células epiteliais.",
                  "Alto número de bactérias de diferentes morfologias, compatível com a flora oral."
                ],
                correct: 1,
                explanation: "Um espécime de escarro de alta qualidade apresenta alto número de células brancas (neutrófilos) e baixo número de células epiteliais, indicando que a amostra é do trato respiratório inferior e não contaminada com saliva."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q9",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 9 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Quais dos seguintes são exemplos de sítios estéreis, dos quais as amostras devem ser coletadas em condições estéreis?",
                options: [
                  "Escarro e trato genital feminino.",
                  "Líquido cefalorraquidiano, líquido sinovial e líquido pleural.",
                  "Trato respiratório superior e fezes."
                ],
                correct: 1,
                explanation: "Líquido cefalorraquidiano (LCR), líquido sinovial e líquido pleural são exemplos de sítios estéreis. Escarro, trato genital feminino, trato respiratório superior e fezes são sítios não estéreis."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q10",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 10 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Ao analisar amostras de locais estéreis, devemos considerar que:",
                options: [
                  "A despeito de ser estéril, o certo é verificar quantidade de leucócitos e células epiteliais.",
                  "Qualquer bactéria detectada deve ser considerada potencialmente patogênica e clinicamente significativa.",
                  "Não faz sentido fazer Gram desses tecidos já que são estéreis."
                ],
                correct: 1,
                explanation: "Em locais estéreis, qualquer bactéria detectada deve ser considerada potencialmente patogênica e clinicamente significativa, pois esses sítios normalmente não contêm microbiota."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q11",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 11 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Se o espécime é de um órgão parenquimatoso, pode-se dizer:",
                options: [
                  "Sempre que tem um agente detectado pelo Gram, esse agente necessariamente é infectante.",
                  "O Gram é inútil.",
                  "A ausência de bactérias no Gram não exclui infecção."
                ],
                correct: 2,
                explanation: "A ausência de bactérias no Gram de órgão parenquimatoso não exclui infecção, pois pode haver baixa carga bacteriana ou distribuição irregular dos microrganismos no tecido."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q12",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 12 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Se temos um Gram feito no líquor, pode-se dizer:",
                options: [
                  "Bactéria no liquor não cora pelo método de Gram.",
                  "Resultados falso-negativos podem ocorrer em pacientes que receberam antibióticos previamente à coleta.",
                  "O sistema nervoso central é um local onde os betalactamicos penetram com dificuldade devido à barreira hematoencefálica, por isso no Gram do liquor não há interferência desses antibióticos."
                ],
                correct: 1,
                explanation: "Resultados falso-negativos no Gram de líquor podem ocorrer em pacientes que receberam antibióticos previamente à coleta, pois os antibióticos podem reduzir a carga bacteriana ou alterar a morfologia das bactérias."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q13",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 13 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                </div>
              `,
              question: {
                text: "Numa amostra de escarro:",
                options: [
                  "Por ter microorganismos colonizadores, não seria possível fazer um Gram.",
                  "Podemos fazer o Gram considerando alguns critérios de credibilidade da amostra",
                  "Só é possivel fazer o Gram da cultura do escarro."
                ],
                correct: 1,
                explanation: "Podemos fazer o Gram de escarro considerando critérios de credibilidade da amostra, como a relação entre células epiteliais e leucócitos, para avaliar se a amostra é representativa do trato respiratório inferior."
              }
            },
            {
              title: "I. Introdução e Qualidade da Amostra - Q14",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 14 de 14 - Seção I: Introdução e Qualidade da Amostra
                  </p>
                  <p style="font-size: 14px; color: #0369a1; margin-top: 10px;">
                    ➡️ Próxima: Seção II - Coloração de Gram: Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Podemos considerar sobre as amostras não estéreis:",
                options: [
                  "São exemplos: escarro e aspirado traqueal, swab de garganta, feridas superficiais, secreções genitais ou mesmo fezes",
                  "São meios onde não é possivel fazer o Gram devido à microbiota normal.",
                  "Toda bactéria de uma ferida superficial deve ser considerada potencialmente infectante."
                ],
                correct: 0,
                explanation: "Amostras não estéreis incluem escarro, aspirado traqueal, swab de garganta, feridas superficiais, secreções genitais e fezes. Nesses casos, é possível fazer o Gram, mas a interpretação deve considerar a microbiota normal."
              }
            }

,
            {
              title: "II. Coloração de Gram: Procedimento - Q1",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #c2410c; margin-bottom: 15px;">🔬 Seção II: Coloração de Gram - Procedimento</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre as etapas do procedimento de coloração de Gram e os reagentes utilizados.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 10 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "Qual é o corante primário usado na coloração de Gram?",
                options: [
                  "Safranina.",
                  "Cristal violeta.",
                  "Fucsina básica."
                ],
                correct: 1,
                explanation: "O cristal violeta é o corante primário usado na coloração de Gram, sendo aplicado primeiro e corando todas as bactérias inicialmente de roxo."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q2",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual reagente é aplicado na coloração de Gram após o corante primário, servindo como mordente?",
                options: [
                  "Acetona ou álcool.",
                  "Lugol (Gram's iodine).",
                  "Fucsina básica."
                ],
                correct: 1,
                explanation: "O Lugol (iodo de Gram) é aplicado após o cristal violeta e serve como mordente, formando um complexo com o corante que fica retido nas bactérias Gram-positivas."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q3",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual etapa da coloração de Gram é crítica e, se realizada por muito tempo, pode remover o cristal violeta das células Gram-positivas, além das Gram-negativas?",
                options: [
                  "Aplicação do cristal violeta.",
                  "Descolorização rápida com acetona ou álcool.",
                  "Contracoloração com safranina."
                ],
                correct: 1,
                explanation: "A descolorização é a etapa mais crítica. Se feita por muito tempo, pode remover o complexo cristal violeta-iodo até das bactérias Gram-positivas, causando resultados falso-negativos."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q4",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 4 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual contracorante é preferido para colorir intensamente muitas bactérias Gram-negativas, especialmente aquelas que coram fracamente com safranina (como espécies de Campylobacter)?",
                options: [
                  "Vermelho neutro.",
                  "Fucsina básica (presente na carbol fucsina diluída).",
                  "Cristal violeta."
                ],
                correct: 1,
                explanation: "A fucsina básica (carbol fucsina diluída) é preferida para corar intensamente bactérias Gram-negativas que coram fracamente com safranina, como Campylobacter."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q5",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 5 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Além de fornecer informações sobre a presença de inflamação, como as células humanas (como neutrófilos) presentes em espécimes de sítios não estéreis são relatadas?",
                options: [
                  "De forma quantitativa precisa, como células/mm³.",
                  "De forma semi-quantitativa (ex: 1+ a 4+ ou rara-pouca-moderada-abundante).",
                  "Apenas se o paciente for neutropênico."
                ],
                correct: 1,
                explanation: "As células humanas são relatadas de forma semi-quantitativa usando escalas como 1+ a 4+ ou descritores como rara, pouca, moderada ou abundante."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q6",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 6 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "A ausência de células brancas (neutrófilos) em uma amostra de infecção pode ocorrer sob qual condição do paciente?",
                options: [
                  "Se o paciente estiver imunocompetente.",
                  "Se o paciente estiver neutropênico.",
                  "Se o paciente recebeu coloração de Gram previamente."
                ],
                correct: 1,
                explanation: "A ausência de neutrófilos pode ocorrer em pacientes neutropênicos, que têm contagem muito baixa de células brancas devido a condições como quimioterapia ou doenças hematológicas."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q7",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 7 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a causa de alguns bacilos Gram-negativos se tornarem mais longos e filamentosos, manifestando uma morfologia atípica?",
                options: [
                  "Exposição prolongada ao corante primário.",
                  "Contaminação por flora normal.",
                  "Uso de antibióticos pelo paciente antes da coleta do espécime."
                ],
                correct: 2,
                explanation: "Antibióticos beta-lactâmicos podem causar morfologia filamentosa em bacilos Gram-negativos ao interferir na síntese da parede celular, impedindo a divisão celular normal."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q8",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 8 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Sobre a coloração de Gram é correto afirmar:",
                options: [
                  "Além de bactérias, o método também permite a visualização de leveduras como Candida spp.",
                  "No Gram as leveduras se coram como Gram-negativas.",
                  "O método de Gram é rápido e porém, caro."
                ],
                correct: 0,
                explanation: "O método de Gram permite a visualização de leveduras como Candida spp., que se coram como Gram-positivas (roxas). O método é rápido e barato."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q9",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 9 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                </div>
              `,
              question: {
                text: "Na segunda etapa da coloração de Gram é incorreto afirmar:",
                options: [
                  "Há uma rápida descoloração com todas as bactérias ficando sem coloração.",
                  "A lâmina é mergulhada em lugol (iodo) que aumenta a afinidade entre a violeta de cristal e o material bacteriano.",
                  "O lugol é um mordente, isto é, fixa o corante à parede bacteriana."
                ],
                correct: 0,
                explanation: "Na segunda etapa (aplicação do lugol), NÃO há descoloração. O lugol atua como mordente, fixando o cristal violeta. A descoloração ocorre na terceira etapa."
              }
            },
            {
              title: "II. Coloração de Gram: Procedimento - Q10",
              content: `
                <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 10 de 10 - Seção II: Coloração de Gram - Procedimento
                  </p>
                  <p style="font-size: 14px; color: #c2410c; margin-top: 10px;">
                    ➡️ Próxima: Seção III - Coloração de Gram: Interpretação e Conceitos
                  </p>
                </div>
              `,
              question: {
                text: "Na descoloração é INcorreto afirmar:",
                options: [
                  "Deve ser rápida (questão de segundos) com acetona ou álcool.",
                  "Remove-se o corante das bactérias Gram-negativas, que ficam incolores.",
                  "Os Gram positivos coram definitivamente de vermelho."
                ],
                correct: 2,
                explanation: "É incorreto afirmar que os Gram-positivos coram de vermelho na descoloração. Eles MANTÊM a cor roxa/azul do cristal violeta. As Gram-negativas é que ficarão vermelhas após a contracoloração."
              }
            }

,
            {
              title: "III. Coloração de Gram: Interpretação - Q1",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #15803d; margin-bottom: 15px;">🎯 Seção III: Coloração de Gram - Interpretação e Conceitos</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre a interpretação dos resultados da coloração de Gram e conceitos fundamentais.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 7 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "As bactérias Gram-positivas retêm o cristal violeta e, portanto, aparecem de que cor na coloração de Gram?",
                options: [
                  "Rosa.",
                  "Roxo ou azul escuro.",
                  "Verde."
                ],
                correct: 1,
                explanation: "As bactérias Gram-positivas retêm o complexo cristal violeta-iodo e aparecem roxas ou azul escuro na coloração de Gram."
              }
            },
            {
              title: "III. Coloração de Gram: Interpretação - Q2",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 7 - Seção III: Interpretação e Conceitos
                  </p>
                </div>
              `,
              question: {
                text: "As bactérias Gram-negativas não retêm o cristal violeta, mas absorvem a safranina (contracorante) e, portanto, aparecem de que cor?",
                options: [
                  "Rosa ou vermelho claro.",
                  "Roxo.",
                  "Azul."
                ],
                correct: 0,
                explanation: "As bactérias Gram-negativas não retêm o cristal violeta após a descoloração, mas absorvem o contracorante (safranina ou fucsina) e aparecem rosa ou vermelho claro."
              }
            },
            {
              title: "III. Coloração de Gram: Interpretação - Q3",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 7 - Seção III: Interpretação e Conceitos
                  </p>
                </div>
              `,
              question: {
                text: "Qual é o termo usado para organismos que podem corar positiva ou negativamente no Gram?",
                options: [
                  "Gram-indutíveis.",
                  "Gram-variáveis.",
                  "Gram-resistentes."
                ],
                correct: 1,
                explanation: "Organismos Gram-variáveis podem corar positiva ou negativamente dependendo da idade da cultura, condições de crescimento ou técnica utilizada."
              }
            },
            {
              title: "III. Coloração de Gram: Interpretação - Q4",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 4 de 7 - Seção III: Interpretação e Conceitos
                  </p>
                </div>
              `,
              question: {
                text: "Qual espécie bacteriana não pode ser visualizada pela coloração de Gram porque carece de uma parede celular?",
                options: [
                  "Mycobacterium spp.",
                  "Chlamydia spp.",
                  "Mycoplasma species."
                ],
                correct: 2,
                explanation: "Mycoplasma não possui parede celular, portanto não pode ser visualizado pela coloração de Gram, que se baseia nas propriedades da parede celular bacteriana."
              }
            },
            {
              title: "III. Coloração de Gram: Interpretação - Q5",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 5 de 7 - Seção III: Interpretação e Conceitos
                  </p>
                </div>
              `,
              question: {
                text: "Qual espécie não é visualizada pelo Gram porque a estrutura de sua parede celular não retém os reagentes, embora possa ter uma aparência 'em contas' (beaded) Gram-positiva?",
                options: [
                  "Mycoplasma spp.",
                  "Chlamydia e Mycobacterium spp.",
                  "Candida spp."
                ],
                correct: 1,
                explanation: "Chlamydia e Mycobacterium não são bem visualizados pelo Gram devido às características especiais de suas paredes celulares. Mycobacterium pode ter aparência 'em contas' quando corado."
              }
            },
            {
              title: "III. Coloração de Gram: Interpretação - Q6",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 6 de 7 - Seção III: Interpretação e Conceitos
                  </p>
                </div>
              `,
              question: {
                text: "Qual espécie não bacteriana cora roxo na coloração de Gram e pode apresentar estruturas alongadas chamadas 'pseudohifas'?",
                options: [
                  "Neisseria spp.",
                  "Candida species.",
                  "Nocardia spp."
                ],
                correct: 1,
                explanation: "Candida (levedura) cora roxo como Gram-positiva e pode formar pseudohifas, que são estruturas alongadas que se assemelham a hifas verdadeiras."
              }
            },
            {
              title: "III. Coloração de Gram: Interpretação - Q7",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 7 de 7 - Seção III: Interpretação e Conceitos
                  </p>
                  <p style="font-size: 14px; color: #15803d; margin-top: 10px;">
                    ➡️ Próxima: Seção IV - Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "A discrepância entre os achados da coloração de Gram e os resultados da cultura pode indicar qual das seguintes situações?",
                options: [
                  "O uso de ágar MacConkey em vez de ágar chocolate.",
                  "Contaminação, terapia antimicrobiana prévia ou um organismo fastidioso.",
                  "Um resultado falso-positivo no teste de oxidase."
                ],
                correct: 1,
                explanation: "Discrepâncias entre Gram e cultura podem indicar contaminação da amostra, uso de antibióticos antes da coleta ou presença de organismos fastidiosos que crescem mal em cultura."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q1",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #7c3aed; margin-bottom: 15px;">🦠 Seção IV: Morfologias Gram-Positivas</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre as morfologias e arranjos das bactérias Gram-positivas de importância clínica.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 8 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "Cocos Gram-positivos arranjados em cachos (clusters) geralmente indicam qual gênero?",
                options: [
                  "Streptococcus.",
                  "Staphylococcus species.",
                  "Enterococcus."
                ],
                correct: 1,
                explanation: "Cocos Gram-positivos em cachos (arranjo semelhante a cachos de uva) são característicos do gênero Staphylococcus."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q2",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "Cocos Gram-positivos arranjados em cadeias (chains) geralmente indicam quais gêneros?",
                options: [
                  "Staphylococcus ou Micrococcus.",
                  "Streptococcus ou Enterococcus species.",
                  "Bacillus ou Clostridium."
                ],
                correct: 1,
                explanation: "Cocos Gram-positivos em cadeias são característicos dos gêneros Streptococcus e Enterococcus."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q3",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "Qual arranjo é considerado patognomônico para Streptococcus pneumoniae?",
                options: [
                  "Cocos Gram-positivos em cadeias longas.",
                  "Diplococos Gram-positivos (esferas em pares), classicamente ligeiramente alongados e dispostos ponta a ponta.",
                  "Cocos Gram-positivos em aglomerados (clusters)."
                ],
                correct: 1,
                explanation: "Diplococos Gram-positivos ligeiramente alongados (em forma de chama de vela) dispostos ponta a ponta são patognomônicos de Streptococcus pneumoniae."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q4",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 4 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "O achado de bacilos Gram-positivos ou Gram-variáveis em espécimes de tecidos moles sem células brancas visíveis deve levantar suspeita de qual condição clínica?",
                options: [
                  "Endocardite por enterococos.",
                  "Gangrena gasosa.",
                  "Meningite pneumocócica."
                ],
                correct: 1,
                explanation: "Bacilos Gram-positivos grandes sem leucócitos em tecidos moles sugerem gangrena gasosa por Clostridium perfringens, que produz toxinas que destroem as células de defesa."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q5",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 5 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "Qual gênero Gram-positivo ramificado é tipicamente aeróbico?",
                options: [
                  "Actinomyces.",
                  "Nocardia species.",
                  "Clostridium."
                ],
                correct: 1,
                explanation: "Nocardia é um gênero de bactérias Gram-positivas ramificadas aeróbicas, frequentemente associadas a infecções pulmonares em imunossuprimidos."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q6",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 6 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "Qual gênero Gram-positivo ramificado é tipicamente anaeróbico?",
                options: [
                  "Streptomyces.",
                  "Actinomyces species.",
                  "Bacillus."
                ],
                correct: 1,
                explanation: "Actinomyces é um gênero de bactérias Gram-positivas ramificadas anaeróbicas, frequentemente associadas a actinomicose cervicofacial."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q7",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 7 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                </div>
              `,
              question: {
                text: "Qual teste laboratorial é usado para diferenciar Staphylococcus aureus de outras espécies de estafilococos?",
                options: [
                  "Teste de Catalase.",
                  "Teste de Coagulase.",
                  "Teste de Oxidase."
                ],
                correct: 1,
                explanation: "O teste de coagulase diferencia S. aureus (coagulase positivo) de outras espécies de Staphylococcus (coagulase negativas)."
              }
            },
            {
              title: "IV. Morfologias Gram-Positivas - Q8",
              content: `
                <div style="background: #faf5ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 8 de 8 - Seção IV: Morfologias Gram-Positivas
                  </p>
                  <p style="font-size: 14px; color: #7c3aed; margin-top: 10px;">
                    ✅ Fim da Lição 12 - Revisão: Perguntas - Parte 1
                  </p>
                  <p style="font-size: 14px; color: #0369a1; margin-top: 10px;">
                    ➡️ Continue com a Lição 13 - Revisão: Perguntas - Parte 2
                  </p>
                </div>
              `,
              question: {
                text: "O que a presença de bacilos Gram-positivos ou Gram-variáveis sem células brancas em tecidos moles pode sugerir?",
                options: [
                  "Meningite.",
                  "Gangrena gasosa.",
                  "Infecção por Streptococcus pyogenes."
                ],
                correct: 1,
                explanation: "A presença de bacilos Gram-positivos grandes sem leucócitos em tecidos moles é altamente sugestiva de gangrena gasosa por Clostridium perfringens."
              }
            }
          ]
        }
        ,{
          id: 13,
          title: "Revisão: Perguntas - Parte 2",
          duration: "35 min",
          xp: 165,
          sections: [
            {
              title: "V. Morfologias Gram-Negativas - Q1",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🔴 Seção V: Morfologias Gram-Negativas</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre as morfologias e arranjos das bactérias Gram-negativas de importância clínica.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 4 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "Cocos Gram-negativos arranjados em pares ('diplococos') geralmente indicam quais patógenos?",
                options: [
                  "Acinetobacter ou Moraxella catarrhalis.",
                  "Neisseria meningitidis ou Neisseria gonorrhoeae.",
                  "Haemophilus ou Prevotella."
                ],
                correct: 1,
                explanation: "Diplococos Gram-negativos são característicos das espécies de Neisseria, especialmente N. meningitidis (meningite) e N. gonorrhoeae (gonorreia)."
              }
            },
            {
              title: "V. Morfologias Gram-Negativas - Q2",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 4 - Seção V: Morfologias Gram-Negativas
                  </p>
                </div>
              `,
              question: {
                text: "Qual aparência é típica das espécies de Vibrio, Campylobacter e Helicobacter?",
                options: [
                  "Bacilos Gram-negativos longos e finos.",
                  "Bacilos Gram-negativos curvos ou em forma de 'S'.",
                  "Coccobacilos Gram-negativos pequenos."
                ],
                correct: 1,
                explanation: "Vibrio, Campylobacter e Helicobacter são bacilos Gram-negativos curvos ou em forma de 'S', também chamados de bacilos curvos ou espiralados."
              }
            },
            {
              title: "V. Morfologias Gram-Negativas - Q3",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 4 - Seção V: Morfologias Gram-Negativas
                  </p>
                </div>
              `,
              question: {
                text: "O que o método de Gram pode visualizar, além de bactérias e células humanas?",
                options: [
                  "Cistos parasitários.",
                  "Leveduras (Yeast).",
                  "Vírus."
                ],
                correct: 1,
                explanation: "O método de Gram pode visualizar leveduras como Candida spp., que coram como Gram-positivas (roxas). Vírus são muito pequenos para serem visualizados por microscopia óptica."
              }
            },
            {
              title: "V. Morfologias Gram-Negativas - Q4",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 4 de 4 - Seção V: Morfologias Gram-Negativas
                  </p>
                  <p style="font-size: 14px; color: #dc2626; margin-top: 10px;">
                    ➡️ Próxima: Seção VI - Cultura e Condições de Crescimento
                  </p>
                </div>
              `,
              question: {
                text: "Quais organismos podem se tornar mais longos e filamentosos após a exposição a antibióticos?",
                options: [
                  "Algumas bactérias Gram-negativas.",
                  "Apenas bactérias Gram-positivas grandes.",
                  "Apenas S. pneumoniae."
                ],
                correct: 0,
                explanation: "Algumas bactérias Gram-negativas podem se tornar filamentosas após exposição a antibióticos beta-lactâmicos, que interferem na divisão celular."
              }
            },
            {
              title: "VI. Cultura e Condições de Crescimento - Q1",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">🧫 Seção VI: Cultura e Condições de Crescimento</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre meios de cultura, condições de crescimento bacteriano e fatores de crescimento.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 6 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "Por que espécimes de sítios não estéreis devem ser inoculados em meios seletivos, como o ágar MacConkey, além dos meios não seletivos?",
                options: [
                  "Para promover o crescimento de todos os organismos presentes.",
                  "Para inibir o crescimento de bactérias colonizadoras comensais.",
                  "Para quantificar a presença de neutrófilos."
                ],
                correct: 1,
                explanation: "Meios seletivos como ágar MacConkey inibem o crescimento de bactérias comensais (como Gram-positivas), permitindo o isolamento de patógenos Gram-negativos."
              }
            },
            {
              title: "VI. Cultura e Condições de Crescimento - Q2",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 6 - Seção VI: Cultura e Condições de Crescimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual meio de cultura é seletivo e projetado para detectar bactérias Gram-negativas?",
                options: [
                  "Ágar sangue.",
                  "Ágar chocolate.",
                  "Ágar MacConkey."
                ],
                correct: 2,
                explanation: "O ágar MacConkey é um meio seletivo que inibe Gram-positivas e permite o crescimento de Gram-negativas, além de diferenciar fermentadores de lactose."
              }
            },
            {
              title: "VI. Cultura e Condições de Crescimento - Q3",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 6 - Seção VI: Cultura e Condições de Crescimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual organismo Gram-negativo é um exemplo de não fermentador de lactose no ágar MacConkey?",
                options: [
                  "Escherichia coli.",
                  "Klebsiella.",
                  "Pseudomonas."
                ],
                correct: 2,
                explanation: "Pseudomonas é um não fermentador de lactose e forma colônias incolores no ágar MacConkey. E. coli e Klebsiella fermentam lactose e formam colônias rosadas."
              }
            },
            {
              title: "VI. Cultura e Condições de Crescimento - Q4",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 4 de 6 - Seção VI: Cultura e Condições de Crescimento
                  </p>
                </div>
              `,
              question: {
                text: "Qual meio de cultura contém glóbulos vermelhos lisados que liberaram os fatores de crescimento hemin (fator X) e NAD (fator V)?",
                options: [
                  "Ágar sangue.",
                  "Ágar MacConkey.",
                  "Ágar chocolate."
                ],
                correct: 2,
                explanation: "O ágar chocolate contém hemácias lisadas que liberam hemin (fator X) e NAD (fator V), essenciais para o crescimento de bactérias fastidiosas como Haemophilus."
              }
            },
            {
              title: "VI. Cultura e Condições de Crescimento - Q5",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 5 de 6 - Seção VI: Cultura e Condições de Crescimento
                  </p>
                </div>
              `,
              question: {
                text: "Quais fatores de crescimento são essenciais para o crescimento in vitro de Haemophilus influenzae?",
                options: [
                  "Sais biliares e Lactose.",
                  "Hemina (fator X) e NAD (fator V).",
                  "Peptona e Extrato de levedura."
                ],
                correct: 1,
                explanation: "Haemophilus influenzae requer hemin (fator X) e NAD (fator V) para crescimento in vitro, disponíveis no ágar chocolate."
              }
            },
            {
              title: "VI. Cultura e Condições de Crescimento - Q6",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 6 de 6 - Seção VI: Cultura e Condições de Crescimento
                  </p>
                  <p style="font-size: 14px; color: #d97706; margin-top: 10px;">
                    ➡️ Próxima: Seção VII - Testes Bioquímicos e MALDI-TOF
                  </p>
                </div>
              `,
              question: {
                text: "Além do ágar MacConkey, qual outro tipo de meio contém antibióticos e é usado para identificar patógenos específicos em espécimes de sítios não estéreis?",
                options: [
                  "Meios enriquecidos.",
                  "Meios seletivos.",
                  "Meios diferenciais."
                ],
                correct: 1,
                explanation: "Meios seletivos contêm antibióticos ou outros agentes que inibem o crescimento de microrganismos indesejados, permitindo o isolamento de patógenos específicos."
              }
            },
            {
              title: "VII. Testes Bioquímicos e MALDI-TOF - Q1",
              content: `
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0f766e; margin-bottom: 15px;">⚗️ Seção VII: Testes Bioquímicos e MALDI-TOF</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Teste seus conhecimentos sobre testes bioquímicos rápidos e tecnologias modernas de identificação bacteriana.
                  </p>
                  <p style="font-size: 14px; color: #64748b; margin-top: 10px;">
                    Questão 1 de 3 desta seção
                  </p>
                </div>
              `,
              question: {
                text: "Qual teste de bancada é usado para distinguir estafilococos de estreptococos e enterococos?",
                options: [
                  "Teste de Coagulase.",
                  "Teste de Catalase.",
                  "Teste de Oxidase."
                ],
                correct: 1,
                explanation: "O teste de catalase distingue estafilococos (catalase positivos) de estreptococos e enterococos (catalase negativos)."
              }
            },
            {
              title: "VII. Testes Bioquímicos e MALDI-TOF - Q2",
              content: `
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 2 de 3 - Seção VII: Testes Bioquímicos e MALDI-TOF
                  </p>
                </div>
              `,
              question: {
                text: "O que o Agrupamento de Lancefield, tipicamente usado para estreptococos beta-hemolíticos, identifica nas células bacterianas?",
                options: [
                  "A produção de peróxido de hidrogênio.",
                  "Carboidratos específicos na parede celular bacteriana.",
                  "A capacidade de fermentar lactose."
                ],
                correct: 1,
                explanation: "O Agrupamento de Lancefield identifica carboidratos específicos (antígenos C) na parede celular de estreptococos beta-hemolíticos, classificando-os em grupos A, B, C, D, etc."
              }
            },
            {
              title: "VII. Testes Bioquímicos e MALDI-TOF - Q3",
              content: `
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p style="font-size: 14px; color: #64748b;">
                    Questão 3 de 3 - Seção VII: Testes Bioquímicos e MALDI-TOF
                  </p>
                  <div style="background: #dbeafe; padding: 15px; border-radius: 6px; margin-top: 15px;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">🎓 Revisão Completa!</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Parabéns por completar todas as 52 perguntas de revisão! Com base nas suas respostas, recomendamos revisar as lições correspondentes aos temas onde você teve mais dificuldade:
                    </p>
                    <ul style="margin-top: 10px; font-size: 14px; line-height: 1.8;">
                      <li><strong>Seção I:</strong> Lições 1, 2 e 3 (Introdução, Espécimes, Limitações)</li>
                      <li><strong>Seção II:</strong> Lição 1 (Introdução à Coloração de Gram)</li>
                      <li><strong>Seção III:</strong> Lições 1 e 3 (Introdução e Limitações)</li>
                      <li><strong>Seção IV:</strong> Lições 4 e 5 (Morfologias e Gram Positivos)</li>
                      <li><strong>Seção V:</strong> Lições 6 (Gram Negativos)</li>
                      <li><strong>Seção VI:</strong> Lições 8 e 9 (Cultura e Testes Bioquímicos)</li>
                      <li><strong>Seção VII:</strong> Lições 7, 9 e 10 (Provas, Testes e MALDI-TOF)</li>
                    </ul>
                  </div>
                  <p style="font-size: 14px; color: #0f766e; margin-top: 15px;">
                    ✅ Fim da Lição 13 - Revisão: Perguntas - Parte 2
                  </p>
                </div>
              `,
              question: {
                text: "Qual ferramenta de espectrometria de massa permite a identificação rápida e precisa de gênero e espécie de bactérias, desde que o organismo esteja disponível em cultura pura em meio sólido?",
                options: [
                  "Teste de Hidrólise de PYR.",
                  "MALDI-TOF (Matrix-assisted laser desorption ionization-time of flight).",
                  "PCR (Reação em Cadeia da Polimerase)."
                ],
                correct: 1,
                explanation: "MALDI-TOF é uma tecnologia de espectrometria de massa que permite identificação rápida e precisa de bactérias a partir de colônias isoladas, revolucionando o diagnóstico microbiológico."
              }
            }
          ]
        }

      ]
    },
    antibiograma: {
      title: "Teste de Suscetibilidade Antimicrobiana",
      description: "Domine os conceitos e técnicas do antibiograma",
      lessons: [
        {
          id: 1,
          title: "Definição e Métodos",
          duration: "8 min",
          xp: 40,
          sections: [
            {
              title: "Definição",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 O que é o Antibiograma?</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>antibiograma</strong> é uma ferramenta diagnóstica essencial que orienta a seleção de antibióticos 
                    através do perfil de sensibilidade dos microrganismos isolados de amostras clínicas.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Através dos <strong>testes de sensibilidade antimicrobiana (TSA)</strong> in vitro, determina-se quais 
                    antibióticos serão eficazes contra um determinado germe identificado, permitindo uma terapia direcionada 
                    e racional.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚕️ Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    O antibiograma é fundamental para evitar o uso empírico inadequado de antibióticos, reduzir a pressão 
                    seletiva que favorece o desenvolvimento de resistência e melhorar os desfechos clínicos dos pacientes.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é o principal objetivo do antibiograma?",
                options: [
                  "Identificar o tipo de microrganismo presente em uma amostra clínica.",
                  "Orientar a escolha de antibióticos a partir do perfil de sensibilidade do microrganismo.",
                  "Substituir os exames de cultura microbiológica."
                ],
                correct: 1,
                explanation: "O antibiograma tem como principal objetivo orientar a escolha de antibióticos baseando-se no perfil de sensibilidade do microrganismo isolado. A identificação do microrganismo é feita pela cultura, e o antibiograma complementa esse resultado."
              }
            },
            {
              title: "Métodos de Testes de Sensibilidade Antimicrobiana",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #b45309; margin-bottom: 15px;">🧪 Métodos de TSA</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Existem diferentes métodos para realizar testes de sensibilidade antimicrobiana, cada um com suas 
                    vantagens e aplicações específicas.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">📋 Métodos Convencionais</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Técnicas manuais tradicionais como <strong>difusão em disco (Kirby-Bauer)</strong>, diluição em ágar 
                    e diluição em caldo. São ainda utilizados em laboratórios clínicos de diversos portes.
                  </p>
                </div>
                
                <div style="background: #f0fdfa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #0f766e; margin-bottom: 10px;">🤖 Sistemas Automatizados</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Equipamentos que utilizam <strong>tecnologia óptica</strong> para detecção de crescimento bacteriano. 
                    Permitem processamento de múltiplas amostras simultaneamente com resultados mais rápidos e padronizados.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🧬 Técnicas Moleculares</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Métodos mais recentes baseados na <strong>detecção de genes de resistência</strong> através de PCR, 
                    sequenciamento e outras tecnologias genômicas. Oferecem resultados mais rápidos para patógenos de 
                    crescimento lento.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das opções descreve corretamente as técnicas moleculares utilizadas para testes de sensibilidade antimicrobiana?",
                options: [
                  "Baseiam-se na difusão em disco e diluição em ágar, sendo métodos manuais tradicionais.",
                  "Utilizam tecnologia óptica em equipamentos automatizados para detectar crescimento bacteriano.",
                  "Detectam genes de resistência por meio de PCR, sequenciamento e outras tecnologias genômicas."
                ],
                correct: 2,
                explanation: "As técnicas moleculares detectam genes de resistência através de métodos como PCR e sequenciamento genômico, oferecendo resultados mais rápidos especialmente para patógenos de crescimento lento. As opções a) e b) descrevem métodos convencionais e automatizados, respectivamente."
              }
            },
            {
              title: "Indicações Clínicas",
              content: `
                <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">📋 Critérios para TSA</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O teste de suscetibilidade antimicrobiana (TSA) deve ser realizado quando:
                  </p>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Bactéria clinicamente significativa é isolada de sítio normalmente estéril</li>
                    <li>Padrão de resistência é imprevisível para a espécie</li>
                    <li>Paciente não responde à terapia empírica</li>
                    <li>Infecção grave que requer terapia direcionada</li>
                  </ul>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  <h4 style="color: #1d4ed8; margin-bottom: 10px;">💡 Exemplo Prático</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Streptococcus pyogenes</strong> não necessita teste para penicilina, pois nunca foi 
                    relatada resistência. Já <strong>Staphylococcus aureus</strong> sempre requer teste devido 
                    à possibilidade de <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr>.
                  </p>
                </div>
              `,
              question: {
                text: "Em qual situação o teste de suscetibilidade NÃO é rotineiramente realizado?",
                options: [
                  "Quando uma bactéria clinicamente significativa é isolada de um sítio normalmente estéril.",
                  "Quando o padrão de suscetibilidade do organismo é previsível, como o de Streptococcus pyogenes à penicilina.",
                  "Quando o paciente está imunossuprimido e o organismo isolado pode ser um patógeno oportunista."
                ],
                correct: 1,
                explanation: "O TSA não é necessário quando o padrão de suscetibilidade é previsível e bem estabelecido, como a sensibilidade universal de S. pyogenes à penicilina, onde resistência nunca foi documentada."
              }
            }
          ]
        },

        {
          id: 2,
          title: "Conceitos Fundamentais de Resistência",
          duration: "12 min",
          xp: 60,
          sections: [
            {
              title: "Resistência Intrínseca vs Adquirida",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧬 Tipos de Resistência</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>resistência intrínseca</strong> é uma característica natural e inerente de uma espécie bacteriana. 
                    Por exemplo, todas as bactérias gram-negativas são intrinsecamente resistentes à vancomicina devido à 
                    sua estrutura de parede celular.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Já a <strong>resistência adquirida</strong> é desenvolvida por uma bactéria que anteriormente era sensível 
                    a um antimicrobiano. Isso pode ocorrer por mutações genéticas ou aquisição de genes de resistência.
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    O teste de suscetibilidade só é necessário para resistência adquirida, pois a resistência 
                    intrínseca é previsível e conhecida para cada espécie.
                  </p>
                </div>
              `,
              question: {
                text: "O que define a resistência intrínseca?",
                options: [
                  "Resistência desenvolvida após a exposição a um agente indutor.",
                  "Uma resistência inerente a um antimicrobiano que quase todos os membros de uma espécie bacteriana exibem.",
                  "Resistência adquirida através da transferência horizontal de genes."
                ],
                correct: 1,
                explanation: "A resistência intrínseca é uma característica natural e inerente de uma espécie bacteriana, presente em todos ou quase todos os membros da espécie, tornando o teste de suscetibilidade desnecessário para esses antimicrobianos."
              }
            },
            {
              title: "Mecanismos Moleculares",
              content: `
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #374151; margin-bottom: 15px;">🔬 Mecanismos de Ação</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Os mecanismos de resistência podem ser <strong>constitutivos</strong> (expressos continuamente) 
                    ou <strong>induzíveis</strong> (expressos apenas na presença do antimicrobiano). A resistência 
                    induzível pode ser mais difícil de detectar in vitro, mas clinicamente significativa.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a diferença entre resistência constitutiva e induzível?",
                options: [
                  "A resistência constitutiva é transferida por plasmídeos, enquanto a induzível é cromossômica.",
                  "A resistência constitutiva é expressa continuamente, enquanto a induzível ocorre após a exposição a um agente incitante.",
                  "A resistência constitutiva afeta apenas os beta-lactâmicos, enquanto a induzível afeta os macrolídeos."
                ],
                correct: 1,
                explanation: "A resistência constitutiva é expressa de forma contínua pela bactéria, enquanto a resistência induzível só é expressa quando a bactéria é exposta ao antimicrobiano ou a um agente indutor específico."
              }
            }
          ]
        },
        {
          id: 3,
          title: "Mecanismos de Resistência",
          duration: "15 min",
          xp: 70,
          sections: [
            {
              title: "Beta-lactamases",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🧪 Enzimas Beta-lactamases</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As <strong>beta-lactamases</strong> são enzimas que hidrolisam o anel beta-lactâmico presente 
                    em penicilinas, cefalosporinas, carbapenêmicos e monobactâmicos. Existem diferentes classes 
                    com espectros de ação variados.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    As <strong>ESBLs (Extended-Spectrum Beta-Lactamases)</strong> são particularmente preocupantes 
                    pois conferem resistência a cefalosporinas de amplo espectro e monobactâmicos, mas são inibidas 
                    por ácido clavulânico.
                  </p>
                </div>
              `,
              question: {
                text: "O que caracteriza uma ESBL (Extended-Spectrum Beta-Lactamase)?",
                options: [
                  "Enzima que confere resistência apenas às penicilinas.",
                  "Enzima que confere resistência a cefalosporinas de amplo espectro, mas é inibida por ácido clavulânico.",
                  "Enzima que confere resistência a todos os beta-lactâmicos, incluindo carbapenêmicos."
                ],
                correct: 1,
                explanation: "As ESBLs conferem resistência a cefalosporinas de terceira geração e monobactâmicos, mas são inibidas por inibidores de beta-lactamases como o ácido clavulânico, característica usada nos testes de detecção."
              }
            },
            {
              title: "Alteração de Alvo",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🎯 Modificação do Sítio de Ação</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Algumas bactérias desenvolvem resistência alterando o sítio de ação do antimicrobiano. 
                    O exemplo clássico é a resistência à meticilina em <strong>Staphylococcus aureus</strong> (<abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr>), 
                    onde a bactéria produz uma PBP (Penicillin-Binding Protein) alternativa com baixa afinidade 
                    pelos beta-lactâmicos.
                  </p>
                </div>
              `,
              question: {
                text: "Como o MRSA desenvolve resistência aos beta-lactâmicos?",
                options: [
                  "Produzindo beta-lactamases que destroem o antibiótico.",
                  "Produzindo uma PBP alternativa com baixa afinidade pelos beta-lactâmicos.",
                  "Aumentando o efluxo do antibiótico para fora da célula."
                ],
                correct: 1,
                explanation: "O MRSA produz PBP2a, uma proteína ligadora de penicilina alternativa codificada pelo gene mecA, que tem baixa afinidade pelos beta-lactâmicos, permitindo que a síntese da parede celular continue mesmo na presença do antibiótico."
              }
            },
            {
              title: "Conceito e Detecção",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🧬 Heterorresistência</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>heterorresistência</strong> é um fenômeno onde uma população bacteriana aparentemente 
                    homogênea contém subpopulações com diferentes níveis de resistência ao mesmo antimicrobiano. 
                    Isso pode levar a falhas terapêuticas mesmo quando o teste de suscetibilidade indica sensibilidade.
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Desafio Diagnóstico</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A heterorresistência é difícil de detectar pelos métodos convencionais de teste de suscetibilidade, 
                    pois as subpopulações resistentes podem representar menos de 1% da população total.
                  </p>
                </div>
              `,
              question: {
                text: "O que é heterorresistência?",
                options: [
                  "A resistência de uma única bactéria a múltiplas classes de antibióticos.",
                  "A expressão heterogênea de um mecanismo de resistência, levando a subpopulações com diferentes graus de resistência fenotípica.",
                  "Uma resistência que só se manifesta in vivo, mas não in vitro."
                ],
                correct: 1,
                explanation: "A heterorresistência refere-se à presença de subpopulações bacterianas com diferentes níveis de resistência dentro de uma cultura aparentemente homogênea, o que pode resultar em falhas terapêuticas inesperadas."
              }
            }
          ]
        },
        {
          id: 4,
          title: "Métodos Convencionais de TSA",
          duration: "18 min",
          xp: 90,
          sections: [
            // Card 1: Características e Limitações
{
  title: "Características e Limitações",
  content: `
    <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Natureza Fenotípica</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        Os métodos convencionais são <strong>fenotípicos</strong>, ou seja, baseiam-se na observação do 
        comportamento bacteriano na presença do antibiótico, não na detecção direta dos genes de resistência.
      </p>
    </div>
    
    <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #dc2626;">
      <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Principais Limitações</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        Dependem do <strong>crescimento bacteriano adequado</strong>, o que pode ser uma etapa limitante 
        para bactérias mais exigentes.
      </p>
      <div style="background: #fee2e2; padding: 15px; border-radius: 8px;">
        <p style="font-size: 14px; line-height: 1.5; margin: 0;">
          <strong>Exemplo:</strong> <em>Granulicatella</em> spp. e <em>Abiotrophia</em> sp. requerem 
          cisteína ou vitamina B6 para crescimento adequado, dificultando testes convencionais.
        </p>
      </div>
    </div>
  `,
  question: {
    text: "Qual das alternativas descreve corretamente uma limitação dos métodos fenotípicos convencionais?",
    options: [
      "Não podem detectar genes de resistência porque não utilizam cultura bacteriana.",
      "Dependem de crescimento bacteriano adequado, o que dificulta o teste em microrganismos mais exigentes.",
      "Detectam diretamente mutações genéticas responsáveis pela resistência antimicrobiana."
    ],
    correct: 1,
    explanation: "Os métodos fenotípicos convencionais dependem do crescimento bacteriano adequado, o que representa uma limitação importante para bactérias fastidiosas ou exigentes que requerem condições especiais de cultivo."
  }
},

// Card 2: Elementos Críticos para Padronização do TSA
{
  title: "Elementos Críticos para Padronização do TSA",
  content: `
    <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #7c3aed; margin-bottom: 15px;">🎯 Seleção de Colônias</h3>
      <p style="font-size: 16px; line-height: 1.6;">
        Escolha adequada de <strong>colônias puras e representativas</strong> do patógeno a ser testado, 
        evitando contaminações ou populações mistas.
      </p>
    </div>
    
    <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #059669; margin-bottom: 15px;">⚗️ Inóculo Padronizado</h3>
      <p style="font-size: 16px; line-height: 1.6;">
        Preparação de uma suspensão bacteriana com concentração precisa 
        (<strong>1 a 2×10<sup>8</sup> UFC/mL</strong>), essencial para reprodutibilidade dos resultados.
      </p>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #d97706; margin-bottom: 15px;">📋 Protocolos Validados</h3>
      <p style="font-size: 16px; line-height: 1.6;">
        Seguir rigorosamente metodologias padronizadas internacionalmente para garantir precisão e 
        reprodutibilidade <strong>intra e interlaboratorial</strong>.
      </p>
    </div>
  `,
  question: {
    text: "Quais são os três elementos fundamentais para garantir a confiabilidade e a reprodutibilidade dos testes de sensibilidade antimicrobiana?",
    options: [
      "Seleção adequada de colônias, inóculo padronizado e uso de protocolos validados.",
      "Escolha aleatória de colônias, uso de qualquer concentração bacteriana e protocolos livres.",
      "Teste com múltiplas espécies bacterianas, concentração variável e métodos empíricos."
    ],
    correct: 0,
    explanation: "Os três elementos críticos são: seleção adequada de colônias puras, preparação de inóculo padronizado (1-2×10⁸ UFC/mL) e seguimento rigoroso de protocolos validados internacionalmente, garantindo resultados confiáveis e reprodutíveis."
  }
},

// Card 3: O Método Qualitativo de Disco-Difusão (Kirby-Bauer) - MODIFICADO
{
  title: "O Método Qualitativo de Disco-Difusão (Kirby-Bauer)",
  content: `
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #2563eb; margin-bottom: 15px;">🎯 Método de Disco-Difusão</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        O método de <strong>disco-difusão (Kirby-Bauer)</strong> é o teste qualitativo mais utilizado 
        devido à sua simplicidade e padronização. O antimicrobiano difunde do disco através do ágar, 
        criando um gradiente de concentração. O diâmetro do halo de inibição é inversamente proporcional 
        à <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>.
      </p>
    </div>
    
    <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #10b981;">
      <h4 style="color: #059669; margin-bottom: 10px;">✅ Vantagens do Método</h4>
      <ul style="font-size: 14px; line-height: 1.6; margin-left: 20px;">
        <li><strong>Ampla padronização internacional</strong> (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>, <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr>)</li>
        <li><strong>Largamente utilizado</strong> em laboratórios de diversos portes</li>
        <li><strong>Baixo custo</strong> e simplicidade operacional</li>
      </ul>
    </div>
    
    <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #374151; margin-bottom: 10px;">📏 Interpretação dos Halos</h4>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr style="background: #e5e7eb;">
          <th style="padding: 8px; border: 1px solid #d1d5db;">Categoria</th>
          <th style="padding: 8px; border: 1px solid #d1d5db;">Interpretação</th>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #059669;">Sensível (S)</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">Halo ≥ ponto de corte superior</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #d97706;">Intermediário (I)</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">Halo entre os pontos de corte</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #dc2626;">Resistente (R)</td>
          <td style="padding: 8px; border: 1px solid #d1d5db;">Halo ≤ ponto de corte inferior</td>
        </tr>
      </table>
    </div>
  `,
  question: {
    text: "O método de difusão em disco (Kirby-Bauer) fornece que tipo de resultado?",
    options: [
      "Um resultado qualitativo, categorizando o isolado como sensível, sensível dose-dependente, intermediário ou resistente.",
      "Um resultado quantitativo na forma de Concentração Inibitória Mínima (CIM).",
      "Um resultado genotípico, indicando a presença de genes de resistência."
    ],
    correct: 0,
    explanation: "O método de disco-difusão fornece resultados qualitativos, categorizando os isolados em diferentes classes de suscetibilidade baseadas no diâmetro dos halos de inibição comparados aos pontos de corte estabelecidos."
  }
},

// Card 4: Correlação entre Zona de Inibição e CIM
{
  title: "Correlação entre Zona de Inibição e CIM",
  content: `
    <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #0369a1; margin-bottom: 15px;">📊 Fatores que Afetam a Zona de Inibição</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        O diâmetro da zona de inibição formada ao redor do disco é diretamente afetado por dois fatores principais:
      </p>
    </div>
    
    <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #059669; margin-bottom: 10px;">🦠 Suscetibilidade do Organismo</h4>
      <p style="font-size: 16px; line-height: 1.6;">
        Quanto mais sensível for o microrganismo ao antibiótico, <strong>maior será a zona de inibição</strong> 
        formada ao redor do disco.
      </p>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #d97706; margin-bottom: 10px;">💧 Taxa de Difusão no Ágar</h4>
      <p style="font-size: 16px; line-height: 1.6;">
        Características físico-químicas do antibiótico influenciam sua capacidade de difusão no meio de cultura, 
        afetando o tamanho da zona.
      </p>
    </div>
    
    <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #7c3aed;">
      <h4 style="color: #7c3aed; margin-bottom: 10px;">📉 Correlação Inversamente Proporcional</h4>
      <p style="font-size: 16px; line-height: 1.6;">
        Existe uma correlação <strong>inversamente proporcional</strong> entre o tamanho da zona de inibição 
        e a concentração inibitória mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>): <strong>quanto maior a zona, menor a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></strong> e vice-versa.
      </p>
    </div>
  `,
  question: {
    text: "Qual fator NÃO influencia diretamente o diâmetro da zona de inibição no teste de disco-difusão?",
    options: [
      "Suscetibilidade do microrganismo ao antibiótico.",
      "Taxa de difusão do antibiótico no ágar.",
      "Tipo de coloração de Gram do microrganismo."
    ],
    correct: 2,
    explanation: "O tipo de coloração de Gram não influencia diretamente o diâmetro da zona de inibição. Os fatores determinantes são a suscetibilidade do microrganismo e as características físico-químicas do antibiótico que afetam sua difusão no ágar."
  }
},

// Card 5: Limitações do Método de Difusão em Disco
{
  title: "Limitações do Método de Difusão em Disco",
  content: `
    <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #dc2626;">
      <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Baixa Automação</h3>
      <p style="font-size: 16px; line-height: 1.6;">
        A falta de automação dificulta a produção em quantidade, tornando o método <strong>laborioso</strong> 
        para laboratórios de grande porte ou com alto volume de amostras.
      </p>
    </div>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #d97706; margin-bottom: 15px;">🦠 Bactérias Fastidiosas</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        Bactérias exigentes (fastidiosas) ou de crescimento lento não têm padronização adequada.
      </p>
      <div style="background: #fde68a; padding: 15px; border-radius: 8px;">
        <p style="font-size: 14px; line-height: 1.5; margin: 0;">
          <strong>Exemplo:</strong> Grupo HACEK (<em>Aggregatibacter</em> spp, <em>Cardiobacterium</em> spp, 
          <em>Eikenella corrodens</em> e <em>Kingella</em> spp).
        </p>
      </div>
    </div>
    
    <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Necessidade de <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> Quantitativa</h3>
      <p style="font-size: 16px; line-height: 1.6;">
        Em certas infecções graves, uma <strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> quantitativa precisa</strong> é necessária para determinar 
        a melhor abordagem terapêutica, especialmente para antibióticos como <strong>vancomicina</strong> e 
        <strong>polimixinas</strong>.
      </p>
    </div>
  `,
  question: {
    text: "Qual das opções abaixo representa uma limitação importante do método de difusão em disco?",
    options: [
      "Alta automação, dificultando o uso em laboratórios de pequeno porte.",
      "Ausência de padronização adequada para bactérias fastidiosas ou de crescimento lento.",
      "Incapacidade de detectar bactérias Gram-negativas."
    ],
    correct: 1,
    explanation: "Uma limitação importante do método de difusão em disco é a ausência de padronização adequada para bactérias fastidiosas ou de crescimento lento, como o grupo HACEK, que requerem condições especiais de cultivo."
  }
}


          ]
        },
                {
          id: 5,
          title: "Métodos Quantitativos",
          duration: "30 min",
          xp: 150,
          sections: [
    {
      title: "Vantagens dos Métodos Quantitativos",
      content: `
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #0369a1; margin-bottom: 15px;">✅ Vantagens dos Métodos Quantitativos</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Os métodos quantitativos representam o <strong>padrão-ouro</strong> para avaliação de 
            sensibilidade antimicrobiana, oferecendo vantagens significativas sobre métodos qualitativos.
          </p>
          
          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #1e40af; margin-bottom: 15px;">🎯 Precisão Diagnóstica</h4>
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              Permitem a determinação precisa da <strong>Concentração Inibitória Mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>)</strong>, 
              considerada o <strong>padrão-ouro</strong> para avaliação de sensibilidade.
            </p>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
              A <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> fornece um valor numérico exato, permitindo decisões terapêuticas mais precisas.
            </p>
          </div>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #059669; margin-bottom: 15px;">🌍 Padronização Internacional</h4>
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              Protocolos bem estabelecidos publicados por organizações como <strong><abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr></strong>, 
              <strong>EUCAST</strong> e <strong>FDA</strong> garantem resultados confiáveis e comparáveis.
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong><abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>:</strong> Clinical and Laboratory Standards Institute (EUA)</li>
              <li><strong>EUCAST:</strong> European Committee on Antimicrobial Susceptibility Testing</li>
              <li><strong>FDA:</strong> Food and Drug Administration (EUA)</li>
            </ul>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #d97706; margin-bottom: 15px;">💊 Aplicação Clínica</h4>
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              Existem <strong>infecções específicas</strong> para as quais um resultado quantitativo é 
              essencial para otimizar o regime de tratamento antimicrobiano.
            </p>
            <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 10px 0;">
              <h5 style="color: #c2410c; margin-bottom: 10px;">📋 Exemplos de Aplicação Clínica</h5>
              <ul style="margin-left: 20px; line-height: 1.8;">
                <li><strong>Endocardite:</strong> Determinar dose ideal de antibióticos</li>
                <li><strong>Meningite:</strong> Garantir penetração adequada no <abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr></li>
                <li><strong>Osteomielite:</strong> Terapia prolongada requer <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> precisa</li>
                <li><strong>Bacteremia:</strong> Ajustar dose em pacientes críticos</li>
                <li><strong>Infecções por patógenos resistentes:</strong> Orientar terapia combinada</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Comparação: Qualitativo vs. Quantitativo</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #3b82f6; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Característica</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Método Qualitativo</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Método Quantitativo</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Resultado</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">S / I / R</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Valor numérico (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>)</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Precisão</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Moderada</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alta (padrão-ouro)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Custo</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Baixo</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Elevado</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Tempo</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Rápido</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Mais demorado</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Aplicação</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Triagem rotineira</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Casos complexos</td>
            </tr>
          </table>
        </div>
      `,
      question: {
        text: "Qual é a principal vantagem dos métodos que determinam a Concentração Inibitória Mínima (CIM)?",
        options: [
          "Permitem apenas identificar se a bactéria é sensível ou resistente, sem quantificar a resposta",
          "Proporcionam uma avaliação quantitativa precisa da sensibilidade antimicrobiana, servindo como padrão-ouro para orientação terapêutica",
          "São utilizados apenas para fins de pesquisa, sem aplicação clínica relevante"
        ],
        correct: 1,
        explanation: "A principal vantagem dos métodos quantitativos é proporcionar uma avaliação quantitativa precisa da sensibilidade antimicrobiana através da determinação da CIM, considerada o padrão-ouro. Isso permite decisões terapêuticas mais precisas, especialmente em infecções graves como endocardite, meningite e osteomielite, onde um resultado numérico exato é essencial para otimizar o regime de tratamento."
      }
    },
    {
      title: "Concentração Inibitória Mínima (CIM)",
      content: `
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #dc2626; margin-bottom: 15px;">🎯 Concentração Inibitória Mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>)</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            A <strong>Concentração Inibitória Mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>)</strong> é a menor concentração de um 
            antimicrobiano capaz de <strong>inibir o crescimento visível</strong> de um microrganismo 
            após incubação em condições padronizadas.
          </p>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #991b1b; margin-bottom: 10px;">📐 Definição Técnica</h4>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> (MIC - Minimum Inhibitory Concentration):</strong> Menor concentração de 
              antimicrobiano (em mg/L ou μg/mL) que previne o crescimento bacteriano visível após 
              16-20 horas de incubação a 35-37°C.
            </p>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
              Importante: A <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> inibe o crescimento, mas não necessariamente mata a bactéria.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">🔬 Interpretação da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            A <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> é comparada com <strong>pontos de corte (breakpoints)</strong> estabelecidos por 
            organizações internacionais para classificar o microrganismo como:
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #0ea5e9; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Categoria</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Interpretação</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Significado Clínico</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sensível (S)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;"><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> ≤ ponto de corte S</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alta probabilidade de sucesso terapêutico</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Intermediário (I)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Entre S e R</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Eficaz em doses altas ou sítios concentrados</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Resistente (R)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">CIM > ponto de corte R</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alta probabilidade de falha terapêutica</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">💡 Exemplo Prático</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            <strong>Situação:</strong> <em>E. coli</em> isolada de urina, testada contra Ciprofloxacino
          </p>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> determinada:</strong> 0,25 mg/L</li>
            <li><strong>Ponto de corte <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> (S):</strong> ≤ 1 mg/L</li>
            <li><strong>Ponto de corte <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> (R):</strong> ≥ 4 mg/L</li>
            <li><strong>Interpretação:</strong> Sensível (S)</li>
            <li><strong>Decisão clínica:</strong> Ciprofloxacino é apropriado para tratamento</li>
          </ul>
        </div>
      `,
      question: {
        text: "O que significa a Concentração Inibitória Mínima (CIM) de um antimicrobiano?",
        options: [
          "A concentração que mata completamente todas as bactérias em 24 horas",
          "A menor concentração capaz de inibir o crescimento visível do microrganismo após incubação padronizada",
          "A dose máxima que pode ser administrada ao paciente sem toxicidade"
        ],
        correct: 1,
        explanation: "A CIM é a menor concentração de antimicrobiano capaz de inibir o crescimento visível de um microrganismo após incubação em condições padronizadas (16-20h a 35-37°C). É importante notar que a CIM inibe o crescimento, mas não necessariamente mata a bactéria. A CIM é comparada com pontos de corte para classificar o microrganismo como Sensível, Intermediário ou Resistente."
      }
    },
    {
      title: "Métodos de Determinação da CIM",
      content: `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #7c3aed; margin-bottom: 15px;">🔬 Métodos de Determinação da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Existem diversos métodos padronizados para determinar a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>, cada um com suas 
            <strong>vantagens, limitações e aplicações específicas</strong>.
          </p>
          
          <div style="background: #ede9fe; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #6d28d9; margin-bottom: 15px;">📊 Principais Métodos</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <tr style="background: #7c3aed; color: white;">
                <th style="padding: 10px; border: 1px solid #ddd;">Método</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Princípio</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Aplicação</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Diluição em Ágar</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Placas com diferentes [ATB]</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Múltiplos isolados</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Diluição em Caldo</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Tubos/microplacas com [ATB]</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Padrão-ouro</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Gradiente (Etest)</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Tira com gradiente de [ATB]</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Rotina clínica</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Automatizado</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Painéis comerciais</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Alto volume</td>
              </tr>
            </table>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">⚖️ Critérios de Seleção do Método</h4>
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">🎯 Considerar:</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Volume de testes:</strong> Automatizado para alto volume</li>
              <li><strong>Microrganismo:</strong> Alguns exigem métodos específicos</li>
              <li><strong>Urgência:</strong> Gradiente mais rápido que diluição</li>
              <li><strong>Custo:</strong> Diluição em ágar mais econômica para múltiplos isolados</li>
              <li><strong>Expertise técnica:</strong> Automatizado requer menos treinamento</li>
              <li><strong>Padronização:</strong> Seguir recomendações <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>/EUCAST</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🔍 Fatores que Afetam a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Inóculo bacteriano:</strong> Deve ser padronizado (0,5 McFarland)</li>
            <li><strong>Meio de cultura:</strong> Mueller-Hinton é o padrão</li>
            <li><strong>pH do meio:</strong> Afeta atividade de alguns antibióticos</li>
            <li><strong>Temperatura de incubação:</strong> 35-37°C padronizado</li>
            <li><strong>Tempo de incubação:</strong> 16-20 horas para maioria das bactérias</li>
            <li><strong>Atmosfera:</strong> CO₂ para alguns microrganismos</li>
          </ul>
        </div>
      `,
      question: {
        text: "Quais fatores devem ser rigorosamente padronizados para garantir a confiabilidade da determinação da CIM?",
        options: [
          "Apenas a concentração do antibiótico e o tipo de bactéria",
          "Inóculo bacteriano, meio de cultura, pH, temperatura, tempo de incubação e atmosfera",
          "Somente o tempo de incubação e a temperatura"
        ],
        correct: 1,
        explanation: "A determinação confiável da CIM requer padronização rigorosa de múltiplos fatores: inóculo bacteriano (0,5 McFarland), meio de cultura (Mueller-Hinton), pH do meio, temperatura (35-37°C), tempo de incubação (16-20h) e atmosfera (CO₂ quando necessário). Variações em qualquer desses parâmetros podem alterar significativamente o resultado da CIM."
      }
    },
    {
      title: "Principais Métodos Quantitativos",
      content: `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #d97706; margin-bottom: 15px;">🧪 Principais Métodos Quantitativos</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Os métodos de <strong>diluição</strong> são os mais utilizados para determinação precisa 
            da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>, cada um com características específicas que os tornam adequados para diferentes 
            situações clínicas e laboratoriais.
          </p>
        </div>
        
        <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #c2410c; margin-bottom: 15px;">🔬 Método 1: Diluição em Ágar</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Cultura em ágar com diferentes concentrações de antibiótico.
          </p>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #b45309; margin-bottom: 10px;">📋 Procedimento</h5>
            <ol style="margin-left: 20px; line-height: 1.8;">
              <li>Preparar placas de ágar Mueller-Hinton com diferentes concentrações de antibiótico</li>
              <li>Inocular múltiplos isolados bacterianos em cada placa</li>
              <li>Incubar a 35-37°C por 16-20 horas</li>
              <li>Determinar a menor concentração que inibe crescimento visível</li>
            </ol>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #4b5563; margin-bottom: 10px;">✅ Vantagens</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Boa reprodutibilidade:</strong> Resultados consistentes entre laboratórios</li>
              <li><strong>Eficiente para múltiplos isolados:</strong> Até 36 cepas por placa</li>
              <li><strong>Visualização direta:</strong> Facilita detecção de crescimento misto</li>
              <li><strong>Padrão de referência:</strong> Recomendado por <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>/EUCAST</li>
            </ul>
          </div>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #991b1b; margin-bottom: 10px;">❌ Desvantagens</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Metodologia trabalhosa:</strong> Preparo de múltiplas placas</li>
              <li><strong>Alto custo de reagentes:</strong> Grande quantidade de ágar e antibiótico</li>
              <li><strong>Tempo de execução:</strong> Preparo demorado</li>
              <li><strong>Espaço de incubação:</strong> Requer múltiplas incubadoras</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #075985; margin-bottom: 15px;">🧪 Método 2: Diluição em Caldo</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Série de diluições de antimicrobiano em meio líquido.
          </p>
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #0369a1; margin-bottom: 10px;">📋 Procedimento</h5>
            <ol style="margin-left: 20px; line-height: 1.8;">
              <li>Preparar diluições seriadas do antibiótico em caldo Mueller-Hinton</li>
              <li>Inocular suspensão bacteriana padronizada em cada tubo/poço</li>
              <li>Incubar a 35-37°C por 16-20 horas</li>
              <li>Determinar a menor concentração sem turvação visível</li>
            </ol>
          </div>
          
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #4b5563; margin-bottom: 10px;">✅ Vantagens</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Painéis comerciais disponíveis:</strong> Sistemas automatizados (Vitek, Phoenix)</li>
              <li><strong>Alta reprodutibilidade:</strong> Padrão-ouro para <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></li>
              <li><strong>Permite determinar <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> com precisão:</strong> Valores exatos</li>
              <li><strong>Microdiluição:</strong> Economia de reagentes em microplacas</li>
              <li><strong>Automação:</strong> Reduz erro humano</li>
            </ul>
          </div>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #991b1b; margin-bottom: 10px;">❌ Desvantagens</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Custo elevado por teste:</strong> Painéis comerciais são caros</li>
              <li><strong>Equipamento necessário:</strong> Investimento em automação</li>
              <li><strong>Manutenção:</strong> Sistemas automatizados requerem calibração</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Comparação: Ágar vs. Caldo</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #6366f1; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Característica</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Diluição em Ágar</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Diluição em Caldo</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Reprodutibilidade</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Boa</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alta (padrão-ouro)</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Custo</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alto (reagentes)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Elevado (painéis)</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Trabalho</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Trabalhoso</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Automatizável</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Aplicação</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Múltiplos isolados</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Rotina clínica</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Precisão</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Boa</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Excelente</td>
            </tr>
          </table>
        </div>
      `,
      question: {
        text: "Qual é a principal característica comum entre os métodos de diluição em ágar e diluição em caldo para testes de sensibilidade antimicrobiana?",
        options: [
          "Ambos são métodos qualitativos e de baixo custo",
          "Ambos permitem determinar a Concentração Inibitória Mínima (CIM) com boa reprodutibilidade, embora tenham custo elevado",
          "Ambos utilizam apenas meios sólidos e dispensam o uso de antibióticos em diferentes concentrações"
        ],
        correct: 1,
        explanation: "Tanto a diluição em ágar quanto a diluição em caldo são métodos quantitativos que permitem determinar a CIM com boa a alta reprodutibilidade. Ambos têm custo elevado: a diluição em ágar devido ao alto consumo de reagentes (ágar e antibióticos), e a diluição em caldo devido aos painéis comerciais. Apesar do custo, são métodos padrão-ouro para determinação precisa da CIM."
      }
    },
    {
      title: "Métodos de Gradiente Antimicrobiano",
      content: `
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #059669; margin-bottom: 15px;">📏 Métodos de Gradiente Antimicrobiano</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            O método de <strong>gradiente antimicrobiano</strong> representa uma alternativa prática 
            e eficiente entre os métodos de difusão em disco (qualitativos) e os métodos de diluição 
            (quantitativos trabalhosos).
          </p>
          
          <div style="background: #d1fae5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #065f46; margin-bottom: 10px;">🎯 Princípio do Método</h4>
            <p style="font-size: 14px; line-height: 1.6;">
              Utiliza <strong>tiras plásticas impregnadas com gradiente contínuo de concentração de 
              antibiótico</strong>, permitindo leitura direta da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> no ponto de intersecção entre a 
              elipse de inibição e a tira graduada.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 15px;">📋 Procedimento</h4>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">🔬 Passo a Passo</h5>
            <ol style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Preparo do inóculo:</strong> Utiliza suspensão bacteriana padronizada 
              (1 a 2×10⁸ UFC/mL, equivalente a 0,5 McFarland)</li>
              <li><strong>Inoculação:</strong> Espalhar uniformemente em placa de Mueller-Hinton 
              (técnica de swab em 3 direções)</li>
              <li><strong>Aplicação da tira:</strong> Tiras plásticas impregnadas com gradiente de 
              concentração de antibiótico são aplicadas (Ex: <strong>Etest</strong>, <strong>MIC Test Strip</strong>)</li>
              <li><strong>Incubação:</strong> 35-37°C por 16-20 horas em atmosfera adequada</li>
              <li><strong>Leitura:</strong> Observar o ponto de intersecção da elipse de inibição com 
              a escala graduada na tira</li>
            </ol>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #d97706; margin-bottom: 10px;">📊 Exemplo de Leitura</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Situação:</strong> Teste de Vancomicina contra <em>Staphylococcus aureus</em>
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Tira graduada: 0,016 a 256 mg/L</li>
              <li>Elipse de inibição intersecta a tira em: <strong>1,0 mg/L</strong></li>
              <li><strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> determinada: 1,0 mg/L</strong></li>
              <li>Ponto de corte <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> (S): ≤ 2 mg/L</li>
              <li><strong>Interpretação: Sensível</strong></li>
            </ul>
          </div>
        </div>
        
        <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #059669; margin-bottom: 15px;">✅ Vantagens</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #10b981; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Vantagem</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Descrição</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Facilidade de execução</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Técnica simples, similar ao disco-difusão</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Leitura direta da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Valor numérico exato, sem necessidade de cálculos</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Aplicável para diversos microrganismos</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Bactérias fastidiosas, fungos, micobactérias</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Alternativa intermediária</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Entre difusão em disco e microdiluição</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Flexibilidade</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Testar antibióticos específicos conforme necessidade</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Boa correlação</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Resultados comparáveis à microdiluição (r > 0,95)</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🎯 Aplicações Clínicas Específicas</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Bactérias fastidiosas:</strong> <em>Streptococcus pneumoniae</em>, <em>Haemophilus</em></li>
            <li><strong>Confirmação de resistência:</strong> <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr>, <abbr title="Vancomycin-Resistant Enterococcus - Enterococo resistente à vancomicina" style="text-decoration: underline dotted; cursor: help; border: none;">VRE</abbr>, CRE</li>
            <li><strong>Fungos:</strong> Determinação de <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> para azóis, anfotericina B</li>
            <li><strong>Micobactérias:</strong> Teste de sensibilidade para tuberculose</li>
            <li><strong>Infecções graves:</strong> Quando <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> precisa é necessária</li>
            <li><strong>Pesquisa:</strong> Estudos de farmacodinâmica</li>
          </ul>
        </div>
        
        <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Limitações</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Custo:</strong> Tiras comerciais são mais caras que discos</li>
            <li><strong>Armazenamento:</strong> Requer refrigeração (-20°C)</li>
            <li><strong>Leitura subjetiva:</strong> Interpretação da elipse pode variar</li>
            <li><strong>Não automatizável:</strong> Leitura manual necessária</li>
          </ul>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Comparação com Outros Métodos</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #3b82f6; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Método</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Resultado</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Facilidade</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Custo</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Disco-difusão</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">S / I / R</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Muito fácil</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Baixo</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Gradiente (Etest)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;"><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> exata</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Fácil</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Moderado</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Microdiluição</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;"><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> exata</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Complexo</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alto</td>
            </tr>
          </table>
        </div>
      `,
      question: {
        text: "Qual das alternativas descreve corretamente a principal vantagem do método que utiliza tiras impregnadas com gradiente de antibiótico, como o Etest?",
        options: [
          "É um método qualitativo que apenas indica se a bactéria é sensível ou resistente, sem determinar a CIM",
          "Permite leitura direta da Concentração Inibitória Mínima (CIM), com execução simples e aplicável a diversos microrganismos",
          "É mais complexo e demorado que a microdiluição, sendo usado apenas para confirmar resultados duvidosos"
        ],
        correct: 1,
        explanation: "A principal vantagem do método de gradiente (Etest) é permitir a leitura direta da CIM com execução simples, similar ao disco-difusão. É aplicável a diversos microrganismos (bactérias fastidiosas, fungos, micobactérias) e representa uma alternativa intermediária entre difusão em disco (qualitativo) e microdiluição (quantitativo trabalhoso). A correlação com microdiluição é excelente (r > 0,95)."
      }
    }
  ]
        },
                {
          id: 6,
          title: "Sistemas Automatizados",
          duration: "12 min",
          xp: 60,
          sections: [
            {
              title: "Princípios dos Sistemas Automatizados",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🤖 Automação em Microbiologia</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os sistemas automatizados (como VITEK, Phoenix, MicroScan) utilizam <strong>detecção óptica</strong> 
                    do crescimento bacteriano na presença de diferentes concentrações de antimicrobianos. 
                    Isso permite determinação rápida da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> e interpretação automática.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">✅ Vantagens</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Resultados em 4-8 horas (vs 16-24h métodos convencionais)</li>
                    <li>Padronização e redução de erros técnicos</li>
                    <li>Identificação simultânea de espécie e TSA</li>
                    <li>Interpretação automática com alertas de resistência</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual é a principal vantagem dos sistemas automatizados de teste de suscetibilidade?",
                options: [
                  "São os métodos mais baratos disponíveis.",
                  "Podem fornecer resultados mais rapidamente por detectarem o crescimento bacteriano de forma óptica.",
                  "Eliminam completamente a necessidade de testes fenotípicos confirmatórios."
                ],
                correct: 1,
                explanation: "A principal vantagem dos sistemas automatizados é a rapidez, fornecendo resultados de identificação e suscetibilidade em 4-8 horas através da detecção óptica automatizada do crescimento, comparado às 16-24 horas dos métodos convencionais."
              }
            }
          ,
            {
              title: "Funcionamento dos Sistemas Automatizados",
  content: `
    <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #0369a1; margin-bottom: 15px;">⚙️ Funcionamento dos Sistemas Automatizados</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        Os sistemas automatizados de microdiluição representam tecnologia avançada para testes de 
        sensibilidade antimicrobiana, oferecendo <strong>rapidez, precisão e padronização</strong>.
      </p>
      
      <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #1e40af; margin-bottom: 15px;">🔬 Preparação</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Bandejas de diferentes concentrações de antibióticos</strong> com quantidades 
          padronizadas de bactérias são preparadas.
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li>Microplacas com múltiplos poços</li>
          <li>Diluições seriadas de antimicrobianos</li>
          <li>Inóculo bacteriano padronizado (0,5 McFarland)</li>
          <li>Controles de qualidade integrados</li>
        </ul>
      </div>
      
      <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #059669; margin-bottom: 15px;">📊 Monitoramento</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          Um <strong>sistema automatizado monitora continuamente o crescimento</strong> em cada poço 
          através de sensores ópticos.
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Sensores ópticos:</strong> Detectam turvação (crescimento bacteriano)</li>
          <li><strong>Leitura contínua:</strong> Monitoramento a cada 15-30 minutos</li>
          <li><strong>Detecção precoce:</strong> Resultados em 6-18 horas</li>
          <li><strong>Precisão:</strong> Medição objetiva sem interpretação subjetiva</li>
        </ul>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #d97706; margin-bottom: 15px;">💻 Análise</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Vários antibióticos são testados simultaneamente</strong> e os resultados são 
          interpretados por software especializado.
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Processamento paralelo:</strong> 20-30 antibióticos por isolado</li>
          <li><strong>Software inteligente:</strong> Interpretação automática baseada em <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>/EUCAST</li>
          <li><strong>Identificação simultânea:</strong> Muitos sistemas identificam o microrganismo</li>
          <li><strong>Relatórios padronizados:</strong> Geração automática de laudos</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #4b5563; margin-bottom: 10px;">✅ Vantagens dos Sistemas Automatizados</h4>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background: #10b981; color: white;">
          <th style="padding: 10px; border: 1px solid #ddd;">Vantagem</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Descrição</th>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Rapidez</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">Resultados em 6-18h vs. 24-48h manual</td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Padronização</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">Reduz variabilidade entre técnicos</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Alto volume</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">Processa 100+ amostras/dia</td>
        </tr>
        <tr style="background: #f9fafb;">
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Rastreabilidade</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">Registro eletrônico completo</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Menor erro</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">Automação reduz erro humano</td>
        </tr>
      </table>
    </div>
    
    <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #dc2626; margin-bottom: 15px;">⚠️ Limitação</h4>
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
        <strong>Custo elevado do equipamento e insumos</strong>, proibitivo para laboratórios de 
        pequeno porte.
      </p>
      
      <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 10px 0;">
        <h5 style="color: #991b1b; margin-bottom: 10px;">💰 Análise de Custos</h5>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Equipamento:</strong> R$ 200.000 - R$ 500.000 (investimento inicial)</li>
          <li><strong>Painéis:</strong> R$ 50 - R$ 150 por teste</li>
          <li><strong>Manutenção:</strong> Contratos anuais de R$ 20.000 - R$ 50.000</li>
          <li><strong>Treinamento:</strong> Equipe especializada necessária</li>
          <li><strong>Volume mínimo:</strong> Necessário para justificar investimento</li>
        </ul>
      </div>
      
      <p style="font-size: 14px; line-height: 1.6; margin-top: 10px; font-style: italic;">
        <strong>Impacto:</strong> Laboratórios de pequeno porte frequentemente dependem de métodos 
        manuais (disco-difusão) ou terceirizam testes para laboratórios de referência.
      </p>
    </div>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #4b5563; margin-bottom: 10px;">🏥 Principais Sistemas Comerciais</h4>
      <ul style="margin-left: 20px; line-height: 1.8;">
        <li><strong>Vitek 2</strong> (bioMérieux) - Líder de mercado</li>
        <li><strong>Phoenix</strong> (BD) - Alto desempenho</li>
        <li><strong>MicroScan</strong> (Beckman Coulter) - Versatilidade</li>
        <li><strong>Sensititre</strong> (Thermo Fisher) - Microdiluição em caldo</li>
      </ul>
    </div>
  `,
  question: {
    text: "Qual é a principal desvantagem dos sistemas automatizados de microdiluição utilizados para testes de sensibilidade antimicrobiana?",
    options: [
      "Baixa precisão na determinação da Concentração Inibitória Mínima (CIM)",
      "Impossibilidade de testar vários antibióticos simultaneamente",
      "Alto custo do equipamento e dos insumos, limitando seu uso em laboratórios de pequeno porte"
    ],
    correct: 2,
    explanation: "A principal desvantagem dos sistemas automatizados é o alto custo do equipamento (R$ 200.000-500.000) e dos insumos (R$ 50-150 por teste), além de manutenção anual cara. Isso torna a tecnologia proibitiva para laboratórios de pequeno porte, que dependem de métodos manuais ou terceirização. Apesar do custo, os sistemas oferecem alta precisão, rapidez e capacidade de testar múltiplos antibióticos simultaneamente."
  }
            }]
        },
                {
          id: 7,
          title: "Testes Fenotípicos Especiais",
          duration: "20 min",
          xp: 100,
          sections: [
            {
              title: "Detecção de Resistências Específicas",
  content: `
    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h3 style="color: #d97706; margin-bottom: 15px;">🎯 Detecção de Resistências Específicas</h3>
      <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
        Além do antibiograma convencional, <strong>testes fenotípicos especiais</strong> permitem 
        identificar mecanismos específicos de resistência que têm <strong>impacto direto nas decisões 
        terapêuticas</strong>.
      </p>
      
      <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #c2410c; margin-bottom: 15px;">⚡ Vantagem Clínica</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Testes específicos podem identificar mecanismos de resistência antes do resultado 
          final do antibiograma completo.</strong>
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Rapidez:</strong> Resultados em 4-6 horas vs. 24-48h do antibiograma</li>
          <li><strong>Especificidade:</strong> Detecta mecanismos moleculares específicos</li>
          <li><strong>Orientação precoce:</strong> Permite ajuste terapêutico mais rápido</li>
          <li><strong>Prevenção de falha:</strong> Evita uso de antibióticos ineficazes</li>
        </ul>
      </div>
    </div>
    
    <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #0369a1; margin-bottom: 15px;">💊 Resistência a Aminoglicosídeos</h4>
      <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
        <strong>Triagem de resistência de alto nível aos aminoglicosídeos</strong>, fundamental para 
        orientar o tratamento de infecções graves por enterococos, como endocardite.
      </p>
      
      <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h5 style="color: #1e40af; margin-bottom: 10px;">🔬 Metodologia</h5>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Teste de triagem com alta concentração:</strong>
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Gentamicina:</strong> 500 μg/mL (disco ou ágar)</li>
          <li><strong>Estreptomicina:</strong> 2000 μg/mL (disco ou ágar)</li>
          <li><strong>Leitura:</strong> Crescimento = Resistência de alto nível</li>
          <li><strong>Tempo:</strong> 24 horas de incubação</li>
        </ul>
      </div>
      
      <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h5 style="color: #dc2626; margin-bottom: 10px;">⚠️ Importância Clínica</h5>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Contexto: Endocardite por Enterococcus</strong>
        </p>
        <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
          O tratamento padrão de endocardite enterocócica requer <strong>terapia combinada</strong>:
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Beta-lactâmico</strong> (Ampicilina ou Penicilina) +</li>
          <li><strong>Aminoglicosídeo</strong> (Gentamicina)</li>
        </ul>
        <p style="font-size: 14px; line-height: 1.6; margin-top: 10px;">
          <strong>Problema:</strong> Enterococos com resistência de alto nível (RAN) aos aminoglicosídeos 
          <strong>perdem o efeito sinérgico</strong> da combinação, tornando a terapia ineficaz.
        </p>
      </div>
      
      <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0;">
        <h5 style="color: #059669; margin-bottom: 10px;">✅ Decisão Terapêutica</h5>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
          <tr style="background: #10b981; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">Resultado</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Conduta</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sensível</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Ampicilina + Gentamicina (terapia padrão)</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>RAN Gentamicina</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Tentar Estreptomicina (se sensível)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>RAN ambos</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Terapia prolongada com beta-lactâmico isolado ou considerar alternativas (Daptomicina, Linezolida)</td>
          </tr>
        </table>
      </div>
    </div>
    
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
      <h4 style="color: #4b5563; margin-bottom: 10px;">🧪 Outros Testes Fenotípicos Especiais</h4>
      <ul style="margin-left: 20px; line-height: 1.8;">
        <li><strong><abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr> (β-lactamase de espectro estendido):</strong> Teste de sinergia duplo-disco</li>
        <li><strong>Carbapenemases:</strong> Teste de Hodge modificado, Blue-Carba</li>
        <li><strong><abbr title="Cefalosporinase - Enzima que confere resistência a cefalosporinas de 1ª a 3ª geração" style="text-decoration: underline dotted; cursor: help; border: none;">AmpC</abbr>:</strong> Teste de disco com inibidor de <abbr title="Cefalosporinase - Enzima que confere resistência a cefalosporinas de 1ª a 3ª geração" style="text-decoration: underline dotted; cursor: help; border: none;">AmpC</abbr></li>
        <li><strong><abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr>:</strong> Disco de cefoxitina ou oxacilina</li>
        <li><strong><abbr title="Vancomycin-Resistant Enterococcus - Enterococo resistente à vancomicina" style="text-decoration: underline dotted; cursor: help; border: none;">VRE</abbr>:</strong> Triagem em ágar com vancomicina</li>
      </ul>
    </div>
  `,
  question: {
    text: "Qual é a principal utilidade clínica dos testes específicos de resistência aos aminoglicosídeos?",
    options: [
      "Detectar resistência de baixo nível, sem relevância terapêutica",
      "Identificar precocemente resistência de alto nível, auxiliando na escolha do tratamento adequado em infecções graves por enterococos",
      "Substituir completamente o antibiograma convencional em todos os tipos de infecção"
    ],
    correct: 1,
    explanation: "Os testes de triagem para resistência de alto nível (RAN) aos aminoglicosídeos são fundamentais para orientar o tratamento de endocardite enterocócica. Enterococos com RAN perdem o efeito sinérgico da combinação beta-lactâmico + aminoglicosídeo, exigindo mudança na estratégia terapêutica. O teste permite identificar precocemente essa resistência e ajustar o tratamento adequadamente."
  }
            },
            {
              title: "Detecção de Beta-lactamases",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🧪 Teste da Nitrocefina</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O teste da <strong>nitrocefina (cefalosporina cromogênica)</strong> é um método rápido para 
                    detectar a produção de beta-lactamases. A enzima hidrolisa a nitrocefina, causando mudança 
                    de cor de amarelo para vermelho/rosa em poucos minutos.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Aplicações Clínicas</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Haemophilus spp.:</strong> Detecção de resistência à ampicilina</li>
                    <li><strong>Neisseria gonorrhoeae:</strong> Orientação terapêutica rápida</li>
                    <li><strong>Staphylococcus spp.:</strong> Detecção de penicilinase</li>
                    <li><strong>Enterococcus spp.:</strong> Diferenciação de mecanismos de resistência</li>
                  </ul>
                </div>
              `,
              question: {
                text: "O teste da cefalosporina cromogênica (nitrocefina) é usado para detectar rapidamente o quê?",
                options: [
                  "Resistência induzível à clindamicina.",
                  "A produção de beta-lactamases em bactérias como Staphylococcus spp. e H. influenzae.",
                  "Resistência de alto nível a aminoglicosídeos em enterococos."
                ],
                correct: 1,
                explanation: "O teste da nitrocefina detecta rapidamente a produção de beta-lactamases através da mudança de cor de amarelo para vermelho/rosa, sendo especialmente útil para H. influenzae, N. gonorrhoeae e Staphylococcus spp."
              }
            },
            {
              title: "Teste D (Clindamicina)",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🧬 Resistência Induzível à Clindamicina</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>teste D</strong> detecta resistência induzível à clindamicina em Staphylococcus spp. 
                    e Streptococcus spp. Um disco de eritromicina é colocado próximo ao disco de clindamicina. 
                    Se houver achatamento do halo de clindamicina próximo à eritromicina (formato de "D"), 
                    indica resistência induzível.
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Isolados com teste D positivo devem ser reportados como resistentes à clindamicina, 
                    mesmo que o teste isolado de clindamicina seja sensível, pois pode haver falha terapêutica.
                  </p>
                </div>
              `,
              question: {
                text: "O 'D-zone test' é utilizado para detectar qual mecanismo de resistência?",
                options: [
                  "Produção de beta-lactamase de espectro estendido (ESBL).",
                  "Resistência induzível à clindamicina em Staphylococcus spp. e Streptococcus spp..",
                  "Resistência à meticilina em S. aureus."
                ],
                correct: 1,
                explanation: "O teste D detecta resistência induzível à clindamicina mediada pelo gene erm, onde a eritromicina induz a produção de metilase que confere resistência cruzada à clindamicina, formando uma zona de inibição em formato de 'D'."
              }
            }
          ]
        },
                {
          id: 8,
          title: "Métodos Moleculares em TSA",
          duration: "16 min",
          xp: 80,
          sections: [
            {
              title: "Detecção Genotípica de Resistência",
              content: `
                <div style="background: #eef2ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4338ca; margin-bottom: 15px;">🧬 Métodos Moleculares</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os métodos moleculares detectam genes de resistência específicos através de PCR, 
                    hibridização ou sequenciamento. Podem ser realizados diretamente em amostras clínicas 
                    ou culturas, fornecendo resultados em 1-3 horas.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">✅ Vantagens</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Rapidez: resultados em horas vs dias</li>
                    <li>Detecção direta em amostras clínicas</li>
                    <li>Identificação de mecanismos específicos</li>
                    <li>Útil para bactérias de crescimento lento</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual é uma das principais vantagens dos métodos genotípicos?",
                options: [
                  "São menos caros que os métodos fenotípicos.",
                  "Podem ser realizados diretamente em amostras clínicas, resultando em tempos de resposta substancialmente mais rápidos.",
                  "Fornecem uma visão completa de todos os possíveis mecanismos de resistência."
                ],
                correct: 1,
                explanation: "A principal vantagem dos métodos moleculares é a rapidez, permitindo detecção de genes de resistência diretamente em amostras clínicas em 1-3 horas, comparado aos métodos fenotípicos que requerem crescimento bacteriano (18-48 horas)."
              }
            },
            {
              title: "Limitações dos Métodos Moleculares",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Limitações Importantes</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Embora rápidos, os métodos moleculares têm limitações importantes:
                  </p>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Detectam apenas genes conhecidos nos painéis</li>
                    <li>Não diferenciam genes expressos vs silenciosos</li>
                    <li>Não fornecem informação sobre outros antimicrobianos</li>
                    <li>Podem não detectar novos mecanismos de resistência</li>
                  </ul>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  <h4 style="color: #1d4ed8; margin-bottom: 10px;">💡 Complementaridade</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Os métodos moleculares complementam, mas não substituem completamente os testes fenotípicos. 
                    A combinação de ambos fornece informação mais completa para o manejo clínico.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal limitação clínica dos métodos moleculares?",
                options: [
                  "São mais lentos que os métodos fenotípicos.",
                  "Não eliminam a necessidade de testes fenotípicos para confirmar os resultados e avaliar outras opções terapêuticas.",
                  "Os resultados não se correlacionam com a resistência clínica."
                ],
                correct: 1,
                explanation: "A principal limitação é que os métodos moleculares detectam apenas genes específicos conhecidos, não fornecendo informação sobre outros antimicrobianos ou novos mecanismos, mantendo a necessidade de testes fenotípicos complementares."
              }
            }
          ]
        },
                {
          id: 9,
          title: "Interpretação Clínica dos Resultados",
          duration: "45 min",
          xp: 225,
          sections: [
            {
    title: "Interpretação de Resultados: Sensível",
    content: `
      <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #059669; margin-bottom: 15px;">✅ Interpretação: Sensível (S)</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          O resultado <strong>"Sensível"</strong> é a categoria mais favorável no antibiograma, 
          indicando alta probabilidade de sucesso terapêutico com o regime de dose padrão.
        </p>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #166534; margin-bottom: 15px;">📐 Definição</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            A <strong>Concentração Inibitória Mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>) é atingida com a dose recomendada</strong> 
            do antibiótico para o tipo de infecção e organismo infectante.
          </p>
          <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
            Isso significa que as concentrações séricas ou teciduais do antimicrobiano, quando 
            administrado nas doses convencionais, <strong>excedem a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></strong> do microrganismo 
            por tempo suficiente para exercer efeito bactericida ou bacteriostático.
          </p>
        </div>
      </div>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #0369a1; margin-bottom: 15px;">💊 Implicação Clínica</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          <strong>Alta probabilidade de sucesso terapêutico</strong> utilizando o regime de dose 
          padrão do antimicrobiano.
        </p>
        
        <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #1e40af; margin-bottom: 10px;">✅ O que isso significa na prática:</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>A eficácia clínica com o antibiótico nas doses convencionais</strong></li>
            <li>Não é necessário ajuste de dose além do padrão</li>
            <li>Não é necessário prolongar tempo de infusão</li>
            <li>Não é necessário aumentar frequência de administração</li>
            <li>O antibiótico pode ser usado com confiança para aquela infecção</li>
          </ul>
        </div>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #d97706; margin-bottom: 10px;">📊 Exemplo Prático</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Situação:</strong> <em>E. coli</em> sensível à Ciprofloxacino em infecção urinária
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>:</strong> 0,25 mg/L</li>
          <li><strong>Ponto de corte (S):</strong> ≤ 1 mg/L</li>
          <li><strong>Interpretação:</strong> Sensível (S)</li>
          <li><strong>Dose padrão:</strong> Ciprofloxacino 500 mg 12/12h VO</li>
          <li><strong>Concentração urinária:</strong> > 100 mg/L (muito acima da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>)</li>
          <li><strong>Resultado esperado:</strong> Cura clínica e microbiológica</li>
        </ul>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">⚖️ Considerações Importantes</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr style="background: #6366f1; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">Aspecto</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Observação</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sítio de infecção</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Considerar penetração tecidual do antibiótico</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Gravidade</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Infecções graves podem requerer <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> mais baixa</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Função renal/hepática</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Ajustar dose conforme clearance</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Interações</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Verificar interações medicamentosas</td>
          </tr>
        </table>
      </div>
    `,
    question: {
      text: "O que significa o resultado \"Sensível\" na interpretação de um antibiograma?",
      options: [
        "O antibiótico só será eficaz se utilizado em doses muito acima das recomendadas",
        "A Concentração Inibitória Mínima (CIM) é atingida com a dose padrão, indicando alta probabilidade de sucesso terapêutico",
        "O microrganismo apresenta resistência parcial, exigindo combinação de antimicrobianos para eficácia"
      ],
      correct: 1,
      explanation: "O resultado 'Sensível' (S) significa que a CIM é atingida com a dose padrão recomendada do antibiótico, indicando alta probabilidade de sucesso terapêutico. Não é necessário ajuste de dose, prolongamento de infusão ou aumento de frequência. O antibiótico pode ser usado com confiança nas doses convencionais para aquela infecção específica."
    }
  },
  {
    title: "Interpretação: Sensível com Aumento de Exposição",
    content: `
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #d97706; margin-bottom: 15px;">⚡ Interpretação: Sensível com Aumento de Exposição (I)</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          Esta categoria, anteriormente chamada de <strong>"Intermediário"</strong>, foi renomeada 
          para refletir melhor sua <strong>implicação clínica prática</strong>: o antibiótico pode 
          ser eficaz, mas requer estratégias específicas de dosagem.
        </p>
        
        <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #c2410c; margin-bottom: 15px;">📐 Definição</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            Para atingir a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> é necessário usar um <strong>regime de dosagem que resulte em maior 
            exposição</strong> do microrganismo ao medicamento.
          </p>
          <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
            A <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> está próxima ao limite superior do ponto de corte de sensibilidade, ou o 
            microrganismo apresenta sensibilidade reduzida. Com doses padrão, as concentrações 
            podem ser <strong>marginalmente eficazes</strong>.
          </p>
        </div>
      </div>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #0369a1; margin-bottom: 15px;">⚙️ Estratégias de Ajuste</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          Existem três estratégias principais para aumentar a exposição ao antimicrobiano:
        </p>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #1e40af; margin-bottom: 10px;">1️⃣ Doses mais altas</h5>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            Aumentar a dose total administrada para elevar a concentração sérica máxima (Cmax).
          </p>
          <p style="font-size: 14px; line-height: 1.6;">
            <strong>Exemplo:</strong> Meropenem 2g IV 8/8h (dose alta) em vez de 1g IV 8/8h (dose padrão)
          </p>
        </div>
        
        <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #059669; margin-bottom: 10px;">2️⃣ Administrações mais frequentes</h5>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            Reduzir o intervalo entre doses para manter concentrações acima da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> por mais tempo.
          </p>
          <p style="font-size: 14px; line-height: 1.6;">
            <strong>Exemplo:</strong> Cefepima 2g IV 8/8h em vez de 2g IV 12/12h
          </p>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #d97706; margin-bottom: 10px;">3️⃣ Prolongamento do tempo de infusão</h5>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            Estender o tempo de infusão para manter concentrações terapêuticas por período prolongado 
            (especialmente para beta-lactâmicos tempo-dependentes).
          </p>
          <p style="font-size: 14px; line-height: 1.6;">
            <strong>Exemplo:</strong> Piperacilina-tazobactam 4,5g em infusão de 4 horas em vez de 30 minutos
          </p>
        </div>
      </div>
      
      <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Quando Considerar Alternativas</h4>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Infecções graves:</strong> Bacteremia, meningite, endocardite</li>
          <li><strong>Paciente crítico:</strong> Choque séptico, disfunção orgânica</li>
          <li><strong>Sítio de difícil penetração:</strong> <abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr>, osso, próstata</li>
          <li><strong>Imunossupressão:</strong> Neutropenia, HIV avançado</li>
        </ul>
        <p style="font-size: 14px; line-height: 1.6; margin-top: 10px; font-style: italic;">
          Nestes casos, pode ser mais prudente escolher um antibiótico com categoria "Sensível" (S).
        </p>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Exemplo Prático</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Situação:</strong> <em>Pseudomonas aeruginosa</em> com <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> de Cefepima = 8 mg/L
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Ponto de corte <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>:</strong> S ≤ 8 mg/L; I = 16 mg/L; R ≥ 32 mg/L</li>
          <li><strong>Interpretação:</strong> Sensível (S), mas no limite superior</li>
          <li><strong>Estratégia:</strong> Cefepima 2g IV 8/8h (dose alta, intervalo curto)</li>
          <li><strong>Alternativa:</strong> Infusão prolongada de 3-4 horas</li>
          <li><strong>Monitoramento:</strong> Acompanhar resposta clínica de perto</li>
        </ul>
      </div>
    `,
    question: {
      text: "O que indica o resultado \"Sensível com Aumento de Exposição\" na interpretação de um antibiograma?",
      options: [
        "Que o antibiótico é ineficaz, mesmo com ajuste de dose",
        "Que a CIM pode ser atingida apenas com estratégias que aumentem a exposição ao fármaco, como doses mais altas ou infusão prolongada",
        "Que o microrganismo é altamente sensível e pode ser tratado com qualquer dose do antibiótico"
      ],
      correct: 1,
      explanation: "O resultado 'Sensível com Aumento de Exposição' (anteriormente 'Intermediário') indica que a CIM pode ser atingida com estratégias que aumentem a exposição ao fármaco: doses mais altas, administrações mais frequentes ou prolongamento do tempo de infusão. O antibiótico pode ser eficaz, mas requer otimização do regime de dosagem. Em infecções graves ou pacientes críticos, pode ser mais prudente escolher um antibiótico com categoria 'Sensível' (S)."
    }
  },
  {
    title: "Interpretação de Resultados: Resistente",
    content: `
      <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #dc2626; margin-bottom: 15px;">❌ Interpretação: Resistente (R)</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          O resultado <strong>"Resistente"</strong> é a categoria mais desfavorável no antibiograma, 
          indicando que o antibiótico <strong>não deve ser utilizado</strong> para tratar aquela 
          infecção específica.
        </p>
        
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #991b1b; margin-bottom: 15px;">📐 Definição</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            A <strong>Concentração Inibitória Mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>) não é alcançada mesmo com doses máximas</strong> 
            do antibiótico.
          </p>
          <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
            Isso significa que, mesmo administrando o antibiótico nas doses máximas toleradas e por 
            vias que maximizem a concentração no sítio de infecção, as concentrações alcançadas 
            <strong>não são suficientes</strong> para inibir o crescimento do microrganismo.
          </p>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 15px;">⚠️ Implicação Clínica</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          <strong>Alta probabilidade de falha terapêutica</strong>, mesmo com ajustes de dose ou 
          via de administração.
        </p>
        
        <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #991b1b; margin-bottom: 10px;">🚫 Recomendação Clínica</h5>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            <strong>O uso do antimicrobiano deve ser evitado para este patógeno específico.</strong>
          </p>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li>Não aumentar dose resolve o problema</li>
            <li>Não prolongar infusão resolve o problema</li>
            <li>Não mudar via de administração resolve o problema</li>
            <li><strong>Escolher um antibiótico alternativo com categoria S ou I</strong></li>
          </ul>
        </div>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #d97706; margin-bottom: 10px;">📊 Exemplo Prático</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          <strong>Situação:</strong> <em>Klebsiella pneumoniae</em> produtora de <abbr title="Klebsiella pneumoniae Carbapenemase - Enzima que confere resistência a carbapenêmicos" style="text-decoration: underline dotted; cursor: help; border: none;">KPC</abbr> (carbapenemase)
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li><strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> Meropenem:</strong> > 32 mg/L</li>
          <li><strong>Ponto de corte <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> (R):</strong> ≥ 4 mg/L</li>
          <li><strong>Interpretação:</strong> Resistente (R)</li>
          <li><strong>Dose máxima Meropenem:</strong> 2g IV 8/8h em infusão prolongada</li>
          <li><strong>Concentração sérica máxima:</strong> ~40 mg/L (ainda insuficiente)</li>
          <li><strong>Decisão:</strong> NÃO usar Meropenem</li>
          <li><strong>Alternativas:</strong> Polimixina B, Tigeciclina, Ceftazidima-avibactam</li>
        </ul>
      </div>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #0369a1; margin-bottom: 10px;">🔬 Mecanismos de Resistência</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
          A resistência pode ocorrer por diversos mecanismos moleculares:
        </p>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr style="background: #dc2626; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">Mecanismo</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Exemplo</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Enzimas inativadoras</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">β-lactamases (<abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr>, <abbr title="Klebsiella pneumoniae Carbapenemase - Enzima que confere resistência a carbapenêmicos" style="text-decoration: underline dotted; cursor: help; border: none;">KPC</abbr>, NDM)</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Alteração do alvo</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;"><abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr> (<abbr title="Penicillin-Binding Protein 2a - Proteína alterada que confere resistência em MRSA" style="text-decoration: underline dotted; cursor: help; border: none;">PBP2a</abbr>), <abbr title="Vancomycin-Resistant Enterococcus - Enterococo resistente à vancomicina" style="text-decoration: underline dotted; cursor: help; border: none;">VRE</abbr> (alteração D-Ala-D-Ala)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Bombas de efluxo</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Fluoroquinolonas em <em>Pseudomonas</em></td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Impermeabilidade</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Perda de porinas em Gram-negativos</td>
          </tr>
        </table>
      </div>
      
      <div style="background: #fee2e2; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 15px 0;">
        <h4 style="color: #991b1b; margin-bottom: 10px;">⚠️ IMPORTANTE</h4>
        <p style="font-size: 14px; line-height: 1.6;">
          <strong>Nunca</strong> insistir no uso de antibiótico com resultado "Resistente" esperando 
          que "doses mais altas possam funcionar". Isso resulta em:
        </p>
        <ul style="margin-left: 20px; line-height: 1.8;">
          <li>❌ Falha terapêutica</li>
          <li>❌ Progressão da infecção</li>
          <li>❌ Aumento de morbimortalidade</li>
          <li>❌ Toxicidade desnecessária</li>
          <li>❌ Seleção de resistência adicional</li>
        </ul>
      </div>
    `,
    question: {
      text: "O que significa o resultado \"Resistente\" na interpretação de um antibiograma?",
      options: [
        "Que o antibiótico pode ser eficaz se administrado em infusão contínua",
        "Que a CIM não é alcançada mesmo com doses máximas, havendo alta probabilidade de falha terapêutica",
        "Que o microrganismo apresenta apenas sensibilidade reduzida, sendo possível ajustar o tratamento com pequenas modificações na dose"
      ],
      correct: 1,
      explanation: "O resultado 'Resistente' (R) significa que a CIM não é alcançada mesmo com doses máximas do antibiótico, havendo alta probabilidade de falha terapêutica. O uso do antimicrobiano deve ser evitado para este patógeno específico. Aumentar dose, prolongar infusão ou mudar via de administração NÃO resolve o problema. É necessário escolher um antibiótico alternativo com categoria S ou I."
    }
  }
          ]
        },
                {
          id: 10,
          title: "Estrutura Básica do Antibiograma",
          duration: "45 min",
          xp: 225,
          sections: [
            {
    title: "Analisando a Identificação do Microrganismo e Observações",
    content: `
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Identificação do Microrganismo e Observações</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          A <strong>seção superior do antibiograma</strong> contém informações essenciais que contextualizam 
          todo o resultado do teste de sensibilidade antimicrobiana.
        </p>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #1e40af; margin-bottom: 15px;">📋 Informações Essenciais</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            A seção superior do antibiograma contém informações essenciais sobre:
          </p>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Identificação precisa do microrganismo</strong> (gênero e espécie)</li>
            <li><strong>Data da coleta</strong> e processamento da amostra</li>
            <li><strong>Origem da amostra</strong> (tipo de material biológico)</li>
            <li><strong>Metodologia utilizada</strong> para identificação</li>
          </ul>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">🧬 Exemplo de Identificação</h4>
        <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 40%;">Microrganismo:</td>
              <td style="padding: 8px;"><em>Escherichia coli</em></td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold;">Material:</td>
              <td style="padding: 8px;">Urina</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Data coleta:</td>
              <td style="padding: 8px;">20/10/2025</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold;">Data processamento:</td>
              <td style="padding: 8px;">21/10/2025</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Método identificação:</td>
              <td style="padding: 8px;">MALDI-TOF MS (Vitek MS)</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold;">Contagem:</td>
              <td style="padding: 8px;">> 100.000 UFC/mL</td>
            </tr>
          </table>
        </div>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #d97706; margin-bottom: 15px;">📝 Área de Observações</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          Na <strong>área de observações</strong>, podem ser indicados mecanismos específicos de 
          resistência identificados durante os testes, como:
        </p>
        
        <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #c2410c; margin-bottom: 10px;">🦠 Principais Mecanismos Reportados</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Produção de <abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr></strong> (β-lactamase de espectro estendido)</li>
            <li><strong>Resistência à meticilina</strong> (<abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr> - <em>Staphylococcus aureus</em> resistente à meticilina)</li>
            <li><strong>Produção de carbapenemases</strong> (<abbr title="Klebsiella pneumoniae Carbapenemase - Enzima que confere resistência a carbapenêmicos" style="text-decoration: underline dotted; cursor: help; border: none;">KPC</abbr>, NDM, OXA-48, VIM, IMP)</li>
          </ul>
        </div>
      </div>
      
      <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Exemplo de Observação Crítica</h4>
        <div style="background: #ffffff; padding: 15px; border: 2px solid #ef4444; border-radius: 8px; margin: 10px 0;">
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            <strong>OBSERVAÇÕES:</strong>
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #dc2626; font-weight: bold;">
            ⚠️ <abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr> DETECTADA - Resistência a cefalosporinas de 3ª geração confirmada. 
            Evitar uso de ceftriaxona, cefotaxima e ceftazidima mesmo se resultado "Sensível" 
            in vitro. Carbapenêmicos são preferíveis para infecções graves.
          </p>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">💡 Importância Clínica das Observações</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr style="background: #6366f1; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">Mecanismo</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Impacto Terapêutico</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr></strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Evitar cefalosporinas 3ª geração; preferir carbapenêmicos</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr></strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Evitar todos os beta-lactâmicos; usar vancomicina, daptomicina</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Carbapenemase</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Evitar carbapenêmicos; considerar polimixina, tigeciclina, ceftazidima-avibactam</td>
          </tr>
        </table>
      </div>
    `,
    question: {
      text: "Além da identificação do microrganismo, o que pode ser informado na área de observações de um antibiograma?",
      options: [
        "O histórico clínico completo do paciente e os medicamentos em uso",
        "Mecanismos específicos de resistência detectados, como produção de ESBL, MRSA ou carbapenemases",
        "Apenas a concentração dos antibióticos testados em cada poço de diluição"
      ],
      correct: 1,
      explanation: "Na área de observações do antibiograma são reportados mecanismos específicos de resistência detectados durante os testes, como produção de ESBL (β-lactamase de espectro estendido), resistência à meticilina (MRSA) ou produção de carbapenemases. Essas informações são críticas pois orientam escolhas terapêuticas específicas, como evitar cefalosporinas de 3ª geração em ESBL ou todos os beta-lactâmicos em MRSA."
    }
  },
  {
    title: "Valores de CIM e Interpretação",
    content: `
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #0369a1; margin-bottom: 15px;">📊 Valores de <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> e Interpretação</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          A seção central do antibiograma apresenta os <strong>resultados dos testes de sensibilidade</strong> 
          para cada antibiótico testado.
        </p>
        
        <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #1e40af; margin-bottom: 15px;">🔢 Informações Apresentadas</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Para cada antibiótico testado, são apresentados:
          </p>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Valor numérico da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></strong> (μg/mL) - quanto menor, mais sensível é o microrganismo</li>
            <li><strong>Interpretação clínica</strong> (S, I ou R) baseada em pontos de corte padronizados</li>
          </ul>
          <p style="font-size: 14px; line-height: 1.6; margin-top: 10px; font-style: italic;">
            A correlação entre <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> e categoria clínica segue <strong>diretrizes específicas</strong> 
            (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>, BrCast, EUCAST).
          </p>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">📋 Exemplo de Antibiograma</h4>
        <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
          <p style="font-size: 14px; margin-bottom: 10px;"><strong>Microrganismo:</strong> <em>Escherichia coli</em></p>
          <p style="font-size: 14px; margin-bottom: 15px;"><strong>Material:</strong> Urina</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background: #3b82f6; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Antibiótico</th>
              <th style="padding: 10px; border: 1px solid #ddd;"><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> (μg/mL)</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Interpretação</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Ampicilina</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">> 32</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #dc2626; font-weight: bold;">R</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;">Amoxicilina-clavulanato</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">8</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">S</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Ceftriaxona</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">≤ 1</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">S</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;">Cefepima</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">S</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Ciprofloxacino</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">0,25</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">S</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;">Gentamicina</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">≤ 1</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">S</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;">Nitrofurantoína</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">16</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">S</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;">Sulfametoxazol-trimetoprima</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">> 320</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #dc2626; font-weight: bold;">R</td>
            </tr>
          </table>
        </div>
      </div>
      
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #d97706; margin-bottom: 10px;">📐 Relação <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> e Interpretação</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          A interpretação (S, I ou R) é determinada comparando a <strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> obtida</strong> com 
          <strong>pontos de corte (breakpoints)</strong> estabelecidos por diretrizes internacionais.
        </p>
        
        <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 10px 0;">
          <h5 style="color: #c2410c; margin-bottom: 10px;">📊 Exemplo: Ciprofloxacino</h5>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            <strong>Pontos de corte <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> para <em>E. coli</em>:</strong>
          </p>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Sensível (S):</strong> <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> ≤ 1 μg/mL</li>
            <li><strong>Intermediário (I):</strong> <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 2 μg/mL</li>
            <li><strong>Resistente (R):</strong> <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> ≥ 4 μg/mL</li>
          </ul>
          <p style="font-size: 14px; line-height: 1.6; margin-top: 10px;">
            <strong>No exemplo acima:</strong> <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 0,25 μg/mL → <strong>Sensível (S)</strong>
          </p>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">🌍 Diretrizes Internacionais</h4>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr style="background: #6366f1; color: white;">
            <th style="padding: 10px; border: 1px solid #ddd;">Diretriz</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Descrição</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Uso Principal</th>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr></strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Clinical and Laboratory Standards Institute</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Estados Unidos, Brasil</td>
          </tr>
          <tr style="background: #f9fafb;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>EUCAST</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">European Committee on Antimicrobial Susceptibility Testing</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Europa</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr></strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">Brazilian Committee on Antimicrobial Susceptibility Testing</td>
            <td style="padding: 8px; border: 1px solid #ddd;">Brasil (adaptação local)</td>
          </tr>
        </table>
      </div>
      
      <div style="background: #dcfce7; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
        <h4 style="color: #059669; margin-bottom: 10px;">💡 Dica Clínica</h4>
        <p style="font-size: 14px; line-height: 1.6;">
          <strong>Quanto menor a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>, melhor!</strong> Um antibiótico com <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> de 0,25 μg/mL é 
          <strong>muito mais potente</strong> contra aquele microrganismo do que um com <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> de 8 μg/mL, 
          mesmo que ambos sejam interpretados como "Sensível" (S).
        </p>
      </div>
    `,
    question: {
      text: "O que representa a relação entre o valor da CIM e a interpretação clínica (S, I ou R) em um antibiograma?",
      options: [
        "Uma avaliação subjetiva do microbiologista, sem critérios padronizados",
        "A correlação entre a concentração inibitória mínima e categorias clínicas definidas por diretrizes como CLSI, BrCast e EUCAST",
        "A potência farmacológica do antibiótico medida apenas em estudos laboratoriais, sem aplicação clínica"
      ],
      correct: 1,
      explanation: "A relação entre CIM e interpretação clínica (S, I ou R) é estabelecida por diretrizes internacionais padronizadas (CLSI, EUCAST, BrCAST) que definem pontos de corte (breakpoints) específicos. A CIM obtida no teste é comparada com esses pontos de corte para determinar a categoria clínica. Quanto menor a CIM, mais sensível é o microrganismo ao antibiótico. Essa correlação não é subjetiva, mas baseada em estudos farmacocinéticos/farmacodinâmicos e desfechos clínicos."
    }
  },
  {
    title: "Avaliação Crítica do Antibiograma",
    content: `
      <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h3 style="color: #d97706; margin-bottom: 15px;">🔍 Avaliação Crítica do Antibiograma</h3>
        <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
          O antibiograma é uma <strong>ferramenta diagnóstica poderosa</strong>, mas sua interpretação 
          requer <strong>análise crítica e contextualização clínica</strong>, não apenas leitura 
          mecânica das categorias S/I/R.
        </p>
        
        <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #c2410c; margin-bottom: 15px;">🎯 Interpretação Contextual</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            É importante saber como falaremos no futuro, que o <strong>antibiograma é interpretativo</strong> 
            e não deve ser reduzido apenas às categorias "S" ou "R".
          </p>
          <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
            A interpretação adequada considera múltiplos fatores além do resultado laboratorial.
          </p>
        </div>
      </div>
      
      <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #0369a1; margin-bottom: 15px;">🔬 Relevância do Método</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          Os <strong>métodos de diluição em caldo</strong> (micro e macro) fornecem <strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> precisa</strong>, 
          essencial para infecções graves.
        </p>
        
        <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #1e40af; margin-bottom: 10px;">✅ Vantagens da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> Precisa</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Ajuste de dose:</strong> Permite otimização farmacocinética/farmacodinâmica</li>
            <li><strong>Monitoramento:</strong> Acompanhamento de tendências de resistência</li>
            <li><strong>Pesquisa:</strong> Estudos de eficácia e resistência</li>
            <li><strong>Infecções graves:</strong> Endocardite, meningite, bacteremia</li>
          </ul>
        </div>
      </div>
      
      <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #dc2626; margin-bottom: 15px;">⚠️ Limitações Metodológicas</h4>
        <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
          <strong>Métodos de disco difusão</strong> e alguns <strong>sistemas automatizados</strong> 
          fornecem apenas <strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> aproximada</strong>, o que pode ser insuficiente em casos críticos.
        </p>
        
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #991b1b; margin-bottom: 10px;">📊 Comparação de Precisão</h5>
          <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background: #dc2626; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Método</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Precisão <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></th>
              <th style="padding: 10px; border: 1px solid #ddd;">Aplicação</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Diluição em caldo</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Alta (exata)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Infecções graves, pesquisa</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Gradiente (Etest)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Alta (exata)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Casos específicos, fungos</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Disco-difusão</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Baixa (aproximada)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Triagem, infecções simples</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Automatizado</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Variável</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Rotina, alto volume</td>
            </tr>
          </table>
        </div>
      </div>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #4b5563; margin-bottom: 10px;">🧠 Fatores para Avaliação Crítica</h4>
        <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
          <h5 style="color: #374151; margin-bottom: 10px;">1️⃣ Contexto Clínico</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Gravidade da infecção:</strong> Leve vs. grave</li>
            <li><strong>Sítio de infecção:</strong> Penetração tecidual do antibiótico</li>
            <li><strong>Estado do paciente:</strong> Imunossupressão, comorbidades</li>
          </ul>
        </div>
        
        <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
          <h5 style="color: #374151; margin-bottom: 10px;">2️⃣ Características do Microrganismo</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Mecanismos de resistência:</strong> <abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr>, carbapenemase, <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr></li>
            <li><strong>Virulência:</strong> Capacidade de causar doença grave</li>
            <li><strong>Epidemiologia local:</strong> Padrões de resistência regionais</li>
          </ul>
        </div>
        
        <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
          <h5 style="color: #374151; margin-bottom: 10px;">3️⃣ Propriedades do Antibiótico</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Farmacocinética:</strong> Absorção, distribuição, metabolismo</li>
            <li><strong>Farmacodinâmica:</strong> Tempo vs. concentração-dependente</li>
            <li><strong>Toxicidade:</strong> Efeitos adversos e contraindicações</li>
          </ul>
        </div>
        
        <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
          <h5 style="color: #374151; margin-bottom: 10px;">4️⃣ Limitações do Teste</h5>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Método utilizado:</strong> Precisão da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></li>
            <li><strong>Condições in vitro:</strong> Podem não refletir in vivo</li>
            <li><strong>Tempo de resultado:</strong> Terapia empírica necessária</li>
          </ul>
        </div>
      </div>
      
      <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
        <h4 style="color: #059669; margin-bottom: 10px;">✅ Princípios da Interpretação Crítica</h4>
        <ol style="margin-left: 20px; line-height: 1.8;">
          <li><strong>Não se limitar ao S/I/R:</strong> Considerar valor da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></li>
          <li><strong>Conhecer o método:</strong> Diluição vs. disco-difusão</li>
          <li><strong>Contextualizar:</strong> Gravidade, sítio, paciente</li>
          <li><strong>Considerar mecanismos:</strong> <abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr>, carbapenemase, etc.</li>
          <li><strong>Otimizar dose:</strong> <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr> quando <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> disponível</li>
          <li><strong>Reavaliar:</strong> Resposta clínica é o desfecho final</li>
        </ol>
      </div>
      
      <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
        <h4 style="color: #d97706; margin-bottom: 10px;">💡 Mensagem Final</h4>
        <p style="font-size: 14px; line-height: 1.6;">
          O antibiograma é uma <strong>ferramenta</strong>, não uma decisão final. A interpretação 
          adequada requer <strong>conhecimento microbiológico, farmacológico e clínico integrados</strong>. 
          O resultado "Sensível" não garante cura, assim como "Resistente" não significa impossibilidade 
          absoluta de resposta em todos os contextos.
        </p>
      </div>
    `,
    question: {
      text: "Qual é o principal aspecto destacado na avaliação crítica de um antibiograma?",
      options: [
        "O antibiograma deve ser interpretado apenas pelas categorias \"S\" (sensível) e \"R\" (resistente), sem considerar o contexto clínico",
        "A interpretação do antibiograma deve ser contextual, considerando o método utilizado e reconhecendo que alguns fornecem apenas valores aproximados de CIM",
        "Todos os métodos laboratoriais fornecem a mesma precisão na determinação da CIM, independentemente da técnica"
      ],
      correct: 1,
      explanation: "A avaliação crítica do antibiograma destaca que a interpretação deve ser contextual e não reduzida apenas às categorias S/I/R. É fundamental considerar: o método utilizado (diluição em caldo fornece CIM precisa; disco-difusão fornece apenas aproximação), o contexto clínico (gravidade, sítio, paciente), mecanismos de resistência e propriedades PK/PD do antibiótico. O antibiograma é uma ferramenta que requer integração de conhecimentos microbiológicos, farmacológicos e clínicos."
    }
  }
          ]
        },
                {
          id: 11,
          title: "CLSI vs. BrCast: Diferenças Fundamentais",
          duration: "45 min",
          xp: 225,
          sections: [
            {
              title: "Mudança de Paradigma no Brasil",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">🌎 Mudança de Paradigma no Brasil</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Em <strong>final de 2018</strong> o Brasil abandonou a padronização americana do antibiograma 
                    (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>). Passamos a usar o <strong>padrão europeu (EUCAST)</strong> e chamamos de 
                    <strong><abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr></strong> (Comitê Brasileiro de Testes de Sensibilidade aos Antimicrobianos).
                  </p>
                  
                  <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #c2410c; margin-bottom: 15px;">📊 Contexto da Mudança</h4>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                      A decisão de adotar o padrão europeu foi motivada por diversos fatores:
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                      <li><strong>Atualização mais frequente:</strong> EUCAST revisa pontos de corte anualmente</li>
                      <li><strong>Maior rigor científico:</strong> Critérios baseados em <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr> mais robustos</li>
                      <li><strong>Alinhamento internacional:</strong> Harmonização com Europa e outros países</li>
                      <li><strong>Segurança do paciente:</strong> Pontos de corte mais conservadores</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Quando o Brasil adotou o padrão BrCAST e qual foi a principal motivação?",
                options: [
                  "Em 2018, para alinhar-se ao padrão europeu (EUCAST) com critérios mais rigorosos baseados em PK/PD",
                  "Em 2015, para simplificar a interpretação dos antibiogramas nos laboratórios brasileiros",
                  "Em 2020, devido à pandemia de COVID-19 e necessidade de padronização internacional"
                ],
                correct: 0,
                explanation: "Em final de 2018, o Brasil abandonou o padrão americano (CLSI) e adotou o padrão europeu (EUCAST), denominado BrCAST. A mudança foi motivada principalmente pelo maior rigor científico, atualização mais frequente dos critérios e alinhamento internacional, visando maior segurança do paciente."
              }
            },
            {
              title: "Pontos de Corte: O Que Mudou?",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🎯 Pontos de Corte</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong><abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr> reduziu pontos de corte da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></strong> para garantir maior segurança na 
                    interpretação da sensibilidade.
                  </p>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">💡 O que isso significa na prática?</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Pontos de corte mais baixos</strong> significam que um microrganismo precisa ter 
                      <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> <strong>menor</strong> para ser considerado "Sensível".
                    </p>
                    <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
                      <strong>Resultado:</strong> Alguns microrganismos que eram "Sensíveis" pelo <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> passaram 
                      a ser classificados como "Intermediários" ou até "Resistentes" pelo <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr>.
                    </p>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
                    <h4 style="color: #d97706; margin-bottom: 10px;">💡 Por que reduzir?</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Pontos de corte mais conservadores refletem melhor a <strong>realidade farmacocinética</strong> 
                      dos antibióticos no corpo humano, reduzindo o risco de falha terapêutica.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "O que significa a redução dos pontos de corte da CIM implementada pelo BrCAST?",
                options: [
                  "Um microrganismo precisa ter CIM menor para ser considerado 'Sensível', tornando os critérios mais rigorosos",
                  "Um microrganismo pode ter CIM maior e ainda ser considerado 'Sensível', facilitando o tratamento",
                  "Os pontos de corte foram eliminados, sendo substituídos apenas por categorias S/R"
                ],
                correct: 0,
                explanation: "A redução dos pontos de corte significa que um microrganismo precisa ter CIM menor para ser classificado como 'Sensível'. Isso torna os critérios mais rigorosos e conservadores, refletindo melhor a farmacocinética real dos antibióticos e reduzindo o risco de falha terapêutica."
              }
            },
            {
              title: "Exemplo Prático: E. coli e Ciprofloxacino",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4b5563; margin-bottom: 15px;">📋 Exemplo Comparativo</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Situação:</strong> <em>Escherichia coli</em> testada contra Ciprofloxacino
                  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: #6366f1; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Padrão</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Ponto de Corte (S)</th>
                      <th style="padding: 10px; border: 1px solid #ddd;"><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 1 mg/L</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr></strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">≤ 1 mg/L</td>
                      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #059669; font-weight: bold;">Sensível (S)</td>
                    </tr>
                    <tr style="background: #f9fafb;">
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr></strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">≤ 0,5 mg/L</td>
                      <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #d97706; font-weight: bold;">Intermediário (I)</td>
                    </tr>
                  </table>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Implicação Clínica</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      O mesmo resultado laboratorial (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 1 mg/L) recebe <strong>interpretações diferentes</strong> 
                      dependendo do padrão utilizado. Pelo <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr>, esse resultado sugere que o ciprofloxacino pode 
                      não ser a melhor escolha, enquanto pelo <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> seria considerado adequado.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "No exemplo de E. coli com CIM de 1 mg/L para ciprofloxacino, qual é a diferença entre CLSI e BrCAST?",
                options: [
                  "CLSI classifica como Sensível (S), enquanto BrCAST classifica como Intermediário (I)",
                  "Ambos classificam como Sensível (S), sem diferença prática",
                  "CLSI classifica como Intermediário (I), enquanto BrCAST classifica como Resistente (R)"
                ],
                correct: 0,
                explanation: "Com CIM = 1 mg/L, o CLSI (ponto de corte ≤ 1 mg/L) classifica como Sensível, enquanto o BrCAST (ponto de corte ≤ 0,5 mg/L) classifica como Intermediário. Este exemplo ilustra como o mesmo resultado laboratorial pode ter interpretações diferentes dependendo do padrão utilizado, impactando diretamente a escolha terapêutica."
              }
            },
            {
              title: "Vantagens e Desafios do BrCAST",
              content: `
                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">✅ Vantagens do <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr></h3>
                  <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                    <li><strong>Maior segurança:</strong> Reduz risco de falha terapêutica</li>
                    <li><strong>Baseado em <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr>:</strong> Considera farmacocinética/farmacodinâmica real</li>
                    <li><strong>Atualização constante:</strong> Incorpora novas evidências rapidamente</li>
                    <li><strong>Harmonização:</strong> Facilita comparação internacional de dados</li>
                    <li><strong>Transparência:</strong> Metodologia publicamente disponível</li>
                  </ul>
                </div>
                
                <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Desafios da Transição</h3>
                  <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                    <li><strong>Curva de aprendizado:</strong> Profissionais precisaram se adaptar</li>
                    <li><strong>Mudança de interpretação:</strong> Alguns antibióticos "perderam" sensibilidade</li>
                    <li><strong>Atualização de sistemas:</strong> Laboratórios precisaram ajustar equipamentos</li>
                    <li><strong>Comunicação:</strong> Necessidade de educar prescritores sobre as mudanças</li>
                  </ul>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">💡 Mensagem Importante</h4>
                  <p style="font-size: 14px; line-height: 1.6;">
                    A mudança para o <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr> representa um <strong>avanço na segurança do paciente</strong>. 
                    Embora alguns antibióticos pareçam "menos eficazes" no papel, na verdade estamos sendo 
                    <strong>mais realistas</strong> sobre suas capacidades terapêuticas reais.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal vantagem do BrCAST em relação ao padrão anterior?",
                options: [
                  "Maior segurança do paciente através de critérios baseados em PK/PD e pontos de corte mais conservadores",
                  "Facilidade de implementação sem necessidade de atualização de equipamentos laboratoriais",
                  "Ampliação das opções terapêuticas com mais antibióticos classificados como sensíveis"
                ],
                correct: 0,
                explanation: "A principal vantagem do BrCAST é a maior segurança do paciente, alcançada através de critérios mais rigorosos baseados em farmacocinética/farmacodinâmica real e pontos de corte mais conservadores. Isso reduz significativamente o risco de falha terapêutica, mesmo que implique em desafios de implementação e adaptação dos profissionais."
              }
            },
            {
              title: "Nova Categoria \"I\": Conceito",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔄 Mudança Conceitual Importante</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Uma das mudanças mais significativas do <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr> foi a <strong>reinterpretação da categoria "I"</strong>, 
                    que alterou fundamentalmente a abordagem terapêutica.
                  </p>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 15px;">📐 Nova Categoria "I"</h4>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                      Houve a <strong>substituição de "Intermediário"</strong> por 
                      <strong>"Sensível com aumento de exposição"</strong>, alterando fundamentalmente a 
                      abordagem terapêutica.
                    </p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                      <tr style="background: #3b82f6; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Antes (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>)</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Depois (<abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr>)</th>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Intermediário (I)</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sensível com Aumento de Exposição (I)</strong></td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Interpretação vaga e incerta</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Orientação terapêutica clara</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">"Talvez funcione"</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">"Funciona se otimizar a dose"</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Sem orientação de conduta</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Estratégias específicas de otimização</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 15px 0;">
                    <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Mensagem Chave</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      A nova categoria "I" <strong>não significa "talvez funcione"</strong>, mas sim 
                      <strong>"funciona se você otimizar"</strong>. É uma orientação clara e prática para 
                      o clínico sobre como ajustar a terapia antimicrobiana.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é o significado da nova categoria \"I\" no BrCAST?",
                options: [
                  "Intermediário, com eficácia duvidosa e resultado incerto",
                  "Sensível com Aumento de Exposição, indicando que funciona se otimizar o regime terapêutico",
                  "Ineficaz, devendo ser evitado sempre que possível"
                ],
                correct: 1,
                explanation: "A categoria 'I' no BrCAST significa 'Sensível com Aumento de Exposição', não mais 'Intermediário'. Isso representa uma mudança conceitual importante: não é um resultado vago ou duvidoso, mas sim uma orientação clara de que o antibiótico será eficaz se aplicarmos estratégias para aumentar a exposição do microrganismo ao fármaco."
              }
            },
            {
              title: "Estratégias de Aumento de Exposição",
              content: `
                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">⚙️ Estratégias de Exposição</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
                    A categoria "I" indica que o antibiótico <strong>pode ser eficaz</strong> 
                    se aplicarmos estratégias para aumentar a exposição do microrganismo ao fármaco:
                  </p>
                  
                  <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #166534; margin-bottom: 10px;">1️⃣ Aumento de Dose</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      Administrar <strong>doses mais altas</strong> do antibiótico para elevar a concentração 
                      sérica máxima (Cmax).
                    </p>
                    <p style="font-size: 14px; line-height: 1.6;">
                      <strong>Exemplo:</strong> Meropenem 2g IV 8/8h em vez de 1g IV 8/8h
                    </p>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">2️⃣ Aumento do Tempo de Infusão</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Prolongar o tempo de infusão</strong> para manter concentrações terapêuticas 
                      por período mais longo (especialmente para beta-lactâmicos tempo-dependentes).
                    </p>
                    <p style="font-size: 14px; line-height: 1.6;">
                      <strong>Exemplo:</strong> Piperacilina-tazobactam 4,5g em infusão de 4 horas em vez de 30 minutos
                    </p>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #d97706; margin-bottom: 10px;">3️⃣ Redução do Intervalo entre Doses</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Administrar mais frequentemente</strong> para manter concentrações acima da 
                      <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> por mais tempo.
                    </p>
                    <p style="font-size: 14px; line-height: 1.6;">
                      <strong>Exemplo:</strong> Cefepima 2g IV 8/8h em vez de 2g IV 12/12h
                    </p>
                  </div>
                  
                  <div style="background: #f3e8ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #7c3aed; margin-bottom: 10px;">4️⃣ Aproveitamento de Condições Favoráveis do Sítio</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      Considerar que alguns sítios de infecção <strong>concentram o antibiótico</strong> 
                      naturalmente, alcançando níveis muito superiores aos séricos.
                    </p>
                    <p style="font-size: 14px; line-height: 1.6;">
                      <strong>Exemplo:</strong> Amicacina em <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> - concentração urinária pode ser 100x maior 
                      que a sérica, permitindo uso mesmo com <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> "Intermediária"
                    </p>
                  </div>
                  
                  <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Exemplo Prático Completo</h4>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Situação Clínica:</strong> Paciente com pneumonia por <em>Pseudomonas aeruginosa</em>
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                      <li><strong>Antibiótico:</strong> Cefepima</li>
                      <li><strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>:</strong> 8 mg/L</li>
                      <li><strong>Interpretação <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr>:</strong> Sensível com Aumento de Exposição (I)</li>
                      <li><strong>Estratégia escolhida:</strong> Cefepima 2g IV 8/8h em infusão prolongada de 3h</li>
                      <li><strong>Resultado esperado:</strong> Concentração mantida acima da CIM por > 70% do intervalo</li>
                      <li><strong>Desfecho:</strong> Alta probabilidade de sucesso terapêutico</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Quais são as principais estratégias para aumentar a exposição quando o antibiograma indica categoria \"I\"?",
                options: [
                  "Apenas aumentar a dose do antibiótico, sem outras modificações",
                  "Aumento de dose, prolongamento da infusão, redução do intervalo entre doses e aproveitamento de condições favoráveis do sítio",
                  "Trocar imediatamente por outro antibiótico, pois \"I\" indica ineficácia"
                ],
                correct: 1,
                explanation: "As quatro principais estratégias são: 1) Aumento de dose (ex: meropenem 2g em vez de 1g), 2) Prolongamento do tempo de infusão (ex: piperacilina-tazobactam em 4h), 3) Redução do intervalo entre doses (ex: cefepima 8/8h em vez de 12/12h), e 4) Aproveitamento de condições favoráveis do sítio (ex: alta concentração urinária de amicacina em ITU). Essas estratégias podem ser combinadas conforme necessário."
              }
            },
            {
              title: "Quando Considerar Alternativas",
              content: `
                <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Quando Considerar Alternativas</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                    Mesmo com a possibilidade de otimização, em algumas situações pode ser mais prudente 
                    escolher um antibiótico com categoria "S":
                  </p>
                  <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                    <li><strong>Infecções muito graves:</strong> Bacteremia, meningite, endocardite</li>
                    <li><strong>Paciente crítico:</strong> Choque séptico, disfunção orgânica múltipla</li>
                    <li><strong>Sítio de difícil penetração:</strong> <abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr>, osso, próstata</li>
                    <li><strong>Imunossupressão severa:</strong> Neutropenia profunda, HIV avançado</li>
                    <li><strong>Limitações práticas:</strong> Impossibilidade de infusão prolongada</li>
                  </ul>
                  
                  <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #991b1b; margin-bottom: 10px;">🎯 Critérios de Decisão</h4>
                    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                      <tr style="background: #dc2626; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Situação</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Usar "I" com otimização</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Preferir "S"</th>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Gravidade</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Leve a moderada</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Grave ou crítica</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sítio</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Boa penetração</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Difícil penetração</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Imunidade</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Imunocompetente</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Imunossuprimido</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Recursos</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Otimização viável</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Limitações práticas</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #c2410c; margin-bottom: 10px;">💡 Princípio Geral</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      A categoria "I" é uma <strong>opção válida e eficaz</strong> quando bem utilizada, 
                      mas em situações de <strong>alta gravidade ou complexidade</strong>, a segurança 
                      adicional de um antibiótico "S" pode ser preferível. A decisão deve ser 
                      <strong>individualizada</strong> considerando o paciente, a infecção e os recursos disponíveis.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Em quais situações é mais prudente escolher um antibiótico \"S\" em vez de usar \"I\" com otimização?",
                options: [
                  "Sempre que houver categoria \"I\", pois indica ineficácia do antibiótico",
                  "Em infecções graves, pacientes críticos, sítios de difícil penetração, imunossupressão severa ou limitações práticas",
                  "Apenas quando o paciente tem alergia ao antibiótico classificado como \"I\""
                ],
                correct: 1,
                explanation: "Embora a categoria 'I' seja uma opção válida com otimização adequada, em situações de maior risco é mais prudente preferir antibióticos 'S': infecções muito graves (bacteremia, meningite, endocardite), pacientes críticos (choque séptico), sítios de difícil penetração (SNC, osso), imunossupressão severa (neutropenia profunda) ou limitações práticas (impossibilidade de infusão prolongada). A decisão deve ser individualizada."
              }
            },

            {
              title: "Evidências Insuficientes: O Que Significa?",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">❓ Evidências Insuficientes</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Quando o <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr> indica <strong>"evidências insuficientes"</strong>, significa que 
                    <strong>não há dados científicos robustos</strong> para estabelecer pontos de corte 
                    para aquela combinação microrganismo-antibiótico.
                  </p>
                  
                  <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #c2410c; margin-bottom: 15px;">📋 O que isso significa?</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                      <li><strong>Falta de estudos:</strong> Poucos dados de <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr> disponíveis</li>
                      <li><strong>Falta de ensaios clínicos:</strong> Desfechos clínicos não estabelecidos</li>
                      <li><strong>Variabilidade:</strong> Comportamento imprevisível in vivo</li>
                      <li><strong>Raridade:</strong> Combinação pouco testada na prática</li>
                    </ul>
                  </div>
                </div>
                
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Exemplo: Burkholderia cepacia</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
                    <em>Burkholderia cepacia</em> não possui ponto de corte no <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr> para cotrimoxazol.
                  </p>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">📊 Situação Prática</h4>
                    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                      <tr style="background: #3b82f6; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Aspecto</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Informação</th>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Microrganismo</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><em>Burkholderia cepacia</em></td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Antibiótico</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Cotrimoxazol (Sulfametoxazol-trimetoprima)</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Status <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr></strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd; color: #d97706; font-weight: bold;">Evidências Insuficientes</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> obtida</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">2 mg/L (exemplo)</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Interpretação</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">❌ Não é possível classificar como S/I/R</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #d97706; margin-bottom: 10px;">🤔 O que fazer nesta situação?</h4>
                    <ol style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                      <li><strong>Consultar literatura:</strong> Buscar estudos específicos sobre a combinação</li>
                      <li><strong>Considerar experiência clínica:</strong> Casos anteriores de sucesso/falha</li>
                      <li><strong>Avaliar alternativas:</strong> Antibióticos com pontos de corte estabelecidos</li>
                      <li><strong>Discussão multidisciplinar:</strong> Infectologia + Microbiologia</li>
                      <li><strong>Monitoramento rigoroso:</strong> Acompanhar resposta clínica de perto</li>
                    </ol>
                  </div>
                </div>
              `,
              question: {
                text: "O que significa quando o BrCAST indica \"evidências insuficientes\" para uma combinação microrganismo-antibiótico?",
                options: [
                  "Que o microrganismo é resistente e o antibiótico não deve ser usado",
                  "Que não há dados científicos robustos para estabelecer pontos de corte confiáveis",
                  "Que houve erro no teste e ele deve ser repetido"
                ],
                correct: 1,
                explanation: "Evidências insuficientes significa que não há dados científicos robustos (estudos de PK/PD, ensaios clínicos, desfechos estabelecidos) para definir pontos de corte confiáveis. Exemplo: Burkholderia cepacia não tem ponto de corte para cotrimoxazol. Nesta situação, deve-se consultar literatura, considerar experiência clínica, avaliar alternativas e discutir em equipe multidisciplinar."
              }
            },
            {
              title: "Reavaliação da Categoria \"I\"",
              content: `
                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">🔄 Reavaliação do "I"</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>"I" não representa qualidade inferior ao "S"</strong>, apenas requer ajuste de 
                    regime terapêutico.
                  </p>
                  
                  <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #166534; margin-bottom: 15px;">💡 Mudança de Mentalidade</h4>
                    <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                      <tr style="background: #10b981; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Pensamento Antigo (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>)</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Pensamento Novo (<abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr>)</th>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">S = Bom, I = Duvidoso, R = Ruim</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">S = Dose padrão, I = Dose otimizada, R = Evitar</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;">"I" é segunda escolha</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">"I" pode ser primeira escolha se otimizado</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Evitar "I" sempre que possível</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Usar "I" com estratégia adequada</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Interpretação vaga</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Orientação terapêutica clara</td>
                      </tr>
                    </table>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">🎯 Implicações Práticas</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      A mudança de mentalidade sobre a categoria "I" tem impactos diretos na prática clínica:
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li><strong>Amplia opções terapêuticas:</strong> Mais antibióticos podem ser usados com segurança</li>
                      <li><strong>Reduz pressão seletiva:</strong> Evita uso desnecessário de antibióticos de última linha</li>
                      <li><strong>Melhora stewardship:</strong> Uso mais racional baseado em <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr></li>
                      <li><strong>Requer conhecimento:</strong> Profissionais precisam entender estratégias de otimização</li>
                    </ul>
                  </div>
                  
                  <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 15px 0;">
                    <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Mensagem Chave</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      A categoria "I" representa uma <strong>oportunidade terapêutica</strong>, não uma limitação. 
                      Com o conhecimento adequado de <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr> e estratégias de otimização, antibióticos classificados 
                      como "I" podem ser tão eficazes quanto os "S".
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é a principal diferença entre a interpretação da categoria \"I\" no CLSI e no BrCAST?",
                options: [
                  "No CLSI era \"Intermediário\" (duvidoso), no BrCAST é \"Sensível com Aumento de Exposição\" (orientação clara)",
                  "No CLSI era \"Ineficaz\", no BrCAST é \"Intermediário\"",
                  "Não há diferença, ambos usam o mesmo conceito de \"Intermediário\""
                ],
                correct: 0,
                explanation: "No CLSI, 'I' significava 'Intermediário' com interpretação vaga ('talvez funcione'), sem orientação clara de conduta. No BrCAST, 'I' significa 'Sensível com Aumento de Exposição', fornecendo orientação terapêutica específica: o antibiótico funciona se otimizar dose, tempo de infusão ou intervalo. Isso muda a mentalidade de 'evitar I' para 'usar I com estratégia adequada'."
              }
            },
            {
              title: "Desafios Práticos e Princípios",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4b5563; margin-bottom: 15px;">📚 Desafios Práticos do <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr></h3>
                  
                  <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #374151; margin-bottom: 10px;">1️⃣ Transição de Sistemas</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li>Laboratórios precisaram atualizar equipamentos e software</li>
                      <li>Período de adaptação com possíveis inconsistências</li>
                      <li>Necessidade de treinamento de equipes</li>
                    </ul>
                  </div>
                  
                  <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #374151; margin-bottom: 10px;">2️⃣ Comunicação com Prescritores</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li>Médicos acostumados com <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> podem estranhar mudanças</li>
                      <li>Necessidade de explicar por que "S" virou "I" ou "R"</li>
                      <li>Educação sobre estratégias de otimização</li>
                    </ul>
                  </div>
                  
                  <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #374151; margin-bottom: 10px;">3️⃣ Limitações de Recursos</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li>Infusão prolongada pode não ser viável em todos os serviços</li>
                      <li>Doses altas podem ter custo proibitivo</li>
                      <li>Monitoramento terapêutico nem sempre disponível</li>
                    </ul>
                  </div>
                  
                  <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #374151; margin-bottom: 10px;">4️⃣ Lacunas de Evidência</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li>Nem todas as combinações microrganismo-antibiótico têm pontos de corte</li>
                      <li>Microrganismos raros frequentemente sem orientação</li>
                      <li>Necessidade de julgamento clínico individualizado</li>
                    </ul>
                  </div>
                </div>
                
                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">✅ Princípios para Lidar com Desafios</h3>
                  <ol style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                    <li><strong>Educação contínua:</strong> Mantenha-se atualizado sobre mudanças</li>
                    <li><strong>Comunicação clara:</strong> Explique mudanças para prescritores</li>
                    <li><strong>Pensamento <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr>:</strong> Considere farmacocinética e farmacodinâmica</li>
                    <li><strong>Individualização:</strong> Adapte estratégias ao paciente e contexto</li>
                    <li><strong>Colaboração:</strong> Trabalhe em equipe multidisciplinar</li>
                    <li><strong>Monitoramento:</strong> Acompanhe resposta clínica rigorosamente</li>
                  </ol>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 15px 0;">
                  <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Mensagem Final</h4>
                  <p style="font-size: 14px; line-height: 1.6;">
                    Os desafios do <abbr title="Brazilian Committee on Antimicrobial Susceptibility Testing - Comitê brasileiro de testes de sensibilidade" style="text-decoration: underline dotted; cursor: help; border: none;">BrCAST</abbr> são <strong>oportunidades de aprendizado</strong>. A categoria "I" 
                    não é inferior ao "S", apenas requer <strong>pensamento farmacológico mais sofisticado</strong>. 
                    Quando encontrar "evidências insuficientes", busque <strong>literatura especializada</strong> 
                    e <strong>discussão multidisciplinar</strong> para tomar a melhor decisão para o paciente.
                  </p>
                </div>
              `,
              question: {
                text: "Quais são os principais desafios práticos na implementação do BrCAST?",
                options: [
                  "Apenas a necessidade de atualização de equipamentos laboratoriais",
                  "Transição de sistemas, comunicação com prescritores, limitações de recursos e lacunas de evidência",
                  "Somente a resistência dos médicos em aceitar as mudanças"
                ],
                correct: 1,
                explanation: "Os principais desafios do BrCAST são: 1) Transição de sistemas (atualização de equipamentos, treinamento), 2) Comunicação com prescritores (explicar mudanças, educar sobre otimização), 3) Limitações de recursos (viabilidade de infusão prolongada, custos), e 4) Lacunas de evidência (combinações sem pontos de corte, microrganismos raros). Esses desafios requerem educação contínua, comunicação clara, pensamento PK/PD e trabalho multidisciplinar."
              }
            }

          ]
        },
        {
          id: 15,
          title: "Além da Categorização S/I/R",
          duration: "45 min",
          xp: 225,
          sections: [
            {
              title: "O Que \"S\" Realmente Significa",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ O "S" Não É Garantia Absoluta</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Um resultado <strong>"Sensível" (S)</strong> no antibiograma indica que o microrganismo 
                    é suscetível ao antibiótico <strong>in vitro</strong>, mas isso <strong>não garante sucesso 
                    terapêutico</strong> em todas as situações clínicas.
                  </p>
                  
                  <div style="background: #fff7ed; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #c2410c; margin-bottom: 15px;">🎯 O Que "S" Realmente Significa</h4>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                      A categoria "Sensível" indica que:
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                      <li><strong>In vitro:</strong> O antibiótico inibe o crescimento bacteriano em concentrações alcançáveis</li>
                      <li><strong>Dose padrão:</strong> Com regime de dosagem recomendado</li>
                      <li><strong>Alta probabilidade:</strong> De sucesso terapêutico em condições ideais</li>
                      <li><strong>Não é certeza:</strong> Outros fatores podem interferir no resultado clínico</li>
                    </ul>
                  </div>
                  
                  <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 15px 0;">
                    <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Conceito Fundamental</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      O antibiograma testa a sensibilidade <strong>in vitro</strong> em condições controladas. 
                      O corpo humano apresenta variáveis complexas que podem afetar o resultado terapêutico, 
                      mesmo quando o teste mostra "Sensível".
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "O que significa quando um antibiograma indica resultado \"S\" (Sensível)?",
                options: [
                  "A) Que o antibiótico garante 100% de cura da infecção em qualquer situação clínica",
                  "B) Que o microrganismo é suscetível ao antibiótico in vitro com alta probabilidade de sucesso em condições ideais, mas outros fatores clínicos podem influenciar o resultado",
                  "C) Que o antibiótico é ineficaz e não deve ser utilizado no tratamento"
                ],
                correct: 1,
                explanation: "O resultado 'Sensível' (S) indica que o antibiótico inibe o crescimento bacteriano in vitro em concentrações alcançáveis com dose padrão, apresentando alta probabilidade de sucesso terapêutico em condições ideais. Porém, não é garantia absoluta, pois fatores como gravidade da infecção, localização, imunidade do paciente e farmacocinética do antibiótico também influenciam o desfecho clínico."
              }
            },
            {
              title: "Gravidade e Localização da Infecção",
              content: `
                <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🔍 Fatores que Influenciam o Desfecho</h3>
                  
                  <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #991b1b; margin-bottom: 10px;">1️⃣ Gravidade da Infecção</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Infecções graves</strong> requerem bactericidas potentes e rápidos:
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                      <li><strong>Sepse/Choque séptico:</strong> Necessita ação bactericida rápida</li>
                      <li><strong>Meningite:</strong> Exige alta penetração no <abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr></li>
                      <li><strong>Endocardite:</strong> Requer atividade bactericida sustentada</li>
                      <li><strong>Neutropenia febril:</strong> Paciente sem defesas próprias</li>
                    </ul>
                    <p style="font-size: 14px; line-height: 1.6; margin-top: 10px; font-style: italic;">
                      <strong>Exemplo:</strong> Um antibiótico bacteriostático pode ser "S" in vitro, mas 
                      insuficiente em sepse grave onde é necessária eliminação bacteriana rápida.
                    </p>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">2️⃣ Localização da Infecção</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      A <strong>penetração do antibiótico</strong> no sítio de infecção é crucial:
                    </p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                      <tr style="background: #3b82f6; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Sítio</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Desafio</th>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr></strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Barreira hematoencefálica</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Próstata</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Barreira prostática</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Osso</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Vascularização limitada</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Abscesso</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">pH baixo, pus, necrose</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Biofilme</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Matriz protetora</td>
                      </tr>
                    </table>
                  </div>
                </div>
              `,
              question: {
                text: "Por que a localização da infecção é um fator crítico mesmo quando o antibiograma mostra \"S\"?",
                options: [
                  "A) Porque a localização não afeta a eficácia do antibiótico",
                  "B) Porque alguns sítios apresentam barreiras à penetração do antibiótico (SNC, próstata, osso, abscessos, biofilmes), limitando sua eficácia apesar da sensibilidade in vitro",
                  "C) Porque todos os antibióticos penetram igualmente em todos os tecidos"
                ],
                correct: 1,
                explanation: "A localização da infecção é crítica porque alguns sítios apresentam barreiras significativas à penetração do antibiótico: barreira hematoencefálica no SNC, barreira prostática, vascularização limitada no osso, pH baixo e necrose em abscessos, e matriz extracelular protetora em biofilmes. Mesmo com resultado 'S', o antibiótico pode não alcançar concentrações adequadas nesses locais, necessitando escolha específica ou drenagem cirúrgica."
              }
            },
            {
              title: "Imunidade e Farmacocinética",
              content: `
                <div style="background: #f3e8ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #7c3aed; margin-bottom: 15px;">👤 Estado Imunológico e Propriedades <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr></h3>
                  
                  <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #d97706; margin-bottom: 10px;">3️⃣ Estado Imunológico do Paciente</h4>
                    
                    <div style="background: #fffbeb; padding: 15px; border-radius: 8px; margin: 10px 0;">
                      <h5 style="color: #92400e; margin-bottom: 10px;">✅ Pacientes Imunocompetentes</h5>
                      <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                        <li>Antibióticos bacteriostáticos podem ser suficientes</li>
                        <li>Sistema imune completa a eliminação bacteriana</li>
                        <li>Menor risco de falha terapêutica</li>
                      </ul>
                    </div>
                    
                    <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 10px 0;">
                      <h5 style="color: #991b1b; margin-bottom: 10px;">⚠️ Pacientes Imunossuprimidos</h5>
                      <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                        <li><strong>Neutropenia:</strong> Necessário antibiótico bactericida</li>
                        <li><strong>HIV avançado:</strong> Tratamento prolongado, doses altas</li>
                        <li><strong>Transplantados:</strong> Risco de infecções oportunistas</li>
                        <li><strong>Quimioterapia:</strong> Profilaxia pode ser necessária</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">4️⃣ Farmacocinética do Antibiótico</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      As <strong>propriedades <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr></strong> determinam se o antibiótico alcança concentrações adequadas:
                    </p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                      <tr style="background: #7c3aed; color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Parâmetro PK</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Impacto Clínico</th>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Biodisponibilidade oral</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Viabilidade da via oral</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume de distribuição</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Penetração tecidual</td>
                      </tr>
                      <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Ligação proteica</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Fração livre ativa</td>
                      </tr>
                      <tr style="background: #f9fafb;">
                        <td style="padding: 8px; border: 1px solid #ddd;">Meia-vida</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Frequência de doses</td>
                      </tr>
                    </table>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é a principal diferença na escolha de antibióticos entre pacientes imunocompetentes e imunossuprimidos?",
                options: [
                  "A) Não há diferença, ambos podem usar qualquer antibiótico \"S\"",
                  "B) Pacientes imunocompetentes podem usar bacteriostáticos, enquanto imunossuprimidos (neutropenia, HIV avançado, transplantados) necessitam bactericidas devido à incapacidade do sistema imune de completar a eliminação bacteriana",
                  "C) Pacientes imunossuprimidos sempre precisam de doses menores de antibióticos"
                ],
                correct: 1,
                explanation: "Em pacientes imunocompetentes, o sistema imune pode completar a eliminação bacteriana, permitindo uso de antibióticos bacteriostáticos. Já em pacientes imunossuprimidos (neutropenia, HIV avançado, transplantados, quimioterapia), o sistema imune está comprometido, sendo necessário antibiótico bactericida para eliminação efetiva das bactérias, além de tratamento prolongado e doses potencialmente mais altas."
              }
            },
            {
              title: "Exemplo Prático: Meningite Pneumocócica",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4b5563; margin-bottom: 15px;">📊 Exemplo Prático Integrado</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                    <strong>Caso Clínico:</strong> Meningite por <em>Streptococcus pneumoniae</em>
                  </p>
                  
                  <div style="background: #ffffff; padding: 15px; border: 2px solid #e5e7eb; border-radius: 8px; margin: 10px 0;">
                    <ul style="margin-left: 20px; line-height: 1.8;">
                      <li><strong>Antibiograma:</strong> Sensível (S) a Penicilina G (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 0,06 mg/L)</li>
                      <li><strong>Gravidade:</strong> Meningite é infecção grave, risco de morte/sequelas</li>
                      <li><strong>Localização:</strong> <abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr> - barreira hematoencefálica limita penetração</li>
                      <li><strong>Imunidade:</strong> Paciente previamente hígido (imunocompetente)</li>
                      <li><strong>Farmacocinética:</strong> Penicilina G tem penetração limitada no <abbr title="Sistema Nervoso Central - Cérebro e medula espinhal" style="text-decoration: underline dotted; cursor: help; border: none;">SNC</abbr></li>
                    </ul>
                  </div>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #059669; margin-bottom: 10px;">✅ Decisão Terapêutica Adequada</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Apesar de "S", é necessário <strong>dose alta</strong> de Penicilina G (300.000-400.000 UI/kg/dia) 
                      para alcançar concentrações adequadas no líquor. Dose padrão seria insuficiente mesmo com 
                      resultado "Sensível".
                    </p>
                  </div>
                  
                  <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0ea5e9; margin: 15px 0;">
                    <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Mensagem Chave</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      O antibiograma é uma <strong>ferramenta essencial</strong>, mas não substitui o 
                      <strong>raciocínio clínico integrado</strong>. "Sensível" significa alta probabilidade 
                      de sucesso <strong>em condições ideais</strong>, mas o médico deve considerar todos os 
                      fatores do paciente, da infecção e do antibiótico para tomar a melhor decisão terapêutica.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "No caso de meningite pneumocócica com antibiograma \"S\" para Penicilina G, qual é a conduta adequada?",
                options: [
                  "A) Usar dose padrão de Penicilina G, pois o antibiograma mostra \"S\"",
                  "B) Usar dose alta de Penicilina G (300.000-400.000 UI/kg/dia) devido à penetração limitada no SNC, mesmo com resultado \"S\"",
                  "C) Trocar por outro antibiótico, pois Penicilina G nunca funciona em meningite"
                ],
                correct: 1,
                explanation: "Mesmo com resultado 'Sensível', a meningite pneumocócica requer dose alta de Penicilina G (300.000-400.000 UI/kg/dia) porque: (1) é infecção grave com risco de morte/sequelas, (2) a barreira hematoencefálica limita a penetração do antibiótico no SNC, (3) dose padrão resultaria em concentrações subterapêuticas no líquor. Este caso ilustra perfeitamente como 'S' não garante sucesso com dose padrão em todas as situações."
              }
            },
            {
              title: "Por Que Interpretar Mecanismos de Resistência",
              content: `
                <div style="background: #eef2ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4338ca; margin-bottom: 15px;">🔬 Além do S/I/R</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Interpretar <strong>mecanismos de resistência</strong> permite decisões terapêuticas mais precisas.
                  </p>
                  
                  <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 15px;">🧩 Importância Clínica</h4>
                    <ul style="margin-left: 20px; line-height: 1.8;">
                      <li><strong>Predizer resistências cruzadas:</strong> Um mecanismo afeta múltiplos antibióticos</li>
                      <li><strong>Escolher terapia adequada:</strong> Alguns mecanismos permitem ajustes de dose</li>
                      <li><strong>Evitar falhas:</strong> Antibióticos "S" podem falhar com mecanismos complexos</li>
                      <li><strong>Vigilância epidemiológica:</strong> Identificar disseminação de resistência</li>
                      <li><strong>Controle de infecção:</strong> Implementar precauções adequadas</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Por que é importante interpretar os mecanismos de resistência além da categorização S/I/R?",
                options: [
                  "A) Apenas para fins acadêmicos, sem impacto clínico prático",
                  "B) Para predizer resistências cruzadas, escolher terapia adequada, evitar falhas terapêuticas e implementar controle de infecção apropriado",
                  "C) Porque a categorização S/I/R é sempre incorreta"
                ],
                correct: 1,
                explanation: "Interpretar mecanismos de resistência é essencial porque permite: (1) predizer resistências cruzadas a múltiplos antibióticos, (2) escolher terapia adequada considerando ajustes de dose, (3) evitar falhas terapêuticas mesmo com resultado 'S', (4) realizar vigilância epidemiológica, e (5) implementar precauções de controle de infecção apropriadas. Vai além da simples categorização S/I/R."
              }
            },
            {
              title: "β-Lactamases: ESBL e Carbapenemases",
              content: `
                <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">🎯 β-Lactamases</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
                    Enzimas que <strong>hidrolisam o anel β-lactâmico</strong>, inativando penicilinas e cefalosporinas.
                  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: #10b981; color: white;">
                      <th style="padding: 10px; border: 1px solid #ddd;">Tipo</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Padrão</th>
                      <th style="padding: 10px; border: 1px solid #ddd;">Como Identificar</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr></strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">R a cefalosporinas 3ª geração</td>
                      <td style="padding: 8px; border: 1px solid #ddd;">S a carbapenêmicos</td>
                    </tr>
                    <tr style="background: #f9fafb;">
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Klebsiella pneumoniae Carbapenemase - Enzima que confere resistência a carbapenêmicos" style="text-decoration: underline dotted; cursor: help; border: none;">KPC</abbr></strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">R a carbapenêmicos</td>
                      <td style="padding: 8px; border: 1px solid #ddd;"><abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> elevada para meropenem</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong><abbr title="Metalo-β-Lactamase - Enzima que confere resistência a todos β-lactâmicos exceto aztreonam" style="text-decoration: underline dotted; cursor: help; border: none;">MBL</abbr></strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">R a todos β-lactâmicos</td>
                      <td style="padding: 8px; border: 1px solid #ddd;">S a aztreonam</td>
                    </tr>
                  </table>
                </div>
              `,
              question: {
                text: "Como diferenciar ESBL de carbapenemases no antibiograma?",
                options: [
                  "A) ESBL é sensível a carbapenêmicos e resistente a cefalosporinas de 3ª geração; carbapenemases são resistentes a carbapenêmicos",
                  "B) Não é possível diferenciar pelo antibiograma",
                  "C) ESBL sempre é sensível a todos os antibióticos"
                ],
                correct: 0,
                explanation: "ESBL (Extended-Spectrum β-Lactamase) apresenta resistência a penicilinas e cefalosporinas de 3ª geração (ceftriaxona, cefotaxima), mas mantém sensibilidade a carbapenêmicos. Já as carbapenemases (KPC, MBL) conferem resistência aos carbapenêmicos. MBL se diferencia por manter sensibilidade a aztreonam. Esta diferenciação é crucial para escolha terapêutica."
              }
            },
            {
              title: "Outros Mecanismos de Resistência",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚙️ Mecanismos Adicionais</h3>
                  
                  <div style="background: #fffbeb; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #92400e; margin-bottom: 10px;">🔄 Bombas de Efluxo</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Expulsam antibióticos para fora da célula. Comum em <em>Pseudomonas</em> e <em>Acinetobacter</em>.
                      Causam resistência a múltiplas classes simultaneamente.
                    </p>
                  </div>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #991b1b; margin-bottom: 10px;">🚪 Alterações de Permeabilidade</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Perda de porinas reduz entrada de antibióticos. <abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr> + perda de porinas pode causar 
                      resistência a carbapenêmicos sem carbapenemase.
                    </p>
                  </div>
                  
                  <div style="background: #f3e8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #7c3aed; margin-bottom: 10px;">🎯 Modificações do Alvo</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li><strong><abbr title="Penicillin-Binding Protein 2a - Proteína alterada que confere resistência em MRSA" style="text-decoration: underline dotted; cursor: help; border: none;">PBP2a</abbr>:</strong> <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr> (resistente a todos β-lactâmicos)</li>
                      <li><strong>DNA girase:</strong> Resistência a fluoroquinolonas</li>
                      <li><strong><abbr title="Modificação do peptideoglicano que confere resistência à vancomicina em VRE" style="text-decoration: underline dotted; cursor: help; border: none;">D-Ala-D-Lac</abbr>:</strong> <abbr title="Vancomycin-Resistant Enterococcus - Enterococo resistente à vancomicina" style="text-decoration: underline dotted; cursor: help; border: none;">VRE</abbr> (resistente a vancomicina)</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Qual mecanismo explica MRSA (Staphylococcus aureus resistente à meticilina)?",
                options: [
                  "A) Bombas de efluxo que expulsam β-lactâmicos",
                  "B) Modificação do alvo (PBP2a) que impede ligação de todos os β-lactâmicos",
                  "C) Produção de β-lactamases"
                ],
                correct: 1,
                explanation: "MRSA apresenta resistência por modificação do alvo molecular através da produção de PBP2a (Penicillin-Binding Protein alterada), que tem baixa afinidade por todos os β-lactâmicos, incluindo meticilina e oxacilina. Este mecanismo é diferente de β-lactamases e confere resistência cruzada a toda a classe dos β-lactâmicos."
              }
            },
            {
              title: "Exemplo Prático: Interpretando Antibiograma",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4b5563; margin-bottom: 15px;">📊 Caso Clínico</h3>
                  <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                    <em>Klebsiella pneumoniae</em> em hemocultura:
                  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: #6366f1; color: white;">
                      <th style="padding: 10px;">Antibiótico</th>
                      <th style="padding: 10px;">Resultado</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;">Ampicilina</td>
                      <td style="padding: 8px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">R</td>
                    </tr>
                    <tr style="background: #f9fafb;">
                      <td style="padding: 8px; border: 1px solid #ddd;">Ceftriaxona</td>
                      <td style="padding: 8px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">R</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;">Meropenem</td>
                      <td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">S</td>
                    </tr>
                  </table>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #059669; margin-bottom: 10px;">✅ Interpretação</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Padrão compatível com <strong><abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr></strong>: resistente a penicilinas e cefalosporinas 
                      de 3ª geração, mas sensível a carbapenêmicos. Tratamento: meropenem ou ertapenem.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "No caso apresentado, qual é o mecanismo de resistência mais provável?",
                options: [
                  "A) Carbapenemase (KPC)",
                  "B) ESBL (resistente a cefalosporinas 3ª geração, sensível a carbapenêmicos)",
                  "C) Ausência de mecanismo de resistência"
                ],
                correct: 1,
                explanation: "O padrão de resistência a ampicilina e ceftriaxona (cefalosporina de 3ª geração), mas sensibilidade a meropenem (carbapenêmico), é característico de ESBL (Extended-Spectrum β-Lactamase). Se fosse carbapenemase, haveria resistência ao meropenem. O tratamento de escolha são os carbapenêmicos."
              }
            },
          ]
        },
        {
          id: 16,
          title: "Situações Clínicas Especiais",
          duration: "30 min",
          xp: 180,
          sections: [
            {
              title: "Antibióticos de Moléculas Grandes",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">💊 Antibióticos de Moléculas Grandes</h3>
                  
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Para <strong>glicopeptídeos</strong> (vancomicina) e <strong>polimixinas</strong> (colistina) 
                    em infecções graves, é fundamental realizar <strong>técnica dilucional específica</strong>, 
                    pois métodos convencionais podem não ser adequados devido ao tamanho das moléculas.
                  </p>
                  
                  <div style="background: #fffbeb; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #92400e; margin-bottom: 10px;">🔬 Por Que Técnica Especial?</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                      <li><strong>Moléculas grandes:</strong> Vancomicina e colistina têm peso molecular elevado</li>
                      <li><strong>Difusão limitada:</strong> Não difundem bem em discos ou tiras de gradiente</li>
                      <li><strong>Resultados imprecisos:</strong> Métodos convencionais podem subestimar sensibilidade</li>
                      <li><strong>Técnica dilucional:</strong> Microdiluição em caldo é o padrão-ouro</li>
                    </ul>
                  </div>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #991b1b; margin-bottom: 10px;">⚠️ Importante</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Em infecções graves por microrganismos multirresistentes, onde vancomicina ou 
                      colistina são opções terapêuticas críticas, a determinação precisa da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> 
                      por método dilucional é essencial para guiar a terapia.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Por que antibióticos de moléculas grandes como vancomicina e colistina requerem técnica dilucional específica para teste de sensibilidade?",
                options: [
                  "A) Porque são antibióticos muito caros e precisam de métodos especiais de armazenamento",
                  "B) Porque suas moléculas grandes não difundem adequadamente em métodos convencionais (disco-difusão), podendo gerar resultados imprecisos, sendo necessária microdiluição em caldo",
                  "C) Porque são sempre resistentes a todos os métodos convencionais de teste"
                ],
                correct: 1,
                explanation: "Glicopeptídeos (vancomicina) e polimixinas (colistina) possuem moléculas grandes que apresentam difusão limitada em métodos convencionais como disco-difusão ou tiras de gradiente. Isso pode levar a resultados imprecisos que subestimam a sensibilidade real. Por isso, a técnica dilucional (microdiluição em caldo) é o padrão-ouro para determinar a CIM desses antibióticos, especialmente em infecções graves onde a precisão é crítica."
              }
            },
            {
              title: "Infecções por Enterococos",
              content: `
                <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #1e40af; margin-bottom: 15px;">🦠 Infecções por Enterococos</h3>
                  
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Verificar evidência de <strong>sinergia com aminoglicosídeos</strong>, especialmente em 
                    <strong>endocardites</strong>. São os únicos patógenos para os quais existe evidência 
                    clínica robusta de sinergia entre aminoglicosídeos e betalactâmicos.
                  </p>
                  
                  <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e3a8a; margin-bottom: 10px;">💡 Sinergia Terapêutica</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                      <li><strong>Combinação sinérgica:</strong> Betalactâmico (ampicilina ou penicilina) + Aminoglicosídeo (gentamicina)</li>
                      <li><strong>Mecanismo:</strong> Betalactâmico facilita entrada do aminoglicosídeo na célula bacteriana</li>
                      <li><strong>Indicação principal:</strong> Endocardite enterocócica</li>
                      <li><strong>Teste específico:</strong> Verificar resistência de alto nível a aminoglicosídeos</li>
                    </ul>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #92400e; margin-bottom: 10px;">⚠️ Resistência de Alto Nível</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Se o enterococo apresentar <strong>resistência de alto nível a aminoglicosídeos</strong> 
                      (gentamicina ≥500 μg/mL), a sinergia é perdida e a terapia combinada não é eficaz. 
                      Nesse caso, considerar monoterapia prolongada com betalactâmico ou alternativas como 
                      linezolida ou daptomicina.
                    </p>
                  </div>
                  
                  <div style="background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #3730a3; margin-bottom: 10px;">🎯 Importância Clínica</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Enterococos são os <strong>únicos patógenos</strong> com evidência clínica robusta de 
                      sinergia entre betalactâmicos e aminoglicosídeos. Para outros microrganismos, essa 
                      combinação não demonstrou benefício clínico consistente.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é a importância clínica da verificação de sinergia com aminoglicosídeos em infecções por enterococos?",
                options: [
                  "A) Todos os microrganismos Gram-positivos apresentam sinergia com aminoglicosídeos, sendo necessário testar sempre",
                  "B) Enterococos são os únicos patógenos com evidência clínica robusta de sinergia entre betalactâmicos e aminoglicosídeos, especialmente importante em endocardites",
                  "C) A sinergia é irrelevante porque enterococos são sempre sensíveis a monoterapia com betalactâmicos"
                ],
                correct: 1,
                explanation: "Enterococos são os únicos patógenos para os quais existe evidência clínica robusta de sinergia entre betalactâmicos (ampicilina/penicilina) e aminoglicosídeos (gentamicina). Essa combinação é especialmente importante no tratamento de endocardite enterocócica. O betalactâmico facilita a entrada do aminoglicosídeo na célula bacteriana, potencializando o efeito bactericida. No entanto, se houver resistência de alto nível a aminoglicosídeos (≥500 μg/mL), a sinergia é perdida e a terapia combinada não é eficaz."
              }
            },
            {
              title: "Uso de Aminoglicosídeos",
              content: `
                <div style="background: #fee2e2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #991b1b; margin-bottom: 15px;">⚠️ Uso de Aminoglicosídeos</h3>
                  
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>Não é recomendada monoterapia com aminoglicosídeos para enterococos</strong>, 
                    mesmo com resultado sensível, devido à <strong>baixa eficácia clínica</strong>.
                  </p>
                  
                  <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #7f1d1d; margin-bottom: 10px;">🚫 Por Que Evitar Monoterapia?</h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 15px;">
                      <li><strong>Efeito bacteriostático:</strong> Aminoglicosídeos sozinhos não são bactericidas contra enterococos</li>
                      <li><strong>Falha terapêutica:</strong> Alta taxa de falha clínica mesmo com sensibilidade in vitro</li>
                      <li><strong>Penetração limitada:</strong> Dificuldade em atingir concentrações adequadas intracelularmente</li>
                      <li><strong>Evidência clínica:</strong> Estudos demonstram superioridade da terapia combinada</li>
                    </ul>
                  </div>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #14532d; margin-bottom: 10px;">✅ Uso Correto</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      Aminoglicosídeos devem ser usados <strong>sempre em combinação</strong> com betalactâmicos 
                      (ampicilina ou penicilina) para infecções enterocócicas graves, especialmente endocardite.
                    </p>
                    <p style="font-size: 14px; line-height: 1.6;">
                      <strong>Esquema recomendado:</strong> Ampicilina + Gentamicina (se não houver resistência de alto nível)
                    </p>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #92400e; margin-bottom: 10px;">💡 Importante Lembrar</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      O resultado "sensível" no antibiograma para aminoglicosídeos em enterococos 
                      <strong>não significa que a monoterapia será eficaz</strong>. Este é um dos poucos casos 
                      onde a sensibilidade in vitro não se traduz em eficácia clínica quando usado isoladamente.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Por que não é recomendada monoterapia com aminoglicosídeos para enterococos, mesmo quando o antibiograma mostra sensibilidade?",
                options: [
                  "A) Porque aminoglicosídeos são sempre tóxicos e devem ser evitados em qualquer situação",
                  "B) Porque aminoglicosídeos apresentam baixa eficácia clínica contra enterococos quando usados isoladamente, sendo necessária combinação com betalactâmicos para efeito bactericida",
                  "C) Porque enterococos sempre desenvolvem resistência aos aminoglicosídeos durante o tratamento"
                ],
                correct: 1,
                explanation: "Aminoglicosídeos, quando usados em monoterapia contra enterococos, apresentam apenas efeito bacteriostático e não bactericida, mesmo quando o antibiograma mostra sensibilidade. Isso resulta em alta taxa de falha terapêutica. A eficácia clínica só é alcançada quando aminoglicosídeos são combinados com betalactâmicos (ampicilina ou penicilina), que facilitam a penetração do aminoglicosídeo na célula bacteriana, criando sinergia bactericida. Este é um exemplo importante onde a sensibilidade in vitro não se traduz em eficácia clínica na monoterapia."
              }
            },




          ]
        },
        {
          id: 17,
          title: "Erros Comuns a Evitar",
          duration: "25 min",
          xp: 150,
          sections: [
            {
              title: "Comparação Inadequada",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Comparação Inadequada de <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>s</h3>
                  
                  <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #92400e; margin-bottom: 15px;">🏃 Qual o melhor atleta?</h4>
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
                      O que chega em <strong>02 min</strong> ou o que chega em <strong>01:45h</strong>?
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Depende.</strong> Se o segundo estiver correndo uma <strong>maratona</strong> e o primeiro 
                      uma corrida de <strong>100 metros</strong>, então, o melhor é o primeiro.
                    </p>
                    <p style="font-size: 15px; line-height: 1.6; color: #78350f; font-weight: bold;">
                      Essa é a lógica da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>!
                    </p>
                  </div>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #991b1b; margin-bottom: 10px;">🚫 Erro Comum</h4>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>Não se compara <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>s de diferentes antibióticos</strong> em relação a uma mesma bactéria, 
                      pois cada classe tem características <strong>farmacocinéticas</strong> e <strong>farmacodinâmicas</strong> próprias.
                    </p>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">📊 Exemplo Prático</h4>
                    <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>E. coli com:</strong>
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li><strong>Ciprofloxacino:</strong> <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 0,25 mg/L (Sensível)</li>
                      <li><strong>Meropenem:</strong> <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> = 0,5 mg/L (Sensível)</li>
                    </ul>
                    <p style="font-size: 14px; line-height: 1.6; margin-top: 10px; padding: 10px; background: #eff6ff; border-radius: 5px;">
                      ❌ <strong>Erro:</strong> "Ciprofloxacino tem <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> menor, então é melhor"<br>
                      ✅ <strong>Correto:</strong> Ambos são sensíveis. A escolha depende de <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr>, 
                      local da infecção, toxicidade e outros fatores clínicos.
                    </p>
                  </div>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #14532d; margin-bottom: 10px;">✅ Uso Correto da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></h4>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li>Comparar <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> com <strong>pontos de corte</strong> (S/I/R)</li>
                      <li>Avaliar se o antibiótico atinge concentração adequada no <strong>sítio de infecção</strong></li>
                      <li>Considerar <abbr title="Farmacocinética/Farmacodinâmica - Estudo de como o corpo processa o medicamento e como ele age" style="text-decoration: underline dotted; cursor: help; border: none;">PK/PD</abbr> específica de cada classe</li>
                      <li>Usar <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> para <strong>otimização de dose</strong> quando necessário</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Por que não devemos comparar CIMs de diferentes antibióticos para escolher o 'melhor' antibiótico contra uma mesma bactéria?",
                options: [
                  "A) Porque a CIM mais baixa sempre indica o melhor antibiótico, independentemente da classe",
                  "B) Porque cada classe de antibiótico tem características farmacocinéticas e farmacodinâmicas próprias, tornando a comparação direta de CIMs inadequada, como comparar atletas em provas diferentes",
                  "C) Porque a CIM não tem nenhuma utilidade clínica e deve ser ignorada"
                ],
                correct: 1,
                explanation: "Comparar CIMs de diferentes antibióticos é como comparar tempos de atletas em provas diferentes (100m vs maratona). Cada classe de antibiótico tem características farmacocinéticas (como o corpo processa) e farmacodinâmicas (como age contra a bactéria) únicas. Por exemplo, ciprofloxacino com CIM 0,25 mg/L não é necessariamente 'melhor' que meropenem com CIM 0,5 mg/L - ambos podem ser igualmente eficazes se ambos forem sensíveis. A CIM deve ser usada para comparar com pontos de corte (S/I/R) e para otimização de dose, não para comparação direta entre classes diferentes."
              }
            },
            {
              title: "Colonização vs. Infecção",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Colonização vs. Infecção</h3>
                  
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px; font-weight: bold; color: #92400e;">
                    Nem toda cultura positiva significa presença de infecção. A <strong>correlação clínico-laboratorial</strong> 
                    é essencial para diferenciação entre colonização e infecção.
                  </p>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #991b1b; margin-bottom: 10px;">🚫 Erro Comum</h4>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                      <strong>"A cultura deu positivo, então precisa tratar!"</strong>
                    </p>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Essa abordagem leva a uso desnecessário de antibióticos, seleção de resistência, 
                      efeitos adversos e aumento de custos.
                    </p>
                  </div>
                  
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
                    <div style="background: #dcfce7; padding: 15px; border-radius: 8px;">
                      <h4 style="color: #14532d; margin-bottom: 10px;">🦠 Colonização</h4>
                      <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                        <li>Presença de microrganismos</li>
                        <li><strong>Sem</strong> resposta inflamatória</li>
                        <li><strong>Sem</strong> sinais/sintomas</li>
                        <li><strong>Não</strong> requer tratamento</li>
                      </ul>
                    </div>
                    
                    <div style="background: #fee2e2; padding: 15px; border-radius: 8px;">
                      <h4 style="color: #991b1b; margin-bottom: 10px;">🔥 Infecção</h4>
                      <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                        <li>Presença de microrganismos</li>
                        <li><strong>Com</strong> resposta inflamatória</li>
                        <li><strong>Com</strong> sinais/sintomas</li>
                        <li><strong>Requer</strong> tratamento</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">📋 Exemplos Práticos</h4>
                    
                    <div style="margin-bottom: 15px;">
                      <p style="font-size: 14px; font-weight: bold; color: #1e3a8a; margin-bottom: 5px;">
                        ✅ Colonização (NÃO tratar):
                      </p>
                      <ul style="margin-left: 20px; line-height: 1.6; font-size: 13px;">
                        <li>Urocultura positiva em paciente assintomático (bacteriúria assintomática)</li>
                        <li>Swab nasal positivo para <abbr title="Staphylococcus aureus Resistente à Meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr> sem infecção ativa</li>
                        <li>Escarro com Pseudomonas em paciente com DPOC estável</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p style="font-size: 14px; font-weight: bold; color: #1e3a8a; margin-bottom: 5px;">
                        ⚕️ Infecção (TRATAR):
                      </p>
                      <ul style="margin-left: 20px; line-height: 1.6; font-size: 13px;">
                        <li>Urocultura positiva + disúria, febre, dor lombar (ITU)</li>
                        <li>Hemocultura positiva + febre, hipotensão (sepse)</li>
                        <li>Escarro com Pseudomonas + febre, tosse produtiva, infiltrado novo (pneumonia)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h4 style="color: #3730a3; margin-bottom: 10px;">💡 Correlação Clínico-Laboratorial</h4>
                    <p style="font-size: 14px; line-height: 1.6;">
                      Sempre avaliar:
                    </p>
                    <ul style="margin-left: 20px; line-height: 1.8; font-size: 14px;">
                      <li><strong>Sinais e sintomas clínicos</strong> (febre, dor, secreção purulenta)</li>
                      <li><strong>Marcadores inflamatórios</strong> (leucócitos, PCR, procalcitonina)</li>
                      <li><strong>Imagem</strong> (infiltrado, abscesso, coleção)</li>
                      <li><strong>Contexto clínico</strong> (imunossupressão, dispositivos invasivos)</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Por que nem toda cultura positiva deve ser tratada com antibióticos?",
                options: [
                  "A) Porque todas as culturas positivas representam colonização, nunca infecção",
                  "B) Porque é necessário correlação clínico-laboratorial para diferenciar colonização (presença de microrganismos sem resposta inflamatória) de infecção (com resposta inflamatória e sintomas)",
                  "C) Porque antibióticos nunca devem ser usados, independentemente dos sintomas"
                ],
                correct: 1,
                explanation: "Nem toda cultura positiva significa infecção. A colonização é a presença de microrganismos sem resposta inflamatória ou sintomas, não requerendo tratamento. Já a infecção envolve resposta inflamatória e manifestações clínicas. Por exemplo, bacteriúria assintomática (urocultura positiva sem sintomas) é colonização e geralmente não deve ser tratada, exceto em gestantes e antes de procedimentos urológicos. A correlação clínico-laboratorial (sintomas + marcadores inflamatórios + imagem + contexto) é essencial para evitar uso desnecessário de antibióticos, que leva a resistência, efeitos adversos e custos."
              }
            },


          ]
        },
        {
          id: 18,
          title: "Revisão I - Fundamentos",
          duration: "25 min",
          xp: 150,
          sections: [
            {
              title: "Introdução - Revisão de Fundamentos",
              content: `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                  <h2 style="color: white; margin: 0 0 15px 0; font-size: 26px;">📝 Revisão I - Fundamentos</h2>
                  <p style="color: rgba(255,255,255,0.95); margin: 0 0 15px 0; font-size: 16px; line-height: 1.8;">
                    Bem-vindo à primeira lição de revisão! Esta seção contém <strong>15 questões</strong> cuidadosamente selecionadas para testar e consolidar seus conhecimentos sobre os <strong>fundamentos do Teste de Suscetibilidade Antimicrobiana (TSA)</strong>.
                  </p>
                  <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <h4 style="color: white; margin: 0 0 10px 0; font-size: 16px;">📚 Tópicos Abordados:</h4>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                      <li>Papel do laboratório de microbiologia clínica</li>
                      <li>Conceitos fundamentais de resistência (intrínseca vs. adquirida)</li>
                      <li>Mecanismos de resistência (constitutiva, induzível, heterorresistência)</li>
                      <li>Concentração Inibitória Mínima (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>)</li>
                      <li>Indicações para realização do TSA</li>
                    </ul>
                  </div>
                  <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 14px; font-style: italic;">
                    💡 Dica: Leia cada questão com atenção e tente responder antes de ver as alternativas. Boa sorte!
                  </p>
                </div>
              `,
              question: {
                text: "Q1. Qual é o principal papel do laboratório de microbiologia clínica em relação ao tratamento de doenças infecciosas?",
                options: [
                  "Fornecer informações que guiem a seleção de regimes antibióticos apropriados com base no perfil de suscetibilidade mais provável",
                  "Desenvolver novos sistemas automatizados de detecção de microrganismos",
                  "Realizar o TSA de rotina de vírus e parasitas em amostras clínicas"
                ],
                correct: 0,
                explanation: "O papel fundamental do laboratório de microbiologia clínica é fornecer informações que orientem a seleção racional de antibióticos. Através do TSA, o laboratório identifica quais antimicrobianos são eficazes contra o patógeno isolado, permitindo que o médico escolha o tratamento mais apropriado com base em dados microbiológicos concretos, não apenas em suposições empíricas."
              }
            },
            {
              title: "Q2 - Definição do TSA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 2:</strong> Sobre o Teste de Suscetibilidade Antimicrobiana in vitro</p>`,
              question: {
                text: "Q2. O que o Teste de Suscetibilidade Antimicrobiana (TSA) in vitro especificamente determina?",
                options: [
                  "Quais antibióticos inibem efetivamente o crescimento de um determinado isolado bacteriano, permitindo a terapia direcionada",
                  "A toxicidade máxima tolerada do antimicrobiano no paciente",
                  "Se a resistência do organismo é constitutiva ou induzível"
                ],
                correct: 0,
                explanation: "O TSA in vitro determina especificamente quais antibióticos são capazes de inibir o crescimento do isolado bacteriano em questão. Este teste laboratorial simula as condições de exposição da bactéria ao antimicrobiano, permitindo identificar quais drogas serão eficazes para o tratamento direcionado da infecção. A toxicidade e os mecanismos de resistência são aspectos importantes, mas não são o objetivo primário do TSA."
              }
            },
            {
              title: "Q3 - Importância do TSA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 3:</strong> Relevância do TSA na era da resistência antimicrobiana</p>`,
              question: {
                text: "Q3. Dado o crescente problema da resistência antimicrobiana, qual é a importância do TSA de rotina para as decisões terapêuticas?",
                options: [
                  "A importância aumentou, pois as decisões sobre o tratamento empírico estão se tornando mais complicadas",
                  "A importância diminuiu, pois agora as decisões são baseadas apenas em testes moleculares rápidos",
                  "O TSA se restringe a infecções comunitárias, não sendo relevante em ambientes de saúde"
                ],
                correct: 0,
                explanation: "Com o aumento global da resistência antimicrobiana, a importância do TSA cresceu significativamente. Padrões de suscetibilidade que antes eram previsíveis tornaram-se variáveis, tornando as decisões empíricas mais complexas e arriscadas. O TSA fornece dados essenciais para guiar a terapia, especialmente em infecções graves ou quando há suspeita de resistência. Os testes moleculares são complementares, não substitutos do TSA."
              }
            },
            {
              title: "Q4 - Requisitos dos Métodos de TSA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 4:</strong> Características essenciais dos métodos de TSA</p>`,
              question: {
                text: "Q4. Quais são os três requisitos essenciais que os métodos de TSA usados em laboratórios clínicos devem atender?",
                options: [
                  "Fornecer informação rápida e precisa ao clínico, ser relativamente barato e ser relativamente fácil de realizar",
                  "Depender exclusivamente do crescimento bacteriano, ter alto custo e exigir incubação de 48 horas",
                  "Ser realizado apenas por laboratórios de pesquisa para determinar a Concentração Inibitória Mínima (CIM)"
                ],
                correct: 0,
                explanation: "Os métodos de TSA utilizados na prática clínica devem equilibrar três características fundamentais: rapidez (para permitir ajustes terapêuticos oportunos), precisão (para garantir resultados confiáveis) e viabilidade econômica/operacional (custo acessível e execução relativamente simples). Estes requisitos garantem que o TSA seja uma ferramenta prática e útil no dia a dia dos laboratórios clínicos."
              }
            },
            {
              title: "Q5 - Resistência Intrínseca",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 5:</strong> Conceito de resistência intrínseca</p>`,
              question: {
                text: "Q5. O que define a resistência intrínseca em bactérias?",
                options: [
                  "É a resistência inerente a um antimicrobiano que todos ou quase todos os membros de uma espécie exibem, tornando o TSA desnecessário",
                  "É a resistência adquirida por meio de transferência horizontal de genes via plasmídeos",
                  "É a resistência que surge pela pressão seletiva, através de mutações genéticas"
                ],
                correct: 0,
                explanation: "A resistência intrínseca é uma característica natural e previsível de uma espécie bacteriana. Todos ou quase todos os membros da espécie apresentam essa resistência devido a características estruturais ou metabólicas inerentes. Por exemplo, Klebsiella pneumoniae possui resistência intrínseca à ampicilina. Como essa resistência é previsível, o TSA para essas combinações organismo-antimicrobiano é desnecessário."
              }
            },
            {
              title: "Q6 - Exemplo de Resistência Intrínseca",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 6:</strong> Exemplo clássico de resistência intrínseca</p>`,
              question: {
                text: "Q6. Qual bactéria é citada como exemplo de resistência intrínseca ao antimicrobiano ampicilina?",
                options: [
                  "Klebsiella pneumoniae",
                  "Staphylococcus aureus",
                  "Streptococcus pyogenes"
                ],
                correct: 0,
                explanation: "Klebsiella pneumoniae é um exemplo clássico de resistência intrínseca à ampicilina. Esta bactéria produz naturalmente uma beta-lactamase cromossômica (SHV-1) que confere resistência a aminopenicilinas como a ampicilina. Esta característica é tão previsível que não há necessidade de realizar TSA para ampicilina em isolados de K. pneumoniae."
              }
            },
            {
              title: "Q7 - Resistência Adquirida",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 7:</strong> Mecanismos de resistência adquirida</p>`,
              question: {
                text: "Q7. Como a resistência adquirida difere da resistência intrínseca e qual é o seu mecanismo de desenvolvimento?",
                options: [
                  "É o desenvolvimento de resistência a um antimicrobiano ao qual a população bacteriana wild-type era suscetível, ocorrendo por mutações cromossômicas, transferência horizontal de genes (plasmídeos, integrons, transposons, transformação) ou a combinação destes",
                  "É a expressão de um mecanismo de resistência que é facilmente previsível",
                  "É uma característica natural e previsível de uma espécie bacteriana, independente de exposição prévia"
                ],
                correct: 0,
                explanation: "A resistência adquirida representa uma mudança no perfil de suscetibilidade de uma bactéria que originalmente era sensível a determinado antimicrobiano. Ela pode surgir através de mutações cromossômicas espontâneas ou, mais comumente, pela aquisição de material genético de outras bactérias através de mecanismos como plasmídeos, transposons ou integrons. Esta resistência é imprevisível e requer TSA para detecção."
              }
            },
            {
              title: "Q8 - Expressão Induzível",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 8:</strong> Mecanismo de expressão induzível</p>`,
              question: {
                text: "Q8. Qual é o mecanismo de resistência cuja expressão ocorre apenas após a exposição a um agente incitante específico?",
                options: [
                  "Expressão induzível",
                  "Expressão constitutiva",
                  "Resistência intrínseca"
                ],
                correct: 0,
                explanation: "A expressão induzível é um mecanismo de resistência que permanece 'silencioso' até que a bactéria seja exposta a um antimicrobiano específico que atua como indutor. Apenas após essa exposição, os genes de resistência são ativados e expressos. Este fenômeno pode levar a falhas terapêuticas se não for adequadamente detectado pelo laboratório."
              }
            },
            {
              title: "Q9 - Beta-lactamase AmpC",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 9:</strong> Exemplo de resistência induzível</p>`,
              question: {
                text: "Q9. Qual é o exemplo de resistência induzível que resulta em resistência a cefalosporinas de terceira geração?",
                options: [
                  "Produção induzida de beta-lactamase AmpC cromossomicamente codificada em certas Enterobacterales",
                  "Resistência mediada pelo gene mecA em S. aureus",
                  "Resistência adquirida por mutações cromossômicas"
                ],
                correct: 0,
                explanation: "A produção induzível de beta-lactamase AmpC é um exemplo clássico de resistência induzível. Certas Enterobacterales (como Enterobacter spp., Citrobacter freundii, Serratia marcescens) possuem o gene AmpC cromossômico que, quando induzido pela exposição a certos beta-lactâmicos, resulta em resistência a cefalosporinas de terceira geração. Este fenômeno é clinicamente relevante e pode levar a falhas terapêuticas."
              }
            },
            {
              title: "Q10 - Heterorresistência",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 10:</strong> Conceito de heterorresistência</p>`,
              question: {
                text: "Q10. O que a heterorresistência representa em termos de expressão fenotípica?",
                options: [
                  "Expressão homogênea e contínua do mecanismo de resistência",
                  "Presença de subpopulações bacterianas com diferentes graus de resistência fenotípica dentro de uma mesma cultura",
                  "Resistência que surge apenas após o tratamento com antibióticos de moléculas grandes"
                ],
                correct: 1,
                explanation: "A heterorresistência é um fenômeno complexo onde uma população bacteriana aparentemente homogênea contém subpopulações com diferentes níveis de resistência ao mesmo antimicrobiano. A maioria das células pode parecer suscetível nos testes convencionais, mas uma pequena subpopulação resistente pode persistir e causar falha terapêutica. Este fenômeno é particularmente relevante em VISA (Staphylococcus aureus com resistência intermediária à vancomicina)."
              }
            },
            {
              title: "Q11 - hVISA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 11:</strong> Staphylococcus aureus heterorresistente</p>`,
              question: {
                text: "Q11. O que o Staphylococcus aureus heterorresistente vancomicina-intermediário (hVISA) representa?",
                options: [
                  "Um organismo com capacidade de expressão heterogênea, podendo levar a falhas terapêuticas inesperadas",
                  "Um isolado que possui resistência intrínseca à vancomicina",
                  "Um organismo cuja resistência é sempre facilmente detectável por métodos convencionais"
                ],
                correct: 0,
                explanation: "O hVISA (heterogeneous VISA) representa um desafio clínico e laboratorial significativo. Estes isolados contêm subpopulações com resistência intermediária à vancomicina que podem não ser detectadas pelos métodos convencionais de TSA, mas podem expandir durante a terapia com vancomicina, levando a falhas terapêuticas inesperadas. A detecção de hVISA requer métodos especializados."
              }
            },
            {
              title: "Q12 - Definição de CIM",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 12:</strong> Concentração Inibitória Mínima</p>`,
              question: {
                text: "Q12. Qual é a definição precisa da Concentração Inibitória Mínima (CIM)?",
                options: [
                  "A maior concentração de antimicrobiano que permite o crescimento bacteriano visível",
                  "A menor concentração de antimicrobiano capaz de inibir 99% do crescimento bacteriano visível",
                  "O ponto de corte (breakpoint) que separa o microrganismo em sensível ou resistente"
                ],
                correct: 1,
                explanation: "A CIM é definida como a menor concentração de um antimicrobiano capaz de inibir o crescimento bacteriano visível (geralmente 99% de inibição) após um período de incubação padronizado. Este valor quantitativo é fundamental para avaliar a atividade in vitro de antimicrobianos e é usado em conjunto com breakpoints clínicos para determinar se um isolado é suscetível, intermediário ou resistente."
              }
            },
            {
              title: "Q13 - Interpretação da CIM",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 13:</strong> Relação entre <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> e sensibilidade</p>`,
              question: {
                text: "Q13. O que o valor numérico da CIM indica em relação à sensibilidade de um microrganismo?",
                options: [
                  "Quanto maior o valor da CIM, maior a sensibilidade do microrganismo",
                  "Quanto menor o valor da CIM, maior a sensibilidade do microrganismo",
                  "O valor da CIM deve ser comparado entre diferentes antimicrobianos para determinar qual é o melhor"
                ],
                correct: 1,
                explanation: "A relação entre CIM e sensibilidade é inversamente proporcional: quanto menor a CIM, mais sensível é o microrganismo ao antimicrobiano. Uma CIM baixa significa que uma pequena concentração do antibiótico é suficiente para inibir o crescimento bacteriano, indicando alta sensibilidade. Valores de CIM não devem ser comparados entre diferentes antimicrobianos, pois cada droga tem suas próprias características farmacocinéticas e farmacodinâmicas."
              }
            },
            {
              title: "Q14 - Indicações do TSA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 14:</strong> Quando realizar o TSA</p>`,
              question: {
                text: "Q14. Em geral, o TSA deve ser realizado quando isolados clinicamente significativos são obtidos de amostras de pacientes e...",
                options: [
                  "O organismo é considerado parte da flora normal do local da coleta",
                  "A informação resultante pode ser usada para guiar o tratamento",
                  "A suscetibilidade do organismo é sempre previsível (ex: S. pyogenes para penicilina)"
                ],
                correct: 1,
                explanation: "O TSA deve ser realizado quando o resultado pode efetivamente guiar decisões terapêuticas. Isso significa que o organismo isolado deve ser clinicamente significativo (não apenas colonizador ou contaminante) e que existe incerteza sobre seu perfil de suscetibilidade. O TSA não é necessário para organismos da flora normal ou quando a suscetibilidade é altamente previsível."
              }
            },
            {
              title: "Q15 - S. pyogenes e Penicilina",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 15:</strong> Suscetibilidade previsível</p>`,
              question: {
                text: "Q15. Por que o teste de Streptococcus pyogenes para suscetibilidade à penicilina não é realizado rotineiramente?",
                options: [
                  "Porque os isolados não suscetíveis à penicilina nunca foram relatados",
                  "Porque o S. pyogenes é intrinsecamente resistente à penicilina",
                  "Porque o teste da borda da zona de penicilina não é padronizado para esta espécie"
                ],
                correct: 0,
                explanation: "Streptococcus pyogenes (estreptococo do grupo A) mantém sensibilidade universal à penicilina - nenhum isolado resistente foi documentado até o momento. Esta suscetibilidade previsível torna o TSA desnecessário, permitindo que a penicilina seja usada empiricamente com confiança para infecções por S. pyogenes. Este é um exemplo raro de suscetibilidade completamente previsível na era da resistência antimicrobiana."
              }
            }
          ]
        },
        {
          id: 19,
          title: "Revisão II - Métodos",
          duration: "30 min",
          xp: 150,
          sections: [
            {
              title: "Introdução - Revisão de Métodos",
              content: `
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                  <h2 style="color: white; margin: 0 0 15px 0; font-size: 26px;">📝 Revisão II - Métodos</h2>
                  <p style="color: rgba(255,255,255,0.95); margin: 0 0 15px 0; font-size: 16px; line-height: 1.8;">
                    Esta lição de revisão contém <strong>15 questões</strong> focadas nos <strong>métodos de Teste de Suscetibilidade Antimicrobiana (TSA)</strong>, desde métodos qualitativos até quantitativos.
                  </p>
                  <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <h4 style="color: white; margin: 0 0 10px 0; font-size: 16px;">📚 Tópicos Abordados:</h4>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                      <li>Indicações do TSA e padronização (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr>/EUCAST)</li>
                      <li>Método de difusão em disco (Kirby-Bauer)</li>
                      <li>Métodos quantitativos (<abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr>, diluição em ágar, macrodiluição)</li>
                      <li>Correlação entre zona de inibição e <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></li>
                      <li>Vantagens e limitações de cada método</li>
                    </ul>
                  </div>
                  <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 14px; font-style: italic;">
                    💡 Dica: Preste atenção nas diferenças entre métodos qualitativos e quantitativos!
                  </p>
                </div>
              `,
              question: {
                text: "Q16. Em relação à flora normal, qual é a situação em que o TSA não é rotineiramente realizado?",
                options: [
                  "Quando Klebsiella pneumoniae é isolada de uma hemocultura",
                  "Quando Lactobacillus spp é isolado em cultura vaginal, por ser considerado parte da flora normal",
                  "Quando o organismo é isolado de um local estéril, como o líquido cefalorraquidiano"
                ],
                correct: 1,
                explanation: "O TSA não é realizado rotineiramente para organismos que fazem parte da flora normal do local de coleta, como Lactobacillus spp em cultura vaginal. Estes organismos geralmente não são patogênicos e sua presença é esperada. Por outro lado, quando K. pneumoniae é isolada de hemocultura (local estéril), o TSA é essencial, pois indica infecção sistêmica grave que requer tratamento antimicrobiano guiado."
              }
            },
            {
              title: "Q17 - Pacientes Imunossuprimidos",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 17:</strong> Importância da informação clínica sobre imunossupressão</p>`,
              question: {
                text: "Q17. Qual é a importância da notificação pelo médico sobre um paciente estar imunossuprimido, em relação ao TSA?",
                options: [
                  "Permite ao laboratório modificar a abordagem de seleção de isolados, pois bactérias consideradas não patogênicas em hospedeiros imunocompetentes podem causar infecções sérias",
                  "Indica que o teste de suscetibilidade deve ser suprimido, focando apenas na identificação",
                  "Permite que o laboratório use apenas métodos moleculares, devido à urgência"
                ],
                correct: 0,
                explanation: "A informação sobre imunossupressão é crucial porque modifica a interpretação da relevância clínica dos isolados. Organismos considerados contaminantes ou colonizadores em pacientes imunocompetentes (como Corynebacterium spp, Bacillus spp não-anthracis, ou estafilococos coagulase-negativos) podem causar infecções graves em imunossuprimidos. Esta informação permite ao laboratório realizar TSA em isolados que normalmente seriam descartados, garantindo tratamento adequado."
              }
            },
            {
              title: "Q18 - Padronização do TSA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 18:</strong> Papel das organizações profissionais</p>`,
              question: {
                text: "Q18. O que as organizações profissionais como o CLSI e o EUCAST fornecem para garantir a precisão e a reprodutibilidade dos métodos de TSA?",
                options: [
                  "Padrões de desempenho para o TSA, incluindo a padronização do inóculo e dos procedimentos",
                  "Apenas um registro de cepas de referência para pesquisa",
                  "O fornecimento dos kits comerciais para todos os métodos de teste"
                ],
                correct: 0,
                explanation: "O CLSI (Clinical and Laboratory Standards Institute) e o EUCAST (European Committee on Antimicrobial Susceptibility Testing) são organizações que desenvolvem e publicam padrões de desempenho detalhados para o TSA. Estes padrões incluem especificações sobre preparo do inóculo (0,5 McFarland), meios de cultura, condições de incubação, interpretação de resultados e breakpoints. Esta padronização é essencial para garantir que resultados sejam reprodutíveis entre diferentes laboratórios e comparáveis ao longo do tempo."
              }
            },
            {
              title: "Q19 - Método de Difusão em Disco",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 19:</strong> Método qualitativo mais comum</p>`,
              question: {
                text: "Q19. Qual é o método qualitativo convencional mais comumente usado, devido à sua simplicidade, confiabilidade e alto grau de padronização?",
                options: [
                  "Macrodiluição em caldo",
                  "Método de difusão em disco (Kirby-Bauer)",
                  "Diluição em ágar"
                ],
                correct: 1,
                explanation: "O método de difusão em disco (Kirby-Bauer) é o método qualitativo mais amplamente utilizado em laboratórios clínicos devido à sua simplicidade operacional, baixo custo, alta confiabilidade e excelente padronização. O método envolve a aplicação de discos impregnados com antimicrobianos sobre ágar inoculado com a bactéria teste, seguido de incubação e medição das zonas de inibição. É ideal para laboratórios de pequeno a médio porte."
              }
            },
            {
              title: "Q20 - Inóculo Padronizado",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 20:</strong> Padronização do inóculo no Kirby-Bauer</p>`,
              question: {
                text: "Q20. No procedimento de Kirby-Bauer, qual é o inóculo padronizado recomendado?",
                options: [
                  "Aproximadamente 1 a 2×10⁸ UFC/mL, semeado em Ágar Mueller-Hinton (ou outro meio apropriado)",
                  "Aproximadamente 5×10⁵ UFC/mL, usando meio de enriquecimento",
                  "Cerca de 10⁴ UFC, inoculado em pontos específicos da placa"
                ],
                correct: 0,
                explanation: "O inóculo padronizado para o método de Kirby-Bauer é de aproximadamente 1 a 2×10⁸ UFC/mL, equivalente ao padrão 0,5 de McFarland. Este inóculo é semeado uniformemente em Ágar Mueller-Hinton (ou meios especiais para organismos fastidiosos). A padronização do inóculo é crítica porque inóculos muito altos ou muito baixos podem levar a zonas de inibição falsamente pequenas ou grandes, respectivamente, resultando em interpretações errôneas."
              }
            },
            {
              title: "Q21 - Zona de Inibição",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 21:</strong> Interpretação da zona de inibição</p>`,
              question: {
                text: "Q21. No método de difusão em disco, o que o diâmetro da zona de inibição indica?",
                options: [
                  "O local onde a concentração do antimicrobiano é alta o suficiente para prevenir a proliferação do organismo",
                  "A Concentração Inibitória Mínima (CIM) precisa do organismo",
                  "O ponto de corte que deve ser usado para S. aureus para vancomicina"
                ],
                correct: 0,
                explanation: "A zona de inibição representa a área ao redor do disco onde a concentração do antimicrobiano difundido no ágar é suficientemente alta para inibir o crescimento bacteriano visível. O diâmetro desta zona é inversamente proporcional à CIM: quanto maior a zona, menor a CIM e mais sensível é o organismo. Embora exista correlação com a CIM, a difusão em disco não fornece um valor preciso de CIM, apenas uma estimativa qualitativa (S/I/R)."
              }
            },
            {
              title: "Q22 - Relação Zona-CIM",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 22:</strong> Correlação entre zona de inibição e <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr></p>`,
              question: {
                text: "Q22. Qual é a principal relação entre o tamanho da zona de inibição e a Concentração Inibitória Mínima (CIM)?",
                options: [
                  "Eles são inversamente proporcionais (halo grande = CIM baixa = mais sensível)",
                  "Eles são diretamente proporcionais (halo grande = CIM alta = menos sensível)",
                  "A relação é sempre perfeitamente linear"
                ],
                correct: 0,
                explanation: "A relação entre zona de inibição e CIM é inversamente proporcional: quanto maior o diâmetro da zona de inibição, menor a CIM, indicando maior sensibilidade do organismo. Esta relação existe porque organismos mais sensíveis são inibidos por concentrações menores do antimicrobiano, permitindo que o antibiótico difunda mais longe antes que sua concentração caia abaixo da CIM. Embora geralmente logarítmica (não perfeitamente linear), esta correlação permite que tabelas de interpretação convertam diâmetros de zona em categorias S/I/R."
              }
            },
            {
              title: "Q23 - Flexibilidade do Método",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 23:</strong> Vantagem da personalização</p>`,
              question: {
                text: "Q23. Qual é a vantagem do método de difusão em disco em relação à flexibilidade na escolha dos antimicrobianos?",
                options: [
                  "A escolha pode ser personalizada de acordo com os formulários institucionais e padrões de resistência locais",
                  "O método só é validado para organismos fastidiosos",
                  "O método só permite testar um antimicrobiano por placa"
                ],
                correct: 0,
                explanation: "Uma grande vantagem do método de difusão em disco é a flexibilidade na seleção de antimicrobianos. Laboratórios podem personalizar os painéis de discos testados de acordo com o formulário hospitalar, padrões de resistência locais, tipo de infecção e perfil do paciente. Por exemplo, pode-se testar carbapenêmicos apenas quando há suspeita de resistência, ou incluir antimicrobianos específicos para infecções urinárias. Esta personalização otimiza recursos e fornece informações mais relevantes clinicamente."
              }
            },
            {
              title: "Q24 - Limitação: Automação",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 24:</strong> Desafio em laboratórios de alto volume</p>`,
              question: {
                text: "Q24. Qual é uma limitação importante da difusão em disco em laboratórios de alto volume?",
                options: [
                  "A falta de automação do procedimento, o que dificulta a produção em larga escala",
                  "O baixo custo por teste",
                  "A capacidade de fornecer uma CIM precisa"
                ],
                correct: 0,
                explanation: "A principal limitação do método de difusão em disco em laboratórios de alto volume é a dificuldade de automação. O método requer múltiplas etapas manuais: preparo do inóculo, semeadura, aplicação dos discos, incubação, medição das zonas com paquímetro e interpretação. Embora existam sistemas automatizados de leitura de zonas, o processo ainda é mais trabalhoso que sistemas totalmente automatizados como VITEK ou Phoenix, que são preferidos em laboratórios de grande porte."
              }
            },
            {
              title: "Q25 - Limitação: Natureza Qualitativa",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 25:</strong> Quando a <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> é necessária</p>`,
              question: {
                text: "Q25. Qual é um exemplo de infecção para a qual a natureza qualitativa da difusão em disco é uma limitação, exigindo uma CIM quantitativa?",
                options: [
                  "Infecções urinárias não complicadas",
                  "Infecções causadas por Lactobacillus spp",
                  "Endocardite causada por estreptococos do grupo viridans, onde os regimes são estratificados pela CIM de penicilina"
                ],
                correct: 2,
                explanation: "A endocardite por estreptococos do grupo viridans é um exemplo clássico onde a CIM quantitativa é essencial. O tratamento é estratificado pela CIM de penicilina: isolados altamente sensíveis (CIM ≤0,125 µg/mL) podem ser tratados com penicilina em monoterapia por 4 semanas, enquanto isolados com CIM mais elevada requerem terapia combinada ou prolongada. A difusão em disco fornece apenas categorias S/I/R, não permitindo esta estratificação precisa necessária para otimizar o tratamento."
              }
            },
            {
              title: "Q26 - Limitação: VISA",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 26:</strong> Combinação organismo-antimicrobiano problemática</p>`,
              question: {
                text: "Q26. Para qual combinação organismo-antimicrobiano o método de difusão em disco é especificamente considerado insensível e não deve ser usado?",
                options: [
                  "Streptococcus pyogenes para Penicilina",
                  "Staphylococcus aureus para Vancomicina-intermediário (VISA)",
                  "Klebsiella pneumoniae para Ampicilina"
                ],
                correct: 1,
                explanation: "O método de difusão em disco é notoriamente insensível para detectar S. aureus com resistência intermediária à vancomicina (VISA). Devido às características de difusão da vancomicina no ágar e ao mecanismo de resistência do VISA (espessamento da parede celular), as zonas de inibição podem parecer normais mesmo em isolados VISA. Por isso, o CLSI recomenda métodos quantitativos (CIM por microdiluição ou E-test) para testar vancomicina em S. aureus, especialmente em infecções graves."
              }
            },
            {
              title: "Q27 - Métodos Quantitativos",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 27:</strong> Padrão-ouro para avaliação de sensibilidade</p>`,
              question: {
                text: "Q27. Qual é a principal informação fornecida pelos métodos quantitativos de TSA, que é considerada o padrão-ouro para avaliação de sensibilidade?",
                options: [
                  "O diâmetro da zona de inibição",
                  "A Concentração Inibitória Mínima (CIM)",
                  "A presença de um mecanismo de resistência específico (e.g., ESBL)"
                ],
                correct: 1,
                explanation: "A Concentração Inibitória Mínima (CIM) é a informação fundamental fornecida pelos métodos quantitativos e é considerada o padrão-ouro para avaliação de sensibilidade antimicrobiana. A CIM fornece um valor numérico preciso (em µg/mL) que indica a menor concentração de antimicrobiano necessária para inibir o crescimento bacteriano. Este valor quantitativo permite estratificação terapêutica precisa, monitoramento de tendências de resistência e é essencial para infecções graves onde a otimização da terapia é crítica."
              }
            },
            {
              title: "Q28 - Diluição em Ágar",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 28:</strong> Limitações do método de referência</p>`,
              question: {
                text: "Q28. Qual é a principal limitação do método de diluição em ágar para uso rotineiro em laboratórios clínicos?",
                options: [
                  "A boa reprodutibilidade",
                  "O alto custo de reagentes e a natureza trabalhosa do método",
                  "A incapacidade de testar múltiplos isolados simultaneamente"
                ],
                correct: 1,
                explanation: "Embora a diluição em ágar seja considerada método de referência devido à sua excelente reprodutibilidade, seu uso rotineiro é limitado pelo alto custo de reagentes e pela natureza extremamente trabalhosa. O método requer preparo de múltiplas placas de ágar contendo diferentes concentrações de antimicrobiano, inoculação precisa de cada isolado em todas as placas, e leitura visual após incubação. Este processo consome muito tempo e recursos, tornando-o impraticável para uso rotineiro, sendo reservado para estudos de vigilância ou como padrão de referência."
              }
            },
            {
              title: "Q29 - Aplicação Específica",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 29:</strong> Uso clínico da diluição em ágar</p>`,
              question: {
                text: "Q29. Qual é um uso específico da diluição em ágar em laboratórios clínicos, além de seu uso como padrão de referência?",
                options: [
                  "Rastreamento de resistência induzível à clindamicina",
                  "Rastreamento de resistência de alto nível à gentamicina em enterococos",
                  "Detecção de ESBL (Beta-lactamase de Espectro Estendido)"
                ],
                correct: 1,
                explanation: "Um uso clínico específico da diluição em ágar é o rastreamento de resistência de alto nível (RAN) aos aminoglicosídeos em enterococos. Este teste utiliza placas de ágar contendo altas concentrações de gentamicina (500 µg/mL) ou estreptomicina (1000-2000 µg/mL). Enterococos com RAN perdem o efeito sinérgico da combinação beta-lactâmico + aminoglicosídeo, essencial no tratamento de endocardite enterocócica. Este teste é simples, padronizado e clinicamente relevante, justificando seu uso rotineiro apesar das limitações gerais do método."
              }
            },
            {
              title: "Q30 - Macrodiluição em Caldo",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 30:</strong> Limitações da macrodiluição</p>`,
              question: {
                text: "Q30. Qual é a principal limitação que impede o uso rotineiro da macrodiluição em caldo nos laboratórios clínicos?",
                options: [
                  "Sua alta automatização",
                  "Sua falta de automação e ser particularmente trabalhoso, sujeito a erros de preparo manual das diluições de antibióticos",
                  "Seu baixo custo e alta velocidade de resultados"
                ],
                correct: 1,
                explanation: "A macrodiluição em caldo, embora seja um método quantitativo preciso para determinação de CIM, é raramente usada rotineiramente devido à falta de automação e natureza extremamente trabalhosa. O método requer preparo manual de diluições seriadas de cada antimicrobiano em tubos de caldo, inoculação de cada tubo com o organismo teste, incubação e leitura visual de turvação. Este processo é demorado, propenso a erros de pipetagem e impraticável para testar múltiplos isolados. Foi amplamente substituído pela microdiluição, que é uma versão miniaturizada e mais facilmente automatizada."
              }
            }
          ]
        },

        {
          id: 20,
          title: "Revisão III - Interpretação",
          duration: "35 min",
          xp: 160,
          sections: [
            {
              title: "Introdução - Revisão de Interpretação",
              content: `
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                  <h2 style="color: white; margin: 0 0 15px 0; font-size: 26px;">📝 Revisão III - Interpretação</h2>
                  <p style="color: rgba(255,255,255,0.95); margin: 0 0 15px 0; font-size: 16px; line-height: 1.8;">
                    Esta lição de revisão contém <strong>16 questões</strong> focadas na <strong>interpretação clínica dos resultados de TSA</strong>, incluindo métodos quantitativos, pontos de corte e categorias S/I/R.
                  </p>
                  <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <h4 style="color: white; margin: 0 0 10px 0; font-size: 16px;">📚 Tópicos Abordados:</h4>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                      <li>Microdiluição em caldo e método de gradiente (E-test)</li>
                      <li>Categorias S/I/R e pontos de corte (<abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> e BrCast)</li>
                      <li>Sistemas automatizados e suas vantagens</li>
                      <li>Detecção de beta-lactamases e resistências específicas</li>
                      <li>Métodos genotípicos e moleculares</li>
                    </ul>
                  </div>
                  <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 14px; font-style: italic;">
                    💡 Dica: Foque na diferença entre as categorias S/I/R e suas implicações clínicas!
                  </p>
                </div>
              `,
              question: {
                text: "Q31. Por que a microdiluição em caldo é um método popular nos laboratórios clínicos, comparado à macrodiluição?",
                options: [
                  "É uma versão miniaturizada e mais automatizada da macrodiluição, e os painéis de antibióticos estão comercialmente disponíveis",
                  "Exige o preparo manual das diluições de antibióticos pelo laboratório",
                  "Permite que um logaritmo a mais de bactérias seja analisado, superando a heterorresistência"
                ],
                correct: 0,
                explanation: "A microdiluição em caldo é amplamente utilizada porque miniaturiza o processo de macrodiluição em placas de 96 poços, permitindo automação e redução de custos. Os painéis comerciais pré-fabricados (como MicroScan, Sensititre) eliminam o trabalho de preparo manual de diluições, tornando o método prático para uso rotineiro. Sistemas automatizados como VITEK 2 e Phoenix utilizam microdiluição, fornecendo resultados de CIM em 8-16 horas com mínima manipulação técnica."
              }
            },
            {
              title: "Q32 - Heterorresistência",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 32:</strong> Limitação da microdiluição</p>`,
              question: {
                text: "Q32. O que é considerado uma desvantagem da microdiluição em caldo, especialmente em relação à heterorresistência?",
                options: [
                  "Sua incapacidade de ser usado para bactérias fastidiosas",
                  "Devido à miniaturização, menos bactérias são analisadas, podendo mascarar mecanismos de resistência presentes em pequenas subpopulações",
                  "O custo relativamente baixo"
                ],
                correct: 1,
                explanation: "A principal desvantagem da microdiluição é que, devido ao pequeno volume de inóculo (tipicamente 5×10⁴ UFC por poço), subpopulações resistentes presentes em frequências baixas (<1:10⁶) podem não ser detectadas. Isso é especialmente problemático para heterorresistência à vancomicina em S. aureus (hVISA), onde subpopulações resistentes podem ser mascaradas. Métodos baseados em ágar, que testam inóculos maiores (10⁸ UFC), têm maior sensibilidade para detectar heterorresistência."
              }
            },
            {
              title: "Q33 - Método de Gradiente",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 33:</strong> Definição do E-test</p>`,
              question: {
                text: "Q33. O que define o método de gradiente antimicrobiano?",
                options: [
                  "É uma técnica baseada em caldo que usa medições fotométricas",
                  "É uma técnica baseada em ágar que utiliza uma tira plástica com uma concentração graduada de um antimicrobiano",
                  "É um método que fornece resultados apenas qualitativos (S/I/R)"
                ],
                correct: 1,
                explanation: "O método de gradiente antimicrobiano (E-test®, MIC Test Strip) utiliza uma tira plástica impregnada com um gradiente exponencial de concentrações de antimicrobiano. A tira é aplicada sobre ágar inoculado com o organismo teste. Após incubação, forma-se uma zona elíptica de inibição, e a CIM é lida diretamente na escala impressa na tira, no ponto onde a elipse intersecta a tira. Este método combina a simplicidade da difusão em disco com a precisão quantitativa da diluição."
              }
            },
            {
              title: "Q34 - Leitura do E-test",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 34:</strong> Determinação da <abbr title="Concentração Inibitória Mínima - Menor concentração de antibiótico que inibe crescimento bacteriano" style="text-decoration: underline dotted; cursor: help; border: none;">CIM</abbr> no método de gradiente</p>`,
              question: {
                text: "Q34. Como a CIM de um antimicrobiano é determinada no método de gradiente antimicrobiano?",
                options: [
                  "Pela medição do diâmetro da zona circular de inibição",
                  "Pela identificação da intersecção da zona elíptica de inibição de crescimento com o gradiente antimicrobiano na tira",
                  "Pela inspeção visual de turvação nos poços"
                ],
                correct: 1,
                explanation: "No método de gradiente, o antimicrobiano difunde do centro da tira (concentração mais alta) para as bordas (concentração mais baixa), criando um gradiente contínuo no ágar. O crescimento bacteriano é inibido onde a concentração excede a CIM, formando uma zona elíptica. A CIM é lida diretamente na escala numérica impressa na tira, no ponto onde a borda da elipse intersecta a tira. Esta leitura visual direta é uma vantagem significativa do método."
              }
            },
            {
              title: "Q35 - Categoria Sensível",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 35:</strong> Definição de Suscetível (S)</p>`,
              question: {
                text: "Q35. De acordo com o CLSI, o que a categoria 'Suscetível' indica em relação à concentração de antibiótico e à eficácia clínica?",
                options: [
                  "Que a concentração inibitória é geralmente alcançada com a dose recomendada, e a eficácia clínica é esperada",
                  "Que a CIM não é alcançada, mesmo com doses máximas",
                  "Que é necessário usar um regime posológico que resulte em maior exposição"
                ],
                correct: 0,
                explanation: "A categoria 'Suscetível' (S) indica que a CIM do isolado está abaixo do breakpoint de sensibilidade, significando que as concentrações séricas e teciduais alcançadas com a dose padrão recomendada são suficientes para inibir o organismo. A eficácia clínica é esperada quando o antimicrobiano é usado na dose, via e intervalo recomendados para o tipo de infecção. Esta categoria representa a situação ideal para tratamento empírico ou direcionado."
              }
            },
            {
              title: "Q36 - Categoria I/SDD",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 36:</strong> Sensível com Aumento de Exposição</p>`,
              question: {
                text: "Q36. O que a categoria 'Sensível com Aumento de Exposição' (BrCast) ou 'Suscetível-Dose Dependente' (CLSI) exige para que se espere eficácia clínica?",
                options: [
                  "O uso de um regime posológico que resulte em exposição mais alta (doses maiores, mais frequentes, ou ambas)",
                  "O uso da dosagem padrão, independentemente do local da infecção",
                  "Que a CIM não seja alcançada, mesmo com doses máximas"
                ],
                correct: 0,
                explanation: "A categoria 'I' (Intermediário/Sensível com Aumento de Exposição) indica que a eficácia clínica pode ser alcançada com regimes posológicos otimizados que aumentem a exposição ao antimicrobiano. Isso pode incluir: doses mais altas, intervalos mais curtos, infusão prolongada ou contínua, ou concentração fisiológica no local da infecção (ex: beta-lactâmicos na urina). Esta categoria reconhece que a farmacocinética e farmacodinâmica podem ser manipuladas para superar CIMs moderadamente elevadas."
              }
            },
            {
              title: "Q37 - Categoria Intermediário",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 37:</strong> Situações especiais para categoria I</p>`,
              question: {
                text: "Q37. Em que situação a eficácia clínica pode ser alcançada para um isolado classificado como 'Intermediário'?",
                options: [
                  "Quando o antimicrobiano é fisiologicamente concentrado no local da infecção (por exemplo, beta-lactâmicos na urina)",
                  "Quando o resultado é discrepante e requer teste genotípico",
                  "A eficácia clínica nunca é esperada para isolados intermediários"
                ],
                correct: 0,
                explanation: "Isolados intermediários podem responder ao tratamento quando o antimicrobiano atinge concentrações excepcionalmente altas no local da infecção. O exemplo clássico são os beta-lactâmicos na urina: mesmo que um organismo seja 'I' para ampicilina no sangue, a concentração urinária pode ser 100-1000 vezes maior que a sérica, superando a CIM e permitindo tratamento eficaz de ITU não complicada. Outro exemplo: fluoroquinolonas concentradas na próstata para prostatite."
              }
            },
            {
              title: "Q38 - Categoria Resistente",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 38:</strong> Definição de Resistente (R)</p>`,
              question: {
                text: "Q38. Qual é a principal característica da categoria 'Resistente'?",
                options: [
                  "A CIM é alcançada com a dose recomendada",
                  "A CIM não é alcançada mesmo com doses máximas, e há alta probabilidade de falha terapêutica",
                  "A CIM é alcançada apenas com o prolongamento do tempo de infusão"
                ],
                correct: 1,
                explanation: "A categoria 'Resistente' (R) indica que a CIM do isolado excede as concentrações alcançáveis mesmo com doses máximas toleradas do antimicrobiano. Há alta probabilidade de falha terapêutica se este antimicrobiano for usado, independentemente da dose, via ou local da infecção. Esta categoria serve como alerta clínico para evitar o uso do antimicrobiano e considerar alternativas terapêuticas. A resistência pode ser mediada por mecanismos enzimáticos, alteração de alvo ou efluxo."
              }
            },
            {
              title: "Q39 - BrCast vs CLSI",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 39:</strong> Implicação prática do BrCast</p>`,
              question: {
                text: "Q39. Qual é uma implicação prática do BrCast (padrão nacional brasileiro) em relação à categoria 'I'?",
                options: [
                  "A substituição de 'Intermediário' por 'Sensível com aumento de exposição'",
                  "O aumento dos pontos de corte da CIM para garantir maior segurança",
                  "A indicação de que o uso do antibiótico deve ser evitado para este patógeno específico"
                ],
                correct: 0,
                explanation: "O BrCast (Brazilian Committee on Antimicrobial Susceptibility Testing), alinhado com o EUCAST, substituiu a terminologia 'Intermediário' por 'Sensível com Aumento de Exposição' (I). Esta mudança enfatiza que isolados nesta categoria NÃO são resistentes, mas requerem otimização posológica. A nova nomenclatura é mais clara clinicamente, evitando a interpretação errônea de 'intermediário' como 'parcialmente resistente' e incentivando estratégias de dose otimizada em vez de troca prematura de antimicrobiano."
              }
            },
            {
              title: "Q40 - Limitações S/I/R",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 40:</strong> Limitações da categorização</p>`,
              question: {
                text: "Q40. Qual é a limitação da categorização S/I/R?",
                options: [
                  "O 'S' (suscetível) garante sucesso em todas as situações",
                  "O 'S' não garante sucesso em todas as situações, sendo influenciado pela gravidade e localização da infecção",
                  "A categorização é baseada apenas em dados epidemiológicos"
                ],
                correct: 1,
                explanation: "A categorização S/I/R é uma simplificação que não garante sucesso clínico absoluto. Fatores do hospedeiro (imunossupressão, comorbidades), da infecção (local, gravidade, biofilme, corpo estranho) e do antimicrobiano (penetração tecidual, ligação proteica, metabolismo) influenciam o desfecho. Um isolado 'S' pode falhar em endocardite, meningite ou osteomielite devido à dificuldade de penetração. Inversamente, um isolado 'I' pode responder em ITU devido à alta concentração urinária. A categorização é um guia, não uma garantia."
              }
            },
            {
              title: "Q41 - Sistemas Automatizados",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 41:</strong> Detecção de crescimento</p>`,
              question: {
                text: "Q41. De que dependem a maioria dos sistemas automatizados para detectar o crescimento bacteriano?",
                options: [
                  "Apenas da inspeção visual de turvação nos tubos",
                  "Da detecção óptica automatizada de crescimento bacteriano (fotométrica, fluorométrica ou turbidimétrica)",
                  "Da medição manual dos diâmetros da zona de inibição"
                ],
                correct: 1,
                explanation: "Sistemas automatizados como VITEK 2, Phoenix e MicroScan utilizam detecção óptica automatizada do crescimento bacteriano. Métodos incluem: turbidimetria (medição de turvação), fluorometria (detecção de fluorescência de substratos metabolizados) ou fotometria (mudança de cor de indicadores de pH). Estas tecnologias permitem monitoramento contínuo e detecção precoce de crescimento, reduzindo o tempo para resultado de 18-24h (métodos convencionais) para 8-16h, com interpretação automática e padronizada."
              }
            },
            {
              title: "Q42 - Vantagem de Velocidade",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 42:</strong> Rapidez dos sistemas automatizados</p>`,
              question: {
                text: "Q42. Qual é a principal vantagem de velocidade dos sistemas automatizados em comparação com os métodos convencionais?",
                options: [
                  "Eles exigem incubação prolongada (24-48 horas)",
                  "Eles podem detectar alterações mais sutis no crescimento, determinando padrões de suscetibilidade mais rapidamente (8-16h)",
                  "Eles só fornecem resultados qualitativos (S/I/R)"
                ],
                correct: 1,
                explanation: "A principal vantagem dos sistemas automatizados é a velocidade: resultados em 8-16 horas versus 18-24 horas dos métodos convencionais. Isso é possível porque a detecção óptica automatizada identifica alterações sutis no crescimento muito antes que sejam visíveis a olho nu. Algoritmos computacionais analisam curvas de crescimento cinético para determinar CIM e interpretar S/I/R. Esta rapidez permite ajuste terapêutico mais precoce, reduzindo uso empírico de antimicrobianos de amplo espectro e melhorando desfechos clínicos."
              }
            },
            {
              title: "Q43 - Custo dos Automatizados",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 43:</strong> Limitação econômica</p>`,
              question: {
                text: "Q43. Qual é a principal limitação dos sistemas automatizados que pode ser proibitiva para alguns laboratórios de microbiologia clínica?",
                options: [
                  "O baixo custo do equipamento e dos insumos",
                  "O alto custo do equipamento e dos insumos",
                  "A impossibilidade de processar múltiplas amostras simultaneamente"
                ],
                correct: 1,
                explanation: "O alto custo de aquisição do equipamento (US$ 100.000-300.000) e dos cartões/painéis descartáveis (US$ 15-40 por teste) é a principal limitação dos sistemas automatizados. Embora ofereçam rapidez, padronização e redução de trabalho técnico, o investimento inicial e os custos operacionais são proibitivos para laboratórios de pequeno volume. A viabilidade econômica geralmente requer volume mínimo de 20-30 testes/dia. Laboratórios menores frequentemente optam por métodos manuais mais baratos, como difusão em disco."
              }
            },
            {
              title: "Q44 - Teste de Beta-lactamase",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 44:</strong> Rapidez da detecção enzimática</p>`,
              question: {
                text: "Q44. Qual é a vantagem de tempo do teste de beta-lactamase usando hidrólise enzimática em comparação com o TSA dependente de crescimento?",
                options: [
                  "Requer incubação noturna de 16 a 20 horas",
                  "A hidrólise pode ser verificada em minutos",
                  "Requer 48 horas para observação da segunda leitura"
                ],
                correct: 1,
                explanation: "O teste cromogênico de beta-lactamase detecta a hidrólise enzimática de um substrato beta-lactâmico cromogênico (como nitrocefina) em minutos. Uma colônia do organismo é suspensa no reagente; se beta-lactamase estiver presente, o anel beta-lactâmico é hidrolisado, causando mudança de cor (amarelo → vermelho). Este teste rápido é especialmente útil para Haemophilus influenzae, Moraxella catarrhalis e Neisseria gonorrhoeae, permitindo decisão terapêutica imediata (usar amoxicilina ou amoxicilina-clavulanato) sem aguardar TSA completo."
              }
            },
            {
              title: "Q45 - Teste D-zone",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 45:</strong> Resistência induzível à clindamicina</p>`,
              question: {
                text: "Q45. Qual é o resultado visual de um teste D-zone positivo, indicando resistência induzível à clindamicina?",
                options: [
                  "Uma zona de inibição perfeitamente redonda ao redor do disco de clindamicina",
                  "O achatamento da zona de inibição de clindamicina adjacente ao disco de eritromicina",
                  "Crescimento visível em todos os poços do painel de microdiluição"
                ],
                correct: 1,
                explanation: "O teste D-zone detecta resistência induzível MLSB (Macrolídeo-Lincosamida-Estreptogramina B) em estafilococos e estreptococos. Discos de eritromicina e clindamicina são colocados a 15-20mm de distância. Se o isolado tem resistência induzível (gene erm), a eritromicina induz a metilase que confere resistência cruzada à clindamicina, causando achatamento (formato de 'D') da zona de clindamicina adjacente ao disco de eritromicina. Teste positivo indica que clindamicina NÃO deve ser usada, apesar de parecer sensível in vitro."
              }
            },
            {
              title: "Q46 - Métodos Moleculares",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 46:</strong> Vantagem de velocidade dos métodos genotípicos</p>`,
              question: {
                text: "Q46. Qual é uma vantagem de velocidade dos ensaios moleculares em comparação com os métodos convencionais de TSA?",
                options: [
                  "Eles exigem incubação de 18-24 horas para crescimento bacteriano",
                  "Eles podem fornecer resultados em 1-2 horas, detectando genes de resistência diretamente",
                  "Eles só podem ser realizados após o isolamento e identificação do organismo"
                ],
                correct: 1,
                explanation: "Métodos moleculares (PCR, sequenciamento, hibridização) detectam genes de resistência diretamente de amostras clínicas ou culturas, fornecendo resultados em 1-2 horas versus 24-48 horas do TSA convencional. Exemplos: detecção de mecA para MRSA, genes bla para carbapenemases (KPC, NDM, OXA-48), vanA/vanB para VRE. Painéis multiplex podem detectar múltiplos genes simultaneamente. A rapidez permite terapia direcionada precoce, isolamento apropriado e controle de infecção. Limitação: detectam apenas genes conhecidos, não fornecem CIM, e não substituem completamente o TSA fenotípico."
              }
            }
          ]
        }
,
        {
          id: 21,
          title: "Revisão IV - Tópicos Avançados",
          duration: "30 min",
          xp: 150,
          sections: [
            {
              title: "Introdução - Revisão de Tópicos Avançados",
              content: `
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; margin: 20px 0; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                  <h2 style="color: white; margin: 0 0 15px 0; font-size: 26px;">📝 Revisão IV - Tópicos Avançados</h2>
                  <p style="color: rgba(255,255,255,0.95); margin: 0 0 15px 0; font-size: 16px; line-height: 1.8;">
                    Esta lição de revisão contém <strong>15 questões</strong> focadas em <strong>tópicos avançados de interpretação clínica</strong>, incluindo estrutura do antibiograma, comparação entre diretrizes e aplicações práticas.
                  </p>
                  <div style="background: rgba(255,255,255,0.15); padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <h4 style="color: white; margin: 0 0 10px 0; font-size: 16px;">📚 Tópicos Abordados:</h4>
                    <ul style="color: rgba(255,255,255,0.9); margin: 0; padding-left: 20px; line-height: 1.8;">
                      <li>Interpretação clínica de resultados (S/I/R)</li>
                      <li>Estrutura e elementos do antibiograma</li>
                      <li>Diferenças entre <abbr title="Clinical and Laboratory Standards Institute - Instituto americano de padronização laboratorial" style="text-decoration: underline dotted; cursor: help; border: none;">CLSI</abbr> e BrCast/EUCAST</li>
                      <li>Reportagem seletiva e cascata</li>
                      <li>Aplicações clínicas práticas</li>
                    </ul>
                  </div>
                  <p style="color: rgba(255,255,255,0.9); margin: 15px 0 0 0; font-size: 14px; font-style: italic;">
                    💡 Dica: Estas questões integram conhecimentos das lições 9-11!
                  </p>
                </div>
              `,
              question: {
                text: "Q47. Qual é o principal objetivo da interpretação clínica dos resultados de TSA?",
                options: [
                  "Traduzir dados laboratoriais (CIM, diâmetro de zona) em categorias clinicamente relevantes (S/I/R) que orientem a terapia antimicrobiana",
                  "Determinar a estrutura química dos antimicrobianos testados",
                  "Calcular o custo-benefício de cada antimicrobiano disponível"
                ],
                correct: 0,
                explanation: "A interpretação clínica é o processo de traduzir dados quantitativos (CIM em µg/mL ou diâmetro de zona em mm) em categorias qualitativas (Sensível, Intermediário/Sensível com Aumento de Exposição, Resistente) usando breakpoints estabelecidos por organizações como CLSI, EUCAST ou BrCast. Esta tradução permite que clínicos tomem decisões terapêuticas informadas sem necessitar conhecimento técnico detalhado de microbiologia. A interpretação considera farmacocinética, farmacodinâmica, local da infecção e dados de desfecho clínico."
              }
            },
            {
              title: "Q48 - Categoria Sensível",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 48:</strong> Implicações da categoria S</p>`,
              question: {
                text: "Q48. O que significa quando um isolado é categorizado como 'Sensível' (S) a um antimicrobiano?",
                options: [
                  "A eficácia clínica é esperada quando o antimicrobiano é usado na dose padrão recomendada para o tipo de infecção",
                  "O antimicrobiano deve ser evitado devido ao alto risco de toxicidade",
                  "É necessário dobrar a dose padrão para alcançar eficácia"
                ],
                correct: 0,
                explanation: "A categoria 'Sensível' (S) indica que a CIM do isolado está abaixo do breakpoint de sensibilidade, significando que as concentrações séricas e teciduais alcançadas com o regime posológico padrão são suficientes para inibir o crescimento bacteriano. A eficácia clínica é esperada quando o antimicrobiano é usado conforme recomendado para o tipo e local da infecção. No entanto, 'S' não garante sucesso absoluto, pois fatores do hospedeiro (imunossupressão, comorbidades) e da infecção (local, gravidade, biofilme) também influenciam o desfecho clínico."
              }
            },
            {
              title: "Q49 - Reportagem Seletiva",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 49:</strong> Conceito de reportagem seletiva</p>`,
              question: {
                text: "Q49. Qual é o principal objetivo da reportagem seletiva (ou em cascata) no antibiograma?",
                options: [
                  "Promover o uso racional de antimicrobianos, reportando inicialmente agentes de espectro mais estreito e reservando agentes de amplo espectro para situações específicas",
                  "Reduzir o custo do teste reportando apenas o antimicrobiano mais barato",
                  "Esconder informações sobre resistência para evitar preocupação do médico"
                ],
                correct: 0,
                explanation: "A reportagem seletiva (selective reporting ou cascade reporting) é uma estratégia de stewardship antimicrobiano onde o laboratório reporta inicialmente apenas antimicrobianos de primeira linha (espectro mais estreito, menor pressão seletiva). Agentes de amplo espectro, reserva ou com maior potencial de induzir resistência são suprimidos do relatório inicial, sendo liberados apenas mediante solicitação ou em situações clínicas específicas (falha terapêutica, alergia, resistência aos agentes de primeira linha). Esta prática reduz o uso desnecessário de antimicrobianos de amplo espectro, preservando sua eficácia futura."
              }
            },
            {
              title: "Q50 - Estrutura do Antibiograma",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 50:</strong> Elementos essenciais do antibiograma</p>`,
              question: {
                text: "Q50. Quais são os elementos essenciais que devem constar em um antibiograma bem estruturado?",
                options: [
                  "Identificação do microrganismo, antimicrobianos testados, resultados (S/I/R ou CIM), método utilizado e observações/comentários interpretativos",
                  "Apenas o nome do paciente e o resultado 'sensível' ou 'resistente'",
                  "Somente a lista de antimicrobianos disponíveis na farmácia do hospital"
                ],
                correct: 0,
                explanation: "Um antibiograma completo deve incluir: (1) Identificação precisa do microrganismo (gênero, espécie, às vezes sorotipo); (2) Lista de antimicrobianos testados, organizados por classe; (3) Resultados para cada antimicrobiano (S/I/R e/ou CIM em µg/mL); (4) Método utilizado (disco-difusão, microdiluição, E-test, sistema automatizado); (5) Padrão de interpretação (CLSI, EUCAST, BrCast); (6) Observações e comentários interpretativos (ex: 'MRSA detectado', 'Resistência induzível à clindamicina', 'ESBL positivo'). Estes elementos permitem interpretação clínica adequada e rastreamento epidemiológico."
              }
            },
            {
              title: "Q51 - Comentários Interpretativos",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 51:</strong> Importância dos comentários</p>`,
              question: {
                text: "Q51. Por que os comentários interpretativos são importantes no antibiograma?",
                options: [
                  "Fornecem contexto clínico adicional, alertam sobre mecanismos de resistência específicos e orientam a seleção terapêutica apropriada",
                  "São obrigatórios apenas para fins de faturamento",
                  "Servem exclusivamente para preencher espaço no relatório"
                ],
                correct: 0,
                explanation: "Comentários interpretativos agregam valor clínico ao antibiograma ao: (1) Alertar sobre mecanismos de resistência importantes (ex: 'ESBL detectado - evitar cefalosporinas', 'Resistência induzível à clindamicina - não usar apesar de S in vitro'); (2) Explicar discrepâncias aparentes (ex: 'Sensível in vitro mas eficácia clínica questionável em meningite'); (3) Sugerir alternativas terapêuticas (ex: 'Considerar combinação para Pseudomonas'); (4) Indicar necessidade de testes adicionais (ex: 'Confirmar vancomicina MIC por E-test para endocardite'). Estes comentários facilitam a comunicação laboratório-clínica e melhoram desfechos."
              }
            },
            {
              title: "Q52 - CLSI vs BrCast",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 52:</strong> Principais diferenças entre diretrizes</p>`,
              question: {
                text: "Q52. Qual é uma das principais diferenças entre CLSI e BrCast/EUCAST na interpretação de resultados?",
                options: [
                  "BrCast/EUCAST utiliza breakpoints farmacocinéticos/farmacodinâmicos (PK/PD) mais conservadores, enquanto CLSI incorpora mais dados de desfecho clínico",
                  "CLSI não utiliza a categoria 'Intermediário', apenas S e R",
                  "BrCast não permite o uso de microdiluição, apenas disco-difusão"
                ],
                correct: 0,
                explanation: "Uma diferença fundamental é a filosofia de estabelecimento de breakpoints: EUCAST (e por extensão BrCast) prioriza dados PK/PD (concentrações alcançáveis vs. distribuição de CIM), resultando em breakpoints geralmente mais conservadores (mais isolados classificados como R). CLSI incorpora mais dados de desfecho clínico e considera variações de dose. Outra diferença: EUCAST substituiu 'Intermediário' por 'Sensível com Aumento de Exposição' (I), enfatizando que estes isolados NÃO são resistentes. BrCast, como adaptação brasileira do EUCAST, mantém esta filosofia mas considera epidemiologia local e antimicrobianos disponíveis no Brasil."
              }
            },
            {
              title: "Q53 - Breakpoints",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 53:</strong> Definição de breakpoints</p>`,
              question: {
                text: "Q53. O que são breakpoints no contexto do TSA?",
                options: [
                  "Valores de CIM ou diâmetro de zona que separam as categorias S/I/R, baseados em dados PK/PD, distribuição de CIM e desfecho clínico",
                  "Pontos de quebra na tira do E-test onde a leitura é impossível",
                  "Momentos durante a incubação quando o crescimento bacteriano para"
                ],
                correct: 0,
                explanation: "Breakpoints (pontos de corte) são valores críticos de CIM (em µg/mL) ou diâmetro de zona de inibição (em mm) que definem os limites entre as categorias interpretativas S/I/R. São estabelecidos por comitês de especialistas (CLSI, EUCAST, BrCast) considerando: (1) Dados PK/PD (concentrações alcançáveis no soro e tecidos com doses padrão); (2) Distribuição de CIM na população bacteriana (wild-type vs. mecanismos de resistência); (3) Dados de desfecho clínico de estudos e ensaios; (4) Considerações de segurança e toxicidade. Breakpoints são específicos para cada combinação organismo-antimicrobiano-local de infecção."
              }
            },
            {
              title: "Q54 - Limitações do Antibiograma",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 54:</strong> Limitações da interpretação in vitro</p>`,
              question: {
                text: "Q54. Qual é uma limitação importante do antibiograma que os clínicos devem reconhecer?",
                options: [
                  "Resultados in vitro não garantem sucesso clínico, pois fatores do hospedeiro, local da infecção e farmacocinética também influenciam o desfecho",
                  "Antibiogramas são sempre 100% precisos e garantem cura se seguidos",
                  "Resultados 'Resistente' nunca devem ser considerados, pois são sempre erros laboratoriais"
                ],
                correct: 0,
                explanation: "O antibiograma tem limitações importantes: (1) Testa condições in vitro padronizadas que não replicam o ambiente in vivo (pH, anaerobiose, biofilme, corpo estranho); (2) Não considera fatores do hospedeiro (imunossupressão, comorbidades, função renal/hepática); (3) Não avalia penetração tecidual (ex: SNC, próstata, osso); (4) Pode não detectar heterorresistência ou resistência induzível; (5) Não prevê interações medicamentosas ou toxicidade. Um isolado 'S' pode falhar clinicamente (ex: endocardite por S. aureus com vancomicina MIC alta mas ainda 'S'), e um 'I' pode responder (ex: ITU com beta-lactâmico devido à alta concentração urinária)."
              }
            },
            {
              title: "Q55 - Antibiograma Cumulativo",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 55:</strong> Utilidade epidemiológica</p>`,
              question: {
                text: "Q55. Qual é a utilidade do antibiograma cumulativo (cumulative antibiogram) para uma instituição?",
                options: [
                  "Fornece dados epidemiológicos locais sobre padrões de resistência, orientando terapia empírica e políticas de stewardship antimicrobiano",
                  "Substitui completamente a necessidade de antibiogramas individuais",
                  "É usado apenas para publicações científicas, sem aplicação clínica"
                ],
                correct: 0,
                explanation: "O antibiograma cumulativo é um relatório anual que compila dados de suscetibilidade de todos os isolados de uma instituição, apresentando a porcentagem de isolados sensíveis a cada antimicrobiano por espécie bacteriana. Utilidades: (1) Orienta seleção de terapia empírica (ex: se 85% dos E. coli são sensíveis a ciprofloxacino, é opção razoável para ITU empírica); (2) Monitora tendências de resistência ao longo do tempo; (3) Compara padrões entre unidades (UTI vs. enfermaria); (4) Orienta políticas de stewardship e formulário hospitalar; (5) Identifica surtos de resistência. Deve incluir ≥30 isolados por espécie e excluir duplicatas do mesmo paciente."
              }
            },
            {
              title: "Q56 - Discrepâncias Maior/Menor",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 56:</strong> Discrepâncias entre métodos</p>`,
              question: {
                text: "Q56. O que caracteriza uma 'discrepância maior' entre dois métodos de TSA?",
                options: [
                  "Um método classifica o isolado como Sensível (S) e o outro como Resistente (R), representando potencial erro clínico significativo",
                  "Uma pequena diferença de 1-2 mm no diâmetro da zona de inibição",
                  "Diferença no tempo de incubação entre os dois métodos"
                ],
                correct: 0,
                explanation: "Discrepâncias entre métodos de TSA são classificadas como: (1) **Discrepância Maior**: Um método indica S e outro R - erro potencialmente grave, pois pode levar a uso de antimicrobiano ineficaz ou evitar um eficaz; (2) **Discrepância Menor**: Um método indica S ou R e outro I - menos crítico, pois I é categoria intermediária; (3) **Discrepância Muito Maior**: Métodos divergem em 2+ categorias (raro). Causas: diferenças metodológicas (inóculo, meio, incubação), mecanismos de resistência específicos (heterorresistência, resistência induzível), ou erro técnico. Discrepâncias maiores requerem investigação e reteste."
              }
            },
            {
              title: "Q57 - Terapia Combinada",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 57:</strong> Indicações para terapia combinada</p>`,
              question: {
                text: "Q57. Em quais situações clínicas a terapia antimicrobiana combinada é frequentemente recomendada, mesmo quando o antibiograma mostra sensibilidade a monoterapia?",
                options: [
                  "Infecções graves por Pseudomonas aeruginosa, endocardite enterocócica e tuberculose, para prevenir emergência de resistência e alcançar sinergismo",
                  "Todas as infecções urinárias não complicadas",
                  "Infecções de pele e partes moles sem complicações"
                ],
                correct: 0,
                explanation: "Terapia combinada é indicada em situações específicas: (1) **Pseudomonas aeruginosa** (especialmente bacteremia, pneumonia): Combinar beta-lactâmico anti-pseudomonas + aminoglicosídeo ou fluoroquinolona para prevenir resistência emergente e potencial sinergismo; (2) **Endocardite enterocócica**: Ampicilina + gentamicina para sinergismo bactericida (enterococos são apenas bacteriostáticos a beta-lactâmicos sozinhos); (3) **Tuberculose**: Sempre múltiplos agentes (rifampicina + isoniazida + pirazinamida + etambutol) para prevenir resistência; (4) **Infecções fúngicas graves**: Anfotericina B + flucitosina para criptococose meníngea. O antibiograma não prevê sinergismo ou antagonismo."
              }
            },
            {
              title: "Q58 - Heterorresistência",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 58:</strong> Desafio da heterorresistência</p>`,
              question: {
                text: "Q58. Por que a heterorresistência representa um desafio para o TSA convencional?",
                options: [
                  "Subpopulações resistentes presentes em baixa frequência (<1:10⁶) podem não ser detectadas pelos métodos padronizados, levando a falha terapêutica inesperada",
                  "Heterorresistência sempre resulta em crescimento visível em todos os antimicrobianos testados",
                  "Não representa desafio algum, pois todos os métodos detectam facilmente"
                ],
                correct: 0,
                explanation: "Heterorresistência ocorre quando uma população bacteriana aparentemente homogênea contém subpopulações com diferentes níveis de resistência. O exemplo clássico é hVISA (hetero-VISA: S. aureus com heterorresistência à vancomicina), onde a maioria das células tem CIM normal (≤2 µg/mL), mas subpopulações raras (1:10⁵ a 1:10⁶) têm CIM elevada (4-8 µg/mL). Métodos convencionais (disco-difusão, microdiluição) testam inóculos pequenos e podem não detectar estas subpopulações, reportando 'S'. Sob pressão seletiva da terapia, subpopulações resistentes expandem, causando falha clínica. Detecção requer métodos especiais (PAP, E-test em ágar BHI, análise de população)."
              }
            },
            {
              title: "Q59 - Efeito Inóculo",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 59:</strong> Impacto do tamanho do inóculo</p>`,
              question: {
                text: "Q59. O que é o 'efeito inóculo' e qual sua relevância clínica?",
                options: [
                  "Aumento da CIM quando o inóculo bacteriano é maior que o padronizado, relevante em infecções com alta carga bacteriana (abscessos, endocardite)",
                  "Diminuição da CIM quando mais bactérias são testadas",
                  "Fenômeno que ocorre apenas com antimicrobianos antifúngicos"
                ],
                correct: 0,
                explanation: "O efeito inóculo ocorre quando a CIM aumenta significativamente com inóculos maiores que o padrão (5×10⁵ UFC/mL). Mecanismos: (1) **Beta-lactamases**: Maior inóculo = mais enzima produzida, superando a capacidade do antimicrobiano; (2) **Enzimas modificadoras de aminoglicosídeos**: Similar; (3) **Saturação de alvos**: Em alta densidade, antimicrobianos que ligam alvos podem ser insuficientes. Relevância clínica: Infecções com alta carga bacteriana (abscessos, endocardite, osteomielite, pneumonia necrosante) podem não responder apesar de 'S' in vitro. TSA padrão usa inóculo baixo, não prevendo efeito inóculo. Solução: Drenagem cirúrgica + antimicrobiano, ou considerar agentes menos afetados (ex: vancomicina para MRSA em vez de beta-lactâmicos)."
              }
            },
            {
              title: "Q60 - ESKAPE",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 60:</strong> Patógenos prioritários</p>`,
              question: {
                text: "Q60. O que representa o acrônimo ESKAPE no contexto de resistência antimicrobiana?",
                options: [
                  "Grupo de patógenos (Enterococcus, Staphylococcus, Klebsiella, Acinetobacter, Pseudomonas, Enterobacter) com alta capacidade de 'escapar' da ação de antimicrobianos",
                  "Método de teste de suscetibilidade desenvolvido na Europa",
                  "Protocolo de isolamento para pacientes com infecções resistentes"
                ],
                correct: 0,
                explanation: "ESKAPE é um acrônimo que identifica seis patógenos prioritários responsáveis pela maioria das infecções hospitalares multirresistentes: **E**nterococcus faecium (VRE), **S**taphylococcus aureus (MRSA), **K**lebsiella pneumoniae (ESBL, KPC), **A**cinetobacter baumannii (MDR), **P**seudomonas aeruginosa (MDR), **E**nterobacter spp. (ESBL, AmpC). Estes organismos 'escapam' da ação de antimicrobianos através de múltiplos mecanismos: beta-lactamases, alteração de porinas, bombas de efluxo, modificação de alvos. Representam desafio global de saúde pública, exigindo vigilância rigorosa, stewardship antimicrobiano, controle de infecção e desenvolvimento de novos agentes. O antibiograma é ferramenta essencial para detectar e monitorar resistência nestes patógenos."
              }
            },
            {
              title: "Q61 - Stewardship",
              content: `<p style="font-size: 16px; line-height: 1.6;"><strong>Questão 61:</strong> Papel do laboratório no stewardship</p>`,
              question: {
                text: "Q61. Como o laboratório de microbiologia contribui para programas de stewardship antimicrobiano?",
                options: [
                  "Fornecendo resultados precisos e oportunos de TSA, antibiogramas cumulativos, alertas sobre resistência emergente e educação sobre interpretação de resultados",
                  "Apenas realizando testes sem comunicação com a equipe clínica",
                  "Escondendo resultados de resistência para evitar preocupação"
                ],
                correct: 0,
                explanation: "O laboratório é pilar fundamental do stewardship antimicrobiano através de: (1) **Resultados rápidos e precisos**: TSA oportuno permite de-escalação precoce de terapia empírica; (2) **Antibiogramas cumulativos**: Orientam terapia empírica institucional; (3) **Reportagem seletiva**: Promove uso de agentes de espectro estreito; (4) **Comentários interpretativos**: Alertam sobre mecanismos de resistência e orientam seleção; (5) **Vigilância e alertas**: Notificação de resistência emergente (ex: primeira KPC, VRE) para controle de infecção; (6) **Educação**: Treinamento de clínicos sobre interpretação de resultados; (7) **Testes rápidos**: Implementação de métodos moleculares para diagnóstico precoce. Esta colaboração laboratório-clínica otimiza uso de antimicrobianos, melhora desfechos e reduz resistência."
              }
            }
          ]
        },



      ]
    },
    antibioticoterapia: {
      title: "Antibioticoterapia Ambulatorial",
      description: "Aprenda os fundamentos da prescrição de antibióticos no ambulatório",
      lessons: [
        {
          id: 1,
          title: "Fundamentos da Antibioticoterapia",
          duration: "15 min",
          xp: 80,
          sections: [

            {
              title: "Princípios Gerais",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #7c3aed; margin-bottom: 15px;">💊 Princípios da Antibioticoterapia</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>antibioticoterapia ambulatorial</strong> envolve a seleção de antibióticos para tratar 
                    infecções em pacientes fora do ambiente hospitalar. A escolha do antibiótico deve considerar 
                    o espectro de ação, a farmacocinética, a farmacodinâmica, o perfil de segurança e o custo.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    O sucesso do tratamento depende da identificação correta do patógeno provável, 
                    da escolha do antibiótico adequado e da adesão do paciente ao tratamento.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Fatores Importantes</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Espectro de ação adequado</li>
                    <li>Penetração no sítio de infecção</li>
                    <li>Perfil de segurança</li>
                    <li>Facilidade de administração</li>
                    <li>Custo-efetividade</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual dos seguintes fatores NÃO é um princípio fundamental na escolha de um antibiótico?",
                options: [
                  "Espectro de ação",
                  "Custo do tratamento",
                  "Preferência do paciente",
                  "Perfil de segurança"
                ],
                correct: 2,
                explanation: "A preferência do paciente não é um princípio fundamental na escolha de um antibiótico, embora a adesão ao tratamento seja importante. A escolha deve ser baseada em critérios clínicos e farmacológicos."
              }
            },
            {
              title: "Uma Dúvida, Uma Certeza e Um Princípio",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🦠 Uma Dúvida, Uma Certeza e Um Princípio</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A bactéria é um componente natural do corpo humano e o equilíbrio da <strong>microbiota</strong> 
                    é essencial para nossa saúde.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    No uso do antibiótico, devemos sempre considerar:
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">❌ Uma certeza</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Vai fazer mal</strong> - todo antibiótico tem potencial para causar efeitos adversos, 
                    alterar a microbiota e induzir resistência bacteriana.
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #d97706; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">❓ Uma dúvida</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Vai fazer bem?</strong> - nem toda infecção necessita de antibioticoterapia, 
                    podendo ser viral ou autolimitada. Eventualmente não é infecção e sim, colonização.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">⚖️ Um princípio</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Só usar quando o benefício for seguramente maior que o malefício</strong> - 
                    avalie sempre o risco-benefício antes de prescrever.
                  </p>
                </div>
              `,
              question: {
                text: "De acordo com o texto, qual deve ser o princípio fundamental ao se indicar um antibiótico?",
                options: [
                  "Prescrever sempre que houver qualquer sinal de infecção, para evitar complicações",
                  "Utilizar antibióticos apenas quando o benefício for claramente maior que o risco, considerando os possíveis efeitos adversos e impacto na microbiota",
                  "Evitar o uso de antibióticos apenas em infecções virais comprovadas, mas prescrever em todos os casos de febre",
                  "Escolher o antibiótico com base apenas na disponibilidade e custo, sem considerar o risco-benefício"
                ],
                correct: 1,
                explanation: "O princípio fundamental é utilizar antibióticos apenas quando o benefício for claramente maior que o risco. Todo antibiótico causa efeitos adversos, altera a microbiota e induz resistência, portanto deve-se avaliar cuidadosamente o risco-benefício antes de prescrever."
              }
            },
            {
              title: "Principais Sítios Acometidos",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🏥 Principais Sítios Acometidos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A maior parte das infecções que surgem no consultório são de alguns <strong>sítios específicos</strong>.
                  </p>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #d97706;">
                    <h4 style="color: #d97706; margin-bottom: 10px; font-size: 16px;">🩹 Cutâneo</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li>Celulite</li>
                      <li>Erisipela</li>
                      <li>Furúnculo/Abscesso</li>
                      <li>Impetigo</li>
                    </ul>
                  </div>
                  
                  <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 10px; font-size: 16px;">🫁 Respiratório Alto</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li>Amigdalite</li>
                      <li>Sinusite</li>
                      <li>Faringite</li>
                      <li>Otite média</li>
                    </ul>
                  </div>
                  
                  <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; border-left: 4px solid #059669;">
                    <h4 style="color: #059669; margin-bottom: 10px; font-size: 16px;">🦠 Trato Gastrointestinal</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li>Diverticulite</li>
                      <li>Diarreia bacteriana</li>
                      <li>Gastroenterite</li>
                    </ul>
                  </div>
                  
                  <div style="background: #ede9fe; padding: 15px; border-radius: 8px; border-left: 4px solid #7c3aed;">
                    <h4 style="color: #7c3aed; margin-bottom: 10px; font-size: 16px;">💧 Trato Urinário</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li>Cistite</li>
                      <li>Ureterite</li>
                      <li>Pielonefrite</li>
                    </ul>
                  </div>
                </div>
                
                <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 15px 0;">
                  <h4 style="color: #2563eb; margin-bottom: 10px; font-size: 16px;">🫁 Respiratório Baixo</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Pneumonias comunitárias</li>
                  </ul>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
                  <p style="font-size: 14px; line-height: 1.5; color: #059669; font-weight: 600;">
                    💡 Se conseguirmos tratar essas infecções, daremos conta da grande maioria da demanda do consultório.
                  </p>
                </div>
              `,
              question: {
                text: "Com base no texto, qual é a implicação prática para o médico generalista ao reconhecer os principais sítios de infecção mais comuns no consultório?",
                options: [
                  "Focar a formação e a conduta clínica no diagnóstico e manejo de infecções cutâneas, respiratórias, gastrointestinais e urinárias, que correspondem à maioria dos atendimentos",
                  "Priorizar o reconhecimento e tratamento de infecções raras e complexas, como meningites e endocardites, pois são as mais prevalentes no consultório",
                  "Evitar diagnosticar infecções comuns, encaminhando todos os casos suspeitos a especialistas",
                  "Basear o tratamento principalmente em antibióticos de amplo espectro, independentemente do sítio de infecção"
                ],
                correct: 0,
                explanation: "A implicação prática é que o médico generalista deve focar sua formação e conduta clínica no diagnóstico e manejo das infecções mais prevalentes no consultório (cutâneas, respiratórias, gastrointestinais e urinárias), pois essas correspondem à grande maioria dos atendimentos ambulatoriais."
              }
            },
            {
              title: "Principais Sítios X Grupos Bacterianos",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🦠 Principais Sítios X Grupos Bacterianos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Esta tabela oferece um <strong>panorama da distribuição dos principais grupos bacterianos</strong> 
                    por sítio anatômico, auxiliando na escolha empírica do antibiótico mais adequado para cada situação clínica.
                  </p>
                </div>
                
                <div style="overflow-x: auto; margin: 15px 0;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px; background: white;">
                    <thead>
                      <tr style="background: #0369a1; color: white;">
                        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: left; font-weight: 600;">Sítio Anatômico</th>
                        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: 600;">Gram-positivos</th>
                        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: 600;">Gram-negativos</th>
                        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: 600;">Atípicos</th>
                        <th style="padding: 12px; border: 1px solid #cbd5e1; text-align: center; font-weight: 600;">Anaeróbios</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="background: #f8fafc;">
                        <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: 600;">🫁 Respiratório Alto</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #059669; font-weight: bold;">+++</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #d97706; font-weight: bold;">++<br/><span style="font-size: 12px; font-weight: normal;">(Moraxella e Haemophilus)</span></td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #9ca3af;">-</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: 600;">🫁 Respiratório Baixo</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #059669; font-weight: bold;">+++</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+<br/><span style="font-size: 12px; font-weight: normal;">(Haemophilus)</span></td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #059669; font-weight: bold;">+++</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+<br/><span style="font-size: 12px; font-weight: normal;">(Abscesso pulmonar)</span></td>
                      </tr>
                      <tr style="background: #f8fafc;">
                        <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: 600;">🦠 <abbr title="Trato Gastrointestinal - Sistema digestivo" style="text-decoration: underline dotted; cursor: help; border: none;">TGI</abbr></td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #059669; font-weight: bold;">+++</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #9ca3af;">-</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #d97706; font-weight: bold;">++</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: 600;">💧 <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr></td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #059669; font-weight: bold;">+++</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #9ca3af;">-</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #9ca3af;">-</td>
                      </tr>
                      <tr style="background: #f8fafc;">
                        <td style="padding: 10px; border: 1px solid #cbd5e1; font-weight: 600;">🩹 Pele</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #059669; font-weight: bold;">+++</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #9ca3af;">-</td>
                        <td style="padding: 10px; border: 1px solid #cbd5e1; text-align: center; color: #6b7280;">+<br/><span style="font-size: 12px; font-weight: normal;">(Abscessos)</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px; font-size: 14px;">📊 Legenda:</h4>
                  <ul style="font-size: 13px; line-height: 1.8; list-style: none; padding: 0;">
                    <li><span style="color: #059669; font-weight: bold;">+++</span> predominante</li>
                    <li><span style="color: #d97706; font-weight: bold;">++</span> frequente</li>
                    <li><span style="color: #6b7280; font-weight: bold;">+</span> ocasional</li>
                    <li><span style="color: #9ca3af; font-weight: bold;">-</span> raro ou ausente</li>
                  </ul>
                </div>
              `,
              question: {
                text: "De acordo com a tabela 'Principais Sítios X Grupos Bacterianos', qual das afirmações está mais correta sobre a predominância dos microrganismos por local de infecção?",
                options: [
                  "As infecções de pele e do trato respiratório alto são predominantemente causadas por bactérias Gram-positivas, enquanto as infecções do trato gastrointestinal e urinário tendem a envolver Gram-negativos",
                  "As infecções respiratórias baixas raramente envolvem bactérias Gram-positivas, sendo quase sempre causadas por anaeróbios",
                  "As infecções urinárias são principalmente associadas a bactérias atípicas e anaeróbias",
                  "As infecções do trato gastrointestinal são majoritariamente provocadas por microrganismos atípicos"
                ],
                correct: 0,
                explanation: "A afirmação correta é que infecções de pele e respiratório alto são predominantemente Gram-positivas (+++), enquanto TGI e ITU são predominantemente Gram-negativos (+++). Esta distribuição é fundamental para a escolha empírica adequada do antibiótico."
              }
            },


          ]
        },
        {
          id: 2,
          title: "Mecanismos de Ação dos Antibióticos",
          duration: "18 min",
          xp: 90,
          sections: [
            {
              title: "Inibição da Síntese da Parede Celular",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧱 Parede Celular Bacteriana</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os antibióticos <strong>beta-lactâmicos</strong>, como penicilinas e cefalosporinas, 
                    atuam inibindo a síntese da parede celular bacteriana. Eles se ligam às proteínas 
                    ligadoras de penicilina (PBPs), impedindo a formação do peptidoglicano.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Isso leva à <strong>lise da bactéria</strong> e à sua morte, caracterizando um 
                    mecanismo bactericida. A parede celular é essencial para a sobrevivência bacteriana, 
                    especialmente em ambientes hipotônicos.
                  </p>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Resistência</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A resistência aos beta-lactâmicos pode ocorrer por produção de beta-lactamases, 
                    alteração das PBPs ou redução da permeabilidade da membrana externa.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é o principal mecanismo de ação dos antibióticos beta-lactâmicos?",
                options: [
                  "Inibição da síntese de proteínas",
                  "Inibição da síntese da parede celular",
                  "Inibição da replicação do DNA",
                  "Alteração da permeabilidade da membrana"
                ],
                correct: 1,
                explanation: "Os beta-lactâmicos atuam especificamente na inibição da síntese da parede celular, uma estrutura essencial para a sobrevivência da bactéria."
              }
            },
            {
              title: "Inibição da Síntese de Proteínas",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🧬 Síntese Proteica</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>Macrolídeos, tetraciclinas e aminoglicosídeos</strong> atuam inibindo a síntese 
                    de proteínas bacterianas, ligando-se a diferentes subunidades do ribossomo. 
                    Isso impede a produção de proteínas essenciais para o crescimento e a replicação bacteriana.
                  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: #6d28d9; color: white;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Antibiótico</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Subunidade</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Efeito</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">Macrolídeos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">50S</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Bacteriostático</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">Aminoglicosídeos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">30S</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Bactericida</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">Tetraciclinas</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">30S</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Bacteriostático</td>
                    </tr>
                  </table>
                </div>
              `,
              question: {
                text: "Qual das seguintes classes de antibióticos atua inibindo a síntese de proteínas?",
                options: [
                  "Penicilinas",
                  "Cefalosporinas",
                  "Macrolídeos",
                  "Quinolonas"
                ],
                correct: 2,
                explanation: "Macrolídeos, como a azitromicina, são conhecidos por seu mecanismo de ação que envolve a inibição da síntese de proteínas bacterianas."
              }
            }
          ]
        },
        {
          id: 3,
          title: "Cefalosporinas",
          duration: "20 min",
          xp: 100,
          sections: [
            {
              title: "Gerações de Cefalosporinas",
              content: `
                <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">🏥 Classificação por Gerações</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As <strong>cefalosporinas</strong> são classificadas em gerações (1ª a 5ª) com base em seu 
                    espectro de atividade. As primeiras gerações são mais ativas contra bactérias Gram-positivas, 
                    enquanto as gerações posteriores têm maior atividade contra Gram-negativas.
                  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: #059669; color: white;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Geração</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Espectro Principal</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Exemplo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">1ª Geração</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Gram-positivos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Cefalexina</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">2ª Geração</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Gram-positivos + alguns Gram-negativos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Cefuroxima</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">3ª Geração</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Amplo espectro</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Ceftriaxona</td>
                    </tr>
                  </table>
                </div>
              `,
              question: {
                text: "O que diferencia as gerações de cefalosporinas?",
                options: [
                  "O mecanismo de ação",
                  "O espectro de atividade",
                  "A via de administração",
                  "O custo do tratamento"
                ],
                correct: 1,
                explanation: "As gerações de cefalosporinas são definidas principalmente por seu espectro de atividade contra bactérias Gram-positivas e Gram-negativas."
              }
            },
            {
              title: "Cefalosporinas de 1ª Geração",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">💊 Primeira Geração</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As cefalosporinas de <strong>1ª geração</strong>, como a cefalexina, são eficazes contra 
                    cocos Gram-positivos (Staphylococcus e Streptococcus) e algumas bactérias Gram-negativas. 
                    São comumente usadas para infecções de pele e tecidos moles.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A <strong>cefalexina</strong> é amplamente utilizada no ambulatório devido à sua 
                    boa biodisponibilidade oral, perfil de segurança favorável e eficácia contra 
                    patógenos comuns de pele.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Indicações Principais</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Infecções de pele e tecidos moles</li>
                    <li>Infecções do trato urinário não complicadas</li>
                    <li>Profilaxia cirúrgica em alguns procedimentos</li>
                    <li>Alternativa em alergia à penicilina (não anafilática)</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Para qual tipo de infecção a cefalexina é comumente usada?",
                options: [
                  "Infecções urinárias complicadas",
                  "Infecções de pele e tecidos moles",
                  "Meningite bacteriana",
                  "Pneumonia hospitalar"
                ],
                correct: 1,
                explanation: "A cefalexina, uma cefalosporina de 1ª geração, é uma escolha comum para infecções de pele e tecidos moles devido à sua eficácia contra cocos Gram-positivos."
              }
            }
          ]
        },
        {
          id: 4,
          title: "Inibidores da Síntese de Ácido Nucleico",
          duration: "16 min",
          xp: 85,
          sections: [
            {
              title: "Quinolonas",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧬 Quinolonas</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As <strong>quinolonas</strong> são uma classe de antibióticos que atuam inibindo a síntese de DNA bacteriano 
                    através da inibição das enzimas <strong>DNA girase</strong> e <strong>topoisomerase IV</strong>. 
                    São classificadas em gerações com espectros de ação distintos.
                  </p>
                  
                  <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #0277bd; margin-bottom: 10px;">📊 Gerações de Quinolonas</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #b3e5fc;">
                          <th style="padding: 8px; border: 1px solid #81d4fa; text-align: left;">Geração</th>
                          <th style="padding: 8px; border: 1px solid #81d4fa; text-align: left;">Exemplos</th>
                          <th style="padding: 8px; border: 1px solid #81d4fa; text-align: left;">Espectro Principal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">2ª Geração</td>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">Ciprofloxacino, Norfloxacino</td>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">Gram-negativos, Pseudomonas</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">3ª Geração</td>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">Levofloxacino</td>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">Gram-positivos + atípicos</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">4ª Geração</td>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">Moxifloxacino</td>
                          <td style="padding: 8px; border: 1px solid #b3e5fc;">Amplo + anaeróbios</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h4 style="color: #059669; margin-bottom: 10px;">💡 Indicações Clínicas</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li><strong>Ciprofloxacino:</strong> ITUs complicadas, infecções por Pseudomonas</li>
                      <li><strong>Levofloxacino:</strong> Pneumonia comunitária, sinusite</li>
                      <li><strong>Moxifloxacino:</strong> Pneumonia com suspeita de anaeróbios</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Qual das seguintes quinolonas é mais ativa contra Pseudomonas aeruginosa?",
                options: [
                  "Norfloxacino",
                  "Ciprofloxacino",
                  "Levofloxacino",
                  "Moxifloxacino"
                ],
                correct: 1,
                explanation: "O ciprofloxacino (2ª geração) é a quinolona com maior atividade antipseudomonas, sendo uma escolha importante para infecções causadas por este patógeno."
              }
            },
            {
              title: "Nitrofuranos",
              content: `
                <div style="background: #fef7ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #a21caf; margin-bottom: 15px;">💊 Nitrofuranos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>nitrofurantoína</strong> é um antibiótico da classe dos nitrofuranos, usado 
                    exclusivamente para o tratamento de <strong>infecções do trato urinário (ITUs) não complicadas</strong>. 
                    Sua ação se concentra na bexiga, com baixa penetração em outros tecidos.
                  </p>
                  
                  <div style="background: #fce7f3; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #be185d; margin-bottom: 10px;">🎯 Espectro de Ação</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                      <div>
                        <h5 style="color: #059669; margin-bottom: 8px;">✅ Ativo contra:</h5>
                        <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                          <li>Escherichia coli</li>
                          <li>Staphylococcus saprophyticus</li>
                          <li>Enterococcus faecalis</li>
                          <li>Klebsiella spp.</li>
                        </ul>
                      </div>
                      <div>
                        <h5 style="color: #dc2626; margin-bottom: 8px;">❌ Não ativo contra:</h5>
                        <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                          <li>Proteus spp.</li>
                          <li>Pseudomonas aeruginosa</li>
                          <li>Serratia spp.</li>
                          <li>Enterobacter spp.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div style="background: #fff7ed; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c;">
                    <h4 style="color: #c2410c; margin-bottom: 10px;">⚠️ Limitações</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      A nitrofurantoína não deve ser usada em pielonefrites ou ITUs complicadas, 
                      pois não atinge concentrações terapêuticas adequadas no parênquima renal.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual dos seguintes patógenos NÃO é coberto pela nitrofurantoína?",
                options: [
                  "Escherichia coli",
                  "Staphylococcus saprophyticus",
                  "Proteus mirabilis",
                  "Enterococcus faecalis"
                ],
                correct: 2,
                explanation: "A nitrofurantoína não tem atividade contra Proteus, Pseudomonas e Serratia, sendo uma escolha inadequada para infecções causadas por esses microrganismos."
              }
            }
          ]
        },
        {
          id: 5,
          title: "Infecções da Pele - Celulite e Erisipela",
          duration: "22 min",
          xp: 110,
          sections: [
            {
              title: "Diferenças entre Celulite e Erisipela",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🔍 Diagnóstico Diferencial</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>erisipela</strong> é uma infecção superficial da pele (derme superior) com bordas bem definidas, 
                    enquanto a <strong>celulite</strong> atinge camadas mais profundas (derme e tecido subcutâneo) e tem bordas mal definidas. 
                    Ambas são causadas principalmente por <strong>Streptococcus pyogenes</strong> e <strong>Staphylococcus aureus</strong>.
                  </p>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #b91c1c; margin-bottom: 10px;">📊 Características Comparativas</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #fecaca;">
                          <th style="padding: 8px; border: 1px solid #f87171; text-align: left;">Característica</th>
                          <th style="padding: 8px; border: 1px solid #f87171; text-align: left;">Erisipela</th>
                          <th style="padding: 8px; border: 1px solid #f87171; text-align: left;">Celulite</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fecaca;"><strong>Localização</strong></td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Derme superior</td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Derme + subcutâneo</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fecaca;"><strong>Bordas</strong></td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Bem definidas, elevadas</td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Mal definidas, difusas</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fecaca;"><strong>Aparência</strong></td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Lesão elevada, vermelha</td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Eritema difuso</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fecaca;"><strong>Patógeno principal</strong></td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">Streptococcus pyogenes</td>
                          <td style="padding: 8px; border: 1px solid #fecaca;">S. pyogenes + S. aureus</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h4 style="color: #059669; margin-bottom: 10px;">💡 Dica Clínica</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      A erisipela frequentemente acomete a face (especialmente região nasal) e membros inferiores, 
                      apresentando-se como uma placa eritematosa, quente, dolorosa e com bordas nítidas.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual das seguintes características é mais comum na erisipela do que na celulite?",
                options: [
                  "Bordas mal definidas",
                  "Envolvimento do tecido subcutâneo",
                  "Lesão elevada com bordas nítidas",
                  "Presença de abscessos"
                ],
                correct: 2,
                explanation: "A erisipela é caracterizada por uma lesão cutânea elevada, vermelha e com bordas bem demarcadas, o que a diferencia da celulite, que tem bordas mais difusas."
              }
            },
            {
              title: "Tratamento Ambulatorial",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #15803d; margin-bottom: 15px;">💊 Tratamento Ambulatorial</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O tratamento ambulatorial de <strong>celulite e erisipela não purulentas</strong> geralmente envolve 
                    o uso de antibióticos com boa cobertura para <strong>Streptococcus</strong> e <strong>Staphylococcus</strong>. 
                    A <strong>cefalexina</strong> é uma excelente opção de primeira linha.
                  </p>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #166534; margin-bottom: 10px;">🎯 Opções Terapêuticas</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #bbf7d0;">
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Antibiótico</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Dose</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Indicação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Cefalexina</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">500mg 6/6h VO</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Primeira linha</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Clindamicina</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">300mg 8/8h VO</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Alergia à penicilina</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Amoxacilina + Clavulanato</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">875mg 12/12h VO</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Celulite purulenta</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #d97706;">
                    <h4 style="color: #b45309; margin-bottom: 10px;">⚠️ Considerações Especiais</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li><strong>Duração:</strong> 7-10 dias para casos não complicados</li>
                      <li><strong>Celulite purulenta:</strong> Considerar cobertura para <abbr title="Methicillin-Resistant Staphylococcus aureus - Estafilococo resistente à meticilina" style="text-decoration: underline dotted; cursor: help; border: none;">MRSA</abbr> (clindamicina)</li>
                      <li><strong>Sinais de alarme:</strong> Febre alta, linfangite, necrose tecidual</li>
                      <li><strong>Medidas adjuvantes:</strong> Elevação do membro, analgesia, hidratação</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Qual dos seguintes antibióticos é a melhor escolha para o tratamento ambulatorial de uma celulite não purulenta?",
                options: [
                  "Ciprofloxacino",
                  "Cefalexina",
                  "Doxiciclina",
                  "Clindamicina"
                ],
                correct: 1,
                explanation: "A cefalexina (cefalosporina de 1ª geração) tem excelente atividade contra Streptococcus pyogenes e Staphylococcus aureus sensíveis à meticilina, sendo a escolha ideal para o tratamento de celulite e erisipela não purulentas."
              }
            }
          ]
        },
        {
          id: 6,
          title: "Infecções de Vias Aéreas",
          duration: "25 min",
          xp: 120,
          sections: [
            {
              title: "Diagnóstico Diferencial Viral vs. Bacteriano",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🦠 Diagnóstico Diferencial</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A maioria das <strong>infecções de vias aéreas superiores (IVAS)</strong> é de etiologia viral. 
                    A diferenciação entre causas virais e bacterianas é crucial para evitar o uso desnecessário 
                    de antibióticos.
                  </p>
                  
                  <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #075985; margin-bottom: 10px;">🎯 Critérios de Centor</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      Os <strong>critérios de Centor</strong> são utilizados para estimar a probabilidade de 
                      faringite por <em>Streptococcus pyogenes</em> (bacteriana):
                    </p>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li>Febre > 38°C</li>
                      <li>Ausência de tosse</li>
                      <li>Exsudato amigdaliano</li>
                      <li>Linfonodomegalia cervical anterior</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Qual dos seguintes critérios de Centor aumenta a probabilidade de faringite bacteriana?",
                options: [
                  "Tosse persistente",
                  "Febre > 38°C",
                  "Coriza hialina",
                  "Congestão nasal"
                ],
                correct: 1,
                explanation: "A febre acima de 38°C é um dos quatro critérios de Centor que aumentam a suspeita de faringite bacteriana. A ausência de tosse também é um critério, enquanto tosse e coriza sugerem etiologia viral."
              }
            },
            {
              title: "Tratamento de IVAS Bacterianas",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #15803d; margin-bottom: 15px;">💊 Tratamento de IVAS</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O tratamento de <strong>faringite bacteriana</strong> confirmada visa erradicar o 
                    <em>S. pyogenes</em> e prevenir complicações como a febre reumática. A 
                    <strong>penicilina</strong> ou <strong>amoxicilina</strong> são as drogas de escolha.
                  </p>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #166534; margin-bottom: 10px;">🎯 Opções Terapêuticas</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #bbf7d0;">
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Antibiótico</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Dose</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Indicação</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Amoxicilina</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">50mg/kg/dia 8/8h</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Primeira linha</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Penicilina Benzatina</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Dose única IM</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Alternativa</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Azitromicina</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">12mg/kg/dia 1x/dia</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Alergia à penicilina</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é o antibiótico de primeira linha para o tratamento de faringite estreptocócica?",
                options: [
                  "Ciprofloxacino",
                  "Amoxicilina",
                  "Doxiciclina",
                  "Clindamicina"
                ],
                correct: 1,
                explanation: "A amoxicilina é o antibiótico de primeira linha para faringite estreptocócica devido à sua eficácia, segurança, baixo custo e espectro de ação adequado."
              }
            }
          ]
        },
        {
          id: 7,
          title: "Pneumonia Ambulatorial",
          duration: "30 min",
          xp: 150,
          sections: [
            {
              title: "Critérios de Gravidade (CURB-65)",
              content: `
                <div style="background: #fffbeb; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">📊 Critérios de Gravidade</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>pneumonia adquirida na comunidade (PAC)</strong> pode ser tratada ambulatorialmente 
                    ou requerer hospitalização. O escore <strong>CURB-65</strong> ajuda a definir a gravidade e 
                    o local de tratamento.
                  </p>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #b45309; margin-bottom: 10px;">🎯 Escore CURB-65</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li><strong>C</strong>onfusão mental</li>
                      <li><strong>U</strong>reia > 50 mg/dL</li>
                      <li><strong>R</strong>espiração ≥ 30 ipm</li>
                      <li><strong>B</strong>aixa pressão arterial (PAS < 90 ou PAD ≤ 60)</li>
                      <li><strong>65</strong> anos ou mais</li>
                    </ul>
                  </div>
                </div>
              `,
              question: {
                text: "Qual dos seguintes parâmetros NÃO faz parte do escore CURB-65?",
                options: [
                  "Confusão mental",
                  "Frequência respiratória ≥ 30 ipm",
                  "Saturação de oxigênio < 90%",
                  "Idade ≥ 65 anos"
                ],
                correct: 2,
                explanation: "O escore CURB-65 inclui Confusão mental, Ureia > 50, Respiração ≥ 30, Baixa pressão arterial e Idade ≥ 65. A saturação de oxigênio não faz parte do escore original."
              }
            },
            {
              title: "Tratamento Ambulatorial da PAC",
              content: `
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0f766e; margin-bottom: 15px;">💊 Tratamento da PAC</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O tratamento ambulatorial da <strong>PAC em pacientes sem comorbidades</strong> geralmente 
                    envolve o uso de <strong>amoxicilina</strong> ou <strong>macrolídeos</strong>. Em pacientes com 
                    comorbidades, a combinação de um beta-lactâmico com um macrolídeo é recomendada.
                  </p>
                  
                  <div style="background: #ccfbf1; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #115e59; margin-bottom: 10px;">🎯 Esquemas Terapêuticos</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #99f6e4;">
                          <th style="padding: 8px; border: 1px solid #5eead4; text-align: left;">Paciente</th>
                          <th style="padding: 8px; border: 1px solid #5eead4; text-align: left;">Tratamento</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #99f6e4;"><strong>Sem comorbidades</strong></td>
                          <td style="padding: 8px; border: 1px solid #99f6e4;">Amoxicilina 1g 8/8h VO</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #99f6e4;"><strong>Com comorbidades</strong></td>
                          <td style="padding: 8px; border: 1px solid #99f6e4;">Amoxicilina + Clavulanato 875mg 12/12h VO + Azitromicina 500mg 1x/dia</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é o tratamento de primeira linha para PAC em um paciente de 45 anos sem comorbidades?",
                options: [
                  "Levofloxacino",
                  "Amoxicilina",
                  "Ceftriaxona",
                  "Clindamicina"
                ],
                correct: 1,
                explanation: "Para pacientes com PAC sem comorbidades, a amoxicilina é o tratamento de primeira linha recomendado devido à sua eficácia contra os patógenos mais comuns, como o Streptococcus pneumoniae."
              }
            }
          ]
        },
        {
          id: 8,
          title: "Infecções do Trato Gastrointestinal",
          duration: "25 min",
          xp: 125,
          sections: [
            {
              title: "Diarreia Aguda - Classificação",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Classificação da Diarreia</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>diarreia aguda</strong> é definida como a eliminação de três ou mais evacuações 
                    amolecidas ou líquidas por dia, com duração menor que 14 dias. Pode ser classificada em 
                    <strong>inflamatória</strong> (disenteria) e <strong>não-inflamatória</strong> (aquosa).
                  </p>
                  
                  <div style="background: #fef9c3; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #b45309; margin-bottom: 10px;">📋 Características Diferenciais</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #fde68a;">
                          <th style="padding: 8px; border: 1px solid #fcd34d; text-align: left;">Tipo</th>
                          <th style="padding: 8px; border: 1px solid #fcd34d; text-align: left;">Características</th>
                          <th style="padding: 8px; border: 1px solid #fcd34d; text-align: left;">Patógenos</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fde68a;"><strong>Não-inflamatória</strong></td>
                          <td style="padding: 8px; border: 1px solid #fde68a;">Aquosa, sem sangue, sem febre alta</td>
                          <td style="padding: 8px; border: 1px solid #fde68a;">Vírus, E. coli enterotoxigênica, Vibrio cholerae</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fde68a;"><strong>Inflamatória</strong></td>
                          <td style="padding: 8px; border: 1px solid #fde68a;">Sangue/muco, febre, dor abdominal</td>
                          <td style="padding: 8px; border: 1px solid #fde68a;">Shigella, Salmonella, Campylobacter, E. coli O157:H7</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Importância Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A distinção entre diarreia inflamatória e não-inflamatória é fundamental para guiar 
                    a decisão de tratamento antibiótico, já que a maioria das diarreias aquosas é autolimitada 
                    e não requer antibioticoterapia.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das seguintes características sugere diarreia inflamatória?",
                options: [
                  "Fezes aquosas sem sangue",
                  "Ausência de febre",
                  "Presença de sangue e muco nas fezes",
                  "Duração menor que 24 horas"
                ],
                correct: 2,
                explanation: "A presença de sangue e muco nas fezes é característica da diarreia inflamatória (disenteria), indicando invasão da mucosa intestinal por patógenos como Shigella, Salmonella ou Campylobacter."
              }
            },
            {
              title: "Indicações de Antibioticoterapia",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Quando Tratar com Antibióticos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A maioria dos casos de diarreia aguda é <strong>autolimitada</strong> e não requer 
                    antibioticoterapia. O tratamento antibiótico está indicado em situações específicas, 
                    principalmente na presença de sinais de invasão bacteriana.
                  </p>
                  
                  <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #075985; margin-bottom: 10px;">✅ Indicações de Tratamento</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li><strong>Diarreia com sangue</strong> (disenteria)</li>
                      <li><strong>Febre alta</strong> (>38.5°C) com sinais de toxemia</li>
                      <li><strong>Diarreia do viajante</strong> moderada a grave</li>
                      <li><strong>Pacientes imunocomprometidos</strong></li>
                      <li><strong>Suspeita de cólera</strong> com desidratação grave</li>
                      <li><strong>Idosos com comorbidades</strong></li>
                    </ul>
                  </div>
                  
                  <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                    <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Contraindicações</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      <strong>Evitar antibióticos</strong> em casos de suspeita de infecção por E. coli O157:H7 
                      (síndrome hemolítico-urêmica), pois podem aumentar o risco de complicações.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Em qual das seguintes situações o tratamento antibiótico está CONTRAINDICADO?",
                options: [
                  "Diarreia do viajante com febre alta",
                  "Suspeita de infecção por E. coli O157:H7",
                  "Disenteria em paciente imunocomprometido",
                  "Diarreia sanguinolenta por Shigella"
                ],
                correct: 1,
                explanation: "O uso de antibióticos em infecções por E. coli O157:H7 está contraindicado, pois pode aumentar o risco de síndrome hemolítico-urêmica (SHU) devido à liberação de toxinas Shiga."
              }
            },
            {
              title: "Escolha do Antibiótico",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #166534; margin-bottom: 15px;">🎯 Antibióticos de Escolha</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A escolha do antibiótico depende do <strong>contexto epidemiológico</strong>, 
                    gravidade do quadro e suspeita etiológica. As fluoroquinolonas e a azitromicina 
                    são as opções mais utilizadas no tratamento empírico.
                  </p>
                  
                  <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #15803d; margin-bottom: 10px;">💊 Esquemas Terapêuticos</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #bbf7d0;">
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Situação</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Antibiótico</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Dose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Diarreia do viajante</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Ciprofloxacino</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">500mg 12/12h por 3 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Disenteria (Shigella)</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Ciprofloxacino</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">500mg 12/12h por 3-5 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Áreas com resistência</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Azitromicina</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">1g dose única ou 500mg/dia por 3 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Campylobacter</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Azitromicina</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">500mg/dia por 3 dias</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #d97706; margin-bottom: 10px;">📌 Considerações Especiais</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      A <strong>azitromicina</strong> tem se tornado preferencial em muitas regiões devido ao 
                      aumento da resistência de Campylobacter às fluoroquinolonas. Em crianças, a azitromicina 
                      é preferida devido ao perfil de segurança.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é o antibiótico de primeira escolha para tratamento empírico de diarreia do viajante?",
                options: [
                  "Amoxicilina",
                  "Ciprofloxacino",
                  "Metronidazol",
                  "Cefalexina"
                ],
                correct: 1,
                explanation: "O ciprofloxacino é o antibiótico de primeira escolha para diarreia do viajante devido ao seu amplo espectro contra patógenos entéricos, incluindo E. coli enterotoxigênica, Shigella e Salmonella."
              }
            }
          ]
        },
        {
          id: 9,
          title: "Infecções do Trato Urinário",
          duration: "28 min",
          xp: 140,
          sections: [
            {
              title: "Classificação das ITUs",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Tipos de Infecção Urinária</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    As <strong>infecções do trato urinário (<abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr>)</strong> são classificadas em 
                    <strong>não complicadas</strong> e <strong>complicadas</strong>, o que determina 
                    a abordagem terapêutica. Também podem ser classificadas anatomicamente em 
                    <strong>cistite</strong> (bexiga) e <strong>pielonefrite</strong> (rins).
                  </p>
                  
                  <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #075985; margin-bottom: 10px;">📋 Classificação Clínica</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #bae6fd;">
                          <th style="padding: 8px; border: 1px solid #7dd3fc; text-align: left;">Tipo</th>
                          <th style="padding: 8px; border: 1px solid #7dd3fc; text-align: left;">Características</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bae6fd;"><strong><abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> não complicada</strong></td>
                          <td style="padding: 8px; border: 1px solid #bae6fd;">Mulheres saudáveis, não gestantes, sem anormalidades urológicas</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bae6fd;"><strong><abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> complicada</strong></td>
                          <td style="padding: 8px; border: 1px solid #bae6fd;">Homens, gestantes, anormalidades urológicas, cateter, imunocomprometidos</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bae6fd;"><strong>Cistite</strong></td>
                          <td style="padding: 8px; border: 1px solid #bae6fd;">Disúria, polaciúria, urgência, sem febre ou sinais sistêmicos</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bae6fd;"><strong>Pielonefrite</strong></td>
                          <td style="padding: 8px; border: 1px solid #bae6fd;">Febre, dor lombar, náuseas/vômitos, sinais sistêmicos</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">💡 Importância da Classificação</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A distinção entre <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> complicada e não complicada é crucial, pois determina a duração 
                    do tratamento, a escolha do antibiótico e a necessidade de investigação adicional.
                  </p>
                </div>
              `,
              question: {
                text: "Qual das seguintes situações caracteriza uma ITU complicada?",
                options: [
                  "Cistite em mulher de 25 anos saudável",
                  "ITU em homem de 45 anos",
                  "Cistite recorrente em mulher sem comorbidades",
                  "Bacteriúria assintomática em mulher jovem"
                ],
                correct: 1,
                explanation: "ITU em homens é sempre considerada complicada devido à maior probabilidade de anormalidades urológicas subjacentes, como hiperplasia prostática ou estenose uretral."
              }
            },
            {
              title: "Cistite Não Complicada",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">💊 Tratamento da Cistite</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>cistite não complicada</strong> é uma das infecções mais comuns em mulheres. 
                    O tratamento empírico é baseado nos padrões locais de resistência de <strong>E. coli</strong>, 
                    responsável por 75-95% dos casos.
                  </p>
                  
                  <div style="background: #fce7f3; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #9f1239; margin-bottom: 10px;">🎯 Opções Terapêuticas</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #fbcfe8;">
                          <th style="padding: 8px; border: 1px solid #f9a8d4; text-align: left;">Antibiótico</th>
                          <th style="padding: 8px; border: 1px solid #f9a8d4; text-align: left;">Dose</th>
                          <th style="padding: 8px; border: 1px solid #f9a8d4; text-align: left;">Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;"><strong>Nitrofurantoína</strong></td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">100mg 12/12h</td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">5 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;"><strong>Fosfomicina</strong></td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">3g dose única</td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">Dose única</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;"><strong>SMX-TMP</strong></td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">800/160mg 12/12h</td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">3 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;"><strong>Ciprofloxacino</strong></td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">250mg 12/12h</td>
                          <td style="padding: 8px; border: 1px solid #fbcfe8;">3 dias</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h4 style="color: #059669; margin-bottom: 10px;">✅ Recomendações Atuais</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      <strong>Nitrofurantoína</strong> e <strong>fosfomicina</strong> são preferidas devido às 
                      baixas taxas de resistência e menor impacto na microbiota intestinal. As fluoroquinolonas 
                      devem ser reservadas para casos mais graves devido ao risco de efeitos adversos.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é o antibiótico de primeira escolha para cistite não complicada?",
                options: [
                  "Amoxicilina",
                  "Nitrofurantoína",
                  "Cefalexina",
                  "Azitromicina"
                ],
                correct: 1,
                explanation: "A nitrofurantoína é considerada primeira linha para cistite não complicada devido à sua alta eficácia, baixas taxas de resistência e mínimo impacto na microbiota intestinal."
              }
            },
            {
              title: "Pielonefrite Aguda",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🚨 Tratamento da Pielonefrite</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>pielonefrite aguda</strong> é uma infecção do parênquima renal que requer 
                    tratamento mais agressivo. A decisão entre tratamento ambulatorial ou hospitalar 
                    depende da gravidade do quadro clínico.
                  </p>
                  
                  <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #b91c1c; margin-bottom: 10px;">⚠️ Critérios de Hospitalização</h4>
                    <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                      <li>Incapacidade de manter hidratação oral</li>
                      <li>Sinais de sepse ou instabilidade hemodinâmica</li>
                      <li>Gestantes</li>
                      <li>Imunocomprometidos</li>
                      <li>Suspeita de obstrução urinária</li>
                      <li>Falha do tratamento ambulatorial</li>
                    </ul>
                  </div>
                  
                  <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #166534; margin-bottom: 10px;">💊 Esquemas Terapêuticos</h4>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <thead>
                        <tr style="background: #bbf7d0;">
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Cenário</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Tratamento</th>
                          <th style="padding: 8px; border: 1px solid #86efac; text-align: left;">Duração</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Ambulatorial leve</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Ciprofloxacino 500mg 12/12h VO</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">7 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Ambulatorial moderado</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Ceftriaxona 1g IM/IV + Ciprofloxacino VO</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">10-14 dias</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Hospitalar</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Ceftriaxona 1-2g IV 24/24h ou Ciprofloxacino IV</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">14 dias total</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;"><strong>Sepse/grave</strong></td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">Piperacilina-tazobactam ou Meropenem IV</td>
                          <td style="padding: 8px; border: 1px solid #bbf7d0;">14-21 dias</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <h4 style="color: #d97706; margin-bottom: 10px;">📌 Considerações Importantes</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      A escolha do antibiótico deve considerar os padrões locais de resistência. 
                      Em áreas com alta prevalência de E. coli produtora de ESBL (>10%), considerar 
                      carbapenêmicos ou aminoglicosídeos.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual é a duração recomendada do tratamento para pielonefrite aguda não complicada?",
                options: [
                  "3 dias",
                  "5 dias",
                  "7 dias",
                  "14 dias"
                ],
                correct: 2,
                explanation: "O tratamento da pielonefrite aguda não complicada deve ser mantido por pelo menos 7 dias com fluoroquinolonas, ou 10-14 dias com beta-lactâmicos, para garantir a erradicação da infecção do parênquima renal."
              }
            },
            {
              title: "ITU em Situações Especiais",
              content: `
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #374151; margin-bottom: 15px;">🔍 Populações Especiais</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Algumas populações requerem abordagens específicas no tratamento de <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr>, 
                    incluindo <strong>gestantes</strong>, <strong>homens</strong>, <strong>idosos</strong> 
                    e <strong>pacientes com cateter vesical</strong>.
                  </p>
                  
                  <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1f2937; margin-bottom: 10px;">👶 <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> na Gestação</h4>
                    <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                      Gestantes com <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> devem sempre ser tratadas, mesmo se assintomáticas 
                      (bacteriúria assintomática), devido ao risco de pielonefrite e parto prematuro.
                    </p>
                    <p style="font-size: 14px; line-height: 1.5;">
                      <strong>Opções seguras:</strong> Amoxicilina, Cefalexina, Nitrofurantoína (evitar no 3º trimestre), 
                      Fosfomicina. <strong>Evitar:</strong> Fluoroquinolonas, SMX-TMP (1º trimestre).
                    </p>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">👨 <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> em Homens</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> em homens é sempre considerada complicada. Tratamento deve ser por 
                      <strong>7-14 dias</strong>. Investigar causas subjacentes (hiperplasia prostática, 
                      estenose uretral). Considerar prostatite se sintomas persistentes.
                    </p>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #92400e; margin-bottom: 10px;">👴 <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> em Idosos</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      Bacteriúria assintomática é comum em idosos e <strong>não deve ser tratada</strong> 
                      na ausência de sintomas. Tratar apenas <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> sintomática. Atenção para sintomas 
                      atípicos (confusão mental, quedas).
                    </p>
                  </div>
                  
                  <div style="background: #fce7f3; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #831843; margin-bottom: 10px;">🩺 <abbr title="Infecção do Trato Urinário" style="text-decoration: underline dotted; cursor: help; border: none;">ITU</abbr> Associada a Cateter</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      Tratar apenas se sintomática. <strong>Trocar o cateter</strong> antes de iniciar 
                      antibiótico. Duração: 7 dias se sintomas resolvem rapidamente, 10-14 dias se 
                      resposta lenta.
                    </p>
                  </div>
                </div>
              `,
              question: {
                text: "Qual das seguintes afirmações sobre bacteriúria assintomática está CORRETA?",
                options: [
                  "Deve sempre ser tratada em idosos institucionalizados",
                  "Deve ser tratada em gestantes",
                  "Deve ser tratada em pacientes com cateter vesical de longa permanência",
                  "Deve ser tratada em diabéticos"
                ],
                correct: 1,
                explanation: "Bacteriúria assintomática deve ser tratada apenas em gestantes (risco de pielonefrite e parto prematuro) e antes de procedimentos urológicos invasivos. Em outras populações, incluindo idosos e diabéticos, não há benefício no tratamento."
              }
            }
          ]
        }
      ]
    },
    antimicrobianos: antimicrobianosModule
  }

  // Funções de autenticação
  const handleLogin = () => {
    const username = loginUsernameRef.current?.value
    const password = loginPasswordRef.current?.value
    
    if (username && password) {
      setUser({ username, name: username })
      setCurrentView('dashboard')
    }
  }

  const handleRegister = () => {
    const nome = registerNomeRef.current?.value
    const login = registerLoginRef.current?.value
    const senha = registerSenhaRef.current?.value
    const confirmarSenha = registerConfirmarSenhaRef.current?.value
    
    if (nome && login && senha && senha === confirmarSenha) {
      setUser({ username: login, name: nome })
      setCurrentView('dashboard')
    }
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentView('login')
    setCurrentModule(null)
    setCurrentLesson(null)
    setCurrentSection(0)
    setCurrentQuestion(null)
    setShowQuestionFeedback(false)
    setSelectedAnswer(null)
  }

  // Funções de navegação
  const startLesson = (moduleId, lessonId) => {
    const module = modulesData[moduleId]
    const lesson = module.lessons.find(l => l.id === lessonId)
    
    // Salvar posição de scroll antes de abrir a lição
    setScrollPosition(window.scrollY || window.pageYOffset)
    
    setCurrentModule(moduleId)
    setCurrentLesson(lesson)
    setCurrentSection(0)
    setCurrentQuestion(null)
    setShowQuestionFeedback(false)
    setSelectedAnswer(null)
    setCurrentView('lesson')
  }

  const nextSection = () => {
    if (currentLesson && currentSection < currentLesson.sections.length - 1) {
      setCurrentSection(currentSection + 1)
      setCurrentQuestion(null)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
    }
  }

  const showQuestion = () => {
    if (currentLesson && currentLesson.sections[currentSection]?.question) {
      setCurrentQuestion(currentLesson.sections[currentSection].question)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
    }
  }

  const selectAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
  }

  const submitAnswer = () => {
    if (selectedAnswer !== null && currentQuestion) {
      setShowQuestionFeedback(true)
      if (selectedAnswer === currentQuestion.correct) {
        setUserProgress(prev => ({
          ...prev,
          xp: prev.xp + 25
        }))
      }
    }
  }

  const completeLesson = () => {
    if (currentLesson) {
      setUserProgress(prev => ({
        ...prev,
        xp: prev.xp + currentLesson.xp,
        completedLessons: [...prev.completedLessons, currentLesson.id]
      }))
      setCurrentView('dashboard')
      setCurrentModule(null)
      setCurrentLesson(null)
      setCurrentSection(0)
      setCurrentQuestion(null)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
    }
  }

  // Renderização condicional
  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">🧬 Infecteasy</h1>
            <p className="text-gray-600">Plataforma de Aprendizado em Microbiologia</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuário</label>
              <input
                ref={loginUsernameRef}
                type="text"
                placeholder="Digite seu usuário"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                ref={loginPasswordRef}
                type="password"
                placeholder="Digite sua senha"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Entrar
            </button>
            
            <div className="text-center">
              <span className="text-gray-600">Não tem conta? </span>
              <button
                onClick={() => setCurrentView('register')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === 'register') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">📝 Cadastro</h1>
            <p className="text-gray-600">Crie sua conta no Infecteasy</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
              <input
                ref={registerNomeRef}
                type="text"
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
              <input
                ref={registerCpfRef}
                type="text"
                placeholder="000.000.000-00"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
              <input
                ref={registerDataNascimentoRef}
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
              <input
                ref={registerTelefoneRef}
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                ref={registerEmailRef}
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Login</label>
              <input
                ref={registerLoginRef}
                type="text"
                placeholder="Digite seu login"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Atividade</label>
              <input
                ref={registerAtividadeRef}
                type="text"
                placeholder="Ex: Estudante de Medicina"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <input
                ref={registerSenhaRef}
                type="password"
                placeholder="Digite sua senha"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
              <input
                ref={registerConfirmarSenhaRef}
                type="password"
                placeholder="Confirme sua senha"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <button
              onClick={handleRegister}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Cadastrar
            </button>
            
            <div className="text-center">
              <button
                onClick={() => setCurrentView('login')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                ← Voltar ao Login
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-indigo-600">🧬 Infecteasy</h1>
                <span className="ml-4 text-gray-600">Olá, {user?.name}!</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">💎 {userProgress.xp} XP</span>
                  <span className="text-sm text-gray-600">🏆 Nível {userProgress.level}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Sair
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Módulos de Aprendizado</h2>
            <p className="text-gray-600">Escolha um módulo para começar sua jornada de aprendizado</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Módulo de Microbiologia */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fundamentos da Microbiologia</h3>
              <p className="text-gray-600 mb-4">Aprenda os conceitos essenciais da microbiologia clínica</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso</span>
                  <span>0/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {modulesData.microbiologia.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => startLesson('microbiologia', lesson.id)}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                        <p className="text-sm text-gray-600">{lesson.duration} • {lesson.xp} XP</p>
                      </div>
                      <div className="text-blue-600">▶️</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Módulo de Antibiograma */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Teste de Suscetibilidade Antimicrobiana</h3>
              <p className="text-gray-600 mb-4">Domine os conceitos e técnicas do antibiograma</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso</span>
                  <span>0/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {modulesData.antibiograma.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => startLesson('antibiograma', lesson.id)}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                        <p className="text-sm text-gray-600">{lesson.duration} • {lesson.xp} XP</p>
                      </div>
                      <div className="text-green-600">▶️</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Módulo de Antibioticoterapia Ambulatorial */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Antibioticoterapia Ambulatorial</h3>
              <p className="text-gray-600 mb-4">Aprenda os fundamentos da prescrição de antibióticos no ambulatório</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso</span>
                  <span>0/3</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {modulesData.antibioticoterapia?.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => startLesson('antibioticoterapia', lesson.id)}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                        <p className="text-sm text-gray-600">{lesson.duration} • {lesson.xp} XP</p>
                      </div>
                      <div className="text-purple-600">▶️</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Módulo de Curso Extensivo de Antimicrobianos */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Curso Extensivo de Antimicrobianos</h3>
              <p className="text-gray-600 mb-4">Curso completo sobre antimicrobianos: antibióticos, antifúngicos, antivirais e antiparasitários</p>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progresso</span>
                  <span>0/32</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
              
              <div className="space-y-3">
                {modulesData.antimicrobianos?.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => startLesson('antimicrobianos', lesson.id)}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{lesson.title}</h4>
                        <p className="text-sm text-gray-600">{lesson.duration} • {lesson.xp} XP</p>
                      </div>
                      <div className="text-green-600">▶️</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (currentView === 'lesson') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => {
                  setCurrentView('dashboard')
                  // Restaurar posição de scroll após renderização
                  setTimeout(() => {
                    window.scrollTo(0, scrollPosition)
                  }, 0)
                }}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                ← Voltar ao Dashboard
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  💎 {currentLesson?.xp} XP
                </span>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {currentLesson && (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentLesson.title}</h1>
                <p className="text-gray-600">
                  Seção {currentSection + 1} de {currentLesson.sections.length}
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLesson.sections[currentSection]?.title}
                </h2>
                
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: currentLesson.sections[currentSection]?.content || ''
                  }}
                />

                {!currentQuestion && (
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={showQuestion}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      📝 Responder Pergunta
                    </button>
                    
                    {currentSection < currentLesson.sections.length - 1 ? (
                      <button
                        onClick={nextSection}
                        className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        Próxima Seção →
                      </button>
                    ) : (
                      <button
                        onClick={completeLesson}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                      >
                        🎉 Concluir Lição
                      </button>
                    )}
                  </div>
                )}

                {currentQuestion && (
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {currentQuestion.text}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      {currentQuestion.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => selectAnswer(index)}
                          className={`w-full text-left p-4 rounded-lg border transition-colors ${
                            selectedAnswer === index
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {String.fromCharCode(97 + index)}) {option}
                        </button>
                      ))}
                    </div>

                    {!showQuestionFeedback && (
                      <button
                        onClick={submitAnswer}
                        disabled={selectedAnswer === null}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                      >
                        Confirmar Resposta
                      </button>
                    )}

                    {showQuestionFeedback && (
                      <div className={`p-4 rounded-lg ${
                        selectedAnswer === currentQuestion.correct
                          ? 'bg-green-100 border border-green-300'
                          : 'bg-red-100 border border-red-300'
                      }`}>
                        <h4 className={`font-bold mb-2 ${
                          selectedAnswer === currentQuestion.correct
                            ? 'text-green-800'
                            : 'text-red-800'
                        }`}>
                          {selectedAnswer === currentQuestion.correct ? '✅ Correto!' : '❌ Incorreto'}
                        </h4>
                        <p className="text-gray-700">{currentQuestion.explanation}</p>
                        
                        <div className="mt-4 flex justify-between">
                          <button
                            onClick={() => {
                              setCurrentQuestion(null)
                              setShowQuestionFeedback(false)
                              setSelectedAnswer(null)
                            }}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            Continuar
                          </button>
                          
                          {currentSection < currentLesson.sections.length - 1 ? (
                            <button
                              onClick={nextSection}
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Próxima Seção →
                            </button>
                          ) : (
                            <button
                              onClick={completeLesson}
                              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                            >
                              🎉 Concluir Lição
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="text-center text-gray-600">
                Seção {currentSection + 1} de {currentLesson.sections.length}
              </div>
            </>
          )}
        </main>
      </div>
    )
  }

  return null
}

export default App
