/**
 * Converte Markdown simples para HTML inline com estilos
 * Usado para renderizar conteúdo dos cards educacionais
 */

export function markdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  let html = markdown.trim();

  // Se já é HTML (contém tags div), retorna como está
  if (html.includes('<div') || html.includes('<h3')) {
    return html;
  }

  // Processar linha por linha
  const lines = html.split('\n');
  const result = [];
  let inList = false;
  let inTable = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();

    // Linha vazia
    if (!trimmed) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      continue;
    }

    // Separador horizontal
    if (trimmed === '---') {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      result.push('<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">');
      continue;
    }

    // Headers
    if (trimmed.startsWith('### ')) {
      if (inList) {
        result.push('</ul>');
        inList = false;
      }
      const text = trimmed.substring(4).replace(/\*\*/g, '');
      result.push(`<h4 style="color: #059669; margin: 20px 0 10px 0; font-size: 18px; font-weight: 600;">${text}</h4>`);
      continue;
    }

    // Lista
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        result.push('<ul style="margin: 10px 0 10px 20px; line-height: 1.8;">');
        inList = true;
      }
      let content = trimmed.substring(2);
      // Processar bold dentro da lista
      content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
      result.push(`<li style="margin: 5px 0;">${content}</li>`);
      continue;
    }

    // Se estava em lista e não é mais, fecha a lista
    if (inList && !trimmed.startsWith('- ')) {
      result.push('</ul>');
      inList = false;
    }

    // Tabelas simples (detectar linhas com |)
    if (trimmed.includes('|')) {
      const cells = trimmed.split('|').map(c => c.trim()).filter(c => c);
      
      // Linha de separação da tabela
      if (cells.every(c => c.match(/^-+$/))) {
        continue;
      }

      if (!inTable) {
        result.push('<table style="width: 100%; border-collapse: collapse; margin: 15px 0;">');
        inTable = true;
      }

      const isHeader = i === 0 || (i > 0 && !lines[i-1].includes('|'));
      const tag = isHeader ? 'th' : 'td';
      const style = isHeader 
        ? 'padding: 12px; border: 1px solid #d1d5db; background: #f3f4f6; font-weight: 600; text-align: left;'
        : 'padding: 12px; border: 1px solid #d1d5db;';

      result.push('<tr>');
      cells.forEach(cell => {
        let content = cell.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        result.push(`<${tag} style="${style}">${content}</${tag}>`);
      });
      result.push('</tr>');
      continue;
    }

    // Se estava em tabela e não é mais, fecha a tabela
    if (inTable && !trimmed.includes('|')) {
      result.push('</table>');
      inTable = false;
    }

    // Parágrafo normal
    let content = trimmed;
    
    // Processar bold
    content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
    
    // Se começa com palavra seguida de :, é um subtítulo
    if (content.match(/^[A-Za-zÀ-ÿ\s]+:/)) {
      result.push(`<p style="font-size: 15px; line-height: 1.6; margin: 15px 0 5px 0; font-weight: 600; color: #374151;">${content}</p>`);
    } else {
      result.push(`<p style="font-size: 14px; line-height: 1.6; margin: 10px 0; color: #4b5563;">${content}</p>`);
    }
  }

  // Fechar tags abertas
  if (inList) {
    result.push('</ul>');
  }
  if (inTable) {
    result.push('</table>');
  }

  return result.join('\n');
}

export default markdownToHtml;
