import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  image: string;
  slug: string;
}

export default function ProductCard({ title, image, slug }: ProductCardProps) {
  return (
    <Link to={`/product/${slug}`}>
      <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden cursor-pointer">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
            background: 'linear-gradient(135deg, rgba(104, 159, 56, 0.8) 0%, rgba(139, 195, 74, 0.6) 100%)'
          }}></div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-3 group-hover:opacity-90 transition-colors" style={{ color: '#689F38' }}>
            {title}
          </h3>
          <div className="mt-4 w-0 h-0.5 group-hover:w-full transition-all duration-500" style={{
            background: 'linear-gradient(135deg, #689F38 0%, #8BC34A 100%)'
          }}></div>
        </CardContent>
      </Card>
    </Link>
  );
}
