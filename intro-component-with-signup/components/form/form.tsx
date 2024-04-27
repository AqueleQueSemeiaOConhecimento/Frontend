import { IoMdAlert } from "react-icons/io";
import Botao from "../buttons/buttons";
import Mensage from "../mensage/mensage";

export default function Form() {
    return(
        <>
        <div className="container-form">

        <Mensage />

            <form>
                <input type="text" name="first_name" placeholder="First Name" /> 
                <p className="hidden element">First Name cannot by empty <IoMdAlert className="icon" /> </p>
                <input type="text" name="last_name" placeholder="Last Name"/>
                <p className="hidden element">Last Name cannot by empty <IoMdAlert className="icon" /></p>
                <input type="email" name="email" placeholder="Email Address"/>
                <p className="hidden element">Email cannot by empty <IoMdAlert className="icon" /></p>
                <input type="password" name="password" placeholder="Password"/>
                <p className="hidden element">Password cannot by empty <IoMdAlert className="icon" /></p>
                <Botao />
                <p className="footer">By clicking the button you dire agreening to out <em>Terms and Services</em></p>
            </form>
        </div>
        </>
    );
}