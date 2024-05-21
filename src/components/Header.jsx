import { useLocation} from "react-router-dom";
import Logo from "../assets/TechLogo.png";
import { navigation } from "./constants/index.js";
const Header = () => {
    const pathname = useLocation();
    return (
        <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 py-4 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="/">
                    <img src={Logo} width={78} alt='Tech Mystery' />
                </a>
                <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:flex-row">
                    {navigation.map((item) =>
                        <a key={item.id} href={item.url} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                            item.onlyMobile ? "lg:hidden": ""
                        }
                        px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${
                            item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                        } lg:leading-5 lg:hover:text-n-1 xl:px-12`}>
                            {item.title}
                        </a>)}
                </nav>
            </div>
        </div>
    )
};
export default Header;
