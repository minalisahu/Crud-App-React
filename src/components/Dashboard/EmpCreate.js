import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

    function EmpCreate() {
    const[id,idchange]=useState("");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone ]= useState('');

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();

      if (!firstName || !lastName || !email || !phone ) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true,
        });
      }

      const newEmployee={firstName,lastName,email,phone};

      fetch("http://localhost:8000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newEmployee)
      }).then((res)=>{
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
          });
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })
    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                <input value={id} type="hidden" disabled="disabled" className="form-control"></input>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input
                                            id="firstName"
                                            type="text"
                                            name="firstName"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input
                                            id="lastName"
                                            type="text"
                                            name="lastName"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            />        
                                         </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                            id="phone"
                                            type="number"
                                            name="phone"
                                            value={phone}
                                            onChange={e => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-primary" type="submit">Save</button>
                                           <Link className="btn btn-danger btn-xs "  to="/" >Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default EmpCreate;