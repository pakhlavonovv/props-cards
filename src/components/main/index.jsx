import React, { Component } from 'react'
import Card from "../card-page"
import "./style.scss"

export default class index extends Component {
    state = {
        products: [
            {id: 1, name: "Lion", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', killogram: '146kg', eat: 'meat'},
            {id: 1, name: "Gorilla", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', killogram: '205kg', eat: 'insects,plants'},
            {id: 1, name: "Zebra", description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A similique magnam eveniet esse nam magni expedita in culpa! Temporibus animi voluptate obcaecati, non et.', killogram: '322kg', eat: 'plants'},
        ]
    }
    render() {
        const {products} = this.state
        return (
            <div>
                <h1 className='text-center'>Animals</h1>
                <Card products={products}/>
            </div>
        )
    }
}
