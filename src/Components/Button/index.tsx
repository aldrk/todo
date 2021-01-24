import React from "react"

type Props = {
  text: string
  className?: string
  onClick: () => void
}

const Button: React.FC<Props> = ({text, className, onClick}) => {
  if (className) {
    return (
      <button
        className={className}
        onClick={onClick}>
        {text}
      </button>
    )
  } else {
    return (
      <button
        onClick={onClick}>
        {text}
      </button>
    )
  }
}

export default Button