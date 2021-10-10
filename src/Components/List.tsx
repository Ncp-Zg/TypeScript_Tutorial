import React, { FunctionComponent } from 'react'
import "../App2.css"

interface IProps {
    people:{
        name:string
        age:number
        url:string
        note?:string
    }[]
}

const List : FunctionComponent<IProps> = (props) => {

    const renderList = ()=>{
        return people.map((person)=>{
            return(
                <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age}</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
            
        })
    }

    const {people}=props
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List
