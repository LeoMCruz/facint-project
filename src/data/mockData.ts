import { Service } from '@/types/Service';

export const mockServices: Service[] = [
  {
    id: '1',
    name: 'Restaurante Sabor Paranaense',
    category: 'Restaurantes',
    description: 'Culinária típica paranaense com pratos tradicionais e ambiente aconchegante. Especialidade em barreado e pratos com pinhão.',
    phone: '(44) 3423-1234',
    address: 'Rua Getúlio Vargas, 450 - Centro',
    businessHours: 'Seg-Sáb: 11h às 14h e 18h às 23h',
    website: 'www.saborparanaense.com.br',
    rating: 4.8,
    recommendations: 127,
    imageUrl: 'https://example.com/restaurant-image.jpg'
  },
  {
    id: '2',
    name: 'ONG Amigos da Natureza',
    category: 'ONGs',
    description: 'Organização dedicada à preservação ambiental e educação ecológica. Desenvolve projetos de reflorestamento e conscientização.',
    phone: '(44) 3423-5678',
    address: 'Av. Brasil, 1200 - Jardim Morumbi',
    businessHours: 'Seg-Sex: 8h às 17h',
    website: 'www.amigosdanatureza.org.br',
    rating: 4.9,
    recommendations: 89,
    imageUrl: 'https://example.com/ong-image.jpg'
  },
  {
    id: '3',
    name: 'Auto Elétrica Central',
    category: 'Automóveis',
    description: 'Serviços especializados em sistema elétrico automotivo. Mais de 20 anos de experiência no mercado.',
    phone: '(44) 3423-9876',
    address: 'Rua Maringá, 789 - Vila Operária',
    businessHours: 'Seg-Sex: 7h30 às 18h, Sáb: 7h30 às 12h',
    rating: 4.7,
    recommendations: 156,
    imageUrl: 'https://example.com/auto-eletrica-image.jpg'
  },
  {
    id: '4',
    name: 'Clínica Médica Vida & Saúde',
    category: 'Saúde',
    description: 'Clinica com diversas especialidades médicas. Atendimento humanizado e equipamentos modernos.',
    phone: '(44) 3423-4567',
    address: 'Av. Paraná, 567 - Centro',
    businessHours: 'Seg-Sex: 7h às 19h, Sáb: 7h às 12h',
    website: 'www.vidaesaude.com.br',
    rating: 4.6,
    recommendations: 203,
    imageUrl: 'https://example.com/clinica-image.jpg'
  },
  {
    id: '5',
    name: 'Salão Beleza Pura',
    category: 'Beleza',
    description: 'Salão de beleza completo com serviços de cabelo, manicure, pedicure e estética. Profissionais qualificados.',
    phone: '(44) 3423-2468',
    address: 'Rua das Flores, 234 - Jardim Paulista',
    businessHours: 'Ter-Sáb: 9h às 19h',
    rating: 4.5,
    recommendations: 98,
    imageUrl: 'https://example.com/salao-image.jpg'
  },
  {
    id: '6',
    name: 'Escola de Idiomas Global',
    category: 'Educação',
    description: 'Cursos de inglês, espanhol e francês com metodologia moderna. Professores nativos e certificados.',
    phone: '(44) 3423-7890',
    address: 'Rua São Paulo, 345 - Centro',
    businessHours: 'Seg-Sex: 8h às 22h, Sáb: 8h às 12h',
    website: 'www.globalidiomas.com.br',
    rating: 4.8,
    recommendations: 142,
    imageUrl: 'https://example.com/escola-image.jpg'
  },
  {
    id: '7',
    name: 'Mercado do Produtor',
    category: 'Comércio',
    description: 'Feira com produtos frescos direto do produtor. Frutas, verduras, legumes e produtos artesanais da região.',
    phone: '(44) 3423-3456',
    address: 'Praça dos Pioneiros, s/n - Centro',
    businessHours: 'Ter, Qui, Sáb: 6h às 12h',
    rating: 4.4,
    recommendations: 176,
    imageUrl: 'https://example.com/mercado-image.jpg'
  },
  {
    id: '8',
    name: 'Instituto Esperança',
    category: 'ONGs',
    description: 'Atendimento a crianças e adolescentes em situação de vulnerabilidade social. Atividades educativas e culturais.',
    phone: '(44) 3423-6543',
    address: 'Rua da Esperança, 123 - Vila Nova',
    businessHours: 'Seg-Sex: 8h às 17h',
    website: 'www.institutoesperanca.org.br',
    rating: 4.9,
    recommendations: 87,
    imageUrl: 'https://example.com/instituto-image.jpg'
  }
];
