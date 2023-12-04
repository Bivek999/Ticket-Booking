import './Status.css';
import {ReactComponent as Seatsvg} from '../../assets/Seat.svg';


export default function Status(){

    return (
        <div id="status">
            <div className="status-inner-wrapper">
                <div className="available">
                    <span><Seatsvg fill='none' width={30} /></span>
                    <h2>Available</h2>
                </div>

                <div className="unavailable">
                    <span><Seatsvg fill='#808080' width={30} /></span>
                    <h2>Sold</h2>
                </div>
                
                <div className="selection">
                    <span><Seatsvg fill='#88C900' width={30} /></span>
                    <h2>Your Selection</h2>
                </div>
            </div>
        </div>
    )
}
