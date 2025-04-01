import React from "react";
import CarCard from "../CarCard";
import { cars } from "@/app/_data/cars";

const Cars = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
