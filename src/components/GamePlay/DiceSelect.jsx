import styled from 'styled-components';

const DiceSelect = ({ error, setError, selectedNum, setSelectedNum }) => {

    const diceNum = [1, 2, 3, 4, 5, 6];

    function diceSelectHandler(num) {
        setSelectedNum(num);
        setError("");
    }


    return (
        <SelectDice>
            <span>{error}</span>
            <Dices>
                {diceNum.map((num, i) => {
                    return <button className={num === selectedNum ? 'selected' : ''} key={i} onClick={() => diceSelectHandler(num)}>{num}</button>
                })}
            </Dices>
            <p>Select Number</p>
        </SelectDice >

    )
}

export default DiceSelect
const Dices = styled.div`
    display: flex;
    gap: .5rem;

    button{
    width: 4rem;
    height: 4rem;
    padding: 1.125rem 0rem;
    font-size: 1.2rem;
    font-weight: 800;
    border: 1px solid #000;
    color : black;
    background: white;
    cursor: pointer;
    }
    
    .selected{
        background : black;
        color: white;
    }
    
`;
const SelectDice = styled.div`
    display: flex;
    gap : .5rem;
    flex-direction: column;
    p{
        text-align: right;
        color: #000;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        font-family: Poppins;

    }
    span{
        color: #FF0C0C;
        font-size: 1.2rem;
        text-align: right;

    }
`;