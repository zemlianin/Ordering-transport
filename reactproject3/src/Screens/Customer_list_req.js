// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/customer_new_req_style.css';
import '../Styles/customer_list_req_style.css';
import '../Styles/style.css';
import HeaderNav from '../Components/HeaderMain';
import LogoField from '../Components/LogoField';
import RequestInfo from '../Components/RequestInfo';
import FooterClass from '../Components/FooterClass';
import React from 'react';


var obj = [
  {
    name: "Артём",
    lastName: "Федоров",
    telephone: "+7(977) 777 77 77",
    beginDate: "12.06.2022",
    endDate: "12.06.2023",
    address: "Россия, Архангельская область",
    typeOfVehicle: "Погрузчик",
    priority: "Стандартный",
  },
]

function GetRequestInfoDB(props) {
  console.log("BD start");
  // fetch();

  if (props.infoOpened) {
    return (
      <div>
        <RequestInfo
          name={obj[0].name}
          lastName={obj[0].lastName}
          telephone={obj[0].telephone}
          beginDate={obj[0].beginDate}
          endDate={obj[0].endDate}
          address={obj[0].address}
          typeOfVehicle={obj[0].typeOfVehicle}
          priority={obj[0].priority}
          onClickHand={() => props.setInfoOpened(false)}
        />
      </div>
    )
  } else {
    return null;
  }
}

function GetListOfRequests(){
  console.log("BD start");
  // fetch();

  
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

export default function CustomerList() {
  const [infoOpened, setInfoOpened] = React.useState(false);

  return (
    <body>
      <HeaderNav />

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
                
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3" onClick={() => setInfoOpened(true)}>
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0 text-list">Россия, Чебоксарская область</h6>
                      <p className="mb-0 opacity-75">Погрузчик</p>
                    </div>
                    <div>
                      <small className="opacity-50 text-nowrap">c 12.06.2022</small>
                      <small className="opacity-50 text-nowrap">до 12.06.2023</small>
                    </div>
                  </div>
                </div>

                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0 text-list">Россия, Архангельская область</h6>
                      <p className="mb-0 opacity-75">Самосвал</p>
                    </div>
                    <div>
                      <small className="opacity-50 text-nowrap">c 01.02.2020</small>
                      <small className="opacity-50 text-nowrap">до 12.09.2020</small>
                    </div>
                  </div>
                </a>
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0 text-list">Россия, город Рудный</h6>
                      <p className="mb-0 opacity-75">Трактор</p>
                    </div>
                    <div>
                      <small className="opacity-50 text-nowrap">c 11.03.2019</small>
                      <small className="opacity-50 text-nowrap">до 23.09.2021</small>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

        {GetRequestInfoDB({infoOpened: infoOpened, setInfoOpened: setInfoOpened})}

      </main>

      <FooterClass />
    </body>
  );
}
