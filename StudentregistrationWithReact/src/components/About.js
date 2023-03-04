import React from "react";
import Harshal from '../images/harshal.jpg'
function About() {
    return (
        <div className='container'>
            <h1>Details About mentor</h1>
            <div class="row">
                <div class="col-6">
                <img src={Harshal} class='img-fluid'/>

                 <p>The Tuition Teacher is an online platform which brings teachers, parents and students together. This is where you can find qualified and experienced Home Tuition Teachers to work with students of all ages, from Pre-Nursery to Intermediate, covering all academic subjects, music and general interest/hobby classes.</p>
                </div>
                <div class="col-6">
                <img src={Harshal} class='img-fluid'/>
                <p>The Tuition Teacher is an online platform which brings teachers, parents and students together. This is where you can find qualified and experienced Home Tuition Teachers to work with students of all ages, from Pre-Nursery to Intermediate, covering all academic subjects, music and general interest/hobby classes.</p>
                </div>
            </div>

        </div>

    )
}
export default About;