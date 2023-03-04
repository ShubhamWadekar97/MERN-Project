import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import RegisterStudent from './components/RegisterStudent';
import StudentDetails from './components/StudentDetails';
import DeleteStudent from './components/DeleteStudent';
import EditStudent from './components/EditStudent';

var record=(
  <BrowserRouter>
  <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={< About/>} />
        <Route path="/addstudent" element={<RegisterStudent/>} />
        <Route path="/getstudent" element={<StudentDetails/>} />
        <Route path="/deletestudent/:id" element={<DeleteStudent/>} />
        <Route path="/updatestudent/:id" element={<EditStudent/>} />
    </Routes>
  <Footer />
</BrowserRouter>
);
var target = ReactDOM.createRoot(document.querySelector('#root'));
target.render(record);