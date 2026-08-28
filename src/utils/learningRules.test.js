import { describe, expect, it } from 'vitest'
import { createAttemptToken, getProgressLevel, normalizeQuestion, resolveTotalStudySeconds } from './learningRules'

describe('regras de progresso e questões', () => {
  it('calcula o nível sem permitir valor inferior a um', () => {
    expect(getProgressLevel(0)).toBe(1)
    expect(getProgressLevel(499)).toBe(1)
    expect(getProgressLevel(500)).toBe(2)
    expect(getProgressLevel(1500)).toBe(4)
  })

  it('normaliza alternativas no formato A/B/C/D e preserva a resposta correta', () => {
    const question = normalizeQuestion({
      text: 'Questão exemplo',
      options: { A: 'Alternativa A', B: 'Alternativa B', C: 'Alternativa C', D: 'Alternativa D' },
      correct: 'C',
    })

    expect(question.options).toEqual(['Alternativa A', 'Alternativa B', 'Alternativa C', 'Alternativa D'])
    expect(question.correct).toBe(2)
  })

  it('aceita o formato histórico de alternativas em lista numérica', () => {
    const question = normalizeQuestion({
      options: ['A', 'B', 'C', 'D'],
      correct: 3,
    })

    expect(question.options).toEqual(['A', 'B', 'C', 'D'])
    expect(question.correct).toBe(3)
  })

  it('usa a primeira alternativa como valor seguro quando a resposta é inválida', () => {
    expect(normalizeQuestion({ options: { A: 'A', B: 'B' }, correct: 'Z' }).correct).toBe(0)
    expect(normalizeQuestion(null)).toBeNull()
  })

  it('cria tokens distintos para proteger reenvios de tentativas', () => {
    expect(createAttemptToken()).not.toBe(createAttemptToken())
  })

  it('atualiza o tempo pelo total retornado ou soma apenas o checkpoint incremental', () => {
    expect(resolveTotalStudySeconds(180, { total_study_seconds: 420 })).toBe(420)
    expect(resolveTotalStudySeconds(180, { seconds_added: 45 })).toBe(225)
    expect(resolveTotalStudySeconds(180, {})).toBe(180)
  })
})
