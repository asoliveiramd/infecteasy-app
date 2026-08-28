import { describe, expect, it } from 'vitest'
import { filterLessonCatalog, flattenLessonCatalog, savedLessonKey, sortSavedLessons } from './personalLibrary'

const modules = {
  microbiologia: {
    title: 'Fundamentos da Microbiologia',
    description: 'Conceitos essenciais',
    lessons: [{ id: 1, title: 'Introdução à Coloração de Gram', duration: '8 min', xp: 50 }],
  },
  antibiograma: {
    title: 'Teste de Suscetibilidade Antimicrobiana',
    description: 'Interpretação de resultados',
    lessons: [{ id: 2, title: 'Métodos Convencionais de TSA', duration: '18 min', xp: 90 }],
  },
}

describe('Biblioteca pessoal', () => {
  it('achata o catálogo preservando trilha e identificação da lição', () => {
    const lessons = flattenLessonCatalog(modules)

    expect(lessons).toHaveLength(2)
    expect(lessons).toEqual(expect.arrayContaining([
      expect.objectContaining({ moduleId: 'microbiologia', lessonId: 1, lessonTitle: 'Introdução à Coloração de Gram' }),
      expect.objectContaining({ moduleId: 'antibiograma', lessonId: 2, lessonTitle: 'Métodos Convencionais de TSA' }),
    ]))
  })

  it('ignora módulos que não pertencem ao catálogo oficial', () => {
    const lessons = flattenLessonCatalog({
      ...modules,
      curso_externo: {
        title: 'Curso externo',
        lessons: [{ id: 1, title: 'Conteúdo fora do catálogo' }],
      },
    })

    expect(lessons).toHaveLength(2)
    expect(lessons.some((lesson) => lesson.moduleId === 'curso_externo')).toBe(false)
  })

  it('encontra texto sem depender de acentos ou maiúsculas', () => {
    const lessons = flattenLessonCatalog(modules)

    expect(filterLessonCatalog(lessons, 'coloracao')).toHaveLength(1)
    expect(filterLessonCatalog(lessons, 'SUSCETIBILIDADE')).toHaveLength(1)
    expect(filterLessonCatalog(lessons, 'lição 2')[0].lessonTitle).toBe('Métodos Convencionais de TSA')
  })

  it('distingue lições salvas por módulo e número', () => {
    expect(savedLessonKey('microbiologia', 1)).toBe('microbiologia:1')
    expect(savedLessonKey('antibiograma', 1)).toBe('antibiograma:1')
  })

  it('ordena a biblioteca pela data de salvamento mais recente', () => {
    const lessons = flattenLessonCatalog(modules)
    const sorted = sortSavedLessons(lessons, [
      { module_id: 'microbiologia', lesson_id: 1, saved_at: '2026-08-26T12:00:00Z' },
      { module_id: 'antibiograma', lesson_id: 2, saved_at: '2026-08-27T12:00:00Z' },
    ])

    expect(sorted.map((lesson) => lesson.lessonId)).toEqual([2, 1])
  })
})
