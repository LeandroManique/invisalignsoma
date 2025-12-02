import { FAQItem, StepItem } from './types';

export const SITE_CONTENT = {
  hero: {
    headline: "Aparelhos invisíveis com tecnologia, conforto e um planejamento que respeita o seu caso.",
    subtext: "Na SOMA, o tratamento com Invisalign é conduzido pelo ortodontista Dr. Pedro Hammes, especialista em alinhadores, com foco em estética, função e previsibilidade, desde o primeiro dia.",
    cta: "Agendar consulta com simulação digital iTero"
  },
  drPedroProfile: {
    name: "Dr. Pedro Hammes",
    role: "Ortodontia | Invisalign Doctor",
    cro: "CRO/RS: 14.778",
    titles: [
      "Graduação em Odontologia",
      "Especialização em Ortodontia",
      "Invisalign Doctor"
    ],
    description: "Especialista em Ortodontia, o Dr. Pedro alia precisão técnica a uma escuta próxima e acessível. Seu trabalho é pautado por detalhismo, clareza nas explicações e compromisso em construir cada tratamento em parceria com o paciente.\n\nNa prática clínica, utiliza recursos digitais como o escaneamento intraoral para planejar e acompanhar os movimentos ortodônticos com maior previsibilidade e conforto. Essa abordagem torna possível conduzir tratamentos com alinhadores transparentes de forma criteriosa, reforçando a filosofia da SOMA de unir tecnologia responsável, ética e cuidado humano.\n\nMais do que alinhar dentes, o Dr. Pedro entende a ortodontia como um processo de transformação que impacta estética, bem-estar e função, sempre com naturalidade e respeito ao tempo de cada paciente."
  },
  locations: [
    {
      city: "Lajeado",
      address: "Av. Piraí, 300 - sala 1010, Bairro São Cristóvão",
      phone: "(51) 3011-1231",
      whatsapp: "555199775288",
      whatsappDisplay: "(51) 9977-5288"
    },
    {
      city: "Taquari",
      address: "Rua Osvaldo Aranha, 2176, Bairro Centro",
      phone: "(51) 3653-7273",
      whatsapp: "555198423638",
      whatsappDisplay: "(51) 9842-3638"
    },
    {
      city: "Capitão",
      address: "Rua 20 de Março, 160 - sala 1 - Bairro Centro",
      phone: "(51) 3758-1231",
      whatsapp: "555181519915",
      whatsappDisplay: "(51) 8151-9915"
    }
  ],
  whyInvisalign: {
    title: "Por Que Pessoas Escolhem Invisalign",
    description: "Alinhar o sorriso não é apenas “estética”. É poder sorrir com confiança, melhorar a mordida, evitar desgastes, aliviar tensões musculares e conquistar harmonia facial, tudo sem fios, sem bráquetes e sem impacto na rotina.",
    benefits: [
      "Conforto absoluto",
      "Discrição total",
      "Higiene facilitada",
      "Previsibilidade de resultados",
      "Resultado natural",
      "Acompanhamento profissional real"
    ]
  },
  somaDifference: {
    title: "O Diferencial SOMA: O Invisalign Conduzido do Jeito Certo",
    tech: {
      title: "Tecnologia iTero desde a primeira consulta",
      features: [
        "Visualizar sua boca em alta definição",
        "Prever movimentos e possibilidades",
        "Entender riscos e limites reais",
        "Ver simulação aproximada do resultado",
        "Eliminar moldes tradicionais desconfortáveis"
      ]
    },
    planning: {
      title: "Planejamento individual, não genérico",
      text: "O plano de alinhamento é construído considerando: sua mordida, sua anatomia dentária, seus hábitos, seus objetivos e sua rotina."
    }
  },
  processSection: {
    title: "Como funciona o tratamento com Invisalign",
    intro: "Tecnologia que mostra. Planejamento que esclarece. Acompanhamento que dá segurança.\nTudo conduzido pelo Dr. Pedro Hammes.\n\nO Invisalign é moderno porque é transparente por fora e transparente por dentro.\nNa SOMA, você entende o tratamento desde o primeiro minuto. Sem promessas soltas, sem termos difíceis, sem surpresas.\n\nAqui está o passo a passo real.",
    outro: "Um processo claro, seguro e confortável do começo ao fim.\n\nO tratamento com Invisalign na SOMA é pensado para você: você entende cada etapa, vê seu caso em 3D, participa do planejamento, recebe acompanhamento próximo e tem previsibilidade real.\n\nTudo conduzido com a calma, precisão e cuidado do Dr. Pedro Hammes.",
    steps: [
      {
        number: 1,
        title: "Avaliação com escaneamento digital iTero",
        description: "A experiência começa com um escaneamento 3D feito pelo iTero, a tecnologia usada nos melhores consultórios do mundo. Sem moldes. Sem náusea. Sem espera. O escaneamento é rápido, confortável e revela exatamente o que está acontecendo na sua boca.\n\nO iTero permite que você veja:",
        bullets: [
          "Possíveis movimentos dos dentes",
          "Áreas que precisam de correção",
          "Diferenças entre o que é estético e o que é funcional",
          "O que o Invisalign pode ou não corrigir (uma das maiores dúvidas dos pacientes)"
        ],
        afterBullets: "Por que isso importa?\nPorque você já começa entendendo e vendo o que precisa ser feito. Isso ilumina o caminho e reduz ansiedade, algo essencial para uma decisão segura."
      },
      {
        number: 2,
        title: "Simulação do sorriso e explicação do seu caso",
        description: "Com o escaneamento em mãos, o Dr. Pedro mostra uma simulação aproximada de como seus dentes podem se mover ao longo do tratamento. Esse é o momento de clareza. Você vê. Você entende. Você participa da decisão.\n\nE se você for uma pessoa mais objetiva, o Dr. Pedro resume. Se você gosta de detalhes, ele explica tudo. Se você precisa de segurança, ele reforça cada etapa.",
        bullets: [
          "Quais dentes precisam ser alinhados",
          "Por que isso é importante para a estética e a mordida",
          "Quanto tempo, em média, seu caso exige",
          "Quais movimentos são possíveis e quais não são",
          "O nível de complexidade do seu alinhamento"
        ]
      },
      {
        number: 3,
        title: "Planejamento personalizado",
        description: "O Invisalign não é uma sequência de “plaquinhas”. É um plano técnico de movimentação dentária. Cada alinhador é calculado para que o movimento seja controlado, seguro e confortável evitando excessos, dor desnecessária e resultados instáveis.",
        bullets: [
          "Sua anatomia",
          "Sua mordida",
          "Seu padrão muscular",
          "Sua rotina",
          "Sua estética natural",
          "Seus objetivos"
        ]
      },
      {
        number: 4,
        title: "Produção dos alinhadores",
        description: "Após o planejamento, seus alinhadores são produzidos com a precisão do sistema digital da Align. Sem nada genérico. Nada padrão. Cada alinhador é um micro-passinho pensado para chegar ao resultado final.",
        bullets: [
          "Feitos sob medida",
          "Sequenciais",
          "Confortáveis",
          "Discretos",
          "Fáceis de limpar"
        ]
      },
      {
        number: 5,
        title: "Uso diário com suporte real",
        description: "Durante o tratamento, você usa seus alinhadores conforme orientação e passa pelos acompanhamentos com o Dr. Pedro. Acompanhamento próximo = resultado previsível. Você nunca fica sem saber o que está acontecendo.",
        bullets: [
          "Correção de eventuais desvios",
          "Ajustes quando necessário",
          "Verificação da estabilidade",
          "Orientação clara sobre o que fazer se perder ou danificar um alinhador"
        ]
      },
      {
        number: 6,
        title: "Finalização e retenção",
        description: "Quando o alinhamento chega ao resultado final, inicia-se a fase de retenção, essencial para manter o sorriso estável ao longo dos anos. Isso responde outra dúvida frequente dos pacientes: “Vou precisar usar contenção depois?” Sim, e você será orientado com clareza.",
        bullets: [
          "Orientação personalizada",
          "Retenção feita sob medida",
          "Acompanhamento final"
        ]
      }
    ] as StepItem[]
  },
  faq: [
    {
      question: "Dói?",
      answer: "Pode gerar leve pressão nos primeiros dias. É sinal de movimento controlado."
    },
    {
      question: "Quanto tempo dura o tratamento?",
      answer: "Depende do caso. Na consulta, após o iTero, o Dr. Pedro estima com precisão."
    },
    {
      question: "Posso tirar para comer?",
      answer: "Sim. Essa é uma das maiores vantagens."
    },
    {
      question: "Serve para qualquer caso?",
      answer: "Nem sempre. Por isso o diagnóstico é essencial."
    },
    {
      question: "Por que Invisalign e não outras marcas?",
      answer: "Mais tecnologia, mais precisão e maior previsibilidade no planejamento."
    }
  ] as FAQItem[],
  footer: {
    text: "Seu sorriso merece tecnologia, atenção e responsabilidade. Na SOMA, você tem acompanhamento real, previsibilidade e um tratamento conduzido por um especialista que cuida do processo do início ao fim."
  }
};

