export const cars = [
  {
    name: "Range Rover",
    category: "SUV",
    description: "Ipsum is not simply random",
    price: 150,
    image: "https://cms.code4rest.com/wp30/wp-content/uploads/2023/12/car-01-1.jpg",
    features: ["Auto Gear", "7 Seat", "Disal"]
  },
  {
    name: "Mercedes Benz",
    category: "Luxury",
    description: "Premium luxury sedan with advanced features",
    price: 175,
    image: "https://cms.code4rest.com/wp30/wp-content/uploads/2023/12/car-02-1.jpg",
    features: ["Auto Gear", "4 Seat", "Petrol"]
  },
  {
    name: "BMW X5",
    category: "SUV",
    description: "Sporty and luxurious SUV experience",
    price: 165,
    image: "https://cms.code4rest.com/wp30/wp-content/uploads/2023/12/car-03-1.jpg",
    features: ["Auto Gear", "5 Seat", "Hybrid"]
  },
  {
    name: "Tesla Model S",
    category: "Electric",
    description: "Future of automotive technology",
    price: 185,
    image: "https://cms.code4rest.com/wp30/wp-content/uploads/2023/12/car-04-1.jpg",
    features: ["Auto Pilot", "5 Seat", "Electric"]
  },
  {
    name: "Porsche 911",
    category: "Sports",
    description: "Ultimate sports car performance",
    price: 250,
    image: "https://cms.code4rest.com/wp30/wp-content/uploads/2023/12/car-04-1.jpg",
    features: ["Manual Gear", "2 Seat", "Petrol"]
  }
];

export type Car = (typeof cars)[number]; 