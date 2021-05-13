import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import Playerdata from '../../data.json';
import './Selector.css';
const Selector = () => {
    const [Players, setPlayers] = useState([]);
    const [Cart, setCart] = useState([]);
    const [Salary, setSalary] = useState(0);
    useEffect(()=>{
        setPlayers(Playerdata)
    }, []);
    const addPlayers = (data, e) => {
        const thisElement = e.target.id;
        const dataInfo = e.target.dataset.info;
        const getElement = document.getElementById(thisElement);
        if(dataInfo == 0){
            const totalSalary = Salary+data.salary;
            const newCart = [...Cart, data];
            setCart(newCart);
            setSalary(totalSalary);
            getElement.innerText = "selected";
            getElement.style.backgroundColor = '#f1f1f1';
            getElement.setAttribute('data-info', 1);
        }else{
            getElement.innerText = "select";
            getElement.style.backgroundColor = '#ffc107';
            getElement.setAttribute('data-info', 0);
            
            Cart.map((c, index) => {
                if(c.id === data.id){
                    Cart.splice(index, 1);
                    const newCart = [...Cart];
                    setCart(newCart);
                    const totalSalary = Salary-data.salary;
                    setSalary(totalSalary);
                }
            })
        }
    }
    return (
        <div className="py-5 selector">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {
                                Players.map(eachPlayer => 
                                    <Player player={eachPlayer} addPlayers={addPlayers}></Player>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cartSection sticky-top">
                            <h2>Select Players</h2>
                            <p>Total Player: <span>{Cart.length}</span></p>
                            <h3>${Salary}</h3>
                            <div className="selectedAllPlayers">
                                {
                                    Cart.map(p=>
                                        <span><img src={p.img} alt=""/> {p.name}</span>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    );
};

export default Selector;