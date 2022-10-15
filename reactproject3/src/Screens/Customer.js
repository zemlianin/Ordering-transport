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
    typeOfVehicle: "",
}

var boolCheck = [
    false,
    false
]

function onChangeName(event) {
    currentRequest.name = event.target.value;
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
function onSelectVehicle(event) {
    currentRequest.typeOfVehicle = event.target.value;
}
function onSelectSpeed(event) {
    console.log(event.target);
    currentRequest.typeOfVehicle = event.target.value;
}

function onSubmit(event) {
    console.log(currentRequest);
    alert(1);
}

export default function Customer() {
    return (
        <div>
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

                                            <div className="col-md-12">
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
                                            </div>

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

                                            <h5 className="mb-3 text">Уровень приоритета</h5>

                                            <div className="my-3">
                                                <div className="form-check">
                                                    <input
                                                        id="es"
                                                        name="priority"
                                                        type="radio"
                                                        className="form-check-input"
                                                        checked=""
                                                        required=""
                                                    />
                                                    <label className="form-check-label text" htmlFor="es">Чрезвучайная ситуация</label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        id="urgently"
                                                        name="priority"
                                                        type="radio"
                                                        className="form-check-input"
                                                        checked=""
                                                        required=""
                                                    />
                                                    <label className="form-check-label text" htmlFor="urgently">Срочно</label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        id="m_urgently"
                                                        name="priority"
                                                        type="radio"
                                                        className="form-check-input"
                                                        checked=""
                                                        required=""
                                                    />
                                                    <label className="form-check-label text" htmlFor="m_urgently">Не очень срочно</label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        id="slowly"
                                                        name="priority"
                                                        type="radio"
                                                        className="form-check-input"
                                                        checked=""
                                                        required=""
                                                    />
                                                    <label className="form-check-label text" htmlFor="slowly">Совсем не срочно</label>
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
        </div>
    );
}
