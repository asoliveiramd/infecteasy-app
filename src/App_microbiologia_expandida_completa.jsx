import React, { useState, useRef } from 'react'
import './App.css'

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

  // Dados educacionais completos - MICROBIOLOGIA EXPANDIDA + ANTIBIOGRAMA TÉCNICO COMPLETO
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
                    A <strong>coloração de Gram</strong> é uma das técnicas mais importantes na microbiologia clínica. 
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
                explanation: "A descoloração com álcool ou acetona é a etapa mais crítica. Se for muito prolongada, pode remover o complexo cristal violeta-iodo até mesmo das bactérias gram-positivas, levando a um resultado falso-negativo."
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
                explanation: "Uma amostra de escarro de alta qualidade, representativa do trato respiratório inferior, é caracterizada por um grande número de leucócitos (indicando inflamação) e poucas células epiteliais (indicando mínima contaminação com saliva)."
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
                explanation: "Mycoplasma não possui parede celular, que é a estrutura responsável pela retenção dos corantes na coloração de Gram. Sem parede celular, não pode ser classificado como gram-positivo ou gram-negativo."
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
                explanation: "O achado de diplococos gram-positivos lanceolados (em formato de lança) é uma característica clássica e patognomônica de Streptococcus pneumoniae, especialmente em amostras de líquor ou escarro."
              }
            }
          ]
        },
        {
          id: 5,
          title: "Meios de Cultura Seletivos",
          duration: "15 min",
          xp: 80,
          sections: [
            {
              title: "Ágar MacConkey",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">🧪 Meio Seletivo e Diferencial</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>ágar MacConkey</strong> é um dos meios mais utilizados em microbiologia clínica. Ele é 
                    <strong>seletivo</strong> para o crescimento de bactérias gram-negativas e <strong>diferencial</strong> 
                    para a fermentação da lactose.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔍 Como Funciona?</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Seletividade:</strong> Contém sais biliares e cristal violeta, que inibem o crescimento da maioria das bactérias gram-positivas.</li>
                    <li><strong>Diferencial:</strong> Contém lactose como fonte de carboidrato e um indicador de pH (vermelho neutro).</li>
                  </ul>
                </div>
                
                <div style="background: #fecaca; padding: 15px; border-radius: 8px; border-left: 4px solid #dc2626;">
                  <h4 style="color: #b91c1c; margin-bottom: 10px;">Fermentadores de Lactose (LF)</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Bactérias que fermentam a lactose produzem ácido, diminuindo o pH e fazendo com que as colônias 
                    absorvam o indicador, tornando-se <strong>rosas ou avermelhadas</strong>. Ex: <em>E. coli, Klebsiella</em>.
                  </p>
                </div>

                <div style="background: #e0e7ff; padding: 15px; border-radius: 8px; border-left: 4px solid #4338ca; margin-top: 15px;">
                  <h4 style="color: #3730a3; margin-bottom: 10px;">Não Fermentadores de Lactose (NLF)</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Bactérias que não fermentam a lactose utilizam peptona, produzindo amônia e aumentando o pH. 
                    As colônias permanecem <strong>incolores ou transparentes</strong>. Ex: <em>Pseudomonas, Acinetobacter</em>.
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
                explanation: "O ágar MacConkey contém sais biliares e cristal violeta para inibir gram-positivos e lactose com um indicador de pH para diferenciar os bacilos gram-negativos fermentadores (rosa) dos não fermentadores (incolor)."
              }
            }
          ]
        },
        {
          id: 6,
          title: "Cocos Gram-positivos: Identificação",
          duration: "15 min",
          xp: 85,
          sections: [
            {
              title: "Cachos vs. Cadeias",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🍇 Arranjos Clássicos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A primeira grande diferenciação entre os cocos gram-positivos é o seu arranjo. Esta característica, 
                    observada na microscopia, é um guia fundamental para a identificação presuntiva.
                  </p>
                </div>

                <div style="background: #fffbeb; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 15px;">
                  <h4 style="color: #b45309; margin-bottom: 10px;">Staphylococcus: Arranjo em Cachos</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    As espécies de <strong>Staphylococcus</strong> se dividem em múltiplos planos, formando agrupamentos 
                    irregulares que se assemelham a <strong>cachos de uva</strong>. O mnemônico clássico é: 
                    <em>'Está-FILO não forma fila'</em>.
                  </p>
                </div>

                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                  <h4 style="color: #1d4ed8; margin-bottom: 10px;">Streptococcus: Arranjo em Cadeias</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    As espécies de <strong>Streptococcus</strong> se dividem em um único plano, permanecendo unidas após a 
                    divisão e formando <strong>cadeias</strong> de comprimento variável. Os enterococos também podem 
                    apresentar-se em cadeias curtas ou pares.
                  </p>
                </div>
              `,
              question: {
                text: "Qual arranjo microscópico é característico do gênero Staphylococcus?",
                options: [
                  "Cocos em cadeias longas",
                  "Cocos em cachos irregulares",
                  "Diplococos lanceolados"
                ],
                correct: 1,
                explanation: "Staphylococcus spp. são conhecidos por seu arranjo em cachos de uva, resultado da divisão celular em múltiplos planos. Streptococcus spp., por outro lado, formam cadeias."
              }
            },
            {
              title: "Teste da Catalase",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #166534; margin-bottom: 15px;">💨 O Teste do Borbulhar</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>teste da catalase</strong> é um teste bioquímico rápido e crucial para diferenciar os dois 
                    principais grupos de cocos gram-positivos.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A enzima catalase converte peróxido de hidrogênio (H₂O₂) em água (H₂O) e oxigênio (O₂), 
                    protegendo a célula do dano oxidativo. A produção de bolhas de oxigênio é um resultado positivo.
                  </p>
                </div>

                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 15px;">
                  <h4 style="color: #059669; margin-bottom: 10px;">Catalase-Positivo: Staphylococcus</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    O gênero <strong>Staphylococcus</strong> é <strong>catalase-positivo</strong>. Ao adicionar uma gota de 
                    peróxido de hidrogênio a uma colônia, observa-se a formação imediata de bolhas.
                  </p>
                </div>

                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">Catalase-Negativo: Streptococcus e Enterococcus</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Os gêneros <strong>Streptococcus</strong> e <strong>Enterococcus</strong> são <strong>catalase-negativos</strong>. 
                    Nenhuma bolha é formada na presença de peróxido de hidrogênio.
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
                explanation: "O teste da catalase é um passo fundamental na identificação de cocos gram-positivos. Ele separa de forma confiável o gênero Staphylococcus (positivo) dos gêneros Streptococcus e Enterococcus (negativos)."
              }
            }
          ]
        },
        {
          id: 7,
          title: "Bacilos Gram-positivos: Morfologia",
          duration: "14 min",
          xp: 75,
          sections: [
            {
              title: "Grandes, Pequenos e Ramificados",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🌿 Diversidade Morfológica</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os bacilos gram-positivos são um grupo heterogêneo com morfologias variadas, que fornecem 
                    pistas importantes para sua identificação e significado clínico.
                  </p>
                </div>

                <div style="background: #faf5ff; padding: 15px; border-radius: 8px; border-left: 4px solid #9333ea; margin-bottom: 15px;">
                  <h4 style="color: #7e22ce; margin-bottom: 10px;">Grandes Bacilos (Formadores de Esporos)</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Bacilos grandes, com extremidades retas (em formato de 'vagão de trem' ou 'boxcar'), são 
                    característicos dos gêneros <strong>Bacillus</strong> (aeróbio) e <strong>Clostridium</strong> (anaeróbio). 
                    A presença de esporos pode ser observada.
                  </p>
                </div>

                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 15px;">
                  <h4 style="color: #1d4ed8; margin-bottom: 10px;">Pequenos Bacilos Pleomórficos</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Bacilos pequenos e irregulares (pleomórficos), por vezes com arranjo em paliçada ou 
                    em formato de 'letras chinesas', sugerem <strong>Corynebacterium</strong>, <strong>Listeria</strong> 
                    ou <strong>Cutibacterium</strong>.
                  </p>
                </div>

                <div style="background: #fdf4f4; padding: 15px; border-radius: 8px; border-left: 4px solid #f87171;">
                  <h4 style="color: #b91c1c; margin-bottom: 10px;">Bacilos Ramificados</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    A presença de filamentos finos e ramificados é uma característica marcante de 
                    <strong>Nocardia</strong> (aeróbio, parcialmente ácido-resistente) e <strong>Actinomyces</strong> 
                    (anaeróbio).
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
                explanation: "A morfologia de bacilos gram-positivos finos e ramificados é a principal característica que diferencia os gêneros Nocardia e Actinomyces de outros bacilos gram-positivos."
              }
            },
            {
              title: "Significado Clínico: Gangrena Gasosa",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🚨 Alerta Clínico Urgente</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Um dos achados mais críticos na coloração de Gram de amostras de tecidos moles é a 
                    visualização de bacilos gram-positivos na <strong>ausência de células inflamatórias</strong> (leucócitos).
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    Este padrão é altamente sugestivo de <strong>gangrena gasosa</strong> (mionecrose clostridial), 
                    uma infecção devastadora causada principalmente por <em>Clostridium perfringens</em>. As toxinas 
                    produzidas pela bactéria destroem os tecidos e os leucócitos, explicando a ausência de 
                    resposta inflamatória no sítio da infecção.
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
                explanation: "A ausência de leucócitos em uma amostra com bacilos gram-positivos é um sinal de alarme para gangrena gasosa, pois as toxinas de Clostridium perfringens causam necrose tecidual e destroem as células de defesa."
              }
            }
          ]
        },
        {
          id: 8,
          title: "Organismos Gram-negativos",
          duration: "16 min",
          xp: 90,
          sections: [
            {
              title: "Cocos Gram-negativos",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">☕ Diplococos 'Grão de Café'</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os cocos gram-negativos são menos comuns que os gram-positivos, mas incluem patógenos importantes. 
                    A morfologia clássica é a de <strong>diplococos</strong> (em pares), com os lados adjacentes 
                    achatados, assemelhando-se a <strong>grãos de café</strong>.
                  </p>
                </div>

                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">Principais Gêneros</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Neisseria:</strong> <em>N. meningitidis</em> (meningite) e <em>N. gonorrhoeae</em> (gonorreia). Frequentemente encontrados no interior de neutrófilos.</li>
                    <li><strong>Moraxella:</strong> <em>M. catarrhalis</em>, uma causa comum de otite média e sinusite.</li>
                  </ul>
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
                explanation: "As espécies de Neisseria são caracteristicamente diplococos gram-negativos, muitas vezes com um formato reniforme (de rim) ou de 'grão de café', e podem ser vistos dentro de leucócitos."
              }
            },
            {
              title: "Bacilos Gram-negativos",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">Vasta Família de Patógenos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os bacilos gram-negativos (BGN) representam um grupo vasto e clinicamente significativo de bactérias. 
                    A diferenciação inicial no ágar MacConkey (fermentador ou não de lactose) é um passo crucial.
                  </p>
                </div>

                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">Grupos Importantes</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Enterobacteriaceae:</strong> Família grande de fermentadores de lactose (ex: <em>E. coli, Klebsiella</em>) e não fermentadores (ex: <em>Salmonella, Shigella</em>).</li>
                    <li><strong>Não Fermentadores:</strong> Grupo importante de patógenos hospitalares, como <em>Pseudomonas aeruginosa</em> e <em>Acinetobacter baumannii</em>.</li>
                    <li><strong>Fastidiosos:</strong> Exigem meios de cultura especiais, como o <em>Haemophilus influenzae</em> que cresce no ágar chocolate.</li>
                    <li><strong>Curvos:</strong> Morfologia em vírgula ou 'asa de gaivota', como em <em>Vibrio</em> e <em>Campylobacter</em>.</li>
                  </ul>
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
                explanation: "O ágar chocolate é um meio enriquecido que contém hemácias lisadas, liberando fatores de crescimento (Fator X e V) necessários para o cultivo de bactérias fastidiosas como Haemophilus influenzae."
              }
            }
          ]
        },
        {
          id: 9,
          title: "Hemólise e Testes Presuntivos",
          duration: "12 min",
          xp: 70,
          sections: [
            {
              title: "Padrões de Hemólise",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🩸 Lise de Hemácias</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A observação dos padrões de hemólise em <strong>ágar sangue</strong> é um método clássico e 
                    importante para a diferenciação, especialmente do gênero <em>Streptococcus</em>.
                  </p>
                </div>

                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">Tipos de Hemólise</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Tipo</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Aparência</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Exemplo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #166534;">Alfa (α)</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Hemólise parcial, halo esverdeado</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;"><em>S. pneumoniae</em>, Estreptococos viridans</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #f59e0b;">Beta (β)</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Hemólise completa, halo transparente</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;"><em>S. pyogenes</em> (Grupo A), <em>S. agalactiae</em> (Grupo B)</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold; color: #6b7280;">Gama (γ)</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Sem hemólise, sem alteração do meio</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;"><em>Enterococcus</em> spp.</td>
                    </tr>
                  </table>
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
                explanation: "A beta-hemólise é a lise completa das hemácias no ágar sangue, criando um halo claro e transparente ao redor da colônia bacteriana. É uma característica chave de patógenos como Streptococcus pyogenes."
              }
            },
            {
              title: "Agrupamento de Lancefield",
              content: `
                <div style="background: #eef2ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #4338ca; margin-bottom: 15px;">Classificação Sorológica</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>agrupamento de Lancefield</strong> é um sistema usado para classificar os estreptococos 
                    beta-hemolíticos (e alguns outros) com base em <strong>antígenos de carboidratos</strong> específicos 
                    presentes na parede celular bacteriana. Foi desenvolvido por Rebecca Lancefield.
                  </p>
                </div>

                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #374151; margin-bottom: 10px;">Grupos de Importância Clínica</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Grupo A:</strong> <em>Streptococcus pyogenes</em> (faringite, febre reumática)</li>
                    <li><strong>Grupo B:</strong> <em>Streptococcus agalactiae</em> (infecções neonatais)</li>
                    <li><strong>Grupo D:</strong> Inclui <em>Enterococcus</em> spp. e <em>Streptococcus bovis</em></li>
                  </ul>
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
                explanation: "O sistema de Lancefield é um método sorológico clássico para classificar espécies do gênero Streptococcus, com base na reatividade de antígenos de carboidratos na parede celular."
              }
            }
          ]
        },
        {
          id: 10,
          title: "Tecnologias Modernas de Identificação",
          duration: "10 min",
          xp: 95,
          sections: [
            {
              title: "MALDI-TOF MS",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🚀 Revolução na Identificação</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A espectrometria de massa <strong>MALDI-TOF</strong> (Matrix-Assisted Laser Desorption/Ionization - Time of Flight) 
                    revolucionou a identificação bacteriana nos laboratórios clínicos, oferecendo resultados rápidos e precisos.
                  </p>
                </div>

                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #374151; margin-bottom: 10px;">Como Funciona?</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    O método analisa o perfil de proteínas (principalmente ribossomais) de uma colônia bacteriana. 
                    Esse perfil gera um espectro de massa único, que funciona como uma 'impressão digital' da bactéria. 
                    O espectro obtido é então comparado com um vasto banco de dados para identificar o gênero e a espécie 
                    em questão de minutos.
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
                explanation: "MALDI-TOF MS é uma tecnologia de espectrometria de massa que gera um perfil proteico único para um microrganismo, permitindo sua identificação rápida e precisa ao comparar esse perfil com um banco de dados de referência."
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
          title: "Conceitos Fundamentais de Resistência",
          duration: "12 min",
          xp: 60,
          sections: [
            {
              title: "Resistência Intrínseca vs Adquirida",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🧬 Tipos de Resistência</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O objetivo do teste de suscetibilidade a antimicrobianos é determinar o grau de 
                    <strong>resistência adquirida</strong> a antibióticos que podem ser empregados terapeuticamente. 
                    É fundamental distinguir entre resistência intrínseca e adquirida.
                  </p>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #0369a1; margin-bottom: 10px;">🔒 Resistência Intrínseca</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    A resistência intrínseca é a resistência inerente a um antimicrobiano que todos ou 
                    quase todos os membros de uma espécie exibem, tornando o teste de suscetibilidade 
                    <strong>desnecessário</strong>.
                  </p>
                  <p style="font-size: 14px; line-height: 1.5; color: #059669;">
                    <strong>Exemplo:</strong> Enterococcus é intrinsecamente resistente às cefalosporinas 
                    devido à baixa afinidade das PBPs por estes antibióticos.
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">🔄 Resistência Adquirida</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    A resistência adquirida desenvolve-se através de mutações cromossômicas ou 
                    aquisição de elementos genéticos móveis (plasmídeos, transposons).
                  </p>
                  <p style="font-size: 14px; line-height: 1.5; color: #dc2626;">
                    <strong>Exemplo:</strong> Staphylococcus aureus resistente à meticilina (MRSA) 
                    através da aquisição do gene mecA.
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
                explanation: "O TSA visa determinar a resistência adquirida, pois a resistência intrínseca é previsível e não requer teste. O foco é identificar resistências que podem impactar a terapia."
              }
            }
          ]
        },
        {
          id: 2,
          title: "Mecanismos de Resistência",
          duration: "15 min",
          xp: 70,
          sections: [
            {
              title: "Expressão Constitutiva vs Induzível",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #166534; margin-bottom: 15px;">⚙️ Mecanismos de Expressão</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Mecanismos de resistência expressos <strong>constitutivamente</strong> são expressos 
                    continuamente, enquanto a expressão <strong>induzível</strong> ocorre após a exposição 
                    a um agente incitante específico.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">🔄 Resistência Constitutiva</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Expressão contínua do mecanismo de resistência</li>
                    <li>Facilmente detectável em testes de rotina</li>
                    <li>Exemplo: Beta-lactamases cromossômicas de Enterobacter</li>
                  </ul>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">⚡ Resistência Induzível</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Ativada apenas na presença do antibiótico indutor</li>
                    <li>Pode não ser detectada em testes padrão</li>
                    <li>Exemplo: Resistência à clindamicina induzida por eritromicina</li>
                    <li>Requer testes especiais (D-zone test)</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🚨 Implicação Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Resistência induzível pode levar à falha terapêutica mesmo com resultado "sensível" 
                    in vitro, pois a resistência se desenvolve durante o tratamento.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a diferença entre resistência constitutiva e induzível?",
                options: [
                  "A resistência constitutiva é transferida por plasmídeos, enquanto a induzível é cromossômica",
                  "A resistência constitutiva é expressa continuamente, enquanto a induzível ocorre após a exposição a um agente incitante",
                  "A resistência constitutiva afeta apenas os beta-lactâmicos, enquanto a induzível afeta os macrolídeos"
                ],
                correct: 1,
                explanation: "A diferença fundamental está no padrão de expressão: constitutiva é contínua, enquanto induzível requer um estímulo (geralmente o próprio antibiótico) para ser expressa."
              }
            }
          ]
        },
        {
          id: 3,
          title: "Heterorresistência",
          duration: "10 min",
          xp: 50,
          sections: [
            {
              title: "Subpopulações com Resistência Variável",
              content: `
                <div style="background: #fdf2f8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #be185d; margin-bottom: 15px;">🧪 Fenômeno Complexo</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A expressão heterogênea, ou <strong>heterorresistência</strong>, pode levar a 
                    subpopulações bacterianas dentro de uma amostra microbiológica que possuem 
                    graus variados de resistência fenotípica, tornando a identificação in vitro 
                    da resistência mais difícil.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔬 Características</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Coexistência de células sensíveis e resistentes</li>
                    <li>Expressão variável do mecanismo de resistência</li>
                    <li>Dificuldade na detecção pelos métodos convencionais</li>
                    <li>Pode levar a resultados falso-sensíveis</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Exemplos Clínicos</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    <strong>MRSA heterorresistente:</strong> Subpopulações com diferentes níveis de resistência à oxacilina<br>
                    <strong>VISA (Vancomycin-Intermediate S. aureus):</strong> Heterorresistência à vancomicina
                  </p>
                </div>
              `,
              question: {
                text: "O que é heterorresistência?",
                options: [
                  "A resistência de uma única bactéria a múltiplas classes de antibióticos",
                  "A expressão heterogênea de um mecanismo de resistência, levando a subpopulações com diferentes graus de resistência fenotípica",
                  "Uma resistência que só se manifesta in vivo, mas não in vitro"
                ],
                correct: 1,
                explanation: "Heterorresistência refere-se à coexistência de subpopulações bacterianas com diferentes níveis de resistência dentro da mesma amostra, dificultando a detecção laboratorial."
              }
            }
          ]
        },
        {
          id: 4,
          title: "Quando Realizar o TSA",
          duration: "8 min",
          xp: 40,
          sections: [
            {
              title: "Indicações e Contraindicações",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">📋 Critérios para TSA</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O teste de suscetibilidade NÃO é rotineiramente realizado quando o padrão de 
                    suscetibilidade antimicrobiana de um organismo particular é previsível. Como exemplo, 
                    o teste de <strong>Streptococcus pyogenes</strong> para suscetibilidade à penicilina 
                    não é realizado rotineiramente porque isolados não suscetíveis à penicilina não foram relatados.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">✅ Indicações para TSA</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Bactérias com resistência adquirida conhecida</li>
                    <li>Isolados de sítios normalmente estéreis</li>
                    <li>Infecções graves ou em pacientes imunocomprometidos</li>
                    <li>Falha terapêutica com antibiótico de primeira linha</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">❌ Quando NÃO Realizar</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>S. pyogenes (sempre sensível à penicilina)</li>
                    <li>S. agalactiae (sempre sensível à penicilina)</li>
                    <li>Anaeróbios (padrões previsíveis)</li>
                    <li>Contaminantes ou flora normal</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Em qual situação o teste de suscetibilidade NÃO é rotineiramente realizado?",
                options: [
                  "Quando uma bactéria clinicamente significativa é isolada de um sítio normalmente estéril",
                  "Quando o padrão de suscetibilidade do organismo é previsível, como o de Streptococcus pyogenes à penicilina",
                  "Quando o paciente está imunossuprimido e o organismo isolado pode ser um patógeno oportunista"
                ],
                correct: 1,
                explanation: "TSA não é necessário quando o padrão de suscetibilidade é previsível. S. pyogenes nunca desenvolveu resistência à penicilina, tornando o teste desnecessário."
              }
            }
          ]
        },
        {
          id: 5,
          title: "Métodos Qualitativos - Disco-Difusão",
          duration: "18 min",
          xp: 90,
          sections: [
            {
              title: "Método de Kirby-Bauer",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">💿 Método Clássico</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O método de teste convencional qualitativo mais comumente usado pelos laboratórios 
                    de microbiologia clínica é o <strong>método de difusão em disco</strong>, ou Kirby-Bauer, 
                    devido à sua simplicidade, confiabilidade e alto grau de padronização.
                  </p>
                </div>
                
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #166534; margin-bottom: 10px;">⚙️ Princípio do Método</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    O teste baseia-se na difusão do antibiótico do disco através do ágar, criando um 
                    gradiente de concentração. A zona de inibição é inversamente proporcional à CIM.
                  </p>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Maior zona = menor CIM = mais sensível</li>
                    <li>Menor zona = maior CIM = mais resistente</li>
                  </ul>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">📏 Padronização Crítica</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Inóculo:</strong> 1-2 × 10⁸ CFU/mL (padrão 0,5 McFarland)</li>
                    <li><strong>Meio:</strong> Ágar Mueller-Hinton (pH 7,2-7,4)</li>
                    <li><strong>Incubação:</strong> 35°C por 16-18 horas</li>
                    <li><strong>Atmosfera:</strong> Ar ambiente (CO₂ para fastidiosos)</li>
                    <li><strong>Leitura:</strong> Medição precisa ao milímetro mais próximo</li>
                  </ul>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">💰 Vantagens Econômicas</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    <strong>Custo:</strong> $2,50-$5,00 por teste (mais econômico)<br>
                    <strong>Flexibilidade:</strong> Seleção livre de antibióticos<br>
                    <strong>Simplicidade:</strong> Não requer equipamentos especiais
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
                explanation: "O método de disco-difusão fornece resultados qualitativos (categorias S, I, R) baseados no diâmetro da zona de inibição, não valores quantitativos de CIM."
              }
            }
          ]
        },
        {
          id: 6,
          title: "Métodos Quantitativos - CIM",
          duration: "20 min",
          xp: 100,
          sections: [
            {
              title: "Concentração Inibitória Mínima",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🎯 Definição de CIM</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Métodos quantitativos para o teste de suscetibilidade antimicrobiana permitem a 
                    determinação da <strong>CIM</strong>, que é a menor concentração de um agente específico 
                    necessária para inibir o crescimento visível de um organismo.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">📊 Características da CIM</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Menor concentração</strong> para inibir 99% da bactéria</li>
                    <li><strong>Melhor marcador</strong> de eficiência do antimicrobiano</li>
                    <li><strong>Quanto menor, melhor</strong> - Em geral, <1 é sensível</li>
                    <li><strong>Única para cada combinação</strong> antibiótico-bactéria</li>
                  </ul>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">⚗️ Métodos para Determinação</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Método</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Precisão</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Custo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Macrodiluição</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">±1 diluição</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Alto</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Microdiluição</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">±1 diluição</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">$10-22/painel</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">E-test</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Boa correlação</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">$2-3/fita</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ "S" Pode Não Ser Sucesso!</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Sempre tentar interpretar os <strong>mecanismos de resistência</strong>! 
                    Um resultado "sensível" não garante sucesso clínico se houver mecanismos 
                    de resistência não detectados ou fatores do hospedeiro desfavoráveis.
                  </p>
                </div>
              `,
              question: {
                text: "O que é a Concentração Inibitória Mínima (CIM)?",
                options: [
                  "A maior concentração de antibiótico que uma bactéria pode tolerar sem morrer",
                  "A menor concentração de um agente antimicrobiano necessária para inibir o crescimento visível de um organismo",
                  "A concentração de antibiótico presente no sangue do paciente após a administração"
                ],
                correct: 1,
                explanation: "CIM é definida como a menor concentração de antimicrobiano que inibe o crescimento visível (99%) do microrganismo testado após incubação padronizada."
              }
            }
          ]
        },
        {
          id: 7,
          title: "Sistemas Automatizados",
          duration: "14 min",
          xp: 80,
          sections: [
            {
              title: "VITEK, Phoenix e MicroScan",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🤖 Automação Laboratorial</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os sistemas automatizados revolucionaram o teste de suscetibilidade antimicrobiana, 
                    oferecendo <strong>rapidez</strong>, <strong>padronização</strong> e <strong>integração</strong> 
                    com sistemas de informação laboratorial.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🏭 Principais Sistemas</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Sistema</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Fabricante</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Tempo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">VITEK 2</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">bioMérieux</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">4-18h</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Phoenix</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">BD</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">6-16h</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">MicroScan</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Beckman Coulter</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">3-18h</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">✅ Vantagens</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Rapidez:</strong> Resultados em 4-18 horas</li>
                    <li><strong>Padronização:</strong> Reduz variabilidade técnica</li>
                    <li><strong>Integração:</strong> Conecta com LIS/HIS</li>
                    <li><strong>Interpretação:</strong> Sistemas especialistas integrados</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">❌ Limitações</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Custo:</strong> Alto investimento inicial</li>
                    <li><strong>Flexibilidade:</strong> Painéis pré-definidos</li>
                    <li><strong>Organismos raros:</strong> Podem não estar no banco de dados</li>
                    <li><strong>Dependência:</strong> Requer manutenção especializada</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual é uma das principais vantagens dos sistemas automatizados de TSA?",
                options: [
                  "São mais baratos que os métodos manuais",
                  "Oferecem maior flexibilidade na seleção de antibióticos",
                  "Fornecem resultados mais rápidos e padronizados com integração ao sistema de informação laboratorial"
                ],
                correct: 2,
                explanation: "Os sistemas automatizados destacam-se pela rapidez (4-18h vs 18-24h), padronização dos procedimentos e integração com sistemas de informação, melhorando o fluxo de trabalho laboratorial."
              }
            }
          ]
        },
        {
          id: 8,
          title: "Testes Fenotípicos Especiais",
          duration: "16 min",
          xp: 85,
          sections: [
            {
              title: "Teste da Nitrocefina",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">🧪 Detecção de Beta-lactamases</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O <strong>teste da nitrocefina</strong> (cefalosporina cromogênica) é um método rápido 
                    para detectar a produção de beta-lactamases em diversos microrganismos.
                  </p>
                </div>
                
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #166534; margin-bottom: 10px;">⚙️ Princípio do Teste</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    A nitrocefina é uma cefalosporina cromogênica que muda de cor quando hidrolisada 
                    por beta-lactamases: de <strong>amarelo</strong> (negativo) para <strong>vermelho</strong> (positivo).
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Aplicações Clínicas</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Organismo</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Detecção</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">H. influenzae</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Resistência à ampicilina</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">N. gonorrhoeae</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Resistência à penicilina</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Staphylococcus</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Resistência à penicilina</td>
                    </tr>
                  </table>
                </div>
              `,
              question: {
                text: "O teste da cefalosporina cromogênica (nitrocefina) é usado para detectar rapidamente o quê?",
                options: [
                  "Resistência induzível à clindamicina",
                  "A produção de beta-lactamases em bactérias como Staphylococcus spp. e H. influenzae",
                  "Resistência de alto nível a aminoglicosídeos em enterococos"
                ],
                correct: 1,
                explanation: "O teste da nitrocefina detecta especificamente a produção de beta-lactamases através da hidrólise de uma cefalosporina cromogênica, resultando em mudança de cor."
              }
            },
            {
              title: "D-Zone Test",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">🔄 Resistência Induzível</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O Clinical and Laboratory Standards Institute (CLSI) recomenda que o teste para 
                    <strong>resistência induzível à clindamicina</strong> seja realizado em todos os 
                    isolados de Staphylococcus spp e Streptococcus pneumoniae.
                  </p>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #0369a1; margin-bottom: 10px;">⚙️ Metodologia</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Discos:</strong> Eritromicina (15μg) e clindamicina (2μg)</li>
                    <li><strong>Distância:</strong> 15-26mm entre centros dos discos</li>
                    <li><strong>Princípio:</strong> Eritromicina induz resistência à clindamicina</li>
                    <li><strong>Resultado:</strong> Zona "D" (achatamento) ao redor da clindamicina</li>
                  </ul>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Interpretação Clínica</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    <strong>D-zone positivo:</strong> Reportar clindamicina como resistente<br>
                    <strong>D-zone negativo:</strong> Clindamicina pode ser usada<br>
                    <strong>Importância:</strong> Previne falha terapêutica por resistência emergente
                  </p>
                </div>
              `,
              question: {
                text: "O 'D-zone test' é utilizado para detectar qual mecanismo de resistência?",
                options: [
                  "Produção de beta-lactamase de espectro estendido (ESBL)",
                  "Resistência induzível à clindamicina em Staphylococcus spp. e Streptococcus spp.",
                  "Resistência à meticilina em S. aureus"
                ],
                correct: 1,
                explanation: "O D-zone test detecta resistência induzível à clindamicina mediada pelo gene erm, onde a eritromicina induz resistência cruzada à clindamicina."
              }
            }
          ]
        },
        {
          id: 9,
          title: "Métodos Moleculares",
          duration: "18 min",
          xp: 90,
          sections: [
            {
              title: "Detecção Genotípica de Resistência",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🧬 Revolução Molecular</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Alguns ensaios moleculares podem ser realizados diretamente em amostras clínicas 
                    ou culturas primárias, resultando em <strong>tempos de resposta substancialmente 
                    mais rápidos</strong> comparados aos métodos fenotípicos convencionais.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">⚡ Vantagens dos Métodos Moleculares</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Rapidez:</strong> Resultados em 1-3 horas vs 18-48h</li>
                    <li><strong>Amostra direta:</strong> Não requer isolamento prévio</li>
                    <li><strong>Especificidade:</strong> Detecção de genes específicos</li>
                    <li><strong>Sensibilidade:</strong> Detecção de baixas concentrações</li>
                  </ul>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Principais Aplicações</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Gene/Mecanismo</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Resistência</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Organismo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">mecA/mecC</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Meticilina</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Staphylococcus</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">vanA/vanB</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Vancomicina</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Enterococcus</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">blaKPC</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Carbapenêmicos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Enterobactérias</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Limitações Importantes</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Resultados genotípicos <strong>não eliminam a necessidade</strong> de testes de 
                    suscetibilidade antimicrobiana fenotípicos. O teste fenotípico ainda é necessário 
                    para confirmar esses resultados e fornecer informações sobre outras possíveis 
                    opções terapêuticas.
                  </p>
                </div>
              `,
              question: {
                text: "Qual é uma das principais vantagens dos métodos genotípicos?",
                options: [
                  "São menos caros que os métodos fenotípicos",
                  "Podem ser realizados diretamente em amostras clínicas, resultando em tempos de resposta substancialmente mais rápidos",
                  "Fornecem uma visão completa de todos os possíveis mecanismos de resistência"
                ],
                correct: 1,
                explanation: "A principal vantagem dos métodos moleculares é a rapidez, permitindo detecção direta em amostras clínicas sem necessidade de cultivo prévio, reduzindo significativamente o tempo para resultado."
              }
            }
          ]
        },
        {
          id: 10,
          title: "Interpretação Avançada de Resultados",
          duration: "30 min",
          xp: 150,
          sections: [
            {
              title: "Categorias CLSI vs EUCAST/BrCast",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🌍 Padrões Internacionais</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Existem diferenças importantes entre os critérios de interpretação do 
                    <strong>CLSI</strong> (Clinical and Laboratory Standards Institute) e do 
                    <strong>EUCAST/BrCast</strong> (European Committee/Brazilian Committee on Antimicrobial Susceptibility Testing).
                  </p>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #0369a1; margin-bottom: 10px;">🇺🇸 Sistema CLSI</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>S (Sensível):</strong> Concentração alcançada com dose padrão</li>
                    <li><strong>I (Intermediário):</strong> Eficácia com doses aumentadas ou sítios que concentram</li>
                    <li><strong>R (Resistente):</strong> Concentrações não alcançadas com doses usuais</li>
                  </ul>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">🇪🇺 Sistema EUCAST/BrCast</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>S (Sensível dose padrão):</strong> Sucesso com dosagem padrão</li>
                    <li><strong>I (Sensível aumento exposição):</strong> Requer maior exposição</li>
                    <li><strong>R (Resistente):</strong> Falha altamente provável</li>
                  </ul>
                  <p style="font-size: 14px; line-height: 1.5; color: #059669; margin-top: 10px;">
                    <strong>BrCast reduz pontos de corte</strong> para garantir sensibilidade e 
                    <strong>exclui categoria intermediário</strong> em muitos casos.
                  </p>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Evidências Insuficientes</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    Quando não há evidências suficientes para uso do antibiótico para o microrganismo testado:
                  </p>
                  <p style="font-size: 14px; line-height: 1.5; color: #dc2626;">
                    <strong>Exemplo:</strong> Burkholderia cepacia não há ponto de corte no BrCast para cotrimoxazol!
                  </p>
                </div>
              `,
              question: {
                text: "Qual é a principal diferença entre os sistemas CLSI e EUCAST/BrCast?",
                options: [
                  "CLSI é mais rigoroso que EUCAST",
                  "BrCast reduz pontos de corte para garantir sensibilidade e frequentemente exclui a categoria intermediário",
                  "EUCAST só é usado na Europa"
                ],
                correct: 1,
                explanation: "BrCast tende a ser mais conservador, reduzindo pontos de corte para aumentar a probabilidade de sucesso terapêutico e simplificando a interpretação ao eliminar a categoria intermediário quando possível."
              }
            },
            {
              title: "Interpretação da CIM",
              content: `
                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #166534; margin-bottom: 15px;">📊 Entendendo a CIM</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Devemos entender o que é a CIM: menor concentração para inibir 99% da bactéria. 
                    É o <strong>melhor marcador de eficiência</strong> do antimicrobiano. Quanto menor, melhor - 
                    Em geral, <strong>&lt;1 é sensível</strong>. É única para um antibiótico em relação a uma bactéria.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Interpretação Prática</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">CIM (mg/L)</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Interpretação Geral</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Significado Clínico</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; color: #059669; font-weight: bold;">≤0,5</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Altamente sensível</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Excelente opção terapêutica</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; color: #059669;">0,5-1</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Sensível</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Boa opção com dose padrão</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; color: #d97706;">2-8</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Intermediário</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Requer doses aumentadas</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; color: #dc2626; font-weight: bold;">≥16</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Resistente</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Falha terapêutica provável</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                  <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ "S" Pode Não Ser Sucesso!</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    Sempre tentar interpretar os <strong>mecanismos de resistência</strong>! 
                    Um resultado "sensível" não garante sucesso clínico se houver mecanismos 
                    de resistência não detectados ou fatores do hospedeiro desfavoráveis.
                  </p>
                </div>
              `,
              question: {
                text: "Uma CIM de 0,25 mg/L para um antibiótico indica que:",
                options: [
                  "A bactéria é resistente e o antibiótico não deve ser usado",
                  "A bactéria é altamente sensível e o antibiótico é uma excelente opção terapêutica",
                  "São necessárias doses aumentadas do antibiótico para eficácia"
                ],
                correct: 1,
                explanation: "Uma CIM ≤0,5 mg/L indica alta sensibilidade, sugerindo que o antibiótico será muito eficaz contra essa bactéria com doses padrão, sendo uma excelente opção terapêutica."
              }
            }
          ]
        }
      ]
    }
  }

  // Funções de navegação e controle
  const handleLogin = () => {
    const username = loginUsernameRef.current?.value
    const password = loginPasswordRef.current?.value
    
    if (username && password) {
      setUser({ username })
      setCurrentView('dashboard')
    }
  }

  const handleRegister = () => {
    const nome = registerNomeRef.current?.value
    const login = registerLoginRef.current?.value
    const senha = registerSenhaRef.current?.value
    const confirmarSenha = registerConfirmarSenhaRef.current?.value
    
    if (nome && login && senha && confirmarSenha && senha === confirmarSenha) {
      setUser({ username: login })
      setCurrentView('dashboard')
    }
  }

  const startLesson = (moduleKey, lessonId) => {
    const module = modulesData[moduleKey]
    const lesson = module.lessons.find(l => l.id === lessonId)
    
    if (lesson) {
      setCurrentModule(moduleKey)
      setCurrentLesson(lesson)
      setCurrentSection(0)
      setCurrentQuestion(null)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
      setCurrentView('lesson')
    }
  }

  const showQuestion = () => {
    const section = currentLesson.sections[currentSection]
    if (section.question) {
      setCurrentQuestion(section.question)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
    }
  }

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowQuestionFeedback(true)
  }

  const nextSection = () => {
    if (currentSection < currentLesson.sections.length - 1) {
      setCurrentSection(currentSection + 1)
      setCurrentQuestion(null)
      setShowQuestionFeedback(false)
      setSelectedAnswer(null)
    }
  }

  const completeLesson = () => {
    const lessonKey = `${currentModule}-${currentLesson.id}`
    if (!userProgress.completedLessons.includes(lessonKey)) {
      setUserProgress(prev => ({
        ...prev,
        xp: prev.xp + currentLesson.xp,
        completedLessons: [...prev.completedLessons, lessonKey]
      }))
    }
    setCurrentView('dashboard')
  }

  // Componente de Login/Registro
  const LoginView = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        {currentView === 'login' ? (
          <>
            <h1 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '30px', fontSize: '28px' }}>🦠 Infecteasy</h1>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Usuário</label>
              <input ref={loginUsernameRef} type="text" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '16px' }} />
            </div>
            <div style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Senha</label>
              <input ref={loginPasswordRef} type="password" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '16px' }} />
            </div>
            <button onClick={handleLogin} style={{ width: '100%', background: '#4299e1', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '15px' }}>
              Entrar
            </button>
            <p style={{ textAlign: 'center', color: '#718096' }}>
              Não tem conta? <button onClick={() => setCurrentView('register')} style={{ background: 'none', border: 'none', color: '#4299e1', cursor: 'pointer', textDecoration: 'underline' }}>Cadastre-se</button>
            </p>
          </>
        ) : (
          <>
            <h1 style={{ textAlign: 'center', color: '#2d3748', marginBottom: '30px', fontSize: '24px' }}>Criar Conta</h1>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Nome</label>
                <input ref={registerNomeRef} type="text" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>CPF</label>
                <input ref={registerCpfRef} type="text" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Data Nascimento</label>
                <input ref={registerDataNascimentoRef} type="date" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Telefone</label>
                <input ref={registerTelefoneRef} type="tel" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Email</label>
              <input ref={registerEmailRef} type="email" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Login</label>
                <input ref={registerLoginRef} type="text" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Atividade</label>
                <select ref={registerAtividadeRef} style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }}>
                  <option>Estudante</option>
                  <option>Profissional</option>
                  <option>Professor</option>
                </select>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Senha</label>
                <input ref={registerSenhaRef} type="password" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#4a5568', fontWeight: '600' }}>Confirmar Senha</label>
                <input ref={registerConfirmarSenhaRef} type="password" style={{ width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
            <button onClick={handleRegister} style={{ width: '100%', background: '#48bb78', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '15px' }}>
              Criar Conta
            </button>
            <p style={{ textAlign: 'center', color: '#718096' }}>
              Já tem conta? <button onClick={() => setCurrentView('login')} style={{ background: 'none', border: 'none', color: '#4299e1', cursor: 'pointer', textDecoration: 'underline' }}>Faça login</button>
            </p>
          </>
        )}
      </div>
    </div>
  )

  // Componente do Dashboard
  const DashboardView = () => (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      {/* Header */}
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b' }}>🦠 Infecteasy</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ background: '#fef3c7', padding: '10px 15px', borderRadius: '10px' }}>
              <span style={{ color: '#92400e', fontSize: '14px' }}>⚡ {userProgress.xp} XP</span>
            </div>
            <div style={{ background: '#dbeafe', padding: '10px 15px', borderRadius: '10px' }}>
              <span style={{ color: '#1e40af', fontSize: '14px' }}>🎯 Nível {userProgress.level}</span>
            </div>
            <div style={{ background: '#dcfce7', padding: '10px 15px', borderRadius: '10px' }}>
              <span style={{ color: '#166534', fontSize: '14px' }}>🔥 {userProgress.streak} dias</span>
            </div>
            <button 
              onClick={() => setCurrentView('login')}
              style={{ background: '#ef4444', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
            >
              Sair
            </button>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>
            Bem-vindo de volta, {user?.username}! 👋
          </h2>
          <p style={{ fontSize: '18px', color: '#64748b' }}>
            Continue sua jornada de aprendizado em microbiologia clínica
          </p>
        </div>

        {/* Módulos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
          {Object.entries(modulesData).map(([key, module]) => (
            <div key={key} style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>{module.title}</h3>
                <p style={{ color: '#64748b', fontSize: '16px' }}>{module.description}</p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {module.lessons.map((lesson) => {
                  const isCompleted = userProgress.completedLessons.includes(`${key}-${lesson.id}`)
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => startLesson(key, lesson.id)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '15px',
                        background: isCompleted ? '#f0f9ff' : '#f8fafc',
                        border: `2px solid ${isCompleted ? '#2563eb' : '#e2e8f0'}`,
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-2px)'
                        e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: '600', color: '#1e293b', marginBottom: '4px' }}>{lesson.title}</div>
                        <div style={{ fontSize: '14px', color: '#64748b' }}>{lesson.duration} • {lesson.xp} XP</div>
                      </div>
                      <div style={{ fontSize: '20px' }}>
                        {isCompleted ? '✅' : '▶️'}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Componente da Lição
  const LessonView = () => {
    if (!currentLesson) return null

    const section = currentLesson.sections[currentSection]
    const isLastSection = currentSection === currentLesson.sections.length - 1

    return (
      <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
        {/* Header da Lição */}
        <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '20px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <button
                onClick={() => setCurrentView('dashboard')}
                style={{ background: '#f1f5f9', color: '#475569', padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', marginBottom: '10px' }}
              >
                ← Voltar ao Dashboard
              </button>
              <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>{currentLesson.title}</h1>
              <p style={{ color: '#64748b', margin: '5px 0 0 0' }}>Seção {currentSection + 1} de {currentLesson.sections.length}</p>
            </div>
            
            <div style={{ background: '#fef3c7', padding: '10px 15px', borderRadius: '10px' }}>
              <span style={{ color: '#92400e', fontSize: '14px' }}>🎯 {currentLesson.xp} XP</span>
            </div>
          </div>
        </div>

        {/* Conteúdo da Seção */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ background: 'white', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', marginBottom: '30px' }}>{section.title}</h2>
            
            <div 
              style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', marginBottom: '40px' }}
              dangerouslySetInnerHTML={{ __html: section.content }}
            />

            {/* Sistema de Perguntas */}
            {!currentQuestion && section.question && (
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <button
                  onClick={showQuestion}
                  style={{ background: '#2563eb', color: 'white', padding: '15px 30px', borderRadius: '12px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
                >
                  📝 Responder Pergunta
                </button>
              </div>
            )}

            {currentQuestion && (
              <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', marginBottom: '30px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>
                {console.log('🎨 DEBUG Renderizando pergunta:', currentQuestion.text) || currentQuestion.text}
              </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showQuestionFeedback}
                      style={{
                        padding: '15px',
                        textAlign: 'left',
                        background: showQuestionFeedback 
                          ? (index === currentQuestion.correct ? '#dcfce7' : selectedAnswer === index ? '#fecaca' : 'white')
                          : 'white',
                        border: showQuestionFeedback
                          ? (index === currentQuestion.correct ? '2px solid #16a34a' : selectedAnswer === index ? '2px solid #dc2626' : '2px solid #e2e8f0')
                          : '2px solid #e2e8f0',
                        borderRadius: '8px',
                        cursor: showQuestionFeedback ? 'default' : 'pointer',
                        fontSize: '16px',
                        color: '#374151'
                      }}
                    >
                      {String.fromCharCode(97 + index)}) {option}
                    </button>
                  ))}
                </div>

                {showQuestionFeedback && (
                  <div style={{ 
                    background: selectedAnswer === currentQuestion.correct ? '#dcfce7' : '#fecaca', 
                    padding: '20px', 
                    borderRadius: '8px',
                    border: selectedAnswer === currentQuestion.correct ? '1px solid #16a34a' : '1px solid #dc2626'
                  }}>
                    <div style={{ 
                      fontSize: '18px', 
                      fontWeight: '600', 
                      color: selectedAnswer === currentQuestion.correct ? '#15803d' : '#dc2626',
                      marginBottom: '10px'
                    }}>
                      {selectedAnswer === currentQuestion.correct ? '✅ Correto!' : '❌ Incorreto'}
                    </div>
                    <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Navegação */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#64748b' }}>
                Seção {currentSection + 1} de {currentLesson.sections.length}
              </div>
              
              <div>
                {!isLastSection ? (
                  <button
                    onClick={nextSection}
                    disabled={section.question && !showQuestionFeedback}
                    style={{
                      background: (section.question && !showQuestionFeedback) ? '#9ca3af' : '#059669',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: (section.question && !showQuestionFeedback) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    Próxima Seção →
                  </button>
                ) : (
                  <button
                    onClick={completeLesson}
                    disabled={section.question && !showQuestionFeedback}
                    style={{
                      background: (section.question && !showQuestionFeedback) ? '#9ca3af' : '#7c3aed',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: (section.question && !showQuestionFeedback) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    🎉 Concluir Lição
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Renderização principal
  if (currentView === 'login' || currentView === 'register') {
    return <LoginView />
  } else if (currentView === 'dashboard') {
    return <DashboardView />
  } else if (currentView === 'lesson') {
    return <LessonView />
  }

  return null
}

export default App
