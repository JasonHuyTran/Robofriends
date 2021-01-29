import React from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll.jsx";
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
        .then(users => this.setState({robots: users}))
    }

    onSeachChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }

        return (
            <div className = "tc">
                <h1 className = "f2">RoboFriends</h1>
                <SearchBox searchChange = {this.onSeachChange} searchField = {this.searchField}/>
                <Scroll>
                    <CardList robots = {filterRobots}/>
                </Scroll>
            </div>
        );
    }
}



export default App;
