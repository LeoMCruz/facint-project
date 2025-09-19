import * as React from 'react';
import { MapPin, Plus, TrendingUp, Users, Building2 } from 'lucide-react';
import { Service, ServiceCategory } from '@/types/Service';
import { mockServices } from '@/data/mockData';
import { SearchBar } from '@/components/SearchBar';
import { ServiceCard } from '@/components/ServiceCard';
import { AddServiceForm } from '@/components/AddServiceForm';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const STORAGE_KEY = 'local-services';

export default function Index() {
  const [services, setServices] = React.useState<Service[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? [...JSON.parse(stored), ...mockServices] : mockServices;
  });

  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<ServiceCategory>('Todos');
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);

  React.useEffect(() => {
    const userServices = services.filter(
      (service) => !mockServices.some((mock) => mock.id === service.id)
    );
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userServices));
  }, [services]);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      searchQuery === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.address.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Todos' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleAddService = (
    newService: Omit<Service, 'id' | 'rating' | 'recommendations' | 'imageUrl'>
  ) => {
    const service: Service = {
      ...newService,
      id: Date.now().toString(),
      rating: 0,
      recommendations: 0,
      imageUrl: 'https://source.unsplash.com/random/800x600',
    };

    setServices((prev) => [...prev, service]);
    setIsAddDialogOpen(false);
  };

  const handleRecommend = (serviceId: string) => {
    try {
      setServices((prev) =>
        prev.map((service) => {
          if (service.id === serviceId) {
            const newRecommendations = service.recommendations + 1;
            // Calcular nova avaliação: média ponderada entre avaliação atual e nova (5.0)
            const newRating = service.recommendations === 0 
              ? 5.0 
              : Number(((service.rating * service.recommendations + 5.0) / newRecommendations).toFixed(1));
            
            return {
              ...service,
              recommendations: newRecommendations,
              rating: newRating,
            };
          }
          return service;
        })
      );

      toast({
        title: 'Recomendação enviada!',
        description: 'Obrigado por sua contribuição.',
      });
    } catch (error) {
      console.error('Erro ao processar recomendação:', error);
      toast({
        title: 'Erro!',
        description: 'Não foi possível processar sua recomendação. Tente novamente.',
        variant: 'destructive',
      });
    }
  };

  const stats = {
    establishments: services.length,
    recommendations: services.reduce((acc, service) => acc + service.recommendations, 0),
    categories: new Set(services.map((service) => service.category)).size,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 px-4 py-20 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10" />
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-lg font-medium">Paranavaí - Paraná</span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Guia de Serviços <span className="text-yellow-300">Locais</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Descubra os melhores estabelecimentos, ONGs e serviços da nossa cidade e região.
              Conecte-se com a comunidade local e encontre exatamente o que precisa.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Building2 className="h-8 w-8 text-orange-300" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stats.establishments}</div>
                  <div className="text-blue-200 text-sm">Estabelecimentos</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-green-300" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stats.recommendations}</div>
                  <div className="text-blue-200 text-sm">Recomendações</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Users className="h-8 w-8 text-purple-300" />
                </div>
                <div>
                  <div className="text-3xl font-bold">{stats.categories}</div>
                  <div className="text-blue-200 text-sm">Categorias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Search and Add Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-end lg:justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Encontre o que precisa</h2>
              <p className="text-gray-600 mb-6">Pesquise por nome, categoria ou localização</p>
              <SearchBar
                onSearch={setSearchQuery}
                onCategoryChange={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </div>
            <div className="lg:ml-6">
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-3"
                    size="lg"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Sugerir Novo Local
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Sugerir Novo Local</DialogTitle>
                  </DialogHeader>
                  <AddServiceForm
                    onSubmit={handleAddService}
                    onCancel={() => setIsAddDialogOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              {filteredServices.length} resultados encontrados
            </h3>
            {searchQuery && (
              <div className="text-sm text-gray-500">
                Pesquisando por: <span className="font-medium text-blue-600">"{searchQuery}"</span>
              </div>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onRecommend={() => handleRecommend(service.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum resultado encontrado</h3>
            <p className="text-gray-500">Tente ajustar sua pesquisa ou explorar outras categorias.</p>
          </div>
        )}
      </div>
    </div>
  );
}
