import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/customer_new_req_style.css';
import '../Styles/customer_list_req_style.css';
import '../Styles/style.css';
import HeaderNav from '../Components/HeaderMainCustomer';
import LogoField from '../Components/LogoField';
import RequestInfo from '../Components/RequestInfo';
import RequestForm from '../Components/RequestForm';
import FooterClass from '../Components/FooterClass';
import { Link } from "react-router-dom";
import React, { Component } from 'react';

import RequestInfoEdit from '../Components/RequestInfoEdit';

var currentObj = {
  name: "Default",
  lastName: "Default",
  telephone: "+7(900) 000 00 00",
  beginDate: "01.01.2000",
  endDate: "02.01.2000",
  address: "Default, Default",
  typeOfVehicle: "Default",
  priority: "Default",
}

function GetRequestInfoDB(props) {
  console.log("BD start");
  // fetch();

  if (props.infoOpened) {
    return (
      <div>
        <RequestInfoEdit
          name={props.name}
          lastName={props.lastName}
          telephone={props.telephone}
          beginDate={props.beginDate}
          endDate={props.endDate}
          address={props.address}
          typeOfVehicle={props.typeOfVehicle}
          priority={props.priority}
          onClickHand={() => props.setInfoOpened(false)}
        />
      </div>
    )
  } else {
    return null;
  }
}


async function onSubmit(event) {
  // // console.log(event);
  // console.log(currentRequest);
  // // alert(1);
  // console.log("+++");
  // var url = new URL("https://localhost:7090/Form/post?");
  // url.search = new URLSearchParams(currentRequest).toString();
  // const response = await fetch(url);
  // console.log(response);
  // const data = response.json();
  // console.log(data);
}

function SetCurrent(item) {
  currentObj = item;
}

export default function DispatcherList() {
  const [items, setItems] = React.useState([]);
  const [isInfoOpened, setInfoOpened] = React.useState(false);

  React.useEffect(() => {
    fetch(("https://634b7709317dc96a30854e9b.mockapi.io/items"))
    // fetch(("https://localhost:7090/Customer/get?userName=Anya"))
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json[0]);
        setItems(json);
      });
  }, []);

  // React.useEffect(() => {
  //   console.log("+");
  // }, [infoOpened]);

  return (
    <div>
      <div>
        <header className="py-2 bg-light border-bottom">
          <div className="container d-flex flex-wrap">
            <ul className="nav me-auto">
              <li className="nav-item hov1">
                <Link
                  to="/dispatcher"
                  style={{ textDecoration: 'none' }}>
                  <p className="link-dark px-2 text-menu text-menu">СПИСОК ЗАЯВОК</p>
                </Link>
                <div className="bl_yel1"></div>
              </li>
              <li className="nav-item hov2">
                <Link
                  to="/dispatcher-map"
                  style={{ textDecoration: 'none' }}>
                  <p className="link-dark px-2 text-menu text-menu">КАРТА</p>
                </Link>
                <div className="bl_yel2"></div>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <h5 className="nav-link link-dark px-2 text-menu">ДИСПЕТЧЕР</h5>
              </li>
            </ul>
          </div>
        </header>
      </div>

      <LogoField />

      <main >
        <div className="modal modal-sheet position-static d-block py-5 back4"
          tabIndex="-1" role="dialog" id="modalSheet"
          style={{ height: window.screen.height }}>
          <div className="container form-list">
            <div className="w-auto modal-content rounded-4 shadow list-group">
              <div className="col-md-7 col-lg-8 list">
                <h4 className="mb-3 text">СПИСОК ЗАЯВОК</h4>
                <form className="needs-validation" noValidate="">
                  <div className="row g-3">

                    <div className="col-6">
                      <label htmlFor="date" className="form-label text">Начальная дата</label>
                      <input type="text" className="form-control" id="date_start"
                        placeholder="01.01.2001" />
                      <div className="invalid-feedback">
                        Пожалуйста введите начальную дату корректно.
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="date" className="form-label text">Конечная дата</label>
                      <input type="text" className="form-control" id="date_finish"
                        placeholder="02.02.2025" />
                      <div className="invalid-feedback">
                        Пожалуйста введите конечную дату корректно.
                      </div>
                    </div>

                    <div className="col-md-12">
                      <hr />
                    </div>

                    <div className="col-md-12">
                      <label htmlFor="car" className="form-label text">Тип машины</label>
                      <select className="form-select text" id="car" required="">
                        <option value="">Выберите тип машины</option>
                        <option>Погрузчик</option>
                        <option>Трактор</option>
                        <option>Самосвал</option>
                      </select>
                      <div className="invalid-feedback">
                        Выберите корректный тип машины.
                      </div>
                    </div>

                    <div className="col-md-12">
                      <button className="w-100 btn btn-warning btn-lg text-p" type="submit">ПРИМЕНИТЬ ФИЛЬТР</button>
                    </div>
                  </div>
                </form>
              </div>


              <div className="list-group w-auto bot-block">
                {items.map((item) =>
                  <RequestForm
                    name={item.name}
                    lastName={item.lastName}
                    telephone={item.telephone}
                    address={item.address}
                    typeOfVehicle={item.typeOfVehicle}
                    beginDate={item.beginDate}
                    endDate={item.endDate}
                    priority={item.priority}
                    comment={item.comment}
                    SetCurrent={(item) => SetCurrent(item)}
                    setInfoOpened={() => setInfoOpened(true)}
                  />
                )}

              </div>
            </div>
          </div>
        </div>

        {isInfoOpened ?
          <RequestInfoEdit
            name={currentObj.name}
            lastName={currentObj.lastName}
            telephone={currentObj.telephone}
            beginDate={currentObj.beginDate}
            endDate={currentObj.endDate}
            address={currentObj.address}
            typeOfVehicle={currentObj.typeOfVehicle}
            priority={currentObj.priority}
            comment={currentObj.comment}
            onClickHand={() => setInfoOpened(false)}
          /> : null
        }
        {/* {GetRequestInfoDB({ infoOpened: isInfoOpened, setInfoOpened: setInfoOpened })} */}

      </main>

      <FooterClass />
    </div>
  );
}
