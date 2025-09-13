import { Search, Filter, SortDesc } from 'lucide-react';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const specialties = [
  'All Specialties',
  'Anxiety Disorders',
  'Depression',
  'Trauma Therapy',
  'Relationship Counseling',
  'Family Therapy',
  'CBT',
  'ADHD',
  'Substance Abuse',
  'PTSD'
];

export default function SearchAndFilter({
  searchTerm,
  onSearchChange,
  selectedSpecialty,
  onSpecialtyChange,
  sortBy,
  onSortChange
}: SearchAndFilterProps) {
  return (
    <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-cyan-50 py-6 px-4 shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search therapists by name or specialty..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md"
            />
          </div>

          {/* Specialty Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-500 h-4 w-4" />
            <select
              value={selectedSpecialty}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              className="pl-10 pr-8 py-3 border-2 border-cyan-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 bg-white/80 backdrop-blur-sm min-w-[200px] shadow-sm transition-all duration-200 hover:shadow-md"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <SortDesc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 h-4 w-4" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="pl-10 pr-8 py-3 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-white/80 backdrop-blur-sm min-w-[180px] shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <option value="rating">Sort by Rating</option>
              <option value="experience">Sort by Experience</option>
              <option value="clients">Sort by Clients Helped</option>
              <option value="price">Sort by Price</option>
              <option value="availability">Sort by Availability</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}