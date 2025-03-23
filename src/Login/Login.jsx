import "./Login.css";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigation = useNavigate();
  const login = () =>{
    navigation('/main', { replace:true});
  }
  return (
    <>
      <div className="container vh-100 d-flex align-items-center justify-content-center">
        <div className="row  w-100">
          <div className="col d-flex justify-content-center ">
            <div className="card p-3">
              <form className="m-3" onSubmit={login}>
                <div className="mb-4">
                  <label
                    htmlFor="inputUsername"
                    className="userNameLabel form-label"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputUsername"
                    placeholder="Ex:Cuazan"
                  ></input>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="inputPassword"
                    className="passwordLabel form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                  ></input>
                </div>
                <button type="submit" className="btn submit mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
