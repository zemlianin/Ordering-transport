import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/App.css';
import '../Styles/style.css';


export default class FooterClass extends Component {
    render() {
        return (
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <div class="col-md-4 d-flex align-items-center">
                        <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>
                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><span class="text-muted">Разработано для онлайн-хакатона "Полюс"</span></li>
                    </ul>
                </footer>
            </div>
        );
    }
}