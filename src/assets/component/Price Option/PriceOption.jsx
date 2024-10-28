import PropTypes from "prop-types"
import Feature from "../Feature/Feature";

export default function PriceOption({option}){
const {name, price, feature} = option;
    return(
        <div className="bg-yellow-200 text-black rounded-md p-5 text-center">
<h2 className="p-5">
    <span className="text-3xl">{price}</span>
    <span className="text-3xl">$/mon</span>
</h2>
<Feature feature={feature}></Feature>
{/* {
    feature.map((feature, i) => <Feature key={i} feature={feature}></Feature>)
} */}
        </div>
    )
};


PriceOption.propTypes = {
    option: PropTypes.object
}










