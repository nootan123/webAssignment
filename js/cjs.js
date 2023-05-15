// const template = document.createElement('template');

// template.innerHTML = `
//   <h1>Hello, World!</h1>
//   <p>And all who inhabit it</p>
// `;

// document.body.appendChild(template.content);

class NavigationBar extends HTMLElement{
    constructor(){
        super();
    }

  connectedCallback() {
    this.innerHTML = `
      <style>
      body{
        margin: 0px;
    }
    
    #navTitle{
        position: absolute;
        left: 2.97%;
        right: 89.84%;
        top: 8%;
        bottom: 0px;
        
        font-family: 'IBM Plex Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 41px;
        line-height: 53px;
        
        color: #000000;
    }
    li{
        display: inline;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      
    #navContents{
        position: absolute;
    left: 39.59%;
    right: 9px;
    top: 8.48%;
    bottom: 0px;
    }
    
    body {font-family: Arial, Helvetica, sans-serif;}
    
    .navbar {
      width: 100%;
      background-color: #FE6E09;
      overflow: auto;
    }
    
    .navbar a {
      float: left;
      margin-top: 50px;
      padding-top: 50px;
      padding-bottom: 20px;
      margin-inline: 0px;
      padding-inline: 30px;
      color: black;
      text-decoration: none;
      font-size: 17px;
    }
    .navbar div{
        margin-left: 25%;
    }
    .navbar h5 {
        float: left;
        margin-top: 100px;
        margin-inline: 20px;
        padding: 10px;
        color: black;
        text-decoration: none;
        font-size: 17px;
      }
      
    /* .navbar a:hover {
      background-color: #BE4F01;
    } */
    
    .active {
      /* background-color: #04AA6D; */
      color: white;
    
    }
    
    @media screen and (max-width: 500px) {
      .navbar a {
        float: none;
        display: block;
      }
    }
      </style>
      <nav style="background-color: #FE6E09;height: 165px;margin: 0px;padding: 0px;">

        <div class="navbar">
            <h5>Nootan</h5>
            <div>
                <a class="active" href="#"><i ></i> Home</a> 
                <a href="#"><i ></i> Education</a> 
                <a href="#"><i ></i> Experience</a> 
                <a href="#"><i ></i> Hobbies</a>
                <a href="#"><i ></i> Careers</a>
                <a href="#"><i ></i> Travel</a>
                <a href="#"><i ></i> Contact Me</a>
            </div>
            



          </div>
    `;
  }
}


customElements.define('header-component', NavigationBar);