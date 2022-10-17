import React from "react";
import { Container } from "react-bootstrap";



const Services = () => {

    const ourMessage = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, qui facere iure exercitationem adipisci dolorem! Ex tempora voluptate, iusto ab amet explicabo pariatur minus, recusandae quos, deleniti esse? Repellat, sunt"


    return (

        <Container id="tablePromiseService">
        <h2>Our Services</h2>
            <h3> Section 1 </h3>
            <p>{ourMessage}</p>
            <h3> Section 2 </h3>
            <p>{ourMessage}</p>
            <h3> Section 3 </h3>
            <p>{ourMessage}</p>
        
        </Container>
    )
}

export default Services;