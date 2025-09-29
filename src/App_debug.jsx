import React, { useState, useRef } from 'react'
import './App.css'

function App() {
  // Estados principais
  const [currentView, setCurrentView] = useState('login')
  const [currentModule, setCurrentModule] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showQuestionFeedback, setShowQuestionFeedback] = useState(false)
  
  // Refs para inputs não controlados
  const usernameRef = useRef()
  const passwordRef = useRef()

  // Estado do usuário
  const [userProgress, setUserProgress] = useState({
    xp: 0,
    level: 1,
    streak: 0,
    completedLessons: []
  })

  // Dados dos módulos (apenas microbiologia para debug)
  const modulesData = {
    microbiologia: {
      title: "Fundamentos da Microbiologia",
      description: "Aprenda os conceitos básicos da microbiologia clínica",
      lessons: [
        {
          id: 1,
          title: "Introdução à Coloração de Gram",
          duration: "8 min",
          xp: 50,
          sections: [
            {
              title: "O que é a Coloração de Gram?",
              content: `<div>Conteúdo da seção 1</div>`,
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
              content: `<div>Conteúdo da seção 2</div>`,
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
              title: "Critérios de Qualidade",
              content: `<div>Conteúdo da lição 2</div>`,
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
        }
      ]
    }
  }

  // Funções de navegação
  const startLesson = (moduleKey, lessonId) => {
    console.log('🚀 startLesson chamado:', { moduleKey, lessonId })
    const module = modulesData[moduleKey]
    const lesson = module.lessons.find(l => l.id === lessonId)
    console.log('📚 Lição encontrada:', lesson)
    setCurrentModule(moduleKey)
    setCurrentLesson(lesson)
    setCurrentSection(0)
    setCurrentView('lesson')
    console.log('✅ Estado atualizado')
  }

  const nextSection = () => {
    console.log('➡️ nextSection chamado')
    console.log('📊 Estado atual:', { currentSection, totalSections: currentLesson?.sections?.length })
    if (currentLesson && currentSection < currentLesson.sections.length - 1) {
      setCurrentSection(currentSection + 1)
      setCurrentQuestion(null)
      setSelectedAnswer(null)
      setShowQuestionFeedback(false)
      console.log('✅ Navegou para seção:', currentSection + 1)
    }
  }

  const showQuestion = () => {
    console.log('❓ showQuestion chamado')
    console.log('📊 Estado atual:', { currentLesson: !!currentLesson, currentSection })
    if (currentLesson && currentLesson.sections[currentSection]?.question) {
      const question = currentLesson.sections[currentSection].question
      console.log('🎯 Pergunta encontrada:', question.text)
      setCurrentQuestion(question)
    } else {
      console.log('❌ Nenhuma pergunta encontrada para esta seção')
    }
  }

  const handleAnswerSelect = (answerIndex) => {
    console.log('✋ Resposta selecionada:', answerIndex)
    setSelectedAnswer(answerIndex)
    setShowQuestionFeedback(true)
  }

  // Componente de Login
  const LoginView = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', textAlign: 'center', marginBottom: '30px', color: '#1e293b' }}>
          🧬 Infecteasy
        </h1>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
            Usuário
          </label>
          <input
            ref={usernameRef}
            type="text"
            style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
            placeholder="Digite seu usuário"
          />
        </div>
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
            Senha
          </label>
          <input
            ref={passwordRef}
            type="password"
            style={{ width: '100%', padding: '12px', border: '2px solid #e5e7eb', borderRadius: '8px', fontSize: '16px' }}
            placeholder="Digite sua senha"
          />
        </div>
        <button
          onClick={() => setCurrentView('dashboard')}
          style={{ width: '100%', background: '#059669', color: 'white', padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
        >
          Entrar
        </button>
      </div>
    </div>
  )

  // Componente do Dashboard
  const DashboardView = () => (
    <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b' }}>🧬 Infecteasy</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#059669' }}>{userProgress.xp} XP</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Experiência</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#dc2626' }}>Nível {userProgress.level}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Atual</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gap: '30px' }}>
          {Object.entries(modulesData).map(([moduleKey, module]) => (
            <div key={moduleKey} style={{ background: 'white', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '8px' }}>{module.title}</h2>
              <p style={{ color: '#64748b', marginBottom: '20px' }}>{module.description}</p>
              
              <div style={{ display: 'grid', gap: '12px' }}>
                {module.lessons.map((lesson) => {
                  const isCompleted = userProgress.completedLessons.includes(`${moduleKey}-${lesson.id}`)
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => startLesson(moduleKey, lesson.id)}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '16px 20px',
                        background: isCompleted ? '#f0f9ff' : '#f8fafc',
                        border: `2px solid ${isCompleted ? '#2563eb' : '#e2e8f0'}`,
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
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

    console.log('🎨 Renderizando LessonView')
    console.log('📊 Estado:', { 
      lessonTitle: currentLesson.title, 
      sectionIndex: currentSection, 
      sectionTitle: section?.title,
      hasQuestion: !!section?.question,
      currentQuestionText: currentQuestion?.text
    })

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
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', color: '#64748b' }}>{currentLesson.duration}</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#059669' }}>{currentLesson.xp} XP</div>
            </div>
          </div>
        </div>

        {/* Conteúdo da Seção */}
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '40px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>

          {/* Botão para mostrar pergunta */}
          {!currentQuestion && section.question && (
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <button
                onClick={showQuestion}
                style={{ background: '#2563eb', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}
              >
                Responder Pergunta
              </button>
            </div>
          )}

          {/* Pergunta */}
          {currentQuestion && (
            <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '20px' }}>
                DEBUG: {currentQuestion.text}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showQuestionFeedback}
                    style={{
                      padding: '16px',
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
                  onClick={() => {
                    setUserProgress(prev => ({
                      ...prev,
                      xp: prev.xp + currentLesson.xp,
                      completedLessons: [...prev.completedLessons, `${currentModule}-${currentLesson.id}`]
                    }))
                    setCurrentView('dashboard')
                  }}
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
                  Concluir Lição ✅
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Renderização principal
  if (currentView === 'login') return <LoginView />
  if (currentView === 'dashboard') return <DashboardView />
  if (currentView === 'lesson') return <LessonView />

  return null
}

export default App
