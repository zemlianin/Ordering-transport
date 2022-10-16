import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/customer_new_req_style.css';
import '../Styles/customer_list_req_style.css';
import '../Styles/style.css';

export default function RequestInfo(props) {
  return (
    <div className="info-block"
      style={{ height: window.innerWidth }}>

      <div className="modal modal-sheet position-static d-block py-5" tabIndex="-1" role="dialog" id="modalSheet">
        <div className="container form-list">
          <div className="w-auto modal-content rounded-4 shadow list-group">

            <div className="col-md-7 col-lg-8 list">
              <div className="modal-header border-bottom-0">
                <h4 className="modal-title fs-5 text text-h4">ЗАЯВКА</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.onClickHand()}></button>
              </div>
              <form className="needs-validation" noValidate="">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label text">Имя</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      value={props.name}
                      disabled />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label text">Фамилия</label>
                    <input type="text" className="form-control" id="lastName"
                      value={props.lastName} disabled />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label text">Телефон </label>
                    <input type="text" className="form-control" id="number"
                      value={props.telephone} disabled />
                  </div>

                  <div className="col-6">
                    <label htmlFor="date" className="form-label text">Начальная дата</label>
                    <input type="text" className="form-control" id="date_start"
                      value={props.beginDate} disabled />
                  </div>
                  <div className="col-6">
                    <label htmlFor="date" className="form-label text">Конечная дата</label>
                    <input type="text" className="form-control" id="date_finish"
                      value={props.endDate} disabled />
                  </div>

                  <div className="col-12">
                    <label htmlFor="country" className="form-label text">Адрес </label>
                    <input type="text" className="form-control" id="country"
                      value={props.address} disabled />
                  </div>

                  <hr className="my-4" />

                  <div className="col-12">
                    <label htmlFor="car" className="form-label text">Вид машины</label>
                    <input type="text" className="form-control" id="car"
                      value={props.typeOfVehicle} disabled />
                  </div>

                  <hr className="my-4" />

                  <div className="col-12">
                    <label htmlFor="comment" className="form-label text">Комментарий</label>
                    <input type="text" className="form-control" id="comment"
                      value={props.comment} disabled />
                  </div>
                  
                  <hr className="my-4" />

                  <div className="col-12">
                    <label htmlFor="priority" className="form-label text">Уровень приоритета</label>
                    <input type="text" className="form-control" id="priority"
                      value={props.priority} disabled />
                  </div>

                </div>

                <button className="w-100 btn btn-warning btn-lg text-p"
                  type="submit" style={{ backgroundColor: "#f54c4c" }}>УДАЛИТЬ ЗАЯВКУ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}