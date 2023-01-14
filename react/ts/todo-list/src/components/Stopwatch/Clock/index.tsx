import styles from './Clock.module.scss'

type ClockProps = {
  time: number | undefined
}

export default function Clock({ time = 0 } : ClockProps) {
  
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const [minuteDezena, minuteUnit] = String(minutes).padStart(2, '0')
  const [secondsDezena, secondsUnit] = String(seconds).padStart(2, '0')
  
  return (
    <>
      <span className={styles.relogioNumero}>{minuteDezena}</span>
      <span className={styles.relogioNumero}>{minuteUnit}</span>
      <span className={styles.relogioDivisao}>:</span>
      <span className={styles.relogioNumero}>{secondsDezena}</span>
      <span className={styles.relogioNumero}>{secondsUnit}</span>

    </>
  )
}