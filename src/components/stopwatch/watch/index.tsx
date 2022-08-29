import style from './Watch.module.scss';

interface Props {
    time: number
}

export default function Watch({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnit]=String(minutes).padStart(2,'0');
    const [secontTen, secondUnit]=String(seconds).padStart(2,'0');
    return (
        <>
            <span className={style.relogioNumero}>{minuteTen}</span>
            <span className={style.relogioNumero}>{minuteUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secontTen}</span>
            <span className={style.relogioNumero}>{secondUnit}</span>
        </>
    )
}