import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export default function ServiceCard({ title, description, image, slug }: ServiceCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x: x - rect.width / 2, y: y - rect.height / 2 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered 
          ? `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` 
          : 'translate(0px, 0px)'
      }}
      className="transition-transform duration-300 ease-out"
    >
      <Link to={`/service/${slug}`}>
        <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white overflow-hidden cursor-pointer relative">
          {/* Glow effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(104, 159, 56, 0.3) 0%, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'scale(1.1)'
            }}
          />
          
          <div className="relative overflow-hidden z-10">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'linear-gradient(135deg, rgba(104, 159, 56, 0.8) 0%, rgba(139, 195, 74, 0.6) 100%)'
            }}></div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-emerald-200 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <CardContent className="p-6 relative z-10">
            <h3 className="text-xl font-bold mb-3 group-hover:opacity-90 transition-colors" style={{ color: '#689F38' }}>
              {title}
            </h3>
            <p className="leading-relaxed" style={{ color: '#689F38' }}>
              {description}
            </p>
            <div className="mt-4 w-0 h-0.5 group-hover:w-full transition-all duration-500" style={{
              background: 'linear-gradient(135deg, #689F38 0%, #8BC34A 100%)'
            }}></div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
