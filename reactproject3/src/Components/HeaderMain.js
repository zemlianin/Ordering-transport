import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import { useRef } from 'react'
import '../Styles/App.css';
import '../Styles/style.css';
import '../Styles/customer_new_req_style.css';
import { Link } from "react-router-dom";


export default class HeaderNav extends Component {
    render() {
        return (
            <div>
                <header className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item hov0">
                            <Link
                                to="/customer"
                                style={{ textDecoration: 'none' }}>
                                <p className="link-dark px-2 text-menu text-menu">НОВАЯ ЗАЯВКА</p>
                            </Link>
                            {/* <a href="#" className="nav-link link-dark px-2 text-menu">НОВАЯ ЗАЯВКА</a> */}
                            <div className="bl_yel0"></div>
                        </li>
                        <li className="nav-item hov1">
                            <Link
                                to="/customer-list"
                                style={{ textDecoration: 'none' }}>
                                <p className="link-dark px-2 text-menu text-menu">СПИСОК ЗАЯВОК</p>
                            </Link>
                            {/* <a href="#" className="nav-link link-dark px-2 text-menu">СПИСОК ЗАЯВОК</a> */}
                            <div className="bl_yel1"></div>
                        </li>
                        <li className="nav-item hov2">
                            <Link
                                to="/customer-map"
                                style={{ textDecoration: 'none' }}>
                                <p className="link-dark px-2 text-menu text-menu">КАРТА</p>
                            </Link>
                            {/* <a href="#" className="nav-link link-dark px-2 text-menu">КАРТА</a> */}
                            <div className="bl_yel2"></div>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <h5 className="nav-link link-dark px-2 text-menu">ЗАКАЗЧИК</h5>
                        </li>
                    </ul>
                </div>
            </header>
            </div>
        );
    }
}