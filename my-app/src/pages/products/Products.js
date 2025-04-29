import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(8);

  const getProducts = async () => {
    try {
      const response = await axios.get('/db.json');
      console.log('raw data:', response.data);

      const items = response.data.properties || [];
      const mappedData = items.map((item) => ({
        id: item.id,
        title: `${item.type} - ${item.location}`,
        category: item.purpose.toUpperCase(),
        description: `Located in ${item.location}, this is a ${item.type} property available for ${item.purpose}.`,
        price: item.price.replace(/[^0-9]/g, ''),
        rating: {
          rate: (Math.random() * 2 + 3).toFixed(1),
          count: Math.floor(Math.random() * 200) + 1
        },
        image: item.image
      }));

      setProducts(mappedData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    console.log('useEffect triggered');
    getProducts();
  }, []);

  return (
    <div style={{ color: 'wheat' }}>
      <h1>Available Properties</h1>
      <div className="product_data" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.slice(0, loadMoreCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button
        onClick={() => setLoadMoreCount(loadMoreCount + 5)}
        style={{ color: 'white', background: 'red', marginTop: '20px' }}
      >
        Load More
      </button>
    </div>
  );
}
