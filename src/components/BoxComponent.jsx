
const BoxComponent = ({boxColor,boxHeight,boxWidth}) => {
    
    

    return(
        <div>
            <div className="container">
                <div className="my-3" style={{
                    background: boxColor,
                    height: boxHeight + "px",
                    width: boxWidth + "px"
                    }}>
                </div>
            </div>
        </div>
    );


}

export default BoxComponent;

