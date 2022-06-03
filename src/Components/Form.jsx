import React from "react";

const Form = () => {
  return(
    <div className="container">
    <div className="col-md-12">
      <form action="">
        <div className="form-group">
          <label> Full Name: </label>
          <input type="text" placeholder="Full Name" required className="form-control"/>
        </div>

        <div className="form-group">
          <label> Username: </label>
          <input type="text" placeholder="Username" required className="form-control"/>
        </div>

        <div className="form-group">
          <label> Email: </label>
          <input type="email" placeholder="Email" required className="form-control"/>
        </div>

        <div className="form-group">
          <label> Password: </label>
          <input type="password" placeholder="Password" required className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Form;