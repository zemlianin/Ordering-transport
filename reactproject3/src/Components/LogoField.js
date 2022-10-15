import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { YMaps, Map, Placemark } from 'react-yandex-maps'
// import { useRef } from 'react'
import '../Styles/App.css';
import '../Styles/style.css';
import '../Styles/customer_new_req_style.css';
import { Link } from "react-router-dom";


export default class LogoField extends Component {
    render() {
        return (
            <div>
                <header className="p-3 border">
                    <div className="px-3 py-2 text-bg-white">
                        <div className="container">
                            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                    <span className="bi me-2">
                                        <img
                                            src="https://polyus.com/img/logo_dark_ru.svg"
                                            width="200"
                                            height="40"
                                            alt="logo"
                                        />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}