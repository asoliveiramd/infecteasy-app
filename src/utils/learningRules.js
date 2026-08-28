export const getProgressLevel = (xp) => Math.max(1, Math.floor(Number(xp || 0) / 500) + 1)

export const normalizeQuestion = (question) => {
  if (!question) return null

  const optionEntries = Array.isArray(question.options)
    ? question.options.map((option, index) => [String.fromCharCode(65 + index), option])
    : Object.entries(question.options || {})

  const options = optionEntries.map(([, option]) => option)
  const rawCorrect = question.correct
  const correct = typeof rawCorrect === 'string' && /^[A-D]$/i.test(rawCorrect)
    ? rawCorrect.toUpperCase().charCodeAt(0) - 65
    : Number(rawCorrect)

  return {
    ...question,
    options,
    correct: Number.isInteger(correct) ? correct : 0,
  }
}

export const createAttemptToken = () => (
  globalThis.crypto?.randomUUID?.()
    || `${Date.now()}-${Math.random().toString(16).slice(2)}-0000-4000-8000-000000000000`
)

export const resolveTotalStudySeconds = (previousTotal, checkpoint = {}) => {
  if (Number.isFinite(Number(checkpoint.total_study_seconds))) {
    return Number(checkpoint.total_study_seconds)
  }

  if (Number.isFinite(Number(checkpoint.seconds_added))) {
    return Math.max(0, Number(previousTotal) || 0) + Number(checkpoint.seconds_added)
  }

  return Math.max(0, Number(previousTotal) || 0)
}
