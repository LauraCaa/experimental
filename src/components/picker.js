import React,{useState} from 'react'
export default function picker(){
    const[date,setDate]= useState();
    
    return(
        <div className="container mt-5">
            <h1 className="mb-4">Selecciona una Fecha: {date}</h1>
            <div className="form-group">
                <input
                    type="date"
                    className="form-control"
                    onChange={(event) => setDate(event.target.value)}
                />
            </div>
        </div>
  )}