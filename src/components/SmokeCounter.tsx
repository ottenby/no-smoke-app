import React, { useState } from 'react';
import { ISmokeData, ISmokeInputProps } from './SmokeInput';

export interface ISmokeCounterProps {
    smokeData: ISmokeData;
    average: number;
}
export default function SmokeCounter(props: ISmokeCounterProps) {

    

    
    // setAverageSmoke((
    //     parseInt(props.smokeData.monday) + 
    //     parseInt(props.smokeData.tuesday) + 
    //     parseInt(props.smokeData.wednesday) + 
    //     parseInt(props.smokeData.thursday) + 
    //     parseInt(props.smokeData.friday) + 
    //     parseInt(props.smokeData.saturday) + 
    //     parseInt(props.smokeData.sunday)
    //     ) / 7)

    return(
        <>
        <div className="counter-wrapper">
            <div>Monday: {props.smokeData.monday}</div>
            <div>Tuesday: {props.smokeData.tuesday}</div>
            <div>Wednesday: {props.smokeData.wednesday}</div>
            <div>Thursday: {props.smokeData.thursday}</div>
            <div>Friday: {props.smokeData.friday}</div>
            <div>Saturday: {props.smokeData.saturday}</div>
            <div>Sunday: {props.smokeData.sunday}</div>
            <div>Your average cigarettes / day: {props.average}</div>
        </div>
        </>

    )
}