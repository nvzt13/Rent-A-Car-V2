import React from "react";

interface PromotionCardProps {
  title: string;
  description: string;
}

const PromotionCard = ({ title, description }: PromotionCardProps) => {
  return (
    <div className="text-center p-6">
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export const Promotion = () => {
  const promotions = [
    {
      title: "Tarih & Konum",
      description:
        "Uzun zamandır bilinen bir gerçektir ki, insanlar bir şeyin düzenine bakarken dikkatleri dağılabilir.",
    },
    {
      title: "Bir Araç Seçin",
      description:
        "Uzun zamandır bilinen bir gerçektir ki, insanlar bir şeyin düzenine bakarken dikkatleri dağılabilir.",
    },
    {
      title: "Rezervasyon Yapın",
      description:
        "Uzun zamandır bilinen bir gerçektir ki, insanlar bir şeyin düzenine bakarken dikkatleri dağılabilir.",
    },
    {
      title: "Yolculuğunuzun Tadını Çıkarın!",
      description:
        "Uzun zamandır bilinen bir gerçektir ki, insanlar bir şeyin düzenine bakarken dikkatleri dağılabilir.",
    },
  ];

  return (
    <section className="bg-[#1a1d24] py-16 lg:py-36">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promotions.map((promotion, index) => (
            <PromotionCard
              key={index}
              title={promotion.title}
              description={promotion.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
//test
export default Promotion;
