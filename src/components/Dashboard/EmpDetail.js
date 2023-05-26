import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmpDetail() {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            <div className="container">
                <div className="card row" style={{ "textAlign": "left" }}>
                    <div className="card-title">
                        <h2>Employee Details</h2>
                    </div>
                    <div className="card-body"></div>

                    {empdata &&
                        <div>
                            <h2>The Employee name is : <b>{empdata.firstName} {empdata.lastName}</b>  ({empdata.id})</h2>
                            <h4>Contact Details</h4>
                            <h6>Email is : {empdata.email}</h6>
                            <h6>Phone is : {empdata.phone}</h6>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
            </div>
        </div >
    );
}

export default EmpDetail;