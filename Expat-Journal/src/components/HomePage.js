import React, {useEffect} from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { CardGroup, Card, Button } from 'react-bootstrap';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const fakeDate = [
    {trip: "Italy", title:"First Day" , info: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.", pictures:
        {p1:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        p2:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
        p3:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80"}},
    {trip: "Italy2", title:"Second Day" , info: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.", pictures:
        {p2:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        p1:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
        p3:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80"}
    },
    {trip: "Italy3", title:"Third Day" , info: "Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. ", pictures:
        {p2:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        p3:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
        p1:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80"}
    },
];

const HomePage = () => {

    return(
        <div className = "homePage">
            <h1>My Trips</h1>
            <div className="myTrips">
                <CardGroup className = "myCardGroup">
                    {fakeDate.map((trip)=>{
                        return(
                            <Card className="myCard">
                                <Card.Img variant="top" src={trip.pictures.p1} alt="Trip image" />
                                <Card.Body>
                                    <Card.Title>{trip.trip}</Card.Title>
                                    <Card.Text>
                                        {trip.info}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{trip.title}</small>
                                </Card.Footer>
                                <Button variant="info">Learn More</Button>
                            </Card>
                        )
                    })}
                </CardGroup>                
            </div>
            
        </div>
    )
}

export default HomePage;