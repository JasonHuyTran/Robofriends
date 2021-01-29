import Card from "../Card/Card.js"

const CardList = ({robots}) => {
    const cardsArray = robots.map(user => 
        <Card id = {user.id} email = {user.email} name = {user.name} key = {user.id}/>
    );


    return (
        <div>
            {cardsArray}
        </div>
       
    )
}

export default CardList;