import styled from 'styled-components'

const TotalScore = ({ currentScore, setCurrentScore }) => {
    return (
        <Score>
            <h1>{currentScore}</h1>
            <p>Total Score</p>
        </Score>

    )
}

export default TotalScore

const Score = styled.div`
    h1{
        color: #000;
font-family: Poppins;
font-size: 6.25rem;
font-weight: 500;
    }
    p{
        color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-weight: 500;
    }
`;