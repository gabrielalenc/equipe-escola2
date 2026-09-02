/**
 * DATA & INTERACTIVE LOGIC FOR "NOSSA EQUIPE" SECTION
 * 
 * Este script armazena os dados da equipe em um array estruturado
 * e renderiza dinamicamente os cards com base na categoria da página e turno selecionado.
 */

// Banco de dados dos membros da equipe escolar (32 Professores divididos em 2 Turnos)
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
    objectPosition: "center 15%"
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
  // 2. PROFESSORES (32 Professores / 16 Turno 1 & 16 Turno 2)
  // ==========================================

  // --- TURNO 1 (MANHÃ) --- 16 Professores
  {
    id: "prof-portugues",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Patrícia Mendes",
    cargo: "Língua Portuguesa",
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
    turno: 1,
    nome: "Prof. Thiago Alencar",
    cargo: "Matemática e Física",
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
    turno: 1,
    nome: "Prof. Roberto de Oliveira",
    cargo: "História Geral",
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
    turno: 1,
    nome: "Profª. Camila Ramos",
    cargo: "Biologia e Ecologia",
    imagem: "images/equipe/professores/camila-ramos.jpg",
    resumo: "Pesquisadora de ecologia urbana e orientadora de projetos de sustentabilidade na escola.",
    formacao: "Graduação em Ciências Biológicas (Federal), Especialização em Educação Ambiental.",
    atuacao: "Ensino Fundamental II, Ensino Médio e Gestão do Laboratório de Ciências.",
    bio: "Camila idealizou a horta comunitária da escola e conduz aulas práticas de campo no laboratório, despertando a consciência ecológica nos alunos.",
    objectPosition: "center 18%"
  },
  {
    id: "prof-quimica",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Juliana Carvalho",
    cargo: "Química Geral",
    imagem: "images/equipe/professores/juliana-carvalho.jpg",
    resumo: "Especialista em química orgânica e experimentos laboratoriais interativos.",
    formacao: "Bacharelado e Licenciatura em Química (UFMG).",
    atuacao: "Ensino Médio e Laboratório de Ciências.",
    bio: "Juliana transforma conceitos abstratos de química em experiências práticas transformadoras no laboratório escolar.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-geografia",
    categoria: "professores",
    turno: 1,
    nome: "Prof. Fernando Castro",
    cargo: "Geografia e Cartografia",
    imagem: "images/equipe/professores/fernando-castro.jpg",
    resumo: "Especialista em geopolítica global, cartografia digital e estudos ambientais.",
    formacao: "Licenciatura em Geografia (USP), Mestre em Planejamento Territorial.",
    atuacao: "Ensino Fundamental II e Ensino Médio.",
    bio: "Fernando utiliza mapas interativos e dados geográficos em tempo real para ensinar geopolítica e preservação ambiental.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-ingles",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Beatriz Lima",
    cargo: "Língua Inglesa",
    imagem: "images/equipe/professores/beatriz-lima.jpg",
    resumo: "Focada em comunicação fluente, literatura internacional e imersão cultural.",
    formacao: "Licenciatura em Letras - Neolatinas e Inglês (PUC-SP).",
    atuacao: "Ensino Fundamental II e Ensino Médio.",
    bio: "Beatriz orienta simulações internacionais e debates em língua estrangeira para capacitar os alunos globalmente.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-ed-fisica",
    categoria: "professores",
    turno: 1,
    nome: "Prof. Lucas Martins",
    cargo: "Educação Física",
    imagem: "images/equipe/professores/lucas-martins.jpg",
    resumo: "Promotor da saúde, trabalho em equipe e circuitos esportivos escolares.",
    formacao: "Licenciatura em Educação Física (UNESP), Pós-graduação em Treinamento Desportivo.",
    atuacao: "Ensino Fundamental II, Médio e Treinos de Seleção Escolar.",
    bio: "Lucas incentiva a inclusão no esporte e coordena os Jogos Interclasses promovendo respeito e disciplina esportiva.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-artes",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Sofia Ferreira",
    cargo: "Artes Visuais",
    imagem: "images/equipe/professores/sofia-ferreira.jpg",
    resumo: "Inspiradora de artes visuais, teatro escolar e manifestações culturais regionais.",
    formacao: "Licenciatura em Artes Visuais (UFRJ).",
    atuacao: "Ensino Fundamental II e Ensino Médio.",
    bio: "Sofia organiza a Mostra Anual de Artes e conduz oficinas de pintura, escultura e expressão artística contemporânea.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-filosofia",
    categoria: "professores",
    turno: 1,
    nome: "Prof. Gabriel Souza",
    cargo: "Filosofia e Ética",
    imagem: "images/equipe/professores/gabriel-souza.jpg",
    resumo: "Entusiasta da ética, teoria crítica e debates de ideias contemporâneas.",
    formacao: "Licenciatura e Mestrado em Filosofia (UFRGS).",
    atuacao: "Ensino Médio e Rodas de Filosofia Viva.",
    bio: "Gabriel estimula os alunos a questionarem preconceitos e a construírem argumentos éticos bem fundamentados.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-literatura",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Renata Almeida",
    cargo: "Literatura Brasileira",
    imagem: "images/equipe/professores/renata-almeida.jpg",
    resumo: "Dedicada aos clássicos literários e análises críticas das obras dos vestibulares.",
    formacao: "Doutorado em Literatura Brasileira (UNICAMP).",
    atuacao: "Ensino Médio e Clube de Leitura.",
    bio: "Renata aproxima os jovens das obras de Machado de Assis e Clarice Lispector por meio de leituras dramatizadas.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-redacao",
    categoria: "professores",
    turno: 1,
    nome: "Prof. Marcelo Barbosa",
    cargo: "Redação e Gramática",
    imagem: "images/equipe/professores/marcelo-barbosa.jpg",
    resumo: "Especialista em estrutura dissertativa-argumentativa e nota máxima em vestibulares.",
    formacao: "Licenciatura em Letras (UFRJ).",
    atuacao: "Ensino Médio e Laboratório de Redação.",
    bio: "Marcelo realiza correções individualizadas e treina os alunos para dominar a norma culta e o repertório sócio-cultural.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-fisica",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Vanessa Rocha",
    cargo: "Física Avançada",
    imagem: "images/equipe/professores/vanessa-rocha.jpg",
    resumo: "Especialista em mecânica, termodinâmica e física moderna aplicada.",
    formacao: "Bacharelado e Licenciatura em Física (USP).",
    atuacao: "Ensino Médio e Olimpíadas de Física.",
    bio: "Vanessa treina os estudantes para a Olimpíada Brasileira de Física com experimentos práticos de dinâmica e óptica.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-algebra",
    categoria: "professores",
    turno: 1,
    nome: "Prof. André Luiz Santos",
    cargo: "Matemática Financeira",
    imagem: "images/equipe/professores/andre-santos.jpg",
    resumo: "Desenvolvedor de módulos de educação financeira consciente para jovens.",
    formacao: "Licenciatura em Matemática (UFPR), Pós-graduação em Educação Financeira.",
    atuacao: "Ensino Fundamental II e Ensino Médio.",
    bio: "André desmistifica os números ensinando matemática aplicada ao planejamento pessoal e economia cotidiana.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-genetica",
    categoria: "professores",
    turno: 1,
    nome: "Profª. Mariana Ribeiro",
    cargo: "Biologia Celular",
    imagem: "images/equipe/professores/mariana-ribeiro.jpg",
    resumo: "Pesquisadora de biotecnologia e fundamentos de genética moderna.",
    formacao: "Mestrado em Genética Humana (UFMG).",
    atuacao: "Ensino Médio.",
    bio: "Mariana traz para a sala de aula os avanços mais recentes em biotecnologia e engenharia genética com rigor científico.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-hist-brasil",
    categoria: "professores",
    turno: 1,
    nome: "Prof. Eduardo Nunes",
    cargo: "História do Brasil",
    imagem: "images/equipe/professores/eduardo-nunes.jpg",
    resumo: "Especialista em formação social brasileira e patrimônio histórico.",
    formacao: "Licenciatura em História (UNESP).",
    atuacao: "Ensino Fundamental II e Médio.",
    bio: "Eduardo guia visitas pedagógicas a museus e centros históricos, conectando a teoria à memória cultural do país.",
    objectPosition: "center 15%"
  },

  // --- TURNO 2 (TARDE) --- 16 Professores
  {
    id: "prof-espanhol",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Carla Dias",
    cargo: "Língua Espanhola",
    imagem: "images/equipe/professores/carla-dias.jpg",
    resumo: "Focada no estudo da diversidade cultural dos países de língua espanhola.",
    formacao: "Licenciatura em Letras - Espanhol (UFRJ).",
    atuacao: "Ensino Fundamental II e Ensino Médio.",
    bio: "Carla organiza a Semana Cultural Hispânica com música, literatura e gastronomia típica dos países ibero-americanos.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-geopolitica",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Rodrigo Fonseca",
    cargo: "Geopolítica e Atualidades",
    imagem: "images/equipe/professores/rodrigo-fonseca.jpg",
    resumo: "Analista de cenários internacionais, sustentabilidade global e economia mundial.",
    formacao: "Mestrado em Relações Internacionais (UnB).",
    atuacao: "Ensino Médio e Simulados de Geopolítica.",
    bio: "Rodrigo prepara os formandos para interpretarem as complexas dinâmicas socioeconômicas e geopolíticas globais.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-ciencias",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Amanda Becker",
    cargo: "Ciências da Natureza",
    imagem: "images/equipe/professores/amanda-becker.jpg",
    resumo: "Entusiasta da investigação científica no Ensino Fundamental II.",
    formacao: "Licenciatura em Ciências Biológicas (UFSC).",
    atuacao: "Ensino Fundamental II.",
    bio: "Amanda desperta a curiosidade dos alunos por meio da Feira de Ciências e projetos de experimentação investigativa.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-robotica",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Gustavo Vieira",
    cargo: "Robótica e Tecnologia",
    imagem: "images/equipe/professores/gustavo-vieira.jpg",
    resumo: "Especialista em programação Arduino, automação e pensamento computacional.",
    formacao: "Engenharia de Mechatrônica (USP).",
    atuacao: "Ensino Fundamental II e Médio.",
    bio: "Gustavo ensina lógica de programação e montagem de robôs funcionais que competem em torneios nacionais.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-musica",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Letícia Machado",
    cargo: "Música e Coral",
    imagem: "images/equipe/professores/leticia-machado.jpg",
    resumo: "Coordenadora do Coral Escolar e iniciação em teoria musical.",
    formacao: "Licenciatura em Música (UFRJ).",
    atuacao: "Ensino Fundamental II e Coral da Escola.",
    bio: "Letícia desenvolve a percepção auditiva, sensibilidade artística e integração dos alunos por meio da música.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-quim-org",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Paulo Henrique Cruz",
    cargo: "Química Orgânica",
    imagem: "images/equipe/professores/paulo-cruz.jpg",
    resumo: "Focado em reações químicas, bioquímica e aplicações farmacêuticas.",
    formacao: "Doutorado em Química (UNICAMP).",
    atuacao: "Ensino Médio.",
    bio: "Paulo conecta a química aos medicamentos, alimentos e processos industriais de forma cativante.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-lit-univ",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Daniela Pires",
    cargo: "Literatura Universal",
    imagem: "images/equipe/professores/daniela-pires.jpg",
    resumo: "Estudiosa dos grandes clássicos mundiais da antiguidade ao século XXI.",
    formacao: "Licenciatura em Letras (USP).",
    atuacao: "Ensino Médio.",
    bio: "Daniela promove debates envolventes comparando clássicos da literatura mundial com manifestações culturais atuais.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-esportes",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Vinícius Teixeira",
    cargo: "Esportes e Atletismo",
    imagem: "images/equipe/professores/vinicius-teixeira.jpg",
    resumo: "Treinador de modalidades coletivas (Futsal, Basquete e Vôlei).",
    formacao: "Licenciatura em Educação Física (UFRJ).",
    atuacao: "Ensino Fundamental II e Médio.",
    bio: "Vinícius desenvolve o espírito esportivo e a coordenação motora nos treinos preparatórios para campeonatos regionais.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-sociologia",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Helena Duarte",
    cargo: "Sociologia e Cidadania",
    imagem: "images/equipe/professores/helena-duarte.jpg",
    resumo: "Pesquisadora de movimentos sociais, direitos humanos e cidadania.",
    formacao: "Mestrado em Ciências Sociais (PUC-SP).",
    atuacao: "Ensino Médio.",
    bio: "Helena instiga os estudantes a compreenderem o funcionamento da sociedade e a exercerem a cidadania ativa.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-geometria",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Ricardo Monteiro",
    cargo: "Geometria Espacial",
    imagem: "images/equipe/professores/ricardo-monteiro.jpg",
    resumo: "Especialista em geometria espacial, plana e resolução analítica de problemas.",
    formacao: "Licenciatura em Matemática (UFMG).",
    atuacao: "Ensino Fundamental II e Médio.",
    bio: "Ricardo ensina geometria utilizando software 3D para visualização espacial intuitiva das formas matemáticas.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-ing-inst",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Isabela Guimarães",
    cargo: "Inglês Instrumental",
    imagem: "images/equipe/professores/isabela-guimaraes.jpg",
    resumo: "Focada na leitura técnica, interpretação de textos e vocabulário acadêmico.",
    formacao: "Licenciatura em Letras - Inglês (UNESP).",
    atuacao: "Ensino Médio e Preparatório para Exames.",
    bio: "Isabela capacita os alunos no domínio de técnicas de leitura rápida (skimming & scanning) essenciais para exames nacionais.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-interdisciplinar",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Bruno Cardoso",
    cargo: "Projetos STEM",
    imagem: "images/equipe/professores/bruno-cardoso.jpg",
    resumo: "Coordenador da feira STEM e projetos de inovação social.",
    formacao: "Mestrado em Educação e Inovação (UFSCar).",
    atuacao: "Ensino Fundamental II e Médio.",
    bio: "Bruno articula diferentes disciplinas para orientar os alunos na criação de soluções para problemas reais da comunidade.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-ecologia",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Larissa Moreira",
    cargo: "Biologia Ambiental",
    imagem: "images/equipe/professores/larissa-moreira.jpg",
    resumo: "Especialista em conservação biológica, biomas brasileiros e biodiversidade.",
    formacao: "Mestrado em Ecologia (UnB).",
    atuacao: "Ensino Médio.",
    bio: "Larissa promove expedições de estudo do meio e projetos voltados à reciclagem e compostagem no campus.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-astronomia",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Diego Silveira",
    cargo: "Física e Astronomia",
    imagem: "images/equipe/professores/diego-silveira.jpg",
    resumo: "Fundador do Clube de Astronomia e Observação de Astros.",
    formacao: "Mestrado em Astrofísica (USP).",
    atuacao: "Ensino Médio e Clube de Astronomia.",
    bio: "Diego organiza noites de observação com telescópios escolares e aulas inspiradoras sobre a mecânica celeste.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-geo-humana",
    categoria: "professores",
    turno: 2,
    nome: "Profª. Tatiana Neves",
    cargo: "Geografia Humana",
    imagem: "images/equipe/professores/tatiana-neves.jpg",
    resumo: "Estudiosa do desenvolvimento urbano sustentável e migrações populacionais.",
    formacao: "Licenciatura em Geografia (UFRJ).",
    atuacao: "Ensino Fundamental II e Médio.",
    bio: "Tatiana discute urbanização consciente e preservação dos recursos naturais com dinamismo e dados atuais.",
    objectPosition: "center 15%"
  },
  {
    id: "prof-etica",
    categoria: "professores",
    turno: 2,
    nome: "Prof. Caio Augusto Mendes",
    cargo: "Filosofia e Sociedade",
    imagem: "images/equipe/professores/caio-mendes.jpg",
    resumo: "Orientador de debates sobre inteligência artificial, tecnologia e sociedade.",
    formacao: "Licenciatura em Filosofia (USP).",
    atuacao: "Ensino Médio.",
    bio: "Caio faz a ponte entre clássicos do pensamento humano e as novas questões éticas trazidas pelas tecnologias digitais.",
    objectPosition: "center 15%"
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

// Estado atual do turno selecionado (Padrão: Turno 1)
let turnoAtual = 1;

/**
 * Garante que a estrutura do Modal Popover exista no DOM
 */
function obterOuCriarModal() {
  let backdrop = document.getElementById("card-modal-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.id = "card-modal-backdrop";
    backdrop.className = "card-modal-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    
    backdrop.innerHTML = `
      <div class="card-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-member-name">
        <button class="card-modal-close" aria-label="Fechar detalhes">&times;</button>
        <div class="card-modal-body">
          <div class="card-modal-media">
            <img id="modal-member-photo" src="" alt="" class="modal-photo">
            <span id="modal-member-badge" class="modal-badge-turno"></span>
          </div>
          <div class="card-modal-info">
            <h3 id="modal-member-name" class="modal-name"></h3>
            <div id="modal-member-role" class="modal-role"></div>
            <div class="modal-details-grid">
              <div class="modal-detail-item">
                <span class="modal-label"><i class="fa-solid fa-graduation-cap"></i> Formação Acadêmica</span>
                <p id="modal-member-formacao" class="modal-value"></p>
              </div>
              <div class="modal-detail-item">
                <span class="modal-label"><i class="fa-solid fa-chalkboard-user"></i> Área de Atuação</span>
                <p id="modal-member-atuacao" class="modal-value"></p>
              </div>
              <div class="modal-detail-item">
                <span class="modal-label"><i class="fa-solid fa-user-pen"></i> Biografia</span>
                <div id="modal-member-bio" class="modal-bio"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(backdrop);

    const closeBtn = backdrop.querySelector(".card-modal-close");
    closeBtn.addEventListener("click", fecharModal);

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        fecharModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop.classList.contains("active")) {
        fecharModal();
      }
    });
  }
  return backdrop;
}

let activeCardButton = null;

function abrirModal(membro, btnElement) {
  const backdrop = obterOuCriarModal();
  
  const photoEl = backdrop.querySelector("#modal-member-photo");
  const nameEl = backdrop.querySelector("#modal-member-name");
  const roleEl = backdrop.querySelector("#modal-member-role");
  const badgeEl = backdrop.querySelector("#modal-member-badge");
  const formacaoEl = backdrop.querySelector("#modal-member-formacao");
  const atuacaoEl = backdrop.querySelector("#modal-member-atuacao");
  const bioEl = backdrop.querySelector("#modal-member-bio");

  const caminhoImg = membro.imagem && membro.imagem.trim() !== "" ? membro.imagem : FALLBACK_PLACEHOLDER;
  photoEl.src = caminhoImg;
  photoEl.alt = `Foto de ${membro.nome}`;
  photoEl.style.objectPosition = membro.objectPosition || "center 15%";
  photoEl.onerror = function() {
    this.src = FALLBACK_PLACEHOLDER;
  };

  nameEl.textContent = membro.nome;
  const iconClass = getDisciplinaIcon(membro.cargo, membro.categoria);
  roleEl.innerHTML = `<i class="${iconClass}"></i> ${membro.cargo}`;
  
  if (membro.categoria === "professores") {
    badgeEl.style.display = "inline-flex";
    if (membro.turno === 1) {
      badgeEl.className = "modal-badge-turno turno-1";
      badgeEl.innerHTML = `<i class="fa-solid fa-sun"></i> Turno 1 (Manhã)`;
    } else {
      badgeEl.className = "modal-badge-turno turno-2";
      badgeEl.innerHTML = `<i class="fa-solid fa-moon"></i> Turno 2 (Tarde)`;
    }
  } else {
    badgeEl.style.display = "none";
  }

  formacaoEl.textContent = membro.formacao || "Não informada";
  atuacaoEl.textContent = membro.atuacao || "Não informada";
  bioEl.textContent = membro.bio || "Sem biografia disponível.";

  if (activeCardButton) {
    activeCardButton.classList.remove("rotated");
    activeCardButton.setAttribute("aria-expanded", "false");
  }
  if (btnElement) {
    activeCardButton = btnElement;
    activeCardButton.classList.add("rotated");
    activeCardButton.setAttribute("aria-expanded", "true");
  }

  backdrop.classList.add("active");
  backdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharModal() {
  const backdrop = document.getElementById("card-modal-backdrop");
  if (!backdrop) return;

  backdrop.classList.remove("active");
  backdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (activeCardButton) {
    activeCardButton.classList.remove("rotated");
    activeCardButton.setAttribute("aria-expanded", "false");
    activeCardButton = null;
  }
}

/**
 * Retorna a classe do ícone de marca d'água de fundo conforme o cargo ou função
 */
function getWatermarkIcon(membro) {
  const cargo = (membro.cargo || "").toLowerCase();
  const cat = (membro.categoria || "").toLowerCase();

  if (cargo.includes("diretor geral")) return "fa-solid fa-school-flag";
  if (cargo.includes("vice")) return "fa-solid fa-sitemap";
  if (cargo.includes("cgpg") || cargo.includes("coordenador")) return "fa-solid fa-diagram-project";
  
  if (cat === "gestao") return "fa-solid fa-award";
  if (cat === "secretaria") return "fa-solid fa-file-signature";
  if (cat === "auxiliares") return "fa-solid fa-shield-halved";
  if (cat === "desenvolvedores") return "fa-solid fa-code";

  return getDisciplinaIcon(membro.cargo, membro.categoria);
}

/**
 * Retorna a classe do ícone Font Awesome ideal para cada disciplina ou cargo de professor
 */
function getDisciplinaIcon(cargo, categoria) {
  if (!cargo) return "fa-solid fa-graduation-cap";
  const text = cargo.toLowerCase();

  if (text.includes("matemática") || text.includes("matematica")) return "fa-solid fa-calculator";
  if (text.includes("português") || text.includes("portugues") || text.includes("literatura") || text.includes("redação")) return "fa-solid fa-book-open-reader";
  if (text.includes("história") || text.includes("historia")) return "fa-solid fa-landmark";
  if (text.includes("geografia") || text.includes("cartografia")) return "fa-solid fa-globe";
  if (text.includes("biologia") || text.includes("ecologia")) return "fa-solid fa-dna";
  if (text.includes("física") || text.includes("fisica")) return "fa-solid fa-atom";
  if (text.includes("química") || text.includes("quimica")) return "fa-solid fa-flask";
  if (text.includes("ciências") || text.includes("ciencias")) return "fa-solid fa-microscope";
  if (text.includes("educação física") || text.includes("ed. física") || text.includes("esporte")) return "fa-solid fa-person-running";
  if (text.includes("artes") || text.includes("arte") || text.includes("música")) return "fa-solid fa-palette";
  if (text.includes("inglês") || text.includes("ingles") || text.includes("espanhol") || text.includes("idioma")) return "fa-solid fa-language";
  if (text.includes("tecnologia") || text.includes("robótica") || text.includes("computação") || text.includes("programação") || text.includes("site") || text.includes("web")) return "fa-solid fa-laptop-code";
  if (text.includes("filosofia") || text.includes("sociologia")) return "fa-solid fa-brain";

  if (categoria === "gestao") return "fa-solid fa-user-tie";
  if (categoria === "secretaria") return "fa-solid fa-folder-open";
  if (categoria === "auxiliares") return "fa-solid fa-hands-holding-circle";

  return "fa-solid fa-graduation-cap";
}

/**
 * Cria a estrutura HTML de um card de membro de equipe
 * @param {Object} membro Dados do membro da equipe
 * @returns {HTMLElement} Elemento DOM do card
 */
function criarCardMembro(membro) {
  const card = document.createElement("div");
  card.className = `member-card card-cat-${membro.categoria}`;
  card.id = `card-${membro.id}`;

  // Atributos de animação do AOS se disponível
  card.setAttribute("data-aos", "fade-up");
  card.setAttribute("data-aos-duration", "500");

  const caminhoImagem = membro.imagem && membro.imagem.trim() !== "" ? membro.imagem : FALLBACK_PLACEHOLDER;
  const posFoto = membro.objectPosition || "center 15%";

  // Badge de Turno para Professores
  let badgeTurnoHTML = "";
  if (membro.categoria === "professores") {
    if (membro.turno === 1) {
      badgeTurnoHTML = `<span class="badge-turno turno-1"><i class="fa-solid fa-sun"></i> Turno 1</span>`;
    } else {
      badgeTurnoHTML = `<span class="badge-turno turno-2"><i class="fa-solid fa-moon"></i> Turno 2</span>`;
    }
  }

  const iconClass = getDisciplinaIcon(membro.cargo, membro.categoria);
  const watermarkClass = getWatermarkIcon(membro);

  card.innerHTML = `
    <div class="card-media-container">
      <img src="${caminhoImagem}" alt="Foto de ${membro.nome}" class="member-photo" style="object-position: ${posFoto};" loading="lazy">
      ${badgeTurnoHTML}
      <button class="toggle-btn" aria-label="Ver mais informações sobre ${membro.nome}" aria-expanded="false">
        <i class="fa-solid fa-plus btn-icon"></i>
      </button>
    </div>
    
    <div class="card-collapsed-panel">
      <div class="card-watermark-icon" aria-hidden="true"><i class="${watermarkClass}"></i></div>
      <h3 class="member-name">${membro.nome}</h3>
      <div class="member-role"><i class="${iconClass}"></i> ${membro.cargo}</div>
      <p class="member-summary">${membro.resumo}</p>
    </div>
  `;

  const imgElement = card.querySelector(".member-photo");
  imgElement.onerror = function() {
    if (this.src !== FALLBACK_PLACEHOLDER) {
      this.src = FALLBACK_PLACEHOLDER;
    }
  };

  const toggleBtn = card.querySelector(".toggle-btn");
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    abrirModal(membro, toggleBtn);
  });

  card.addEventListener("click", () => {
    abrirModal(membro, toggleBtn);
  });

  return card;
}

let termoPesquisa = "";

/**
 * Inicializa a funcionalidade de pesquisa visual de professores
 */
function inicializarPesquisa() {
  const searchInput = document.getElementById("search-professores");
  const clearBtn = document.getElementById("search-clear-btn");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    termoPesquisa = e.target.value.trim().toLowerCase();
    renderizarEquipe();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      termoPesquisa = "";
      renderizarEquipe();
      searchInput.focus();
    });
  }
}

/**
 * Gerencia o Light / Dark Mode e salva a preferência no localStorage
 */
function inicializarTema() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);

  function toggleTheme() {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const toggleBtns = document.querySelectorAll("#theme-toggle-btn, .theme-toggle-btn, #mob-theme-toggle-btn");
  toggleBtns.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });
}

/**
 * Renderiza os membros na grade correspondente filtrando pela categoria da página e pelo turno
 */
function renderizarEquipe(animar = false) {
  const grid = document.querySelector(".members-grid");
  if (!grid) return;

  const categoria = grid.getAttribute("data-categoria");
  if (!categoria) return;

  if (animar) {
    grid.classList.add("fade-out");
    setTimeout(() => {
      executarRenderizacao(grid, categoria);
      grid.classList.remove("fade-out");
      if (typeof AOS !== "undefined") {
        AOS.refresh();
      }
    }, 200);
  } else {
    executarRenderizacao(grid, categoria);
  }
}

function executarRenderizacao(grid, categoria) {
  grid.innerHTML = "";

  let membrosFiltrados = equipeDados.filter(membro => membro.categoria === categoria);

  // Se for a página de professores, filtra pelo turno selecionado e termo de busca
  if (categoria === "professores") {
    membrosFiltrados = membrosFiltrados.filter(membro => membro.turno === turnoAtual);
    if (termoPesquisa) {
      membrosFiltrados = membrosFiltrados.filter(membro =>
        membro.nome.toLowerCase().includes(termoPesquisa) ||
        membro.cargo.toLowerCase().includes(termoPesquisa) ||
        (membro.resumo && membro.resumo.toLowerCase().includes(termoPesquisa))
      );
    }
  }

  if (membrosFiltrados.length === 0) {
    grid.innerHTML = `
      <div class="empty-search-state" data-aos="fade-up">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h4>Nenhum professor encontrado</h4>
        <p>Tente buscar por outro nome ou matéria pedagógica.</p>
      </div>
    `;
    return;
  }

  membrosFiltrados.forEach(membro => {
    const cardMembro = criarCardMembro(membro);
    grid.appendChild(cardMembro);
  });
}

/**
 * Inicializa a navegação entre Turno 1 e Turno 2
 */
function inicializarNavegacaoTurnos() {
  const shiftBtns = document.querySelectorAll(".shift-btn");
  if (!shiftBtns.length) return;

  shiftBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const novoTurno = parseInt(btn.getAttribute("data-turno"), 10);
      if (novoTurno === turnoAtual) return;

      turnoAtual = novoTurno;

      shiftBtns.forEach(b => {
        const isActive = parseInt(b.getAttribute("data-turno"), 10) === turnoAtual;
        b.classList.toggle("active", isActive);
        b.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      renderizarEquipe(true);
    });
  });
}

// Inicializa a renderização quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  inicializarTema();
  inicializarPesquisa();
  renderizarEquipe();
  inicializarNavegacaoTurnos();
  inicializarMenuMobile();
  obterOuCriarModal();

  // Inicialização suave do AOS (Animate On Scroll) se presente
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic"
    });
  }
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

  hamburgerBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("open")) {
      fecharMenu();
    } else {
      abrirMenu();
    }
  });

  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", fecharMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      fecharMenu();
      hamburgerBtn.focus();
    }
  });
}
