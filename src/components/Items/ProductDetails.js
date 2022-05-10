import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css';

const ProductDetails = props =>{
    const param = useParams();
    return <section className={classes.product}>

        <h1>product name</h1>
        <div>{param.productID}</div>
    </section>

};

export default ProductDetails;