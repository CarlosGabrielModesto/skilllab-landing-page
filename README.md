# 🎓 SkillLab — Landing Page

Landing page de uma plataforma fictícia de cursos preparatórios para certificações Microsoft Fundamentals (linha 900).

> **Projeto de portfólio** desenvolvido para demonstrar habilidades em HTML, CSS e JavaScript com foco em design responsivo, dark/light mode e UX de conversão.

<br>

## 🔗 Demo

Acesse a versão ao vivo: **[carlosgabrielmodesto.github.io/skilllab-landing-page](https://carlosgabrielmodesto.github.io/skilllab-landing-page)**

<br>

## 📋 Sobre o Projeto

A **SkillLab** simula uma plataforma de venda de cursos preparatórios para os exames Microsoft Fundamentals:

- **AZ-900** — Azure Fundamentals
- **AI-900** — Azure AI Fundamentals
- **DP-900** — Azure Data Fundamentals
- **PL-900** — Power Platform Fundamentals

O projeto foi construído com foco em **funil de conversão**: hero persuasivo, prova social com depoimentos, cards de curso com identidade visual por exame, tabela de preços com destaque no plano principal e FAQ para quebra de objeções.

<br>

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica |
| **CSS3** | Layout, animações, responsividade, dark/light mode |
| **JavaScript** | Interatividade (tema, FAQ, scroll reveal, navbar) |
| **Google Fonts** | Tipografia (Bricolage Grotesque, Figtree, Fira Code) |

<br>

## 🎨 Seções

- **Hero** — Headline, CTAs e selos de confiança
- **Cursos** — 4 cards com cor única por certificação (AZ, AI, DP, PL)
- **Benefícios** — 6 diferenciais do preparatório
- **Depoimentos** — Prova social com avaliações de alunos
- **Preços** — 3 planos (Individual, Pacote 900, Mentoria)
- **FAQ** — Accordion interativo com dúvidas sobre os exames
- **CTA final** — Chamada para conversão
- **Footer** — Links e redes sociais

<br>

## ⚡ Features Técnicas

- **Dark/Light Mode** — Troca de tema com detecção automática da preferência do sistema e persistência via `localStorage`
- **Responsivo** — Layout adaptável para mobile, tablet e desktop
- **Scroll Reveal** — Animações de entrada com `IntersectionObserver`
- **Navbar com blur** — `backdrop-filter` com transição ao scroll
- **FAQ interativo** — Accordion com JavaScript puro
- **Zero dependências** — Projeto 100% vanilla (HTML + CSS + JS)
- **Código organizado** — Separação de responsabilidades (HTML / CSS / JS)

<br>

## 🚀 Como executar

```bash
# Clone o repositório
git clone https://github.com/CarlosGabrielModesto/skilllab-landing-page.git

# Acesse a pasta
cd skilllab-landing-page

# Abra no navegador
open index.html
```

Não é necessário instalar nada — basta abrir o `index.html`.

<br>

## 📁 Estrutura

```
skilllab-landing-page/
├── css/
│   └── styles.css     # Estilos com variáveis para dark/light mode
├── js/
│   └── main.js        # Tema, FAQ, scroll reveal e menu mobile
├── index.html         # Estrutura HTML semântica
├── README.md
└── LICENSE
```

<br>

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

<br>

## 👤 Autor

**Carlos Gabriel dos Santos Modesto**

- Mestrando em Engenharia Agrícola — UNESP/FCA Botucatu
- Graduado em Engenharia de Computação — Faculdade Galileu
- Certificações Microsoft: Azure AI Fundamentals (AI-900) e Azure Data Fundamentals (DP-900)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlosgabrielmodesto)
[![Lattes](https://img.shields.io/badge/Lattes-003366?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHRleHQgeD0iMCIgeT0iMTIiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IndoaXRlIj5MPC90ZXh0Pjwvc3ZnPg==&logoColor=white)](http://lattes.cnpq.br/9699036690474846)
[![ORCID](https://img.shields.io/badge/ORCID-A6CE39?style=flat&logo=orcid&logoColor=white)](https://orcid.org/0009-0003-3039-4397)
