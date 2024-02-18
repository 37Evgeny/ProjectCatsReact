import CardList from "../CardList/CardList";
import Header from "../Header/header";
import './App.css'
import {cardData} from "../../assets/card";

function App () {



    return(
        <>
            <Header/>
            <main className='content container'>
                <CardList cards={cardData}/>
            </main>
        </>
    );
};

export default App;