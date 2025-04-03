import { useNavigate } from "react-router-dom";

export function WelcomePage() {

    const navigation = useNavigate();

    const login = () => {
        navigation('/login', { replace: false });
      }

      const box = () => {
        navigation('/box', { replace: false });
      }
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary m-2" onClick={login}>Admin</button>
                        <button type="button" className="btn btn-primary m-2" onClick={box}>Cash Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}