import React from "react";
var Parse = require('parse/node');
Parse.serverURL = 'https://parseapi.back4app.com/';
Parse.initialize("aXKfDZCc5tjs7oSRkmcZaxmsDtAEQwGPvOqNLdfl", "AebKXsVh6qyaUx73vYGCZV8Nd6Egb9ofmpD2QGxi");
// export default function Feeds() {
//   // Simple syntax to create a new subclass of Parse.Object.
// let User = Parse.Object.extend("User");
// let query = new Parse.Query(User);
// let users = query.get("JiJAACwaf8");
// console.log(users);
//   return (
    
//     <>
//       <div>
//         <h2>{users.get}</h2>
//       </div>
//     </>
//   );
// }

export default class Feeds extends React.Component {
  render() {

      const MyCustomClass = Parse.Object.extend('User');
      const query = new Parse.Query(MyCustomClass);
      //query.equalTo("myCustomKey1Name", "myCustomKey1Value");
      //query.get("name");
      query.find().then((results) => {
          // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
      //   if (typeof document !== 'undefined') document.write(`ParseObjects found: ${JSON.stringify(results)}`);
      //   console.log('ParseObjects found:', results);
      // }, (error) => {
      //   if (typeof document !== 'undefined') document.write(`Error while fetching ParseObjects: ${JSON.stringify(error)}`);
      //   console.error('Error while fetching ParseObjects', error);
      let fff = JSON.stringify(results);
      let user = JSON.parse(fff);
      {user.map((use,index)=> {
         console.log(use.name);
      //return <h1>{use.name}</h1>
         
      })}

      });

      
    
  return <div>hello</div>;
  }
}