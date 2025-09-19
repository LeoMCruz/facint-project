import * as React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Service, ServiceCategory } from '@/types/Service';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  category: z.enum([
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
  ]),
  description: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  phone: z.string().regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, 'Formato: (44) 3423-1234 ou (44) 99999-1234'),
  address: z.string().min(5, 'Endereço deve ter pelo menos 5 caracteres'),
  businessHours: z.string().min(5, 'Horário deve ter pelo menos 5 caracteres'),
  website: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface AddServiceFormProps {
  onSubmit: (service: Omit<Service, 'id' | 'rating' | 'recommendations' | 'imageUrl'>) => void;
  onCancel: () => void;
}

export const AddServiceForm = ({ onSubmit, onCancel }: AddServiceFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: 'Outros',
      description: '',
      phone: '',
      address: '',
      businessHours: '',
      website: '',
    },
  });

  // Função para formatar telefone automaticamente
  const formatPhone = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a formatação baseada no número de dígitos
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleSubmit = (data: FormData) => {
    try {
      // Garantir que todos os campos obrigatórios estão presentes
      const serviceData = {
        name: data.name,
        category: data.category,
        description: data.description,
        phone: data.phone,
        address: data.address,
        businessHours: data.businessHours,
        website: data.website || '',
      };
      
      onSubmit(serviceData);
      toast({
        title: 'Sugestão enviada!',
        description: 'Sua recomendação foi registrada.',
      });
    } catch (error) {
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao enviar sua sugestão.',
        variant: 'destructive',
      });
    }
  };

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
    <div className="space-y-6">
      <div className="text-center pb-4 border-b border-gray-100">
        <p className="text-gray-600">Ajude a comunidade compartilhando um novo estabelecimento ou serviço!</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Nome do Estabelecimento *</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Restaurante do João" className="border-gray-200 focus:border-blue-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Categoria *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-gray-200 focus:border-blue-500">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Telefone *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(44) 99999-1234" 
                      className="border-gray-200 focus:border-blue-500" 
                      value={field.value}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value);
                        field.onChange(formatted);
                      }}
                      maxLength={15}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">Website</FormLabel>
                  <FormControl>
                    <Input placeholder="www.exemplo.com.br" className="border-gray-200 focus:border-blue-500" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Endereço *</FormLabel>
                <FormControl>
                  <Input placeholder="Rua, número - Bairro" className="border-gray-200 focus:border-blue-500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="businessHours"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Horário de Funcionamento *</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Seg-Sex: 8h às 18h" className="border-gray-200 focus:border-blue-500" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Descrição *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descreva os serviços oferecidos, especialidades, diferenciais..."
                    className="min-h-[120px] border-gray-200 focus:border-blue-500 resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            <Button 
              variant="outline" 
              type="button" 
              onClick={onCancel}
              className="border-gray-200 hover:bg-gray-50"
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Adicionar Sugestão
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
