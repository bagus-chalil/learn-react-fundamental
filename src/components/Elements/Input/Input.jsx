const Input= (props) => {
    const { type, placeholder, name } = props;
    return (
        <input type={type} 
        className="text-lg-border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-30" 
        name={name}
        id={name}
        placeholder={placeholder} />
    )
}

export default Input;