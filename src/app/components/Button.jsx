
const variantClasses = {
    "primary": "bg-white",
    "secondary": "bg-red"
}

const defaultStyle = "p-2 rounded-md flex items-center"

export default function Button({text, variant, onClick}) {
    return <button className={variantClasses[variant] + " " + defaultStyle}
    >{text}</button>   
}