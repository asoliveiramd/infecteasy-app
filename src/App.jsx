import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // Estados principais
  const [currentView, setCurrentView] = useState('login')
  const [currentUser, setCurrentUser] = useState(null)
  const [currentModule, setCurrentModule] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [message, setMessage] = useState('')

  // Refs para inputs não controlados (SOLUÇÃO RADICAL)
  const loginUsernameRef = useRef(null)
  const loginPasswordRef = useRef(null)
  const registerNomeRef = useRef(null)
  const registerCpfRef = useRef(null)
  const registerDataNascimentoRef = useRef(null)
  const registerTelefoneRef = useRef(null)
  const registerEmailRef = useRef(null)
  const registerLoginRef = useRef(null)
  const registerAtividadeProfissionalRef = useRef(null)
  const registerSenhaRef = useRef(null)
  const registerConfirmarSenhaRef = useRef(null)

  // Carregar usuário do localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      const user = JSON.parse(savedUser)
      setCurrentUser(user)
      setCurrentView('dashboard')
    }
  }, [])

  // Dados dos módulos
  const modules = {
    infectologia: {
      id: 'infectologia',
      title: 'Fundamentos da Infectologia',
      description: 'Conceitos básicos e fundamentais da infectologia clínica',
      lessons: [
        {
          id: 'gram',
          title: 'O Método de Gram na Prática',
          duration: '10 min',
          xp: 50,
          sections: [
            {
              title: 'Introdução ao Método de Gram',
              content: `O método de coloração de Gram é uma das técnicas mais fundamentais em microbiologia clínica. Desenvolvido por Hans Christian Gram em 1884, este método permite a classificação inicial das bactérias em dois grandes grupos: Gram-positivas e Gram-negativas.

Esta diferenciação é crucial para:
- Orientação terapêutica inicial
- Compreensão da patogênese
- Seleção de antibióticos apropriados`
            },
            {
              title: 'Fundamentos da Técnica',
              content: `A coloração de Gram baseia-se nas diferenças estruturais da parede celular bacteriana:

**Bactérias Gram-positivas:**
- Parede celular espessa (20-80 nm)
- Rica em peptidoglicano
- Retém o corante primário (cristal violeta)
- Aparecem roxas/azuis ao microscópio

**Bactérias Gram-negativas:**
- Parede celular fina (5-10 nm)
- Membrana externa adicional
- Perdem o corante primário durante a descoloração
- Coram-se com safranina (rosa/vermelha)`
            },
            {
              title: 'Procedimento Passo a Passo',
              content: `**Etapas da Coloração de Gram:**

1. **Fixação:** Fixar o esfregaço pelo calor
2. **Corante primário:** Cristal violeta (1 minuto)
3. **Mordente:** Lugol (1 minuto)  
4. **Descoloração:** Álcool-acetona (10-15 segundos)
5. **Corante secundário:** Safranina (1 minuto)

**Dica Clínica:** O tempo de descoloração é crítico - muito pouco não remove o corante das Gram-negativas, muito tempo pode descolorir as Gram-positivas.`
            },
            {
              title: 'Interpretação Clínica',
              content: `**Correlação Clínica:**

A identificação de bactérias Gram-positivas ou Gram-negativas orienta decisões terapêuticas imediatas:

**Cocos Gram-positivos em cadeia:** Suspeitar de Streptococcus
**Cocos Gram-positivos em cachos:** Suspeitar de Staphylococcus  
**Bacilos Gram-negativos:** Considerar enterobactérias
**Diplococos Gram-negativos:** Suspeitar de Neisseria

Esta informação permite o início de terapia empírica enquanto aguarda-se a cultura e antibiograma.`
            },
            {
              title: 'Limitações e Cuidados',
              content: `**Limitações do Método:**

- Algumas bactérias são Gram-variáveis
- Bactérias muito jovens ou muito velhas podem corar inadequadamente
- Mycobacterium não cora pelo método de Gram
- Alguns microrganismos requerem colorações especiais

**Controle de Qualidade:**
- Usar controles positivos e negativos
- Verificar a qualidade dos reagentes
- Observar a morfologia além da coloração

**Dica Prática:** Sempre correlacionar os achados microscópicos com o quadro clínico do paciente.`
            }
          ]
        }
      ]
    },
    antibiograma: {
      id: 'antibiograma',
      title: 'Interpretação de Antibiograma',
      description: 'Aprenda a interpretar testes de sensibilidade antimicrobiana',
      lessons: [
        {
          id: 'conceitos',
          title: 'Conceitos Fundamentais',
          duration: '12 min',
          xp: 75,
          sections: [
            {
              title: 'Introdução ao Antibiograma',
              content: `O antibiograma é um teste laboratorial essencial que determina a sensibilidade de microrganismos a diferentes antimicrobianos. Este teste é fundamental para:

- Orientar a terapia antimicrobiana específica
- Reduzir o uso inadequado de antibióticos
- Minimizar o desenvolvimento de resistência
- Otimizar resultados clínicos`
            },
            {
              title: 'Métodos de Teste',
              content: `**Principais Métodos:**

**1. Disco-difusão (Kirby-Bauer):**
- Método qualitativo
- Baseado em halos de inibição
- Padronizado pelo CLSI/EUCAST

**2. Microdiluição em caldo:**
- Determina CIM (Concentração Inibitória Mínima)
- Método quantitativo mais preciso
- Padrão-ouro para testes de sensibilidade

**3. E-test:**
- Combina disco-difusão com determinação de CIM
- Útil para organismos fastidiosos`
            },
            {
              title: 'Interpretação dos Resultados',
              content: `**Categorias de Interpretação:**

**Sensível (S):** O microrganismo é inibido pelas concentrações usuais do antimicrobiano

**Intermediário (I):** Sensibilidade reduzida; pode ser eficaz com doses aumentadas ou em sítios de concentração elevada

**Resistente (R):** O microrganismo não é inibido pelas concentrações usuais do antimicrobiano

**Pontos de Corte:** Valores estabelecidos pelo CLSI/EUCAST baseados em dados farmacocinéticos, farmacodinâmicos e desfechos clínicos.`
            }
          ]
        }
      ]
    }
  }

  // Funções de autenticação usando refs (inputs não controlados)
  const handleLogin = () => {
    const username = loginUsernameRef.current?.value || ''
    const password = loginPasswordRef.current?.value || ''
    
    if (username === 'demo' && password === 'demo') {
      const user = {
        id: 'demo123',
        nome: 'Usuário Demo',
        login: username,
        xp: 1000,
        nivel: 2,
        sequencia: 5,
        licoesCompletas: [],
        progresso: {}
      }
      setCurrentUser(user)
      localStorage.setItem('currentUser', JSON.stringify(user))
      setCurrentView('dashboard')
      setMessage('Login realizado com sucesso!')
    } else {
      setMessage('Credenciais inválidas')
    }
  }

  const handleRegister = () => {
    const nome = registerNomeRef.current?.value || ''
    const cpf = registerCpfRef.current?.value || ''
    const login = registerLoginRef.current?.value || ''
    const senha = registerSenhaRef.current?.value || ''
    const confirmarSenha = registerConfirmarSenhaRef.current?.value || ''
    
    if (!nome || !cpf || !login || !senha) {
      setMessage('Preencha todos os campos obrigatórios')
      return
    }
    
    if (senha !== confirmarSenha) {
      setMessage('Senhas não coincidem')
      return
    }

    const newUser = {
      id: Date.now().toString(),
      nome: nome,
      cpf: cpf,
      dataNascimento: registerDataNascimentoRef.current?.value || '',
      telefone: registerTelefoneRef.current?.value || '',
      email: registerEmailRef.current?.value || '',
      login: login,
      atividadeProfissional: registerAtividadeProfissionalRef.current?.value || '',
      senha: senha,
      xp: 0,
      nivel: 1,
      sequencia: 0,
      licoesCompletas: [],
      progresso: {}
    }

    setCurrentUser(newUser)
    localStorage.setItem('currentUser', JSON.stringify(newUser))
    setCurrentView('dashboard')
    setMessage('Conta criada com sucesso!')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
    setCurrentView('login')
    setMessage('')
    // Limpar campos
    if (loginUsernameRef.current) loginUsernameRef.current.value = ''
    if (loginPasswordRef.current) loginPasswordRef.current.value = ''
  }

  // Funções de navegação
  const openModule = (moduleId) => {
    const module = modules[moduleId]
    if (module) {
      setCurrentModule(module)
      setCurrentView('module')
    }
  }

  const openLesson = (lesson) => {
    setCurrentLesson(lesson)
    setCurrentSection(0)
    setCurrentView('lesson')
  }

  const nextSection = () => {
    if (currentLesson && currentSection < currentLesson.sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const completeLesson = () => {
    if (currentUser && currentLesson) {
      const updatedUser = {
        ...currentUser,
        xp: currentUser.xp + currentLesson.xp,
        licoesCompletas: [...(currentUser.licoesCompletas || []), currentLesson.id]
      }
      setCurrentUser(updatedUser)
      localStorage.setItem('currentUser', JSON.stringify(updatedUser))
      setCurrentView('dashboard')
      setMessage(`Lição concluída! +${currentLesson.xp} XP`)
    }
  }

  // Estilos CSS inline
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '2rem',
      maxWidth: '400px',
      margin: '0 auto'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '16px',
      marginBottom: '16px',
      outline: 'none',
      transition: 'border-color 0.2s',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginBottom: '12px',
      transition: 'background-color 0.2s'
    },
    buttonSecondary: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      border: '2px solid #3b82f6'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '0.5rem'
    },
    subtitle: {
      color: '#6b7280',
      fontSize: '1rem'
    },
    logo: {
      width: '48px',
      height: '48px',
      backgroundColor: '#3b82f6',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem auto',
      color: 'white',
      fontSize: '24px'
    },
    message: {
      padding: '12px 16px',
      backgroundColor: '#fef3c7',
      border: '1px solid #f59e0b',
      borderRadius: '8px',
      marginBottom: '16px',
      color: '#92400e'
    },
    dashboardContainer: {
      minHeight: '100vh',
      backgroundColor: '#f9fafb'
    },
    dashboardHeader: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dashboardContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginBottom: '2rem'
    },
    statCard: {
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      textAlign: 'center'
    },
    modulesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    moduleCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '1rem'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#3b82f6',
      transition: 'width 0.3s ease'
    }
  }

  // Componente de Login com INPUTS NÃO CONTROLADOS
  const LoginView = () => (
    <div style={{...styles.container, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>🩺</div>
          <h1 style={styles.title}>Infecteasy</h1>
          <p style={styles.subtitle}>Acesse o aplicativo de infectologia e doenças infecciosas</p>
        </div>
        
        {message && (
          <div style={styles.message}>{message}</div>
        )}
        
        <div>
          <input
            ref={loginUsernameRef}
            style={styles.input}
            type="text"
            placeholder="Login"
            defaultValue=""
          />
          <input
            ref={loginPasswordRef}
            style={styles.input}
            type="password"
            placeholder="Senha"
            defaultValue=""
          />
          <button style={styles.button} onClick={handleLogin}>
            Entrar
          </button>
          <button 
            style={{...styles.button, ...styles.buttonSecondary}} 
            onClick={() => setCurrentView('register')}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </div>
  )

  // Componente de Registro com INPUTS NÃO CONTROLADOS
  const RegisterView = () => (
    <div style={{...styles.container, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'}}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>🩺</div>
          <h1 style={styles.title}>Criar Conta</h1>
          <p style={styles.subtitle}>Bem-vindo ao Infecteasy!</p>
        </div>
        
        {message && (
          <div style={styles.message}>{message}</div>
        )}
        
        <div>
          <input
            ref={registerNomeRef}
            style={styles.input}
            type="text"
            placeholder="Nome Completo *"
            defaultValue=""
          />
          <input
            ref={registerCpfRef}
            style={styles.input}
            type="text"
            placeholder="CPF *"
            defaultValue=""
          />
          <input
            ref={registerDataNascimentoRef}
            style={styles.input}
            type="date"
            placeholder="Data de Nascimento"
            defaultValue=""
          />
          <input
            ref={registerTelefoneRef}
            style={styles.input}
            type="tel"
            placeholder="Telefone"
            defaultValue=""
          />
          <input
            ref={registerEmailRef}
            style={styles.input}
            type="email"
            placeholder="Email"
            defaultValue=""
          />
          <input
            ref={registerLoginRef}
            style={styles.input}
            type="text"
            placeholder="Login *"
            defaultValue=""
          />
          <select
            ref={registerAtividadeProfissionalRef}
            style={styles.input}
            defaultValue=""
          >
            <option value="">Atividade Profissional *</option>
            <option value="medico">Médico</option>
            <option value="enfermeiro">Enfermeiro</option>
            <option value="farmaceutico">Farmacêutico</option>
            <option value="biomedico">Biomédico</option>
            <option value="estudante">Estudante</option>
            <option value="outro">Outro</option>
          </select>
          <input
            ref={registerSenhaRef}
            style={styles.input}
            type="password"
            placeholder="Senha *"
            defaultValue=""
          />
          <input
            ref={registerConfirmarSenhaRef}
            style={styles.input}
            type="password"
            placeholder="Confirmar Senha *"
            defaultValue=""
          />
          <button style={styles.button} onClick={handleRegister}>
            Criar Conta
          </button>
          <button 
            style={{...styles.button, ...styles.buttonSecondary}} 
            onClick={() => setCurrentView('login')}
          >
            Voltar ao Login
          </button>
        </div>
      </div>
    </div>
  )

  // Componente de Dashboard
  const DashboardView = () => (
    <div style={styles.dashboardContainer}>
      <header style={styles.dashboardHeader}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{...styles.logo, width: '32px', height: '32px', marginRight: '12px', margin: '0 12px 0 0'}}>🩺</div>
          <div>
            <h1 style={{margin: '0', fontSize: '1.25rem', fontWeight: '600'}}>Infecteasy</h1>
            <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>Infectologia e Doenças Infecciosas</p>
          </div>
        </div>
        <div style={{display: 'flex', gap: '12px'}}>
          <button 
            style={{...styles.button, width: 'auto', marginBottom: '0', padding: '8px 16px'}}
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
      </header>

      <main style={styles.dashboardContent}>
        {message && (
          <div style={{...styles.message, marginBottom: '2rem'}}>{message}</div>
        )}

        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🏆</div>
            <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>Nível</p>
            <p style={{margin: '0', fontSize: '2rem', fontWeight: 'bold'}}>{currentUser?.nivel || 1}</p>
          </div>
          
          <div style={styles.statCard}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📚</div>
            <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>XP Total</p>
            <p style={{margin: '0', fontSize: '2rem', fontWeight: 'bold'}}>{currentUser?.xp || 0}</p>
          </div>
          
          <div style={styles.statCard}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>📅</div>
            <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>Sequência</p>
            <p style={{margin: '0', fontSize: '2rem', fontWeight: 'bold'}}>{currentUser?.sequencia || 0} dias</p>
          </div>
          
          <div style={styles.statCard}>
            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>👤</div>
            <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>Lições</p>
            <p style={{margin: '0', fontSize: '2rem', fontWeight: 'bold'}}>{currentUser?.licoesCompletas?.length || 0}</p>
          </div>
        </div>

        <div style={styles.modulesGrid}>
          <div style={styles.moduleCard}>
            <h3 style={{margin: '0 0 1rem 0', display: 'flex', alignItems: 'center'}}>
              📚 Fundamentos da Infectologia
            </h3>
            <p style={{margin: '0 0 1rem 0', color: '#6b7280'}}>
              Conceitos básicos e fundamentais da infectologia clínica
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '1rem'}}>
              <span>1 lições</span>
              <span>0% concluído</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: '0%'}}></div>
            </div>
            <button 
              style={styles.button}
              onClick={() => openModule('infectologia')}
            >
              Continuar
            </button>
          </div>

          <div style={styles.moduleCard}>
            <h3 style={{margin: '0 0 1rem 0', display: 'flex', alignItems: 'center'}}>
              📊 Interpretação de Antibiograma
            </h3>
            <p style={{margin: '0 0 1rem 0', color: '#6b7280'}}>
              Aprenda a interpretar testes de sensibilidade antimicrobiana
            </p>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '1rem'}}>
              <span>1 lições</span>
              <span>0% concluído</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: '0%'}}></div>
            </div>
            <button 
              style={styles.button}
              onClick={() => openModule('antibiograma')}
            >
              Continuar
            </button>
          </div>
        </div>
      </main>
    </div>
  )

  // Componente de Módulo
  const ModuleView = () => (
    <div style={styles.dashboardContainer}>
      <header style={styles.dashboardHeader}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button 
            style={{...styles.button, width: 'auto', marginBottom: '0', padding: '8px 16px', marginRight: '16px'}}
            onClick={() => setCurrentView('dashboard')}
          >
            ← Voltar
          </button>
          <div>
            <h1 style={{margin: '0', fontSize: '1.25rem', fontWeight: '600'}}>{currentModule?.title}</h1>
            <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>{currentModule?.description}</p>
          </div>
        </div>
      </header>

      <main style={styles.dashboardContent}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          {currentModule?.lessons?.map((lesson, index) => (
            <div key={lesson.id} style={styles.moduleCard}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem'}}>
                <div>
                  <h3 style={{margin: '0 0 0.5rem 0'}}>{lesson.title}</h3>
                  <p style={{margin: '0', color: '#6b7280', fontSize: '0.875rem'}}>
                    {lesson.duration} • {lesson.xp} XP
                  </p>
                </div>
                <span style={{
                  padding: '4px 12px',
                  backgroundColor: currentUser?.licoesCompletas?.includes(lesson.id) ? '#dcfce7' : '#f3f4f6',
                  color: currentUser?.licoesCompletas?.includes(lesson.id) ? '#166534' : '#374151',
                  borderRadius: '16px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {currentUser?.licoesCompletas?.includes(lesson.id) ? 'Concluída' : 'Disponível'}
                </span>
              </div>
              <button 
                style={styles.button}
                onClick={() => openLesson(lesson)}
              >
                {currentUser?.licoesCompletas?.includes(lesson.id) ? 'Revisar' : 'Iniciar'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )

  // Componente de Lição
  const LessonView = () => {
    const currentSectionData = currentLesson?.sections[currentSection]
    const isLastSection = currentSection === currentLesson?.sections.length - 1
    const progress = ((currentSection + 1) / currentLesson?.sections.length) * 100

    return (
      <div style={styles.dashboardContainer}>
        <header style={styles.dashboardHeader}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <button 
              style={{...styles.button, width: 'auto', marginBottom: '0', padding: '8px 16px', marginRight: '16px'}}
              onClick={() => setCurrentView('module')}
            >
              ← Voltar
            </button>
            <div>
              <h1 style={{margin: '0', fontSize: '1.25rem', fontWeight: '600'}}>{currentLesson?.title}</h1>
              <p style={{margin: '0', fontSize: '0.875rem', color: '#6b7280'}}>
                Seção {currentSection + 1} de {currentLesson?.sections.length} • {currentLesson?.xp} XP
              </p>
            </div>
          </div>
        </header>

        <main style={styles.dashboardContent}>
          <div style={{marginBottom: '2rem'}}>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${progress}%`}}></div>
            </div>
          </div>

          <div style={styles.moduleCard}>
            <h2 style={{margin: '0 0 1.5rem 0'}}>{currentSectionData?.title}</h2>
            <div style={{lineHeight: '1.7', color: '#374151'}}>
              {currentSectionData?.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <div key={index} style={{
                      backgroundColor: '#eff6ff',
                      borderLeft: '4px solid #3b82f6',
                      padding: '1rem',
                      margin: '1rem 0',
                      borderRadius: '0 8px 8px 0'
                    }}>
                      <h4 style={{margin: '0 0 0.5rem 0', color: '#1e40af', fontWeight: '600'}}>
                        {paragraph.replace(/\*\*/g, '')}
                      </h4>
                    </div>
                  )
                }
                return (
                  <p key={index} style={{margin: '0 0 1rem 0'}}>
                    {paragraph.split('**').map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                )
              })}
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
            <button 
              style={{
                ...styles.button,
                ...styles.buttonSecondary,
                width: 'auto',
                padding: '12px 24px',
                opacity: currentSection === 0 ? 0.5 : 1,
                cursor: currentSection === 0 ? 'not-allowed' : 'pointer'
              }}
              onClick={prevSection}
              disabled={currentSection === 0}
            >
              ← Anterior
            </button>
            
            {isLastSection ? (
              <button 
                style={{...styles.button, width: 'auto', padding: '12px 24px'}}
                onClick={completeLesson}
              >
                Concluir Lição
              </button>
            ) : (
              <button 
                style={{...styles.button, width: 'auto', padding: '12px 24px'}}
                onClick={nextSection}
              >
                Próximo →
              </button>
            )}
          </div>
        </main>
      </div>
    )
  }

  // Renderização condicional
  switch (currentView) {
    case 'register':
      return <RegisterView />
    case 'dashboard':
      return <DashboardView />
    case 'module':
      return <ModuleView />
    case 'lesson':
      return <LessonView />
    default:
      return <LoginView />
  }
}

export default App
