import styles from './Button.module.scss'

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  children?: React.ReactNode
}

export default function Button({ type, onClick, children } : ButtonProps) {
  return (
    <button 
      type={type}
      className={styles.botao}
      onClick={onClick}
    >
        {children}
    </button>
  )
}