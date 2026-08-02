function Price({oldPrice,newPrice}) {

    let oldStyles={textDecoration:"line-through",color:"green"};
    let newStyles={fontWeight:"bold",color:"yellow"};
    let styles={backGroundColor:"#e7e0cb",height:"50px",width:"200px",borderBottomLeftRadius:"14px",borderBottomRightRadius:"14px"};

return (
    <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp;
        <span style={newStyles}>{newPrice}</span>
    </div>  
);
}

export default Price;