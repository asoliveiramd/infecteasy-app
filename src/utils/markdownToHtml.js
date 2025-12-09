/**
 * Converte Markdown simples para HTML inline com estilos ricos
 * Cada seção ### cria uma caixa colorida independente
 */

// Paleta de cores rotativa para seções
const colorPalette = [
  {
    bg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
    border: '#10b981',
    text: '#059669',
    darkText: '#065f46',
    lightBg: '#f0fdf4'
  },
  {
    bg: 'linear-gradient(135deg, #dbeafe 0%, #bae6fd 100%)',
    border: '#0284c7',
    text: '#075985',
    darkText: '#0c4a6e',
    lightBg: '#f0f9ff'
  },
  {
    bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    border: '#f59e0b',
    text: '#d97706',
    darkText: '#92400e',
    lightBg: '#fef9e7'
  },
  {
    bg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
    border: '#dc2626',
    text: '#991b1b',
    darkText: '#7f1d1d',
    lightBg: '#fef2f2'
  },
  {
    bg: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
    border: '#9333ea',
    text: '#7c3aed',
    darkText: '#6d28d9',
    lightBg: '#faf5ff'
  }
];

export function markdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  let html = markdown.trim();

  // Se já é HTML (contém tags div com style), retorna como está
  if (html.includes('<div style=') || html.includes('linear-gradient')) {
    return html;
  }

  const lines = html.split('\n');
  const result = [];
  let colorIndex = 0;
  let currentSection = null;
  let sectionContent = [];
  let inList = false;
  let inSubsection = false;

  function closeList() {
    if (inList) {
      sectionContent.push('</ul>');
      inList = false;
    }
  }

  function closeSubsection() {
    if (inSubsection) {
      closeList();
      sectionContent.push('</div>'); // Fecha subsection
      inSubsection = false;
    }
  }

  function closeSection() {
    if (currentSection) {
      closeSubsection();
      sectionContent.push('</div>'); // Fecha section
      result.push(sectionContent.join('\n'));
      sectionContent = [];
      currentSection = null;
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Linha vazia
    if (!trimmed) {
      closeList();
      continue;
    }

    // Separador horizontal
    if (trimmed === '---') {
      closeSection();
      continue;
    }

    // Header principal (###) - cria nova seção colorida
    if (trimmed.startsWith('### ')) {
      closeSection();
      
      const text = trimmed.substring(4).replace(/\*\*/g, '');
      const scheme = colorPalette[colorIndex % colorPalette.length];
      colorIndex++;
      
      currentSection = scheme;
      sectionContent.push(`<div style="background: ${scheme.bg}; padding: 20px; border-radius: 8px; margin: 15px 0; border: 2px solid ${scheme.border};">`);
      sectionContent.push(`<h3 style="color: ${scheme.text}; margin-bottom: 15px; font-size: 18px; font-weight: 600;">💡 ${text}</h3>`);
      continue;
    }

    // Subtítulo (texto terminando em :)
    if (trimmed.match(/^[A-Za-zÀ-ÿ\s]+:$/)) {
      closeSubsection();
      
      const text = trimmed.replace(':', '');
      const scheme = currentSection || colorPalette[0];
      
        sectionContent.push(`<div style="background: ${scheme.lightBg}; padding: 15px; border-radius: 8px; border-left: 4px solid ${scheme.border}; border: 1px solid ${scheme.border}; margin-bottom: 15px;">`);
      sectionContent.push(`<h4 style="color: ${scheme.darkText}; margin-bottom: 10px; font-weight: 600;">${text}</h4>`);
      inSubsection = true;
      continue;
    }

    // Lista
    if (trimmed.startsWith('- ') || trimmed.startsWith('✓ ')) {
      if (!inList) {
        sectionContent.push('<ul style="font-size: 14px; line-height: 1.8; margin-left: 20px; list-style-type: disc;">');
        inList = true;
      }
      let content = trimmed.startsWith('✓ ') ? trimmed.substring(2) : trimmed.substring(2);
      content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
      sectionContent.push(`<li style="margin: 5px 0;">${content}</li>`);
      continue;
    }

    // Fecha lista se não é mais item de lista
    if (inList && !trimmed.startsWith('- ') && !trimmed.startsWith('✓ ')) {
      closeList();
    }

    // Tabela
    if (trimmed.includes('|')) {
      const cells = trimmed.split('|').map(c => c.trim()).filter(c => c);
      
      // Linha separadora
      if (cells.every(c => c.match(/^-+$/))) {
        continue;
      }

      if (!sectionContent.some(l => l.includes('<table'))) {
        const scheme = currentSection || colorPalette[0];
        sectionContent.push(`<div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 2px solid ${scheme.border};">`);
        sectionContent.push('<table style="width: 100%; border-collapse: collapse;">');
      }

      const isHeader = !sectionContent.some(l => l.includes('</tr>'));
      const tag = isHeader ? 'th' : 'td';
      const scheme = currentSection || colorPalette[0];
      const style = isHeader 
        ? `padding: 12px; border: 1px solid #d1d5db; background: ${scheme.lightBg}; font-weight: 600; text-align: left; color: ${scheme.darkText};`
        : 'padding: 12px; border: 1px solid #d1d5db;';

      sectionContent.push('<tr>');
      cells.forEach(cell => {
        let content = cell.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        sectionContent.push(`<${tag} style="${style}">${content}</${tag}>`);
      });
      sectionContent.push('</tr>');
      
      // Verificar se acabou a tabela
      if (i + 1 >= lines.length || !lines[i + 1].includes('|')) {
        sectionContent.push('</table>');
        sectionContent.push('</div>');
      }
      continue;
    }

    // Parágrafo normal
    let content = trimmed;
    content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
    
    const scheme = currentSection || colorPalette[0];
    const textColor = content.startsWith('<strong>') ? scheme.darkText : '#4b5563';
    
    sectionContent.push(`<p style="font-size: 14px; line-height: 1.6; margin: 10px 0; color: ${textColor};">${content}</p>`);
  }

  // Fechar seção final
  closeSection();

  return result.join('\n');
}

export default markdownToHtml;
