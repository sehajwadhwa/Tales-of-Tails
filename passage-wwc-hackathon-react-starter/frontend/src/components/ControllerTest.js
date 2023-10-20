import React, {useState, useEffect} from "react";

export function ControllerTest(){

const [data, setdata] = useState('');

useEffect(() => {
    fetch("/pet-lost-and-found").then(res => {
        return res.json()
    }).then(data => {
        console.log(data);
    })
}, []);


return(
    <div>
        Here?
        {data}
    </div>
);
}