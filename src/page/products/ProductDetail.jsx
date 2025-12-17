import React from "react";
import { motion } from "framer-motion";
import { Eye, Tag, User } from "lucide-react";
import { useParams } from "react-router";
import { useProductQuery } from "../../api/queries/products";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProductQuery(id);

  if (isLoading) {
    return (
      <section className="py-20 text-center text-lg">
        Loading product...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 text-center text-red-500">
        Failed to load product
      </section>
    );
  }

  if (!product) return null;

  const {
    name,
    description,
    price,
    images = [],
    specs = {},
    view_count,
    category,
    created_by,
  } = product;

  return (
    <section className="py-20 bg-body dark:bg-darkBody min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Image */}
          <div>
            <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
              {images.length ? (
                <img
                  src={images[0]?.url}
                  alt={images[0]?.alt || name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600" />
              )}

              {typeof view_count === "number" && (
                <span className="absolute top-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-Manrope text-gray-600">
                  <Eye className="inline w-4 h-4 mr-1" />
                  {view_count} views
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="font-GtSuper text-7xl text-mainHeading tracking-tighter">
                {name}
              </h1>

              {description && (
                <p className="mt-4 text-lg text-textContent max-w-xl">
                  {description}
                </p>
              )}
            </div>

            {price > 0 && (
              <div className="text-3xl font-GtSuper">
                ₹ {price.toLocaleString()}
              </div>
            )}

            {/* Specs */}
            {Object.keys(specs).length > 0 && (
              <div>
                <h3 className="mb-4 text-2xl font-GtSuper">
                  Specifications
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-lg border p-4 bg-white"
                    >
                      <p className="text-sm uppercase text-gray-500">
                        {key.replace(/_/g, " ")}
                      </p>
                      <p className="text-lg">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-lg">
              {category && (
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  {category.name}
                </div>
              )}

              {created_by && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Added by Admin
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
