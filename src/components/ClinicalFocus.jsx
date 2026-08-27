import React from 'react'
import markdownToHtml from '../utils/markdownToHtml'
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  ClipboardCheck,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Microscope,
  Pill,
  Play,
  ShieldCheck,
  Target,
  TrendingUp,
  Trophy,
  UserRound,
} from 'lucide-react'

const moduleMeta = {
  microbiologia: {
    accent: 'bg-[#0F5C73]',
    soft: 'bg-[#E6F3F6]',
    ink: 'text-[#0F5C73]',
    line: 'border-[#B9DCE5]',
    icon: Microscope,
    label: 'Fundamentos',
  },
  antibiograma: {
    accent: 'bg-[#15756D]',
    soft: 'bg-[#E8F5F1]',
    ink: 'text-[#15756D]',
    line: 'border-[#BCE2D9]',
    icon: FlaskConical,
    label: 'Interpretação',
  },
  antibioticoterapia: {
    accent: 'bg-[#496C9E]',
    soft: 'bg-[#EDF2FA]',
    ink: 'text-[#496C9E]',
    line: 'border-[#CCD8EC]',
    icon: Pill,
    label: 'Aplicação clínica',
  },
}

function getMeta(moduleId) {
  return moduleMeta[moduleId] || moduleMeta.microbiologia
}

function AppMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F4C5C] text-white shadow-sm">
        <ShieldCheck size={21} strokeWidth={1.9} />
      </div>
      {!compact && (
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5B7480]">Estudo clínico</p>
          <h1 className="text-lg font-semibold tracking-[-0.02em] text-[#17313A]">InfectEasy</h1>
        </div>
      )}
    </div>
  )
}

