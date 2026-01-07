import { Link } from 'react-router-dom';

function CategoryCard({ title, image, link }) {
  return (
    <Link to={link} style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h3>{title}</h3>
    </Link>
  );
}

const styles = {
  card: {
    width: '220px',
    backgroundColor: '#FCF9EA',
    borderRadius: '20px',
    padding: '20px',
    textDecoration: 'none',
    color: '#6B4E4E',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    borderRadius: '15px',
  },
};

export default CategoryCard;
