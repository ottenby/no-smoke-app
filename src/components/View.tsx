import React, { useState } from 'react';
import SmokeCounter from './SmokeCounter';
import SmokeInput, { ISmokeData } from './SmokeInput';
import '../components/View.scss';

export default function View() {
    
    const [smokeData, setSmokeData]= useState<ISmokeData>({
        monday: "",
        tuesday:"",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: ""
    });
    const[averageSmoke, setAverageSmoke] = useState(0);

    function calculate() {
        // let average: number = (
        //     parseInt(smokeData.monday) + 
        //     parseInt(smokeData.tuesday) + 
        //     parseInt(smokeData.wednesday) + 
        //     parseInt(smokeData.thursday) + 
        //     parseInt(smokeData.friday) + 
        //     parseInt(smokeData.saturday) + 
        //     parseInt(smokeData.sunday)
        //     ) / 7;
        //     setAverageSmoke(average);
        let total: number = 0;
        let dataArray = [
            smokeData.monday, 
            smokeData.tuesday, 
            smokeData.wednesday, 
            smokeData.thursday, 
            smokeData.friday, 
            smokeData.saturday, 
            smokeData.sunday
        ]
        dataArray.forEach(number => {
            total += parseInt(number)
        })
        let average = total / dataArray.length;
        console.log(average);
    }

    return(
        <>
        <h1>Fill in ciggarettes smoked each day:</h1>
        <div className="container">
          <SmokeInput
            smokeData={smokeData}
            setSmokeData={setSmokeData}
            ></SmokeInput>
            
  
          <SmokeCounter
            smokeData={smokeData}
            average= {averageSmoke}
            ></SmokeCounter>
        </div>
        <button onClick={calculate}>calculate</button>
        </>
    )
}