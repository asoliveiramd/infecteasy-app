/**
 * Converte Markdown simples para HTML inline com estilos ricos
 * Usado para renderizar conteúdo dos cards educacionais
 */

// Paleta de cores para diferentes seções
const colorSchemes = {
  primary: {
    bg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
    border: '#10b981',
    text: '#059669',
    darkText: '#065f46'
  },
  secondary: {
    bg: 'linear-gradient(135deg, #dbeafe 0%, #bae6fd 100%)',
    border: '#0284c7',
    text: '#075985',
    darkText: '#0c4a6e'
  },
  warning: {
    bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
    border: '#f59e0b',
    text: '#d97706',
    darkText: '#92400e'
  },
  danger: {
    bg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
    border: '#dc2626',
    text: '#991b1b',
    darkText: '#7f1d1d'
  }
};

export function markdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return '';
  }

  let html = markdown.trim();

  // Se já é HTML (contém tags div com style), retorna como está
  if (html.includes('<div style=') || html.includes('linear-gradient')) {
    return html;
  }

  // Escolher esquema de cores baseado no conteúdo
  let scheme = colorSchemes.primary;
  if (html.toLowerCase().includes('grave') || html.toLowerCase().includes('risco')) {
    scheme = colorSchemes.danger;
  } else if (html.toLowerCase().includes('tratamento') || html.toLowerCase().includes('antibiótico')) {
    scheme = colorSchemes.secondary;
  } else if (html.toLowerCase().includes('atenção') || html.toLowerCase().includes('importante')) {
    scheme = colorSchemes.warning;
  }

  // Processar linha por linha
  const lines = html.split('\n');
  const result = [];
  let inList = false;
  let inSection = false;
  let sectionContent = [];

  // Adicionar container principal com background
  result.push(`<div style="background: ${scheme.bg}; padding: 20px; border-radius: 8px; margin: 15px 0;">`);

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();

    // Linha vazia
    if (!trimmed) {
      if (inList) {
        sectionContent.push('</ul>');
        inList = false;
      }
      continue;
    }

    // Separador horizontal - fecha seção anterior e abre nova
    if (trimmed === '---') {
      if (inList) {
        sectionContent.push('</ul>');
        inList = false;
      }
      if (inSection) {
        sectionContent.push('</div>');
        result.push(sectionContent.join('\n'));
        sectionContent = [];
      }
      inSection = false;
      continue;
    }

    // Headers principais (###)
    if (trimmed.startsWith('### ')) {
      if (inList) {
        sectionContent.push('</ul>');
        inList = false;
      }
      if (inSection) {
        sectionContent.push('</div>');
        result.push(sectionContent.join('\n'));
        sectionContent = [];
      }
      
      const text = trimmed.substring(4).replace(/\*\*/g, '');
      
      // Iniciar nova seção com background
      sectionContent.push(`<div style="background: ${scheme.bg.replace('135deg', '145deg')}; padding: 20px; border-radius: 8px; margin: 20px 0;">`);
      sectionContent.push(`<h4 style="color: ${scheme.text}; margin-bottom: 15px; font-size: 18px; font-weight: 600;">💡 ${text}</h4>`);
      inSection = true;
      continue;
    }

    // Subtítulos (texto seguido de :)
    if (trimmed.match(/^[A-Za-zÀ-ÿ\s]+:$/)) {
      if (inList) {
        sectionContent.push('</ul>');
        inList = false;
      }
      const text = trimmed.replace(':', '');
      sectionContent.push(`<div style="background: ${scheme.bg.replace(/0%/g, '10%')}; padding: 15px; border-radius: 8px; border-left: 4px solid ${scheme.border}; margin-bottom: 10px;">`);
      sectionContent.push(`<h5 style="color: ${scheme.darkText}; margin-bottom: 10px; font-weight: 600;">${text}</h5>`);
      continue;
    }

    // Lista
    if (trimmed.startsWith('- ')) {
      if (!inList) {
        sectionContent.push('<ul style="font-size: 14px; line-height: 1.8; margin-left: 20px;">');
        inList = true;
      }
      let content = trimmed.substring(2);
      // Processar bold dentro da lista
      content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
      sectionContent.push(`<li style="margin: 5px 0;">${content}</li>`);
      continue;
    }

    // Se estava em lista e não é mais, fecha a lista
    if (inList && !trimmed.startsWith('- ')) {
      sectionContent.push('</ul>');
      sectionContent.push('</div>'); // Fecha a div do subtítulo
      inList = false;
    }

    // Tabelas
    if (trimmed.includes('|')) {
      const cells = trimmed.split('|').map(c => c.trim()).filter(c => c);
      
      // Linha de separação da tabela
      if (cells.every(c => c.match(/^-+$/))) {
        continue;
      }

      if (!sectionContent.some(l => l.includes('<table'))) {
        sectionContent.push(`<div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 2px solid ${scheme.border};">`);
        sectionContent.push('<table style="width: 100%; border-collapse: collapse;">');
      }

      const isHeader = !sectionContent.some(l => l.includes('</tr>'));
      const tag = isHeader ? 'th' : 'td';
      const style = isHeader 
        ? `padding: 12px; border: 1px solid #d1d5db; background: ${scheme.bg}; font-weight: 600; text-align: left; color: ${scheme.darkText};`
        : 'padding: 12px; border: 1px solid #d1d5db;';

      sectionContent.push('<tr>');
      cells.forEach(cell => {
        let content = cell.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
        sectionContent.push(`<${tag} style="${style}">${content}</${tag}>`);
      });
      sectionContent.push('</tr>');
      
      // Verificar se é a última linha da tabela
      if (i + 1 >= lines.length || !lines[i + 1].includes('|')) {
        sectionContent.push('</table>');
        sectionContent.push('</div>');
      }
      continue;
    }

    // Parágrafo normal
    let content = trimmed;
    
    // Processar bold
    content = content.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
    
    // Parágrafo de destaque (começa com palavra em bold)
    if (content.startsWith('<strong>')) {
      sectionContent.push(`<p style="font-size: 14px; line-height: 1.6; margin: 10px 0; color: ${scheme.darkText};">${content}</p>`);
    } else {
      sectionContent.push(`<p style="font-size: 14px; line-height: 1.6; margin: 10px 0; color: #4b5563;">${content}</p>`);
    }
  }

  // Fechar tags abertas
  if (inList) {
    sectionContent.push('</ul>');
    sectionContent.push('</div>');
  }
  if (inSection) {
    sectionContent.push('</div>');
  }
  
  result.push(sectionContent.join('\n'));
  result.push('</div>'); // Fecha container principal

  return result.join('\n');
}

export default markdownToHtml;
