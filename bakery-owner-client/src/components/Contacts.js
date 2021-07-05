import React, { Component } from 'react'

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts">
            <h1>Our Team</h1>
            <div className="row">
               <div className="column">
                   <div className="card">
                <img className="photo1" src="ashik.jpg" alt="ashik"></img>
                <div className="authorinfo">
                <p class="title">Designer and Developer</p>
                    Name : Ashik MP<br/>
                    Email : ashik2001mp@gmail.com<br/>
                    GitHub : <a href="https://github.com/ashvegeta">https://github.com/ashvegeta</a>
                </div>
                    </div>
            </div>
            <div className="column">
                <div className="card">
                <img className="photo2" src="arun.jpeg" alt="arun"></img>
                <div className="authorinfo">
                <p class="title">Designer and Developer</p>
                    Name : Arun Joshua Kennedy<br/>
                    Email : arunkennedy78@gmail.com<br/>
                    GitHub : <a href="https://github.com/Kraken676">https://github.com/Kraken676</a>
                </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
