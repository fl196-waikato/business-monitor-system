
function ResetPasswordPage(){
    return (
        <div>
            <form action="/reset-password" method="post">
                <table id="reset-password" name="reset-password">
                    <tbody>
                        <tr>
                            <td><label htmlFor="new-password">New Password</label></td>
                            <td colSpan="2" style={{textAlign: "center"}}><input type="password" id="new-password" name="new-password" /></td>
                        </tr>
                        <tr>
                            <td colSpan="3" style={{textAlign: "center"}}>
                                <button type="submit">Submit</button>
                                <button type="button" onClick={()=> {window.location.href='/'}}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default ResetPasswordPage;
