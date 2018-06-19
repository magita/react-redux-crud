import React, { Component } from 'react';
var App = () => {
  const profiles = [
  {name: "Taro", age: 10},
  {name: "Hanako", age: 10},
  {name: "Jiro"}
      ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User aaa={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

var User = (props) => {
  return <div>Hello! I am {props.aaa}. I am {props.age} years old.
      </div>;
}

User.defaultProps = {
  age: 1
}

export default App;
