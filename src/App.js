import "./App.css";
import { useState } from "react";
function App() {
    const [money, setMoney] = useState(0);
    const [man, setMan] = useState(0);
    const [resu, setResu] = useState(0);
    const [tea, setTea] = useState(0);
    const person = (e) => {
        setMan(parseInt(e.target.value));
    };
    const schet = (e) => {
        setMoney(parseInt(e.target.value));
    };
    return (
        <div className="wrap">
            <input onChange={person} type="number" />
            <input onChange={schet} type="number" />
            <div className="extra">
            <p className="qwe">Чаевые</p>
            <select className="Tea">
                <option value="60%" >60</option>
                <option value="40%" >40</option>
                <option value="20%">20</option>
            </select>
            </div>
           
            <button
                className="count"
                onClick={() => {
                    let check = money / man;
                    // let Aet = money * (.value / 100)
                    setResu(Math.round(check));
                    setTea(Math.round(Aet))
                }}
            >
                Посчитать
            </button>
            <p className="Res">Денег c каждого-{resu}</p>
            <p className="Tea"> Чаевые-{tea}</p>
        </div>
    );
}

export default App;
