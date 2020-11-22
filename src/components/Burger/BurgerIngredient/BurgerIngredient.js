import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';
import PropTypes from 'prop-types'; 


class BurgerIngredient extends Component {

    ingredient = null;

    render() {

        if (this.props.type === 'bread-bottom') this.ingredient = <div className={classes.BreadBottom}></div>
        else if (this.props.type === 'bread-top')  this.ingredient = (
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        )
        else if (this.props.type === 'meat') this.ingredient = <div className={classes.Meat}></div>
        else if (this.props.type === 'cheese') this.ingredient = <div className={classes.Cheese}></div>
        else if (this.props.type === 'salad') this.ingredient = <div className={classes.Salad}></div>
        else if (this.props.type === 'beacon') this.ingredient = <div className={classes.Beacon}></div>
        else this.ingredient = null; 

        return this.ingredient; 
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}   

export default BurgerIngredient; 