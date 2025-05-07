import '../css/Pages.css';

function LoginPage() {
  return (
    <div className="login-container">
      <form className="login-form" action="/login" method="post">
          <table id="login" name="login">
            <tbody>
              <tr>
                  <td><label htmlFor="username" className="label">Username</label></td>
                  <td colSpan="2"><input type="text" id="username" name="username"/></td>
              </tr>
              <tr>
                  <td><label htmlFor="password" className="label">Password</label></td>
                  <td><input type="password" id="password" name="password" /></td>
                  <td><a href="/reset-password" style={{fontSize: "15px", textDecoration: "none", color:" #007bff"}}>Forgot password?</a></td>
              </tr>
              <tr>
                  <td></td>
                  <td colSpan="2" style={{textAlign: "cente"}}>
                      <button type="submit">Log in</button>
                      <button type="button" onClick={()=>{window.location.href='/'}}>Cancel</button>
                  </td>
              </tr>
            </tbody>
          </table>
      </form>
    </div>
  );
}

export default LoginPage;