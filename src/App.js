import React from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox"
import "./App.css"

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))

        
    }

    onSeachChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLowerCase());
        });


        return (
            <div className = "tc">
                <h1 className = "f2">RoboFriends</h1>
                <SearchBox searchChange = {this.onSeachChange} searchField = {this.searchField}/>
                <div>
                    <CardList robots = {filterRobots}/>
                </div>
            </div>
        );
    }
}



export default App;
