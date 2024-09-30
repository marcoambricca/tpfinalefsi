// Import images from the assets folder
import tShirtImage from '../../assets/images/tshirt.png';
import jeansImage from '../../assets/images/jeans.png';
import jacketImage from '../../assets/images/jacket.png';
import sneakersImage from '../../assets/images/sneakers.png';
import windbreakerImage from '../../assets/images/windbreaker.png';
import socksImage from '../../assets/images/socks.png';

const products = [
  {
    id: 1,
    name: 'T-shirt',
    price: 19.99,
    image: tShirtImage,
  },
  {
    id: 2,
    name: 'Jeans',
    price: 49.99,
    image: jeansImage,
  },
  {
    id: 3,
    name: 'Jacket',
    price: 89.99,
    image: jacketImage,
  },
  {
    id: 4,
    name: 'Sneakers',
    price: 59.99,
    image: sneakersImage,
  },
  {
    id: 5,
    name: 'Windbreaker',
    price: 129.99,
    image: windbreakerImage,
  },
  {
    id: 6,
    name: 'Socks',
    price: 7.99,
    image: socksImage,
  }
];

export default products;