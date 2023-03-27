export default {
    title: 'Profissional 4.0',
    description: 'Guia de como se transformar no profissional do futuro',
    themeConfig: {
        logo: '/bg.png',
        outlineTitle: 'Nesta Página',
        darkModeSwitchLabel: 'Modo Escuro',
        returnToTopLabel: 'Voltar ao topo',
        search: true,
        nav: [
          { text: 'YouTube', link: 'https://www.youtube.com/channel/UCdEWZiXADV4ee27XDEhPK9Q' },
          { text: 'Github', link: 'https://github.com/' }
        ],
        sidebar: [
            {
                text: 'Página Inicial',
                link: '/complete'
            },
          {
            text: 'Filosofia Lean',
            collapsed: true,
            items: [
                {
                    text: 'Produção',
                    collapsed: true,
                    items: [
                        { text: 'Fundamentos', link: '/introduction' },
                        { text: 'Ferramentas', link: '/getting-started' }
                    ] 
                },
                { 
                    text: 'Qualidade',
                    collapsed: true,
                    items: [
                        { text: 'Fundamentos', link: '/introduction' },
                        { text: '07 Ferramentas da Qualidade',
                          collapsed: true,
                          items: [
                            { text: 'Pareto', link: '/lean/quality/seven-tools/pareto' },
                            { text: 'Espinha de Peixe', link: '/lean/quality/seven-tools/ishikawa' }
                          ] 
                        }
                    ]
                },
                { text: 'Logística', link: '/introduction' },
                { text: 'Planejamento', link: '/getting-started' },
                { text: 'Manutenção', link: '/introduction' },
                { text: 'Custos', link: '/getting-started' },
                { text: 'RH', link: '/getting-started' }
            ]
          },
          {
            text: 'Ciência de Dados',
            collapsed: true,
            items: [
              { text: 'Eng de Dados', link: '/introduction' },
              { text: 'Análise de Dados', link: '/getting-started' },
              { text: 'Ciência de Dados', link: '/introduction' },
              { text: 'Governança de Dados', link: '/getting-started' },
              { text: 'Internet das Coisas (IoT)', link: '/introduction' }
            ]
          },
          {
            text: 'Inovação',
            collapsed: true,
            items: [
              { text: 'Inovação', link: '/introduction' },
              { text: 'Design Thinking', link: '/getting-started' },
              { text: 'Métodos Ágeis', link: '/introduction' },
              { text: 'Tecnologias Disruptivas', link: '/getting-started' },
              { text: 'Inovação Aberta', link: '/introduction' },
              { text: 'StartUp Enxuta', link: '/introduction' }
            ]
          }
        ],
        footer: {
            message: 'Idealizado por: Matheus Sandrini Rossi'
        },
        docFooter: {
          prev: 'Pagina Anterior',
          next: 'Proxima Página'
        }
    }
}