import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Category({ cart, setCart }) {
  const { type } = useParams();

  // Fake data (لاحقًا من API)
  const products = [
    {
      id: 1,
      name: 'Chocolate Cake',
      price: 25,
      category: 'cake',
      image: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa',
    },
    {
      id: 2,
      name: 'Red Velvet Cake',
      price: 30,
      category: 'cake',
      image: 'https://images.unsplash.com/photo-1614707267537-2f1c9b0c1e1d',
    },
    {
      id: 3,
      name: 'Butter Cookie',
      price: 5,
      category: 'cookie',
      image: 'https://images.unsplash.com/photo-1608198093002-de8c5c38b2a9',
    },
    {
      id: 4,
      name: 'Vanilla Ice Cream',
      price: 8,
      category: 'icecream',
      image: 'https://images.unsplash.com/photo-1505253716362-afaea1b9b69d',
    },
  ];

  const filtered = products.filter((p) => p.category === type);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>{type.toUpperCase()}</h2>

      <div style={styles.grid}>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    padding: '40px',
    backgroundColor: '#E8F1FA',
  },
  title: {
    textAlign: 'center',
    color: '#C9A24D',
    marginBottom: '30px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  },
};

export default Category;
