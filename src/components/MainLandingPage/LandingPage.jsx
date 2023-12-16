
import diceImg from '../../assets/dices1.png'
// import Buttons from '../Buttons/Buttons'
import styled from 'styled-components';


const LandingPage = ({ toggle }) => {
    return (
        <main>
            <Container>
                <div className="diceImg">
                    <img src={diceImg} alt="" />
                </div>
                <div className="diceTxt">
                    <h1>Dice Game</h1>
                    {/* <Buttons style={{}} text="Play Now" /> */}
                    <Button onClick={toggle}>Play Now</Button>
                </div>
            </Container>
        </main>
    )
}

export default LandingPage


const Container = styled.div`
    display: flex;
  align-items: center;

  .diceImg {
  width: 40.5625rem;
  height: 32.625rem;

}

  .diceImg img {
  width: 100%;
}

  .diceTxt{
    display: flex;
    flex-direction: column;

     h1 {
        font-size: 6rem;
        font-weight: 800;
        text-transform: uppercase;
        white-space: nowrap;
     }
    
     
}
`;
const Button = styled.button`
    font-family: 'poppins';
        background: var(--clr-dark);
        border: 2px solid var(--clr-dark);
        color: var(--clr-light);
        font-weight: 600;
        width: 13.75rem;
        padding: .625rem 1.125rem;
        font-size: 1.2rem;
        transition: 0.2s all;
        border-radius: 0.3125rem;
        cursor: pointer;
        align-self: flex-end;

    &:hover{
        background: var(--clr-light);
    color: var(--clr-dark);
    border: 2px solid var(--clr-dark);
    transition: 0.2s all;
    }
`;