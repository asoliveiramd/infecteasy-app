import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Microscope, BookOpen, Trophy, Star, ChevronRight, Play, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [userProgress, setUserProgress] = useState({
    level: 1,
    xp: 150,
    streak: 3,
    completedLessons: 2
  })

  const lessons = [
    {
      id: 1,
      title: "O Método de Gram na Prática",
      description: "Aprenda a interpretar resultados de Gram para orientar a antibioticoterapia empírica",
      duration: "10 min",
      xp: 50,
      completed: true,
      topics: ["Coloração", "Interpretação", "Aplicação Clínica"]
    },
    {
      id: 2,
      title: "Espécimes Clínicos e Interpretação",
      description: "Diferenças entre locais estéreis e não estéreis, qualidade da amostra",
      duration: "8 min",
      xp: 40,
      completed: true,
      topics: ["Locais Estéreis", "Qualidade da Amostra", "Interpretação"]
    },
    {
      id: 3,
      title: "Morfologia Bacteriana - Gram Positivos",
      description: "Cocos e bacilos Gram-positivos: características e identificação",
      duration: "12 min",
      xp: 60,
      completed: false,
      topics: ["Staphylococcus", "Streptococcus", "Bacilos GP"]
    },
    {
      id: 4,
      title: "Morfologia Bacteriana - Gram Negativos",
      description: "Cocos e bacilos Gram-negativos: características e identificação",
      duration: "12 min",
      xp: 60,
      completed: false,
      topics: ["Neisseria", "Enterobactérias", "BGN não fermentadores"]
    },
    {
      id: 5,
      title: "Cultura e Identificação Laboratorial",
      description: "Meios de cultura, testes de bancada e comunicação com o laboratório",
      duration: "15 min",
      xp: 70,
      completed: false,
      topics: ["Meios de Cultura", "Testes de Bancada", "MALDI-TOF"]
    },
    {
      id: 6,
      title: "Revisão e Aplicação Clínica",
      description: "Consolidação dos conceitos e aplicação na prática médica",
      duration: "20 min",
      xp: 80,
      completed: false,
      topics: ["Casos Clínicos", "Tomada de Decisão", "Pontos-Chave"]
    }
  ]

  const HomeView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Microscope className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">MicroApp</h1>
          </div>
          <p className="text-xl text-gray-600">Microbiologia para Clínicos</p>
          <p className="text-sm text-gray-500 mt-2">Aprenda de forma interativa e gamificada</p>
        </div>

        {/* User Progress Card */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  Nível {userProgress.level}
                </CardTitle>
                <CardDescription>
                  {userProgress.xp} XP • {userProgress.streak} dias seguidos
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {userProgress.completedLessons}/6 lições
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progresso do Módulo</span>
                <span>{Math.round((userProgress.completedLessons / 6) * 100)}%</span>
              </div>
              <Progress value={(userProgress.completedLessons / 6) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Lessons Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                lesson.completed 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-white hover:bg-blue-50'
              }`}
              onClick={() => setCurrentView('lesson')}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg flex items-center">
                      {lesson.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      ) : (
                        <Play className="h-5 w-5 text-blue-600 mr-2" />
                      )}
                      {lesson.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {lesson.description}
                    </CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{lesson.duration}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{lesson.xp} XP</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {lesson.topics.map((topic, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Module Preview */}
        <Card className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-800">
              <BookOpen className="h-5 w-5 mr-2" />
              Próximo Módulo: Antibioticoterapia
            </CardTitle>
            <CardDescription className="text-purple-600">
              Desbloqueie após completar o módulo de Microbiologia
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-purple-700">
              Aprenda sobre espectros de ação, doses, resistência bacteriana e muito mais!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const LessonView = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-3xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentView('home')}
          className="mb-4"
        >
          ← Voltar ao Menu
        </Button>
        
        <Card className="bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Microscope className="h-6 w-6 text-blue-600 mr-2" />
              O Método de Gram na Prática
            </CardTitle>
            <CardDescription>
              Lição 1 de 6 • Fundamentos da Microbiologia Clínica
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Progresso da Lição</span>
                <span>3/5 seções</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>

            {/* Content Preview */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">O que é o Método de Gram?</h3>
              <p className="text-gray-700 mb-4">
                O método de Gram, desenvolvido por Hans Christian Gram em 1884, é uma técnica 
                fundamental para a diferenciação de bactérias. É especialmente útil para orientar 
                o gerenciamento clínico empírico na pendência de cultura e dados moleculares.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <h4 className="font-medium mb-2">💡 Dica Clínica</h4>
                <p className="text-sm text-gray-600">
                  Não confundir bacterioscopia (Gram) com baciloscopia (Ziehl ou pesquisa de BAAR)!
                </p>
              </div>
            </div>

            {/* Interactive Element Preview */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-semibold mb-3">🎯 Desafio Interativo</h3>
              <p className="text-gray-700 mb-4">
                Identifique a coloração correta para cada tipo de bactéria:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border text-center cursor-pointer hover:bg-blue-50">
                  <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Gram-positivas</p>
                </div>
                <div className="bg-white p-3 rounded border text-center cursor-pointer hover:bg-blue-50">
                  <div className="w-8 h-8 bg-pink-500 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Gram-negativas</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button variant="outline">
                Anterior
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Continuar Lição
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  return currentView === 'home' ? <HomeView /> : <LessonView />
}

export default App

