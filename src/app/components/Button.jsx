
const variantClasses = {
    "primary": "bg-white",
    "secondary": "bg-red-500"
}

conaultStyle = "p-2 rounded-md flex justify-center items-center,"

export default function Button({text, variant, onClick}) {
    return( 
        <button className={`${variantClasses[variant]} onClick={onClick:} ${defaultStyle}`}>
            {text}
        </button>   
    );
}
