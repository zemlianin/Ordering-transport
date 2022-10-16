import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/style.css';
import '../Styles/customer_new_req_style.css';
import HeaderNav from '../Components/HeaderMainCustomer';
import LogoField from '../Components/LogoField';
import FooterClass from '../Components/FooterClass';


// var currentRequest = {
//   name: "",
//   lastName: "",
//   telephon: "",
//   address: "",
//   beginDate: "",
//   endDate: "",
//   typeOfVehicle: "",
//   priotity: "",
//   comment: "",
//             double x,
//             double y,
// }

var currentRequest = {
  name: "",
  lastName: "",
  telephon: "",
  x: 51.1,
  y: 52.6,
  beginDate: "",
  endDate: "",
  typeOfVehicle: "",
  priotity: "",
  comment: "",
}

// var boolCheck = [
//     false,
//     false
// ]

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
function onChangeComment(event) {
  currentRequest.comment = event.target.value;
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
    <div>
      <HeaderNav />

      <LogoField />

      <main>
        <div
          className="modal modal-sheet position-static d-block py-5 back3"
          tabIndex="-1"
          role="dialog"
          id="modalSheet"
          style={{ height: window.screen.height }}
        >
          <div className="form-list-mrgn modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">

              <div className="col-md-7 col-lg-8 list-mrgn">
                <h4 className="mb-3 text">ЗАЯВКА</h4>
                <form className="needs-validation">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label htmlFor="firstName" className="form-label text">Имя</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="Иван"
                        onChange={() => onChangeName()}
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
                        onChange={() => onChangeLastName()}
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
                        onChange={() => onChangeTelephon()}
                        required=""
                      />
                      <div className="invalid-feedback">
                        Пожалуйста введите номер телефона корректно.
                      </div>
                    </div>


                    <div className="col-6">
                      <label htmlFor="date" className="form-label text">Начальная дата</label>
                      <input
                        type="text"
                        className="form-control"
                        id="date_start"
                        placeholder="01.01.2023"
                        onChange={() => onChangeBeginDate()}
                      />
                      <div className="invalid-feedback">
                        Пожалуйста введите начальную дату корректно.
                      </div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="date" className="form-label text">Финальная дата</label>
                      <input
                        type="text"
                        className="form-control"
                        id="date_finish"
                        placeholder="01.02.2023"
                        onChange={() => onChangeEndDate()}
                      />
                      <div className="invalid-feedback">
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
                        onChange={() => onChangeAddress()}
                        required=""
                      />
                      <div className="invalid-feedback">
                        Введите корректный адрес.
                      </div>
                    </div>
                    
                    <hr className="my-4" />

                    <div className="col-md-12">
                      <label htmlFor="type" className="form-label text">Вид машины</label>
                      <select className="form-select text" id="car" required=""
                        onChange={() => onSelectVehicle()}>
                        <option value="">Выберите тип машины</option>
                        <option>Погрузчик</option>
                        <option>Трактор</option>
                        <option>Самосвал</option>
                      </select>
                      <div className="invalid-feedback">
                        Выберите корректный тип машины.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address" className="form-label text">Комментарий</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Грузоподъёмность выше 2 тонн"
                        onChange={() => onChangeComment()}
                        required=""
                      />
                      <div className="invalid-feedback">
                        Введите корректный адрес.
                      </div>
                    </div>

                    <hr className="my-4" />

                    <div className="col-md-12">
                      <label htmlFor="type" className="form-label text">Уровень приоритета</label>
                      <select className="form-select text" id="car" required=""
                        onChange={() => onSelectPriority()}>
                        <option value="">Выберите уровень приоритета</option>
                        <option>Чрезвучайная ситуация</option>
                        <option>Высокий приоритет</option>
                        <option>Стандартный приоритет</option>
                        <option>Низкий приоритет</option>
                      </select>
                      <div className="invalid-feedback">
                        Выберите корректный приоритет.
                      </div>
                    </div>

                    <button
                      className="w-100 btn btn-warning text-p"
                      type="submit"
                      onClick={() => onSubmit()}
                    >ОТПРАВИТЬ ЗАЯВКУ
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
        
      </main>

      <FooterClass />
    </div>
  );
}
