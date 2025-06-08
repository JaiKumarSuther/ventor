
import { Search } from "lucide-react";
import { forwardRef } from "react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder, value, onChange, className }, ref) => {
    return (
      <div className={`relative ${className || ""}`}>
        {/* Search icon on the right side */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>

        {/* Input field with right padding for the icon */}
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="block w-full pl-3 pr-10 py-2 border border-gray-600 rounded-full bg-[#1a1d24] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8062F6] focus:border-transparent text-sm"
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;