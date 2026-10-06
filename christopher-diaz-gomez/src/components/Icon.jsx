import {
  ArrowRight,
  BarChart3,
  Book,
  BookMarked,
  BookOpen,
  Box,
  Calendar,
  Grid2x2,
  Home,
  Landmark,
  LayoutGrid,
  Mail,
  Moon,
  Search,
  SlidersHorizontal,
  Star,
  Tag,
  Type,
} from 'lucide-react';

const iconMap = {
  'arrow-right': ArrowRight,
  'bar-chart-3': BarChart3,
  book: Book,
  'book-marked': BookMarked,
  'book-open': BookOpen,
  box: Box,
  calendar: Calendar,
  'grid': Grid2x2,
  home: Home,
  landmark: Landmark,
  'layout-grid': LayoutGrid,
  mail: Mail,
  moon: Moon,
  search: Search,
  sliders: SlidersHorizontal,
  star: Star,
  tag: Tag,
  type: Type,
};

const Icon = ({ name, className = '' }) => {
  const Component = iconMap[name] || BookOpen;
  return <Component className={className} aria-hidden="true" />;
};

export default Icon;
