# 🏙️ Guia de Serviços - Paranavaí-PR

Uma plataforma digital moderna para conectar a comunidade de Paranavaí aos melhores estabelecimentos, ONGs e serviços locais da cidade.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Problema Local](#-problema-local)
- [Funcionalidades](#-funcionalidades)
- [Impacto Esperado](#-impacto-esperado)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Contribuição](#-contribuição)

## 🎯 Sobre o Projeto

O **Guia de Serviços de Paranavaí** é uma aplicação web desenvolvida para facilitar a descoberta e conexão entre moradores e visitantes da cidade com os diversos estabelecimentos, organizações não governamentais (ONGs) e prestadores de serviços locais.

A plataforma oferece uma interface moderna, intuitiva e responsiva, permitindo que usuários encontrem rapidamente informações sobre telefones, endereços, horários de funcionamento e avaliações de estabelecimentos locais.

## 🏢 Problema Local

### Contexto de Paranavaí-PR

Paranavaí, importante município do noroeste do Paraná, enfrenta desafios comuns a muitas cidades de médio porte no Brasil:

#### **Fragmentação de Informações**
- Dados sobre estabelecimentos espalhados em múltiplas plataformas
- Dificuldade para moradores encontrarem serviços específicos
- Falta de centralização de informações sobre ONGs e projetos sociais

#### **Limitações Digitais dos Negócios Locais**
- Muitos estabelecimentos não possuem presença digital adequada
- Pequenos empreendedores com dificuldades para divulgar seus serviços
- Ausência de um canal oficial para recomendações comunitárias

#### **Desconexão Comunitária**
- Falta de visibilidade para organizações sociais locais
- Dificuldade para turistas e novos moradores conhecerem a cidade
- Ausência de uma plataforma que valorize o comércio e serviços locais

## ⚡ Funcionalidades

### 🔍 **Busca Inteligente**
- **Pesquisa por texto**: Nome, descrição ou endereço
- **Filtro por categoria**: Restaurantes, ONGs, Saúde, Educação, Comércio, Beleza, Automóveis, Serviços
- **Resultados em tempo real** durante a digitação

### 🏪 **Catálogo de Estabelecimentos**
- **Cards visuais informativos** com design moderno
- **Informações completas**: Nome, telefone, endereço, horários
- **Sistema de avaliações** baseado em recomendações da comunidade
- **Ícones categorizados** para fácil identificação visual

### 📱 **Interface Responsiva**
- **Design mobile-first** para acesso em qualquer dispositivo
- **Navegação intuitiva** adaptada para smartphones e tablets
- **Performance otimizada** para conexões lentas

### ➕ **Contribuição Comunitária**
- **Formulário de sugestões** para novos estabelecimentos
- **Validação automática** de dados inseridos
- **Sistema de recomendações** para avaliar qualidade dos serviços

### 🎨 **Experiência do Usuário**
- **Interface moderna** com gradientes e animações suaves
- **Feedback visual** através de toast notifications
- **Acessibilidade** seguindo padrões WCAG
- **Tema personalizado** com cores da identidade local

## 🚀 Impacto Esperado

### 👥 **Para a Comunidade**

#### **Facilitação do Acesso a Serviços**
- Redução de 70% no tempo para encontrar estabelecimentos locais
- Melhoria na descoberta de ONGs e projetos sociais
- Facilitar integração de novos moradores e turistas

#### **Fortalecimento da Economia Local**
- Aumento da visibilidade para pequenos empreendedores
- Estímulo ao consumo no comércio local
- Criação de uma rede de recomendações confiáveis

### 🏪 **Para Estabelecimentos**

#### **Presença Digital Gratuita**
- Vitrine digital para negócios sem website próprio
- Canal direto de comunicação com clientes
- Sistema de feedback para melhoria contínua

#### **Competitividade e Crescimento**
- Igualdade de oportunidades entre estabelecimentos grandes e pequenos
- Incentivo à qualidade através do sistema de recomendações
- Atração de novos clientes através da plataforma

### 🌍 **Para a Cidade**

#### **Desenvolvimento Digital**
- Modernização da forma como os cidadãos interagem com serviços locais
- Atração de turistas através de maior visibilidade online
- Posicionamento de Paranavaí como cidade digitalmente conectada

#### **Impacto Social Mensurável**
- **Meta 1**: Cadastrar 200+ estabelecimentos nos primeiros 6 meses
- **Meta 2**: Atingir 1000+ recomendações da comunidade no primeiro ano
- **Meta 3**: Reduzir reclamações sobre "dificuldade de encontrar serviços" em 50%

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **React 19** - Framework principal
- **TypeScript 5.5** - Tipagem estática
- **Vite 5.4** - Build tool e dev server
- **Tailwind CSS 3.4** - Estilização e design system

### **Componentes e UI**
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações fluidas
- **ShadCN/UI** - Sistema de design

### **Formulários e Validação**
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Formatação automática** de telefone

### **Estado e Dados**
- **Zustand** - Gerenciamento de estado global
- **TanStack React Query** - Cache e sincronização de dados
- **LocalStorage** - Persistência local de dados

### **Desenvolvimento**
- **ESLint** - Análise estática de código
- **PostCSS** - Processamento de CSS
- **pnpm** - Gerenciador de pacotes

## 📋 Pré-requisitos

- **Node.js** 18+ 
- **pnpm** 8.10.0+
- **Git** (para clonagem do repositório)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/guia-servicos-panavai.git
   cd guia-servicos-panavai
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 💻 Uso

### **Para Usuários**
1. Acesse a página principal
2. Use a barra de pesquisa para encontrar estabelecimentos
3. Filtre por categoria usando o seletor
4. Clique em "Recomendar" para avaliar um serviço
5. Use "Sugerir Novo Local" para adicionar estabelecimentos

### **Para Desenvolvedores**
```bash
# Desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview da build
pnpm run preview

# Análise de código
pnpm run lint
```

## 📁 Estrutura do Projeto

```
facint/
├── public/
│   └── favicon.svg              # Favicon personalizado
├── src/
│   ├── components/
│   │   ├── ui/                  # Componentes base do design system
│   │   ├── AddServiceForm.tsx   # Formulário de adição de serviços
│   │   ├── SearchBar.tsx        # Barra de pesquisa
│   │   └── ServiceCard.tsx      # Card de exibição de serviços
│   ├── data/
│   │   └── mockData.ts          # Dados de exemplo
│   ├── hooks/
│   │   ├── use-mobile.tsx       # Hook para detecção mobile
│   │   └── use-toast.ts         # Hook para notificações
│   ├── lib/
│   │   └── utils.ts             # Utilitários gerais
│   ├── pages/
│   │   ├── Index.tsx            # Página principal
│   │   └── NotFound.tsx         # Página 404
│   ├── types/
│   │   └── Service.ts           # Tipagens TypeScript
│   ├── App.tsx                  # Componente raiz
│   ├── main.tsx                 # Entry point
│   └── index.css                # Estilos globais
├── package.json                 # Dependências e scripts
├── tailwind.config.ts           # Configuração do Tailwind
├── tsconfig.json                # Configuração TypeScript
└── vite.config.ts               # Configuração do Vite
```

