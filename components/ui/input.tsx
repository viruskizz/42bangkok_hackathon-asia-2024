import * as React from "react";

import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-full border-2 border-pink-500 bg-white pl-4 pr-10 py-2 text-sm shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
      <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 pointer-events-none" size={20} />
    </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
