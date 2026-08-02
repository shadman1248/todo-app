import "./Product.css";
import Price from "./Price";


function Product({title,idx}) {

    let oldPrices=["1500","5000","1000","500"];
    let newPrices=["1350","4500","900","450"];
    let discription=[
        ["8000 DPI","5 Programmablep-buttons"],
        ["intuitive surface","designed for i-Pad pro"],
        ["designed for i-pad pro","intivutive surface"],
        ["wireless","optical orientation"],
    ];

    return (

    <div className="Product">

        <h4>{title}</h4>
        <p>{discription[idx][0]}</p>
        <p>{discription[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />


    </div>
    );
}

export default Product;