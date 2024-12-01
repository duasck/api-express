const usuarioRepository = require('./repositories/usuarioRepository');
const vagaRepository = require('./repositories/vagaRepository');

async function populaUsuarios() {
  // Criar 5 usuários
  const usuarios = [
    { nome: 'João Silva', email: 'joao@exemplo.com', senha: 'senha123' },
    { nome: 'Maria Oliveira', email: 'maria@exemplo.com', senha: 'senha123' },
    { nome: 'Carlos Souza', email: 'carlos@exemplo.com', senha: 'senha123' },
    { nome: 'Fernanda Costa', email: 'fernanda@exemplo.com', senha: 'senha123' },
    { nome: 'Lucas Pereira', email: 'lucas@exemplo.com', senha: 'senha123' },
  ];

  // Cria os usuários no banco de dados
  for (let usuario of usuarios) {
    try {
      const novoUsuario = await usuarioRepository.create(usuario);
      console.log(`Usuário criado: ${novoUsuario.nome}`);
    } catch (error) {
      console.error(`Erro ao criar usuário ${usuario.nome}: ${error.message}`);
    }
  }
}

async function populaVagas() {
  try {
    // Exemplo de vagas para popular o banco
    const vagas = [
      {
        titulo: 'Desenvolvedor Full Stack',
        descricao: 'Vaga para desenvolvedor full stack com experiência em React e Node.js.',
        dataCadastro: new Date(),
        telefone: '11987654321',
        status: 'aberta',
        empresa: 'TechCompany',
      },
      {
        titulo: 'Analista de Marketing Digital',
        descricao: 'Vaga para analista de marketing com experiência em SEO e campanhas de Google Ads.',
        dataCadastro: new Date(),
        telefone: '11987654322',
        status: 'aberta',
        empresa: 'MarketingPro',
      },
      {
        titulo: 'Designer UX/UI',
        descricao: 'Vaga para designer com experiência em design de interfaces e experiência do usuário.',
        dataCadastro: new Date(),
        telefone: '11987654323',
        status: 'aberta',
        empresa: 'DesignStudio',
      },
      {
        titulo: 'Gerente de Projetos',
        descricao: 'Vaga para gerente de projetos com experiência em metodologias ágeis.',
        dataCadastro: new Date(),
        telefone: '11987654324',
        status: 'aberta',
        empresa: 'ProjectManager Ltd.',
      },
      {
        titulo: 'Assistente Administrativo',
        descricao: 'Vaga para assistente administrativo com foco em organização e atendimento ao cliente.',
        dataCadastro: new Date(),
        telefone: '11987654325',
        status: 'aberta',
        empresa: 'Admin Services',
      },
    ];

    // Populando o banco com as vagas
    for (let vaga of vagas) {
      await vagaRepository.create(vaga); // Usa o repositório para criar cada vaga
    }

    console.log('Vagas populadas com sucesso!');
  } catch (err) {
    console.error('Erro ao popular as vagas:', err);
  }
}

populaUsuarios();
populaVagas();