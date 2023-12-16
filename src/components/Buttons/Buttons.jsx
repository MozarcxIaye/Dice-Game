import styles from './Buttons.module.css';

const Buttons = ({ isOutline, text, onClick }) => {
    // console.log(text);
    return (
        <button onClick={onClick} className={isOutline ? styles.primaryLight : styles.primaryDark}>{text}</button>
    )
}

export default Buttons;