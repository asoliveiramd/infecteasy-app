// Módulo: Curso Extensivo de Antimicrobianos
export const antimicrobianosModule = {
  title: "Curso Extensivo de Antimicrobianos",
  description: "Curso completo sobre antimicrobianos: antibióticos, antifúngicos, antivirais e antiparasitários",
  lessons: [
    {
      id: 1,
      title: "Princípios Básicos",
      duration: "60 min",
      xp: 300,
      sections: [
        {
          title: "História dos Antibióticos: O Milagre que Transformou a Medicina",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🏛️ A Revolução dos Antibióticos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>agentes antimicrobianos revolucionaram a prática da medicina</strong>, resultando 
                em reduções dramáticas nas mortes por uma variedade de doenças. A taxa de mortalidade nos 
                Estados Unidos declinou de aproximadamente <strong>280 por 100.000 habitantes em 1936</strong> 
                (era pré-sulfa) para aproximadamente <strong>60 por 100.000 em 1950</strong> (pós-penicilina), 
                praticamente sem declínio adicional desde então.
              </p>
              
              <h4 style="color: #1e40af; margin: 15px 0 10px 0;">📊 Impacto na Mortalidade</h4>
              <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                <tr style="background: #3b82f6; color: white;">
                  <th style="padding: 10px; border: 1px solid #ddd;">Doença</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Mortalidade Pré-Antibiótico</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Mortalidade com Antibiótico</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Redução</th>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd;">Pneumonia comunitária</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">~35%</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">~10%</td>
                  <td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">-25%</td>
                </tr>
                <tr style="background: #f9fafb;">
                  <td style="padding: 8px; border: 1px solid #ddd;">Meningite bacteriana</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">>80%</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">~20%</td>
                  <td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">-60%</td>
                </tr>
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd;">Celulite</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">~11%</td>
                  <td style="padding: 8px; border: 1px solid #ddd;"><0.5%</td>
                  <td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">-10%</td>
                </tr>
              </table>
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
              <h4 style="color: #d97706; margin-bottom: 10px;">⚡ O Poder dos Antibióticos</h4>
              <p style="font-size: 14px; line-height: 1.5;">
                O poder da terapia antibacteriana resultou em uma <strong>revolução na prática da medicina</strong>, 
                transformando-a de um campo primariamente diagnóstico para um campo terapêutico e intervencionista. 
                Os antibióticos "colocam nas mãos de um médico altamente treinado o poder de afetar o desfecho 
                de um paciente criticamente doente... mais do que poderia ter sido exercido por qualquer médico 
                urbano altamente treinado da era pré-antibiótica."
              </p>
            </div>
          `,
          question: {
            text: "Qual foi o impacto dos antibióticos na taxa de mortalidade nos Estados Unidos entre 1936 e 1950?",
            options: [
              "Redução de 100 para 50 por 100.000 habitantes",
              "Redução de 280 para aproximadamente 60 por 100.000 habitantes",
              "Redução de 500 para 200 por 100.000 habitantes",
              "Não houve mudança significativa"
            ],
            correct: 1,
            explanation: "A taxa de mortalidade nos Estados Unidos declinou dramaticamente de aproximadamente 280 por 100.000 habitantes em 1936 (era pré-sulfa) para aproximadamente 60 por 100.000 em 1950 (pós-penicilina), demonstrando o impacto revolucionário dos antibióticos na medicina."
          }
        },
        {
          title: "A Confiança Social nos Antibióticos",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">🤝 Antibióticos como Patrimônio Social</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>eficácia antibiótica é perdida a cada uso do medicamento</strong> devido à resistência 
                antimicrobiana. A resistência é transmissível de pessoa para pessoa, de modo que o uso de um 
                antibiótico por um indivíduo afeta a capacidade de todos na sociedade de permanecerem eficazes 
                para seu próprio uso. Assim, <strong>os antibióticos são uma confiança social compartilhada</strong>.
              </p>
              
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Ninguém tem o direito de abusar de um medicamento porque o abuso de uma pessoa prejudica 
                todos os outros na sociedade. As doenças infecciosas, os profissionais têm responsabilidade 
                adicional de administrar esses medicamentos para manter sua eficácia para a sociedade.
              </p>
            </div>
            
            <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
              <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ A Tragédia dos Comuns</h4>
              <p style="font-size: 14px; line-height: 1.5; margin-bottom: 10px;">
                A prescrição inadequada de antibióticos é um exemplo da <strong>"tragédia dos comuns"</strong>. 
                Quando indivíduos empreendem uma ação que serve ao seu próprio interesse, mas causa danos 
                à sociedade em geral, e quando tal ação é realizada raramente, o dano à sociedade não é perceptível.
              </p>
              <p style="font-size: 14px; line-height: 1.5;">
                Quando isso acontece dezenas de milhões de vezes por ano com prescrições de antibióticos 
                inadequadas, o <strong>dano coletivo à sociedade é catastrófico</strong>.
              </p>
            </div>
            
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
              <h4 style="color: #059669; margin-bottom: 10px;">💡 Responsabilidade Profissional</h4>
              <p style="font-size: 14px; line-height: 1.5;">
                Qualquer provedor licenciado pode prescrever um antibiótico e assumir um papel de especialista 
                quando não há especialista disponível para interromper aqueles já prescritos. O ônus recai sobre 
                aqueles treinados em nossa especialidade para ajudar a ensinar tanto nossos colegas médicos 
                quanto o público leigo sobre quão preciosos esses medicamentos são e como eles devem ser 
                adequadamente implantados.
              </p>
            </div>
          `,
          question: {
            text: "Por que os antibióticos são considerados uma 'confiança social compartilhada'?",
            options: [
              "Porque são medicamentos caros e de difícil acesso",
              "Porque a resistência antimicrobiana é transmissível e o uso inadequado por um indivíduo afeta toda a sociedade",
              "Porque precisam de prescrição médica para serem adquiridos",
              "Porque são produzidos por empresas farmacêuticas públicas"
            ],
            correct: 1,
            explanation: "Os antibióticos são uma confiança social compartilhada porque a resistência antimicrobiana é transmissível de pessoa para pessoa. O uso inadequado de um antibiótico por um indivíduo afeta a capacidade de todos na sociedade de terem antibióticos eficazes disponíveis, configurando uma responsabilidade coletiva."
          }
        },
        {
          title: "Princípio 1: Diagnóstico Diferencial Preciso",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #7c3aed; margin-bottom: 15px;">🎯 Princípio 1: Seleção Adequada de Antibióticos Empíricos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>seleção adequada de antibióticos empíricos começa com um diagnóstico diferencial 
                preciso</strong> que inclui provável infecção bacteriana. Os antibióticos devem ser administrados 
                apenas se o diagnóstico diferencial incluir prováveis infecções bacterianas invasivas.
              </p>
              
              <h4 style="color: #6d28d9; margin: 15px 0 10px 0;">⚠️ Problema Comum: Prescrição Inadequada</h4>
              <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
                Embora possa parecer óbvio que os antibióticos devem ser administrados apenas a pacientes 
                que têm infecções bacterianas, <strong>a falha em aderir a este fato é uma das causas mais 
                comuns de uso inadequado de antibióticos</strong>.
              </p>
              
              <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <h4 style="color: #d97706; margin-bottom: 10px;">📋 Exemplos de Prescrição Inadequada</h4>
                <ul style="margin-left: 20px; line-height: 1.8;">
                  <li><strong>Infecções do trato respiratório superior</strong>: Frequentemente não tratadas 
                  (ou tratadas inadequadamente) com antibióticos</li>
                  <li><strong>Culturas positivas sem sinais de infecção</strong>: Presença de cultura positiva 
                  na ausência de sinais ou sintomas não deve desencadear prescrição</li>
                  <li><strong>Colonização vs. Infecção</strong>: Crescimento de organismos de culturas de 
                  locais não estéreis não indica infecção em pacientes assintomáticos</li>
                </ul>
              </div>
            </div>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
              <h4 style="color: #0369a1; margin-bottom: 10px;">🔬 Colonização vs. Infecção</h4>
              <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
                Mesmo que os pacientes tenham sintomas, não se pode necessariamente discernir a etiologia 
                microbiológica da infecção cultivando organismos de locais não estéreis, que têm microbiomas 
                polimicrobianos. <strong>Há tendência de aplicar terapia para cada cepa de bactéria cultivada</strong>, 
                embora a maioria dos organismos encontrados sejam tipicamente não patogênicos.
              </p>
              <p style="font-size: 15px; line-height: 1.6;">
                É impossível distinguir espectadores de patógenos etiológicos. Sinais ou sintomas de doença 
                clínica ausentes, geralmente os antibióticos não devem ser administrados independentemente 
                dos resultados de cultura de pele, swabs de feridas, secreções respiratórias ou urina.
              </p>
            </div>
            
            <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
              <h4 style="color: #dc2626; margin-bottom: 10px;">💊 Impacto das Prescrições Inadequadas</h4>
              <p style="font-size: 14px; line-height: 1.5;">
                Prescrições inadequadas causam dano de prescrições antimicrobianas — <strong>uma em cada 
                cinco pacientes que recebem prescrições de antibióticos sofre danos</strong> por eles ou 
                por multiplicação de patógenos resistentes, ou <em>Clostridioides difficile</em> (anteriormente 
                <em>Clostridium difficile</em>).
              </p>
            </div>
          `,
          question: {
            text: "Qual é o primeiro princípio fundamental para a seleção adequada de antibióticos empíricos?",
            options: [
              "Escolher sempre o antibiótico de maior espectro disponível",
              "Iniciar com um diagnóstico diferencial preciso que inclui provável infecção bacteriana",
              "Aguardar sempre os resultados de cultura antes de iniciar antibióticos",
              "Prescrever antibióticos para todas as culturas positivas"
            ],
            correct: 1,
            explanation: "O Princípio 1 estabelece que a seleção adequada de antibióticos empíricos começa com um diagnóstico diferencial preciso que inclui provável infecção bacteriana. Os antibióticos devem ser administrados apenas se o diagnóstico diferencial incluir prováveis infecções bacterianas invasivas, não para colonização ou culturas positivas sem sinais clínicos."
          }
        }
      

// ===== SEÇÃO 4 =====

,
{
      title: "Princípio 2: Tratar Apenas Quando Necessário",
      content: `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #d97706; margin-bottom: 15px;">⚕️ Princípio 2: Tratar Apenas Quando a Terapia Alterará o Curso Clínico</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Mesmo em um paciente com infecção bacteriana óbvia, <strong>tratar apenas quando a terapia 
            alterará o curso clínico do paciente</strong>. A administração de antibióticos não deve ser 
            um reflexo a uma infecção, mas sim deve ser incorporada em um plano terapêutico geral e racional 
            para o paciente.
          </p>
          
          <h4 style="color: #b45309; margin: 15px 0 10px 0;">🦴 Exemplo Clássico: Osteomielite Crônica</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Um exemplo clássico deste cenário é a <strong>osteomielite em osso cronicamente exposto</strong>. 
            Neste caso, o fator determinante da eficácia antibiótica para a osteomielite será se há um 
            plano viável de fechamento de ferida a longo prazo, ou se a ferida permanecerá exposta ao osso.
          </p>
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Não é racional tentar curar a osteomielite com antibióticos se não houver um plano 
              de fechamento de ferida.</strong> Se houver celulite superposta aguda no tecido ao redor da 
              osteomielite, o curso crucial de antibióticos para tal paciente é a seleção para resistência 
              antimicrobiana e a exposição ao risco de efeitos colaterais de antibióticos, sem a possibilidade 
              de cura da infecção óssea.
            </p>
            <p style="font-size: 15px; line-height: 1.6;">
              Uma vez que a ferida está coberta, um curso de antibióticos pode ser considerado, mas o 
              curso crucial de antibióticos para tal paciente é a seleção para resistência antimicrobiana 
              e a exposição ao risco de efeitos colaterais de antibióticos, sem a possibilidade de cura 
              da infecção óssea.
            </p>
          </div>
        </div>
        
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Outros Exemplos de Uso Irracional</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Infecção confirmada em paciente terminal</strong>: Administrar antibióticos a 
            paciente que morrerá em breve devido à doença subjacente</li>
            <li><strong>Imunodeficiência adquirida sem adesão</strong>: Administrar terapia antirretroviral 
            a paciente que ainda não está pronto para aderir aos medicamentos</li>
            <li><strong>Custo vs. Benefício</strong>: É importante incluir consideração do dano à sociedade 
            causado pela prescrição ao fazer julgamentos de custo-benefício</li>
          </ul>
        </div>
        
        <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
          <h4 style="color: #059669; margin-bottom: 10px;">💡 Princípio Hipocrático</h4>
          <p style="font-size: 14px; line-height: 1.5; font-style: italic;">
            "Primum non nocere" - Primeiro, não causar dano. Administrar antibióticos (incluindo antivirais) 
            a tais pacientes não beneficiará o paciente, mas pode causar dano. Assim, dar agentes 
            antimicrobianos a tais pacientes falha no cerne do juramento hipocrático.
          </p>
        </div>
      `,
      question: {
        text: "No caso de osteomielite em osso cronicamente exposto, quando o tratamento antibiótico é apropriado?",
        options: [
          "Sempre que houver cultura positiva para bactérias",
          "Apenas quando houver um plano viável de fechamento de ferida a longo prazo",
          "Imediatamente após o diagnóstico, independentemente de outros fatores",
          "Nunca, pois osteomielite crônica não responde a antibióticos"
        ],
        correct: 1,
        explanation: "O Princípio 2 estabelece que não é racional tentar curar osteomielite com antibióticos se não houver um plano de fechamento de ferida. O tratamento prolongado sem possibilidade de cura apenas seleciona para resistência antimicrobiana e expõe o paciente a riscos de efeitos colaterais, sem benefício real. Uma vez que a ferida está coberta, um curso de antibióticos pode ser considerado."
      }
    }

// ===== SEÇÃO 5 =====

,
{
      title: "Princípio 3: Direcionar aos Microrganismos Causadores",
      content: `
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #0369a1; margin-bottom: 15px;">🎯 Princípio 3: Direcionar Empiricamente aos Microrganismos Causadores</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Uma vez que a terapia antiinfecciosa é determinada necessária com base em um diagnóstico 
            diferencial racional, e a terapia adequada é selecionada quanto à sua provável capacidade 
            de alterar o curso do desfecho do paciente, <strong>os agentes adequados devem ser selecionados</strong>.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Em geral, os regimes antimicrobianos preferidos são aqueles previamente estabelecidos por 
            investigações clínicas como sendo <strong>seguros e eficazes para a(s) doença(s) alvo</strong>. 
            No entanto, os clínicos frequentemente encontram pacientes que não teriam atendido aos critérios 
            de inscrição para estudos comparativos.
          </p>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🔬 Espectro de Atividade</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            O <strong>espectro de atividade dos agentes antiinfecciosos empíricos</strong> prescritos 
            deve ser apenas tão amplo quanto necessário para cobrir a flora microbiana provável que 
            causa as doenças no diagnóstico diferencial.
          </p>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">⚠️ Problema: Terapia Excessivamente Ampla</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              O uso de terapia excessivamente ampla para tratar patógenos não bacterianos é inadequado 
              e selecionará para resistência, não fornecendo benefício ao paciente.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              <strong>Exemplo:</strong> Infecções comunitárias geralmente não são causadas por tais 
              bactérias, e a cobertura antibiótica empírica para infecções comunitárias não deve incluir 
              rotineiramente tal cobertura.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; margin: 15px 0;">
          <h4 style="color: #4f46e5; margin-bottom: 10px;">🦠 Considerações Especiais</h4>
          
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            <strong>Infecções Nosocomiais:</strong> Frequentemente causadas por patógenos mais resistentes, 
            exigindo cobertura para <em>Pseudomonas</em> ou outros bacilos gram-negativos não fermentadores.
          </p>
          
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            <strong>Espectro vs. Resistência:</strong> A questão do espectro de atividade levanta outra 
            distinção crítica entre antibióticos e outros medicamentos. Para a maioria dos medicamentos, 
            as doenças para as quais foram consideradas tratamentos seguros e eficazes em ensaios clínicos 
            definem a população de tratamento relevante após a aprovação.
          </p>
          
          <p style="font-size: 15px; line-height: 1.6;">
            <strong>Importante:</strong> Mesmo que um medicamento com atividade antipseudomonal seja 
            seguro e eficaz para a doença em questão, se a doença é tipicamente causada por estreptococos 
            ou outros patógenos menos resistentes, o uso em primeira linha do agente com cobertura 
            antipseudomonal é inadequado, apesar de sua segurança e eficácia.
          </p>
        </div>
      `,
      question: {
        text: "Por que o uso de terapia antibiótica excessivamente ampla é inadequado, mesmo quando segura e eficaz?",
        options: [
          "Porque aumenta o custo do tratamento desnecessariamente",
          "Porque seleciona para resistência sem fornecer benefício adicional ao paciente",
          "Porque causa mais efeitos colaterais que antibióticos de espectro estreito",
          "Porque reduz a eficácia do tratamento"
        ],
        correct: 1,
        explanation: "O Princípio 3 estabelece que o uso de terapia excessivamente ampla para tratar patógenos que não requerem tal cobertura é inadequado porque selecionará para resistência antimicrobiana sem fornecer benefício ao paciente. O espectro de atividade deve ser apenas tão amplo quanto necessário para cobrir a flora microbiana provável que causa as doenças no diagnóstico diferencial."
      }
    }

// ===== SEÇÃO 6 =====

,
{
      title: "Princípio 4: Limiar Mais Baixo em Pacientes Críticos",
      content: `
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #dc2626; margin-bottom: 15px;">🚨 Princípio 4: Limiar Mais Baixo para Terapia Empírica em Pacientes Críticos</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            A <strong>margem de erro é uma consideração importante</strong> na seleção de terapia 
            antimicrobiana empírica. Um paciente que é hemodinamicamente estável e se queixa apenas de 
            febre e mal-estar pode ser esperado sem iniciar qualquer terapia empírica enquanto a investigação 
            prossegue.
          </p>
          
          <h4 style="color: #b91c1c; margin: 15px 0 10px 0;">⏱️ Tempo é Crítico</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Se a terapia deve ser focada em um paciente devido ao alto risco predito de bactéria 
            encontrada, <strong>pode ser impossível esperar</strong>. Em contraste, um paciente hipotenso 
            que está sendo tratado com pressores na UTI não pode esperar.
          </p>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #991b1b; margin-bottom: 10px;">📊 Evidências Científicas</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Múltiplos estudos descobriram que <strong>atrasos de até uma hora no início da terapia 
              antibiótica eficaz em tais pacientes aumentam marcadamente o risco de progressão para 
              choque séptico e morte</strong>.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Assim, o limiar para desencadear o início da terapia empírica deve ser menor em pacientes 
              instáveis.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">🎯 Amplitude da Terapia em Pacientes Críticos</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            A amplitude da terapia em pacientes criticamente doentes também pode ser mais ampla, mas a 
            terapia geralmente não deve focar nos patógenos mais prováveis de serem encontrados.
          </p>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">📋 Exemplos Clínicos</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Pneumonia adquirida na comunidade:</strong> Infecções intra-abdominais e 
              infecções urinárias tipicamente causadas por <em>Pseudomonas</em> fora de circunstâncias 
              muito específicas (paciente com fibrose cística com história de bronquiectasia, dialysis 
              crônica, paciente com cateteres indwelling ou cirurgia recente)</li>
              <li><strong>Paciente criticamente doente:</strong> Mesmo em um paciente criticamente 
              doente com pneumonia adquirida na comunidade, a terapia antipseudomonal geralmente não 
              deve ser incluída fora de tais circunstâncias</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
          <h4 style="color: #059669; margin-bottom: 10px;">💊 Considerações sobre Administração</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            Pacientes hemodinamicamente comprometidos devem ter antibióticos infundidos o mais rápido 
            possível. É importante enfatizar que <strong>apenas ordenar o antibiótico não é suficiente; 
            sua infusão deve ser iniciada imediatamente</strong> em tais pacientes.
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            Seguir um cronograma, pois um atraso na segunda dose também foi associado a maior mortalidade. 
            Quando os provedores ordenam múltiplos antibióticos para serem administrados a um paciente 
            criticamente doente, pode ser útil indicar nos conjuntos de pedidos ou protocolos qual 
            antibiótico "âncora" deve ser infundido primeiro.
          </p>
        </div>
      `,
      question: {
        text: "Por que o limiar para iniciar terapia antibiótica empírica deve ser mais baixo em pacientes criticamente doentes?",
        options: [
          "Porque esses pacientes têm maior risco de efeitos colaterais",
          "Porque atrasos de até uma hora aumentam marcadamente o risco de progressão para choque séptico e morte",
          "Porque é mais difícil fazer o diagnóstico nesses pacientes",
          "Porque esses pacientes sempre têm infecções bacterianas"
        ],
        correct: 1,
        explanation: "O Princípio 4 estabelece que em pacientes criticamente doentes, o limiar para iniciar terapia empírica deve ser mais baixo porque múltiplos estudos demonstraram que atrasos de até uma hora no início da terapia antibiótica eficaz aumentam marcadamente o risco de progressão para choque séptico e morte. A margem de erro é menor nesses pacientes, tornando o tempo crítico."
      }
    }

// ===== SEÇÃO 7 =====

,
{
      title: "Princípio 5: Fatores do Hospedeiro",
      content: `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #7c3aed; margin-bottom: 15px;">👤 Princípio 5: Fatores do Hospedeiro Afetam a Amplitude da Terapia Empírica</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            O <strong>impacto primário de um estado imunocomprometido</strong> deve ter na seleção de 
            terapia antimicrobiana é ampliar o diagnóstico diferencial para patógenos prováveis a serem 
            encontrados.
          </p>
          
          <h4 style="color: #6d28d9; margin: 15px 0 10px 0;">🦠 Etiologias Bacterianas Incomuns</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Etiologias bacterianas incomuns, como <strong><em>Listeria</em> e <em>Nocardia</em></strong>, 
            etiologias virais e fúngicas, e até etiologias parasitárias podem ser consideradas, portanto, 
            tratadas empiricamente em um paciente imunocomprometido.
          </p>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #d97706; margin-bottom: 10px;">⚠️ Tipos de Comprometimento Imunológico</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Diferentes tipos de comprometimento imunológico predispõem a diferentes tipos de patógenos:
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Pacientes neutropênicos:</strong> Alto risco para patógenos bacterianos 
              piogênicos agudos e subsequentemente patógenos fúngicos invasivos</li>
              <li><strong>Defeitos em células T:</strong> Maior risco para infecções crônicas causadas 
              por patógenos bacterianos atípicos, como micobactérias, <em>Cryptococcus</em>, meningite 
              por tuberculose (TB), e assim por diante</li>
              <li><strong>Defeitos em imunidade humoral:</strong> Pacientes com defeitos congênitos 
              de células B, defeitos adquiridos de células B (como lúpus ou tratamento com rituximab), 
              doenças que desperdiçam anticorpos (como síndrome nefrótica) adquirem infecções causadas 
              por patógenos bacterianos encapsulados</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">🔬 Patógenos Resistentes em Imunocomprometidos</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            É um fato que <strong>pacientes imunocomprometidos são intrinsecamente mais propensos a 
            serem infectados por patógenos bacterianos resistentes a antibióticos</strong>. O sistema 
            imunológico não funciona adequadamente para o efeito letal de antibióticos.
          </p>
          
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Há evidências de que pacientes imunocomprometidos que adquirem suas infecções na comunidade, 
            e sem terem sido recentemente expostos a ambientes de cuidados de saúde (por exemplo, 
            hemodiálise ou agentes antimicrobianos), são <strong>mais propensos a serem infectados com 
            patógenos mais resistentes</strong> do que pacientes imunocompetentes.
          </p>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">💡 Implicação Clínica</h5>
            <p style="font-size: 14px; line-height: 1.6;">
              Assim, a amplitude da cobertura para patógenos bacterianos altamente resistentes deve ser 
              ditada pela exposição ambiental e antimicrobiana recente, em vez do status imunológico.
            </p>
          </div>
        </div>
        
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ Consideração Importante</h4>
          <p style="font-size: 14px; line-height: 1.5;">
            Para alguns tipos de infecções piogênicas letais, embotar o sistema imunológico é na verdade 
            necessário para atenuar a eficácia dos agentes antimicrobianos. Morbidade e mortalidade de 
            muitas infecções são impulsionadas tanto pela resposta inflamatória do hospedeiro ao organismo 
            quanto pela densidade bacteriana e administração de antimicrobianos.
          </p>
        </div>
      `,
      question: {
        text: "Como o estado imunocomprometido deve afetar principalmente a seleção de terapia antimicrobiana empírica?",
        options: [
          "Sempre usar antibióticos de amplo espectro independentemente do diagnóstico",
          "Ampliar o diagnóstico diferencial para incluir patógenos incomuns (Listeria, Nocardia, fungos, vírus)",
          "Dobrar as doses dos antibióticos padrão",
          "Evitar antibióticos e usar apenas antifúngicos"
        ],
        correct: 1,
        explanation: "O Princípio 5 estabelece que o impacto primário de um estado imunocomprometido deve ser ampliar o diagnóstico diferencial para patógenos prováveis, incluindo etiologias bacterianas incomuns (Listeria, Nocardia), virais, fúngicas e até parasitárias. A amplitude da cobertura para patógenos altamente resistentes deve ser ditada pela exposição ambiental e antimicrobiana recente, não apenas pelo status imunológico."
      }
    }

// ===== SEÇÃO 8 =====

,
{
      title: "Princípio 6: Farmacocinética e Farmacodinâmica",
      content: `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #d97706; margin-bottom: 15px;">💊 Princípio 6: Princípios Farmacocinéticos-Farmacodinâmicos</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Tendo considerado os dados de ensaios clínicos que apoiam o uso antimicrobiano específico, 
            o espectro de atividade requisitado com base no diagnóstico diferencial, seus prováveis 
            etiologias microbianas e os riscos de estabilidade clínica do paciente e riscos para 
            patógenos resistentes a antibióticos, <strong>princípios farmacológicos devem ser considerados</strong>.
          </p>
          
          <h4 style="color: #b45309; margin: 15px 0 10px 0;">🎯 Tipos de Antibióticos por Mecanismo</h4>
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Antibióticos Tempo-Dependentes (β-lactâmicos):</strong>
            </p>
            <ul style="margin-left: 20px; line-height: 1.8; margin-bottom: 15px;">
              <li>O tempo que a concentração inibitória mínima (CIM) é excedida é um preditor muito 
              melhor de eficácia do que quão alta a concentração de antibiótico está acima da CIM</li>
              <li>Para tais medicamentos, <strong>prolongar a infusão</strong> resulta em maior tempo 
              gasto acima da CIM, enquanto suavizando o pico e vale</li>
              <li>Estratégias de dosagem de pico alto podem ser preferidas para isolados com CIMs 
              particularmente altos na faixa intermediária a resistente</li>
            </ul>
            
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Antibióticos Concentração-Dependentes:</strong>
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Alguns antibióticos têm <strong>farmacodinâmica não linear</strong></li>
              <li>A dosagem ideal pode resultar em níveis superiores de medicamento</li>
              <li><strong>Exemplo:</strong> Aumentar a dose de moxifloxacino de 500 para 750 mg uma 
              vez por dia (aumento de 50%) permite um aumento de 100% na concentração sérica alcançada</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">🏥 Considerações para Infusão</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            De fato, os dados clínicos validam que <strong>infusões prolongadas de β-lactâmicos</strong> 
            podem resultar em desfechos clínicos superiores, e tais estratégias estão sendo cada vez 
            mais clinicamente importantes. É importante enfatizar, no entanto, que <strong>níveis de 
            pico mais baixos serão alcançados com infusão prolongada</strong>.
          </p>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">⚠️ Atenção Especial</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Como tal, se o organismo a ser tratado tem uma <strong>CIM alta</strong>, prolongar a 
              infusão pode diminuir a eficácia ao impedir a realização de concentração do medicamento 
              acima da CIM.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Para exemplo, em carbapenêmicos com CIM maior que 16 μg/mL, prolongar a infusão do 
              carbapenêmico impedirá a realização de concentração do medicamento acima da CIM, o que 
              resultará em morte bacteriana diminuída. Portanto, a dosagem intermitente para alcançar 
              níveis de pico acima da CIM pode ser preferida para isolados com CIMs particularmente 
              altos na faixa intermediária a resistente.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #6366f1; margin: 15px 0;">
          <h4 style="color: #4f46e5; margin-bottom: 10px;">🔬 Microambientes Teciduais</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            Finalmente, é importante garantir que o antibiótico <strong>reterá atividade antimicrobiana 
            no local da infecção</strong>. Embora a maioria dos antibióticos seja ativa na maioria dos 
            ambientes teciduais, há exceções.
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            <strong>Exemplo:</strong> Baixa tensão de oxigênio e ambientes de pH baixo, como os 
            encontrados em abscessos densos, inativam a eficácia do aminoglicosídeo ao bloquear sua 
            captação. Portanto, aminoglicosídeos não são agentes desejáveis para tratar abscessos.
          </p>
        </div>
      `,
      question: {
        text: "Para antibióticos β-lactâmicos (tempo-dependentes), qual estratégia de dosagem geralmente resulta em melhores desfechos clínicos?",
        options: [
          "Doses altas em bolus rápido para atingir picos máximos",
          "Prolongar a infusão para aumentar o tempo acima da CIM",
          "Administrar apenas uma vez ao dia em dose alta",
          "Reduzir a dose e aumentar a frequência"
        ],
        correct: 1,
        explanation: "Para antibióticos β-lactâmicos (tempo-dependentes), o tempo que a concentração excede a CIM é melhor preditor de eficácia. Prolongar a infusão resulta em maior tempo acima da CIM e melhores desfechos clínicos. Porém, atenção: para organismos com CIM muito alta (>16 μg/mL), infusão prolongada pode diminuir eficácia, sendo preferível dosagem intermitente para atingir picos altos."
      }
    }

// ===== SEÇÃO 9 =====

,
{
      title: "Princípio 7: Desescalonamento (De-escalation)",
      content: `
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #059669; margin-bottom: 15px;">📉 Princípio 7: Desescalonar com Base em Resultados</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Tendo iniciado terapia antimicrobiana empírica na ausência de conhecimento de um patógeno 
            etiológico, <strong>a terapia deve ser adaptada/estreitada para corresponder ao perfil de 
            suscetibilidade</strong> uma vez que os resultados de suscetibilidade estejam disponíveis.
          </p>
          
          <h4 style="color: #047857; margin: 15px 0 10px 0;">🎯 Quando Desescalonar</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Mesmo quando os resultados microbiológicos são negativos, a ausência de culturas positivas 
            pode ser informativa para <strong>desescalonar antibióticos</strong>. Por exemplo, para 
            pacientes que cultivam bacilos gram-positivos em hemoculturas, a vancomicina empírica pode 
            ser interrompida.
          </p>
          
          <div style="background: #d1fae5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #065f46; margin-bottom: 10px;">✅ Exemplos de Desescalonamento</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Bacilos gram-positivos em hemocultura:</strong> Vancomicina empírica pode 
              ser descontinuada</li>
              <li><strong>Paciente com pneumonia comunitária cultivando <em>Streptococcus pneumoniae</em>:</strong> 
              Cobertura atípica pode ser interrompida</li>
              <li><strong>Gram-negativos em hemocultura:</strong> Antibióticos empíricos direcionados 
              a gram-negativos podem ser interrompidos</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Quando NÃO Desescalonar Imediatamente</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Mesmo quando os resultados microbiológicos são negativos, a ausência de culturas positivas 
            pode ser informativa para desescalonar antibióticos. No entanto, <strong>se o paciente não 
            está respondendo à terapia dentro de 1 ou 2 dias</strong>, pode ser necessário considerar 
            intervenções terapêuticas ou diagnósticas alternativas na ausência de conhecimento da 
            etiologia microbiana da infecção.
          </p>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">🔄 Reavaliação Necessária</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              O fator que deve ser considerado é o <strong>tempo de resposta clínica à terapia</strong>. 
              Qualquer terapia antibacteriana é iniciada, o clínico tratante deve saber a priori quais 
              parâmetros seguir para determinar se a terapia está sendo eficaz.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Este é um princípio particularmente importante quando a terapia é empírica e o(s) 
              patógeno(s) etiológico(s) não é conhecido ou suas suscetibilidades não são conhecidas.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">📊 Biomarcadores de Resposta</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            <strong>Febre e leucocitose</strong> estão entre os biomarcadores clínicos mais antigos 
            usados pelos clínicos para determinar resposta à terapia antimicrobiana. Ambos são usados 
            frequentemente, mas a cessação da adição de terapia antibacteriana é <strong>procalcitonina</strong>.
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            Dezenas de ensaios clínicos randomizados controlados investigaram o impacto de tornar o 
            resultado procalcitonina disponível para tratamento de pacientes com sepse para ajudar a 
            evitar cessação de antibióticos em pacientes mais doentes ou potencialmente evitar antibióticos 
            inteiramente em pacientes menos doentes.
          </p>
        </div>
        
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">🚫 Causas Não Infecciosas de Febre</h4>
          <p style="font-size: 14px; line-height: 1.5;">
            Outras causas frequentemente encontradas de febre não infecciosa que não respondem a 
            antibióticos incluem <strong>febre medicamentosa</strong> (que pode de fato ser causada 
            pelo antibiótico), tautologia iatrogênica, cursos prolongados e fúteis de antibióticos, 
            malignidade e distúrbios reumatológicos que imitam infecções.
          </p>
        </div>
      `,
      question: {
        text: "Qual é o objetivo principal do desescalonamento (de-escalation) da terapia antibiótica?",
        options: [
          "Reduzir custos do tratamento hospitalar",
          "Adaptar/estreitar a terapia para corresponder ao perfil de suscetibilidade com base em resultados microbiológicos e resposta clínica",
          "Trocar para antibióticos orais o mais rápido possível",
          "Suspender todos os antibióticos assim que o paciente melhorar"
        ],
        correct: 1,
        explanation: "O Princípio 7 estabelece que, após iniciar terapia empírica, a terapia deve ser adaptada/estreitada para corresponder ao perfil de suscetibilidade uma vez que os resultados estejam disponíveis. Mesmo com culturas negativas, a ausência de crescimento pode ser informativa para desescalonar. O objetivo é usar o espectro mais estreito eficaz, baseado em dados microbiológicos e resposta clínica."
      }
    }

// ===== SEÇÃO 10 =====

,
{
      title: "Princípio 8: Controle de Fonte",
      content: `
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #dc2626; margin-bottom: 15px;">🔧 Princípio 8: Considerar Controle de Fonte Antes de Culpar Resistência</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Se um regime antimicrobiano <strong>não resultou em melhora na curva de febre</strong>, 
            contagem de glóbulos brancos, secreções purulentas, sinais de inflamação (rubor, tumor, 
            dor, calor), nível de procalcitonina, e assim por diante, dentro de um dia ou dois, a 
            decisão de tratamento pode precisar ser reconsiderada.
          </p>
          
          <h4 style="color: #b91c1c; margin: 15px 0 10px 0;">⚠️ Tendência Comum: Culpar a Resistência</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Embora a tendência inicial do clínico tratante seja tipicamente culpar a "resistência 
            antibiótica" e procurar ampliar a terapia antimicrobiana, <strong>duas causas alternativas 
            devem ser consideradas antes de ampliar reflexivamente a terapia</strong>.
          </p>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🎯 Causa 1: Controle de Fonte Inadequado</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Uma possibilidade é que <strong>uma fonte adequada de controle de fonte não foi obtida</strong>. 
            A adequação do controle de fonte, como remover pus drenável e remover materiais de outros 
            nichos de infecção, é a pedra angular do manejo bem-sucedido de infecções.
          </p>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">📋 Exemplos Clínicos</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Abscesso subcutâneo oculto:</strong> Em paciente falhando terapia de celulite, 
              formação de abscesso durante tratamento de infecção intra-abdominal</li>
              <li><strong>Empiema:</strong> Em paciente com pneumonia adquirida na comunidade</li>
              <li><strong>Linha central bacterêmica:</strong> Falha em remover em paciente com bacteremia</li>
              <li><strong>Secreções de pressão:</strong> Falha em remover úlceras de pressão em paciente 
              falhando terapia de celulite</li>
            </ul>
          </div>
          
          <p style="font-size: 15px; line-height: 1.6; margin-top: 15px;">
            <strong>Ampliar a terapia não resultará em resposta clínica na ausência de controle de 
            fonte adequado.</strong>
          </p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">🔬 Causa 2: Diagnóstico Diferencial Incorreto</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Uma <strong>segunda explicação para falta de resposta adequada à terapia</strong> é atribuir 
            incorretamente a condição clínica do paciente a uma infecção bacteriana. Isto é, em pacientes 
            que não estão respondendo à terapia antimicrobiana, além de avaliar o controle de fonte, o 
            diagnóstico diferencial deve ser reconsiderado.
          </p>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">🎭 Imitadores Comuns</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Infecções comuns, como pneumonia adquirida na comunidade e celulite, têm sinais e sintomas 
              que podem ser <strong>surpreendentemente semelhantes</strong>. De fato, pacientes são 
              comumente diagnosticados erroneamente com celulite e, em vez disso, têm uma variedade de 
              distúrbios inflamatórios da pele.
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Estase venosa</li>
              <li>Dermatite de contato/reações alérgicas</li>
              <li>Reações à picnose lipoidica diabeticorum</li>
              <li>Edema pulmonar</li>
              <li>Embolismo pulmonar</li>
              <li>Vias aéreas reativas aspiradas</li>
              <li>Pneumonite aspirativa</li>
              <li>Pneumonia viral</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 15px 0;">
          <h4 style="color: #059669; margin-bottom: 10px;">💡 Recomendação</h4>
          <p style="font-size: 14px; line-height: 1.5;">
            Para pacientes que não aparecem para responder à terapia antimicrobiana dentro do primeiro 
            dia ou dois, uma <strong>reavaliação completa de controle de fonte e o diagnóstico diferencial 
            deve preceder mudanças para ampliar a terapia</strong> com base em medos de resistência 
            antibiótica ou preocupações com infecções causadas por organismos de outro reino (por exemplo, 
            fungos).
          </p>
        </div>
      `,
      question: {
        text: "Quando um paciente não responde à terapia antimicrobiana em 1-2 dias, quais duas causas devem ser consideradas ANTES de ampliar a terapia por medo de resistência?",
        options: [
          "Dose inadequada e via de administração incorreta",
          "Controle de fonte inadequado e diagnóstico diferencial incorreto",
          "Alergia ao antibiótico e interação medicamentosa",
          "Resistência bacteriana e infecção fúngica sobreposta"
        ],
        correct: 1,
        explanation: "O Princípio 8 estabelece que antes de ampliar reflexivamente a terapia por medo de resistência, duas causas alternativas devem ser consideradas: (1) Controle de fonte inadequado - falha em drenar abscessos, remover cateteres infectados, etc.; (2) Diagnóstico diferencial incorreto - a condição pode não ser infecção bacteriana, mas sim uma condição inflamatória não infecciosa que mimetiza infecção."
      }
    }

// ===== SEÇÃO 11 =====

,
{
      title: "Princípio 9: Distinguir Nova Infecção de Falha Terapêutica",
      content: `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #7c3aed; margin-bottom: 15px;">🔄 Princípio 9: Distinguir Nova Infecção da Falha da Terapia Inicial</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Pacientes podem sofrer de <strong>múltiplas infecções seriais</strong> enquanto estão em 
            ambientes de cuidados de saúde. De fato, um paciente que tem evidência de resposta clínica 
            à terapia inicial, com resolução de sinais e sintomas de infecção, e que então começa a 
            escalar novamente febre e sintomas, deve ser avaliado diferentemente do que um paciente que 
            nunca respondeu à terapia inicial.
          </p>
          
          <h4 style="color: #6d28d9; margin: 15px 0 10px 0;">⚠️ Problema: Recrudescência vs. Nova Infecção</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Raramente, <strong>recrudescência de sinais e sintomas</strong> pode refletir emergência de 
            resistência antibiótica na terapia do patógeno inicial — isso pode ser mais provável com 
            patógenos bacterianos, como <em>Acinetobacter</em>, do que com outros.
          </p>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🎯 Resposta Inicial Aparente</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Em qualquer evento, uma <strong>resposta inicial aparente à infecção</strong> seguida dias 
            ou semanas depois por novo início de sinais ou sintomas infecciosos deve levantar a preocupação 
            de uma nova infecção em vez de persistência da original.
          </p>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">🔬 Considerações Clínicas</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Raramente, recrudescência de sinais e sintomas pode refletir <strong>emergência de 
              resistência antibiótica na terapia</strong> do patógeno inicial — isso pode ser mais 
              provável com patógenos bacterianos, como <em>Acinetobacter</em>, do que com outros.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Em qualquer evento, uma resposta inicial aparente à infecção seguida dias ou semanas 
              depois por novo início de sinais ou sintomas infecciosos deve levantar a preocupação de 
              uma nova infecção em vez de persistência da original.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">🏥 Mudança de Terapia Antibiótica</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Ao mudar terapias antibacterianas devido a <strong>infecção breakthrough ou falta de 
            resposta à terapia inicial</strong>, geralmente é aconselhável mudar um antibiótico de 
            cada vez.
          </p>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">💡 Benefícios da Mudança Gradual</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Tal mudança permite a determinação de qual novo medicamento é provável a causa de qualquer 
              melhora em sinais, sintomas e/ou biomarcadores de infecção.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              A terapia pode então ser <strong>adaptada/estreitada com base nesse conhecimento</strong>. 
              No entanto, em pacientes que são criticamente doentes, mudar múltiplos antibióticos pode 
              ser necessário, especialmente para pacientes que são hemodinamicamente instáveis.
            </p>
          </div>
        </div>
        
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">🔍 Investigação Necessária</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            Em tais pacientes, é geralmente razoável <strong>ampliar a terapia para cobrir patógenos 
            altamente resistentes</strong>. Tais pacientes foram tratados com cursos anteriores de 
            antibióticos e têm maior risco de serem infectados por patógenos resistentes a antibióticos.
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            Quando mudanças de antibióticos são feitas devido a falta de resposta inicial ou infecção 
            breakthrough, é geralmente aconselhável ampliar a terapia para tentar cobrir patógenos 
            altamente resistentes. Terapia então pode ser adaptada/estreitada com base nesse conhecimento.
          </p>
        </div>
      `,
      question: {
        text: "Como deve ser interpretado um paciente que inicialmente responde à terapia antibiótica, mas dias ou semanas depois apresenta novo início de sinais infecciosos?",
        options: [
          "Sempre indica falha terapêutica e resistência bacteriana",
          "Deve levantar preocupação de nova infecção em vez de persistência da original",
          "Indica necessidade de dobrar a dose do antibiótico atual",
          "Significa que o diagnóstico inicial estava errado"
        ],
        correct: 1,
        explanation: "O Princípio 9 estabelece que uma resposta inicial aparente seguida por novo início de sinais infecciosos dias ou semanas depois deve levantar a preocupação de uma NOVA infecção, não persistência da original. Embora raramente possa refletir emergência de resistência (ex: Acinetobacter), o mais provável é que seja uma infecção diferente adquirida no ambiente hospitalar."
      }
    }

// ===== SEÇÃO 12 =====

,
{
      title: "Princípio 10: Duração Baseada em Evidências e Curta",
      content: `
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #059669; margin-bottom: 15px;">⏱️ Princípio 10: Duração Baseada em Evidências e Curta Quando Possível</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Os antibióticos devem ser administrados <strong>apenas pelo tempo necessário para otimizar 
            as taxas de cura</strong>. Infelizmente, mesmo na era da medicina baseada em evidências, a 
            duração da maioria dos cursos de terapia antibiótica pode ser rastreada de volta à Constância 
            21 CE, que a semana de trabalho consistiria de 7 dias.
          </p>
          
          <h4 style="color: #047857; margin: 15px 0 10px 0;">📊 Evidências de Cursos Curtos</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Este decreto de aproximadamente 1700 anos permanece o <strong>principal driver para muitos 
            cursos de antibióticos</strong>, que são oferecidos em incrementos de 7 dias. Felizmente, 
            nos últimos anos, numerosos ensaios clínicos foram conduzidos comparando terapia antibiótica 
            de curso longo versus curto, com os cursos curtos frequentemente não baseados em incrementos 
            de 7 dias.
          </p>
          
          <div style="background: #d1fae5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #065f46; margin-bottom: 10px;">✅ Tabela: Cursos Curtos vs. Longos</h5>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
              <tr style="background: #10b981; color: white;">
                <th style="padding: 10px; border: 1px solid #ddd;">Doença</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Curso Curto</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Curso Longo</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Resultado</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Pneumonia comunitária</td>
                <td style="padding: 8px; border: 1px solid #ddd;">3-5 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">7-14 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Equivalente</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 8px; border: 1px solid #ddd;">Pielonefrite</td>
                <td style="padding: 8px; border: 1px solid #ddd;">5-7 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">10-14 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Equivalente</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">Infecções de pele</td>
                <td style="padding: 8px; border: 1px solid #ddd;">5-6 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">10-14 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Equivalente</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 8px; border: 1px solid #ddd;">Sinusite bacteriana aguda</td>
                <td style="padding: 8px; border: 1px solid #ddd;">5 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">10 dias</td>
                <td style="padding: 8px; border: 1px solid #ddd;">Equivalente</td>
              </tr>
            </table>
          </div>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Exceções aos Cursos Curtos</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Exceções notáveis à terapia de curso curto incluem <strong>otite média em crianças menores 
            de 2 anos</strong> e osteomielite — mas não para terapia de curso curto para estreptococos—
            terapia de faringite estreptocócica.
          </p>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">🦴 Osteomielite Crônica</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              As razões para a falha da terapia de curso curto para essas doenças/demografia específicas 
              não são totalmente claras. <strong>O propósito da terapia antibacteriana no tratamento de 
              faringite estreptocócica é a prevenção de febre reumática</strong>, que requer erradicação 
              do organismo.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Apesar da taxa diminuída de cura clínica no final da terapia com terapia de curso curto 
              de penicilina, as taxas de febre reumática não foram maiores nesses estudos. No entanto, 
              a taxa de recaída de febre reumática é baixa, e os estudos não foram alimentados para este 
              ponto final.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Benefícios dos Cursos Curtos</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            <strong>Cursos mais curtos de antibióticos reduzem o risco de efeitos colaterais</strong> 
            dos antibióticos e podem resultar em impacto diminuído no microbioma, evitando superinfecções 
            e possíveis outras consequências metabólicas que estão sob investigação.
          </p>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">⚡ Recomendação</h5>
            <p style="font-size: 14px; line-height: 1.6;">
              Assim, <strong>não é mais necessário — e de fato não é mais apropriado — escolher durações 
              de antibióticos para muitas infecções com base em incrementos de 7 dias</strong>. Sempre 
              que possível, as durações de tratamento devem ser cursos curtos, com base em dados de 
              ensaios mostrando eficácia equivalente a cursos mais longos.
            </p>
          </div>
        </div>
        
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">🔬 Antibióticos Estáticos vs. Cidais</h4>
          <p style="font-size: 14px; line-height: 1.5;">
            Um dos dogmas mais difundidos no campo da DI tem sido que <strong>agentes antimicrobianos 
            que são "cidais" são mais eficazes do que aqueles que são "estáticos"</strong>. Embora pareça 
            intuitivo que antibióticos que matam mais rapidamente bactérias devem ser clinicamente mais 
            eficazes, os dados clínicos não apoiam uma eficácia clínica intrínseca entre agentes estáticos 
            e cidais.
          </p>
        </div>
      `,
      question: {
        text: "Qual é a recomendação atual sobre a duração da terapia antibiótica para a maioria das infecções?",
        options: [
          "Sempre usar múltiplos de 7 dias (7, 14, 21 dias) baseado em tradição",
          "Usar cursos curtos baseados em evidências, não necessariamente em incrementos de 7 dias",
          "Continuar antibióticos até 3 dias após resolução completa dos sintomas",
          "Usar sempre 10-14 dias para garantir erradicação completa"
        ],
        correct: 1,
        explanation: "O Princípio 10 estabelece que não é mais apropriado escolher durações baseadas em incrementos de 7 dias. Numerosos ensaios clínicos demonstraram que cursos curtos (3-5 dias para pneumonia, 5-7 dias para pielonefrite, 5-6 dias para celulite) são equivalentes a cursos longos. Cursos curtos reduzem efeitos colaterais e impacto no microbioma, devendo ser preferidos quando possível, baseados em evidências."
      }
    }
      ]
    },
    {
      id: 2,
      title: "Farmacocinética e Farmacodinâmica",
      duration: "50 min",
      xp: 250,
      sections: [
    {
      title: "Card 1: A Bússola e o Alvo (PK e PD)",
      content: `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #2563eb; margin-bottom: 15px;">🎯 A Bússola e o Alvo: Entendendo PK e PD</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Imagine que a farmacologia é um <strong>campo de batalha</strong>. Precisamos saber onde o 
            medicamento vai e o que ele faz quando chega lá.
          </p>
          
          <h4 style="color: #1e40af; margin: 15px 0 10px 0;">📍 Farmacocinética (PK)</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            <strong>Farmacocinética (PK) é o que o seu corpo faz com a droga.</strong> A PK governa a forma 
            como a droga entra, se move (Absorção, Distribuição), é transformada (Metabolismo) e sai (Eliminação). 
            A PK define a <strong>exposição sistêmica total da droga</strong>.
          </p>
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #1e40af; margin-bottom: 10px;">🔄 Os 4 Processos da PK (ADME)</h5>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Absorção:</strong> Como a droga entra no organismo</li>
              <li><strong>Distribuição:</strong> Como a droga se espalha pelos tecidos</li>
              <li><strong>Metabolismo:</strong> Como a droga é transformada</li>
              <li><strong>Eliminação:</strong> Como a droga sai do corpo</li>
            </ul>
            <p style="font-size: 14px; margin-top: 10px; font-style: italic;">
              A via de administração (oral vs. intravenosa) afeta drasticamente o perfil de concentração-tempo da droga.
            </p>
          </div>
          
          <h4 style="color: #1e40af; margin: 15px 0 10px 0;">💥 Farmacodinâmica (PD)</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            <strong>Farmacodinâmica (PD) é o que a droga faz com o patógeno e com o hospedeiro.</strong> 
            Ela descreve o mecanismo de ação da droga e a resposta bioquímica/fisiológica.
          </p>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
            <h5 style="color: #d97706; margin-bottom: 10px;">🎯 Objetivo da Análise PK-PD</h5>
            <p style="font-size: 14px; line-height: 1.6;">
              O objetivo da análise PK-PD é <strong>integrar esses dois fatores</strong>, definindo a 
              <strong>relação exposição-resposta</strong>. Ou seja, como a dose administrada maximiza a 
              eficácia e minimiza a toxicidade (o risco-benefício).
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática</h4>
          <p style="font-size: 15px; line-height: 1.6;">
            <strong>A PK é a entrega do míssil</strong> (a droga) ao alvo.<br>
            <strong>A PD é o impacto e a explosão</strong> desse míssil na infecção.
          </p>
        </div>
      `,
      question: {
        text: "Qual é a principal diferença entre Farmacocinética (PK) e Farmacodinâmica (PD)?",
        options: [
          "PK é o que a droga faz no corpo; PD é o que o corpo faz com a droga",
          "PK é o que o corpo faz com a droga (ADME); PD é o que a droga faz no patógeno e hospedeiro",
          "PK estuda apenas a absorção; PD estuda apenas a eliminação"
        ],
        correct: 1,
        explanation: "Farmacocinética (PK) é o que o corpo faz com a droga, governando Absorção, Distribuição, Metabolismo e Eliminação (ADME). Farmacodinâmica (PD) é o que a droga faz com o patógeno e hospedeiro, descrevendo o mecanismo de ação e resposta bioquímica. A análise PK-PD integra ambos para otimizar eficácia e minimizar toxicidade."
      }
    },
    {
      title: "Card 2: O Limiar da Guerra - Concentração Inibitória Mínima (CIM)",
      content: `
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #dc2626; margin-bottom: 15px;">⚔️ O Limiar da Guerra: Concentração Inibitória Mínima (CIM)</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            O sucesso de um anti-infeccioso depende de <strong>alcançar concentrações no local da infecção 
            que sejam eficazes contra o patógeno</strong>.
          </p>
          
          <h4 style="color: #b91c1c; margin: 15px 0 10px 0;">🎯 O que é a CIM (MIC)?</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            A <strong>CIM (ou MIC - Minimum Inhibitory Concentration)</strong> é a Concentração Inibitória 
            Mínima do antimicrobiano necessária para inibir o crescimento do microrganismo. <strong>Este é 
            o valor mais fundamental.</strong>
          </p>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #991b1b; margin-bottom: 10px;">⚠️ Conceito Crítico</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Se a concentração do medicamento cair <strong>abaixo da CIM</strong>, o microrganismo pode 
              começar a se recuperar.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              É crucial lembrar que a atividade antimicrobiana só é exercida pela <strong>fração da droga 
              que está livre</strong> (não ligada a proteínas). Por isso, os testes de potência in vitro 
              (como o CIM) avaliam a droga livre.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Exemplo Numérico</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #ef4444; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">CIM do Patógeno</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Concentração Sérica</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Resultado</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2 mg/L</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">4 mg/L</td>
              <td style="padding: 8px; border: 1px solid #ddd; color: #059669; font-weight: bold;">✅ Eficaz (acima da CIM)</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2 mg/L</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">1 mg/L</td>
              <td style="padding: 8px; border: 1px solid #ddd; color: #dc2626; font-weight: bold;">❌ Ineficaz (abaixo da CIM)</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática</h4>
          <p style="font-size: 15px; line-height: 1.6;">
            Se a CIM for 2 mg/L, <strong>2 mg/L é o Nível Mínimo de Alerta</strong> que você deve manter 
            no sangue para garantir que o patógeno seja reprimido. Abaixo disso, o inimigo (a bactéria) 
            tem chance de recrescer ou desenvolver resistência.
          </p>
        </div>
      `,
      question: {
        text: "O que acontece quando a concentração sérica de um antimicrobiano cai abaixo da CIM?",
        options: [
          "O microrganismo pode começar a se recuperar e potencialmente desenvolver resistência",
          "A eficácia do medicamento aumenta devido à menor toxicidade",
          "Nada acontece, pois a CIM é apenas um valor de referência"
        ],
        correct: 0,
        explanation: "Quando a concentração do medicamento cai abaixo da CIM (Concentração Inibitória Mínima), o microrganismo pode começar a se recuperar e potencialmente desenvolver resistência. A CIM é o limiar crítico que deve ser mantido no local da infecção para garantir a supressão do patógeno. Apenas a fração livre (não ligada a proteínas) da droga é ativa."
      }
    },
    {
      title: "Card 3: O Estrategista do Tempo - Medicamentos T > CIM",
      content: `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #d97706; margin-bottom: 15px;">⏱️ O Estrategista do Tempo: Medicamentos T > CIM</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Alguns antimicrobianos dependem do <strong>tempo que conseguem manter suas concentrações acima 
            do CIM</strong> para maximizar a morte bacteriana. Chamamos isso de <strong>Morte Dependente 
            do Tempo</strong>.
          </p>
          
          <h4 style="color: #b45309; margin: 15px 0 10px 0;">📊 O Índice PD Chave: T > MIC</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            O índice PD chave é o <strong>T > MIC (Tempo acima da CIM)</strong>. Este valor é expresso 
            como a <strong>porcentagem do intervalo entre as doses</strong> em que a concentração sérica 
            excede a CIM.
          </p>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">💊 Exemplo Clínico: Beta-lactâmicos</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Os <strong>Beta-lactâmicos</strong> são os principais agentes tempo-dependentes:
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Penicilinas</strong> (Amoxicilina, Ampicilina, Piperacilina)</li>
              <li><strong>Cefalosporinas</strong> (Ceftriaxona, Cefepima)</li>
              <li><strong>Carbapenêmicos</strong> (Meropenem, Imipenem)</li>
            </ul>
          </div>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #059669; margin-bottom: 10px;">🎯 Meta do Clínico</h5>
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              Para otimizar o tratamento com beta-lactâmicos, o <strong>T > CIM deve ser mantido por 
              períodos longos</strong>, idealmente entre <strong>40% e 50% do intervalo de dosagem</strong>.
            </p>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
              Exemplo: Se você dosa a cada 8 horas, a concentração deve estar acima da CIM por pelo menos 
              3-4 horas (40-50% de 8 horas).
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática: O Martelo Pneumático</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            Pense nos beta-lactâmicos como um <strong>Martelo Pneumático</strong>. Ele não precisa dar um 
            golpe único e esmagador (Cmax alto), mas precisa <strong>manter a vibração e o trabalho constante</strong> 
            para desmantelar a parede celular bacteriana.
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            Se você desligar o martelo (deixar a concentração cair abaixo da CIM), mesmo que brevemente, 
            o inimigo pode começar a reconstruir suas defesas.
          </p>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
          <h5 style="color: #4b5563; margin-bottom: 10px;">📈 Gráfico Conceitual</h5>
          <p style="font-size: 14px; line-height: 1.6;">
            <strong>Concentração vs. Tempo para Beta-lactâmicos:</strong><br>
            • O importante NÃO é o pico máximo<br>
            • O importante É manter a curva acima da linha da CIM pelo maior tempo possível<br>
            • Estratégia: Infusões prolongadas ou doses mais frequentes
          </p>
        </div>
      `,
      question: {
        text: "Para medicamentos tempo-dependentes como os beta-lactâmicos, qual é o índice PD mais importante e qual a meta terapêutica?",
        options: [
          "Cmax/CIM, com meta de ≥10",
          "T > CIM, com meta de 40-50% do intervalo de dosagem",
          "AUC/CIM, com meta de ≥400"
        ],
        correct: 1,
        explanation: "Para medicamentos tempo-dependentes (como beta-lactâmicos), o índice PD chave é o T > CIM (Tempo acima da CIM). A meta terapêutica é manter a concentração acima da CIM por 40-50% do intervalo de dosagem. Esses medicamentos funcionam como um 'martelo pneumático' - precisam de trabalho constante, não de um golpe único forte."
      }
    },
    {
      title: "Card 4: O Executor do Pico - Medicamentos Cmax/CIM",
      content: `
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #dc2626; margin-bottom: 15px;">🎯 O Executor do Pico: Medicamentos Cmax/CIM</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Outros antimicrobianos dependem de <strong>atingir um pico de concentração muito alto</strong> 
            para eliminar o patógeno de forma eficaz. Chamamos isso de <strong>Morte Dependente da 
            Concentração</strong>.
          </p>
          
          <h4 style="color: #b91c1c; margin: 15px 0 10px 0;">📊 Os Índices PD Chave</h4>
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Cmax/MIC:</strong> Relação entre Pico de concentração e CIM</li>
              <li><strong>AUC/MIC:</strong> Relação entre Área sob a curva e CIM</li>
            </ul>
            <p style="font-size: 14px; margin-top: 10px; font-style: italic;">
              Quanto maior o pico (Cmax), mais rápida e completa é a morte bacteriana.
            </p>
          </div>
          
          <h4 style="color: #b91c1c; margin: 15px 0 10px 0;">💊 Exemplos Clínicos</h4>
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">1️⃣ Aminoglicosídeos</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Exemplos:</strong> Gentamicina, Tobramicina, Amicacina
            </p>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Meta do Clínico:</strong> Para Aminoglicosídeos, busca-se tipicamente uma relação 
              <strong>Cmax/MIC de 8 a 10</strong> para prever o sucesso clínico.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              Uma concentração inicial alta é essencial para <strong>impedir a emergência de resistência</strong>.
            </p>
          </div>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">2️⃣ Fluoroquinolonas</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Exemplos:</strong> Levofloxacino, Ciprofloxacino, Moxifloxacino
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              <strong>Meta do Clínico:</strong> Para Fluoroquinolonas, o índice mais importante é 
              <strong>AUC/MIC ≥ 125</strong> para Gram-negativos e <strong>≥ 30-40</strong> para 
              Gram-positivos.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Comparação: Tempo vs. Concentração</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #6366f1; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Característica</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Tempo-Dependente</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Concentração-Dependente</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Índice PD</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">T > CIM (40-50%)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Cmax/CIM (8-10)</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Exemplos</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Beta-lactâmicos</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Aminoglicosídeos, Quinolonas</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Estratégia</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Infusão prolongada</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Dose alta única</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática: O Atirador de Elite</h4>
          <p style="font-size: 15px; line-height: 1.6;">
            Estes medicamentos são como um <strong>Atirador de Elite</strong>. O que importa é a 
            <strong>força e a precisão do primeiro tiro</strong> (o Cmax). Eles precisam dar um golpe 
            tão forte que o patógeno é aniquilado rapidamente e não consegue se recuperar.
          </p>
        </div>
      `,
      question: {
        text: "Para Aminoglicosídeos (medicamentos concentração-dependentes), qual é a meta terapêutica da relação Cmax/CIM?",
        options: [
          "Cmax/CIM de 8 a 10 para prever sucesso clínico",
          "Cmax/CIM de 2 a 4 é suficiente",
          "Cmax/CIM não é relevante para Aminoglicosídeos"
        ],
        correct: 0,
        explanation: "Para Aminoglicosídeos, a meta terapêutica é uma relação Cmax/CIM de 8 a 10 para prever o sucesso clínico. Esses medicamentos são concentração-dependentes, funcionando como um 'atirador de elite' - precisam de um pico alto para aniquilar rapidamente o patógeno e impedir a emergência de resistência. A estratégia é dose alta em intervalo estendido."
      }
    },
    {
      title: "Card 5: O Benefício do PAE - Efeito Pós-Antibiótico",
      content: `
        <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #059669; margin-bottom: 15px;">⏳ O Benefício do PAE: Efeito Pós-Antibiótico</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            O <strong>Efeito Pós-Antibiótico (PAE)</strong> é um conceito crucial que justifica regimes 
            de dosagem menos frequentes para certas classes de drogas.
          </p>
          
          <h4 style="color: #047857; margin: 15px 0 10px 0;">🔬 O que é o PAE?</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            É o <strong>período de tempo em que a droga continua a inibir o crescimento bacteriano</strong> 
            mesmo depois que sua concentração no local da infecção (sérica) caiu <strong>abaixo da CIM</strong>.
          </p>
          
          <div style="background: #d1fae5; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #065f46; margin-bottom: 10px;">💡 Impacto Prático</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Agentes com <strong>PAE longo podem ser dosados com menos frequência</strong>. Este atraso 
              no recrescimento bacteriano é atribuído à dinâmica de desintoxicação da droga dentro das 
              células bacterianas.
            </p>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
              Mesmo com concentração sérica abaixo da CIM, a bactéria ainda está "atordoada" e não consegue 
              se recuperar imediatamente.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Exemplos Notáveis de PAE</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #10b981; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Classe de Antibiótico</th>
              <th style="padding: 10px; border: 1px solid #ddd;">PAE contra Gram-negativos</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Implicação Clínica</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Aminoglicosídeos</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2-6 horas</td>
              <td style="padding: 8px; border: 1px solid #ddd;">✅ Dose única diária</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Fluoroquinolonas</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2-6 horas</td>
              <td style="padding: 8px; border: 1px solid #ddd;">✅ Dose única ou 2x/dia</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Beta-lactâmicos</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Mínimo ou inexistente</td>
              <td style="padding: 8px; border: 1px solid #ddd;">❌ Doses mais frequentes necessárias</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Vancomicina</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">2-3 horas (Gram-positivos)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">✅ Intervalos de 8-12h</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🎯 Validação Clínica: Aminoglicosídeos</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            O PAE significativo dos Aminoglicosídeos (2-6 horas) valida a estratégia de <strong>Dosagem 
            de Intervalo Estendido</strong> (ver Card 7).
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            <strong>Exemplo:</strong> Gentamicina 5-7 mg/kg uma vez ao dia, em vez de 1 mg/kg três vezes 
            ao dia. Mesmo com concentrações séricas caindo abaixo da CIM entre as doses, o PAE mantém a 
            supressão bacteriana.
          </p>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática: O Nocaute</h4>
          <p style="font-size: 15px; line-height: 1.6;">
            O PAE é como um <strong>nocaute no boxe</strong>. Mesmo depois que o golpe (a droga) passou, 
            o adversário (a bactéria) ainda está atordoado e não consegue se levantar imediatamente. 
            Isso dá tempo para o próximo golpe chegar.
          </p>
        </div>
      `,
      question: {
        text: "O que é o Efeito Pós-Antibiótico (PAE) e qual sua importância clínica?",
        options: [
          "É o período em que a droga continua inibindo crescimento bacteriano mesmo abaixo da CIM, permitindo dosagens menos frequentes",
          "É o efeito colateral que ocorre após suspender o antibiótico",
          "É a resistência que se desenvolve após uso prolongado do antibiótico"
        ],
        correct: 0,
        explanation: "O Efeito Pós-Antibiótico (PAE) é o período em que a droga continua a inibir o crescimento bacteriano mesmo após sua concentração cair abaixo da CIM. Aminoglicosídeos e Fluoroquinolonas têm PAE de 2-6 horas contra Gram-negativos, permitindo dosagens menos frequentes (ex: dose única diária). Beta-lactâmicos têm PAE mínimo, necessitando doses mais frequentes."
      }
    },
    {
      title: "Card 6: Otimização da Dose I - Infusão Prolongada",
      content: `
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #0369a1; margin-bottom: 15px;">⏱️ Otimização da Dose I: Infusão Prolongada (Para Tempo)</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Se o seu medicamento é <strong>dependente do tempo</strong> (T > CIM, como os beta-lactâmicos), 
            a melhor forma de otimizar a dose é <strong>mantendo a concentração acima da CIM pelo maior 
            tempo possível</strong>.
          </p>
          
          <h4 style="color: #075985; margin: 15px 0 10px 0;">🎯 A Estratégia</h4>
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Infusões Contínuas ou Prolongadas</strong>
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Estender a infusão de <strong>30 minutos para 3-4 horas</strong></li>
              <li>Ou até <strong>infusão contínua de 24 horas</strong></li>
            </ul>
          </div>
          
          <h4 style="color: #075985; margin: 15px 0 10px 0;">📊 O Resultado PK-PD</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Isso modifica a curva de concentração-tempo, garantindo que a concentração sérica se mantenha 
            <strong>acima do limiar do CIM por uma duração muito maior</strong>.
          </p>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
            <h4 style="color: #059669; margin-bottom: 10px;">💊 Exemplo Prático: Piperacilina-tazobactam</h4>
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
              <strong>Regime Tradicional:</strong> 4,5g IV em 30 minutos, a cada 6-8 horas<br>
              <strong>Regime Otimizado:</strong> 4,5g IV em infusão prolongada de 4 horas, a cada 8 horas
            </p>
            
            <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 10px 0;">
              <h5 style="color: #166534; margin-bottom: 10px;">📈 Evidências Clínicas</h5>
              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                Meta-análises de estudos em <strong>pacientes graves</strong> sugerem que a infusão 
                prolongada de Piperacilina-tazobactam ou carbapenêmicos pode estar associada a um 
                <strong>risco menor de mortalidade</strong> em comparação com infusões intermitentes curtas.
              </p>
              <p style="font-size: 14px; line-height: 1.6;">
                Em alguns casos, essa técnica permite manter a eficácia com uma <strong>dose diária total 
                até 30% menor</strong>.
              </p>
            </div>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📊 Comparação Visual: Infusão Curta vs. Prolongada</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #3b82f6; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Parâmetro</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Infusão Curta (30 min)</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Infusão Prolongada (4h)</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Cmax (Pico)</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Muito alto ⬆️⬆️⬆️</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Moderado ⬆️</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>T > CIM</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">30-40% ⏱️</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">60-70% ⏱️⏱️</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Eficácia</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Boa ✓</td>
              <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">Melhor ✓✓</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Aplicação</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Pacientes estáveis</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Pacientes graves/críticos</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Considerações Práticas</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li>Requer acesso venoso estável</li>
            <li>Pode limitar mobilidade do paciente</li>
            <li>Especialmente útil em UTI e pacientes graves</li>
            <li>Considerar estabilidade da droga em solução</li>
          </ul>
        </div>
      `,
      question: {
        text: "Para medicamentos tempo-dependentes como beta-lactâmicos, qual estratégia de otimização de dose é mais eficaz?",
        options: [
          "Aumentar a dose e manter infusão rápida de 30 minutos",
          "Infusões prolongadas (3-4 horas) ou contínuas para maximizar T > CIM",
          "Reduzir a frequência para uma vez ao dia em dose alta"
        ],
        correct: 1,
        explanation: "Para medicamentos tempo-dependentes, a estratégia ideal é usar infusões prolongadas (3-4 horas) ou contínuas (24h) para maximizar o T > CIM. Estudos mostram que infusão prolongada de Piperacilina-tazobactam ou carbapenêmicos em pacientes graves está associada a menor mortalidade comparada a infusões curtas, podendo até reduzir a dose total diária em até 30%."
      }
    },
    {
      title: "Card 7: Otimização da Dose II - Dose Alta e Intervalo Estendido",
      content: `
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #dc2626; margin-bottom: 15px;">💥 Otimização da Dose II: Dose Alta e Intervalo Estendido</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Se o seu medicamento é <strong>dependente da concentração</strong> e tem um <strong>longo 
            PAE</strong> (ver Card 5), a estratégia é dar o <strong>golpe mais forte possível</strong> 
            e permitir que o corpo o elimine rapidamente.
          </p>
          
          <h4 style="color: #b91c1c; margin: 15px 0 10px 0;">🎯 A Estratégia</h4>
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Dose Alta em Intervalo Estendido</strong> (ex: dose diária única)
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Administrar uma <strong>dose alta única</strong> por dia</li>
              <li>Maximizar o <strong>Cmax/CIM</strong></li>
              <li>Aproveitar o <strong>PAE longo</strong> para manter eficácia</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">💊 Exemplo Prático: Aminoglicosídeos</h4>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">📊 Evolução do Regime de Dosagem</h5>
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <tr style="background: #ef4444; color: white;">
                <th style="padding: 10px; border: 1px solid #ddd;">Regime</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Dose</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Frequência</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Status</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Tradicional</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">1 mg/kg</td>
                <td style="padding: 8px; border: 1px solid #ddd;">3x/dia (a cada 8h)</td>
                <td style="padding: 8px; border: 1px solid #ddd;">❌ Obsoleto</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Moderno</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">5-7 mg/kg</td>
                <td style="padding: 8px; border: 1px solid #ddd;">1x/dia (dose única)</td>
                <td style="padding: 8px; border: 1px solid #ddd;">✅ Preferido</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #166534; margin-bottom: 10px;">📈 O Resultado PK-PD</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Este regime <strong>maximiza a relação Cmax/MIC</strong>, atingindo um pico alto (Cmax) 
              para aniquilar rapidamente o patógeno, contando com o longo PAE para manter a eficácia 
              mesmo durante as horas em que a concentração sérica está abaixo da CIM.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">✅ Vantagens da Dose Única Diária</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #0ea5e9; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Vantagem</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Explicação</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Maior Eficácia</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Cmax/CIM mais alto = morte bacteriana mais rápida</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Menor Nefrotoxicidade</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Menos acúmulo nos túbulos renais</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Menor Ototoxicidade</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Menos exposição cumulativa</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Conveniência</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Apenas 1 administração/dia</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Custo-Efetividade</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Menos tempo de enfermagem e materiais</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Considerações Importantes</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Função renal:</strong> Ajustar dose em pacientes com clearance reduzido</li>
            <li><strong>Monitoramento:</strong> TDM (Monitoramento Terapêutico) recomendado</li>
            <li><strong>Contraindicações:</strong> Endocardite, gestação, queimados extensos</li>
            <li><strong>Meta Cmax:</strong> 8-10x a CIM do patógeno</li>
          </ul>
        </div>
      `,
      question: {
        text: "Qual é a principal vantagem do regime de dose única diária de Aminoglicosídeos (5-7 mg/kg/dia) comparado ao regime tradicional (1 mg/kg 3x/dia)?",
        options: [
          "Maximiza Cmax/CIM para maior eficácia, com menor nefrotoxicidade e ototoxicidade",
          "Reduz o custo do medicamento pela metade",
          "Elimina completamente a necessidade de monitoramento terapêutico"
        ],
        correct: 0,
        explanation: "O regime de dose única diária (5-7 mg/kg/dia) maximiza a relação Cmax/CIM, resultando em morte bacteriana mais rápida e eficaz. Além disso, reduz nefrotoxicidade e ototoxicidade devido a menos acúmulo nos túbulos renais e menor exposição cumulativa. Também oferece conveniência (1 administração/dia) e custo-efetividade, aproveitando o PAE longo dos Aminoglicosídeos."
      }
    },
    {
      title: "Card 8: O Efeito Oculto - Ligação Proteica e Distribuição",
      content: `
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #7c3aed; margin-bottom: 15px;">🔬 O Efeito Oculto: Ligação Proteica e Distribuição</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            A forma como um medicamento se distribui no corpo é vital. A <strong>Distribuição</strong> é 
            descrita pelo <strong>Volume de Distribuição (Vd)</strong>, que não é um volume fisiológico 
            real, mas sim um valor que relaciona a quantidade de droga no corpo com sua concentração no plasma.
          </p>
          
          <h4 style="color: #6d28d9; margin: 15px 0 10px 0;">🎯 O Fator Chave: Fração Livre</h4>
          <div style="background: #ede9fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              Apenas a <strong>droga não ligada a proteínas séricas</strong> (como albumina ou glicoproteína 
              ácida alfa-1) está disponível para exercer a atividade antimicrobiana.
            </p>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
              A fração ligada a proteínas está "sequestrada" e inativa.
            </p>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">📊 Proteínas Séricas e Ligação</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #7c3aed; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Tipo de Droga</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Proteína de Ligação</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Vd</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Exemplos</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Drogas Ácidas</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Albumina</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Menor (mais no plasma)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Beta-lactâmicos</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Drogas Básicas</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Glicoproteína ácida α-1</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Maior (mais nos tecidos)</td>
              <td style="padding: 8px; border: 1px solid #ddd;">Macrolídeos</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">🏥 Relevância Clínica</h4>
          
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #c2410c; margin-bottom: 10px;">📉 Hipoalbuminemia em Pacientes Críticos</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Uma mudança na concentração de proteínas (ex: <strong>hipoalbuminemia em pacientes críticos</strong>) 
              pode alterar a fração livre da droga, impactando a PK.
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              <strong>Exemplo:</strong> Em paciente com albumina baixa (2,0 g/dL vs. normal 4,0 g/dL), 
              uma droga 90% ligada à albumina terá muito mais fração livre circulante, aumentando tanto 
              eficácia quanto risco de toxicidade.
            </p>
          </div>
          
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #075985; margin-bottom: 10px;">⚖️ Impacto Clínico</h5>
            <p style="font-size: 14px; line-height: 1.6;">
              Embora as alterações na PK sejam significativas, as alterações na PD geralmente são limitadas 
              porque o corpo compensa aumentando a eliminação da fração livre. No entanto, em pacientes 
              críticos com múltiplas disfunções orgânicas, esse equilíbrio pode ser perdido.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">📐 Entendendo o Volume de Distribuição (Vd)</h4>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Fórmula:</strong> Vd = Quantidade total de droga no corpo / Concentração plasmática
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Vd baixo (0,1-0,3 L/kg):</strong> Droga fica no plasma (ex: Vancomicina)</li>
              <li><strong>Vd médio (0,5-1,0 L/kg):</strong> Distribuição pelo líquido extracelular</li>
              <li><strong>Vd alto (>2 L/kg):</strong> Ampla distribuição tecidual (ex: Azitromicina, Vd ~30 L/kg)</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática</h4>
          <p style="font-size: 15px; line-height: 1.6;">
            O <strong>Vd é como o espalhamento do medicamento no corpo</strong>. Se a droga se liga muito 
            ao plasma (alta ligação proteica), ela fica "presa" na circulação, resultando em um Vd menor. 
            Se a droga penetra bem nos tecidos, o Vd é maior - é como se ela "desaparecesse" do plasma 
            para se esconder nos tecidos.
          </p>
        </div>
      `,
      question: {
        text: "Por que apenas a fração livre (não ligada a proteínas) de um antimicrobiano é farmacologicamente ativa?",
        options: [
          "Porque a fração ligada a proteínas está sequestrada e não pode exercer atividade antimicrobiana",
          "Porque a fração ligada é metabolizada mais rapidamente",
          "Porque a ligação proteica aumenta a toxicidade do medicamento"
        ],
        correct: 0,
        explanation: "Apenas a droga não ligada a proteínas séricas (fração livre) está disponível para exercer atividade antimicrobiana. A fração ligada está 'sequestrada' e inativa. Drogas ácidas ligam-se à albumina (Vd menor), drogas básicas à glicoproteína ácida α-1 (Vd maior). Em hipoalbuminemia, aumenta a fração livre, alterando PK e potencialmente eficácia/toxicidade."
      }
    },
    {
      title: "Card 9: Os Boosters e o Metabolismo - Inibição do CYP",
      content: `
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #d97706; margin-bottom: 15px;">🧬 Os "Boosters" e o Metabolismo: Inibição do CYP</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            A eliminação de drogas envolve a <strong>biotransformação (metabolismo)</strong>, frequentemente 
            mediada pelo sistema de enzimas <strong>Citocromo P-450 (CYP)</strong> no fígado.
          </p>
          
          <h4 style="color: #b45309; margin: 15px 0 10px 0;">🔬 O Sistema Citocromo P-450</h4>
          <div style="background: #fff7ed; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              O sistema CYP é uma <strong>família de enzimas hepáticas</strong> responsável pelo metabolismo 
              de aproximadamente 75% de todos os medicamentos.
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>CYP3A4/5:</strong> Metaboliza ~50% dos medicamentos</li>
              <li><strong>CYP2D6:</strong> Metaboliza ~25% dos medicamentos</li>
              <li><strong>CYP2C9:</strong> Metaboliza ~15% dos medicamentos</li>
              <li><strong>CYP2C19:</strong> Metaboliza ~10% dos medicamentos</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #dc2626; margin-bottom: 10px;">⚠️ A Variabilidade</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            O metabolismo pode ser <strong>altamente variável</strong> devido a:
          </p>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #991b1b; margin-bottom: 10px;">🧬 Polimorfismos Genéticos</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              Pelo menos <strong>1% da população</strong> exibe atividade enzimática diferente:
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li><strong>Metabolizadores Lentos:</strong> Enzima pouco ativa → acúmulo de droga</li>
              <li><strong>Metabolizadores Normais:</strong> Atividade enzimática padrão</li>
              <li><strong>Metabolizadores Rápidos:</strong> Enzima muito ativa → eliminação rápida</li>
              <li><strong>Metabolizadores Ultrarrápidos:</strong> Múltiplas cópias do gene</li>
            </ul>
          </div>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 10px 0;">
            <h5 style="color: #991b1b; margin-bottom: 10px;">💊 Interações Medicamentosas</h5>
            <p style="font-size: 14px; line-height: 1.6;">
              Medicamentos podem <strong>inibir ou induzir</strong> enzimas CYP, alterando o metabolismo 
              de outros medicamentos administrados concomitantemente.
            </p>
          </div>
        </div>
        
        <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #059669; margin-bottom: 10px;">🚀 A Estratégia de Booster</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 15px;">
            Um <strong>"booster"</strong> é um medicamento usado para <strong>inibir o metabolismo</strong> 
            de um segundo medicamento, aumentando sua exposição sistêmica (AUC).
          </p>
          
          <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #166534; margin-bottom: 10px;">💊 Exemplo Prático: Ritonavir</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              O <strong>Ritonavir</strong> é um inibidor potente do CYP3A. Ele é usado em combinação com 
              outros agentes para diminuir a velocidade com que o corpo elimina o medicamento principal.
            </p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
              <tr style="background: #10b981; color: white;">
                <th style="padding: 10px; border: 1px solid #ddd;">Aplicação</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Medicamento Principal</th>
                <th style="padding: 10px; border: 1px solid #ddd;">Benefício</th>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>HIV</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Inibidores de Protease (Lopinavir, Darunavir)</td>
                <td style="padding: 8px; border: 1px solid #ddd;">↑ AUC, doses menores</td>
              </tr>
              <tr style="background: #f9fafb;">
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>COVID-19</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">Nirmatrelvir (Paxlovid)</td>
                <td style="padding: 8px; border: 1px solid #ddd;">↑ Meia-vida, 2x/dia</td>
              </tr>
            </table>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">🎯 Vantagens da Estratégia de Booster</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Doses totais menores:</strong> Menos medicamento principal necessário</li>
            <li><strong>Dosagens menos frequentes:</strong> Melhora adesão do paciente</li>
            <li><strong>Eficácia mantida:</strong> Concentrações terapêuticas prolongadas</li>
            <li><strong>Custo-efetividade:</strong> Redução de custos com medicamento principal</li>
          </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Cuidados com Boosters</h4>
          <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
            Esta é uma forma <strong>intencional</strong> de explorar a inibição enzimática para aumentar 
            a eficácia. No entanto, o Ritonavir pode interagir com MUITOS outros medicamentos que também 
            são metabolizados pelo CYP3A.
          </p>
          <p style="font-size: 14px; line-height: 1.6;">
            <strong>Importante:</strong> Sempre verificar interações medicamentosas antes de prescrever 
            combinações com boosters.
          </p>
        </div>
      `,
      question: {
        text: "Qual é o papel do Ritonavir quando usado como 'booster' em combinações medicamentosas?",
        options: [
          "Aumenta a absorção intestinal do medicamento principal",
          "Inibe o CYP3A para diminuir o metabolismo do medicamento principal, aumentando sua exposição sistêmica",
          "Aumenta a distribuição tecidual do medicamento principal"
        ],
        correct: 1,
        explanation: "Ritonavir é um inibidor potente do CYP3A usado como 'booster' para diminuir a velocidade de eliminação do medicamento principal, aumentando sua exposição sistêmica (AUC). Isso permite doses menores e/ou menos frequentes mantendo eficácia clínica. Exemplos: Lopinavir/Ritonavir (HIV) e Nirmatrelvir/Ritonavir-Paxlovid (COVID-19). É uma exploração intencional da inibição enzimática."
      }
    },
    {
      title: "Card 10: Medicina Individualizada - Monitoramento Terapêutico (TDM)",
      content: `
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h3 style="color: #0369a1; margin-bottom: 15px;">🎯 Medicina Individualizada: Monitoramento Terapêutico (TDM)</h3>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
            Devido à <strong>grande variabilidade interindividual na PK</strong> (metabolismo, distribuição, 
            eliminação) e à <strong>estreita janela terapêutica</strong> de algumas drogas (onde a dose 
            eficaz é próxima da dose tóxica), é necessário refinar a dose além da "média populacional".
          </p>
          
          <h4 style="color: #075985; margin: 15px 0 10px 0;">🔬 O que é o TDM?</h4>
          <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Monitoramento Terapêutico de Drogas (TDM)</strong> é a medição das concentrações 
              séricas do fármaco para <strong>individualizar o regime de dosagem</strong>.
            </p>
            <p style="font-size: 14px; line-height: 1.6; font-style: italic;">
              Objetivo: Garantir que o paciente atinja concentrações terapêuticas sem toxicidade.
            </p>
          </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #4b5563; margin-bottom: 10px;">💊 Drogas Chave que Requerem TDM</h4>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #d97706; margin-bottom: 10px;">1️⃣ Vancomicina</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Prática Antiga:</strong> Medição do vale (C<sub>min</sub>) com alvo de 15-20 mg/L
            </p>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Prática Atual:</strong> Estimativa da <strong>AUC (Área Sob a Curva)</strong>, que 
              se correlaciona melhor com o efeito
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              <strong>Alvo:</strong> AUC/MIC > 400 h⁻¹ é um preditor de maior probabilidade de efeito 
              contra <em>S. aureus</em>
            </p>
          </div>
          
          <div style="background: #fee2e2; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #dc2626; margin-bottom: 10px;">2️⃣ Aminoglicosídeos</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Pico (Cmax):</strong> Deve ser 8-10x a CIM do patógeno
            </p>
            <p style="font-size: 14px; line-height: 1.6;">
              <strong>Vale (C<sub>min</sub>):</strong> Deve ser <1 mg/L para minimizar nefrotoxicidade
            </p>
          </div>
          
          <div style="background: #ede9fe; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <h5 style="color: #7c3aed; margin-bottom: 10px;">3️⃣ Antifúngicos Triazólicos</h5>
            <p style="font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
              <strong>Voriconazol, Itraconazol, Posaconazol:</strong> TDM é necessário devido a:
            </p>
            <ul style="margin-left: 20px; line-height: 1.8;">
              <li>Absorção oral imprevisível</li>
              <li>Polimorfismo genético nos enzimas CYP (especialmente CYP2C19 para Voriconazol)</li>
              <li>Dose-exposição altamente variável</li>
            </ul>
            <p style="font-size: 14px; line-height: 1.6; margin-top: 10px;">
              <strong>Alvo Voriconazol:</strong> Vale de 1-5 mg/L (eficácia e segurança)
            </p>
          </div>
        </div>
        
        <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin: 15px 0;">
          <h4 style="color: #059669; margin-bottom: 10px;">📊 Quando Solicitar TDM?</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <tr style="background: #10b981; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Situação Clínica</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Justificativa</th>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Disfunção renal</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alteração na eliminação</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Obesidade</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Alteração no Vd</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Paciente crítico</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">PK imprevisível</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Falha terapêutica</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Verificar se dose é adequada</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd;"><strong>Toxicidade suspeita</strong></td>
              <td style="padding: 8px; border: 1px solid #ddd;">Confirmar sobredose</td>
            </tr>
          </table>
        </div>
        
        <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1; margin: 15px 0;">
          <h4 style="color: #0369a1; margin-bottom: 10px;">💡 Analogia Prática: O Ajuste de Mira</h4>
          <p style="font-size: 15px; line-height: 1.6; margin-bottom: 10px;">
            O TDM é o seu <strong>Ajuste de Mira</strong>. Você usa a dose populacional como ponto de 
            partida, mas monitora o que realmente está acontecendo dentro do paciente para garantir que 
            o alvo seja atingido de forma segura.
          </p>
          <p style="font-size: 15px; line-height: 1.6;">
            É a diferença entre atirar às cegas e usar um sistema de mira com feedback em tempo real.
          </p>
        </div>
        
        <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 15px 0;">
          <h4 style="color: #d97706; margin-bottom: 10px;">⚠️ Limitações do TDM</h4>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li>Requer laboratório especializado</li>
            <li>Resultados podem demorar horas a dias</li>
            <li>Custo adicional</li>
            <li>Necessita coleta no momento correto (pico, vale)</li>
            <li>Interpretação requer expertise clínica</li>
          </ul>
        </div>
      `,
      question: {
        text: "Por que o Monitoramento Terapêutico de Drogas (TDM) é especialmente importante para Voriconazol?",
        options: [
          "Porque é um medicamento muito caro",
          "Devido à absorção oral imprevisível e polimorfismo genético no CYP2C19, tornando a dose-exposição altamente variável",
          "Porque deve ser administrado apenas por via intravenosa"
        ],
        correct: 1,
        explanation: "TDM é essencial para Voriconazol devido à absorção oral imprevisível e polimorfismo genético no CYP2C19, tornando a relação dose-exposição altamente variável. O alvo terapêutico é um vale de 1-5 mg/L. Outros antifúngicos triazólicos (Itraconazol, Posaconazol) também requerem TDM. O TDM é o 'ajuste de mira' - usa dose populacional como partida, mas monitora para garantir alvo terapêutico seguro."
      }
    }
  ]
    },
    {
      id: 3,
      title: "Penicilinas",
      duration: "25 min",
      xp: 120,
      sections: [
        {
          title: "Introdução às Penicilinas",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #7c3aed; margin-bottom: 15px;">🧬 Penicilinas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>penicilinas</strong> são antibióticos beta-lactâmicos que atuam inibindo a síntese 
                da parede celular bacteriana. São classificadas em naturais, resistentes à penicilinase, 
                aminopenicilinas e de amplo espectro.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o mecanismo de ação das penicilinas?",
            options: [
              "Inibição da síntese proteica",
              "Inibição da síntese da parede celular",
              "Inibição da síntese de DNA"
            ],
            correct: 1,
            explanation: "As penicilinas inibem a síntese da parede celular bacteriana, levando à lise celular."
          }
        }
      ]
    },
    {
      id: 4,
      title: "Cefalosporinas",
      duration: "25 min",
      xp: 120,
      sections: [
        {
          title: "Classificação das Cefalosporinas",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Cefalosporinas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>cefalosporinas</strong> são antibióticos beta-lactâmicos classificados em gerações 
                (1ª a 5ª) com espectro de ação progressivamente mais amplo contra gram-negativos.
              </p>
            </div>
          `,
          question: {
            text: "Como são classificadas as cefalosporinas?",
            options: [
              "Por cor",
              "Por gerações",
              "Por peso molecular"
            ],
            correct: 1,
            explanation: "As cefalosporinas são classificadas em gerações (1ª a 5ª) com espectro de ação crescente."
          }
        }
      ]
    },
    {
      id: 5,
      title: "Carbapenêmicos e Monobactâmicos",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Carbapenêmicos",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Carbapenêmicos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>carbapenêmicos</strong> (imipenem, meropenem, ertapenem) são beta-lactâmicos 
                de amplo espectro, reservados para infecções graves por bactérias multirresistentes.
              </p>
            </div>
          `,
          question: {
            text: "Qual é a principal indicação dos carbapenêmicos?",
            options: [
              "Infecções leves de pele",
              "Infecções graves por bactérias multirresistentes",
              "Profilaxia cirúrgica"
            ],
            correct: 1,
            explanation: "Carbapenêmicos são reservados para infecções graves causadas por bactérias multirresistentes."
          }
        }
      ]
    },
    {
      id: 6,
      title: "Aminoglicosídeos",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Características dos Aminoglicosídeos",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Aminoglicosídeos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>aminoglicosídeos</strong> (gentamicina, amicacina, tobramicina) inibem a síntese 
                proteica bacteriana. São nefrotóxicos e ototóxicos, requerendo monitoramento.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o principal efeito adverso dos aminoglicosídeos?",
            options: [
              "Hepatotoxicidade",
              "Nefrotoxicidade e ototoxicidade",
              "Cardiotoxicidade"
            ],
            correct: 1,
            explanation: "Aminoglicosídeos são conhecidos por causar nefrotoxicidade e ototoxicidade, necessitando monitoramento."
          }
        }
      ]
    },
    {
      id: 7,
      title: "Tetraciclina e Fenicóis",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Tetraciclinas",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">💊 Tetraciclinas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>tetraciclinas</strong> (doxiciclina, minociclina) são bacteriostáticos de amplo 
                espectro que inibem a síntese proteica. Contraindicadas em gestantes e crianças.
              </p>
            </div>
          `,
          question: {
            text: "Por que tetraciclinas são contraindicadas em crianças?",
            options: [
              "Causam manchas nos dentes",
              "Causam retardo mental",
              "Causam alergia"
            ],
            correct: 0,
            explanation: "Tetraciclinas podem causar manchas permanentes nos dentes em desenvolvimento e afetar o crescimento ósseo."
          }
        }
      ]
    },
    {
      id: 8,
      title: "Rifamicinas",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Rifampicina e Derivados",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Rifamicinas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>rifampicina</strong> inibe a RNA polimerase bacteriana. É fundamental no tratamento 
                da tuberculose e hanseníase. Causa coloração alaranjada de fluidos corporais.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o mecanismo de ação da rifampicina?",
            options: [
              "Inibição da síntese da parede celular",
              "Inibição da RNA polimerase",
              "Inibição da síntese proteica"
            ],
            correct: 1,
            explanation: "Rifampicina inibe a RNA polimerase bacteriana, bloqueando a transcrição do DNA."
          }
        }
      ]
    },
    {
      id: 9,
      title: "Nitroimidazóis",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Metronidazol e Tinidazol",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #7c3aed; margin-bottom: 15px;">💊 Nitroimidazóis</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                O <strong>metronidazol</strong> é ativo contra anaeróbios e protozoários. Causa efeito 
                dissulfiram com álcool. Usado em infecções abdominais e vaginose bacteriana.
              </p>
            </div>
          `,
          question: {
            text: "Contra quais microrganismos o metronidazol é ativo?",
            options: [
              "Apenas aeróbios",
              "Anaeróbios e protozoários",
              "Apenas vírus"
            ],
            correct: 1,
            explanation: "Metronidazol é ativo contra bactérias anaeróbias e protozoários como Giardia e Trichomonas."
          }
        }
      ]
    },
    {
      id: 10,
      title: "Macrolídeos e Lincosaminas",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Macrolídeos",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Macrolídeos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>macrolídeos</strong> (azitromicina, claritromicina, eritromicina) inibem a síntese 
                proteica bacteriana. São alternativas em alérgicos à penicilina.
              </p>
            </div>
          `,
          question: {
            text: "Qual é a principal vantagem dos macrolídeos?",
            options: [
              "Baixo custo",
              "Alternativa em alérgicos à penicilina",
              "Uso intravenoso exclusivo"
            ],
            correct: 1,
            explanation: "Macrolídeos são importantes alternativas para pacientes alérgicos à penicilina."
          }
        }
      ]
    },
    {
      id: 11,
      title: "Glicopeptídeos e Lipoglicopeptídeos",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Vancomicina e Teicoplanina",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Glicopeptídeos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>vancomicina</strong> é o tratamento de escolha para MRSA (Staphylococcus aureus 
                resistente à meticilina). Requer monitoramento de níveis séricos.
              </p>
            </div>
          `,
          question: {
            text: "Qual é a principal indicação da vancomicina?",
            options: [
              "Infecções por gram-negativos",
              "Infecções por MRSA",
              "Infecções fúngicas"
            ],
            correct: 1,
            explanation: "Vancomicina é o tratamento de escolha para infecções por MRSA (Staphylococcus aureus resistente à meticilina)."
          }
        }
      ]
    },
    {
      id: 12,
      title: "Estreptograminas",
      duration: "12 min",
      xp: 60,
      sections: [
        {
          title: "Quinupristina-Dalfopristina",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Estreptograminas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>estreptograminas</strong> são usadas em infecções por gram-positivos multirresistentes, 
                incluindo VRE (Enterococcus resistente à vancomicina).
              </p>
            </div>
          `,
          question: {
            text: "Para quais infecções as estreptograminas são indicadas?",
            options: [
              "Infecções virais",
              "Gram-positivos multirresistentes",
              "Infecções fúngicas"
            ],
            correct: 1,
            explanation: "Estreptograminas são reservadas para infecções por gram-positivos multirresistentes, incluindo VRE."
          }
        }
      ]
    },
    {
      id: 13,
      title: "Polimixinas",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Polimixina B e Colistina",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">💊 Polimixinas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>polimixinas</strong> são antibióticos de último recurso para gram-negativos 
                multirresistentes. São nefrotóxicas e neurotóxicas.
              </p>
            </div>
          `,
          question: {
            text: "Quando as polimixinas são indicadas?",
            options: [
              "Infecções leves",
              "Gram-negativos multirresistentes",
              "Profilaxia cirúrgica"
            ],
            correct: 1,
            explanation: "Polimixinas são antibióticos de último recurso para infecções por gram-negativos multirresistentes."
          }
        }
      ]
    },
    {
      id: 14,
      title: "Oxazolidinonas",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Linezolida",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Oxazolidinonas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>linezolida</strong> é ativa contra gram-positivos multirresistentes, incluindo MRSA 
                e VRE. Pode causar mielossupressão e neuropatia periférica.
              </p>
            </div>
          `,
          question: {
            text: "Qual é um efeito adverso importante da linezolida?",
            options: [
              "Hepatotoxicidade",
              "Mielossupressão",
              "Nefrotoxicidade"
            ],
            correct: 1,
            explanation: "Linezolida pode causar mielossupressão (supressão da medula óssea) com uso prolongado."
          }
        }
      ]
    },
    {
      id: 15,
      title: "Sulfonamidas e Trimetoprim",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Sulfametoxazol-Trimetoprim",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #7c3aed; margin-bottom: 15px;">💊 Sulfonamidas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                O <strong>sulfametoxazol-trimetoprim</strong> (SMX-TMP) é usado em infecções urinárias, 
                pneumonia por Pneumocystis e toxoplasmose. Pode causar reações de hipersensibilidade.
              </p>
            </div>
          `,
          question: {
            text: "Qual é uma indicação do SMX-TMP?",
            options: [
              "Meningite bacteriana",
              "Pneumonia por Pneumocystis",
              "Endocardite"
            ],
            correct: 1,
            explanation: "SMX-TMP é usado no tratamento e profilaxia de pneumonia por Pneumocystis jirovecii."
          }
        }
      ]
    },
    {
      id: 16,
      title: "Quinolonas",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Fluoroquinolonas",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Quinolonas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>fluoroquinolonas</strong> (ciprofloxacino, levofloxacino, moxifloxacino) inibem 
                a DNA girase bacteriana. Contraindicadas em gestantes e crianças.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o mecanismo de ação das quinolonas?",
            options: [
              "Inibição da síntese proteica",
              "Inibição da DNA girase",
              "Inibição da parede celular"
            ],
            correct: 1,
            explanation: "Quinolonas inibem a DNA girase e topoisomerase IV, enzimas essenciais para replicação do DNA bacteriano."
          }
        }
      ]
    },
    {
      id: 17,
      title: "Antibióticos Únicos, Novos ou em Desenvolvimento",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Novos Antibióticos",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Antibióticos Novos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Novos antibióticos incluem <strong>ceftazidima-avibactam</strong>, <strong>ceftolozano-tazobactam</strong> 
                e <strong>meropenem-vaborbactam</strong>, desenvolvidos para combater bactérias multirresistentes.
              </p>
            </div>
          `,
          question: {
            text: "Por que novos antibióticos são necessários?",
            options: [
              "Para reduzir custos",
              "Para combater resistência bacteriana",
              "Para substituir antibióticos antigos"
            ],
            correct: 1,
            explanation: "Novos antibióticos são desenvolvidos para combater o crescente problema da resistência bacteriana."
          }
        }
      ]
    },
    {
      id: 18,
      title: "Antibióticos das Vias Urinárias",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Nitrofurantoína e Fosfomicina",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Antibióticos Urinários</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>nitrofurantoína</strong> e a <strong>fosfomicina</strong> são antibióticos específicos 
                para infecções do trato urinário inferior, com alta concentração urinária.
              </p>
            </div>
          `,
          question: {
            text: "Qual é a vantagem da nitrofurantoína?",
            options: [
              "Uso sistêmico",
              "Alta concentração urinária",
              "Ação antifúngica"
            ],
            correct: 1,
            explanation: "Nitrofurantoína atinge altas concentrações na urina, sendo eficaz para infecções do trato urinário inferior."
          }
        }
      ]
    },
    {
      id: 19,
      title: "Antibióticos Tópicos",
      duration: "12 min",
      xp: 60,
      sections: [
        {
          title: "Mupirocina e Ácido Fusídico",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">💊 Antibióticos Tópicos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>mupirocina</strong> é usada para descolonização nasal de MRSA e tratamento de 
                impetigo. O <strong>ácido fusídico</strong> é usado em infecções cutâneas.
              </p>
            </div>
          `,
          question: {
            text: "Para que serve a mupirocina?",
            options: [
              "Tratamento de pneumonia",
              "Descolonização nasal de MRSA",
              "Tratamento de meningite"
            ],
            correct: 1,
            explanation: "Mupirocina é usada topicamente para descolonização nasal de MRSA e tratamento de impetigo."
          }
        }
      ]
    },
    {
      id: 20,
      title: "Antimicobacterianos",
      duration: "25 min",
      xp: 120,
      sections: [
        {
          title: "Tratamento da Tuberculose",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Antimicobacterianos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                O tratamento da <strong>tuberculose</strong> envolve rifampicina, isoniazida, pirazinamida 
                e etambutol (esquema RIPE). A duração mínima é de 6 meses.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o esquema básico para tuberculose?",
            options: [
              "RIPE",
              "ABCD",
              "MRSA"
            ],
            correct: 0,
            explanation: "O esquema RIPE (Rifampicina, Isoniazida, Pirazinamida, Etambutol) é o tratamento padrão para tuberculose."
          }
        }
      ]
    },
    {
      id: 21,
      title: "Antifúngicos - Polienos",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Anfotericina B",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #7c3aed; margin-bottom: 15px;">💊 Polienos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>anfotericina B</strong> é um antifúngico de amplo espectro usado em infecções 
                fúngicas graves. É nefrotóxica e causa reações infusionais.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o principal efeito adverso da anfotericina B?",
            options: [
              "Hepatotoxicidade",
              "Nefrotoxicidade",
              "Cardiotoxicidade"
            ],
            correct: 1,
            explanation: "Anfotericina B é conhecida por causar nefrotoxicidade significativa, requerendo monitoramento renal."
          }
        }
      ]
    },
    {
      id: 22,
      title: "Antifúngicos - Azóis",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Fluconazol e Voriconazol",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Azóis</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>azóis</strong> (fluconazol, itraconazol, voriconazol, posaconazol) inibem a 
                síntese de ergosterol na membrana fúngica. São usados em candidíase e aspergilose.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o mecanismo de ação dos azóis?",
            options: [
              "Inibição da síntese de ergosterol",
              "Inibição da síntese proteica",
              "Inibição da parede celular"
            ],
            correct: 0,
            explanation: "Azóis inibem a síntese de ergosterol, componente essencial da membrana celular fúngica."
          }
        }
      ]
    },
    {
      id: 23,
      title: "Antifúngicos - Inibidores da Beta-D-Glucana",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Equinocandinas",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Equinocandinas</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                As <strong>equinocandinas</strong> (caspofungina, micafungina, anidulafungina) inibem a 
                síntese da parede celular fúngica. São usadas em candidíase invasiva.
              </p>
            </div>
          `,
          question: {
            text: "Qual é a indicação das equinocandinas?",
            options: [
              "Infecções bacterianas",
              "Candidíase invasiva",
              "Infecções virais"
            ],
            correct: 1,
            explanation: "Equinocandinas são indicadas para candidíase invasiva e aspergilose refratária."
          }
        }
      ]
    },
    {
      id: 24,
      title: "Antifúngicos - Flucitosina",
      duration: "12 min",
      xp: 60,
      sections: [
        {
          title: "Flucitosina",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Flucitosina</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>flucitosina</strong> é usada em combinação com anfotericina B para meningite 
                criptocócica. Pode causar mielossupressão.
              </p>
            </div>
          `,
          question: {
            text: "Com qual medicamento a flucitosina é geralmente combinada?",
            options: [
              "Vancomicina",
              "Anfotericina B",
              "Ciprofloxacino"
            ],
            correct: 1,
            explanation: "Flucitosina é geralmente usada em combinação com anfotericina B para meningite criptocócica."
          }
        }
      ]
    },
    {
      id: 25,
      title: "Antimaláricos",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Cloroquina e Artemisina",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">💊 Antimaláricos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>antimaláricos</strong> incluem cloroquina, mefloquina e derivados da artemisina. 
                O tratamento depende da espécie de Plasmodium e do padrão de resistência.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o tratamento de escolha para malária resistente?",
            options: [
              "Cloroquina",
              "Derivados da artemisina",
              "Penicilina"
            ],
            correct: 1,
            explanation: "Derivados da artemisina são o tratamento de escolha para malária resistente à cloroquina."
          }
        }
      ]
    },
    {
      id: 26,
      title: "Demais Antiprotozoários",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Antiprotozoários Diversos",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Antiprotozoários</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Incluem medicamentos para <strong>toxoplasmose</strong> (sulfadiazina + pirimetamina), 
                <strong>giardíase</strong> (metronidazol) e <strong>leishmaniose</strong> (antimoniais).
              </p>
            </div>
          `,
          question: {
            text: "Qual é o tratamento para toxoplasmose?",
            options: [
              "Sulfadiazina + pirimetamina",
              "Cloroquina",
              "Fluconazol"
            ],
            correct: 0,
            explanation: "O tratamento padrão para toxoplasmose é a combinação de sulfadiazina com pirimetamina."
          }
        }
      ]
    },
    {
      id: 27,
      title: "Princípios dos Antivirais",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Fundamentos da Terapia Antiviral",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #7c3aed; margin-bottom: 15px;">💊 Antivirais</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>antivirais</strong> interferem em etapas específicas da replicação viral. 
                Incluem inibidores de transcriptase reversa, protease e neuraminidase.
              </p>
            </div>
          `,
          question: {
            text: "Como os antivirais atuam?",
            options: [
              "Matam os vírus diretamente",
              "Interferem na replicação viral",
              "Estimulam o sistema imune"
            ],
            correct: 1,
            explanation: "Antivirais interferem em etapas específicas da replicação viral, impedindo sua multiplicação."
          }
        }
      ]
    },
    {
      id: 28,
      title: "Anti-influenza",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Oseltamivir e Zanamivir",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">🔬 Anti-influenza</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                O <strong>oseltamivir</strong> e o <strong>zanamivir</strong> são inibidores da neuraminidase 
                usados no tratamento e profilaxia da influenza. Devem ser iniciados precocemente.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o mecanismo dos anti-influenza?",
            options: [
              "Inibição da neuraminidase",
              "Inibição da transcriptase reversa",
              "Inibição da protease"
            ],
            correct: 0,
            explanation: "Oseltamivir e zanamivir inibem a neuraminidase viral, impedindo a liberação de novos vírus."
          }
        }
      ]
    },
    {
      id: 29,
      title: "Drogas Contra Vírus Herpes",
      duration: "18 min",
      xp: 90,
      sections: [
        {
          title: "Aciclovir e Valaciclovir",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Anti-herpes</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                O <strong>aciclovir</strong> e o <strong>valaciclovir</strong> são análogos de nucleosídeos 
                usados no tratamento de herpes simples e zoster. São bem tolerados.
              </p>
            </div>
          `,
          question: {
            text: "Para quais infecções o aciclovir é indicado?",
            options: [
              "Influenza",
              "Herpes simples e zoster",
              "Hepatite C"
            ],
            correct: 1,
            explanation: "Aciclovir é indicado para tratamento de infecções por vírus herpes simples e varicela-zoster."
          }
        }
      ]
    },
    {
      id: 30,
      title: "Drogas Contra Vírus de Hepatite",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Tratamento das Hepatites Virais",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Anti-hepatite</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                O tratamento da <strong>hepatite B</strong> inclui tenofovir e entecavir. A <strong>hepatite C</strong> 
                é tratada com antivirais de ação direta (DAAs) como sofosbuvir.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o tratamento para hepatite C?",
            options: [
              "Interferon apenas",
              "Antivirais de ação direta (DAAs)",
              "Antibióticos"
            ],
            correct: 1,
            explanation: "Hepatite C é tratada com antivirais de ação direta (DAAs) como sofosbuvir, com altas taxas de cura."
          }
        }
      ]
    },
    {
      id: 31,
      title: "Antirretrovirais (HIV)",
      duration: "25 min",
      xp: 120,
      sections: [
        {
          title: "Terapia Antirretroviral",
          content: `
            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #d97706; margin-bottom: 15px;">💊 Antirretrovirais</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>terapia antirretroviral (TARV)</strong> combina inibidores de transcriptase reversa, 
                protease e integrase. O objetivo é suprimir a carga viral e preservar a imunidade.
              </p>
            </div>
          `,
          question: {
            text: "Qual é o objetivo da TARV?",
            options: [
              "Curar o HIV",
              "Suprimir a carga viral",
              "Prevenir outras infecções"
            ],
            correct: 1,
            explanation: "O objetivo da TARV é suprimir a carga viral a níveis indetectáveis e preservar a função imunológica."
          }
        }
      ]
    },
    {
      id: 32,
      title: "Antivirais: Miscelânea",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Outros Antivirais",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">🔬 Antivirais Diversos</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Incluem <strong>ribavirina</strong> (hepatite C, vírus sincicial respiratório), 
                <strong>ganciclovir</strong> (citomegalovírus) e <strong>foscarnet</strong> (herpes resistente).
              </p>
            </div>
          `,
          question: {
            text: "Para qual vírus o ganciclovir é indicado?",
            options: [
              "Influenza",
              "Citomegalovírus",
              "HIV"
            ],
            correct: 1,
            explanation: "Ganciclovir é indicado para tratamento de infecções por citomegalovírus, especialmente em imunossuprimidos."
          }
        }
      ]
    }
  ]
};

