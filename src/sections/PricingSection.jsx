
import { pricingData } from "../assets/data";
import PricingTier from "../components/PricingTier";

const PricingSection = () => {
  return (
    <section id="pricing" className="container mx-auto px-4 py-24">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display">
          Choose your
          <span className="grad1 clash-display"> Trading Plan</span>
        </h2>

        <p className="text-lg text-zinc-300/80">
          Choose from a variety of plans that best meets your algo trading needs.
        </p>
      </div>
      {/* Subscrpition card */}

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:cols-3 gap-8 max-w-6xl mx-auto">
        {pricingData.map(
          ({ _id, isPopular, name, description, features, price }) => (
            <PricingTier
              key={_id}
              isPolular={isPopular}
              name={name}
              price={price}
              description={description}
              features={features}
            />
          )
        )}
      </div>
    </section>
  );
};

export default PricingSection;
