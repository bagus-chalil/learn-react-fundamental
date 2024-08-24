import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
    return (
        <form action="" method="post"> 
            <InputForm 
            label="Email" 
            type="email" 
            placeholder="example@mail.com" 
            name="email"/>
    
            <InputForm 
            label="Password" 
            type="password" 
            placeholder="***" 
            name="password"/>
            
            <Button classname="bg-blue-600">Login</Button>
        </form>
    )
}

export default FormLogin;