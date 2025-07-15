import './pagescss/login.css';
const Login=()=>{
  return(
    <>

     <div className="container p-5 d-flex flex-column align-items-center">

        <form action="" method="post" className="form-control mt-5 p-4"
          style= {{height: 'auto', width: '380px', boxShadow: 'rgba(60, 64, 67, 0.3)  0px 1px 2px 0px rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
            <div className="row">
                <i className="fa fa-user-circle-o fa-3x mt-1 mb-2"
          style={{textAlign: 'center', color: 'green'}}></i>
                <h5 className="text-center p-4" 
          style={{fontWeight: '700'}}>Login Into Your Account</h5>
            </div>
            <div className="col-mb-3">
                <label for="email"><i 
                  className="fa fa-envelope"></i> Email</label>
                <input type="text" name="email" id="email"className="form-control" required/>
            </div>
            <div className="col mb-3 mt-3">
                <label for="password"><i
                  className="fa fa-lock"></i> Password</label>
                <input type="text" name="password" id="password" className="form-control" required/>
            </div>
            <div className="col mb-3 mt-3">
                <div className="logbtn">
                <button type="submit" 
                  className="btn btn-success bg-success" style={{fontWeight: '600'}}>Login</button>
                </div>
            </div>
            <div className="col mb-2 mt-4">
                <p className="text-center" 
                  style={{fontWeight: '600', color: 'navy'}}
                  ><a href="./register.php"
                        style={{textDecoration: 'none'}}>Create Account</a> OR <a href="./resetpassword.php"
                        style={{textDecoration: 'none'}}>Forgot Password</a></p>
            </div>
        </form>
    </div>
    </>);
}
export default Login;