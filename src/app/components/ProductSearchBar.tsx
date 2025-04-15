'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState  } from 'react';
import { ProductCard } from './ProductCard';
import { Search } from 'lucide-react';

interface Product {
  id: string;
  images: string[]; 
  smallDescription: string;
  name: string;
  price: number;
  category: string;
}

interface ProductSearchBarProps {
  products: Product[]; 
}


const categories = [
  { label: 'saas products', value: 'saas' },
  { label: 'amazon accounts', value: 'amazon' },
  { label: 'youtube channels', value: 'youtube' },
  { label: 'instagram accounts', value: 'instagram' },
  { label: 'mobile apps', value: 'mobileapps' },
  { label: 'domains', value: 'domains' },
  { label: 'others', value: 'others' },
];


export function ProductSearchBar({ products }: ProductSearchBarProps) {

    console.log(" the products are ", products);

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const q = query.trim().toLowerCase();

    const results = products.filter((product: Product) => {
      const matchQuery =
        product.name.toLowerCase().includes(q) ||
        product.smallDescription?.toLowerCase().includes(q);
      const matchCategory = selectedCategory
        ? product.category === selectedCategory
        : true;

      return matchQuery && matchCategory;
    });

    setFilteredProducts(results);
  };

  const toggleCategory = (catValue: string) => {
    const newCategory = selectedCategory === catValue ? null : catValue;

    console.log(" the cat value is ", catValue);
    console.log(" the selected category is ", selectedCategory);
    setSelectedCategory(newCategory);

    // Re-run search if already queried
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      const results = products.filter((product: Product) => {
        const matchQuery =
          product.name.toLowerCase().includes(q) ||
          product.smallDescription?.toLowerCase().includes(q);
        const matchCategory = newCategory
          ? product.category === newCategory
          : true;

        return matchQuery && matchCategory;
      });

      setFilteredProducts(results);
    } else {
      // If no query, just filter by category
      const results = products.filter((product: Product) =>
        newCategory ? product.category === newCategory : true
      );
      setFilteredProducts(results);
    }
  };

  return (
    <div className="flex flex-col gap-6 mt-4 mb-32">
      {/* Search + Button */}
      {/* <div className="flex flex-col sm:flex-row items-stretch gap-2">
        <Input
          className="flex-grow h-16"
          placeholder="Search for a product..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button  >
                      Search
                    </Button>
      </div> */}
   <div className="relative flex w-full h-16">
  <Input
    className="flex-grow h-full pl-4 pr-40 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 focus:shadow-md
 text-xl"
    placeholder="Search for a product..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }}
  />
  <Button
  onClick={handleSearch}
    className="absolute right-0 top-0 h-full rounded-full  w-36 cursor-pointer px-6 bg-blue-600 text-white hover:bg-blue-700 text-lg flex items-center gap-2 shadow-md"
  >
    <Search size={24} className="w-6 h-6" />
    Search
  </Button>
</div>



      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={selectedCategory === cat.value ? 'default' : 'outline'}
            onClick={() => toggleCategory(cat.value)}
            className={cn(
              'text-sm capitalize cursor-pointer',
              selectedCategory === cat.value
                ? 'border-blue-600 bg-blue-100 text-blue-800'
                : ''
            )}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Filtered Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[500px] transition-all duration-300">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product : Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              images={product.images}
              price={product.price}
              smallDescription={product.smallDescription}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}