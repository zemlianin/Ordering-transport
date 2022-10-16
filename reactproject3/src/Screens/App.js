import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/enter_page.css';
import '../Styles/style.css';
import { Link } from "react-router-dom";
import LogoField from '../Components/LogoField';
import React from 'react';

// Группы объектов
// var groups = [
//     {
//         name: "Известные памятники",
//         style: "islands#redIcon",
//         items: [
//             {
//                 center: [50.426472, 30.563022],
//                 name: "Монумент &quot;Родина-Мать&quot;"
//             },
//             {
//                 center: [50.45351, 30.516489],
//                 name: "Памятник &quot;Богдану Хмельницкому&quot;"
//             },
//             {
//                 center: [50.454433, 30.529874],
//                 name: "Арка Дружбы народов"
//             }
//         ]
//     },
//     {
//         name: "Покушайки",
//         style: "islands#greenIcon",
//         items: [
//             {
//                 center: [50.50955, 30.60791],
//                 name: "Ресторан &quot;Калинка-Малинка&quot;"
//             },
//             {
//                 center: [50.429083, 30.521708],
//                 name: "Бар &quot;Сало-бар&quot;"
//             },
//             {
//                 center: [50.450843, 30.498271],
//                 name: "Абсент-бар &quot;Палата №6&quot;"
//             },
//             {
//                 center: [50.454834, 30.516498],
//                 name: "Ресторан &quot;Спотыкач&quot;"
//             }
//         ]
//     },
//     {
//         name: "Оригинальные музейчики",
//         style: "islands#orangeIcon",
//         items: [
//             {
//                 center: [50.443334, 30.520163],
//                 name: "Музей грамзаписи и старинных музыкальных инструментов"
//             },
//             {
//                 center: [50.446977, 30.505269],
//                 name: "Музей истории медицины или Анатомический театр"
//             },
//             {
//                 center: [50.452512, 30.530889],
//                 name: "Музей воды. Водно-информационный центр"
//             }
//         ]
//     },
//     {
//         name: "Красивости",
//         style: "islands#blueIcon",
//         items: [
//             {
//                 center: [50.45987, 30.516174],
//                 name: "Замок Ричарда-Львиное сердце"
//             },
//             {
//                 center: [50.445049, 30.528598],
//                 name: "&quot;Дом с химерами&quot;"
//             },
//             {
//                 center: [50.449156, 30.511809],
//                 name: "Дом Рыцаря"
//             }
//         ]
//     }
// ];

// var dataBase = [
//     {
//         name: "Чайка Сервис 2784SG",
//         number: "А095АА/99",
//         items: [
//             {
//                 center: [50.426472, 30.563022],
//                 name: "Монумент &quot;Родина-Мать&quot;"
//             },
//             {
//                 center: [50.45351, 30.516489],
//                 name: "Памятник &quot;Богдану Хмельницкому&quot;"
//             },
//             {
//                 center: [50.454433, 30.529874],
//                 name: "Арка Дружбы народов"
//             }
//         ]
//     }]

// const coordinates = [
//     [55.684758, 37.738521],
//     [57.684758, 39.738521]
// ];

// const Maps = () => (
//     <YMaps query={{
//         ns: 'use-load-option',
//         load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
//     }}>
//         <Map defaultState={{
//             center: [55.75, 37.57],
//             zoom: 9,
//             controls: ['zoomControl', 'fullscreenControl']
//         }}>
//             <Placemark defaultGeometry={coordinates} properties={{
//                 balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
//             }} />
//         </Map>
//     </YMaps>
// )



function App() {
  const [items, setItems] = React.useState([]);
  const [isInfoOpened, setInfoOpened] = React.useState(false);

  var login = "Anya";
  React.useEffect(() => {
    fetch(("https://localhost:7090/Customer/get?userName=" + login))
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // console.log(json[0]);
        setItems(json[0]);
      });
  }, []);
  console.log(items);

  function onChangeInputLogin(event) {

    console.log(event.target.value.length);
    setCount(event.target.value.length);
    if (count > 0) {
      setIsCustomer(false);
    } else {
      setIsCustomer(true);
    }

  }

  const [isCustomer, setIsCustomer] = React.useState(true);
  const [count, setCount] = React.useState(-1);

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

                {/* {isCustomer ? */}
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
                {/* : */}
                <div className="modal-footer flex-column border-top-0">
                  <button
                    type="button"
                    className="btn btn-lg btn-warning w-100 mx-0 text-p"
                    data-bs-dismiss="modal"
                  // onClick={}
                  >
                    <Link
                      to="/customer"
                      style={{ textDecoration: 'none' }}>
                      <p className="text-p">ПРОДОЛЖИТЬ (ЗАКАЗЧИК)</p>
                    </Link>
                  </button>
                </div>
                {/* } */}


                {/* <div className="modal-body py-0 text">
                  <p>Пожалуйста, выберите роль, которая необходима Вам для продолжения работы.</p>
                </div>
                <div className="modal-footer flex-column border-top-0">
                  <button
                    onClick="document.location='main_customer.html'"
                    type="button"
                    className="btn btn-lg btn-outline-light w-100 mx-0 mb-2 text-p "
                  ><Link
                    to="/customer"
                    style={{ textDecoration: 'none' }}>
                      <p className="text-p">ЗАКАЗЧИК</p>
                    </Link></button>
                  <button
                    onClick="document.location='main_dispatcher.html'"
                    type="button"
                    className="btn btn-lg btn-warning w-100 mx-0 text-p"
                    data-bs-dismiss="modal"
                  ><Link
                    to="/dispatcher"
                    style={{ textDecoration: 'none' }}>
                      <p className="text-p " >ДИСПЕТЧЕР</p>
                    </Link></button>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// export default class App extends Component {
//     static displayName = App.name;

//     constructor(props) {
//         super(props);
//         this.state = { forecasts: [], loading: true };
//     }

//     componentDidMount() {
//         this.populateWeatherData();
//     }

//     static renderForecastsTable(forecasts) {
//         return (
//             <table className='table table-striped' aria-labelledby="tabelLabel">
//                 <thead>
//                     <tr>
//                         <th>Date</th>
//                         <th>Temp. (C)</th>
//                         <th>Temp. (F)</th>
//                         <th>Summary</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {forecasts.map(forecast =>
//                         <tr key={forecast.date}>
//                             <td>{forecast.date}</td>
//                             <td>{forecast.temperatureC}</td>
//                             <td>{forecast.temperatureF}</td>
//                             <td>{forecast.summary}</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         );
//     }

//     render() {
//         let contents = this.state.loading
//             ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//             : App.renderForecastsTable(this.state.forecasts);

//         return (
//             <div>
//                 <h1 id="tabelLabel" >Weather forecast</h1>
//                 <p>This component demonstrates fetching data from the server.</p>
//                 {contents}
//             </div>
//         );
//     }

//     async populateWeatherData() {
//         console.log("+++");
//         const response = await fetch("https://localhost:7090/Form/get?name=-&lastName=-&telephon=-&address=-&typeOfVehicle=-");
//         const data = await response.json();
//         console.log(data);
//       //  this.setState({ forecasts: data, loading: false });
//     }
// }
