import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/enter_page.css';
import '../Styles/style.css';
import { Link } from "react-router-dom";
import LogoField from '../Components/LogoField';
import React from 'react';


export class Field {
  static login = "d";
}


function App() {
  // const [items, setItems] = React.useState([]);
  const [isInfoOpened, setInfoOpened] = React.useState(false);

  function onChangeInputLogin(event) {

    setLogin(event.target.value);
    if (login.length > 1) {
      setIsCustomer(true);
      // console.log(false + login.length);
    } else {
      setIsCustomer(false);
      // console.log(true + login.length);
    }
  }

  function setInputValue(event) {
    Field.login = login;
    console.log("Login: " + Field.login);
  }

  const [isCustomer, setIsCustomer] = React.useState(true);
  const [login, setLogin] = React.useState("");

  return (
    <div>
      <LogoField />

      <div>
        <div className="modal modal-sheet position-static d-block py-5 back2"
          tabIndex="-1"
          role="dialog"
          id="modalSheet"
          style={{ height: window.screen.height }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow list-margin">
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5 text">ВХОД</h1>
              </div>

              <div className="modal-body py-0 text">
                <div className="form-check form-switch border-top-0 switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                  <label className="form-check-label text-p" htmlFor="flexSwitchCheckDefault"> Добрый вечер! Вы диспетчер?</label>
                </div>

                <div className="modal-footer flex-column border-top-0">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Login"
                    required=""
                    onChange={onChangeInputLogin} />
                  <div className="invalid-feedback">
                    Имя введено некорректно.
                  </div>
                </div>

                <div className="modal-footer flex-column border-top-0">
                  <button
                    type="button"
                    className="btn btn-lg btn-warning w-100 mx-0 text-p"
                    data-bs-dismiss="modal">
                    <Link
                      to="/dispatcher"
                      style={{ textDecoration: 'none' }}>
                      <p className="text-p">ПРОДОЛЖИТЬ (ДИСПЕТЧЕР)</p>
                    </Link>
                  </button>
                </div>
                {/* {isCustomer ? */}
                <div className="modal-footer flex-column border-top-0">
                  <button
                    type="button"
                    className="btn btn-lg btn-warning w-100 mx-0 text-p"
                    data-bs-dismiss="modal"
                    onClick={setInputValue}
                  >
                    <Link
                      to="/customer"
                      style={{ textDecoration: 'none' }}>
                      <p className="text-p">ПРОДОЛЖИТЬ (ЗАКАЗЧИК)</p>
                    </Link>
                  </button>
                </div>

                {/* : null } */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
