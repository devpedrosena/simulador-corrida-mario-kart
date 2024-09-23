# 🏁 Desafio Mario Kart - DIO 🏎️

Este projeto foi criado como parte de um desafio da plataforma [DIO](https://www.dio.me), onde dois personagens clássicos da Nintendo, **Mario** e **Luigi**, disputam uma corrida simulada no console. O desafio consiste em diferentes rodadas com testes de habilidades específicas como velocidade, manobrabilidade e poder, dependendo do tipo de bloco sorteado (reta, curva ou confronto).

## 📋 Descrição do Projeto

O objetivo principal do projeto é simular uma corrida entre Mario e Luigi com base em sorteios de dados para determinar os vencedores de cada rodada. A corrida ocorre em cinco rodadas, e o personagem com mais pontos ao final é o vencedor.

### 🏁 Regras do Jogo

- **Blocos Sorteados:**
  - **RETA**: A habilidade de **velocidade** é testada.
  - **CURVA**: A habilidade de **manobrabilidade** é testada.
  - **CONFRONTO**: O poder de cada personagem é testado em uma batalha direta.

- Cada personagem rola um dado para determinar a pontuação na habilidade correspondente ao bloco sorteado.
- Em caso de confronto, o vencedor pode fazer o oponente perder um ponto.
- O personagem com a maior pontuação ao final das 5 rodadas é o vencedor, mas a corrida também pode terminar em empate.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (Versão 14 ou superior)
- **Git** (para clonar o repositório)

### Passo a Passo

1. Clone o repositório:

```
git clone https://github.com/devpedrosena/desafio-mario-kart.git
```

2 - Navegue até o diretório do projeto:
```
cd desafio-mario-kart
```

3 - Execute o projeto:
```
npm run dev
```

4 - Assista a disputa entre Mario e Luigi diretamente no seu console!

```
📦 Estrutura do Projeto

├── src
│   └── index.js    # Código principal da corrida
├── assets
│   └── example.png # Exemplo da execução
├── package.json    # Configurações do projeto
└── README.md       # Documentação do projeto
```

 <img src="https://raw.githubusercontent.com/devpedrosena/simulador-corrida-mario-kart/refs/heads/main/assets/example.png" alt="Exemplo execução">
Aqui está uma amostra do resultado da corrida entre Mario e Luigi:


📄 License
Este projeto está sob a licença ISC. Para mais informações, consulte o arquivo LICENSE.

🛠️ Tecnologias Utilizadas
Node.js
JavaScript

🧑‍💻 Autor
Pedro Sena - devpedrosena

🎮 Inspirado por
Este projeto foi inspirado pela franquia Mario Kart, trazendo um pouco da diversão dos jogos de corrida para o console.

Nota: Este é um desafio de projeto proposto pela DIO para fins de aprendizado.

