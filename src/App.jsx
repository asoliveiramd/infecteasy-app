import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Badge } from './components/ui/badge'
import { Progress } from './components/ui/progress'
import { Separator } from './components/ui/separator'
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Trophy, 
  Flame, 
  BookOpen, 
  Settings,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react'
import { GlossaryTerm } from './components/Glossary'
import './App.css'

function App() {
  // Estados principais
  const [currentUser, setCurrentUser] = useState(null)
  const [authView, setAuthView] = useState('login') // 'login', 'register'
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [currentModule, setCurrentModule] = useState(null)
  const [currentLesson, setCurrentLesson] = useState(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [userProgress, setUserProgress] = useState({
    xp: 965,
    level: 2,
    streak: 5,
    completedLessons: []
  })
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  // Estados para formulários
  const [loginForm, setLoginForm] = useState({ login: '', senha: '' })
  const [registerForm, setRegisterForm] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    login: '',
    atividade: '',
    senha: '',
    confirmarSenha: ''
  })
  const [recoveryForm, setRecoveryForm] = useState({
    emailOuTelefone: '',
    metodo: 'email'
  })
  const [passwordChangeForm, setPasswordChangeForm] = useState({
    senhaAtual: '',
    novaSenha: '',
    confirmarNovaSenha: ''
  })
  const [showPasswordChange, setShowPasswordChange] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editForm, setEditForm] = useState({})

  // Estados para mostrar/ocultar senhas
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Funções de formatação
  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '')
    return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  const formatTelefone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '+55 ($1) $2-$3')
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '+55 ($1) $2-$3')
  }

  // Verificar usuário logado ao carregar
  useEffect(() => {
    const savedUser = localStorage.getItem('infecteasy_user')
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
  }, [])

  // Funções de autenticação
  const handleLogin = (e) => {
    e.preventDefault()
    
    if (!loginForm.login || !loginForm.senha) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    const users = JSON.parse(localStorage.getItem('infecteasy_users') || '[]')
    const user = users.find(u => u.login === loginForm.login && u.senha === loginForm.senha)
    
    if (user) {
      setCurrentUser(user)
      localStorage.setItem('infecteasy_user', JSON.stringify(user))
      setLoginForm({ login: '', senha: '' })
    } else {
      alert('Login ou senha incorretos!')
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    
    // Validações
    if (!registerForm.nome || !registerForm.cpf || !registerForm.dataNascimento || 
        !registerForm.telefone || !registerForm.email || !registerForm.login || 
        !registerForm.atividade || !registerForm.senha || !registerForm.confirmarSenha) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    if (registerForm.cpf.replace(/\D/g, '').length !== 11) {
      alert('CPF deve ter 11 dígitos!')
      return
    }

    if (!registerForm.email.includes('@')) {
      alert('Email inválido!')
      return
    }

    if (registerForm.telefone.replace(/\D/g, '').length < 10) {
      alert('Telefone inválido!')
      return
    }

    if (registerForm.senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres!')
      return
    }

    if (registerForm.senha !== registerForm.confirmarSenha) {
      alert('A confirmação da senha não confere!')
      return
    }

    const users = JSON.parse(localStorage.getItem('infecteasy_users') || '[]')
    
    // Verificar se login, email ou telefone já existem
    if (users.some(u => u.login === registerForm.login)) {
      alert('Este login já está em uso!')
      return
    }

    if (users.some(u => u.email === registerForm.email)) {
      alert('Este email já está cadastrado!')
      return
    }

    if (users.some(u => u.telefone === registerForm.telefone)) {
      alert('Este telefone já está cadastrado!')
      return
    }

    const newUser = {
      id: Date.now(),
      nome: registerForm.nome,
      cpf: registerForm.cpf,
      dataNascimento: registerForm.dataNascimento,
      telefone: registerForm.telefone,
      email: registerForm.email,
      login: registerForm.login,
      atividade: registerForm.atividade,
      senha: registerForm.senha,
      createdAt: new Date().toISOString()
    }

    users.push(newUser)
    localStorage.setItem('infecteasy_users', JSON.stringify(users))
    
    // Login automático após cadastro
    setCurrentUser(newUser)
    localStorage.setItem('infecteasy_user', JSON.stringify(newUser))
    
    // Limpar formulário
    setRegisterForm({
      nome: '', cpf: '', dataNascimento: '', telefone: '', email: '',
      login: '', atividade: '', senha: '', confirmarSenha: ''
    })
    
    alert('Cadastro realizado com sucesso!')
  }

  const handlePasswordRecovery = (e) => {
    e.preventDefault()
    
    if (!recoveryForm.emailOuTelefone) {
      alert('Por favor, informe seu email ou telefone!')
      return
    }

    const users = JSON.parse(localStorage.getItem('infecteasy_users') || '[]')
    const user = users.find(u => 
      u.email === recoveryForm.emailOuTelefone || 
      u.telefone === recoveryForm.emailOuTelefone
    )

    if (user) {
      alert(`Instruções de recuperação enviadas via ${recoveryForm.metodo}!`)
      setShowPasswordRecovery(false)
      setRecoveryForm({ emailOuTelefone: '', metodo: 'email' })
    } else {
      alert('Email ou telefone não encontrado!')
    }
  }

  const handlePasswordChange = (e) => {
    e.preventDefault()
    
    if (!passwordChangeForm.senhaAtual || !passwordChangeForm.novaSenha || !passwordChangeForm.confirmarNovaSenha) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    if (passwordChangeForm.senhaAtual !== currentUser.senha) {
      alert('Senha atual incorreta!')
      return
    }

    if (passwordChangeForm.novaSenha.length < 6) {
      alert('A nova senha deve ter pelo menos 6 caracteres!')
      return
    }

    if (passwordChangeForm.novaSenha !== passwordChangeForm.confirmarNovaSenha) {
      alert('A confirmação da nova senha não confere!')
      return
    }

    // Atualizar senha
    const users = JSON.parse(localStorage.getItem('infecteasy_users') || '[]')
    const userIndex = users.findIndex(u => u.id === currentUser.id)
    
    if (userIndex !== -1) {
      users[userIndex].senha = passwordChangeForm.novaSenha
      localStorage.setItem('infecteasy_users', JSON.stringify(users))
      
      const updatedUser = { ...currentUser, senha: passwordChangeForm.novaSenha }
      setCurrentUser(updatedUser)
      localStorage.setItem('infecteasy_user', JSON.stringify(updatedUser))
    }

    alert('Senha alterada com sucesso!')
    setShowPasswordChange(false)
    setPasswordChangeForm({ senhaAtual: '', novaSenha: '', confirmarNovaSenha: '' })
  }

  const handleEditProfile = () => {
    setEditForm({
      nome: currentUser.nome,
      cpf: currentUser.cpf,
      dataNascimento: currentUser.dataNascimento,
      telefone: currentUser.telefone,
      email: currentUser.email,
      atividade: currentUser.atividade
    })
    setEditMode(true)
  }

  const handleSaveProfile = () => {
    const users = JSON.parse(localStorage.getItem('infecteasy_users') || '[]')
    const userIndex = users.findIndex(u => u.id === currentUser.id)
    
    if (userIndex !== -1) {
      users[userIndex] = { ...currentUser, ...editForm }
      localStorage.setItem('infecteasy_users', JSON.stringify(users))
      
      const updatedUser = { ...currentUser, ...editForm }
      setCurrentUser(updatedUser)
      localStorage.setItem('infecteasy_user', JSON.stringify(updatedUser))
    }

    setEditMode(false)
    alert('Informações atualizadas com sucesso!')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('infecteasy_user')
    setCurrentView('home')
    setCurrentModule(null)
    setCurrentLesson(null)
  }

  // Handlers otimizados para evitar perda de foco
  const handleLoginChange = useCallback((field, value) => {
    setLoginForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleRegisterChange = useCallback((field, value) => {
    setRegisterForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleRecoveryChange = useCallback((field, value) => {
    setRecoveryForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const handlePasswordChangeFormChange = useCallback((field, value) => {
    setPasswordChangeForm(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleEditFormChange = useCallback((field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }, [])

  // Dados dos módulos e lições
  const modules = [
    {
      id: 'infectologia',
      title: 'Fundamentos da Infectologia',
      description: 'Base essencial para interpretação microbiológica',
      lessons: [
        {
          id: 'gram_pratica',
          title: 'O Método de Gram na Prática',
          description: 'Aprenda a interpretar resultados de Gram para orientar a antibioticoterapia empírica',
          duration: '10 min',
          xp: 50,
          sections: [
            {
              type: 'content',
              title: 'O que é o Método de Gram?',
              content: `O método de Gram é uma técnica de coloração diferencial que divide as bactérias em dois grandes grupos: <GlossaryTerm term="Gram-positivas">Gram-positivas</GlossaryTerm> e <GlossaryTerm term="Gram-negativas">Gram-negativas</GlossaryTerm>.

Esta diferenciação é baseada na estrutura da <GlossaryTerm term="parede celular">parede celular</GlossaryTerm> bacteriana e é fundamental para orientar a <GlossaryTerm term="antibioticoterapia empírica">antibioticoterapia empírica</GlossaryTerm>.`,
              tip: 'O Gram é o primeiro passo na identificação bacteriana e pode salvar vidas ao orientar o tratamento inicial!'
            },
            {
              type: 'content',
              title: 'Procedimento da Coloração de Gram',
              content: `O procedimento envolve quatro etapas principais:

1. **Coloração primária**: <GlossaryTerm term="cristal violeta">Cristal violeta</GlossaryTerm> (todas as bactérias ficam roxas)
2. **Mordente**: Iodo (fixa o corante)
3. **Descoloração**: Álcool ou acetona (remove o corante das Gram-negativas)
4. **Coloração secundária**: Safranina (cora as Gram-negativas de rosa)

**Resultado final:**
- <GlossaryTerm term="Gram-positivas">Gram-positivas</GlossaryTerm>: Roxas/violetas
- <GlossaryTerm term="Gram-negativas">Gram-negativas</GlossaryTerm>: Rosas/vermelhas`,
              tip: 'A qualidade da coloração depende da idade da cultura - bactérias muito velhas podem dar resultados falsos!'
            },
            {
              type: 'challenge',
              title: 'Desafio Interativo: Coloração de Gram',
              question: 'Qual é a coloração das bactérias Gram-positivas após o procedimento completo de Gram?',
              options: [
                { text: 'Rosa/Vermelha', isCorrect: false },
                { text: 'Roxo/Violeta', isCorrect: true },
                { text: 'Azul', isCorrect: false },
                { text: 'Incolor', isCorrect: false }
              ],
              correctFeedback: 'Correto! Bactérias Gram-positivas retêm o violeta cristal e ficam roxas/violetas.',
              incorrectFeedback: 'Incorreto. Gram-positivas retêm o corante primário (violeta cristal) e ficam roxas.'
            },
            {
              type: 'content',
              title: 'Interpretação Clínica do Gram',
              content: `A interpretação do <GlossaryTerm term="Gram">Gram</GlossaryTerm> deve considerar:

**<GlossaryTerm term="Morfologia">Morfologia</GlossaryTerm> bacteriana:**
- <GlossaryTerm term="Cocos">Cocos</GlossaryTerm>: Formato esférico
- <GlossaryTerm term="Bacilos">Bacilos</GlossaryTerm>: Formato alongado

**Arranjo celular:**
- <GlossaryTerm term="Staphylococcus">Staphylococcus</GlossaryTerm>: Cocos em cachos
- <GlossaryTerm term="Streptococcus">Streptococcus</GlossaryTerm>: Cocos em cadeias
- <GlossaryTerm term="Enterobactérias">Enterobactérias</GlossaryTerm>: Bacilos Gram-negativos

**Orientação terapêutica inicial:**
- Cocos Gram-positivos → Considerar anti-estafilocócicos
- Bacilos Gram-negativos → Considerar beta-lactâmicos de amplo espectro`,
              tip: 'Sempre correlacione o Gram com o contexto clínico - o mesmo achado pode ter significados diferentes!'
            },
            {
              type: 'content',
              title: 'Limitações e Cuidados',
              content: `**Limitações importantes:**

1. **Bactérias fastidiosas** podem não corar adequadamente
2. **Culturas antigas** podem perder a coloração característica
3. **Técnica inadequada** pode gerar resultados falsos
4. **Algumas bactérias** são Gram-variáveis

**Cuidados na interpretação:**
- Sempre correlacionar com dados clínicos
- Considerar a qualidade da amostra
- Lembrar que ausência de bactérias não exclui infecção
- Aguardar confirmação pela cultura quando possível`,
              tip: 'O Gram é uma ferramenta de triagem, não um diagnóstico definitivo!'
            }
          ]
        },
        {
          id: 'especimes_tipos',
          title: 'Tipos de Espécimes Clínicos',
          description: 'Classificação e características dos diferentes tipos de amostras',
          duration: '8 min',
          xp: 40,
          sections: [
            {
              type: 'content',
              title: 'Classificação dos Espécimes',
              content: `Os espécimes clínicos são classificados em duas categorias principais:

**Sítios Estéreis:**
- Sangue, LCR, líquido pleural, ascítico, sinovial
- Qualquer crescimento bacteriano é significativo
- Contaminação deve ser sempre considerada

**Sítios Não-Estéreis:**
- Escarro, urina, fezes, swabs de feridas
- Presença de microbiota normal
- Interpretação depende da quantidade e contexto clínico`,
              tip: 'A origem da amostra determina como interpretar os resultados!'
            },
            {
              type: 'content',
              title: 'Significado Clínico por Tipo',
              content: `**Hemoculturas:**
- Qualquer crescimento é potencialmente significativo
- Contaminantes comuns: Staphylococcus coagulase-negativo

**Uroculturas:**
- ≥10⁵ UFC/mL: significativo em urina limpa
- ≥10⁴ UFC/mL: significativo em cateter
- ≥10² UFC/mL: significativo em punção suprapúbica

**Escarro:**
- Avaliar qualidade: <10 células epiteliais e >25 leucócitos por campo
- Microbiota oral sempre presente`,
              tip: 'Números não são tudo - sempre considere o contexto clínico!'
            }
          ]
        },
        {
          id: 'especimes_interpretacao',
          title: 'Espécimes Clínicos e Interpretação',
          description: 'Diferenças entre locais estéreis e não estéreis, qualidade da amostra',
          duration: '12 min',
          xp: 85,
          sections: [
            {
              type: 'content',
              title: 'Sítios Estéreis vs Não-Estéreis',
              content: `**Sítios Estéreis:**
- Normalmente livres de microrganismos
- Qualquer crescimento é potencialmente patogênico
- Exemplos: sangue, LCR, líquidos cavitários

**Sítios Não-Estéreis:**
- Possuem microbiota residente normal
- Interpretação baseada em quantidade e contexto
- Exemplos: trato respiratório, geniturinário, pele`,
              tip: 'Exame de Gram negativo (sem bactérias) não exclui infecção em sítios estéreis!'
            },
            {
              type: 'challenge',
              title: 'Desafio: Interpretação de Sítios',
              question: 'Em uma hemocultura, o crescimento de Staphylococcus epidermidis indica:',
              options: [
                { text: 'Sempre infecção significativa', isCorrect: false },
                { text: 'Possível contaminação, avaliar contexto clínico', isCorrect: true },
                { text: 'Resultado normal, ignorar', isCorrect: false },
                { text: 'Erro de laboratório', isCorrect: false }
              ],
              correctFeedback: 'Correto! S. epidermidis pode ser contaminante ou patógeno, dependendo do contexto clínico.',
              incorrectFeedback: 'S. epidermidis é um contaminante comum, mas pode causar infecção em certas situações.'
            }
          ]
        },
        {
          id: 'qualidade_coleta',
          title: 'Qualidade e Coleta de Espécimes',
          description: 'Critérios de qualidade e técnicas adequadas de coleta',
          duration: '10 min',
          xp: 75,
          sections: [
            {
              type: 'content',
              title: 'Critérios de Qualidade',
              content: `**Escarro - Critérios de Murray-Washington:**
- Aceitável: <10 células epiteliais e >25 leucócitos por campo (100x)
- Inaceitável: >25 células epiteliais por campo

**Urina:**
- Jato médio em recipiente estéril
- Processamento em até 2 horas ou refrigeração
- Cateter vesical: coletar da porta do cateter

**Feridas:**
- Preferir aspirado ou biópsia
- Evitar swabs superficiais quando possível`,
              tip: 'Amostra de má qualidade = resultado não confiável!'
            }
          ]
        },
        {
          id: 'interpretacao_gram',
          title: 'Interpretação do Gram',
          description: 'Procedimento detalhado e interpretação de morfologias',
          duration: '15 min',
          xp: 95,
          sections: [
            {
              type: 'content',
              title: 'Morfologias Bacterianas Comuns',
              content: `**Cocos Gram-positivos:**
- Em cachos: Staphylococcus spp.
- Em cadeias: Streptococcus spp., Enterococcus spp.

**Bacilos Gram-positivos:**
- Regulares: Bacillus spp.
- Irregulares: Corynebacterium spp.

**Cocos Gram-negativos:**
- Diplococos: Neisseria spp., Moraxella spp.

**Bacilos Gram-negativos:**
- Enterobactérias: E. coli, Klebsiella, etc.
- Não-fermentadores: Pseudomonas, Acinetobacter`,
              tip: 'A morfologia e arranjo são pistas importantes para identificação!'
            }
          ]
        },
        {
          id: 'sitios_estereis',
          title: 'Sítios Estéreis vs Não-Estéreis',
          description: 'Diferenças na interpretação e significância clínica',
          duration: '12 min',
          xp: 100,
          sections: [
            {
              type: 'content',
              title: 'Interpretação Diferencial',
              content: `**Sítios Estéreis - Interpretação:**
- Qualquer crescimento é suspeito
- Considerar sempre contaminação
- Correlacionar com quadro clínico
- Repetir se necessário

**Sítios Não-Estéreis - Interpretação:**
- Avaliar predominância
- Considerar microbiota normal
- Quantificar quando apropriado
- Correlacionar com inflamação local`,
              tip: 'Exame de Gram positivo (com bactérias) e cultura negativa requer investigação adicional!'
            }
          ]
        },
        {
          id: 'meios_cultura',
          title: 'Meios de Cultura e Identificação',
          description: 'Tipos de meios e testes de identificação rápida',
          duration: '18 min',
          xp: 90,
          sections: [
            {
              type: 'content',
              title: 'Tipos de Meios de Cultura',
              content: `**Meios Não-Seletivos:**
- Ágar sangue: crescimento da maioria das bactérias
- Ágar chocolate: bactérias fastidiosas (Haemophilus)

**Meios Seletivos:**
- MacConkey: Gram-negativos, diferencia fermentadores
- Manitol salgado: seleciona Staphylococcus

**Testes de Identificação Rápida:**
- Catalase: diferencia Staphylococcus (+) de Streptococcus (-)
- Oxidase: diferencia enterobactérias (-) de não-fermentadores (+)
- Coagulase: diferencia S. aureus (+) de S. coagulase-negativo (-)
- MALDI-TOF: identificação por espectrometria de massa`,
              tip: 'Testes rápidos podem dar resultados em minutos, orientando terapia precoce!'
            }
          ]
        },
        {
          id: 'correlacao_gram_cultura',
          title: 'Correlação Gram e Cultura',
          description: 'Interpretação integrada e limitações comuns',
          duration: '14 min',
          xp: 105,
          sections: [
            {
              type: 'content',
              title: 'Interpretação Integrada',
              content: `**Correlação Adequada:**
- Gram e cultura devem ser correlacionados
- Discrepâncias podem indicar: presença de anaeróbios, organismos fastidiosos, efeito de antibióticos prévios, ou problemas técnicos
- Exame de Gram positivo (com bactérias) e cultura negativa requer investigação adicional

**Limitações Comuns:**
- Bactérias fastidiosas podem não crescer em meios rotineiros
- Antibióticos prévios podem inibir crescimento
- Técnica inadequada pode afetar resultados
- Tempo de incubação insuficiente`,
              tip: 'Sempre correlacione Gram com cultura - discrepâncias são pistas importantes!'
            },
            {
              type: 'challenge',
              title: 'Desafio: Correlação de Resultados',
              question: 'Exame de Gram mostra múltiplas morfologias bacterianas, mas a cultura cresce apenas E. coli. Qual a explicação mais provável?',
              options: [
                { text: 'Erro no Gram', isCorrect: false },
                { text: 'Presença de anaeróbios ou bactérias fastidiosas', isCorrect: true },
                { text: 'Contaminação da cultura', isCorrect: false },
                { text: 'Resultado normal', isCorrect: false }
              ],
              correctFeedback: 'Correto! Múltiplas morfologias no Gram com crescimento limitado sugere presença de bactérias que não crescem em meios rotineiros.',
              incorrectFeedback: 'Discrepância entre Gram e cultura sempre requer investigação - pode indicar anaeróbios ou fastidiosos.'
            }
          ]
        },
        {
          id: 'gram_positivos',
          title: 'Gram-positivos: Morfologia e Arranjo',
          description: 'Cocos e bacilos Gram-positivos: características e identificação',
          duration: '12 min',
          xp: 60,
          sections: [
            {
              type: 'content',
              title: 'Cocos Gram-positivos',
              content: `**Staphylococcus:**
- Arranjo em cachos ("cacho de uva")
- S. aureus: coagulase positivo
- S. epidermidis: coagulase negativo

**Streptococcus:**
- Arranjo em cadeias
- Classificação por hemólise: α, β, γ
- Grupos A, B, C, G por antígenos

**Enterococcus:**
- Anteriormente Streptococcus grupo D
- Resistente a condições adversas
- Importante em infecções nosocomiais`,
              tip: 'O arranjo celular é fundamental para diferenciação inicial!'
            }
          ]
        },
        {
          id: 'gram_negativos',
          title: 'Gram-negativos: Morfologia e Arranjo',
          description: 'Cocos e bacilos Gram-negativos: características e identificação',
          duration: '12 min',
          xp: 60,
          sections: [
            {
              type: 'content',
              title: 'Bacilos Gram-negativos',
              content: `**Enterobactérias:**
- Fermentam glicose
- Oxidase negativo
- E. coli, Klebsiella, Enterobacter, Serratia

**Não-fermentadores:**
- Não fermentam glicose
- Oxidase positivo (maioria)
- Pseudomonas, Acinetobacter, Stenotrophomonas

**Cocos Gram-negativos:**
- Neisseria: diplococos
- Moraxella: cocobacilos`,
              tip: 'Teste de oxidase é fundamental para diferenciação inicial!'
            }
          ]
        },
        {
          id: 'cultura_identificacao',
          title: 'Cultura e Identificação Laboratorial',
          description: 'Meios de cultura, testes de bancada e comunicação com laboratório',
          duration: '15 min',
          xp: 70,
          sections: [
            {
              type: 'content',
              title: 'Comunicação com Laboratório',
              content: `**Informações Importantes:**
- Dados clínicos relevantes
- Antibióticos em uso
- Urgência do resultado
- Suspeitas diagnósticas específicas

**Interpretação de Laudos:**
- Crescimento significativo vs contaminação
- Sensibilidade vs resistência
- Comentários interpretativos
- Sugestões terapêuticas`,
              tip: 'Boa comunicação com laboratório melhora a qualidade dos resultados!'
            }
          ]
        }
      ]
    },
    {
      id: 'antibiograma',
      title: 'Interpretação de Antibiograma',
      description: 'Aprenda a interpretar testes de sensibilidade antimicrobiana',
      lessons: [
        {
          id: 'conceitos_fundamentais',
          title: 'Conceitos Fundamentais',
          description: 'Base teórica para interpretação de antibiogramas',
          duration: '15 min',
          xp: 50,
          sections: [
            {
              type: 'content',
              title: 'O que é o Antibiograma?',
              content: `O antibiograma é um teste laboratorial que determina a sensibilidade de uma bactéria a diferentes antimicrobianos.

**Objetivos principais:**
- Orientar a terapia antimicrobiana específica
- Detectar resistência bacteriana
- Monitorar padrões de resistência locais
- Otimizar o uso de antimicrobianos`,
              tip: 'O antibiograma é fundamental para o uso racional de antimicrobianos!'
            },
            {
              type: 'content',
              title: 'Interpretação dos Resultados',
              content: `**Categorias de interpretação:**

**Sensível (S):** O antimicrobiano é eficaz nas doses habituais
**Intermediário (I):** Eficácia incerta, pode funcionar com doses aumentadas
**Resistente (R):** O antimicrobiano não é eficaz

**Fatores que influenciam:**
- Concentração do antimicrobiano no sítio de infecção
- Dose e via de administração
- Características do paciente (função renal, hepática)`,
              tip: 'Resultado intermediário não significa "meio sensível" - significa eficácia incerta!'
            }
          ]
        },
        {
          id: 'disco_difusao',
          title: 'Métodos de Teste: Disco-Difusão',
          description: 'Técnica de disco-difusão e interpretação de zonas',
          duration: '12 min',
          xp: 75,
          sections: [
            {
              type: 'content',
              title: 'Princípio do Método',
              content: `**Técnica de Kirby-Bauer:**
- Discos impregnados com antimicrobianos
- Difusão do antimicrobiano no ágar
- Formação de zonas de inibição
- Medição dos diâmetros das zonas

**Vantagens:**
- Método simples e econômico
- Adequado para bactérias de crescimento rápido
- Permite testar múltiplos antimicrobianos

**Limitações:**
- Não fornece concentração inibitória mínima
- Inadequado para bactérias fastidiosas`,
              tip: 'O tamanho da zona de inibição é inversamente proporcional à resistência!'
            },
            {
              type: 'challenge',
              title: 'Desafio: Interpretação de Zona',
              question: 'Ao interpretar um antibiograma pelo método de disco-difusão, o que significa um resultado "Intermediário" (I)?',
              options: [
                { text: 'A bactéria é parcialmente sensível', isCorrect: false },
                { text: 'Eficácia incerta, pode funcionar com doses aumentadas ou em locais de alta concentração', isCorrect: true },
                { text: 'O teste precisa ser repetido', isCorrect: false },
                { text: 'A bactéria é resistente', isCorrect: false }
              ],
              correctFeedback: 'Correto! Resultado intermediário indica eficácia incerta, podendo funcionar com doses maiores ou em locais onde o antimicrobiano se concentra (ex: urina).',
              incorrectFeedback: 'Intermediário não significa "meio sensível", mas sim eficácia incerta que pode melhorar com doses maiores.'
            }
          ]
        },
        {
          id: 'cim',
          title: 'Concentração Inibitória Mínima (CIM)',
          description: 'Conceito e aplicação clínica da CIM',
          duration: '18 min',
          xp: 80,
          sections: [
            {
              type: 'content',
              title: 'Definição e Importância',
              content: `**CIM (Concentração Inibitória Mínima):**
Menor concentração de antimicrobiano capaz de inibir o crescimento bacteriano visível.

**Aplicações clínicas:**
- Orientação de doses em infecções graves
- Monitoramento de resistência
- Pesquisa de novos antimicrobianos
- Otimização terapêutica individualizada

**Métodos de determinação:**
- Microdiluição em caldo
- E-test (fitas com gradiente)
- Sistemas automatizados`,
              tip: 'CIM baixa = maior sensibilidade; CIM alta = maior resistência!'
            }
          ]
        },
        {
          id: 'mecanismos_resistencia',
          title: 'Mecanismos de Resistência',
          description: 'Principais mecanismos de resistência bacteriana',
          duration: '20 min',
          xp: 90,
          sections: [
            {
              type: 'content',
              title: 'Tipos de Resistência',
              content: `**Resistência Intrínseca:**
- Característica natural da espécie
- Exemplo: Enterococcus é naturalmente resistente a cefalosporinas

**Resistência Adquirida:**
- Desenvolvida por mutação ou transferência gênica
- Pode ser cromossômica ou plasmidial

**Principais Mecanismos:**
1. **Produção de enzimas:** β-lactamases, carbapenemases
2. **Alteração do alvo:** modificação de PBPs, ribossomos
3. **Redução da permeabilidade:** alteração de porinas
4. **Bombas de efluxo:** expulsão ativa do antimicrobiano`,
              tip: 'Conhecer os mecanismos ajuda a prever padrões de resistência cruzada!'
            },
            {
              type: 'content',
              title: 'Resistência à Meticilina (MRSA/MRSE)',
              content: `**Mecanismo:**
Mediada pelo gene mecA que codifica PBP2a (proteína ligadora de penicilina alterada). Confere resistência à maioria dos beta-lactâmicos, exceto ceftarolina (cefalosporina de 5ª geração).

**Implicações clínicas:**
- MRSA: resistente à maioria dos beta-lactâmicos, mas sensível à ceftarolina. Tratar com vancomicina, linezolida ou ceftarolina
- MRSE: mesmo padrão de resistência do MRSA
- Importante causa de infecções nosocomiais

**Detecção:**
- Teste de aglutinação em látex
- PCR para gene mecA
- Disco de cefoxitina`,
              tip: 'MRSA não significa resistência a TODOS os beta-lactâmicos - ceftarolina é uma exceção importante!'
            }
          ]
        },
        {
          id: 'aplicacao_clinica',
          title: 'Aplicação Clínica do Antibiograma',
          description: 'Como usar o antibiograma na prática médica',
          duration: '16 min',
          xp: 85,
          sections: [
            {
              type: 'content',
              title: 'Interpretação Clínica',
              content: `**Fatores a considerar:**

**Características do antimicrobiano:**
- Penetração no sítio de infecção
- Concentração tecidual
- Efeitos adversos
- Interações medicamentosas

**Características do paciente:**
- Função renal e hepática
- Alergias conhecidas
- Medicações concomitantes
- Gravidade da infecção

**Características da infecção:**
- Sítio anatômico
- Gravidade clínica
- Necessidade de ação bactericida vs bacteriostática`,
              tip: 'Sensível no antibiograma não garante eficácia clínica - considere sempre o contexto!'
            },
            {
              type: 'challenge',
              title: 'Desafio: Aplicação Prática',
              question: 'Paciente com meningite por S. pneumoniae sensível à penicilina no antibiograma. Qual a melhor conduta?',
              options: [
                { text: 'Usar penicilina oral', isCorrect: false },
                { text: 'Usar penicilina endovenosa em doses altas', isCorrect: true },
                { text: 'Usar qualquer dose de penicilina', isCorrect: false },
                { text: 'Trocar por outro antimicrobiano', isCorrect: false }
              ],
              correctFeedback: 'Correto! Na meningite, mesmo com sensibilidade, são necessárias doses altas para atingir concentrações adequadas no SNC.',
              incorrectFeedback: 'Meningite requer doses altas mesmo para bactérias sensíveis, devido à barreira hematoencefálica.'
            }
          ]
        }
      ]
    }
  ]

  // Função para lidar com respostas
  const handleAnswer = (option) => {
    setSelectedAnswer(option)
    setIsCorrect(option.isCorrect)
    setShowFeedback(true)
  }

  // Função para avançar seção
  const nextSection = () => {
    if (currentSection < currentLesson.sections.length - 1) {
      setCurrentSection(currentSection + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      // Lição completa
      const newProgress = {
        ...userProgress,
        xp: userProgress.xp + currentLesson.xp,
        completedLessons: [...userProgress.completedLessons, currentLesson.id]
      }
      setUserProgress(newProgress)
      setCurrentView('module')
      setCurrentLesson(null)
      setCurrentSection(0)
    }
  }

  // Função para voltar seção
  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

// Componente de Login otimizado
const LoginView = React.memo(({ 
  loginForm, 
  showPassword, 
  setShowPassword, 
  handleLogin, 
  handleLoginChange, 
  setAuthView, 
  setShowPasswordRecovery 
}) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Infecteasy</CardTitle>
          <CardDescription>Acesse o aplicativo de infectologia e doenças infecciosas</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Login"
                value={loginForm.login}
                onChange={(e) => handleLoginChange('login', e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha"
                value={loginForm.senha}
                onChange={(e) => handleLoginChange('senha', e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
          
          <div className="mt-4 text-center space-y-2">
            <button
              onClick={() => setShowPasswordRecovery(true)}
              className="text-sm text-blue-600 hover:underline"
            >
              Esqueci minha senha
            </button>
            <div className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <button
                onClick={() => setAuthView('register')}
                className="text-blue-600 hover:underline"
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
))

// Componente de Cadastro otimizado
const RegisterView = React.memo(({ 
  registerForm, 
  showPassword, 
  showConfirmPassword, 
  setShowPassword, 
  setShowConfirmPassword, 
  handleRegister, 
  handleRegisterChange, 
  formatTelefone, 
  formatCPF, 
  setAuthView 
}) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Criar Conta</CardTitle>
          <CardDescription>Bem-vindo ao Infecteasy!</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister} className="space-y-4">
            <Input
              type="text"
              placeholder="Nome Completo *"
              value={registerForm.nome}
              onChange={(e) => handleRegisterChange('nome', e.target.value)}
              required
            />
            
            <Input
              type="text"
              placeholder="CPF *"
              value={registerForm.cpf}
              onChange={(e) => handleRegisterChange('cpf', formatCPF(e.target.value))}
              maxLength={14}
              required
            />

            <Input
              type="date"
              placeholder="Data de Nascimento *"
              value={registerForm.dataNascimento}
              onChange={(e) => handleRegisterChange('dataNascimento', e.target.value)}
              required
            />

            <Input
              type="tel"
              placeholder="Telefone *"
              value={registerForm.telefone}
              onChange={(e) => handleRegisterChange('telefone', formatTelefone(e.target.value))}
              required
            />

            <Input
              type="email"
              placeholder="Email *"
              value={registerForm.email}
              onChange={(e) => handleRegisterChange('email', e.target.value)}
              required
            />
            
            <Input
              type="text"
              placeholder="Login *"
              value={registerForm.login}
              onChange={(e) => handleRegisterChange('login', e.target.value)}
              required
            />
            
            <Select value={registerForm.atividade} onValueChange={(value) => setRegisterForm({...registerForm, atividade: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Atividade Profissional *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="medico">Médico</SelectItem>
                <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
                <SelectItem value="biologo">Biólogo</SelectItem>
                <SelectItem value="farmaceutico">Farmacêutico/Bioquímico</SelectItem>
                <SelectItem value="biomedico">Biomédico</SelectItem>
                <SelectItem value="academico">Acadêmico</SelectItem>
                <SelectItem value="outro">Outro</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Senha *"
                value={registerForm.senha}
                onChange={(e) => handleRegisterChange('senha', e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar Senha *"
                value={registerForm.confirmarSenha}
                onChange={(e) => handleRegisterChange('confirmarSenha', e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            
            <Button type="submit" className="w-full">
              Criar Conta
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600">
              Já tem uma conta?{' '}
              <button
                onClick={() => setAuthView('login')}
                className="text-blue-600 hover:underline"
              >
                Faça login
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
))

// Componente de Recuperação de Senha otimizado
const PasswordRecoveryView = React.memo(({ 
  recoveryForm, 
  handlePasswordRecovery, 
  handleRecoveryChange, 
  setRecoveryForm, 
  setShowPasswordRecovery 
}) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Recuperar Senha</CardTitle>
          <CardDescription>Escolha como deseja receber as instruções</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordRecovery} className="space-y-4">
            <Input
              type="text"
              placeholder="Email ou Telefone"
              value={recoveryForm.emailOuTelefone}
              onChange={(e) => handleRecoveryChange('emailOuTelefone', e.target.value)}
              required
            />
            
            <Select value={recoveryForm.metodo} onValueChange={(value) => setRecoveryForm({...recoveryForm, metodo: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Método de recuperação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </div>
                </SelectItem>
                <SelectItem value="sms">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    SMS
                  </div>
                </SelectItem>
                <SelectItem value="whatsapp">
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            
            <Button type="submit" className="w-full">
              Enviar Instruções
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowPasswordRecovery(false)}
              className="text-sm text-blue-600 hover:underline"
            >
              Voltar ao login
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
))

// Componente de Configurações otimizado
const SettingsView = React.memo(({ 
  currentUser, 
  editMode, 
  editForm, 
  passwordChangeForm, 
  showCurrentPassword, 
  showNewPassword, 
  showConfirmNewPassword, 
  setShowSettings, 
  handleEditProfile, 
  handleSaveProfile, 
  handleEditFormChange, 
  handlePasswordChange, 
  handlePasswordChangeFormChange, 
  setShowCurrentPassword, 
  setShowNewPassword, 
  setShowConfirmNewPassword 
}) => (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => setShowSettings(false)}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold">Configurações da Conta</h1>
        </div>

        <div className="grid gap-6">
          {/* Informações Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={editMode ? handleSaveProfile : handleEditProfile}
                >
                  {editMode ? 'Salvar Alterações' : 'Editar Informações'}
                </Button>
                {editMode && (
                  <Button
                    variant="ghost"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => setShowPasswordChange(true)}
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Alterar Senha
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {!editMode ? (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Nome Completo</label>
                    <p className="text-lg">{currentUser?.nome}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">CPF</label>
                    <p className="text-lg">{currentUser?.cpf}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Data de Nascimento</label>
                    <p className="text-lg">{currentUser?.dataNascimento ? new Date(currentUser.dataNascimento).toLocaleDateString('pt-BR') : 'Não informado'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Telefone</label>
                    <p className="text-lg">{currentUser?.telefone || 'Não informado'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <p className="text-lg">{currentUser?.email || 'Não informado'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Atividade Profissional</label>
                    <p className="text-lg">{currentUser?.atividade?.charAt(0).toUpperCase() + currentUser?.atividade?.slice(1) || 'Não informado'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Login</label>
                    <p className="text-lg">{currentUser?.login}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Nome Completo</label>
                    <Input
                      value={editForm.nome}
                      onChange={(e) => handleEditFormChange('nome', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">CPF</label>
                    <Input
                      value={editForm.cpf}
                      onChange={(e) => handleEditFormChange('cpf', formatCPF(e.target.value))}
                      maxLength={14}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Data de Nascimento</label>
                    <Input
                      type="date"
                      value={editForm.dataNascimento}
                      onChange={(e) => handleEditFormChange('dataNascimento', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Telefone</label>
                    <Input
                      value={editForm.telefone}
                      onChange={(e) => handleEditFormChange('telefone', formatTelefone(e.target.value))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <Input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => handleEditFormChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Atividade Profissional</label>
                    <Select value={editForm.atividade} onValueChange={(value) => setEditForm({...editForm, atividade: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medico">Médico</SelectItem>
                        <SelectItem value="enfermeiro">Enfermeiro</SelectItem>
                        <SelectItem value="biologo">Biólogo</SelectItem>
                        <SelectItem value="farmaceutico">Farmacêutico/Bioquímico</SelectItem>
                        <SelectItem value="biomedico">Biomédico</SelectItem>
                        <SelectItem value="academico">Acadêmico</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Alteração de Senha */}
          {showPasswordChange && (
            <Card>
              <CardHeader>
                <CardTitle>Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <Input
                    type="password"
                    placeholder="Senha Atual *"
                    value={passwordChangeForm.senhaAtual}
                    onChange={(e) => handlePasswordChangeFormChange('senhaAtual', e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Nova Senha *"
                    value={passwordChangeForm.novaSenha}
                    onChange={(e) => handlePasswordChangeFormChange('novaSenha', e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Confirmar Nova Senha *"
                    value={passwordChangeForm.confirmarNovaSenha}
                    onChange={(e) => handlePasswordChangeFormChange('confirmarNovaSenha', e.target.value)}
                    required
                  />
                  <div className="flex gap-2">
                    <Button type="submit">Alterar Senha</Button>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setShowPasswordChange(false)}
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Estatísticas de Progresso */}
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas de Progresso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Nível Atual</label>
                <p className="text-lg">{userProgress.level}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">XP Total</label>
                <p className="text-lg">{userProgress.xp}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Sequência</label>
                <p className="text-lg">{userProgress.streak} dias</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Lições Completadas</label>
                <p className="text-lg">{userProgress.completedLessons.length}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
))

// Componente principal da tela inicial
const HomeView = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Infecteasy</h1>
                <p className="text-sm text-gray-600">Infectologia para Clínicos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => setShowSettings(true)}
                className="flex items-center"
              >
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Aprenda de forma interativa e gamificada
          </h2>
        </div>

        {/* Estatísticas do usuário */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-1" />
                  <span className="text-sm font-medium text-gray-600">Nível {userProgress.level}</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{userProgress.xp}</div>
                <div className="text-sm text-gray-600">XP Total</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Flame className="w-5 h-5 text-orange-500 mr-1" />
                  <span className="text-2xl font-bold text-orange-600">{userProgress.streak}</span>
                </div>
                <div className="text-sm text-gray-600">Sequência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{userProgress.completedLessons.length}</div>
                <div className="text-sm text-gray-600">Lições</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Módulos */}
        <div className="grid gap-6">
          {modules.map((module) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-4">{module.description}</p>
                  </div>
                  <Button 
                    onClick={() => {
                      setCurrentModule(module)
                      setCurrentView('module')
                    }}
                  >
                    Continuar
                  </Button>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progresso do Módulo</span>
                    <span>{Math.round((userProgress.completedLessons.filter(id => 
                      module.lessons.some(lesson => lesson.id === id)
                    ).length / module.lessons.length) * 100)}%</span>
                  </div>
                  <Progress 
                    value={(userProgress.completedLessons.filter(id => 
                      module.lessons.some(lesson => lesson.id === id)
                    ).length / module.lessons.length) * 100} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // Componente de visualização do módulo
  const ModuleView = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            onClick={() => {
              setCurrentView('home')
              setCurrentModule(null)
            }}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{currentModule?.title}</h1>
            <p className="text-gray-600">{currentModule?.description}</p>
          </div>
        </div>

        <div className="grid gap-4">
          {currentModule?.lessons.map((lesson) => {
            const isCompleted = userProgress.completedLessons.includes(lesson.id)
            
            return (
              <Card key={lesson.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {isCompleted && <CheckCircle className="w-5 h-5 text-green-500 mr-2" />}
                        <h3 className="text-lg font-semibold text-gray-900">{lesson.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-3">{lesson.description}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">{lesson.duration}</span>
                        <Badge variant="secondary">{lesson.xp} XP</Badge>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        setCurrentLesson(lesson)
                        setCurrentSection(0)
                        setCurrentView('lesson')
                      }}
                      className="ml-4"
                    >
                      {isCompleted ? 'Revisar' : 'Iniciar'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )

  // Componente de visualização da lição
  const LessonView = () => {
    const currentSectionData = currentLesson?.sections[currentSection]
    
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header da lição */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => {
                  setCurrentView('module')
                  setCurrentLesson(null)
                  setCurrentSection(0)
                }}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{currentLesson?.title}</h1>
                <p className="text-sm text-gray-600">
                  Seção {currentSection + 1} de {currentLesson?.sections.length}
                </p>
              </div>
            </div>
            <Badge variant="outline">{currentLesson?.xp} XP</Badge>
          </div>

          {/* Progresso da lição */}
          <div className="mb-8">
            <Progress 
              value={((currentSection + 1) / currentLesson?.sections.length) * 100} 
              className="h-2"
            />
          </div>

          {/* Conteúdo da seção */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{currentSectionData?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {currentSectionData?.type === 'content' && (
                <div>
                  <div className="prose max-w-none mb-4">
                    <div dangerouslySetInnerHTML={{ 
                      __html: currentSectionData.content.replace(
                        /<GlossaryTerm term="([^"]+)">([^<]+)<\/GlossaryTerm>/g,
                        '<span class="glossary-term">$2</span>'
                      )
                    }} />
                  </div>
                  {currentSectionData.tip && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-sm text-blue-700">
                            <strong>💡 Dica:</strong> {currentSectionData.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {currentSectionData?.type === 'challenge' && (
                <div>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">{currentSectionData.question}</h3>
                    <div className="space-y-3">
                      {currentSectionData.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswer(option)}
                          disabled={showFeedback}
                          className={`w-full p-4 text-left border rounded-lg transition-colors ${
                            selectedAnswer === option
                              ? option.isCorrect
                                ? 'border-green-500 bg-green-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                          } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>

                  {showFeedback && (
                    <div className={`p-4 rounded-lg mb-4 ${
                      isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                    }`}>
                      <div className="flex items-center mb-2">
                        {isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 mr-2" />
                        )}
                        <span className={`font-semibold ${
                          isCorrect ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {isCorrect ? 'Correto!' : 'Incorreto!'}
                        </span>
                      </div>
                      <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                        {isCorrect ? currentSectionData.correctFeedback : currentSectionData.incorrectFeedback}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navegação */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevSection}
              disabled={currentSection === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Anterior
            </Button>
            
            {(currentSectionData?.type === 'content' || showFeedback) && (
              <Button onClick={nextSection}>
                {currentSection === currentLesson?.sections.length - 1 ? 'Finalizar' : 'Próximo'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Renderização principal
  if (!currentUser) {
    if (showPasswordRecovery) {
      return (
        <PasswordRecoveryView 
          recoveryForm={recoveryForm}
          handlePasswordRecovery={handlePasswordRecovery}
          handleRecoveryChange={handleRecoveryChange}
          setRecoveryForm={setRecoveryForm}
          setShowPasswordRecovery={setShowPasswordRecovery}
        />
      )
    }
    
    if (authView === 'register') {
      return (
        <RegisterView 
          registerForm={registerForm}
          showPassword={showPassword}
          showConfirmPassword={showConfirmPassword}
          setShowPassword={setShowPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          handleRegister={handleRegister}
          handleRegisterChange={handleRegisterChange}
          formatTelefone={formatTelefone}
          formatCPF={formatCPF}
          setAuthView={setAuthView}
        />
      )
    }
    
    return (
      <LoginView 
        loginForm={loginForm}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLogin={handleLogin}
        handleLoginChange={handleLoginChange}
        setAuthView={setAuthView}
        setShowPasswordRecovery={setShowPasswordRecovery}
      />
    )
  }

  if (showSettings) {
    return (
      <SettingsView 
        currentUser={currentUser}
        editMode={editMode}
        editForm={editForm}
        passwordChangeForm={passwordChangeForm}
        showCurrentPassword={showCurrentPassword}
        showNewPassword={showNewPassword}
        showConfirmNewPassword={showConfirmNewPassword}
        setShowSettings={setShowSettings}
        handleEditProfile={handleEditProfile}
        handleSaveProfile={handleSaveProfile}
        handleEditFormChange={handleEditFormChange}
        handlePasswordChange={handlePasswordChange}
        handlePasswordChangeFormChange={handlePasswordChangeFormChange}
        setShowCurrentPassword={setShowCurrentPassword}
        setShowNewPassword={setShowNewPassword}
        setShowConfirmNewPassword={setShowConfirmNewPassword}
      />
    )
  }

  if (currentView === 'lesson') {
    return <LessonView />
  }

  if (currentView === 'module') {
    return <ModuleView />
  }

  return <HomeView />
}

export default App

