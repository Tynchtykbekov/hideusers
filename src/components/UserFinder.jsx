


 
import React, { useEffect, useState } from 'react';
import classes from './UserFinder.module.css'
import Users from './Users';
 
//   class UserFinder extends Component {
//     constructor() {
//         super() 
//     this.state = {
//         searchTerm: '',
//         filteredUsers: DUMMY_USERS
//     }
 
//     }
//     searchChangeHandler(e) {
//         this.setState({
//             ...this.state,
//             searchTerm: e.target.value})


//     }
//     componentDidMount() {
 
//     }
//     componentDidUpdate(prevProps, prevState) {

// if (prevState.searchTerm !== this.state.searchTerm) {
//     this.setState({
//         ...this.state,
//         filteredUsers: DUMMY_USERS.filter(user => user.name.includes(this.state.searchTerm))

//     })
// }
//     }
//     componentWillUnmount() {

//     }

//     render() {
//         return (
//             <div className={classes.finder}>
//                         <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
//                        <Users  users={this.state.filteredUsers}/>
//                  </div>
//         )
//     }

//   }

 
// const UserFinder = () => {


//     const [searchTerm, setSearchTerm] = useState('')
//     const [filteredUsers, setFillteredUsers] = useState(DUMMY_USERS)
//  useEffect(() => {
//  setFillteredUsers(DUMMY_USERS.filter(user => user.name.includes(searchTerm)))
//  }, [searchTerm])


//     const searchChangeHandler = (e) => {
//         setSearchTerm(e.target.value)
        
//     }

//     return (
//   
//     )
// }
// const UserFinder = () => {

//     const [searchTerm, setSearchTerm] = useState('')
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//     useEffect(() => {
//         setFilteredUsers(DUMMY_USERS.filter(user => user.name.includes(searchTerm)))

//     }, [searchTerm])
//     const searchChangeHandler = (e) => {
//         setSearchTerm(e.target.value)

//     }
//     return (
// //         <div className={classes.finder}>
// //                       <input type="search" onChange={searchChangeHandler}/>
// //                       <Users  users={filteredUsers}/>
// //                        </div>



// //     )
// // }
// // export default UserFinder;
 
const DUMMY_USERS = [
 { id: 'u1', name: 'Max' },
{ id: 'u2', name: 'Manuel' },
 { id: 'u3', name: 'Julie' },
  ];
  
// const UserFinder = () => {
//     const [sear, setSear] = useState('')
//     const [fil, setFil] = useState(DUMMY_USERS)
//     useEffect(() => {
//         setFil(DUMMY_USERS.filter(user => user.name.includes(setSear)))

//     }, [sear])


//     const searHandler = (e) => {
//     setSear(e.target.value)
//     }

//     return (
//         <div className={classes.finder}>
//                          <input type="search" onChange={searHandler}/>
//                           <Users  users={fil}/>
//                                </div>
        
//     )

// }

// export default UserFinder;
const UserFinder = () => {
    const [sear, setSear] = useState('')
    const [fil, setFil] = useState(DUMMY_USERS)
useEffect(() => {
    setFil(DUMMY_USERS.filter(user => user.name.includes(sear)))

}, [sear])
const searchHandler = (e) => {
    setSear(e.target.value)
} 
return (
    <div className={classes.finder}>
                           <input type="search" onChange={searchHandler}/>
                      <Users  users={fil}/>
                      </div>
)

}
export default UserFinder;