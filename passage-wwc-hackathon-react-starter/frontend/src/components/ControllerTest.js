import React, {useState, useEffect} from "react";

export function ControllerTest(){

const [data, setdata] = useState('');

var body = {
    "id": 1,
    "name": "Buddy",
    "description": "Buddy is a friendly and energetic Golden Retriever. He loves to play fetch and go on long walks.",
    "species": "Dog",
    "breed": "Golden Retriever",
    "age": 3,
    "gender": "Male",
    "size": "Large",
    "color": "Golden",
    "healthStatus": "Up-to-date on vaccinations and in good health",
    "historyBackground": "Buddy was adopted from a rescue organization and has been with his current owner for two years.",
    "contactInformation": "Contact John Smith at john@example.com for adoption inquiries.",
    "location": "Currently located in Los Angeles, CA",
    "microchipID": "Microchip ID: 123456789",
    "spayNeuterStatus": "Neutered",
    "vaccinationRecords": "Vaccination records are available upon request.",
    "dietAndFeedingRoutine": "Buddy is fed high-quality dog food twice a day. He enjoys both dry kibble and wet food.",
    "groomingNeeds": "Regular brushing is recommended to maintain Buddy's beautiful coat."
}

useEffect(() => {
    fetch("/pet-lost-and-found").then(res => {
        return res.json()
    }).then(data => {
        console.log(data);
    })
}, []);

useEffect(() => {
    fetch("/add-pet-lost-and-found", {
        headers: {'content-type': 'application/json'}, 
        method: 'POST',
        body: JSON.stringify(body)
    }).then(res => {
        return res.json()
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error.message);
    })
}, []);


return(
    <div>
        Here?
        {data}
    </div>
);
}