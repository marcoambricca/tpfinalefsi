import tShirtImage from '../../assets/images/tshirt.png';
import jeansImage from '../../assets/images/jeans.png';
import jacketImage from '../../assets/images/jacket.png';
import sneakersImage from '../../assets/images/sneakers.png';
import windbreakerImage from '../../assets/images/windbreaker.png';
import socksImage from '../../assets/images/socks.png';

const Products = [
  {
    id: 1,
    name: 'T-shirt',
    type: 'Shirts',
    price: 19.99,
    image: tShirtImage,
  },
  {
    id: 2,
    name: 'Jeans',
    type: 'Pants',
    price: 49.99,
    image: jeansImage,
  },
  {
    id: 3,
    name: 'Jacket',
    type: 'Jackets',
    price: 89.99,
    image: jacketImage,
  },
  {
    id: 4,
    name: 'Sneakers',
    type: 'Shoes',
    price: 59.99,
    image: sneakersImage,
  },
  {
    id: 5,
    name: 'Windbreaker',
    type: 'Jackets',
    price: 129.99,
    image: windbreakerImage,
  },
  {
    id: 6,
    name: '4-pack socks',
    type: 'Socks',
    price: 7.99,
    image: socksImage,
  }
];

export default Products;