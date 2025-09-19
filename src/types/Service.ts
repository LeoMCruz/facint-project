export type ServiceCategory =
  | 'Todos'
  | 'Restaurantes'
  | 'ONGs'
  | 'Serviços'
  | 'Saúde'
  | 'Educação'
  | 'Comércio'
  | 'Beleza'
  | 'Automóveis'
  | 'Outros';

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  phone: string;
  address: string;
  businessHours: string;
  website?: string;
  rating: number;
  recommendations: number;
  imageUrl: string;
}
