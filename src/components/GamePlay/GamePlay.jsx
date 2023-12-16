import DiceSelect from "./DiceSelect"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import Buttons from '../Buttons/Buttons'
import { useState } from 'react'
import RollDice from "./RollDice";
import Rules from "../Rules/Rules"

const GamePlay = () => {
    const [currentDice, setCurrentDice] = useState(3);
    const [selectedNum, setSelectedNum] = useState();
    let [currentScore, setCurrentScore] = useState(0);
    const [error, setError] = useState("");
    const [ruleState, setRuleState] = useState(false);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
    }
    const rollDice = () => {
        if (!selectedNum) {
            setError("You have not selected any number.")
            return error;
        }
        const randomNumber = generateRandomNumber();
        setCurrentDice(randomNumber);

        if (randomNumber == selectedNum) {
            setCurrentScore((prev) => prev + randomNumber);
        } else {
            setCurrentScore((prev) => prev - 2);
        }
        setSelectedNum(undefined);
    }
    const resetScore = () => {
        setCurrentScore(0);
    }

    const displayRules = () => {
        setRuleState(!ruleState);
    }




    return (
        <div>
            <Header>
                <TotalScore currentScore={currentScore} setCurrentScore={setCurrentScore} />
                <DiceSelect error={error} setError={setError} selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
            </Header>
            <Playground>
                <RollDice currentDice={currentDice} rollDice={rollDice} />

                <Buttons isOutline={true} text="Reset Score" onClick={resetScore}></Buttons>
                <Buttons isOutline={false} text={ruleState ? "Hide Rules" : "Show Rules"} onClick={displayRules}></Buttons>
            </Playground>
            {ruleState ? <Rules onClick={displayRules} /> : null}
        </div>
    )
}

export default GamePlay

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem 1rem 5rem;
    
`;

const Playground = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 18rem;
    margin: 0 auto;
    gap: .8rem;

 
   

`;