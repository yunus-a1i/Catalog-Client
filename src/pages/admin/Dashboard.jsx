// File: src/pages/admin/Dashboard.jsx
import { Link } from "react-router";
import { Package, FolderTree, TrendingUp, Eye } from "lucide-react";
import { useAdminCategoriesQuery } from "../../api/queries/categories";
import { useAdminProductsQuery } from "../../api/queries/products";
import { useTopProducts } from "../../api/queries/analytics";

export default function Dashboard() {
  const { data: productsData } = useAdminProductsQuery({ limit: 5 });
  const { data: categoriesData } = useAdminCategoriesQuery();
  const { data: topProducts } = useTopProducts();

  const products = productsData?.data || productsData || [];
  const categories = categoriesData || categoriesData?.data || [];
  const totalProducts = productsData?.meta?.total || 0;
  const totalCategories = categories.length || 0;

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: Package,
      color: "bg-blue-500",
      link: "/admin/products",
    },
    {
      label: "Categories",
      value: totalCategories,
      icon: FolderTree,
      color: "bg-green-500",
      link: "/admin/categories",
    },
    {
      label: "Top Viewed",
      value: topProducts?.[0]?.view_count || 0,
      icon: Eye,
      color: "bg-purple-500",
      link: "/admin/analytics",
    },
    {
      label: "Analytics",
      value: "View",
      icon: TrendingUp,
      color: "bg-orange-500",
      link: "/admin/analytics",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome to your admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              to={stat.link}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Products & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Recent Products
              </h2>
              <Link
                to="/admin/products"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {products.slice(0, 5).map((product) => (
              <div
                key={product._id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  {product.images?.[0]?.url ? (
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ₹{product.price?.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      product.is_published
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {product.is_published ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                No products yet
              </div>
            )}
          </div>
        </div>

        {/* Top Viewed Products */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Top Viewed
              </h2>
              <Link
                to="/admin/analytics"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                View analytics
              </Link>
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {topProducts?.slice(0, 5).map((product, index) => (
              <div
                key={product._id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">
                      #{index + 1}
                    </span>
                  </div>
                  {product.images?.[0]?.url ? (
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
                      <Package className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {product.view_count?.toLocaleString()} views
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {!topProducts ||
              (topProducts.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  No view data yet
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/admin/products/create"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
          >
            <div className="text-center">
              <Package className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-blue-600" />
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                Add Product
              </p>
            </div>
          </Link>
          <Link
            to="/admin/categories/create"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
          >
            <div className="text-center">
              <FolderTree className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-green-600" />
              <p className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                Add Category
              </p>
            </div>
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors group"
          >
            <div className="text-center">
              <Package className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-purple-600" />
              <p className="text-sm font-medium text-gray-700 group-hover:text-purple-600">
                Manage Products
              </p>
            </div>
          </Link>
          <Link
            to="/admin/analytics"
            className="flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-colors group"
          >
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-orange-600" />
              <p className="text-sm font-medium text-gray-700 group-hover:text-orange-600">
                View Analytics
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
