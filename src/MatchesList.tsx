import {useState, useEffect} from 'react';
import { UserInterface } from './interfaces';
import FrienderAPI from './api';
import MatchCard from './MatchCard';
import IsLoading from './IsLoading';

interface MatchListProps {
    user: UserInterface
}

function MatchesList({user}: MatchListProps) {
    const [matches, setMatches] = useState<UserInterface[]>(null)

    useEffect(function getMatches() {
        async function fetchMatches() {
            const matches = await FrienderAPI.getMatches(user.username);
            setMatches(matches);
          }
          fetchMatches();
    }, [user])

    return(<div>
        <h2>Matches:</h2>
        {matches ? matches.map(m => <MatchCard user={user}  match={m} key={m.username}/>) : <IsLoading />}
    </div>)
}
export default MatchesList