function ProgressBar({ value = 0, color = 'bg-[#15807A]' }) {
  const safeValue = Math.max(0, Math.min(100, value || 0))
  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#DFE8EB]" aria-label={`${Math.round(safeValue)}% concluído`}>
      <div className={`h-full rounded-full ${color} transition-[width] duration-300`} style={{ width: `${safeValue}%` }} />
    </div>
  )
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
        active ? 'bg-[#E6F3F6] text-[#0F4C5C]' : 'text-[#60757D] hover:bg-[#F0F5F6] hover:text-[#17313A]'
      }`}
    >
      {React.createElement(icon, { size: 18, strokeWidth: active ? 2.15 : 1.85 })}
      <span>{label}</span>
    </button>
  )
}

export function ClinicalFocusLayout({ children, currentView, user, userProgress, onDashboard, onPerformance, onLogout, onBack, backLabel }) {
  const viewLabel = currentView === 'lesson' ? 'Lição' : currentView === 'moduleView' ? 'Trilha' : currentView === 'performance' ? 'Meu desempenho' : 'Visão geral'
  const initials = (user?.name || user?.email || 'IE')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <div className="min-h-screen bg-[#F4F7F8] text-[#17313A]">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-[#DCE6E8] bg-white px-4 py-6 lg:flex">
        <AppMark />
        <div className="mt-10 space-y-1">
          <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8AA0A8]">Navegação</p>
          <NavItem icon={LayoutDashboard} label="Visão geral" active={currentView === 'dashboard'} onClick={onDashboard} />
          <NavItem icon={BookOpen} label="Trilhas de estudo" active={currentView === 'moduleView' || currentView === 'lesson'} onClick={onDashboard} />
          <NavItem icon={BarChart3} label="Meu desempenho" active={currentView === 'performance'} onClick={onPerformance || onDashboard} />
        </div>
        <div className="mt-auto rounded-2xl border border-[#DCE8E9] bg-[#F7FBFB] p-4">
          <div className="flex items-center gap-2 text-[#315A65]">
            <Target size={17} />
            <span className="text-sm font-semibold">Estudo consistente</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-[#668087]">Progresso clínico construído uma lição por vez.</p>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-[#DCE6E8] bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="lg:hidden"><AppMark compact /></div>
              {onBack ? (
                <button type="button" onClick={onBack} className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-[#42616B] transition-colors hover:bg-[#EFF5F6] hover:text-[#17313A]">
                  <ArrowLeft size={17} />
                  <span>{backLabel || 'Voltar'}</span>
                </button>
              ) : (
                <p className="hidden text-sm font-medium text-[#526D75] sm:block">{viewLabel}</p>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden items-center gap-2 rounded-lg border border-[#DDE8E9] bg-[#F9FBFB] px-3 py-2 sm:flex">
                <Award size={16} className="text-[#15807A]" />
                <span className="text-xs font-semibold text-[#315A65]">{userProgress?.xp || 0} pontos de estudo</span>
              </div>
              <div className="hidden items-center gap-2 rounded-lg border border-[#DDE8E9] bg-white px-2 py-1.5 sm:flex">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E6F3F6] text-[10px] font-bold text-[#0F5C73]">{initials}</div>
                <span className="max-w-28 truncate text-xs font-medium text-[#315A65]">{user?.name || 'Meu perfil'}</span>
              </div>
              <button type="button" onClick={onLogout} aria-label="Sair" className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#668087] transition-colors hover:bg-[#FDEEEE] hover:text-[#B14949]">
                <LogOut size={18} />
              </button>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-9">{children}</main>
      </div>
    </div>
  )
}

function formatStudyTime(totalSeconds = 0) {
  const minutes = Math.max(0, Math.floor((Number(totalSeconds) || 0) / 60))
  if (minutes < 60) return `${minutes} min`
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return remainingMinutes ? `${hours} h ${remainingMinutes} min` : `${hours} h`
}

function Metric({ icon, label, value, hint }) {
  return (
    <div className="rounded-2xl border border-[#E1EAEC] bg-white p-4 shadow-[0_1px_2px_rgba(15,46,56,0.03)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-[#6E858C]">{label}</span>
        {React.createElement(icon, { size: 17, className: 'text-[#5A8C90]' })}
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#17313A]">{value}</p>
      <p className="mt-1 text-xs text-[#758C93]">{hint}</p>
    </div>
  )
}

function ModuleCard({ moduleId, module, progress, onOpen }) {
  const meta = getMeta(moduleId)
  const Icon = meta.icon
  const completed = progress.completed
  return (
    <button type="button" onClick={onOpen} className="group rounded-2xl border border-[#DFE9EB] bg-white p-5 text-left shadow-[0_1px_2px_rgba(15,46,56,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B7CDD2] hover:shadow-[0_12px_24px_rgba(19,63,73,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${meta.soft} ${meta.ink}`}><Icon size={21} /></div>
        <ChevronRight size={18} className="mt-1 text-[#9AAEB4] transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
      <div className="mt-5">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${meta.ink}`}>{meta.label}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-[#17313A]">{module.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#667E85]">{module.description}</p>
      </div>
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-xs"><span className="font-medium text-[#60777E]">{completed} de {module.lessons.length} lições</span><span className="text-[#80959B]">{Math.round(progress.percent)}%</span></div>
        <ProgressBar value={progress.percent} color={meta.accent} />
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#315A65]"><span>Abrir trilha</span><ArrowRight size={16} /></div>
    </button>
  )
}

export function ClinicalFocusDashboard({ modulesData, user, userProgress, showWelcome, onDismissWelcome, isLessonCompleted, isLessonUnlocked, getNextLesson, onOpenModule, onStartLesson, onPerformance, learningInsights, onOpenRecommendation, onLogout }) {
  const moduleIds = ['microbiologia', 'antibiograma', 'antibioticoterapia'].filter((id) => modulesData[id])
  const recommendations = Array.isArray(learningInsights?.recommendations) ? learningInsights.recommendations : []
  const achievements = Array.isArray(learningInsights?.achievements) ? learningInsights.achievements : []
  const insightsLoading = Boolean(learningInsights?.loading)
  const insightsReady = Boolean(learningInsights?.ready)
  const getModuleLabel = (moduleId) => modulesData[moduleId]?.title || 'Trilha de estudo'
  const getAchievementDetails = (achievement) => {
    const catalog = Array.isArray(achievement?.achievement_catalog)
      ? achievement.achievement_catalog[0]
      : achievement?.achievement_catalog
    return {
      title: catalog?.title || 'Marco de competência',
      description: catalog?.description || 'Um marco privado do seu percurso de estudo.',
      category: catalog?.category || 'progresso',
    }
  }
  const progressFor = (moduleId) => {
    const module = modulesData[moduleId]
    const completed = module.lessons.filter((lesson) => isLessonCompleted(moduleId, lesson.id)).length
    return { completed, percent: module.lessons.length ? (completed / module.lessons.length) * 100 : 0 }
  }
  const nextModuleId = moduleIds.find((moduleId) => getNextLesson(moduleId, modulesData[moduleId].lessons) !== null) || moduleIds[0]
  const nextModule = modulesData[nextModuleId]
  const nextLessonId = getNextLesson(nextModuleId, nextModule.lessons)
  const nextLesson = nextModule.lessons.find((lesson) => lesson.id === nextLessonId) || nextModule.lessons[0]
  const totalCompleted = moduleIds.reduce((total, moduleId) => total + progressFor(moduleId).completed, 0)
  const totalLessons = moduleIds.reduce((total, moduleId) => total + modulesData[moduleId].lessons.length, 0)

  return (
    <ClinicalFocusLayout currentView="dashboard" user={user} userProgress={userProgress} onDashboard={() => {}} onPerformance={onPerformance} onLogout={onLogout}>
      {showWelcome && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#102B33]/45 p-4 backdrop-blur-sm"><div role="dialog" aria-modal="true" aria-label="Boas-vindas" className="w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-[0_24px_64px_rgba(7,44,54,0.24)]"><div className="border-b border-[#D9E7E9] bg-[#F1F8F8] p-6 sm:p-8"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F4C5C] text-white"><ShieldCheck size={22} /></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#51737B]">Ambiente de estudo clínico</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#17313A]">Bem-vindo ao InfectEasy</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[#58747B]">Organize seu estudo em blocos curtos, pratique decisões clínicas e acompanhe sua evolução com clareza.</p></div><div className="p-6 sm:p-8"><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-[#F6FAFA] p-3"><BookOpen size={18} className="text-[#0F5C73]" /><p className="mt-3 text-sm font-semibold text-[#244C55]">Trilhas estruturadas</p><p className="mt-1 text-xs leading-5 text-[#6B838A]">Conteúdo organizado por competência.</p></div><div className="rounded-xl bg-[#F6FAFA] p-3"><Target size={18} className="text-[#15756D]" /><p className="mt-3 text-sm font-semibold text-[#244C55]">Prática aplicada</p><p className="mt-1 text-xs leading-5 text-[#6B838A]">Questões para consolidar decisões.</p></div><div className="rounded-xl bg-[#F6FAFA] p-3"><TrendingUp size={18} className="text-[#496C9E]" /><p className="mt-3 text-sm font-semibold text-[#244C55]">Progresso visível</p><p className="mt-1 text-xs leading-5 text-[#6B838A]">Evolução acompanhada ao longo do tempo.</p></div></div><div className="mt-7 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><button type="button" onClick={onDismissWelcome} className="rounded-xl px-4 py-2.5 text-sm font-semibold text-[#5C767E] hover:bg-[#F2F7F7]">Explorar depois</button><button type="button" onClick={onDismissWelcome} className="rounded-xl bg-[#0F4C5C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#103F4D]">Começar a estudar</button></div></div></div></div>}
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(260px,0.72fr)]">
        <div className="overflow-hidden rounded-3xl bg-[#103F4D] p-6 text-white shadow-[0_18px_42px_rgba(15,76,92,0.18)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B4D4D8]">Seu próximo passo</p>
          <div className="mt-8 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-2 text-sm text-[#C7E1E2]"><BookOpen size={16} /><span>{nextModule.title}</span></div>
              <h2 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{nextLesson?.title || 'Continue sua trilha de estudo'}</h2>
              <p className="mt-3 text-sm leading-6 text-[#C7E1E2]">Retome o ponto em que parou e avance com um objetivo clínico claro.</p>
            </div>
            <button type="button" onClick={() => onStartLesson(nextModuleId, nextLesson.id)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#103F4D] transition-transform duration-150 hover:bg-[#EAF6F7] active:scale-[0.98]">
              <Play size={16} fill="currentColor" />
              Continuar estudo
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/15 pt-5 text-xs text-[#C7E1E2]"><span className="inline-flex items-center gap-2"><Clock3 size={15} /> {nextLesson?.duration || 'Estudo guiado'}</span><span className="inline-flex items-center gap-2"><Target size={15} /> {nextLesson?.xp || 0} pontos ao concluir</span></div>
        </div>
        <div className="rounded-3xl border border-[#D9E7E9] bg-[#ECF6F6] p-6">
          <div className="flex items-center gap-2 text-[#315A65]"><TrendingUp size={18} /><span className="text-sm font-semibold">Visão de progresso</span></div>
          <p className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#17313A]">{totalLessons ? Math.round((totalCompleted / totalLessons) * 100) : 0}%</p>
          <p className="mt-1 text-sm text-[#5E7980]">da jornada de aprendizagem concluída</p>
          <div className="mt-6"><ProgressBar value={totalLessons ? (totalCompleted / totalLessons) * 100 : 0} color="bg-[#15807A]" /></div>
          <p className="mt-4 text-xs leading-5 text-[#6A838A]">{totalCompleted} de {totalLessons} lições concluídas em suas trilhas.</p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric icon={BookOpen} label="Lições concluídas" value={totalCompleted} hint={`de ${totalLessons} disponíveis`} />
        <Metric icon={Award} label="Pontos de estudo" value={userProgress?.xp || 0} hint="Reconhecem sua consistência" />
        <Metric icon={TrendingUp} label="Sequência de estudo" value={`${userProgress?.streak || 0} dias`} hint="Atualizada no fuso de Salvador" />
        <Metric icon={Clock3} label="Tempo de estudo" value={formatStudyTime(userProgress?.totalStudySeconds)} hint="Registrado em sessões ativas" />
      </section>

      <section className="mt-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#6D858C]">Trilhas em andamento</p><h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#17313A]">Construa competência passo a passo</h2></div><p className="text-sm text-[#688087]">Cada trilha organiza conteúdo, prática e revisão.</p></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{moduleIds.map((moduleId) => <ModuleCard key={moduleId} moduleId={moduleId} module={modulesData[moduleId]} progress={progressFor(moduleId)} onOpen={() => onOpenModule(moduleId)} />)}</div>
      </section>

      <section className="mt-8 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.9fr)]">
        <div className="rounded-2xl border border-[#DCE8E9] bg-white p-5 shadow-[0_1px_2px_rgba(15,46,56,0.03)] sm:p-6">
          <div className="flex flex-col gap-3 border-b border-[#E3ECEE] pb-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4F4] text-[#197477]"><GraduationCap size={20} /></div><div><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#69838A]">Plano individual</p><h3 className="mt-1 font-semibold text-[#17313A]">Revisões orientadas pela sua aprendizagem</h3><p className="mt-1 max-w-xl text-sm leading-5 text-[#688087]">Sugestões privadas geradas a partir das suas respostas e do intervalo desde o último estudo.</p></div></div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#F2F7F7] px-3 py-2 text-[11px] font-semibold text-[#60777E]"><LockKeyhole size={13} /> Somente você</span>
          </div>

          <div className="mt-5 space-y-3">
            {insightsLoading && <div className="rounded-xl border border-dashed border-[#D9E6E8] bg-[#FAFCFC] px-4 py-5 text-sm text-[#6C848B]">Atualizando suas recomendações clínicas...</div>}
            {!insightsLoading && recommendations.map((recommendation) => {
              const reviewIsUnlocked = isLessonUnlocked?.(recommendation.module_id, recommendation.lesson_id)
              const isLowAccuracy = recommendation.reason_code === 'low_accuracy'
              const supportingText = isLowAccuracy
                ? `${Number(recommendation.accuracy_percent || 0).toFixed(0)}% de precisão em ${recommendation.attempts_count || 0} questões respondidas.`
                : `${recommendation.days_since_last_completion || 14} dias desde sua última conclusão nesta trilha.`
              return <article key={`${recommendation.module_id}-${recommendation.lesson_id}-${recommendation.reason_code}`} className="rounded-xl border border-[#DCE8E9] bg-[#FBFDFD] p-4 transition-colors hover:border-[#BFD5D9]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><span className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${getMeta(recommendation.module_id).soft} ${getMeta(recommendation.module_id).ink}`}>{getModuleLabel(recommendation.module_id)}</span><span className="text-xs text-[#71888E]">Revisão sugerida</span></div><h4 className="mt-2 font-semibold text-[#1B3A43]">{recommendation.review_title}</h4><p className="mt-1 text-sm leading-5 text-[#617B82]">{recommendation.reason_text}</p><p className="mt-2 text-xs font-medium text-[#507079]">{supportingText}</p></div><button type="button" onClick={() => onOpenRecommendation?.(recommendation)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-[#BFD4D8] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#28525D] transition-colors hover:bg-[#EFF7F7]">{reviewIsUnlocked ? 'Abrir revisão' : 'Ver trilha'}<ArrowRight size={15} /></button></div>
              </article>
            })}
            {!insightsLoading && insightsReady && recommendations.length === 0 && <div className="rounded-xl border border-[#DDE8EA] bg-[#F8FBFB] px-4 py-5"><div className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[#20806C]" size={18} /><div><p className="text-sm font-semibold text-[#28535B]">Nenhuma revisão prioritária no momento</p><p className="mt-1 text-sm leading-5 text-[#698188]">Continue a trilha no seu ritmo. Novas recomendações aparecerão quando houver evidência suficiente para personalizar a revisão.</p></div></div></div>}
            {!insightsLoading && !insightsReady && <div className="rounded-xl border border-[#DDE8EA] bg-[#F8FBFB] px-4 py-5 text-sm leading-5 text-[#698188]">As recomendações serão atualizadas ao iniciar sua sessão de estudo.</div>}
          </div>
        </div>

        <aside className="rounded-2xl border border-[#DFE8EA] bg-[#F7FAFA] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3"><div><p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6D858C]">Competência</p><h3 className="mt-1 font-semibold text-[#17313A]">Seus marcos</h3></div><Trophy size={20} className="text-[#5A8785]" /></div>
          <p className="mt-2 text-sm leading-5 text-[#698087]">Reconhecimentos individuais do seu percurso — sem comparações públicas.</p>
          <div className="mt-5 space-y-3">
            {achievements.slice(0, 3).map((achievement) => {
              const details = getAchievementDetails(achievement)
              return <div key={`${achievement.achievement_code}-${achievement.module_id}`} className="rounded-xl border border-[#E0EAEB] bg-white p-3.5"><div className="flex gap-3"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E9F3F3] text-[#28636A]"><Award size={16} /></div><div><p className="text-sm font-semibold text-[#28515B]">{details.title}</p><p className="mt-1 text-xs leading-5 text-[#6A8288]">{details.description}</p>{achievement.module_id && achievement.module_id !== 'global' && <p className="mt-1.5 text-[11px] font-semibold text-[#52757E]">{getModuleLabel(achievement.module_id)}</p>}</div></div></div>
            })}
            {!insightsLoading && insightsReady && achievements.length === 0 && <div className="rounded-xl border border-dashed border-[#D6E3E5] bg-white/70 p-4 text-sm leading-5 text-[#6A838A]">Conclua lições, revisões e sequências de estudo para registrar seus primeiros marcos.</div>}
            {insightsLoading && <div className="rounded-xl border border-dashed border-[#D6E3E5] bg-white/70 p-4 text-sm text-[#6A838A]">Atualizando seus marcos privados...</div>}
          </div>
        </aside>
      </section>
    </ClinicalFocusLayout>
  )
}

