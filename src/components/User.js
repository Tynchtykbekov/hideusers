import { Component } from 'react';
import classes from './User.module.css';


class User extends Component{
  
  render() {
    console.log(this.props)
    return <li className={classes.user}>{this.props.name}</li>

  }
}
export default User
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;
// let obj = {
//   render() {
//     return (

//     )
//   }
// }
// obj.render()
let commponent = {
  render() {
    return (
<div>This is a new Page</div>

    )
  },
  
}
