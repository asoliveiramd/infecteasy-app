// Módulo: Curso Extensivo de Antimicrobianos
export const antimicrobianosModule = {
  title: "Curso Extensivo de Antimicrobianos",
  description: "Curso completo sobre antimicrobianos: antibióticos, antifúngicos, antivirais e antiparasitários",
  lessons: [
    {
      id: 1,
      title: "Princípios Básicos",
      duration: "15 min",
      xp: 80,
      sections: [
        {
          title: "Introdução aos Antimicrobianos",
          content: `
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #2563eb; margin-bottom: 15px;">🔬 Conceitos Fundamentais</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                Os <strong>antimicrobianos</strong> são substâncias que matam ou inibem o crescimento de microrganismos. 
                Incluem antibióticos (contra bactérias), antifúngicos (contra fungos), antivirais (contra vírus) 
                e antiparasitários (contra parasitas).
              </p>
            </div>
          `,
          question: {
            text: "Qual é a definição de antimicrobiano?",
            options: [
              "Substância que mata apenas bactérias",
              "Substância que mata ou inibe o crescimento de microrganismos",
              "Substância que estimula o sistema imunológico"
            ],
            correct: 1,
            explanation: "Antimicrobianos são substâncias que matam ou inibem o crescimento de microrganismos, incluindo bactérias, fungos, vírus e parasitas."
          }
        }
      ]
    },
    {
      id: 2,
      title: "Farmacocinética e Farmacodinâmica",
      duration: "20 min",
      xp: 100,
      sections: [
        {
          title: "Princípios de Farmacocinética",
          content: `
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <h3 style="color: #0369a1; margin-bottom: 15px;">💊 Farmacocinética</h3>
              <p style="font-size: 16px; line-height: 1.6; margin-bottom: 15px;">
                A <strong>farmacocinética</strong> estuda o que o organismo faz com o medicamento: 
                absorção, distribuição, metabolismo e excreção (ADME).
              </p>
            </div>
          `,
          question: {
            text: "O que estuda a farmacocinética?",
            options: [
              "O que o medicamento faz no organismo",
              "O que o organismo faz com o medicamento",
              "A resistência bacteriana"
            ],
            correct: 1,
            explanation: "Farmacocinética estuda o que o organismo faz com o medicamento: absorção, distribuição, metabolismo e excreção."
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

