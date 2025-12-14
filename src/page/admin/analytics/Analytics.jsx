import { useState } from 'react';
import { Eye, Package, TrendingUp, Calendar } from 'lucide-react';
import { useTopProducts, useViewsOverTime } from '../../../api/queries/analytics';

export default function Analytics() {
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    to: new Date().toISOString().split('T')[0],
  });

  const { data: topProducts, isLoading: loadingTop } = useTopProducts();
  const { data: viewsData, isLoading: loadingViews } = useViewsOverTime({
    from: dateRange.from,
    to: dateRange.to,
  });

  const totalViews = viewsData?.reduce((sum, item) => sum + item.count, 0) || 0;
  const avgViewsPerDay = viewsData?.length
    ? Math.round(totalViews / viewsData.length)
    : 0;

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">Track your store performance</p>
      </div>

      {/* Date Range Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">From:</label>
            <input
              type="date"
              name="from"
              value={dateRange.from}
              onChange={handleDateChange}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-700">To:</label>
            <input
              type="date"
              name="to"
              value={dateRange.to}
              onChange={handleDateChange}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Views</h3>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {totalViews.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            In selected date range
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Avg Views/Day</h3>
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {avgViewsPerDay.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Daily average
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Top Products</h3>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {topProducts?.length || 0}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Tracked products
          </p>
        </div>
      </div>

      {/* Views Over Time Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-4">Views Over Time</h2>
        {loadingViews ? (
          <div className="p-8 text-center text-gray-500">Loading chart data...</div>
        ) : viewsData && viewsData.length > 0 ? (
          <div className="space-y-2">
            {viewsData.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm text-gray-600">{item.date}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-6 overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full flex items-center justify-end pr-2"
                        style={{
                          width: `${Math.min(
                            (item.count / Math.max(...viewsData.map((v) => v.count))) * 100,
                            100
                          )}%`,
                          minWidth: '40px',
                        }}
                      >
                        <span className="text-xs font-medium text-white">
                          {item.count}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            No view data available for selected date range
          </div>
        )}
      </div>

      {/* Top Viewed Products */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Top Viewed Products</h2>
        </div>
        {loadingTop ? (
          <div className="p-8 text-center text-gray-500">Loading top products...</div>
        ) : topProducts && topProducts.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {topProducts.map((product, index) => (
              <div
                key={product._id}
                className="p-4 hover:bg-gray-50 transition-colors flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-bold text-white">#{index + 1}</span>
                </div>

                {product.images?.[0]?.url ? (
                  <img
                    src={product.images[0].url}
                    alt={product.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded bg-gray-200 flex items-center justify-center">
                    <Package className="w-8 h-8 text-gray-400" />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.slug}</p>
                </div>

                <div className="text-right">
                  <div className="flex items-center text-gray-600">
                    <Eye className="w-4 h-4 mr-1" />
                    <span className="text-lg font-bold">
                      {product.view_count?.toLocaleString() || 0}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">views</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500">
            <Package className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <p>No product view data available yet</p>
          </div>
        )}
      </div>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peak Day */}
        {viewsData && viewsData.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Peak Performance</h2>
            {(() => {
              const peak = viewsData.reduce(
                (max, item) => (item.count > max.count ? item : max),
                viewsData[0]
              );
              return (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-sm text-gray-600">Highest Traffic Day</p>
                      <p className="text-xl font-bold text-blue-600">{peak.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-blue-600">{peak.count}</p>
                      <p className="text-sm text-gray-600">views</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Top Product Highlight */}
        {topProducts && topProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Most Popular Product</h2>
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
              {topProducts[0].images?.[0]?.url ? (
                <img
                  src={topProducts[0].images[0].url}
                  alt={topProducts[0].name}
                  className="w-20 h-20 rounded object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded bg-gray-200 flex items-center justify-center">
                  <Package className="w-10 h-10 text-gray-400" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">
                  {topProducts[0].name}
                </h3>
                <div className="flex items-center text-purple-600 mt-2">
                  <Eye className="w-5 h-5 mr-1" />
                  <span className="text-2xl font-bold">
                    {topProducts[0].view_count?.toLocaleString()}
                  </span>
                  <span className="ml-1">views</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}