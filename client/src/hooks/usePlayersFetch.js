import {useState, useEffect} from 'react';

export default function useAllPlayers() {
    const [usePlayers, setUsePlayers] = useState({});

    async function fetchPlayersData(){
        const response = await fetch('http://localhost:5000/api/players');
        response
            .json()
            .then(response => setUsePlayers(response))
            .catch(error => setErrors(errors));
    }

    useEffect(() => {
        fetchPlayersData();
    })
}