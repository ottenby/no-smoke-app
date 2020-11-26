import React, { useState } from 'react';
import './smokeInput.scss';

export interface ISmokeData {
    monday: "",
    tuesday:"",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: ""
}
export interface ISmokeInputProps {
    setSmokeData: (smokeData: ISmokeData) => void
    smokeData: ISmokeData
}
export default function SmokeInput(props: ISmokeInputProps) {


    function updateSmokeValue(
        e: React.ChangeEvent<HTMLInputElement>,
        id: keyof ISmokeData
        ) {
        props.setSmokeData({ ...props.smokeData, [id]: e.target.value});
        console.log(props.smokeData);
            
    }

    return(
        <>
            <div className="input-container">
                
                <label htmlFor="monday">Monday</label>
                <input type="number" name="monday" onChange={e => updateSmokeValue(e, "monday")} />
                <label htmlFor="tuesday">Tuesday</label>
                <input type="number" name="tuesday" onChange={e => updateSmokeValue(e, "tuesday")} />
                <label htmlFor="wednesday">Wednesday</label>
                <input type="number" name="wednesday" onChange={e => updateSmokeValue(e, "wednesday")} />
                <label htmlFor="thursday">Thursday</label>
                <input type="number" name="thursday" onChange={e => updateSmokeValue(e, "thursday")} />
                <label htmlFor="friday">Friday</label>
                <input type="number" name="friday" onChange={e => updateSmokeValue(e, "friday")} />
                <label htmlFor="saturday">Saturday</label>
                <input type="number" name="saturday" onChange={e => updateSmokeValue(e, "saturday")} />
                <label htmlFor="sunday">Sunday</label>
                <input type="number" name="sunday" onChange={e => updateSmokeValue(e, "sunday")} />
            </div>
        </>
    )
}