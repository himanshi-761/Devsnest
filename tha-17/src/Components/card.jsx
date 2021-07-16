const Card = ({title,value}) => {
    return (
        <div className = "box">
            <h2 className ="ki">{title}</h2>            
        <p>You have consumed {value} cals today. <br></br></p>
        </div>
    );
    
};
export default Card;