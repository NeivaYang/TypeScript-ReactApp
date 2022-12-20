import { useState, useRef } from "react";

const users = [
    { name: 'Sarah', age: 20 },
    { name: 'jjjjj', age: 20 },
    { name: 'uuuusss', age: 20 }
]

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        setUser(foundUser);
    };
    
    return ( 
    <div>
        <h3>Pesquisar</h3>
        <input 
            ref={inputRef} 
            value={name} 
            onChange={e => setName(e.target.value)} 
        />   
        <button onClick={onClick}>Pesquisar</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
);
};

export default UserSearch;