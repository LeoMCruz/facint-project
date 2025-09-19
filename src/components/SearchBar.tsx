import * as React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ServiceCategory } from '@/types/Service';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: ServiceCategory) => void;
  selectedCategory: ServiceCategory;
}

export const SearchBar = ({
  onSearch,
  onCategoryChange,
  selectedCategory,
}: SearchBarProps) => {
  const categories: ServiceCategory[] = [
    'Todos',
    'Restaurantes',
    'ONGs',
    'Serviços',
    'Saúde',
    'Educação',
    'Comércio',
    'Beleza',
    'Automóveis',
    'Outros',
  ];

  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Buscar por nome, descrição ou endereço..."
          className="pl-12 pr-4 py-3 text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl shadow-sm"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Select
        value={selectedCategory}
        onValueChange={(value) => onCategoryChange(value as ServiceCategory)}
      >
        <SelectTrigger className="w-full lg:w-[220px] py-3 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl shadow-sm">
          <SelectValue placeholder="Todas as categorias" />
        </SelectTrigger>
        <SelectContent className="rounded-xl border-gray-200 shadow-lg">
          {categories.map((category) => (
            <SelectItem 
              key={category} 
              value={category}
              className="py-3 px-4 hover:bg-blue-50 focus:bg-blue-50 rounded-lg mx-2 my-1"
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
