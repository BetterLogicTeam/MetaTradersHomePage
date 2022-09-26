import Button from "../Button/Button";
import './NftCard.css'
const NftCard = ({imgsrc,heading,btntext,btnlink,linkdata}) => {
    return ( 
        <div className="nftcard rounded-3 p-3 mx-2">
            <img src={imgsrc} />
            <h5 className=" fs-4 py-2">{heading}</h5>
            <div className=" w-100 my-3" style={{height:'1px',background:'white'}}></div>
           
           <a href={linkdata} target="_blank"><Button text={btntext}  /></a> 
        </div>
     );
}
 
export default NftCard;