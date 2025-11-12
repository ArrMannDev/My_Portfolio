import { ToggleTheme } from "./lightswind/toggle-theme";

function Nav(){
    return(
        <div className="w-full h-auto fixed flex flex-row items-center justify-between p-3 bg-transparent">
            <h1>Logo</h1>

            <nav>
                <ul className="flex flex-row gap-5">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Certificate</a></li>
                </ul>
            </nav>

            <ToggleTheme />
        </div>
    );
}

export default Nav