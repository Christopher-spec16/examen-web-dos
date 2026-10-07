import {
  ArrowRight,
  BarChart3,
  Book,
  BookMarked,
  BookOpen,
  Box,
  CalendarDays,
  Clock,
  FileText,
  Grid2X2,
  House,
  Landmark,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  Moon,
  Phone,
  Search,
  Send,
  SlidersHorizontal,
  Star,
  Tag,
  Type,
} from 'lucide-react';

const icons = {
  'arrow-right': ArrowRight,
  'bar-chart-3': BarChart3,
  book: Book,
  'book-marked': BookMarked,
  'book-open': BookOpen,
  box: Box,
  calendar: CalendarDays,
  clock: Clock,
  'file-text': FileText,
  grid: Grid2X2,
  home: House,
  landmark: Landmark,
  layers: Layers,
  'layout-grid': LayoutGrid,
  mail: Mail,
  'map-pin': MapPin,
  moon: Moon,
  phone: Phone,
  search: Search,
  send: Send,
  sliders: SlidersHorizontal,
  star: Star,
  tag: Tag,
  type: Type,
};

export default function Icon({ name, className = '' }) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    throw new Error(`Icono Lucide no configurado: ${name}`);
  }

  return <LucideIcon aria-hidden="true" className={`lucide ${className}`} />;
}
