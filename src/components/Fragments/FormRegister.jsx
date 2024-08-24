import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
    return (
        <form action="" method="post"> 
            <InputForm 
            label="Fullname" 
            type="text" 
            placeholder="Type your Fullname" 
            name="fullname"/>
    
            <InputForm 
            label="Email" 
            type="email" 
            placeholder="example@gmail.com" 
            name="email"/>

            <InputForm 
            label="Password" 
            type="password" 
            placeholder="***" 
            name="password"/>
            
            <InputForm 
            label="Repassword" 
            type="password" 
            placeholder="***" 
            name="confirmPassword"/>
            
            <Button classname="bg-blue-600">Register</Button>
        </form>
    )
}

export default FormRegister;