/**
 * DATA & INTERACTIVE LOGIC FOR "NOSSA EQUIPE" SECTION
 * 
 * Este script armazena os dados da equipe em um array estruturado
 * e renderiza dinamicamente os cards com base na categoria da página atual.
 */

// Banco de dados dos membros da equipe escolar
const equipeDados = [
  // ==========================================
  // 1. EQUIPE DE GESTÃO
  // ==========================================
  {
    id: "gestao-diretor",
    categoria: "gestao",
    nome: "Prof. Carlos Alberto Prado",
    cargo: "Diretor Geral",
    imagem: "images/equipe/gestao/diretor.jpg", 
    resumo: "Gestor com mais de 20 anos de experiência em liderança pedagógica e administrativa escolar.",
    formacao: "Doutorado em Educação (USP), Graduação em Pedagogia.",
    atuacao: "Direção Geral, Relações Institucionais e Planejamento Estratégico.",
    bio: "O Prof. Carlos acredita em uma gestão escolar participativa e humana, focada no desenvolvimento integral de cada aluno e no apoio contínuo ao corpo docente.",
    objectPosition: "center 15%" // Ajuste fácil de enquadramento da foto
  },
  {
    id: "gestao-vice",
    categoria: "gestao",
    nome: "Profª. Mariana Costa Souza",
    cargo: "Vice-Diretora",
    imagem: "images/equipe/gestao/vice.jpg",
    resumo: "Especialista em organização escolar e mediação de conflitos na comunidade de aprendizagem.",
    formacao: "Mestrado em Gestão Escolar (UNICAMP), Licenciatura em História.",
    atuacao: "Vice-Direção, Coordenação Administrativa e Atendimento à Comunidade Escolar.",
    bio: "Mariana atua diretamente no suporte administrativo e na articulação entre a escola, as famílias e os alunos, assegurando um ambiente acolhedor e harmônico.",
    objectPosition: "center 15%"
  },
  {
    id: "gestao-cgpg",
    categoria: "gestao",
    nome: "Profª. Ana Beatriz Lemos",
    cargo: "CGPG (Coordenadora Geral)",
    imagem: "images/equipe/gestao/cgpg.jpg",
    resumo: "Coordenadora Geral de Práticas Pedagógicas, focada em metodologias ativas e currículo escolar.",
    formacao: "Especialização em Supervisão Escolar (PUC-SP), Graduação em Letras.",
    atuacao: "Planejamento Curricular, Formação Continuada de Professores e Avaliação Escolar.",
    bio: "Ana Beatriz coordena o planejamento pedagógico de todas as séries, impulsionando a formação continuada e garantindo a aplicação de práticas de ensino inovadoras.",
    objectPosition: "center 15%"
  },

  // ==========================================
  // 2. PROFESSORES
  // ==========================================
  {
    id: "prof-portugues",
    categoria: "professores",
    nome: "Profª. Patrícia Mendes",
    cargo: "Professora de Língua Portuguesa",
    imagem: "images/equipe/professores/patricia-mendes.jpg",
    resumo: "Apaixonada por leitura, literatura brasileira e desenvolvimento de escrita criativa.",
    formacao: "Licenciatura em Letras (USP), Especialização em Literatura Comparada.",
    atuacao: "Ensino Fundamental II e Ensino Médio.",
    bio: "Com mais de 10 anos de docência, Patrícia promove oficinas literárias e projetos de escrita que preparam os alunos para vestibulares e para a vida.",
    objectPosition: "center 12%"
  },
  {
    id: "prof-matematica",
    categoria: "professores",
    nome: "Prof. Thiago Alencar",
    cargo: "Professor de Matemática e Física",
    imagem: "images/equipe/professores/thiago-alencar.jpg",
    resumo: "Desenvolvedor de métodos dinâmicos que tornam as ciências exatas visuais e intuitivas.",
    formacao: "Graduação em Matemática (UNESP), Mestrado em Ensino de Ciências.",
    atuacao: "Ensino Médio e Orientação de Projetos de Robótica.",
    bio: "Thiago lidera a equipe de Robótica da escola e incentiva o raciocínio lógico por meio de desafios matemáticos práticos aplicados ao cotidiano.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-historia",
    categoria: "professores",
    nome: "Prof. Roberto de Oliveira",
    cargo: "Professor de História",
    imagem: "images/equipe/professores/roberto-oliveira.jpg",
    resumo: "Especialista em história contemporânea, geopolítica e engajamento em debates sociais.",
    formacao: "Licenciatura e Bacharelado em História (UNICAMP).",
    atuacao: "Ensino Fundamental II, Ensino Médio e Clube de Debates.",
    bio: "Roberto conecta os fatos históricos aos debates sociais contemporâneos, estimulando o pensamento crítico e a cidadania ativa em suas aulas.",
    objectPosition: "center 10%"
  },
  {
    id: "prof-biologia",
    categoria: "professores",
    nome: "Profª. Camila Ramos",
    cargo: "Professora de Biologia",
    imagem: "images/equipe/professores/camila-ramos.jpg",
    resumo: "Pesquisadora de ecologia urbana e orientadora de projetos de sustentabilidade na escola.",
    formacao: "Graduação em Ciências Biológicas (Federal), Especialização em Educação Ambiental.",
    atuacao: "Ensino Fundamental II, Ensino Médio e Gestão do Laboratório de Ciências.",
    bio: "Camila idealizou a horta comunitária da escola e conduz aulas práticas de campo no laboratório, despertando a consciência ecológica nos alunos.",
    objectPosition: "center 18%"
  },

  // ==========================================
  // 3. SECRETARIA
  // ==========================================
  {
    id: "sec-geral",
    categoria: "secretaria",
    nome: "Sandra Regina Pires",
    cargo: "Secretária Geral",
    imagem: "images/equipe/secretaria/sandra-pires.jpg",
    resumo: "Responsável pela documentação escolar oficial, registros e atendimento à secretaria.",
    formacao: "Tecnologia em Processos Gerenciais, Extensão em Legislação Educacional.",
    atuacao: "Registros Acadêmicos, Matrículas, Expedição de Diplomas e Arquivos.",
    bio: "Sandra organiza toda a documentação legal da escola com precisão impecável, sendo o ponto de apoio essencial para pais, alunos e órgãos de ensino.",
    objectPosition: "center 15%"
  },
  {
    id: "sec-auxiliar",
    categoria: "secretaria",
    nome: "Lucas Ramos Fonseca",
    cargo: "Auxiliar de Secretaria",
    imagem: "images/equipe/secretaria/lucas-fonseca.jpg",
    resumo: "Responsável pela recepção presencial, telefônica e suporte digital no dia a dia da secretaria.",
    formacao: "Técnico em Administração de Empresas.",
    atuacao: "Atendimento ao Público, Controle de Frequência e Comunicação Digital.",
    bio: "Lucas atua com extrema simpatia no suporte aos pais e alunos, organizando os atendimentos diários e auxiliando na transição digital de processos da secretaria.",
    objectPosition: "center 15%"
  },

  // ==========================================
  // 4. AUXILIARES
  // ==========================================
  {
    id: "aux-inspetor",
    categoria: "auxiliares",
    nome: "Jorge Fernando Santos",
    cargo: "Inspetor de Alunos",
    imagem: "images/equipe/auxiliares/jorge-santos.jpg",
    resumo: "Garante a segurança, organização e bem-estar dos estudantes nas dependências comuns.",
    formacao: "Ensino Médio Completo, Curso de Primeiros Socorros e Mediação Escolar.",
    atuacao: "Monitoramento de Pátio, Entrada/Saída e Apoio Operacional.",
    bio: "Jorge é adorado pelos alunos por sua simpatia e atenção. Ele acompanha os momentos de lazer, garantindo um ambiente escolar sempre seguro e acolhedor.",
    objectPosition: "center 10%"
  },
  {
    id: "aux-apoio",
    categoria: "auxiliares",
    nome: "Tereza Cristina Silva",
    cargo: "Auxiliar de Apoio Escolar",
    imagem: "images/equipe/auxiliares/tereza-silva.jpg",
    resumo: "Focada na infraestrutura, organização e logística das salas de aula e eventos pedagógicos.",
    formacao: "Ensino Médio Completo, Capacitação em Higiene e Organização de Espaços Coletivos.",
    atuacao: "Organização Física, Suporte em Feiras Culturais e Eventos da Comunidade.",
    bio: "Tereza cuida com todo carinho da preparação dos espaços escolares, garantindo que todas as atividades pedagógicas transcorram em ambientes limpos e perfeitamente estruturados.",
    objectPosition: "center 15%"
  },

  // ==========================================
  // 5. EQUIPE QUE DESENVOLVEU O SITE (SITE)
  // ==========================================
  {
    id: "dev-aline",
    categoria: "desenvolvedores",
    nome: "Aline Medeiros",
    cargo: "Design & Frontend Developer",
    imagem: "images/equipe/site/aline-medeiros.jpg",
    resumo: "Responsável por idealizar o Design System moderno e programar as interações responsivas.",
    formacao: "Graduação em Design Gráfico (Belas Artes), Tecnólogo em Análise de Sistemas.",
    atuacao: "UI/UX Design, Desenvolvimento de Interfaces e Acessibilidade Web.",
    bio: "Aline buscou unir uma estética escolar elegante com excelente usabilidade móvel, garantindo que a página de equipe seja rápida e acessível para todos.",
    objectPosition: "center 12%"
  },
  {
    id: "dev-felipe",
    categoria: "desenvolvedores",
    nome: "Felipe Antunes",
    cargo: "Full Stack & Infraestrutura",
    imagem: "images/equipe/site/felipe-antunes.jpg",
    resumo: "Responsável pela estrutura de dados flexível e performance do carregamento de assets.",
    formacao: "Bacharelado em Ciência da Computação (USP).",
    atuacao: "Modelagem de Dados, Otimização de Performance e Integrações.",
    bio: "Felipe estruturou o sistema de forma modular, permitindo a fácil inclusão de futuros funcionários e garantindo o funcionamento perfeito do fallback de imagens.",
    objectPosition: "center 15%"
  }
];

