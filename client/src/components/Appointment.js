import React from "react";
import { Link } from "react-router-dom";

let style = {
    appointment: {
        height: "600px",
        width: "400px",
        border: "4px solid #2e849e",
        borderRadius: "10px",
        margin: "1%",
        padding: "1%",
        fontFamily: "Oswald"
    },
    button: {
        float: "right",
        background: "#2e849e",
        color: "white",
        padding: "5px 15px 5px 15px",
        borderRadius: "10px",
        cursor: "pointer"
    }
}

class Appointment extends React.Component {
    state = {};

    render() {
        var obj = true
        return (
            <div style={style.appointment} className="appointment">
                <span>OP: </span><Link to="profile/Kevin123">Kevin123</Link> <span>(92pts)</span>
                <hr></hr>
                <div>Topic: [req] Help me with functions</div>
                <hr></hr>
                <div>[5:30pm] <Link to="profile/Mentor123">Mentor123</Link> (20pts): I can help you!</div>
                <button>accept</button>
                <hr></hr>
                <div>[9:00am] <Link to="profile/CoolGuy231">CoolGuy231</Link> (602pts): I am a instructor</div>
                <button>accept</button>
                <hr></hr>
                <div>[11:00pm] <Link to="profile/UncoolKid">UncoolKid</Link> (-23pts): You suck</div>
                <button disabled={obj} id="kevin">accept</button>
                <hr></hr>

                <div className="form-group">
                    <textarea placeholder="Comment here" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Please select a time</option>
                        <option>10:00 am</option>
                        <option>10:30 am</option>
                        <option>11:00 am</option>
                        <option>11:30 am</option>
                        <option>12:00 pm</option>
                        <option>12:30 pm</option>
                        <option>1:00 pm</option>
                    </select>
                </div>

                <div data-toggle="tooltip" data-placement="top" title="By committing, you agree to connect at the established time" style={style.button}>Commit</div>

            </div>
        );
    };
};

export default Appointment;