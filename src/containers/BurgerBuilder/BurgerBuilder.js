import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'; 

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            beacon: 0,
            meat: 0, 
            cheese: 0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div> Burger control </div>
            </Aux>
        )
    }
}

export default BurgerBuilder;