// Caminho do arquivo de placeholder padrão
const FALLBACK_PLACEHOLDER = "assets/placeholder.svg";

/**
 * Cria a estrutura HTML de um card de membro de equipe
 * @param {Object} membro Dados do membro da equipe
 * @returns {HTMLElement} Elemento DOM do card
 */
function criarCardMembro(membro) {
  const card = document.createElement("div");
  card.className = "member-card";
  card.id = `card-${membro.id}`;

  const caminhoImagem = membro.imagem && membro.imagem.trim() !== "" ? membro.imagem : FALLBACK_PLACEHOLDER;
  const posFoto = membro.objectPosition || "center 15%";

  card.innerHTML = `
    <!-- Linha Principal (Foto no lado esquerdo / Painel de Detalhes no lado direito) -->
    <div class="card-main-row">
      
      <!-- Bloco de Mídia (Foto e Botão) -->
      <div class="card-media-container">
        <img src="${caminhoImagem}" alt="Foto de ${membro.nome}" class="member-photo" style="object-position: ${posFoto};" loading="lazy">
        <button class="toggle-btn" aria-label="Ver informações sobre ${membro.nome}" aria-expanded="false" aria-controls="details-${membro.id}">
          <!-- Ícone + em SVG -->
          <svg viewBox="0 0 24 24" class="btn-icon" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>
      </div>
      
      <!-- Painel de Informações Detalhadas (Expansão Lateral) -->
      <div class="card-expanded-panel" id="details-${membro.id}">
        <h3 class="member-name-exp">${membro.nome}</h3>
        <div class="member-role-exp">${membro.cargo}</div>
        
        <div class="expanded-inner-details">
          <div class="detail-item">
            <div class="detail-label">Formação Acadêmica</div>
            <div class="detail-value">${membro.formacao}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Área de Atuação</div>
            <div class="detail-value">${membro.atuacao}</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Biografia</div>
            <div class="detail-bio">${membro.bio}</div>
          </div>
        </div>
      </div>

    </div>

    <!-- Painel Resumido Inferior (Visível apenas quando fechado no Desktop) -->
    <div class="card-collapsed-panel" id="collapsed-${membro.id}">
      <h3 class="member-name">${membro.nome}</h3>
      <div class="member-role">${membro.cargo}</div>
      <p class="member-summary">${membro.resumo}</p>
    </div>
  `;

  // Fallback de imagem caso dê erro de carregamento
  const imgElement = card.querySelector(".member-photo");
  imgElement.onerror = function() {
    if (this.src !== FALLBACK_PLACEHOLDER) {
      this.src = FALLBACK_PLACEHOLDER;
      console.warn(`Imagem não encontrada para ${membro.nome}. Usando placeholder padrão.`);
    }
  };

  // Interação de Clique (Expandir/Recolher)
  const toggleBtn = card.querySelector(".toggle-btn");
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = card.classList.contains("expanded");
    
    if (isExpanded) {
      // Recolhe o card clicado
      card.classList.remove("expanded");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.setAttribute("aria-label", `Ver informações sobre ${membro.nome}`);
    } else {
      // Fecha todos os outros cards que estiverem abertos
      const otherExpandedCards = document.querySelectorAll(".member-card.expanded");
      otherExpandedCards.forEach(c => {
        c.classList.remove("expanded");
        const btn = c.querySelector(".toggle-btn");
        if (btn) {
          btn.setAttribute("aria-expanded", "false");
          const nameEl = c.querySelector(".member-name");
          const name = nameEl ? nameEl.textContent : "membro";
          btn.setAttribute("aria-label", `Ver informações sobre ${name}`);
        }
      });

      // Abre o card clicado
      card.classList.add("expanded");
      toggleBtn.setAttribute("aria-expanded", "true");
      toggleBtn.setAttribute("aria-label", `Fechar informações sobre ${membro.nome}`);
    }
  });

  return card;
}

