import logo from "./logo.svg";
import "./App.css";
import { Btn } from "./components/Btn/Btn";
import { Title } from "./components/Title/Title";
import { createContext, useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { StepOne } from "./components/Step1/StepOne";

export const Context = createContext();

function App() {
    const [data, setData] = useState({
        tarif: {
            x3: false,
            x4: false,
        },
        countX3: "",
        countX4: "",
        countEdior: "",
    });
    const handleChange = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = () => {
        console.log(data);
    };
    const toggleChangeActiveTarif = (e, active) => {
        console.log(e.target.dataset);
        setData((prevState) => ({
            ...prevState,
            tarif: { ...prevState.tarif, [e.target.dataset.name]: !active },
        }));
    };
    useEffect(() => {
        if (!data.tarif.x3) {
            setData((prevState) => ({
                ...prevState,
                countX3: "",
            }));
        }
        if (!data.tarif.x4) {
            setData((prevState) => ({
                ...prevState,
                countX4: "",
            }));
        }
    }, [data.tarif.x3, data.tarif.x4]);
    return (
        <Context.Provider
            value={{
                ...data,
                onChange: handleChange,
                toggle: toggleChangeActiveTarif,
            }}
        >
            <div className="App">
                <StepOne/>
                {/* <Title text={'Калькулятор'}/>
                <div className="form">
                    <Form />
                </div>
                <Btn click={handleSubmit} text={"Рассчитать"} /> */}
            </div>
        </Context.Provider>
    );
}

export default App;
