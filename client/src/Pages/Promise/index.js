import React from "react";
import { Container } from "react-bootstrap";



const OurPromise = () => {
    const ourMessage = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, qui facere iure exercitationem adipisci dolorem! Ex tempora voluptate, iusto ab amet explicabo pariatur minus, recusandae quos, deleniti esse? Repellat, sunt"

return (

    <Container id="tablePromiseService">
    
        <h2> Our Promise </h2>
        <div>
            <p> {ourMessage} </p>
            <p> {ourMessage} </p>
        </div>
    </Container>
);
};

export default OurPromise;