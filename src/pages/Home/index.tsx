import React from "react";
import homeString from './index.json';
const Home: React.FC = () => {
    return (<div className="home">
        <div>
        <h1>{homeString.title}</h1>
        <span>{homeString.subtitle}</span>
        </div>

    </div>);
};

export default Home;
