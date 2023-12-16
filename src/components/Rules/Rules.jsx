
import styled from 'styled-components'

const Rules = () => {
    return (
        <ListRule >
            <h1>How to play dice game</h1>
            <div className="rules">
                <li>Select any number</li>
                <li>Click on dice image</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
                <li>if you get wrong guess then  2 point will be dedcuted </li>
            </div>

        </ListRule>
    )
}

export default Rules

const ListRule = styled.div`
background: #FBF1F1;
padding: 1rem 2rem;
margin: 2rem auto;
width: 50rem;
display: flex;
flex-direction: column;

    h1{
        text-align: left;
        font-weight: 700;
        font-size: 2.5rem;

    }

.rules li{
        list-style: none;
        font-weight: 500;
        font-size: 1rem;
    }
`;