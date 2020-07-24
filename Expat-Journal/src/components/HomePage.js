import React, {useEffect} from "react";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { CardGroup, Card, Button } from 'react-bootstrap';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const fakeDate = [
    {trip: "Italy", title:"First Day" , info: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.", pictures:
        {p1:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        p2:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
        p3:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80"}},
    {trip: "Italy2", title:"Second Day" , info: "Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.", pictures:
        {p2:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        p1:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
        p3:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80"}
    },
    {trip: "Italy3", title:"Third Day" , info: "Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.", pictures:
        {p2:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
        p3:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80",
        p1:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=330&q=80"}
    }
];

const HomePage = () => {

    return(
        <div className = "homePage">
            <h1>My Trips</h1>
            <div className="myTrips">
                <CardGroup>
                    {fakeDate.map((trip)=>{
                        return(
                            <Card>
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