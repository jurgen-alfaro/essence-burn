import React, { memo } from 'react';
import Image from 'next/image';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/app/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onView?: (product: Product) => void;
  priority?: boolean;
}

const ProductCard = memo(({ product, onAddToCart, onView, priority = false }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart?.(product);
  };

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    onView?.(product);
  };

  const getBadgeStyles = (badge: Product['badge']) => {
    switch (badge) {
      case 'bestseller':
        return 'bg-essence-peach text-white';
      case 'new':
        return 'bg-essence-mauve text-white';
      case 'limited':
        return 'bg-essence-rose text-essence-mauve';
      default:
        return '';
    }
  };

  const getBadgeText = (badge: Product['badge']) => {
    switch (badge) {
      case 'bestseller':
        return 'Más Vendido';
      case 'new':
        return 'Nuevo';
      case 'limited':
        return 'Edición Limitada';
      default:
        return '';
    }
  };

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-lg"
      aria-labelledby={`product-${product.id}`}
    >
      {/* Image Container */}
      <div className="bg-essence-cream relative aspect-square overflow-hidden hover:cursor-grab active:cursor-grabbing">
        <Image
          src={product.image}
          alt={`${product.name} - ${product.aroma}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className={`font-poiretone absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-light tracking-wide uppercase ${getBadgeStyles(product.badge)}`}
            role="status"
            aria-label={getBadgeText(product.badge)}
          >
            {getBadgeText(product.badge)}
          </div>
        )}

        {/* Quick View Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            onClick={handleView}
            className="font-quicksand text-essence-mauve hover:bg-essence-cream -translate-y-4 transform rounded-full bg-white px-6 py-2 text-sm font-light tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:cursor-pointer focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent focus:outline-none"
            aria-label={`Ver detalles de ${product.name}`}
          >
            Vista Rápida
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6">
        <h3
          id={`product-${product.id}`}
          className="font-fredoka text-essence-mauve mb-2 line-clamp-2 text-lg font-light tracking-wide sm:text-xl"
        >
          {product.name}
        </h3>

        <p className="font-quicksand text-essence-mauve/70 mb-4 text-sm font-light tracking-wide">
          Aroma: <span className="text-essence-peach">{product.aroma}</span>
        </p>

        <div className="mt-auto">
          <p className="font-quicksand text-essence-mauve mb-4 text-2xl font-light">
            ${product.price.toFixed(2)}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="bg-essence-peach hover:bg-essence-mauve focus:ring-essence-peach flex flex-1 transform items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-light tracking-wide text-white uppercase shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:cursor-pointer hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-label={`Agregar ${product.name} al carrito`}
            >
              <ShoppingCart className="h-4 w-4" aria-hidden="true" />
              <span className="font-quicksand hidden sm:inline">Agregar</span>
            </button>

            <button
              onClick={handleView}
              className="border-essence-rose text-essence-mauve hover:border-essence-mauve hover:bg-essence-cream focus:ring-essence-mauve rounded-full border-2 bg-white px-4 py-3 text-sm font-light transition-all duration-300 hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:outline-none"
              aria-label={`Ver más información de ${product.name}`}
            >
              <Eye className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
