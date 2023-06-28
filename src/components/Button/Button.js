import styles from './Button.module.scss';

const Button = (props) => {
    return (<button className={styles.button} onClick={props.onClickAction}>{props.children}</button>);
}

export default Button;