import React from "react";
import CardList from "../../Components/CardList/CardList.jsx";
import SearchBox from "../../Components/SearchBox/SearchBox";
import Scroll from "../../Components/Scroll/Scroll.jsx";
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
        const {robots, searchField} = this.state;

        const filterRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLowerCase());
        });

        return !robots.length ? 
        <h1>Loading</h1> : 
        (
            <div className = "tc">
                <h1 className = "f2">RoboFriends</h1>
                <SearchBox searchChange = {this.onSeachChange} searchField = {searchField}/>
                <Scroll>
                    <CardList robots = {filterRobots}/>
                </Scroll>
            </div>
        );
        
    }
}



export default App;
