import { useNavigate } from "react-router-dom";

function NavigationButton() {
    const navigate = useNavigate();

    let gotoHomeaction = () => {
        navigate("/home");
    };

    let gotoSupport = () => {
        navigate("/support");
    };

    let gotoSignup = () => {
        navigate("/signup");
    };

    let gotoAllUser = () => {
        navigate("/finduser");
    }

    return (
        <div>
            <input type="button" value="Home" onClick={gotoHomeaction} />
            <input type="button" value="Support" onClick={gotoSupport} />
            <input type="button" value="SignUp" onClick={gotoSignup} />
            <input type="button" value="All user" onClick={gotoAllUser} />
        </div>
    );

}

export default NavigationButton;