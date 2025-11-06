import { Card, CardContent } from '@/components/ui/card';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  image: string;
}

export default function ProjectCard({ title, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
        className="h-full"
      >
        <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full border-0 shadow-lg bg-white">
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-bold text-lg drop-shadow-lg">{title}</h4>
            </div>
          </div>
          <CardContent className="p-4 md:hidden">
            <h4 className="font-medium text-gray-800 text-sm">{title}</h4>
          </CardContent>
        </Card>
      </Tilt>
    </motion.div>
  );
}
