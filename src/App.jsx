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
          duration: "12 min",
          xp: 70,
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
              title: "Ágar Chocolate",
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
          id: 6,
          title: "Testes Bioquímicos Rápidos",
          duration: "10 min",
          xp: 55,
          sections: [
            {
              title: "Teste da Catalase",
              content: `
                <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">💨 Teste da Catalase</h3>
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
            }
          ]
        },
        {
          id: 7,
          title: "Bacilos Gram-Positivos de Importância Clínica",
          duration: "16 min",
          xp: 80,
          sections: [
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
            }
          ]
        },
        {
          id: 8,
          title: "Bactérias Gram-Negativas Relevantes",
          duration: "18 min",
          xp: 85,
          sections: [
            {
              title: "Cocos Gram-Negativos: Neisseria",
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
            }
          ]
        },
        {
          id: 9,
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
          id: 2,
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
                    O exemplo clássico é a resistência à meticilina em <strong>Staphylococcus aureus</strong> (MRSA), 
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
          title: "Quando Realizar o TSA",
          duration: "8 min",
          xp: 40,
          sections: [
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
                    à possibilidade de MRSA.
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
          id: 4,
          title: "Métodos Qualitativos - Disco-Difusão",
          duration: "18 min",
          xp: 90,
          sections: [
            {
              title: "Princípio do Método Kirby-Bauer",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">🎯 Método de Disco-Difusão</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    O método de <strong>disco-difusão (Kirby-Bauer)</strong> é o teste qualitativo mais utilizado 
                    devido à sua simplicidade e padronização. O antimicrobiano difunde do disco através do ágar, 
                    criando um gradiente de concentração. O diâmetro do halo de inibição é inversamente proporcional 
                    à CIM.
                  </p>
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
            {
              title: "Controle de Qualidade",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">✅ Controle de Qualidade</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    O controle de qualidade é essencial para garantir a confiabilidade dos resultados. 
                    Cepas de referência ATCC com perfis de suscetibilidade conhecidos devem ser testadas 
                    regularmente. Os halos devem estar dentro das faixas esperadas estabelecidas pelo CLSI/EUCAST.
                  </p>
                </div>
              `,
              question: {
                text: "Por que o controle de qualidade é crucial no teste de disco-difusão?",
                options: [
                  "Para acelerar o processo de teste.",
                  "Para garantir a confiabilidade e precisão dos resultados usando cepas de referência com perfis conhecidos.",
                  "Para reduzir o custo dos reagentes."
                ],
                correct: 1,
                explanation: "O controle de qualidade com cepas ATCC de referência garante que o sistema de teste está funcionando corretamente, validando a precisão dos resultados antes de reportar os dados clínicos."
              }
            }
          ]
        },
        {
          id: 6,
          title: "Métodos Quantitativos - CIM",
          duration: "16 min",
          xp: 80,
          sections: [
            {
              title: "Concentração Inibitória Mínima",
              content: `
                <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #0369a1; margin-bottom: 15px;">🔢 CIM - Concentração Inibitória Mínima</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    A <strong>CIM</strong> é a menor concentração de um antimicrobiano capaz de inibir o crescimento 
                    visível de uma bactéria após 16-20 horas de incubação. É expressa em mg/L ou μg/mL e fornece 
                    informação quantitativa precisa sobre a suscetibilidade.
                  </p>
                </div>
                
                <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                  <h4 style="color: #059669; margin-bottom: 10px;">💡 Vantagens da CIM</h4>
                  <ul style="font-size: 14px; line-height: 1.5; margin-left: 20px;">
                    <li>Resultado quantitativo preciso</li>
                    <li>Permite ajuste de dose baseado em PK/PD</li>
                    <li>Melhor para infecções graves</li>
                    <li>Padrão-ouro para pesquisa</li>
                  </ul>
                </div>
              `,
              question: {
                text: "O que é a Concentração Inibitória Mínima (CIM)?",
                options: [
                  "O diâmetro do halo de inibição medido no teste de difusão em disco.",
                  "A menor concentração de um agente específico necessária para inibir o crescimento visível de um organismo in vitro.",
                  "A concentração de um antibiótico que é bactericida para o organismo."
                ],
                correct: 1,
                explanation: "A CIM é definida como a menor concentração de um antimicrobiano que inibe completamente o crescimento visível de uma bactéria após incubação padronizada, fornecendo uma medida quantitativa precisa da suscetibilidade."
              }
            },
            {
              title: "Métodos de Determinação da CIM",
              content: `
                <div style="background: #f5f3ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #6d28d9; margin-bottom: 15px;">🧪 Métodos para CIM</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>Diluição em caldo:</strong> Método de referência onde o antimicrobiano é diluído 
                    seriadamente em caldo de cultura. Permite determinação precisa da CIM.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>Diluição em ágar:</strong> Antimicrobiano incorporado ao ágar em diferentes concentrações. 
                    Permite testar múltiplos isolados simultaneamente.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    <strong>E-test (gradiente):</strong> Fita plástica com gradiente de concentração do antimicrobiano. 
                    Combina facilidade do disco-difusão com precisão da CIM.
                  </p>
                </div>
              `,
              question: {
                text: "Como o teste de gradiente antimicrobiano (E-test) determina a CIM?",
                options: [
                  "Pela cor do meio de cultura após a incubação.",
                  "Pela intersecção da zona elíptica de inibição do crescimento com a fita que contém um gradiente de concentração do antimicrobiano.",
                  "Pela ausência de turbidez no tubo com a menor concentração do antibiótico."
                ],
                correct: 1,
                explanation: "No E-test, a CIM é determinada no ponto onde a zona elíptica de inibição intersecta a fita com gradiente de concentração, fornecendo um valor quantitativo direto da concentração inibitória mínima."
              }
            }
          ]
        },
        {
          id: 7,
          title: "Interpretação Clínica dos Resultados",
          duration: "14 min",
          xp: 70,
          sections: [
            {
              title: "Categorias de Interpretação",
              content: `
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #2563eb; margin-bottom: 15px;">📊 Categorias Clínicas</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>Sensível (S):</strong> A concentração do antibiótico que inibe o isolado é geralmente 
                    alcançada com a dose recomendada para o tipo de infecção e organismo infectante.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    <strong>Sensível Dose-Dependente (SDD):</strong> Para atingir a concentração inibitória, 
                    é necessário usar um regime de dosagem que resulte em maior exposição ao medicamento.
                  </p>
                  <p style="font-size: 16px; line-height: 1.6;">
                    <strong>Resistente (R):</strong> A concentração do antibiótico que inibe o isolado não é 
                    alcançada com doses seguras, ou a bactéria possui mecanismos de resistência específicos.
                  </p>
                </div>
              `,
              question: {
                text: "O que indica a categoria 'sensível'?",
                options: [
                  "Que a concentração do antibiótico que inibe o isolado é geralmente alcançada com a dose recomendada.",
                  "Que o antibiótico só funcionará se for usado em doses mais altas que as convencionais.",
                  "Que a eficácia clínica pode ser alcançada apenas se o antibiótico se concentrar no local da infecção."
                ],
                correct: 0,
                explanation: "A categoria 'sensível' indica que as concentrações do antimicrobiano necessárias para inibir o crescimento bacteriano são facilmente alcançadas no local da infecção com as doses padrão recomendadas."
              }
            },
            {
              title: "Correlação PK/PD",
              content: `
                <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #059669; margin-bottom: 15px;">⚖️ Farmacocinética/Farmacodinâmica</h3>
                  <p style="font-size: 16px; line-height: 1.6;">
                    A interpretação dos resultados deve considerar a <strong>farmacocinética</strong> (como o 
                    organismo processa o medicamento) e a <strong>farmacodinâmica</strong> (como o medicamento 
                    afeta a bactéria). Fatores como penetração tecidual, metabolismo e excreção influenciam 
                    a eficácia clínica.
                  </p>
                </div>
              `,
              question: {
                text: "O que significa a categoria 'sensível dose-dependente'?",
                options: [
                  "Que a bactéria é resistente a doses padrão, mas pode ser tratada com qualquer outro antibiótico.",
                  "Que, para atingir a inibição, é necessário um regime de dosagem que resulte em maior exposição ao medicamento.",
                  "Que a resposta ao tratamento é incerta e deve-se usar um agente alternativo."
                ],
                correct: 1,
                explanation: "Sensível dose-dependente indica que a eficácia pode ser alcançada, mas requer otimização da dosagem (doses mais altas, intervalos menores, ou infusão prolongada) para atingir concentrações adequadas no local da infecção."
              }
            }
          ]
        },
        {
          id: 8,
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
                    Isso permite determinação rápida da CIM e interpretação automática.
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
          ]
        },
        {
          id: 9,
          title: "Testes Fenotípicos Especiais",
          duration: "20 min",
          xp: 100,
          sections: [
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
          id: 10,
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
        }
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
              title: "Classificação dos Antibióticos",
              content: `
                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Classes de Antibióticos</h3>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                    Os antibióticos podem ser classificados com base em seu <strong>mecanismo de ação</strong>, 
                    espectro de atividade (amplo ou estreito) e estrutura química. As principais classes incluem 
                    beta-lactâmicos, macrolídeos, quinolonas, aminoglicosídeos e tetraciclinas.
                  </p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: #f59e0b; color: white;">
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Classe</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Exemplos</th>
                      <th style="padding: 8px; border: 1px solid #d1d5db;">Mecanismo</th>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">Beta-lactâmicos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Penicilinas, Cefalosporinas</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Inibição da parede celular</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">Macrolídeos</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Azitromicina, Claritromicina</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Inibição da síntese proteica</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #d1d5db; font-weight: bold;">Quinolonas</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Ciprofloxacino, Levofloxacino</td>
                      <td style="padding: 8px; border: 1px solid #d1d5db;">Inibição da DNA girase</td>
                    </tr>
                  </table>
                </div>
              `,
              question: {
                text: "Qual das seguintes classes de antibióticos NÃO é mencionada como uma das principais?",
                options: [
                  "Beta-lactâmicos",
                  "Macrolídeos",
                  "Antifúngicos",
                  "Quinolonas"
                ],
                correct: 2,
                explanation: "Antifúngicos são uma classe de medicamentos diferente, usados para tratar infecções fúngicas, não bacterianas."
              }
            }
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
                      <li><strong>Celulite purulenta:</strong> Considerar cobertura para MRSA (clindamicina)</li>
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
                    As <strong>infecções do trato urinário (ITU)</strong> são classificadas em 
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
                          <td style="padding: 8px; border: 1px solid #bae6fd;"><strong>ITU não complicada</strong></td>
                          <td style="padding: 8px; border: 1px solid #bae6fd;">Mulheres saudáveis, não gestantes, sem anormalidades urológicas</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border: 1px solid #bae6fd;"><strong>ITU complicada</strong></td>
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
                    A distinção entre ITU complicada e não complicada é crucial, pois determina a duração 
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
                    Algumas populações requerem abordagens específicas no tratamento de ITU, 
                    incluindo <strong>gestantes</strong>, <strong>homens</strong>, <strong>idosos</strong> 
                    e <strong>pacientes com cateter vesical</strong>.
                  </p>
                  
                  <div style="background: #e5e7eb; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1f2937; margin-bottom: 10px;">👶 ITU na Gestação</h4>
                    <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                      Gestantes com ITU devem sempre ser tratadas, mesmo se assintomáticas 
                      (bacteriúria assintomática), devido ao risco de pielonefrite e parto prematuro.
                    </p>
                    <p style="font-size: 14px; line-height: 1.5;">
                      <strong>Opções seguras:</strong> Amoxicilina, Cefalexina, Nitrofurantoína (evitar no 3º trimestre), 
                      Fosfomicina. <strong>Evitar:</strong> Fluoroquinolonas, SMX-TMP (1º trimestre).
                    </p>
                  </div>
                  
                  <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #1e40af; margin-bottom: 10px;">👨 ITU em Homens</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      ITU em homens é sempre considerada complicada. Tratamento deve ser por 
                      <strong>7-14 dias</strong>. Investigar causas subjacentes (hiperplasia prostática, 
                      estenose uretral). Considerar prostatite se sintomas persistentes.
                    </p>
                  </div>
                  
                  <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #92400e; margin-bottom: 10px;">👴 ITU em Idosos</h4>
                    <p style="font-size: 14px; line-height: 1.5;">
                      Bacteriúria assintomática é comum em idosos e <strong>não deve ser tratada</strong> 
                      na ausência de sintomas. Tratar apenas ITU sintomática. Atenção para sintomas 
                      atípicos (confusão mental, quedas).
                    </p>
                  </div>
                  
                  <div style="background: #fce7f3; padding: 15px; border-radius: 8px; margin: 15px 0;">
                    <h4 style="color: #831843; margin-bottom: 10px;">🩺 ITU Associada a Cateter</h4>
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
    }
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
                onClick={() => setCurrentView('dashboard')}
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
