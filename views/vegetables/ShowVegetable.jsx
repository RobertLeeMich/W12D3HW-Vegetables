const React = require('react')

//this is a class component extending a component from react
    class ShowVegetable extends React.Component {
       render () {
        //this is receiving the props
        const vegetable = this.props.vegetable
        //we can also destructure the prop
        // const {name, color, readyToEat} = this.props.vegetable
        return (
        <div>
            <h1> Show Vegetable Page </h1>
            the {vegetable.name} is {vegetable.color}. And {vegetable.readyToEat ? "It's ready to eat" : "It's not ready to eat"}
        </div>
         );
        }
     }

    //hooks will not work in a server environment because we don't have a virtualDOM for react to manipulate

    //this is a function that does the same thing as above
    // function Show (props) {
    //     const {name, color, readyToEat} = props.vegetable
    //     return (
    //     <div>
    //         <h1> Show Page </h1>
    //         the {name} is {color}. And {readyToEat ? "It's ready to eat" : "It's not ready to eat"}
    //     </div>
    //     )
    // }
     module.exports  = ShowVegetable;

     //How does the component recieve the data? - through render method, it's the serverside rendering version of passing props.

     //What lines of code allow us to use the JSX view engine? - 