import '../Styles/App.css';
// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/customer.css';
import '../Styles/style.css';
import CustomerClass from '../CustomerClass';


var currentRequest = {
    name: "",
    lastName: "",
    telephon: "",
    address: "",
    beginDate: "",
    endDate: "",
    typeOfVehicle: "",
    priotity: "",
}

var boolCheck = [
    false,
    false
]

function onChangeName(event) {
    currentRequest.name = event.target.value;
    // console.log(event);
    // console.log(currentRequest);
    // // alert(1);
    // console.log("+++");
    // // console.log("https://localhost:7090/Form/post?name=" + currentRequest.name + "&lastName=" + currentRequest.lastName +
    // //     "&telephon=" + currentRequest.telephon + "&address=" + currentRequest.address + "&typeOfVehicle=" + currentRequest.typeOfVehicle);

    // var url = new URL("https://localhost:7090/Form/post?");
    // url.search = new URLSearchParams(currentRequest).toString();
    // const response = await fetch(url);
    // console.log(response);
    // const data = response.json();
    // console.log(data);
}
function onChangeLastName(event) {
    currentRequest.lastName = event.target.value;
}
function onChangeTelephon(event) {
    currentRequest.telephon = event.target.value;
}
function onChangeAddress(event) {
    currentRequest.address = event.target.value;
}
function onChangeBeginDate(event) {
    currentRequest.beginDate = event.target.value;
}
function onChangeEndDate(event) {
    currentRequest.endDate = event.target.value;
}
function onSelectVehicle(event) {
    currentRequest.typeOfVehicle = event.target.value;
}
function onSelectPriority(event) {
    currentRequest.priotity = event.target.value;
}

async function onSubmit(event) {
    // console.log(event);
    console.log(currentRequest);
    // alert(1);
    console.log("+++");
    var url = new URL("https://localhost:7090/Form/post?");
    url.search = new URLSearchParams(currentRequest).toString();
    const response = await fetch(url);
    console.log(response);
    const data = response.json();
    console.log(data);
}

export default function Customer() {
    return (
        <body>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item hov0">
                            <a href="#" className="nav-link link-dark px-2 text-menu">НОВАЯ ЗАЯВКА</a>
                            <div className="bl_yel0"></div>
                        </li>
                        <li className="nav-item hov1">
                            <a href="#" className="nav-link link-dark px-2 text-menu">СПИСОК ЗАЯВОК</a>
                            <div className="bl_yel1"></div>
                        </li>
                        <li className="nav-item hov2">
                            <a href="#" className="nav-link link-dark px-2 text-menu">КАРТА</a>
                            <div className="bl_yel2"></div>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link link-dark px-2 text-menu">ЗАКАЗЧИК</a></li>
                    </ul>
                </div>
            </nav>
            <header className="p-3 border">
                <div className="px-3 py-2 text-bg-white">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <span className="bi me-2">
                                    <img src="https://polyus.com/img/logo_dark_ru.svg" width="200" height="40" alt="img" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="bg-light">
                <div
                    className="modal modal-sheet position-static d-block py-5 back"
                    tabIndex="-1"
                    role="dialog"
                    id="modalSheet"
                    style={{ height: window.screen.height }}
                >
                    <div className="form-list modal-dialog" role="document">
                        <div className="modal-content rounded-4 shadow">

                            <div className="col-md-7 col-lg-8 list">
                                <h4 className="mb-3 text">ЗАЯВКА</h4>
                                <form className="needs-validation">
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <label htmlFor="firstName" class="form-label text">Имя</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="Иван"
                                                onChange={onChangeName}
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                Имя введено некорректно.
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <label htmlFor="lastName" className="form-label text">Фамилия</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Иванов"
                                                onChange={onChangeLastName}
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                Фамилия введена некорректно.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="telephon" className="form-label text">Телефон </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="number"
                                                placeholder="+7 (912) 345-67-89"
                                                onChange={onChangeTelephon}
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                Пожалуйста введите номер телефона корректно.
                                            </div>
                                        </div>


                                        <div class="col-6">
                                            <label for="date" class="form-label text">Начальная дата</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="date_start"
                                                placeholder="01.01.2023"
                                                onChange={onChangeBeginDate}
                                            />
                                            <div class="invalid-feedback">
                                                Пожалуйста введите начальную дату корректно.
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <label for="date" class="form-label text">Финальная дата</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="date_finish"
                                                placeholder="01.02.2023"
                                                onChange={onChangeEndDate}
                                            />
                                            <div class="invalid-feedback">
                                                Пожалуйста введите конечную дату корректно.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label htmlFor="address" className="form-label text">Адрес</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                placeholder="Россия, Москва, Земляной Вал, 14"
                                                onChange={onChangeAddress}
                                                required=""
                                            />
                                            <div className="invalid-feedback">
                                                Введите корректный адрес.
                                            </div>
                                        </div>

                                        {/* <div className="col-md-12">
                                            <label htmlFor="country" className="form-label text">Адрес</label>
                                            <select className="form-select text" id="country" required="">
                                                <option value="">Выберите адрес</option>
                                                <option>Камчатка</option>
                                                <option>Ялта</option>
                                                <option>Сибирь</option>
                                            </select>
                                            <div className="invalid-feedback text">
                                                Выберите корректный адрес.
                                            </div>
                                        </div> */}

                                        <hr className="my-4" />

                                        <div className="col-md-12">
                                            <label htmlFor="type" className="form-label text">Вид машины</label>
                                            <select className="form-select text" id="car" required=""
                                                onChange={onSelectVehicle}>
                                                <option value="">Выберите тип машины</option>
                                                <option>Погрузчик</option>
                                                <option>Трактор</option>
                                                <option>Самосвал</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Выберите корректный тип машины.
                                            </div>
                                        </div>

                                        <hr className="my-4" />

                                        <div className="col-md-12">
                                            <label htmlFor="type" className="form-label text">Уровень приоритета</label>
                                            <select className="form-select text" id="car" required=""
                                                onChange={onSelectPriority}>
                                                <option value="">Выберите уровень приоритета</option>
                                                <option>Чрезвучайная ситуация</option>
                                                <option>Срочно</option>
                                                <option>Не очень срочно</option>
                                                <option>Совсем не срочно</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Выберите корректный тип машины.
                                            </div>
                                        </div>

                                        <button
                                            className="w-100 btn btn-warning btn-lg text-p"
                                            type="submit"
                                            onClick={onSubmit}
                                        >ОТПРАВИТЬ ЗАЯВКУ
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                        className="modal modal-sheet position-static d-block py-5 back"
                        tabIndex="-1"
                        role="dialog"
                        id="modalSheet"
                        style={{ height: window.screen.height }}
                    >
                        DOOOOOOOOOOOOOOOOM!!!
                        <CustomerClass />
                    </div> */}
            </main>
        </body>
    );
}