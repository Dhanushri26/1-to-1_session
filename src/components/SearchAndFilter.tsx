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
    <div className="bg-white py-6 px-4 shadow-sm border-b">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search therapists by name or specialty..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Specialty Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
            <select
              value={selectedSpecialty}
              onChange={(e) => onSpecialtyChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-[200px]"
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
            <SortDesc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 h-4 w-4" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="pl-10 pr-8 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white min-w-[180px]"
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