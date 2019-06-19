import React from 'react';
import {render, fireEvent, getAllByTestId} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import PlayerList from './PlayerList';

// show no players available if player list is empty or not passed

describe('<Player />', () => {
    it.skip('should show "No Players" if none passed', () => {
        const { getByText } = render(<PlayerList />);

        getByText(/no players to list/i)
    });
    it('displays all the players provided', () => {
        const players =  [
            {
            id: 1,
            name: 'Rodolfo'
            },
            {
            id: 2,
            name: 'Kayla'
            },
            {
            id: 3,
            name: 'Nicholas'
            },
        ]


        const  {getAllByTestId} = render(<PlayerList players={players} />)

        const renderedPlayers = getAllByTestId(/players/i)
        // console.log(playerNames)
        expect(renderedPlayers).toHaveLength(players.length)
    });
    it('displays all the players provided', () => {
        const players =  [
            {
            id: 1,
            name: 'Rodolfo'
            },
            {
            id: 2,
            name: 'Kayla'
            },
            {
            id: 3,
            name: 'Nicholas'
            },
        ]
        const  {getAllByTestId} = render(<PlayerList players={players} />)
        const playerNames = players.map(p => p.name)

        const renderedPlayers = getAllByTestId(/players/i).map(li => li.textContent)
        // console.log(playerNames)
        expect(renderedPlayers).toEqual(playerNames)
    });
})

//displays the list of players passed