function formatReportDate(value) {
  if (!value) return 'Sem registros recentes'
  try {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
  } catch {
    return 'Data indisponível'
  }
}

function formatPrecision(correctAnswers, attemptsCount) {
  const attempts = Number(attemptsCount) || 0
  if (attempts < 4) return '—'
  return `${Math.round(((Number(correctAnswers) || 0) / attempts) * 100)}%`
}

function PerformanceMetric({ icon, label, value, hint }) {
  return <div className="rounded-2xl border border-[#E0E9EB] bg-white p-4 shadow-[0_1px_2px_rgba(15,46,56,0.03)]"><div className="flex items-center justify-between"><span className="text-xs font-medium text-[#6E858C]">{label}</span>{React.createElement(icon, { size: 17, className: 'text-[#5A8C90]' })}</div><p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#17313A]">{value}</p><p className="mt-1 text-xs leading-5 text-[#758C93]">{hint}</p></div>
}

function getCompetencyStyle(status) {
  if (status === 'dominio_consolidado') return { label: 'Domínio consistente', className: 'bg-[#E8F5F0] text-[#14745C]' }
  if (status === 'em_consolidacao') return { label: 'Em consolidação', className: 'bg-[#EAF4F4] text-[#23676D]' }
  if (status === 'revisao_recomendada') return { label: 'Revisão sugerida', className: 'bg-[#FDF4E8] text-[#9A5F1A]' }
  return { label: 'Em formação', className: 'bg-[#F1F5F6] text-[#60777E]' }
}