/**
 * Renderiza os membros na grade correspondente filtrando pela categoria da página
 */
function renderizarEquipe() {
  const grid = document.querySelector(".members-grid");
  if (!grid) {
    console.warn("Elemento .members-grid não foi encontrado nesta página.");
    return;
  }

  const categoria = grid.getAttribute("data-categoria");
  if (!categoria) {
    console.error("Atributo data-categoria não definido na grade de membros.");
    return;
  }

  grid.innerHTML = "";

  // Filtra os dados com base na categoria definida na página
  const membrosFiltrados = equipeDados.filter(membro => membro.categoria === categoria);

  membrosFiltrados.forEach(membro => {
    const cardMembro = criarCardMembro(membro);
    grid.appendChild(cardMembro);
  });
}

// Inicializa a renderização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  renderizarEquipe();
  inicializarMenuMobile();
});

/**
 * Inicializa o menu hambúrguer para mobile e tablet
 */
function inicializarMenuMobile() {
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!hamburgerBtn || !mobileMenu) return;

  function abrirMenu() {
    hamburgerBtn.classList.add("open");
    mobileMenu.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function fecharMenu() {
    hamburgerBtn.classList.remove("open");
    mobileMenu.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  // Toggle ao clicar no hambúrguer
  hamburgerBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  // Fechar ao clicar em um link do menu mobile
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", fecharMenu);
  });

  // Fechar com a tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      fecharMenu();
      hamburgerBtn.focus();
    }
  });
}
