import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useCategoriesQuery } from "../api/queries/categories"; // keep your existing hook/fn
// If fetchCategories is a react-query hook like useFetchCategories, adapt accordingly.

// function useDebounce(value, delay = 300) {
//   const [debounced, setDebounced] = useState(value);
//   useEffect(() => {
//     const t = setTimeout(() => setDebounced(value), delay);
//     return () => clearTimeout(t);
//   }, [value, delay]);
//   return debounced;
// }

function CategoriesSection() {
  // const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 24;
  // const q = useDebounce(query, 300);
  const { data, isLoading, isError } = useCategoriesQuery();
    
  // Defensive accessors: prefer data.items or data.categories
  const categories = data || data?.items || data?.categories || [];
  const total = data?.total ?? data?.count ?? categories.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <section className="py-20 bg-card dark:bg-darkCard border-y border-border dark:border-darkBorder">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="font-GtSuper text-7xl text-mainHeading dark:text-darkMainHeading mb-2 tracking-tighter">
            Browse Categories
          </h2>
          <p className="font-Manrope text-xl text-textContent dark:text-darkTextContent max-w-2xl mx-auto">
            Explore our meticulously organized product categories to find exactly what you're looking for
          </p>
        </motion.div>

        {isLoading ? (
          <div className="p-8 text-center">Loading…</div>
        ) : isError ? (
          <div className="p-8 text-center text-red-500">Error loading categories</div>
        ) : categories.length === 0 ? (
          <div className="p-8 text-center">No categories found.</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category._id || category.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => {
                    // optionally navigate to category page if you use routing:
                    // navigate(`/categories/${category.slug || category._id}`);
                  }}
                >
                  <div className="rounded-2xl p-1 h-full">
                    <div className="aspect-square rounded-tl-[40px] rounded-br-[40px] bg-gray-100 dark:bg-gray-800 mb-4 overflow-hidden flex items-center justify-center">
                      {category.image_url ? (
                        <img
                          src={category.image_url}
                          alt={category.name}
                          className="w-full h-full"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 group-hover:scale-105 transition-transform duration-300" />
                      )}
                    </div>

                    <div>
                        <h3 className="font-GtSuper text-4xl text-mainHeading dark:text-darkMainHeading group-hover:text-subHeading dark:group-hover:text-darkSubHeading transition-colors tracking-tighter">
                          {category.name}
                        </h3>
                        

                      {/* <p className="font-Manrope text-textContent dark:text-darkTextContent text-textContent dark:text-darkTextContent text-sm leading-relaxed mt-2">
                        {category.description || "No description available."}
                      </p> */}

                      {/* <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-1 text-mainHeading dark:text-darkMainHeading text-mainHeading dark:text-darkMainHeading font-Manrope text-sm mt-3"
                      >
                        <span>Explore Category</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* pagination */}
            <div className="mt-8 flex items-center justify-between">
              <div className="text-sm text-textContent dark:text-darkTextContent">
                Page {page} of {totalPages} — {total} total
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="px-3 py-1 rounded dark:bg-card bg-darkCard border border-border dark:border-darkBorder disabled:opacity-50 dark:text-mainHeading text-darkMainHeading"
                >
                  Prev
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="px-3 py-1 rounded dark:bg-card bg-darkCard border border-border dark:border-darkBorder disabled:opacity-50 dark:text-mainHeading text-darkMainHeading"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CategoriesSection;
