import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Course from '../../components/Course/Course';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./skillupData.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-center pt-5 my-3">Our All Courses</h2>
            <div className="underline"></div>

            <Container className="card-container m-5 row">
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Courses;