import React, { useState } from "react";
function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-item">
                    <div className="footer-text">
                        Twitter
                    </div>
                    <div className="footer-text">
                        Facebook
                    </div>
                    <div className="footer-text">
                        Instagram
                    </div>
                    <div id="credit">
                        &copy; 2022 All rights reserved
                    </div>
            </div>
        </div>
    );
}

export default Footer;

// const [name,setName]=useState("Aayushi") //ReactJs  state
// const [person,setPerson]=useState({ firstName: "John", lastName: "Doe",age: 50, eyeColor: "blue"})
// const [myarray,setmyarray]=useState([{name:"orange",id:1},{name:"apple",id:2},{name:"mango",id:3},{name:"banana",id:4}]);

// const [myarray1,setmyarray1]=useState([
//   {
//     name:"Aman",
//     age:23,
//     dob:"5-7-1999",
//     address:{
//       plotno:"222A",
//       colonyname:"Tara Nagar D"
//     }
//    },
/*
const [myarray, setname] = useState({object})
*/
//    { 
//     name:"Aayushi",
//     age:21,
//     dob:"5-7-1999",
//     address:{
//       plotno:"222A",
//       colonyname:"Tara Nagar D"
//     } 
//    },{
//     name:"sgavu",
//     age:37,
//     dob:"5-7-1999",
//     address:{
//       plotno:"222abjgu",
//       colonyname:" asiuagar D"
//     }
//     },{
//       name:"abc",
//       age:16,
//       dob:"5-7-2009",
//       address:{
//         plotno:"2",
//         colonyname:"Nagar D"
//       }
//      }
// ])

// useEffect(() => {
//   const url = "https://jsonplaceholder.typicode.com/users";

//   const fetchData = async () => {
  
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json);
//       setmyarray(json);
//   };
// {myarray &&
//     myarray.map((item,index)=>{
//       return(
//         <div key={index}>
//         <h4>{item.name}</h4>
//         <h6 >{item.id}</h6>
//         </div>
//       )
//     })
//   }
//   <Button onClick={()=>setName("Aman")}>click Me</Button>

