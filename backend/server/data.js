import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jacqueline',
      email: 'hello@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Sunny',
      email: 'hello2@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    }
  ],

  products: [
    {
      name: 'Cherry Tug',
      category: 'Toy',
      image: '/images/cherry-tug.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Play tug with these cute cherries!',
      stock: 20,
    },
    {
      name: 'Chocolate Toy',
      category: 'Toy',
      image: '/images/chocolate.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Gimbap Toy',
      category: 'Toy',
      image: '/images/gimbap.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Yummy Gimbap',
      stock: 20,
    },
    {
      name: 'Lemonade',
      category: 'Toy',
      image: '/images/lemonade.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Lemonade',
      stock: 20,
    },
    {
      name: 'Loaf',
      category: 'Toy',
      image: '/images/loaf.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Meat',
      category: 'Toy',
      image: '/images/meat.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Playbook',
      category: 'Toy',
      image: '/images/playbook.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Pretzel',
      category: 'Toy',
      image: '/images/pretzel.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Rollcake',
      category: 'Toy',
      image: '/images/rollcake.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Toast',
      category: 'Toy',
      image: '/images/toast.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Yoooboo Sushi',
      category: 'Toy',
      image: '/images/yooboo.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    },
    {
      name: 'Clam & Pearl',
      category: 'Toy',
      image: '/images/clam.png',
      price: 20,
      brand: 'Bite Me',
      description: 'Cutest chocolate',
      stock: 20,
    }
  ]
}

export default data;