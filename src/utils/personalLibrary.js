const normalizeSearchText = (value) => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLocaleLowerCase('pt-BR')
  .trim()

export const savedLessonKey = (moduleId, lessonId) => `${moduleId}:${Number(lessonId)}`

export const flattenLessonCatalog = (modulesData = {}) => Object.entries(modulesData)
  .flatMap(([moduleId, module]) => (module?.lessons || []).map((lesson) => ({
    moduleId,
    moduleTitle: module.title || 'Trilha de estudo',
    moduleDescription: module.description || '',
    lessonId: Number(lesson.id),
    lessonTitle: lesson.title || `Lição ${lesson.id}`,
    duration: lesson.duration || '',
    xp: Number(lesson.xp) || 0,
  })))
  .sort((first, second) => first.moduleTitle.localeCompare(second.moduleTitle, 'pt-BR') || first.lessonId - second.lessonId)

export const filterLessonCatalog = (lessons, searchTerm) => {
  const term = normalizeSearchText(searchTerm)
  if (!term) return lessons

  return lessons.filter((lesson) => normalizeSearchText([
    lesson.lessonTitle,
    lesson.moduleTitle,
    lesson.moduleDescription,
    `lição ${lesson.lessonId}`,
    lesson.lessonId,
  ].join(' ')).includes(term))
}

export const sortSavedLessons = (lessons, savedEntries) => {
  const savedAtByKey = new Map((savedEntries || []).map((entry) => [
    savedLessonKey(entry.module_id, entry.lesson_id),
    entry.saved_at || '',
  ]))

  return lessons
    .filter((lesson) => savedAtByKey.has(savedLessonKey(lesson.moduleId, lesson.lessonId)))
    .sort((first, second) => String(savedAtByKey.get(savedLessonKey(second.moduleId, second.lessonId)))
      .localeCompare(String(savedAtByKey.get(savedLessonKey(first.moduleId, first.lessonId)))))
}
