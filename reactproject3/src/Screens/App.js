import '../Styles/App.css';
// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/enter_page.css';
import '../Styles/style.css';
import { Link } from "react-router-dom";

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
    return (
        <div>
            <header className="p-3 border">
                <div className="px-3 py-2 text-bg-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <span className="bi me-2">
                                    <img src="https://polyus.com/img/logo_dark_ru.svg" width="200" height="40" alt="company pic" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <body>
                <div className="modal modal-sheet position-static d-block py-5 back"
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
                            </div>
                        </div>
                    </div>
                </div>
            </body>
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
//         const response = await fetch("https://localhost:7090/weatherforecast");
//         const data = await response.json();
//         console.log(data);
//       //  this.setState({ forecasts: data, loading: false });
//     }
// }
