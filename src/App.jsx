import React, { useState, useRef, useEffect } from 'react'

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

  // Dados educacionais completos
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
                    A <strong>coloração de Gram</strong> é como um RG para as bactérias. É uma das primeiras e mais importantes ferramentas que usamos no laboratório para descobrir com que tipo de bactéria estamos lidando.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Ela divide as bactérias em dois grandes times: as <strong>Gram-positivas</strong>, que se vestem de <span style="color: #7c3aed; font-weight: bold;">roxo</span>, e as <strong>Gram-negativas</strong>, que preferem o <span style="color: #dc2626; font-weight: bold;">rosa</span>. Essa diferença de cor acontece por causa da estrutura da parede celular de cada uma.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Dica Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Saber se uma bactéria é Gram-positiva ou Gram-negativa ajuda o médico a escolher o antibiótico certo. É como saber se o inimigo usa uma armadura de madeira ou de metal para escolher a melhor arma para combatê-lo.
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
                explanation: "A coloração de Gram é um guia rápido e essencial para o tratamento inicial de infecções, permitindo que o médico escolha os antibióticos mais adequados antes mesmo dos resultados da cultura."
              }
            },
            {
              title: "Etapa Crítica: Descoloração",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">⚠️ Passo Crítico</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A etapa de <strong>descoloração</strong> com álcool ou acetona é o momento decisivo da coloração de Gram. É como um teste de resistência: as bactérias Gram-positivas, com sua parede celular mais espessa, seguram o corante roxo, enquanto as Gram-negativas, com uma parede mais fina, o perdem.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🕐 Timing é Fundamental</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Muito rápido:</strong> As Gram-negativas podem não descolorir direito e parecerem roxas.</li>
                    <li><strong>Muito lento:</strong> As Gram-positivas podem perder a cor e parecerem rosas.</li>
                    <li><strong>Tempo ideal:</strong> Apenas alguns segundos, até o corante parar de escorrer.</li>
                  </ul>
                </div>
              `,
              question: {
                text: "No procedimento da coloração de Gram, qual passo é considerado crítico e, se realizado por muito tempo, pode descolorir até mesmo as bactérias gram-positivas?",
                options: [
                  "A aplicação do cristal violeta",
                  "A imersão no mordente (iodo de Gram)",
                  "A descoloração com álcool ou acetona"
                ],
                correct: 2,
                explanation: "A descoloração é a etapa mais delicada. Se for muito longa, pode remover o corante de todas as bactérias, levando a um resultado incorreto."
              }
            }
          ]
        },
        {
          id: 2,
          title: "Qualidade de Amostras Clínicas",
          duration: "10 min",
          xp: 60,
          sections: [
            {
              title: "Avaliação da Qualidade do Escarro",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧪 Critérios de Qualidade</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Uma boa amostra de escarro é como uma boa cena de crime: cheia de pistas (leucócitos) e com pouca contaminação (células epiteliais). Uma amostra de baixa qualidade, cheia de células da boca, pode ser rejeitada pelo laboratório.
                  </p>
                </div>
                
                <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                  <h4 style="color: #374151; margin-bottom: 10px;">📊 Critérios Microscópicos</h4>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 14px;">
                    <div>
                      <strong style="color: #059669;">Amostra Adequada:</strong>
                      <ul style="margin-left: 15px; margin-top: 5px;">
                        <li>&gt;25 leucócitos/campo</li>
                        <li>&lt;10 células epiteliais/campo</li>
                      </ul>
                    </div>
                    <div>
                      <strong style="color: #dc2626;">Amostra Inadequada:</strong>
                      <ul style="margin-left: 15px; margin-top: 5px;">
                        <li>&lt;25 leucócitos/campo</li>
                        <li>&gt;25 células epiteliais/campo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              `,
              question: {
                text: "Como a qualidade de uma amostra de escarro é tipicamente avaliada?",
                options: [
                  "Pela presença de um único tipo de morfologia bacteriana, indicando infecção pura",
                  "Pela alta contagem de leucócitos e baixa contagem de células epiteliais",
                  "Pela ausência total de células humanas na amostra"
                ],
                correct: 1,
                explanation: "A qualidade do escarro é determinada pela proporção de leucócitos (células de defesa) e células epiteliais (contaminação). Uma boa amostra tem muitos leucócitos e poucas células epiteliais."
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
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">⚠️ Limitações Importantes</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Algumas bactérias são como fantasmas para a coloração de Gram. Elas não aparecem porque não têm parede celular (como o <em>Mycoplasma</em>) ou porque sua parede é muito diferente (como a do <em>Mycobacterium</em>, da tuberculose).
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #374151; margin-bottom: 10px;">👻 Exemplos de Bactérias 'Invisíveis' ao Gram</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Mycoplasma spp.</strong> - Sem parede celular.</li>
                    <li><strong>Mycobacterium spp.</strong> - Parede rica em gordura, precisa de uma coloração especial (Ziehl-Neelsen).</li>
                    <li><strong>Chlamydia spp.</strong> - Vivem dentro das nossas células.</li>
                    <li><strong>Legionella spp.</strong> - Tímida, não se cora bem com Gram.</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual dos seguintes organismos não pode ser visualizado pela coloração de Gram por não possuir parede celular?",
                options: [
                  "Streptococcus pneumoniae",
                  "Espécies de Mycoplasma",
                  "Espécies de Candida"
                ],
                correct: 1,
                explanation: "O Mycoplasma é uma bactéria 'pelada', sem parede celular. Por isso, a coloração de Gram não funciona com ela."
              }
            }
          ]
        },
        {
          id: 4,
          title: "Morfologias Bacterianas Características",
          duration: "12 min",
          xp: 70,
          sections: [
            {
              title: "Streptococcus pneumoniae",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔍 Morfologia Clássica</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <em>Streptococcus pneumoniae</em>, uma causa comum de pneumonia, tem uma aparência bem característica: são cocos (esferas) Gram-positivos que andam em pares, como dois olhos. Eles são um pouco alongados, como uma chama de vela.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">🎯 Dica Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Quando o laboratório reporta 'diplococos Gram-positivos lanceolados' em uma amostra de escarro, o médico já pensa em pneumonia por pneumococo e pode iniciar o tratamento adequado.
                  </p>
                </div>
              `,
              question: {
                text: "Um achado de cocos gram-positivos em pares (diplococos), com formato ligeiramente alongado, é considerado patognomônico para qual organismo?",
                options: [
                  "Staphylococcus aureus",
                  "Streptococcus pneumoniae",
                  "Espécies de Enterococcus"
                ],
                correct: 1,
                explanation: "A morfologia de diplococos Gram-positivos lanceolados (em forma de lança) é a marca registrada do S. pneumoniae."
              }
            },
            {
              title: "Bacilos Ramificados",
              content: `
                <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #ca8a04; margin-bottom: 15px;">🌿 Morfologia Ramificada</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Alguns bacilos Gram-positivos parecem galhos de árvore. Essa aparência ramificada geralmente indica dois gêneros: <em>Nocardia</em> (que precisa de oxigênio) ou <em>Actinomyces</em> (que não gosta de oxigênio).
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔬 Diferenciação Clínica</h4>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 14px;">
                    <div>
                      <strong style="color: #0369a1;">Nocardia (Aeróbia):</strong>
                      <ul style="margin-left: 15px; margin-top: 5px;">
                        <li>Gosta de oxigênio</li>
                        <li>Parcialmente ácido-resistente</li>
                        <li>Causa infecções nos pulmões e na pele</li>
                      </ul>
                    </div>
                    <div>
                      <strong style="color: #7c2d12;">Actinomyces (Anaeróbia):</strong>
                      <ul style="margin-left: 15px; margin-top: 5px;">
                        <li>Não gosta de oxigênio</li>
                        <li>Não é ácido-resistente</li>
                        <li>Causa infecções na boca e no pescoço</li>
                      </ul>
                    </div>
                  </div>
                </div>
              `,
              question: {
                text: "A presença de bacilos gram-positivos ramificados em uma amostra clínica sugere principalmente quais gêneros?",
                options: [
                  "Listeria ou Corynebacterium",
                  "Nocardia (aeróbio) ou Actinomyces (anaeróbio)",
                  "Clostridium ou Bacillus"
                ],
                correct: 1,
                explanation: "Bacilos Gram-positivos ramificados são a principal característica da Nocardia e do Actinomyces, e a necessidade de oxigênio ajuda a diferenciá-los."
              }
            }
          ]
        },
        {
          id: 5,
          title: "Meios de Cultura",
          duration: "10 min",
          xp: 60,
          sections: [
            {
              title: "Ágar MacConkey",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">🧪 Meio Seletivo e Diferencial</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>ágar MacConkey</strong> é um meio de cultura 'inteligente'. Ele seleciona (deixa crescer) apenas as bactérias Gram-negativas e diferencia (mostra a diferença) as que fermentam lactose, que ficam <span style="color: #db2777; font-weight: bold;">rosas</span>.
                  </p>
                </div>
              `,
              question: {
                text: "O ágar MacConkey é um meio seletivo e diferencial usado para:",
                options: [
                  "Inibir o crescimento de bactérias gram-positivas e diferenciar as fermentadoras de lactose (colônias rosas)",
                  "Cultivar organismos fastidiosos como Haemophilus influenzae",
                  "Observar os padrões de hemólise em espécies de Streptococcus"
                ],
                correct: 0,
                explanation: "O ágar MacConkey é como um porteiro de festa: só deixa entrar Gram-negativos e ainda entrega um crachá rosa para quem 'bebe' lactose."
              }
            },
            {
              title: "Ágar Chocolate",
              content: `
                <div style="background: #f3e8ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #7e22ce; margin-bottom: 15px;">🍫 Meio Enriquecido</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Apesar do nome, o <strong>ágar chocolate</strong> não é doce. Ele é um meio de cultura super nutritivo, feito com sangue cozido, que libera fatores de crescimento essenciais para bactérias 'exigentes' (fastidiosas), como o <em>Haemophilus influenzae</em>.
                  </p>
                </div>
              `,
              question: {
                text: "Para qual finalidade o ágar chocolate é utilizado?",
                options: [
                  "Para detectar a fermentação de lactose por bacilos gram-negativos",
                  "Para inibir o crescimento de bactérias gram-positivas",
                  "Para o crescimento de organismos fastidiosos como Haemophilus influenzae"
                ],
                correct: 2,
                explanation: "O ágar chocolate é um 'banquete' para bactérias que precisam de nutrientes especiais para crescer, como o Haemophilus e a Neisseria."
              }
            }
          ]
        }
      ]
    },
    antibiograma: {
      title: "Teste de Suscetibilidade a Antimicrobianos",
      description: "Entenda como os antibiogramas guiam a terapia antimicrobiana.",
      lessons: [
        {
          id: 1,
          title: "Princípios do Antibiograma",
          duration: "15 min",
          xp: 80,
          sections: [
            {
              title: "Objetivo do Teste",
              content: `
                <div style="background: #eef2ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4338ca; margin-bottom: 15px;">🎯 Por que testar?</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>antibiograma</strong> é o que nos diz quais antibióticos funcionam contra uma bactéria específica. Ele mede a resistência da bactéria e ajuda o médico a escolher o tratamento mais eficaz.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é o principal objetivo do teste de suscetibilidade a antimicrobianos?",
                options: [
                  "Prever a resistência intrínseca de uma bactéria",
                  "Determinar o grau de resistência adquirida a antibióticos que podem ser usados terapeuticamente",
                  "Identificar a espécie bacteriana isolada de uma amostra clínica"
                ],
                correct: 1,
                explanation: "O antibiograma foca na resistência que a bactéria adquiriu, que pode variar, para guiar a escolha do melhor antibiótico para cada paciente."
              }
            },
            {
              title: "Resistência Intrínseca vs. Adquirida",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🧬 Tipos de Resistência</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>resistência intrínseca</strong> é a que a bactéria já 'nasce' com ela. É uma característica da espécie. Já a <strong>resistência adquirida</strong> é a que a bactéria 'aprende' a ter, por mutações ou trocando genes com outras bactérias.
                  </p>
                </div>
              `,
              question: {
                text: "O que define a resistência intrínseca?",
                options: [
                  "Resistência desenvolvida após a exposição a um agente indutor",
                  "Uma resistência inerente a um antimicrobiano que quase todos os membros de uma espécie bacteriana exibem",
                  "Resistência adquirida através da transferência horizontal de genes"
                ],
                correct: 1,
                explanation: "A resistência intrínseca é uma característica 'de fábrica' da bactéria, enquanto a adquirida é uma 'atualização' que ela pode obter."
              }
            }
          ]
        },
        {
          id: 2,
          title: "Métodos de Teste de Suscetibilidade",
          duration: "20 min",
          xp: 100,
          sections: [
            {
              title: "Difusão em Disco (Kirby-Bauer)",
              content: `
                <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0f766e; margin-bottom: 15px;">🔵 Método Qualitativo</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>Kirby-Bauer</strong> é o método mais clássico. Discos de papel com antibióticos são colocados em uma placa com a bactéria. O tamanho do 'buraco' (halo) sem crescimento ao redor do disco nos diz se a bactéria é sensível, intermediária ou resistente.
                  </p>
                </div>
              `,
              question: {
                text: "O método de difusão em disco (Kirby-Bauer) fornece que tipo de resultado?",
                options: [
                  "Um resultado qualitativo, categorizando o isolado como sensível, sensível dose-dependente, intermediário ou resistente",
                  "Um resultado quantitativo na forma de Concentração Inibitória Mínima (CIM)",
                  "Um resultado genotípico, indicando a presença de genes de resistência"
                ],
                correct: 0,
                explanation: "O Kirby-Bauer nos dá uma resposta de 'sim', 'não' ou 'talvez' (sensível, resistente ou intermediário), mas não a dose exata."
              }
            },
            {
              title: "Concentração Inibitória Mínima (CIM)",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #15803d; margin-bottom: 15px;">🔢 Método Quantitativo</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>CIM</strong> é a 'dose' mínima de antibiótico que impede o crescimento da bactéria. É um resultado numérico, muito mais preciso, que ajuda o médico a ajustar a dose do medicamento para o paciente.
                  </p>
                </div>
              `,
              question: {
                text: "O que é a Concentração Inibitória Mínima (CIM)?",
                options: [
                  "O diâmetro do halo de inibição medido no teste de difusão em disco",
                  "A menor concentração de um agente específico necessária para inibir o crescimento visível de um organismo in vitro",
                  "A concentração de um antibiótico que é bactericida para o organismo"
                ],
                correct: 1,
                explanation: "A CIM é o número mágico que nos diz exatamente o quão forte um antibiótico é contra uma bactéria específica."
              }
            }
          ]
        }
      ]
    }
  }

  const handleLogin = () => {
    // Lógica de login simplificada
    const username = loginUsernameRef.current.value
    if (username) {
      setUser({ name: username })
      setCurrentView('dashboard')
    }
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentView('login')
  }

  const openModule = (moduleKey) => {
    setCurrentModule(moduleKey)
    setCurrentView('module')
  }

  const openLesson = (lessonId) => {
    const module = modulesData[currentModule]
    const lesson = module.lessons.find(l => l.id === lessonId)
    setCurrentLesson(lesson)
    setCurrentSection(0)
    setCurrentQuestion(null)
    setShowQuestionFeedback(false)
    setSelectedAnswer(null)
    setCurrentView('lesson')
  }

  const nextSection = () => {
    if (currentSection < currentLesson.sections.length - 1) {
      setCurrentSection(prev => prev + 1)
      setCurrentQuestion(null)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
    } else {
      // Final da lição
      setUserProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, currentLesson.id],
        xp: prev.xp + currentLesson.xp
      }))
      setCurrentView('module')
    }
  }

  const showQuestion = () => {
    const section = currentLesson.sections[currentSection]
    if (section.question) {
      setCurrentQuestion(section.question)
    }
  }

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowQuestionFeedback(true)
    
    if (answerIndex === currentQuestion.correct) {
      setUserProgress(prev => ({ ...prev, xp: prev.xp + 10 }))
    }
  }

  // Componente de Login
  if (currentView === 'login') {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: '#3b82f6',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '24px'
            }}>🦠</div>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px' }}>
              Infecteasy
            </h1>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Acesse o aplicativo de infectologia e doenças infecciosas
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <input
              ref={loginUsernameRef}
              type="text"
              placeholder="Login"
              defaultValue=""
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div style={{ marginBottom: '30px' }}>
            <input
              ref={loginPasswordRef}
              type="password"
              placeholder="Senha"
              defaultValue=""
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.2s',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '12px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '20px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#2563eb'}
            onMouseOut={(e) => e.target.style.background = '#3b82f6'}
          >
            Entrar
          </button>

          <button
            onClick={() => setCurrentView('register')}
            style={{
              width: '100%',
              padding: '12px',
              background: 'transparent',
              color: '#6b7280',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#3b82f6'
              e.target.style.color = '#3b82f6'
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = '#e5e7eb'
              e.target.style.color = '#6b7280'
            }}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    )
  }

  // Componente de Dashboard
  if (currentView === 'dashboard') {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          padding: '16px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: '#3b82f6',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}>🦠</div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
              Infecteasy
            </h1>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Sair
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Nível</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>{userProgress.level}</div>
            </div>
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>XP Total</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>{userProgress.xp}</div>
            </div>
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Sequência</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>{userProgress.streak} dias</div>
            </div>
            <div style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Lições</div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937' }}>{userProgress.completedLessons.length}</div>
            </div>
          </div>

          {/* Módulos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {Object.entries(modulesData).map(([key, module]) => (
              <div key={key} style={{
                background: 'white',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
                  {module.title}
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '20px', lineHeight: '1.5' }}>
                  {module.description}
                </p>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>
                    Progresso: 0%
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: '#e5e7eb',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '0%',
                      height: '100%',
                      background: '#3b82f6',
                      transition: 'width 0.3s'
                    }}></div>
                  </div>
                </div>
                <button
                  onClick={() => openModule(key)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.background = '#2563eb'}
                  onMouseOut={(e) => e.target.style.background = '#3b82f6'}
                >
                  Continuar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Componente de Módulo
  if (currentView === 'module' && currentModule) {
    const module = modulesData[currentModule]
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          padding: '16px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setCurrentView('dashboard')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              ←
            </button>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
              {module.title}
            </h1>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Sair
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {module.lessons.map((lesson) => (
              <div key={lesson.id} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onClick={() => openLesson(lesson.id)}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
                  {lesson.title}
                </h3>
                <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#6b7280', marginBottom: '16px' }}>
                  <span>⏱️ {lesson.duration}</span>
                  <span>⭐ {lesson.xp} XP</span>
                </div>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  Iniciar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Componente de Lição
  if (currentView === 'lesson' && currentLesson) {
    const section = currentLesson.sections[currentSection]
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8fafc',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          padding: '16px 24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setCurrentView('module')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              ←
            </button>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                {currentLesson.title}
              </h1>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>
                Seção {currentSection + 1} de {currentLesson.sections.length} • {currentLesson.xp} XP
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Sair
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{
          background: 'white',
          padding: '12px 24px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          <div style={{
            width: '100%',
            height: '6px',
            background: '#e5e7eb',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div style={{
              width: `${((currentSection + 1) / currentLesson.sections.length) * 100}%`,
              height: '100%',
              background: '#3b82f6',
              transition: 'width 0.3s'
            }}></div>
          </div>
        </div>

        <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
          {/* Conteúdo da Seção */}
          {!currentQuestion && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              marginBottom: '24px'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
                {section.title}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          )}

          {/* Pergunta */}
          {currentQuestion && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              marginBottom: '24px'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '20px' }}>
                📝 Questão
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
                {currentQuestion.text}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showQuestionFeedback}
                    style={{
                      padding: '16px',
                      textAlign: 'left',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      background: selectedAnswer === index 
                        ? (index === currentQuestion.correct ? '#dcfce7' : '#fef2f2')
                        : 'white',
                      borderColor: selectedAnswer === index 
                        ? (index === currentQuestion.correct ? '#16a34a' : '#dc2626')
                        : '#e5e7eb',
                      cursor: showQuestionFeedback ? 'default' : 'pointer',
                      fontSize: '14px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <strong>{String.fromCharCode(97 + index)}) </strong>{option}
                  </button>
                ))}
              </div>
              
              {showQuestionFeedback && (
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  background: selectedAnswer === currentQuestion.correct ? '#dcfce7' : '#fef2f2',
                  borderRadius: '8px',
                  border: `2px solid ${selectedAnswer === currentQuestion.correct ? '#16a34a' : '#dc2626'}`
                }}>
                  <div style={{ 
                    fontSize: '16px', 
                    fontWeight: 'bold', 
                    color: selectedAnswer === currentQuestion.correct ? '#16a34a' : '#dc2626',
                    marginBottom: '8px'
                  }}>
                    {selectedAnswer === currentQuestion.correct ? '✅ Correto!' : '❌ Incorreto'}
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Botões de Navegação */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button
              onClick={() => setCurrentView('module')}
              style={{
                padding: '12px 24px',
                background: 'transparent',
                color: '#6b7280',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Voltar ao Módulo
            </button>

            <div style={{ display: 'flex', gap: '12px' }}>
              {!currentQuestion && section.question && (
                <button
                  onClick={showQuestion}
                  style={{
                    padding: '12px 24px',
                    background: '#f59e0b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Responder Pergunta
                </button>
              )}
              
              {(currentQuestion && showQuestionFeedback) || (!section.question) ? (
                <button
                  onClick={nextSection}
                  style={{
                    padding: '12px 24px',
                    background: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {currentSection < currentLesson.sections.length - 1 ? 'Próximo' : 'Finalizar Lição'}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Componente de Registro (simplificado)
  if (currentView === 'register') {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: '500px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 8px' }}>
              Criar Conta
            </h1>
            <p style={{ color: '#6b7280', margin: 0 }}>
              Preencha os dados para se cadastrar
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <input
              ref={registerNomeRef}
              type="text"
              placeholder="Nome Completo"
              defaultValue=""
              style={{
                gridColumn: '1 / -1',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <input
              ref={registerCpfRef}
              type="text"
              placeholder="CPF"
              defaultValue=""
              style={{
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <input
              ref={registerDataNascimentoRef}
              type="date"
              placeholder="Data de Nascimento"
              defaultValue=""
              style={{
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <input
              ref={registerTelefoneRef}
              type="tel"
              placeholder="Telefone"
              defaultValue=""
              style={{
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <input
              ref={registerEmailRef}
              type="email"
              placeholder="Email"
              defaultValue=""
              style={{
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <input
              ref={registerLoginRef}
              type="text"
              placeholder="Login"
              defaultValue=""
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box',
                marginBottom: '16px'
              }}
            />
            <select
              ref={registerAtividadeRef}
              defaultValue=""
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            >
              <option value="">Selecione sua atividade profissional</option>
              <option value="medico">Médico</option>
              <option value="enfermeiro">Enfermeiro</option>
              <option value="farmaceutico">Farmacêutico</option>
              <option value="biomedico">Biomédico</option>
              <option value="estudante">Estudante</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '30px' }}>
            <input
              ref={registerSenhaRef}
              type="password"
              placeholder="Senha"
              defaultValue=""
              style={{
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            <input
              ref={registerConfirmarSenhaRef}
              type="password"
              placeholder="Confirmar Senha"
              defaultValue=""
              style={{
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            onClick={() => {
              // Simular cadastro
              setCurrentView('login')
            }}
            style={{
              width: '100%',
              padding: '12px',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '20px'
            }}
          >
            Criar Conta
          </button>

          <button
            onClick={() => setCurrentView('login')}
            style={{
              width: '100%',
              padding: '12px',
              background: 'transparent',
              color: '#6b7280',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Faça login
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default App

