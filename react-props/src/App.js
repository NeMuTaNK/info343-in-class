import React, { Component } from 'react';
import './App.css';
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import Card from "./Components/Card";

class App extends Component {
  handleButtonClick() {
    console.log("Button added to the app was clicked");
  }

  dontHandleButtonClick() {
    console.log("Bad! >:(");
  }

  render() {
    
    let alerts = [
      {
        id: 1,
        message: "Alert me",
        type: "primary"
      },
      {
        id: 2,
        message: "Zombie attack imminent",
        type: "danger"
      },
      {
        id: 3
      }
    ]

    return (
      <div className="container">
        {alerts.map(a => 
        <Alert 
          key = {a.id} 
          message = {a.message} 
          type = {a.type}
        />)}

        <Card 
          title = "Shibe Smile!"
          imgsrc = "shibaInu.jpg"
          imgalt = "Shibe!"
          width = {400}>

          <p>This is my <strong>favorite</strong> dog!</p>
          <p>It is a meme!</p>
          <Alert message = "DOGE" />

        </Card>

        <Card 
          title = "Shibe Smile!"
          imgsrc = "shibaInu.jpg"
          imgalt = "Shibe!"
          width = {400}>

          <p>This is my <strong>favorite</strong> dog!</p>
          <strong><p>IT IS A MEME!</p></strong>
          <Alert message = "DOGE" />
          
        </Card>

        <Button caption = "Click Me!!!"
          onClick = {() => this.handleButtonClick()}
        />

        <br/>
        <br/>

        <Button caption = "Don't Click Me :("
          onClick = {() => this.dontHandleButtonClick()}
        />

      </div>
    );
  }
}

export default App;