// System instruction for Liv.ia
export const LIVIA_SYSTEM_INSTRUCTION = `
VOCÊ É LIV.IA, A ASSISTENTE VIRTUAL DO DR. PEDRO HAMMES (SOMA SAÚDE INTEGRADA).

DADOS CRÍTICOS (CONSULTE PARA LINKS E ENDEREÇOS):
${JSON.stringify(SITE_CONTENT.locations)}

---

SUA PERSONALIDADE E DIRETRIZES DE COMPORTAMENTO:
1.  **Identidade**: Você é inteligente, empática e possui total sabedoria semântica. Você ouve ativamente o paciente.
2.  **Mensagens**: SEMPRE use mensagens curtas, diretas e naturais. Evite blocos de texto longos.
3.  **Protocolo de Nome (MANDATÓRIO)**:
    *   Sempre pergunte o nome da pessoa no início da interação de forma educada.
    *   Uma vez que o usuário diga o nome, USE-O nas mensagens seguintes para criar conexão.
4.  **Não Use Scripts**: Seja natural e fluida.
5.  **Metodologia SPIN SELLING**:
    Use esta técnica sutilmente para conduzir ao agendamento, sem parecer vendedora agressiva:
    *   *Situação*: Entenda como está o sorriso/dentes da pessoa hoje.
    *   *Problema*: Descubra o que incomoda (estética, dor, mordida).
    *   *Implicação*: Mostre empatia sobre como isso afeta a vida dela.
    *   *Necessidade de Solução*: Apresente o Dr. Pedro e a tecnologia Invisalign como a solução segura.
6.  **Conversão (Objetivo Final)**:
    *   Sempre que pertinente, leve ao agendamento.
    *   Pergunte qual cidade fica melhor: **Lajeado, Taquari ou Capitão**.
    *   **IMPORTANTE SOBRE LINKS**: Quando fornecer o WhatsApp, forneça o link no formato Markdown: [Agendar em Lajeado](https://wa.me/555199775288). NÃO mostre a URL crua. Use o texto do link para indicar a ação (ex: "Chamar no WhatsApp Lajeado").

---

SUA BASE DE CONHECIMENTO TÉCNICO E JURÍDICO (DOCUMENTO MESTRE):

I. CREDENCIAIS E FOCO PROFISSIONAL DO DR. PEDRO HAMMES
O Dr. Pedro Hammes é um Especialista em Ortodontia e um Invisalign Doctor (CRO/RS: 14.778).
A filosofia da SOMA e do Dr. Pedro une precisão técnica, escuta ativa e tecnologia responsável. Ele utiliza escaneamento intraoral (iTero) para planejamento. O foco é "Cuidado além do sorriso", garantindo transparência e previsibilidade.

II. DETALHAMENTO TÉCNICO INVISALIGN
*   **SmartTrack®**: Tecnologia exclusiva que torna o tratamento mais previsível e confortável.
*   **Velocidade**: Pode ser mais rápido (comparado a trocas quinzenais).
*   **Público**: Crianças (Invisalign First), Adolescentes (Invisalign Teen) e Adultos.

III. BLINDAGEM JURÍDICA E PREVISIBILIDADE (SIGA ESTRITAMENTE):
*   **Duração do Tratamento**: NUNCA prometa um tempo exato. Pode mencionar "casos médios em 6 meses", mas reforce que **apenas o Dr. Pedro pode determinar após avaliação**.
*   **Preço**: NUNCA forneça valores. Diga que o investimento varia conforme a complexidade. Mencione o "Invisalign Pay", mas sem números.
*   **Resultados**: Reforce que variam de paciente para paciente.

IV. Analogia para usar:
O Dr. Pedro é como um "arquiteto digital de sorrisos". O Invisalign é o material de construção premium, mas é o arquiteto (Dr. Pedro) quem garante a segurança, a estética e o resultado da obra.
`;
