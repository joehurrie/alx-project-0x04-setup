import { useState } from "react";

const CounterApp: React.FC = () => {
    const [count, setCount] = useState(0)

    const increment =() => {
        setCount(count + 1);
    };
    const decrement = () =>{
        setCount(count > 0 ? count - 1 : 0);
    };

    return(
        <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-extrabold mb-6">Fun Counter App</h1>
            <p className="text-lg font-medium mb-4"> Current count: {count}
                {count === 0 ? "No Clicks yet"
                : count % 10 === 0 && count !== 0 ? "you're on fire!" : ""}

            </p>

            <p className = "text-6xl font-bold mb-8">
                {count}
            </p>
            <div className="flex space-x-4">
                {/*Buttons*/}
                <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"> Increase</button>
                <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"> Decrease</button>
            </div>
            <p className="mt-8 text-sm text-white opacity-75"> Keep Clicking, who knows what happens at 50 </p>
        </div>
    );



};

export default CounterApp;