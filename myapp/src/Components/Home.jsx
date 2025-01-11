import React from 'react';
import '../css/home.css'
import Homegraphcard from './Homegraphcard'

function Home(){
    return(
        <>
        <div className="cardhead">
            <Homegraphcard name="NIFTY 50" value={29.345} percent={49.3} />
            <Homegraphcard name="NIFTY NEXT 50" value={29.345} percent={49.3} />
            <Homegraphcard name="NIFTY MIDCAP SELECT" value={29.345} percent={49.3} />
            <Homegraphcard name="NIFTY BANK" value={29.345} percent={49.3} />
            <Homegraphcard name="NIFTY FINANCIAL SERVICES" value={29.345} percent={49.3} />
        </div>
       </>
    );
}

export default Home;