import * as React from 'react';
import { Star, Phone, MapPin, Clock, Globe, ThumbsUp } from 'lucide-react';
import { Service } from '@/types/Service';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  service: Service;
  onRecommend?: () => void;
}

export const ServiceCard = ({ service, onRecommend }: ServiceCardProps) => {
  const {
    name,
    category,
    description,
    phone,
    address,
    businessHours,
    website,
    rating,
    recommendations,
  } = service;

  // Gerar cores baseadas na categoria
  const getCategoryColor = (category: string) => {
    const colors = {
      'Restaurantes': 'bg-orange-100 text-orange-800 border-orange-200',
      'ONGs': 'bg-green-100 text-green-800 border-green-200',
      'Saúde': 'bg-red-100 text-red-800 border-red-200',
      'Educação': 'bg-blue-100 text-blue-800 border-blue-200',
      'Comércio': 'bg-purple-100 text-purple-800 border-purple-200',
      'Beleza': 'bg-pink-100 text-pink-800 border-pink-200',
      'Automóveis': 'bg-gray-100 text-gray-800 border-gray-200',
      'Serviços': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Outros': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[category as keyof typeof colors] || colors['Outros'];
  };

  // Gerar ícone baseado na categoria
  const getCategoryIcon = (category: string) => {
    if (category === 'Restaurantes') return '🍽️';
    if (category === 'ONGs') return '🤝';
    if (category === 'Saúde') return '🏥';
    if (category === 'Educação') return '📚';
    if (category === 'Comércio') return '🛒';
    if (category === 'Beleza') return '💄';
    if (category === 'Automóveis') return '🚗';
    if (category === 'Serviços') return '🔧';
    return '📍';
  };

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 shadow-md">
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">{getCategoryIcon(category)}</div>
        </div>
        <div className="absolute left-3 top-3">
          <Badge 
            variant="secondary" 
            className={`${getCategoryColor(category)} border font-medium`}
          >
            {category}
          </Badge>
        </div>
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 shadow-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent h-16" />
      </div>

      <CardContent className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{name}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-2">{description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
            <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
              {phone}
            </a>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{address}</span>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Clock className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{businessHours}</span>
          </div>
          {website && (
            <div className="flex items-center gap-3 text-sm">
              <Globe className="h-4 w-4 text-purple-500 flex-shrink-0" />
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors font-medium truncate"
              >
                {website}
              </a>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t bg-gray-50/50 p-5">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <ThumbsUp className="h-4 w-4" />
          <span className="font-medium">{recommendations} recomendações</span>
        </div>
        <Button 
          onClick={onRecommend} 
          className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:shadow-md"
          size="sm"
        >
          Recomendar
        </Button>
      </CardFooter>
    </Card>
  );
};
