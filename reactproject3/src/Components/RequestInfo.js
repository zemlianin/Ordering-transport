
export default function RequestInfo(props) {
  return (
    <div className="info-block" 
    style={{ height: window.screen.height }}>

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
                      placeholder={props.name}
                      disabled />
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label text">Фамилия</label>
                    <input type="text" className="form-control" id="lastName"
                      placeholder={props.lastName} disabled />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label text">Телефон </label>
                    <input type="text" className="form-control" id="number"
                      placeholder={props.telephone} disabled />
                  </div>

                  <div className="col-6">
                    <label htmlFor="date" className="form-label text">Начальная дата</label>
                    <input type="text" className="form-control" id="date_start"
                      placeholder={props.beginDate} disabled />
                  </div>
                  <div className="col-6">
                    <label htmlFor="date" className="form-label text">Конечная дата</label>
                    <input type="text" className="form-control" id="date_finish"
                      placeholder={props.endDate} disabled />
                  </div>

                  <div className="col-12">
                    <label htmlFor="country" className="form-label text">Адрес </label>
                    <input type="text" className="form-control" id="country"
                      placeholder={props.address} disabled />
                  </div>

                  <hr className="my-4" />

                  <div className="col-12">
                    <label htmlFor="car" className="form-label text">Вид машины</label>
                    <input type="text" className="form-control" id="car"
                      placeholder={props.typeOfVehicle} disabled />
                  </div>

                  <hr className="my-4" />

                  <div className="col-12">
                    <label htmlFor="car" className="form-label text">Уровень приоритета</label>
                    <input type="text" className="form-control" id="car"
                      placeholder={props.priority} disabled />
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}