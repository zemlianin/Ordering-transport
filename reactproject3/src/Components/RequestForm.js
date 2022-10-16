import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/customer_new_req_style.css';
import '../Styles/customer_list_req_style.css';
import '../Styles/style.css';

export default function RequestForm(props) {
    function func(){
        props.SetCurrent(props);
        props.setInfoOpened();
    }

    return (
        <div className="list-group-item list-group-item-action d-flex gap-3 py-3" onClick={() => func()}>
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0 text-list">{props.address}</h6>
            <p className="mb-0 opacity-75">{props.typeOfVehicle}</p>
          </div>
          <div>
            <small className="opacity-50 text-nowrap">c {props.beginDate}</small>
            <small className="opacity-50 text-nowrap">до {props.endDate}</small>
          </div>
        </div>
      </div>
    )
  }