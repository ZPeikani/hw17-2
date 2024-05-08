type ButtonProps={
    text: string;
    className: string;
}
export default function Button({text, className}:ButtonProps) {
    return <button className={`text-white rounded-md text-lg font-bold px-1 ${className}`}>
    {text}
  </button>
}