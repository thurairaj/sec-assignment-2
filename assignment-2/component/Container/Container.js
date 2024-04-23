"use client"

import React, {useState} from 'react';
import UserInput from "@/component/UserInput/UserInput";
import Display from "@/component/Display/Display";

const Container = () => {
    const [currentTemperature, setCurrentTemperature] = useState("Waiting...");
    return (
        <div>
            <UserInput changeTemperature={setCurrentTemperature}></UserInput>
            <Display temperature={currentTemperature}></Display>
        </div>
    );
};

export default Container;