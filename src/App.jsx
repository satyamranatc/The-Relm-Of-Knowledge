import React,{useState} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";

import NavBar from './Components/NavBar';

import Home from "./Page/Home.jsx"
import Courses from "./Page/Courses.jsx"
import CourseDetails from "./Page/CourseDetails.jsx"

export default function App() {
  let [SelectedCourse,setSelectedCourse] = useState({});
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>

          <Route path = "/" element={<Home/>} / >
          <Route path = "/Courses" element={<Courses setSelectedCourse = {setSelectedCourse} />} / >
          <Route path = "/CourseDetails" element={<CourseDetails SelectedCourse = {SelectedCourse}/>} / >

        </Routes>

      </BrowserRouter>
    </div>
  )
}
