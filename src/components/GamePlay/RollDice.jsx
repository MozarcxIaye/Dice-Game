
import styled from 'styled-components'
import dice1 from '../../assets/images/dices/dice_1.png'
import dice2 from '../../assets/images/dices/dice_2.png'
import dice3 from '../../assets/images/dices/dice_3.png'
import dice4 from '../../assets/images/dices/dice_4.png'
import dice5 from '../../assets/images/dices/dice_5.png'
import dice6 from '../../assets/images/dices/dice_6.png'

const RollDice = ({ currentDice, rollDice }) => {


    const dices = [dice1, dice2, dice3, dice4, dice5, dice6];



    // let path = `../../assets/images/dices/dice_${currentDice}.png`;

    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={dices[currentDice - 1]} alt="dice" />
            </div>
            <p>Click on Dice to Roll</p>
        </DiceContainer>

    )
}

export default RollDice

const DiceContainer = styled.div`

p{
        font-family: Poppins;
        font-size: 1.6rem;
        font-weight: 700;
        color: #000;
        text-align: center;
    }

`;