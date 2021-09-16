import React, { useState, useEffect } from 'react'
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../../axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    // When Tinder cards load, it will run the loading peice of code here once and not again.
    useEffect(() => {
        // In order to do any async work inside the useEffect, we have to use this async function to retrieve the data from the mongodb database and then setPeople teh data as to what we receive. 
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log('Removing' + nameToDelete);
        // setLastDirection(direction);
    }

    const outOffFrame = (name) => {
        console.log(name + ' left the screen.');
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {
                    people.map(person => (
                        <TinderCard className='swipe' key={person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOffFrame(person.name)} >
                            <div className='card' style={{ backgroundImage: `url(${person.imageUrl})` }}>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
