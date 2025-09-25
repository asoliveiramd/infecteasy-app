import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { BookOpen, Search, X } from 'lucide-react'

// Componente para termos do glossário com tooltip
export function GlossaryTerm({ children, term, definition }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="text-blue-600 underline cursor-help font-medium">
        {children || term}
      </span>
      {showTooltip && (
        <div className="absolute z-50 w-64 p-3 mt-2 text-sm bg-white border border-gray-200 rounded-lg shadow-lg -left-32">
          <div className="font-semibold text-gray-900 mb-1">{term}</div>
          <div className="text-gray-700">{definition}</div>
        </div>
      )}
    </span>
  )
}

// Dados do glossário
const glossaryData = [
  {
    term: "Antibiograma",
    definition: "Teste laboratorial que determina a sensibilidade de bactérias a diferentes antibióticos, orientando a escolha terapêutica.",
    category: "Diagnóstico"
  },
  {
    term: "Bacteremia",
    definition: "Presença de bactérias viáveis na corrente sanguínea, detectada através de hemoculturas positivas.",
    category: "Clínica"
  },
  {
    term: "Coloração de Gram",
    definition: "Técnica de coloração diferencial que classifica bactérias em Gram-positivas (roxas) e Gram-negativas (rosas).",
    category: "Diagnóstico"
  },
  {
    term: "CIM",
    definition: "Concentração Inibitória Mínima - menor concentração de antibiótico capaz de inibir o crescimento bacteriano visível.",
    category: "Diagnóstico"
  },
  {
    term: "ESBL",
    definition: "Beta-lactamase de Espectro Estendido - enzimas que conferem resistência a penicilinas e cefalosporinas.",
    category: "Resistência"
  },
  {
    term: "Hemocultura",
    definition: "Exame que detecta a presença de microrganismos no sangue, fundamental no diagnóstico de sepse.",
    category: "Diagnóstico"
  },
  {
    term: "MRSA",
    definition: "Staphylococcus aureus Resistente à Meticilina - cepa resistente a antibióticos beta-lactâmicos.",
    category: "Resistência"
  },
  {
    term: "Sepse",
    definition: "Resposta sistêmica desregulada do organismo a uma infecção, podendo levar à disfunção orgânica.",
    category: "Clínica"
  },
  {
    term: "Urocultura",
    definition: "Exame de urina que identifica e quantifica bactérias, diagnosticando infecções do trato urinário.",
    category: "Diagnóstico"
  },
  {
    term: "VRE",
    definition: "Enterococcus Resistente à Vancomicina - enterococos resistentes ao antibiótico vancomicina.",
    category: "Resistência"
  }
]

// Componente principal do glossário
export default function Glossary({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const categories = ['Todos', ...new Set(glossaryData.map(item => item.category))]

  const filteredTerms = glossaryData.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Glossário Médico</h1>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Filtros */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar termos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Lista de termos */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredTerms.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-blue-600">{item.term}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {item.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{item.definition}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">Nenhum termo encontrado para "{searchTerm}"</p>
        </div>
      )}
    </div>
  )
}
