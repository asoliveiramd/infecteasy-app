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

  // Dados educacionais completos - MICROBIOLOGIA RESTAURADA + ANTIBIOGRAMA TÉCNICO EXPANDIDO
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
                text: "Por que a etapa de descoloração é considerada crítica na coloração de Gram?",
                options: [
                  "Porque determina a intensidade da cor final",
                  "Porque o timing incorreto pode levar à interpretação errônea dos resultados",
                  "Porque remove todas as impurezas da lâmina"
                ],
                correct: 1,
                explanation: "O timing da descoloração é crítico porque determina se as bactérias gram-positivas manterão o cristal violeta. Tempo inadequado pode resultar em falsos gram-positivos ou falsos gram-negativos."
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
                text: "Uma amostra de escarro com 8 neutrófilos e 30 células epiteliais por campo deve ser:",
                options: [
                  "Processada normalmente pois está dentro dos padrões",
                  "Rejeitada e solicitada nova coleta",
                  "Processada apenas para pesquisa de fungos"
                ],
                correct: 1,
                explanation: "Esta amostra é inadequada pelos critérios de Murray-Washington (<10 neutrófilos e >25 células epiteliais), indicando contaminação com saliva. Deve ser rejeitada e solicitada nova coleta."
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
                text: "Por que Mycoplasma não pode ser visualizado na coloração de Gram?",
                options: [
                  "É muito pequeno para ser visto ao microscópio",
                  "Não possui parede celular para reter os corantes",
                  "É um vírus e não uma bactéria"
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
                text: "Qual característica morfológica é mais distintiva do Streptococcus pneumoniae?",
                options: [
                  "Cocos em cadeias longas",
                  "Diplococos gram-positivos lanceolados com cápsula",
                  "Bacilos gram-positivos esporulados"
                ],
                correct: 1,
                explanation: "S. pneumoniae apresenta-se como diplococos gram-positivos com formato lanceolado característico e frequentemente com cápsula visível, o que o diferencia de outros estreptococos."
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
                    O <strong>ágar MacConkey</strong> é um meio seletivo e diferencial amplamente utilizado 
                    para isolamento de bactérias gram-negativas, especialmente enterobactérias. 
                    Sua composição permite tanto a seleção quanto a diferenciação dos microrganismos.
                  </p>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🔬 Componentes e Função</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Sais biliares:</strong> Inibem bactérias gram-positivas</li>
                    <li><strong>Cristal violeta:</strong> Reforça a seleção contra gram-positivas</li>
                    <li><strong>Lactose:</strong> Açúcar para diferenciação</li>
                    <li><strong>Indicador pH:</strong> Vermelho neutro detecta acidificação</li>
                  </ul>
                </div>
                
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px;">
                  <h4 style="color: #166534; margin-bottom: 10px;">🎨 Interpretação das Cores</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    <strong>Colônias rosas/vermelhas:</strong> Fermentam lactose (ex: E. coli, Klebsiella)<br>
                    <strong>Colônias incolores:</strong> Não fermentam lactose (ex: Salmonella, Shigella)
                  </p>
                </div>
              `,
              question: {
                text: "Uma colônia rosa no ágar MacConkey indica que a bactéria:",
                options: [
                  "É gram-positiva",
                  "Fermenta lactose",
                  "É resistente a antibióticos"
                ],
                correct: 1,
                explanation: "Colônias rosas no MacConkey indicam fermentação da lactose, que produz ácidos e baixa o pH, fazendo o indicador vermelho neutro ficar rosa/vermelho."
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
                  <h4 style="color: #dc2626; margin-bottom: 10px;">🎯 Diluição em Ágar - Padrão Ouro</h4>
                  <p style="font-size: 14px; line-height: 1.5;">
                    O método de diluição em ágar é considerado um <strong>padrão de referência</strong> 
                    e é recomendado para bactérias fastidiosas como Helicobacter pylori e Neisseria gonorrhoeae.
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
                explanation: "CIM é definida como a menor concentração de antimicrobiano que inibe o crescimento visível (99%) do microrganismo após incubação padronizada."
              }
            }
          ]
        },
        {
          id: 7,
          title: "Sistemas Automatizados Avançados",
          duration: "25 min",
          xp: 120,
          sections: [
            {
              title: "Tecnologias de Detecção Óptica",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🤖 Automação Avançada</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A maioria dos sistemas automatizados depende da <strong>detecção óptica</strong> do 
                    crescimento bacteriano na presença de um antimicrobiano específico. Eles podem 
                    determinar os padrões de suscetibilidade antimicrobiana mais rapidamente do que 
                    os métodos convencionais.
                  </p>
                </div>
                
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #0369a1; margin-bottom: 10px;">🔬 MicroScan WalkAway (Siemens)</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Capacidade:</strong> 40-96 bandejas simultâneas</li>
                    <li><strong>Detecção:</strong> Fotométrica e fluorométrica</li>
                    <li><strong>Tempo:</strong> 3,5-7h (gram-negativos), 4,5-18h (gram-positivos)</li>
                    <li><strong>Vantagem:</strong> Alto throughput para laboratórios grandes</li>
                  </ul>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">⚡ BD Phoenix (BD Diagnostics)</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Capacidade:</strong> 99 painéis (84 poços cada)</li>
                    <li><strong>Monitoramento:</strong> A cada 20 minutos</li>
                    <li><strong>Detecção:</strong> Turbidimétrica + colorimétrica (redox)</li>
                    <li><strong>Tempo:</strong> 6-16 horas</li>
                    <li><strong>Diferencial:</strong> Dupla detecção aumenta sensibilidade</li>
                  </ul>
                </div>
                
                <div style="background: #fdf2f8; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #be185d; margin-bottom: 10px;">💳 Vitek 2 (bioMérieux)</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Formato:</strong> Cartões compactos (tamanho cartão de crédito)</li>
                    <li><strong>Capacidade:</strong> 30-240 testes simultâneos</li>
                    <li><strong>Volume:</strong> Quantidades microlitricas (economia de reagentes)</li>
                    <li><strong>Tempo:</strong> 4-10 horas</li>
                    <li><strong>Vantagem:</strong> Altamente automatizado, mínima manipulação</li>
                  </ul>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">🌙 Sensititre ARIS 2X (Trek)</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Tipo:</strong> Sistema overnight automatizado</li>
                    <li><strong>Capacidade:</strong> 64 painéis</li>
                    <li><strong>Detecção:</strong> Fluorescência após 18-24h</li>
                    <li><strong>Formato:</strong> Microdiluição padrão 96 poços</li>
                  </ul>
                </div>
              `,
              question: {
                text: "Qual é a principal vantagem dos sistemas automatizados de teste de suscetibilidade?",
                options: [
                  "São os métodos mais baratos disponíveis",
                  "Podem fornecer resultados mais rapidamente por detectarem o crescimento bacteriano de forma óptica",
                  "Eliminam completamente a necessidade de testes fenotípicos confirmatórios"
                ],
                correct: 1,
                explanation: "A detecção óptica sensível permite identificar mudanças sutis no crescimento bacteriano mais precocemente que a observação visual, resultando em tempos de resposta mais rápidos."
              }
            }
          ]
        },
        {
          id: 8,
          title: "Testes Fenotípicos Especiais",
          duration: "22 min",
          xp: 110,
          sections: [
            {
              title: "Detecção de Beta-lactamases",
              content: `
                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🧪 Teste da Nitrocefina</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O método da <strong>cefalosporina cromogênica</strong> (nitrocefina) pode ser usado para 
                    detectar beta-lactamases em estafilococos, H. influenzae, N. gonorrhoeae, 
                    Enterococcus spp e outras bactérias.
                  </p>
                </div>
                
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #166534; margin-bottom: 10px;">⚡ Princípio do Teste</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Substrato:</strong> Nitrocefina (cefalosporina cromogênica)</li>
                    <li><strong>Reação:</strong> Beta-lactamase hidrolisa o anel beta-lactâmico</li>
                    <li><strong>Resultado:</strong> Mudança de cor amarelo → vermelho/rosa</li>
                    <li><strong>Tempo:</strong> Resultado em minutos</li>
                  </ul>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🎯 Aplicações Clínicas</h4>
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr style="background: #e5e7eb;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Organismo</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Importância</th>
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
                text: "Qual é a principal limitação clínica dos métodos moleculares?",
                options: [
                  "São mais lentos que os métodos fenotípicos",
                  "Não eliminam a necessidade de testes fenotípicos para confirmar os resultados e avaliar outras opções terapêuticas",
                  "Os resultados não se correlacionam bem com a resistência fenotípica"
                ],
                correct: 1,
                explanation: "Métodos moleculares detectam genes de resistência, mas não avaliam sua expressão ou outros mecanismos. Testes fenotípicos continuam necessários para confirmação e avaliação completa."
              }
            },
            {
              title: "Relato Seletivo e Stewardship",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🎯 Estratégia de Stewardship</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A justificativa para o <strong>relato seletivo</strong> é ajudar a guiar a prescrição 
                    de antimicrobianos e reduzir o uso inadequado de antimicrobianos de amplo espectro 
                    quando agentes mais direcionados seriam suficientes.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #059669; margin-bottom: 10px;">📋 Princípios do Relato Seletivo</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li><strong>Suprimir agentes de amplo espectro</strong> quando há opções direcionadas</li>
                    <li><strong>Reportar antibióticos de primeira linha</strong> preferencialmente</li>
                    <li><strong>Liberar agentes reserva</strong> apenas quando necessário</li>
                    <li><strong>Considerar o sítio de infecção</strong> na seleção de antibióticos</li>
                  </ul>
                </div>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h4 style="color: #374151; margin-bottom: 10px;">🏥 Exemplo Prático</h4>
                  <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                    <strong>E. coli em ITU não complicada:</strong>
                  </p>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>✅ <strong>Reportar:</strong> Nitrofurantoína, sulfametoxazol-trimetoprima</li>
                    <li>🔒 <strong>Suprimir:</strong> Ciprofloxacina, ceftriaxona (reservar para casos complicados)</li>
                    <li>📞 <strong>Liberar sob consulta:</strong> Carbapenêmicos, colistina</li>
                  </ul>
                </div>
                
                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                  <h4 style="color: #d97706; margin-bottom: 10px;">🎯 Benefícios do Stewardship</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Redução da pressão seletiva</li>
                    <li>Preservação de antibióticos de amplo espectro</li>
                    <li>Diminuição de resistência bacteriana</li>
                    <li>Redução de custos hospitalares</li>
                    <li>Melhores desfechos clínicos</li>
                  </ul>
                </div>
              `,
              question: {
                text: "O que é 'relato seletivo' e qual é o seu propósito?",
                options: [
                  "Relatar apenas os resultados dos antibióticos mais potentes disponíveis",
                  "Suprimir os resultados de agentes de amplo espectro para orientar a prescrição para agentes mais direcionados",
                  "Liberar os resultados apenas para médicos especialistas em doenças infecciosas"
                ],
                correct: 1,
                explanation: "Relato seletivo é uma estratégia de stewardship que suprime resultados de antibióticos de amplo espectro quando há opções mais direcionadas, promovendo uso racional de antimicrobianos."
              }
            }
          ]
        }
      ]
    }
  }

  // Funções de navegação
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
    
    if (nome && login && senha && senha === confirmarSenha) {
      setUser({ username: login })
      setCurrentView('dashboard')
    }
  }

  const startLesson = (moduleKey, lessonId) => {
    const module = modulesData[moduleKey]
    const lesson = module.lessons.find(l => l.id === lessonId)
    setCurrentModule(moduleKey)
    setCurrentLesson(lesson)
    setCurrentSection(0)
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
    }
  }

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowQuestionFeedback(true)
    
    if (answerIndex === currentQuestion.correct) {
      setUserProgress(prev => ({
        ...prev,
        xp: prev.xp + 25,
        streak: prev.streak + 1
      }))
    }
  }

  const completeLesson = () => {
    setUserProgress(prev => ({
      ...prev,
      xp: prev.xp + currentLesson.xp,
      completedLessons: [...prev.completedLessons, `${currentModule}-${currentLesson.id}`]
    }))
    setCurrentView('dashboard')
  }

  // Componente de Login
  const LoginView = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ color: '#2563eb', fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>🦠 Infecteasy</h1>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>Plataforma de Aprendizado em Microbiologia</p>
        </div>
        
        {currentView === 'login' ? (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Usuário</label>
              <input
                ref={loginUsernameRef}
                type="text"
                placeholder="Digite seu usuário"
                style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
              />
            </div>
            
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Senha</label>
              <input
                ref={loginPasswordRef}
                type="password"
                placeholder="Digite sua senha"
                style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
              />
            </div>
            
            <button
              onClick={handleLogin}
              style={{ width: '100%', background: '#2563eb', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '15px' }}
            >
              Entrar
            </button>
            
            <p style={{ textAlign: 'center', color: '#6b7280' }}>
              Não tem conta? 
              <button 
                onClick={() => setCurrentView('register')}
                style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px' }}
              >
                Cadastre-se
              </button>
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Nome Completo</label>
                <input ref={registerNomeRef} type="text" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>CPF</label>
                <input ref={registerCpfRef} type="text" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Data de Nascimento</label>
                <input ref={registerDataNascimentoRef} type="date" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Telefone</label>
                <input ref={registerTelefoneRef} type="tel" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Email</label>
              <input ref={registerEmailRef} type="email" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Login</label>
                <input ref={registerLoginRef} type="text" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Atividade</label>
                <select ref={registerAtividadeRef} style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }}>
                  <option>Estudante</option>
                  <option>Profissional</option>
                  <option>Professor</option>
                </select>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Senha</label>
                <input ref={registerSenhaRef} type="password" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#374151', fontWeight: '500' }}>Confirmar Senha</label>
                <input ref={registerConfirmarSenhaRef} type="password" style={{ width: '100%', padding: '10px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
            
            <button
              onClick={handleRegister}
              style={{ width: '100%', background: '#059669', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginBottom: '15px' }}
            >
              Cadastrar
            </button>
            
            <p style={{ textAlign: 'center', color: '#6b7280' }}>
              Já tem conta? 
              <button 
                onClick={() => setCurrentView('login')}
                style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', textDecoration: 'underline', marginLeft: '5px' }}
              >
                Faça login
              </button>
            </p>
          </div>
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
          <div>
            <h1 style={{ color: '#2563eb', fontSize: '24px', fontWeight: 'bold', margin: 0 }}>🦠 Infecteasy</h1>
            <p style={{ color: '#64748b', margin: '5px 0 0 0' }}>Olá, {user?.username}!</p>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ background: '#f1f5f9', padding: '10px 15px', borderRadius: '10px' }}>
              <span style={{ color: '#475569', fontSize: '14px' }}>⚡ {userProgress.xp} XP</span>
            </div>
            <div style={{ background: '#fef3c7', padding: '10px 15px', borderRadius: '10px' }}>
              <span style={{ color: '#92400e', fontSize: '14px' }}>🏆 Nível {userProgress.level}</span>
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
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>Módulos de Aprendizado</h2>
          <p style={{ color: '#64748b', fontSize: '18px' }}>Escolha um módulo para começar sua jornada de aprendizado</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
          {Object.entries(modulesData).map(([key, module]) => (
            <div key={key} style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '15px' }}>{module.title}</h3>
              <p style={{ color: '#64748b', marginBottom: '25px', lineHeight: '1.6' }}>{module.description}</p>
              
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: '#475569', fontSize: '14px' }}>Progresso</span>
                  <span style={{ color: '#475569', fontSize: '14px' }}>
                    {userProgress.completedLessons.filter(l => l.startsWith(key)).length}/{module.lessons.length}
                  </span>
                </div>
                <div style={{ background: '#f1f5f9', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      background: '#2563eb', 
                      height: '100%', 
                      width: `${(userProgress.completedLessons.filter(l => l.startsWith(key)).length / module.lessons.length) * 100}%`,
                      transition: 'width 0.3s ease'
                    }}
                  />
                </div>
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
                <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>{currentQuestion.text}</h3>
                
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
