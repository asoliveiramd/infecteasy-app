# 🦠 Infecteasy

**Aplicativo de Infectologia e Doenças Infecciosas para Clínicos**

Aprenda Infectologia e Antibioticoterapia de forma interativa, com conteúdo baseado em evidências científicas e foco na prática clínica.

## 🎯 Funcionalidades

### 📚 **Conteúdo Educacional**
- **11 lições** no módulo "Fundamentos da Infectologia"
- **5 lições** no módulo "Interpretação de Antibiograma"
- **Glossário interativo** com balões de definição
- **Desafios interativos** com feedback educativo
- **Sistema de XP e progressão** gamificado

### 🔐 **Sistema de Autenticação**
- **Cadastro completo** com validações
- **Login seguro** com persistência
- **Recuperação de senha** via SMS/Email/WhatsApp
- **Configurações da conta** editáveis
- **Alteração de senha** com validação tripla

### 📱 **Interface Moderna**
- **Design responsivo** para desktop e mobile
- **Interface intuitiva** baseada em componentes
- **Navegação fluida** entre módulos e lições
- **Feedback visual** em tempo real

## 🚀 Deploy no Vercel

### **Pré-requisitos**
- Conta no [GitHub](https://github.com)
- Conta no [Vercel](https://vercel.com)

### **Passo 1: Criar Repositório**
1. Faça fork ou clone este repositório
2. Suba o código para seu GitHub:
```bash
git init
git add .
git commit -m "Infecteasy - Deploy inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/infecteasy-app.git
git push -u origin main
```

### **Passo 2: Deploy no Vercel**
1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em "New Project"
3. Selecione o repositório `infecteasy-app`
4. Configure:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique "Deploy"

### **Passo 3: Deploy Automático Configurado! 🎉**
- ✅ Cada commit → Deploy automático
- ✅ URL permanente gerada
- ✅ SSL gratuito incluído
- ✅ CDN global para performance

## 🛠️ Desenvolvimento Local

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/infecteasy-app.git
cd infecteasy-app

# Instale as dependências
npm install
# ou
pnpm install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm run dev
```

### **Scripts Disponíveis**
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build

## 📋 Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de CSS
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis

## 🎓 Conteúdo Educacional

### **Módulo 1: Fundamentos da Infectologia**
1. O Método de Gram na Prática
2. Tipos de Espécimes Clínicos
3. Espécimes Clínicos e Interpretação
4. Qualidade e Coleta de Espécimes
5. Interpretação do Gram
6. Sítios Estéreis vs Não-Estéreis
7. Meios de Cultura e Identificação
8. Correlação Gram e Cultura
9. Gram-positivos: Morfologia e Arranjo
10. Gram-negativos: Morfologia e Arranjo
11. Cultura e Identificação Laboratorial

### **Módulo 2: Interpretação de Antibiograma**
1. Conceitos Fundamentais
2. Métodos de Teste: Disco-Difusão
3. Concentração Inibitória Mínima (CIM)
4. Mecanismos de Resistência
5. Aplicação Clínica do Antibiograma

## 🔬 Características Técnicas

- **Terminologia científica correta** (microbiota, não "flora")
- **Linguagem em português** sem anglicismos desnecessários
- **Questões clinicamente relevantes** baseadas na prática médica
- **Sistema de pré-requisitos** para questões de revisão
- **Validações de segurança** em autenticação

## 📞 Suporte

Para dúvidas sobre o conteúdo educacional ou sugestões de melhorias, entre em contato através dos canais oficiais.

## 📄 Licença

Este projeto é destinado ao uso educacional em infectologia e doenças infecciosas.

---

**Desenvolvido com ❤️ para profissionais de saúde e estudantes de medicina**

