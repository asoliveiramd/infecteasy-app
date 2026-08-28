// @vitest-environment node

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const projectRoot = resolve(fileURLToPath(new URL('../..', import.meta.url)))
const readPublicAsset = (name) => readFileSync(resolve(projectRoot, 'public', name), 'utf8')

describe('recursos P7A de acesso resiliente', () => {
  it('declara um manifesto instalável com identidade do InfectEasy', () => {
    const manifest = JSON.parse(readPublicAsset('manifest.webmanifest'))

    expect(manifest.name).toContain('InfectEasy')
    expect(manifest.lang).toBe('pt-BR')
    expect(manifest.display).toBe('standalone')
    expect(manifest.icons[0].src).toBe('/infecteasy-icon.svg')
  })

  it('inclui uma página de indisponibilidade sem dados pessoais', () => {
    const offlinePage = readPublicAsset('offline.html')

    expect(offlinePage).toContain('Conexão indisponível')
    expect(offlinePage).toContain('Seus dados pessoais')
  })

  it('declara exclusão explícita das requisições Supabase no service worker', () => {
    const worker = readPublicAsset('sw.js')

    expect(worker).toContain("url.hostname.endsWith('.supabase.co')")
    expect(worker).toContain("url.pathname.startsWith('/rest/')")
    expect(worker).toContain("url.pathname.startsWith('/auth/')")
    expect(worker).toContain("url.pathname.startsWith('/functions/')")
    expect(worker).toContain('if (isSensitiveOrDynamicRequest(request))')
    expect(worker).toContain('event.respondWith(fetch(request))')
  })
})
