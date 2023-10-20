import React, {useState, useEffect} from "react";

export function ControllerTest(){

const [data, setdata] = useState('');

useEffect(() => {
    fetch("/pet-lost-and-found").then((result) => 
    {
        result.json.then((data) => {
            setdata(data);
            console.log(data);
        })
    });
}, []);


return(
    <div>
        Here?
        {data}
    </div>
);
}