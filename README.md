# JavaScript Challenge — Portfólio Interativo

Projeto desenvolvido durante o processo de trainee da **PotiCode** (2026), com foco na manipulação dinâmica do DOM, modularização em JavaScript e estilização responsiva.

## Demonstração

https://github.com/arturmedeiros092/javascript-challenge/assets/demo/demo.mp4

> *(Dica: se preferir exibir um GIF ou imagem estática diretamente no GitHub, você também pode referenciar `./assets/project1.png` aqui.)*

## Funcionalidades

- **Alternância de Tema (Dark / Light Mode):** troca dinâmica entre modo claro e escuro com atualização visual de ícones e logotipo (`darkMode.js`).
- **Renderização Dinâmica de Projetos:** geração automática dos cards de projetos na interface a partir de uma estrutura de dados separada (`projectsData.js` e `projects.js`).
- **Menu Lateral Interativo (Sidebar):** controle de abertura, fechamento e navegação responsiva (`sidebar.js`).
- **Layout Responsivo:** adaptação da interface para diferentes tamanhos de tela utilizando CSS moderno.

## Tecnologias Utilizadas

- **HTML5** — Estrutura semântica da aplicação
- **CSS3** — Estilização, temas e responsividade
- **JavaScript (ES6+)** — Lógica de interface, eventos e renderização dinâmica
- **Vite** — Ambiente de desenvolvimento e empacotamento (*bundler*)

## Estrutura do Projeto

```text
javascript-challenge/
├── assets/
│   ├── demo/
│   │   └── demo.mp4
│   ├── darkThemeLogo.png
│   ├── perfil.png
│   ├── project1.png
│   ├── project2.png
│   └── project3.png
├── css/
│   └── style.css
├── js/
│   ├── darkMode.js
│   ├── projects.js
│   ├── projectsData.js
│   └── sidebar.js
├── index.html
├── package.json
└── vite.config.js
