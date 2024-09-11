import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Category {
  name: string;
  subcategories?: string[];
}

interface CategoryNavbarProps {
  categories: Category[];
  bgColor?: string;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
  categories,
  bgColor = "slate-50",
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    if (activeCategory === categoryName) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryName);
    }
  };

  return (
    <nav className={`bg-${bgColor} text-black`}>
      <div className="container mx-auto  px-4 py-2">
        <ul className="space-x-6 flex justify-between items-center">
          {categories.map((category) => (
            <li key={category.name} className="relative group">
              <button
                onClick={() => handleCategoryClick(category.name)}
                className="focus:outline-none"
              >
                {category.name}
              </button>
              {category.subcategories && activeCategory === category.name && (
                <ul
                  className={`absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-sm z-20`}
                >
                  {category.subcategories.map((subcategory) => (
                    <li
                      key={subcategory}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      <Link to="#">{subcategory}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNavbar;
