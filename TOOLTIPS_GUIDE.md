# Guia de Tooltips - InfectEasy App

## 📚 Visão Geral

Tooltips (balões explicativos) foram implementados em todas as lições para ajudar os usuários a entender termos técnicos e siglas sem interromper o fluxo de aprendizado.

## 🎯 Termos com Tooltips

### Siglas - Bactérias e Resistência
- **ESBL**: Extended-Spectrum β-Lactamase
- **KPC**: Klebsiella pneumoniae Carbapenemase  
- **MBL**: Metalo-β-Lactamase
- **AmpC**: Cefalosporinase
- **MRSA**: Methicillin-Resistant Staphylococcus aureus
- **VRE**: Vancomycin-Resistant Enterococcus
- **MDR**: Multidrug-Resistant

### Siglas - Farmacologia
- **PK/PD**: Farmacocinética/Farmacodinâmica
- **CIM**: Concentração Inibitória Mínima

### Siglas - Anatomia
- **SNC**: Sistema Nervoso Central
- **ITU**: Infecção do Trato Urinário
- **TGI**: Trato Gastrointestinal

### Siglas - Padrões
- **CLSI**: Clinical and Laboratory Standards Institute
- **BrCAST**: Brazilian Committee on Antimicrobial Susceptibility Testing

### Proteínas e Mecanismos
- **PBP2a**: Penicillin-Binding Protein 2a
- **D-Ala-D-Lac**: Modificação do peptideoglicano

## 💻 Como Adicionar Tooltips em Novas Lições

### Método 1: Usando a tag `<abbr>` (Recomendado)

```html
<abbr title="Definição completa aqui" style="text-decoration: underline dotted; cursor: help; border: none;">TERMO</abbr>
```

**Exemplo:**
```html
<abbr title="Extended-Spectrum β-Lactamase - Enzima que confere resistência a cefalosporinas de amplo espectro" style="text-decoration: underline dotted; cursor: help; border: none;">ESBL</abbr>
```

### Método 2: Script Automático

Use o script Python localizado em `/home/ubuntu/adicionar_tooltips.py`:

```python
python3.11 /home/ubuntu/adicionar_tooltips.py
```

Este script:
1. Lê o arquivo App.jsx
2. Identifica blocos de `content:`
3. Adiciona tooltips automaticamente para termos do glossário
4. Salva o arquivo atualizado

## 📝 Boas Práticas

### ✅ Fazer:
- Adicionar tooltips para **todas as siglas** menos comuns
- Adicionar tooltips para **termos técnicos** que estudantes podem não conhecer
- Usar definições **concisas mas completas**
- Manter **consistência** nas definições

### ❌ Evitar:
- Tooltips em termos muito comuns (ex: "bactéria", "infecção")
- Definições muito longas (máximo 2 linhas)
- Tooltips aninhados (tooltip dentro de tooltip)
- Adicionar tooltips em campos `options`, `text` ou `explanation` (apenas em `content`)

## 🔧 Atualizando o Glossário

Para adicionar novos termos ao glossário, edite o arquivo `/home/ubuntu/glossario_termos.js`:

```javascript
const GLOSSARIO = {
  // ... termos existentes ...
  "NOVO_TERMO": "Definição completa do novo termo",
};
```

Depois execute o script de atualização:

```bash
cd /home/ubuntu/infecteasy-app
python3.11 /home/ubuntu/adicionar_tooltips.py
pnpm run build
git add -A
git commit -m "Add tooltips for new terms"
git push
```

## 🎨 Estilização

Os tooltips usam o seguinte estilo CSS inline:

```css
text-decoration: underline dotted;
cursor: help;
border: none;
```

Isso cria:
- Sublinhado pontilhado para indicar que há informação adicional
- Cursor de ajuda (?) ao passar o mouse
- Sem borda (remove borda padrão do `<abbr>`)

## 📊 Estatísticas Atuais

- **Total de tooltips**: 220
- **Termos no glossário**: 16
- **Lições com tooltips**: Todas (221 blocos de content)

## 🚀 Próximos Passos

1. Adicionar mais termos técnicos ao glossário conforme necessário
2. Considerar tooltips customizados com CSS (animações, posicionamento)
3. Implementar tooltips em português e inglês (i18n)

---

**Última atualização**: Novembro 2025
**Mantido por**: Equipe InfectEasy

