import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Tag, User } from "lucide-react";
import { useParams } from "react-router";
import { useProductQuery } from "../../api/queries/products";
import { useCategoryQuery } from "../../api/queries/categories";

export default function ProductDetail() {
  const { id } = useParams();
  const [imgId, setImgId] = useState(0);

  // 1️⃣ Always call hooks first
  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
  } = useProductQuery(id);

  const categoryId = product?.category;

  const { data: productCategory, isLoading: categoryLoading } =
    useCategoryQuery(categoryId, {
      enabled: !!categoryId,
    });

  console.log(productCategory);

  // 2️⃣ Only AFTER hooks → conditional rendering
  if (productLoading) {
    return (
      <section className="py-20 text-center text-lg">
        Loading product...
      </section>
    );
  }

  if (productError || !product) {
    return (
      <section className="py-20 text-center text-red-500">
        Failed to load product
      </section>
    );
  }

  const {
    name,
    description,
    price,
    images = [],
    specs = {},
    view_count,
  } = product;

  const getGridCols = (count) => {
    if (count >= 7) return "grid-cols-8";
    if (count >= 5) return "grid-cols-6";
    return "grid-cols-2";
  };

  const visibleImages = (images) => {
    if (images.length >= 7) return images.slice(0, 8);
    if (images.length >= 5) return images.slice(0, 6);
    return images.slice(0, 4);
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10 bg-body dark:bg-darkBody  min-h-screen flex items-center">
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
                  src={images[`${imgId}`]?.url}
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
              <h1 className="font-GtSuper text-7xl text-mainHeading dark:text-darkMainHeading tracking-tighter">
                {name}
              </h1>

              {description && (
                <p className="mt-4 text-lg text-subHeading dark:text-darkSubHeading  max-w-xl">
                  {description}
                </p>
              )}
            </div>

            {/* {price > 0 && (
              <div className="text-3xl font-GtSuper">
                ₹ {price.toLocaleString()}
              </div>
            )} */}

            {/* Specs */}
            {Object.keys(specs).length > 0 && (
              <div>
                <h3 className="mb-4 text-2xl font-GtSuper text-textContent dark:text-darkTextContent">Specifications</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="rounded-lg border border-border dark:border-darkBorder p-4 bg-card dark:bg-darkCard">
                      <p className="text-sm uppercase text-subHeading dark:text-darkSubHeading">
                        {key.replace(/_/g, " ")}
                      </p>
                      <p className="text-lg text-mainHeading dark:text-darkMainHeading">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Meta */}
            <div className="flex flex-wrap gap-6 text-lg">
              {productCategory && (
                <div className="flex items-center gap-2 border rounded-full px-4 border-subHeading dark:border-darkSubHeading text-subHeading dark:text-darkSubHeading">
                  <Tag size={16} />
                  {productCategory.category.name}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Image Gallery */}
        {images.length > 1 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={`mt-4 grid gap-6 ${getGridCols(images.length)}`}
          >
            {visibleImages(images).map((img, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setImgId(idx)}
                variants={itemVariants}
                className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
              >
                <img
                  src={img.url}
                  alt={img.alt || `${name} ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
