import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './Stopper.module.scss';

const Stopper = () => {
    const [miliseconds, setMiliseconds] = useState(0);
    const [timer, setTimer] = useState(null);

    const getFormattedTime = (ms) => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        ms -= (1000 * 60 * 60) * hours;

        const minutes = Math.floor(ms / (1000 * 60));
        ms -= (1000 * 60) * minutes;

        const seconds = Math.floor(ms / (1000));
        ms -= (1000) * seconds;

        return `${hours}:${minutes}:${seconds}:${ms}`
    };

    const start = () => {
        if(!timer) {
            const startTimer = setInterval(() => {
                setMiliseconds(returnInrementedMiliseconds);
            }, 10);
    
            setTimer(startTimer);
        }
    }

    const returnInrementedMiliseconds = (prevMs) => {
        return prevMs + 10;
    }

    const stop = () => {
        clearInterval(timer);
        setTimer(null);
    };

    const reset = () => {
        stop();
        setMiliseconds(0);
    };

    useEffect(() => {
        return () => {
            if (timer) clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <h1>{getFormattedTime(miliseconds)}</h1>
            <div className={styles.controls_wrapper}>
                <Button onClickAction={start}>Start</Button>
                <Button onClickAction={stop}>Stop</Button>
                <Button onClickAction={reset}>Reset</Button>
            </div>
        </div>
    );
}

export default Stopper;