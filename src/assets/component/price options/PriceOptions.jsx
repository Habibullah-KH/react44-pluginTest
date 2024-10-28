import PriceOption from "../Price Option/PriceOption";
const PriceOptions = () => {

    const priceOptions =
        [
            {
              "id": 1,
              "price": 29.99,
              "name": "Monthly Membership",
              "feature": "Access to all gym facilities, group classes, and 2 personal training sessions"
            },
            {
              "id": 2,
              "price": 79.99,
              "name": "Quarterly Membership",
              "feature": "Access to all gym facilities, group classes, 5 personal training sessions, and nutrition consultation"
            },
            {
              "id": 3,
              "price": 149.99,
              "name": "Semi-Annual Membership",
              "feature": "Access to all gym facilities, group classes, 10 personal training sessions, nutrition consultation, and wellness plan"
            },
            {
              "id": 4,
              "price": 249.99,
              "name": "Annual Membership",
              "feature": "Access to all gym facilities, group classes, unlimited personal training sessions, nutrition consultation, wellness plan, and guest passes"
            },
            {
              "id": 5,
              "price": 15.99,
              "name": "One-Day Pass",
              "feature": "Access to all gym facilities and group classes for one day"
            }
          ]
          

    return (
        <div className="m-12">
            <h2 className="text-3xl">Best Price in the town</h2>
            <div className="flex flex-wrap gap-6 ">
      {
      priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
      }
            </div>
        </div>
    );
};

export default PriceOptions;