export function ClinicalFocusPerformance({ modulesData, user, userProgress, performanceReport, onDashboard, onPerformance, onLogout }) {
  const reportModules = Array.isArray(performanceReport?.modules) ? performanceReport.modules : []
  const activities = Array.isArray(performanceReport?.activities) ? performanceReport.activities : []
  const loading = Boolean(performanceReport?.loading)
  const ready = Boolean(performanceReport?.ready)
  const totalLessons = reportModules.reduce((total, item) => total + (Number(item.total_lessons) || 0), 0)
  const completedLessons = reportModules.reduce((total, item) => total + (Number(item.completed_lessons) || 0), 0)
  const totalAttempts = reportModules.reduce((total, item) => total + (Number(item.attempts_count) || 0), 0)
  const correctAnswers = reportModules.reduce((total, item) => total + (Number(item.correct_answers) || 0), 0)
  const activeModules = reportModules.filter((item) => (Number(item.completed_lessons) || 0) > 0 || (Number(item.attempts_count) || 0) > 0).length

  return <ClinicalFocusLayout currentView="performance" user={user} userProgress={userProgress} onDashboard={onDashboard} onPerformance={onPerformance} onLogout={onLogout} onBack={onDashboard} backLabel="Visão geral">
    <section className="rounded-3xl border border-[#DCE8E9] bg-white p-6 shadow-[0_1px_2px_rgba(15,46,56,0.03)] sm:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between"><div className="max-w-2xl"><div className="flex items-center gap-2 text-[#315A65]"><BarChart3 size={19} /><span className="text-xs font-semibold uppercase tracking-[0.14em]">Acompanhamento individual</span></div><h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17313A]">Meu desempenho</h1><p className="mt-3 text-sm leading-6 text-[#637E85]">Acompanhe a evolução do seu estudo por trilha, com foco em progresso, prática e consolidação do conhecimento.</p></div><div className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#DCE8E9] bg-[#F7FBFB] px-3.5 py-2.5 text-xs font-semibold text-[#547078]"><LockKeyhole size={15} /> Dados visíveis somente para você</div></div>
    </section>

    {loading && <section className="mt-7 rounded-2xl border border-dashed border-[#D9E6E8] bg-white px-5 py-8 text-center text-sm text-[#6B858C]">Atualizando o seu relatório de aprendizagem...</section>}

    {!loading && <>
      <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <PerformanceMetric icon={BookOpen} label="Lições concluídas" value={completedLessons} hint={`de ${totalLessons || 0} disponíveis`} />
        <PerformanceMetric icon={ClipboardCheck} label="Precisão geral" value={formatPrecision(correctAnswers, totalAttempts)} hint={totalAttempts >= 4 ? `${totalAttempts} questões respondidas` : 'Mínimo de 4 questões para indicador'} />
        <PerformanceMetric icon={Clock3} label="Tempo de estudo" value={formatStudyTime(userProgress?.totalStudySeconds)} hint="Acumulado em sessões registradas" />
        <PerformanceMetric icon={Activity} label="Trilhas ativas" value={activeModules} hint="Com estudo ou prática registrada" />
      </section>

      <section className="mt-9"><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6D858C]">Evolução por trilha</p><h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-[#17313A]">Indicadores de aprendizagem</h2></div><p className="text-sm text-[#6A8188]">Precisão interpretada a partir de 4 questões.</p></div>
        <div className="mt-5 grid gap-4 xl:grid-cols-3">{reportModules.map((item) => { const meta = getMeta(item.module_id); const Icon = meta.icon; const status = getCompetencyStyle(item.competency_status); const moduleTitle = modulesData[item.module_id]?.title || 'Trilha de estudo'; return <article key={item.module_id} className="rounded-2xl border border-[#DFE9EB] bg-white p-5 shadow-[0_1px_2px_rgba(15,46,56,0.03)]"><div className="flex items-start justify-between gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${meta.soft} ${meta.ink}`}><Icon size={20} /></div><span className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.07em] ${status.className}`}>{status.label}</span></div><p className={`mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] ${meta.ink}`}>{meta.label}</p><h3 className="mt-2 min-h-12 text-lg font-semibold leading-snug text-[#17313A]">{moduleTitle}</h3><div className="mt-5 flex items-end justify-between"><span className="text-sm font-medium text-[#637B82]">{item.completed_lessons || 0} de {item.total_lessons || 0} lições</span><span className="text-xl font-semibold text-[#1B3A43]">{Math.round(Number(item.progress_percent) || 0)}%</span></div><div className="mt-2"><ProgressBar value={Number(item.progress_percent) || 0} color={meta.accent} /></div><div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#E5ECEE] pt-4"><div><p className="text-[11px] font-medium text-[#758B91]">Prática</p><p className="mt-1 text-sm font-semibold text-[#2D515A]">{item.attempts_count || 0} questões</p></div><div><p className="text-[11px] font-medium text-[#758B91]">Precisão</p><p className="mt-1 text-sm font-semibold text-[#2D515A]">{item.attempts_count >= 4 ? `${Math.round(Number(item.accuracy_percent) || 0)}%` : 'Em formação'}</p></div></div><p className="mt-4 min-h-10 text-xs leading-5 text-[#667F86]">{item.competency_message}</p>{item.last_activity_at && <p className="mt-3 text-[11px] font-medium text-[#738A90]">Última atividade: {formatReportDate(item.last_activity_at)}</p>}</article> })}</div>
        {ready && reportModules.length === 0 && <div className="mt-5 rounded-2xl border border-dashed border-[#D7E4E6] bg-white p-6 text-sm leading-6 text-[#6A838A]">Ainda não há indicadores disponíveis. Inicie uma lição para registrar o seu primeiro progresso.</div>}
      </section>

      <section className="mt-9 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(340px,0.85fr)]"><div className="rounded-2xl border border-[#DFE9EB] bg-white p-5 sm:p-6"><div className="flex items-center gap-2 text-[#315A65]"><Activity size={18} /><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6D858C]">Linha do tempo privada</p><h2 className="mt-1 text-xl font-semibold text-[#17313A]">Atividades recentes</h2></div></div><div className="mt-5 space-y-3">{activities.map((activity, index) => { const meta = getMeta(activity.module_id); const moduleTitle = modulesData[activity.module_id]?.title || 'Trilha de estudo'; return <div key={`${activity.activity_type}-${activity.activity_at}-${index}`} className="flex gap-3 rounded-xl border border-[#E2EBEC] bg-[#FBFDFD] p-3.5"><div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${meta.soft} ${meta.ink}`}>{activity.activity_type === 'lesson_completed' ? <Check size={16} /> : activity.activity_type === 'question_correct' ? <Award size={16} /> : <Clock3 size={16} />}</div><div className="min-w-0"><div className="flex flex-wrap items-center gap-x-2 gap-y-1"><p className="text-sm font-semibold text-[#294E57]">{activity.activity_title}</p><span className="text-xs text-[#6F878D]">{moduleTitle}</span></div><p className="mt-1 text-xs leading-5 text-[#6A8288]">{activity.activity_detail}</p><p className="mt-1.5 text-[11px] font-medium text-[#799097]">{formatReportDate(activity.activity_at)}</p></div></div> })}{ready && activities.length === 0 && <div className="rounded-xl border border-dashed border-[#D7E4E6] bg-[#F8FBFB] p-5 text-sm leading-6 text-[#6A838A]">Suas conclusões, respostas e sessões aparecerão aqui à medida que você estudar.</div>}</div></div>
        <aside className="rounded-2xl border border-[#D5E5E7] bg-[#EFF7F7] p-5 sm:p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2C7376]"><Target size={20} /></div><p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#54767D]">Leitura dos indicadores</p><h2 className="mt-2 text-xl font-semibold text-[#17313A]">Evolução antes de pontuação</h2><p className="mt-3 text-sm leading-6 text-[#5D7880]">A precisão apoia a escolha de revisões, mas não define a sua capacidade clínica isoladamente. Use este painel para reconhecer padrões de estudo e consolidar os temas prioritários.</p><div className="mt-5 rounded-xl border border-[#D4E6E8] bg-white/75 p-4 text-xs leading-5 text-[#5D787F]"><span className="font-semibold text-[#315A65]">Critério de interpretação:</span> a precisão é exibida como indicador apenas após quatro ou mais questões respondidas na trilha.</div></aside></section>
    </>}
  </ClinicalFocusLayout>
}

export function ClinicalFocusModule({ moduleId, module, user, userProgress, isLessonCompleted, isLessonUnlocked, getNextLesson, onStartLesson, onDashboard, onPerformance, onLogout }) {
  const meta = getMeta(moduleId)
  const Icon = meta.icon
  const completed = module.lessons.filter((lesson) => isLessonCompleted(moduleId, lesson.id)).length
  const progress = module.lessons.length ? (completed / module.lessons.length) * 100 : 0
  const nextLessonId = getNextLesson(moduleId, module.lessons)

  return (
    <ClinicalFocusLayout currentView="moduleView" user={user} userProgress={userProgress} onDashboard={onDashboard} onPerformance={onPerformance} onLogout={onLogout} onBack={onDashboard} backLabel="Visão geral">
      <section className="rounded-3xl border border-[#DCE8E9] bg-white p-6 shadow-[0_1px_2px_rgba(15,46,56,0.03)] sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex max-w-2xl gap-4"><div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${meta.soft} ${meta.ink}`}><Icon size={24} /></div><div><p className={`text-xs font-semibold uppercase tracking-[0.14em] ${meta.ink}`}>{meta.label}</p><h1 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#17313A] sm:text-3xl">{module.title}</h1><p className="mt-3 text-sm leading-6 text-[#657E85]">{module.description}</p></div></div>
          <div className="min-w-40 rounded-2xl bg-[#F5F9F9] p-4"><p className="text-xs font-medium text-[#6B838A]">Progresso da trilha</p><p className="mt-2 text-2xl font-semibold text-[#17313A]">{Math.round(progress)}%</p><p className="mt-1 text-xs text-[#718990]">{completed} de {module.lessons.length} lições</p></div>
        </div>
        <div className="mt-7"><ProgressBar value={progress} color={meta.accent} /></div>
        {module.welcomeMessage && <div className="mt-7 rounded-2xl border border-[#DBE9EA] bg-[#F5FAFA] p-5"><div className="flex gap-3"><ShieldCheck className="mt-0.5 shrink-0 text-[#3B7A7F]" size={19} /><div><h2 className="font-semibold text-[#244C55]">Objetivo de aprendizagem</h2><p className="mt-2 whitespace-pre-line text-sm leading-6 text-[#5E7880]">{module.welcomeMessage}</p></div></div></div>}
      </section>

      <section className="mt-8"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6D858C]">Sequência de aprendizagem</p><h2 className="mt-1 text-xl font-semibold text-[#17313A]">Lições da trilha</h2></div><span className="text-sm text-[#70878E]">{module.lessons.length} lições</span></div>
        <div className="space-y-3">{module.lessons.map((lesson) => {
          const done = isLessonCompleted(moduleId, lesson.id)
          const unlocked = isLessonUnlocked(moduleId, lesson.id)
          const next = lesson.id === nextLessonId
          return <button key={lesson.id} type="button" disabled={!unlocked} onClick={() => unlocked && onStartLesson(moduleId, lesson.id)} className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5 ${done ? 'border-[#D6E9E5] bg-[#FBFEFD]' : next ? 'border-[#9FC9C9] bg-white shadow-[0_8px_22px_rgba(26,99,106,0.08)] hover:border-[#6FAAAE]' : unlocked ? 'border-[#E0E9EB] bg-white hover:border-[#B8CED2] hover:shadow-[0_6px_16px_rgba(19,63,73,0.05)]' : 'cursor-not-allowed border-[#E5EAEB] bg-[#F8FAFA] opacity-65'}`}>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ${done ? 'bg-[#E6F4EF] text-[#14745C]' : next ? `${meta.soft} ${meta.ink}` : unlocked ? 'bg-[#F0F5F6] text-[#527179]' : 'bg-[#EEF1F2] text-[#97A8AD]'}`}>{done ? <Check size={19} strokeWidth={2.4} /> : unlocked ? <span>{String(lesson.id).padStart(2, '0')}</span> : <LockKeyhole size={16} />}</div>
            <div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><span className="text-xs font-semibold text-[#637D84]">Lição {lesson.id}</span>{done && <span className="rounded-md bg-[#E9F5F0] px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#16725D]">Concluída</span>}{next && !done && <span className={`rounded-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${meta.soft} ${meta.ink}`}>Próxima recomendada</span>}</div><h3 className={`mt-1 truncate font-semibold ${unlocked ? 'text-[#1C3942]' : 'text-[#84989E]'}`}>{lesson.title}</h3><div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#71878E]"><span className="inline-flex items-center gap-1"><Clock3 size={13} />{lesson.duration}</span><span className="inline-flex items-center gap-1"><Award size={13} />{lesson.xp} pontos</span></div></div>
            {unlocked ? <ChevronRight size={20} className="shrink-0 text-[#91A6AB] transition-transform group-hover:translate-x-0.5" /> : <LockKeyhole size={17} className="shrink-0 text-[#A9B8BC]" />}
          </button>
        })}</div>
      </section>
    </ClinicalFocusLayout>
  )
}

export function ClinicalFocusLesson({ lesson, moduleId, currentSection, currentQuestion, selectedAnswer, showQuestionFeedback, user, userProgress, onDashboard, onPerformance, onLogout, onBack, onShowQuestion, onSelectAnswer, onSubmitAnswer, onNextSection, onCompleteLesson, onContinue }) {
  const meta = getMeta(moduleId)
  const section = lesson?.sections?.[currentSection]
  const total = lesson?.sections?.length || 0
  const progress = total ? ((currentSection + 1) / total) * 100 : 0
  if (!lesson || !section) return null

  return (
    <ClinicalFocusLayout currentView="lesson" user={user} userProgress={userProgress} onDashboard={onDashboard} onPerformance={onPerformance} onLogout={onLogout} onBack={onBack} backLabel="Voltar à trilha">
      <section className="mx-auto max-w-4xl">
        <div className="mb-7"><div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-[#6E858C]"><span>{lesson.title}</span><span className="h-1 w-1 rounded-full bg-[#9CB0B5]" /><span>Seção {currentSection + 1} de {total}</span><span className="h-1 w-1 rounded-full bg-[#9CB0B5]" /><span>{lesson.duration}</span></div><div className="mt-4 flex items-end justify-between gap-4"><h1 className="text-2xl font-semibold tracking-[-0.035em] text-[#17313A] sm:text-3xl">{section.title}</h1><span className={`hidden rounded-lg px-3 py-2 text-xs font-semibold sm:inline-flex ${meta.soft} ${meta.ink}`}>{lesson.xp} pontos ao concluir</span></div><div className="mt-5"><ProgressBar value={progress} color={meta.accent} /></div></div>

        <article className="overflow-hidden rounded-3xl border border-[#DFE9EB] bg-white shadow-[0_2px_4px_rgba(15,46,56,0.03)]">
          {section.videoUrl && <div className="border-b border-[#DFE9EB] bg-[#F5F9F9] p-4 sm:p-6"><div className="overflow-hidden rounded-2xl border border-[#D8E5E7] bg-[#0F2D37]" style={{ aspectRatio: '16 / 9' }}><iframe src={section.videoUrl} title="Vídeo explicativo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="h-full w-full" /></div></div>}
          <div className="clinical-content p-6 sm:p-8" dangerouslySetInnerHTML={{ __html: markdownToHtml(section.content || '') }} />
          <div className="border-t border-[#E2EAEC] bg-[#FBFCFC] p-5 sm:p-6">
            {!currentQuestion && <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-[#6D858C]">{section.question ? 'Teste a aplicação deste conteúdo antes de avançar.' : 'Quando estiver pronto, avance para a próxima seção.'}</p><div className="flex flex-wrap gap-2">{section.question && <button type="button" onClick={onShowQuestion} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0F4C5C] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#103F4D]"><Target size={16} />Responder questão</button>}{currentSection < total - 1 ? <button type="button" onClick={onNextSection} className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9D9DC] bg-white px-4 py-2.5 text-sm font-semibold text-[#315A65] transition-colors hover:bg-[#F2F7F7]">Próxima seção<ArrowRight size={16} /></button> : <button type="button" onClick={onCompleteLesson} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#15756D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#10665F]"><Check size={16} />Concluir lição</button>}</div></div>}

            {currentQuestion && <div className="rounded-2xl border border-[#D6E4E6] bg-white p-5 sm:p-6"><div className="flex items-start gap-3"><div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${meta.soft} ${meta.ink}`}><Target size={16} /></div><div><p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#718990]">Verificação de aprendizagem</p><h2 className="mt-2 text-lg font-semibold leading-7 text-[#17313A]">{currentQuestion.text}</h2></div></div><div className="mt-6 space-y-3">{currentQuestion.options.map((option, index) => { const letter = String.fromCharCode(65 + index); const selected = selectedAnswer === index; const correct = showQuestionFeedback && index === currentQuestion.correct; const incorrect = showQuestionFeedback && selected && index !== currentQuestion.correct; return <button key={index} type="button" disabled={showQuestionFeedback} onClick={() => onSelectAnswer(index)} className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm transition-colors ${correct ? 'border-[#8FCAB4] bg-[#EFF9F4] text-[#1E614B]' : incorrect ? 'border-[#E6B8B4] bg-[#FDF2F1] text-[#9B3E38]' : selected ? 'border-[#5C9AA3] bg-[#EFF7F7] text-[#17313A]' : 'border-[#DCE7E9] bg-white text-[#39545C] hover:border-[#ADC8CD] hover:bg-[#FAFCFC]'}`}><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${correct ? 'bg-[#D9F0E5] text-[#17634D]' : incorrect ? 'bg-[#F8DCDC] text-[#9B3E38]' : selected ? 'bg-[#CFE8E9] text-[#0F5966]' : 'bg-[#EEF3F4] text-[#60777E]'}`}>{letter}</span><span className="leading-6">{option}</span></button> })}</div>{!showQuestionFeedback ? <div className="mt-6 flex justify-end"><button type="button" disabled={selectedAnswer === null} onClick={onSubmitAnswer} className="rounded-xl bg-[#0F4C5C] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#103F4D] disabled:cursor-not-allowed disabled:bg-[#B6C7CA]">Confirmar resposta</button></div> : <div className={`mt-6 rounded-xl border p-4 ${selectedAnswer === currentQuestion.correct ? 'border-[#B7DDCC] bg-[#F1FAF5]' : 'border-[#EDD0CD] bg-[#FFF6F5]'}`}><p className={`font-semibold ${selectedAnswer === currentQuestion.correct ? 'text-[#1A654E]' : 'text-[#9C433D]'}`}>{selectedAnswer === currentQuestion.correct ? 'Resposta correta' : 'Ponto de atenção'}</p><p className="mt-2 text-sm leading-6 text-[#4B656C]">{currentQuestion.explanation}</p><div className="mt-5 flex flex-wrap justify-end gap-2"><button type="button" onClick={onContinue} className="rounded-xl border border-[#C9D9DC] bg-white px-4 py-2.5 text-sm font-semibold text-[#315A65] hover:bg-[#F2F7F7]">Continuar</button>{currentSection < total - 1 ? <button type="button" onClick={onNextSection} className="inline-flex items-center gap-2 rounded-xl bg-[#0F4C5C] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#103F4D]">Próxima seção<ArrowRight size={16} /></button> : <button type="button" onClick={onCompleteLesson} className="inline-flex items-center gap-2 rounded-xl bg-[#15756D] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#10665F]"><Check size={16} />Concluir lição</button>}</div></div>}</div>}
          </div>
        </article>
      </section>
    </ClinicalFocusLayout>
  )
}
