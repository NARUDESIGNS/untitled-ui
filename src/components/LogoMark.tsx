import Logo from "../assets/Logomark.svg";

const LogoMark = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo mark" />
            <p className="text-gray-900 text-lg font-medium">Untitled UI</p>
        </div>
    );
}
 
export default LogoMark;