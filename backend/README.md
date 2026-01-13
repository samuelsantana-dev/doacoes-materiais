# DonateFlow – Doações Materiais

O **DonateFlow** é uma plataforma voltada à gestão completa do ciclo de vida de doações materiais — desde a oferta do item, passando pelo matching inteligente com organizações, até a logística de entrega ou coleta.

O projeto possui foco social e voluntário, mas utiliza tecnologias e arquitetura de nível profissional, permitindo escalabilidade, manutenção e colaboração aberta.

---

## 🎯 Objetivo do Projeto

Facilitar e otimizar o processo de doações materiais, conectando doadores a organizações parceiras (ONGs, abrigos e instituições sociais), garantindo que os itens doados atendam necessidades reais e reduzindo desperdícios.

---

## 🧩 Funcionalidades

### 📦 Oferta de Doações
- Cadastro detalhado de itens (roupas, móveis, eletrodomésticos, etc.)
- Upload de fotos
- Informações sobre o estado de conservação
- Localização do doador

### 🏢 Demanda das Organizações
- Criação de listas de desejos por ONGs e instituições
- Priorização de itens realmente necessários
- Controle de demandas ativas e atendidas

### 🤖 Matching Inteligente
- Sugestão automática das melhores organizações para receber a doação
- Baseado em:
  - Geolocalização
  - Compatibilidade entre item doado e lista de desejos

### 🚚 Logística
- Coordenação de coleta ou entrega
- Integração com mapas ou sistema de agendamento
- Acompanhamento do status da doação

---

## 🧠 Arquitetura do Projeto

Estrutura separada em **Frontend** e **Backend**, comunicando-se via API REST.

````
DonateFlow/
├── frontend/
├── backend/
└── README.md
````

## ⚙️ Stack Backend

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- (Opcional: MongoDB para dados não relacionais)

---

## 🧪 Boas Práticas

- Tipagem forte com TypeScript
- Validação de dados no frontend e backend
- Estrutura modular
- Separação clara de responsabilidades
- Preparado para testes automatizados
- Padronização de commits e branches

---

## 🤝 Contribuidores

A lista completa de contribuidores pode ser encontrada em  
[CONTRIBUTORS.md](./CONTRIBUTORS.md).

---

## 📌 Status do Projeto

🚧 Em desenvolvimento ativo

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
