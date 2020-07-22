import React, { Component } from 'react';

export default class FrontPage extends Component {
  componentDidMount() {
    let today = new Date();
    let currentHour = today.getHours();
    let greeting = document.getElementById('greeting');

      if (currentHour < 12) {
        greeting.innerHTML= 'Good morning,';
      } else if (currentHour < 18) {
        greeting.innerHTML= 'Good afternoon,';
      } else {
        greeting.innerHTML= 'Good evening,';
      }
  };

render(){
  return (
  <section className="App-section">
    <h3>
      A warm <span className="hello">hello</span> to the team over at the New York Times!
  </h3>
<br/>
  <p id="greeting">G'day,</p>
  <br/>
  <p className="body-copy">
    I hope you're enjoying your week, as much as you can, given the current pandemic.
    I'd like to say thank you to the Megan and Tara over at the Times for this opportunity.
    I'm grateful for it, and I am truly excited by the possibility of working alongside the fantastic team over at the Times.<br/>
  <i>(if you're reading this, I'm talking about you!)</i><br/><br/>
  Let's get this project started!
  </p>
<br/>
  <p className="body-copy">Cheers,<br/>Darryl J. Zeigler</p>
  </section>
)
}
}
