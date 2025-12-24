import React, { useState, useCallback } from 'react' 
import useFetch from '../hooks/useFetch'

function ProductFetcher() {
  const [url, setUrl] = useState('https://api.escuelajs.co/api/v1/products')
  const { data: products, loading, error } = useFetch(url)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className='text-blue-800 font-bold pr-2'>Loading: </p>
        <div className="animate-spin w-7 h-7 border-4 border-blue-400 border-r-transparent rounded-full"></div>
      </div>
    )}
  
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <p className="text-red-600 font-bold mb-4">Error: {error}</p>
        </div>
      </div>
    )}

const colorArray = ['red', 'blue', 'green'];
const isProductsArray = Array.isArray(products);

return (
  <div className="min-h-screen bg-black p-5">
    <div className="grid grid-cols-4 gap-4 mx-auto">
      {isProductsArray && products.map((item, index) => (
        <div key={item.id || index} className="border-2 border-white rounded overflow-hidden">
          <div 
          className="w-full h-50" 
          style={{ backgroundColor: colorArray[index % colorArray.length] }}>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

export default ProductFetcher