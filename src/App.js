import React, {Component} from 'react';
import Particles from "react-particles-js";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/imagelinkform/imagelinkform";
import Rank from "./components/rank/rank";
import './App.css';

const particlesOptions = {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonSubmit = () => {
        console.log('click');
    }

    render() {
        return (
            <div className='App'>
                <Particles className='particles' params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}  />
            </div>
        )
    }
}
export default App;