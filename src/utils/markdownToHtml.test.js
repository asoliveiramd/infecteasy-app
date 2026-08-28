import { describe, expect, it } from 'vitest'
import markdownToHtml from './markdownToHtml'

describe('sanitização do conteúdo clínico', () => {
  it('preserva texto e formatação permitida do conteúdo legado', () => {
    const html = markdownToHtml('<div style="color: #0f4c5c"><p><strong>Conteúdo seguro</strong></p></div>')

    expect(html).toContain('Conteúdo seguro')
    expect(html).toContain('<strong>Conteúdo seguro</strong>')
  })

  it('remove scripts, atributos de evento e elementos interativos não permitidos', () => {
    const html = markdownToHtml('<div style="padding: 1px" onclick="window.__unsafe = true"><script>window.__unsafe = true</script><button>Enviar</button><img src="x" onerror="window.__unsafe = true"><p>Texto preservado</p></div>')

    expect(html).not.toMatch(/<script|onclick=|<button|<img|onerror=/i)
    expect(html).toContain('Texto preservado')
  })

  it('remove URIs javascript e preserva links https seguros', () => {
    const html = markdownToHtml('<div style="padding: 1px"><a href="javascript:alert(1)">inseguro</a><a href="https://brcast.org.br">seguro</a></div>')

    expect(html).not.toMatch(/javascript:/i)
    expect(html).toContain('https://brcast.org.br')
  })

  it('não renderiza conteúdo quando o valor de entrada não é texto', () => {
    expect(markdownToHtml(null)).toBe('')
    expect(markdownToHtml(undefined)).toBe('')
  })
})
