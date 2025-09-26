import React, { useState, useEffect } from 'react'
import './App.css'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Progress } from './components/ui/progress'
import { Badge } from './components/ui/badge'
import { Eye, EyeOff, Settings, LogOut, ArrowLeft, ArrowRight, BookOpen, Trophy, Calendar, User, Phone, Mail, Lock, Stethoscope } from 'lucide-react'
import Glossary from './components/Glossary'

function App() {
  // Estados principais
  const [currentUser, setCurrentUser] = useState(null)
  const [authView, setAuthView] = useState('login')
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [currentModule, setCurrentModule] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)

  // Estados de formulários - SOLUÇÃO SIMPLES: Estados separados para cada campo
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  
  const [registerNome, setRegisterNome] = useState('')
  const [registerCpf, setRegisterCpf] = useState('')
  const [registerDataNascimento, setRegisterDataNascimento] = useState('')
  const [registerTelefone, setRegisterTelefone] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerLogin, setRegisterLogin] = useState('')
  const [registerAtividadeProfissional, setRegisterAtividadeProfissional] = useState('')
  const [registerSenha, setRegisterSenha] = useState('')
  const [registerConfirmarSenha, setRegisterConfirmarSenha] = useState('')
  
  const [recoveryEmail, setRecoveryEmail] = useState('')
  
  const [editNome, setEditNome] = useState('')
  const [editCpf, setEditCpf] = useState('')
  const [editDataNascimento, setEditDataNascimento] = useState('')
  const [editTelefone, setEditTelefone] = useState('')
  const [editEmail, setEditEmail] = useState('')
  
  const [passwordSenhaAtual, setPasswordSenhaAtual] = useState('')
  const [passwordNovaSenha, setPasswordNovaSenha] = useState('')
  const [passwordConfirmarNovaSenha, setPasswordConfirmarNovaSenha] = useState('')

  // Estados de visibilidade
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)
  const [editMode, setEditMode] = useState(false)

  // Funções de formatação
  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '')
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  const formatTelefone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }

  // Handlers para CPF e Telefone com formatação
  const handleCpfChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setRegisterCpf(formatted)
  }

  const handleTelefoneChange = (e) => {
    const formatted = formatTelefone(e.target.value)
    setRegisterTelefone(formatted)
  }

  // Carregar usuário do localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Erro ao carregar usuário:', error)
        localStorage.removeItem('currentUser')
      }
    }
  }, [])

  // Funções de autenticação
  const handleLogin = () => {
    if (!loginUsername || !loginPassword) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.login === loginUsername && u.senha === loginPassword)

    if (user) {
      setCurrentUser(user)
      localStorage.setItem('currentUser', JSON.stringify(user))
      setLoginUsername('')
      setLoginPassword('')
    } else {
      alert('Login ou senha incorretos.')
    }
  }

  const handleRegister = () => {
    // Validações
    if (!registerNome || !registerCpf || !registerDataNascimento || 
        !registerTelefone || !registerEmail || !registerLogin || 
        !registerAtividadeProfissional || !registerSenha || !registerConfirmarSenha) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    if (registerSenha !== registerConfirmarSenha) {
      alert('As senhas não coincidem.')
      return
    }

    if (registerSenha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    
    if (users.some(u => u.login === registerLogin)) {
      alert('Este login já está em uso.')
      return
    }

    if (users.some(u => u.email === registerEmail)) {
      alert('Este email já está cadastrado.')
      return
    }

    const newUser = {
      id: Date.now(),
      nome: registerNome,
      cpf: registerCpf,
      dataNascimento: registerDataNascimento,
      telefone: registerTelefone,
      email: registerEmail,
      login: registerLogin,
      atividadeProfissional: registerAtividadeProfissional,
      senha: registerSenha,
      dataCadastro: new Date().toISOString()
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    
    alert('Cadastro realizado com sucesso! Faça login para continuar.')
    setAuthView('login')
    
    // Limpar todos os campos
    setRegisterNome('')
    setRegisterCpf('')
    setRegisterDataNascimento('')
    setRegisterTelefone('')
    setRegisterEmail('')
    setRegisterLogin('')
    setRegisterAtividadeProfissional('')
    setRegisterSenha('')
    setRegisterConfirmarSenha('')
  }

  const handlePasswordRecovery = () => {
    if (!recoveryEmail) {
      alert('Por favor, digite seu email.')
      return
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(u => u.email === recoveryEmail)

    if (user) {
      alert(`Instruções de recuperação enviadas para ${recoveryEmail}`)
      setRecoveryEmail('')
      setShowPasswordRecovery(false)
    } else {
      alert('Email não encontrado.')
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('currentUser')
    setCurrentView('home')
    setShowSettings(false)
  }

  // Dados dos módulos e lições
  const modules = [
    {
      id: 1,
      title: "Fundamentos da Infectologia",
      description: "Conceitos básicos e fundamentais da infectologia clínica",
      lessons: [
        {
          id: 1,
          title: "O Método de Gram na Prática",
          duration: "10 min",
          xp: 50,
          sections: [
            {
              title: "Introdução ao Método de Gram",
              content: `O método de coloração de Gram é uma das técnicas mais importantes na microbiologia clínica. Desenvolvido por Hans Christian Gram em 1884, este método permite a classificação inicial das bactérias em dois grandes grupos: Gram-positivas e Gram-negativas.

Esta diferenciação é fundamental para:
- Orientação terapêutica inicial
- Seleção de antibióticos apropriados
- Compreensão da patogênese
- Interpretação de resultados de cultura`,
              clinicalTip: "A coloração de Gram deve ser sempre o primeiro passo na identificação bacteriana, fornecendo informações cruciais em minutos."
            },
            {
              title: "Procedimento de Coloração",
              content: `O procedimento envolve quatro etapas principais:

**1. Coloração Primária (Cristal Violeta)**
- Todas as bactérias ficam roxas
- Tempo: 1 minuto

**2. Mordente (Lugol)**
- Fixa o corante nas células
- Tempo: 1 minuto

**3. Descoloração (Álcool-Acetona)**
- Remove o corante das Gram-negativas
- Tempo: 10-30 segundos (crítico!)

**4. Coloração Secundária (Safranina)**
- Cora as Gram-negativas de rosa/vermelho
- Tempo: 1 minuto`,
              clinicalTip: "O tempo de descoloração é crítico - muito pouco pode resultar em falsos Gram-positivos, muito pode causar falsos Gram-negativos."
            },
            {
              title: "Interpretação dos Resultados",
              content: `**Bactérias Gram-Positivas (Roxas/Azuis):**
- Parede celular espessa com peptidoglicano
- Exemplos: Staphylococcus, Streptococcus, Enterococcus
- Geralmente sensíveis a penicilinas

**Bactérias Gram-Negativas (Rosa/Vermelhas):**
- Parede celular fina, membrana externa
- Exemplos: E. coli, Klebsiella, Pseudomonas
- Resistência natural a alguns antibióticos

**Morfologia Associada:**
- Cocos: esféricos
- Bacilos: bastonetes
- Arranjo: isolados, pares, cadeias, cachos`,
              clinicalTip: "Sempre correlacione a morfologia com a coloração - cocos Gram-positivos em cachos sugerem Staphylococcus."
            },
            {
              title: "Aplicações Clínicas",
              content: `**Orientação Terapêutica Empírica:**

*Cocos Gram-positivos:*
- Pneumonia: Penicilina G ou Amoxicilina
- Infecção de pele: Cefalexina ou Clindamicina

*Bacilos Gram-negativos:*
- ITU: Ciprofloxacino ou Nitrofurantoína
- Sepse: Ceftriaxona ou Piperacilina-Tazobactam

**Limitações:**
- Não identifica espécie específica
- Algumas bactérias são Gram-variáveis
- Qualidade da amostra afeta resultado`,
              clinicalTip: "Use sempre em conjunto com dados clínicos - a coloração de Gram orienta, mas não substitui a cultura e antibiograma."
            },
            {
              title: "Controle de Qualidade",
              content: `**Controles Diários:**
- Gram-positivo: Staphylococcus epidermidis
- Gram-negativo: Escherichia coli

**Critérios de Qualidade:**
- Coloração uniforme
- Contraste adequado entre Gram+ e Gram-
- Ausência de precipitados
- Morfologia bacteriana preservada

**Causas de Erro:**
- Reagentes vencidos ou contaminados
- Tempos inadequados de coloração
- Fixação inadequada da lâmina
- Espessura inadequada do esfregaço`,
              clinicalTip: "Sempre inclua controles positivos e negativos - a qualidade da coloração de Gram impacta diretamente na conduta clínica."
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Interpretação de Antibiograma",
      description: "Aprenda a interpretar testes de sensibilidade antimicrobiana",
      lessons: [
        {
          id: 1,
          title: "Fundamentos do Antibiograma",
          duration: "15 min",
          xp: 75,
          sections: [
            {
              title: "Introdução ao Antibiograma",
              content: `O antibiograma é um teste laboratorial que determina a sensibilidade de bactérias a diferentes antibióticos. É essencial para:

- Seleção da terapia antimicrobiana adequada
- Redução da resistência bacteriana
- Otimização do tratamento
- Melhoria dos desfechos clínicos

**Métodos Principais:**
- Disco-difusão (Kirby-Bauer)
- Microdiluição em caldo
- E-test (gradiente de concentração)`,
              clinicalTip: "O antibiograma deve sempre ser interpretado considerando o sítio de infecção e as características do paciente."
            }
          ]
        }
      ]
    }
  ]

  // Dados de progresso do usuário
  const userProgress = {
    level: 2,
    xp: 965,
    streak: 5,
    completedLessons: []
  }

  // Componente de Login
  const LoginView = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Infecteasy</CardTitle>
          <p className="text-gray-600">Acesse o aplicativo de infectologia e doenças infecciosas</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Login"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <Button onClick={handleLogin} className="w-full">
            Entrar
          </Button>
          <div className="text-center space-y-2">
            <Button
              variant="link"
              onClick={() => setShowPasswordRecovery(true)}
              className="text-sm text-blue-600"
            >
              Esqueci minha senha
            </Button>
            <div className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Button
                variant="link"
                onClick={() => setAuthView('register')}
                className="text-blue-600 p-0 h-auto font-normal"
              >
                Cadastre-se
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Componente de Registro
  const RegisterView = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Criar Conta</CardTitle>
          <p className="text-gray-600">Bem-vindo ao Infecteasy!</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Nome Completo *"
            value={registerNome}
            onChange={(e) => setRegisterNome(e.target.value)}
          />
          <Input
            placeholder="CPF *"
            value={registerCpf}
            onChange={handleCpfChange}
            maxLength={14}
          />
          <Input
            type="date"
            placeholder="Data de Nascimento *"
            value={registerDataNascimento}
            onChange={(e) => setRegisterDataNascimento(e.target.value)}
          />
          <Input
            placeholder="Telefone *"
            value={registerTelefone}
            onChange={handleTelefoneChange}
            maxLength={15}
          />
          <Input
            type="email"
            placeholder="Email *"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <Input
            placeholder="Login *"
            value={registerLogin}
            onChange={(e) => setRegisterLogin(e.target.value)}
          />
          <Select value={registerAtividadeProfissional} onValueChange={setRegisterAtividadeProfissional}>
            <SelectTrigger>
              <SelectValue placeholder="Atividade Profissional *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="medico">Médico</SelectItem>
              <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
              <SelectItem value="farmaceutico">Farmacêutico</SelectItem>
              <SelectItem value="biomedico">Biomédico</SelectItem>
              <SelectItem value="estudante-medicina">Estudante de Medicina</SelectItem>
              <SelectItem value="estudante-enfermagem">Estudante de Enfermagem</SelectItem>
              <SelectItem value="residente">Residente</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Senha *"
              value={registerSenha}
              onChange={(e) => setRegisterSenha(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <div className="relative">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirmar Senha *"
              value={registerConfirmarSenha}
              onChange={(e) => setRegisterConfirmarSenha(e.target.value)}
              className="pr-10"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <Button onClick={handleRegister} className="w-full">
            Criar Conta
          </Button>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Já tem uma conta?{' '}
              <Button
                variant="link"
                onClick={() => setAuthView('login')}
                className="text-blue-600 p-0 h-auto font-normal"
              >
                Faça login
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Componente de Recuperação de Senha
  const PasswordRecoveryView = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Recuperar Senha</CardTitle>
          <p className="text-gray-600">Digite seu email para receber instruções</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={recoveryEmail}
            onChange={(e) => setRecoveryEmail(e.target.value)}
          />
          <Button onClick={handlePasswordRecovery} className="w-full">
            Enviar Instruções
          </Button>
          <div className="text-center">
            <Button
              variant="link"
              onClick={() => setShowPasswordRecovery(false)}
              className="text-blue-600"
            >
              Voltar ao login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  // Componente principal da tela inicial
  const HomeView = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Infecteasy</h1>
                <p className="text-sm text-gray-600">Infectologia e Doenças Infecciosas</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
              >
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats do Usuário */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Nível</p>
              <p className="text-2xl font-bold">{userProgress.level}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">XP Total</p>
              <p className="text-2xl font-bold">{userProgress.xp}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Sequência</p>
              <p className="text-2xl font-bold">{userProgress.streak} dias</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <User className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Lições</p>
              <p className="text-2xl font-bold">{userProgress.completedLessons.length}</p>
            </CardContent>
          </Card>
        </div>

        {/* Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  {module.title}
                </CardTitle>
                <p className="text-gray-600">{module.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{module.lessons.length} lições</span>
                    <span>0% concluído</span>
                  </div>
                  <Progress value={0} className="w-full" />
                  <Button 
                    className="w-full"
                    onClick={() => {
                      setCurrentModule(module)
                      setCurrentView('module')
                    }}
                  >
                    Continuar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // Renderização principal
  if (!currentUser) {
    if (showPasswordRecovery) {
      return <PasswordRecoveryView />
    }
    
    if (authView === 'register') {
      return <RegisterView />
    }
    
    return <LoginView />
  }

  if (showSettings) {
    return <div>Configurações (implementar)</div>
  }

  return <HomeView />
}

export default App
