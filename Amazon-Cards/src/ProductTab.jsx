import Product from './Product';


function ProductTab() {
    let styles={display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"};

return (
    <div style={styles}>
    <Product title="Logitech Combo" idx={0}/>    
    <Product title="Apple Pencil" idx={1}/>
    <Product title="Zebronics Keyboard" idx={2}/>
    <Product title="Ptronics Mouse" idx={3}/>
    </div>
);  
}

export default ProductTab;