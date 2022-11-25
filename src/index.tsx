import ReactDOM from "react-dom/client";
import GuestList from "./state/guestList";
import UserSearch from "./state/userSearch";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            <GuestList />
            <div>
                <UserSearch />
            </div>
        </div>
    );
};  

root.render(<App />);