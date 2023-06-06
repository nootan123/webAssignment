
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
      width: 100vw;
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
        margin-left: 2vw;
    }
    @media screen and (max-width: 1000px) {
      .navbar a:not(:first-child) {display: none;}
      .topnav a.icon {
        float: right;
        display: block;
      }
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
      <nav style="background-color: #FE6E09;height: 100px;margin: 0px;padding: 0px;">

        <div class="navbar">
            <h5 style = ''>Nootan</h5>
            <div>
                <a class="active" href="../pages/index.html"><i ></i> Home</a> 
                <a href="../pages/education.html"><i ></i> Education</a> 
                <a href="../pages/experience/experience.html"><i ></i> Experience</a> 
                <a href="#"><i ></i> Hobbies</a>
                <a href="../pages/careers/career.html"><i ></i> Careers</a>
                <a href="../pages/travel/travel.html"><i ></i> Travel</a>
                <a href="../pages/contact/contact_me.html"><i ></i> Contact Me</a>
            </div>
            



          </div>
    `;
  }
}
 class CustomFooter extends HTMLElement{
  constructor(){
    super();
  }
  connectedCallback(){
    this.innerHTML = `
    <style>
    footer{
      background-color: #FEBC8D;
      margin-top:40px;
    }
    footer div{
  
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 5px;
      padding-bottom: 5px;
    
    }
    footer p{
      width: 40vw;
      margin-right: 0;
      margin-left: 0;
      
    }
    #usefulLinks{
      display: flex;
      flex-direction: column;
      line-height: 0;
      width: 10vw;
    }
    #getInTouch{
      display: flex;
      flex-direction: column;
      line-height: 0;
      width: 10vw;
    }
    #socialMediaIcon{
      display: flex;
      flex-direction: row;
    }
    #socialMediaIcon img{
      padding-right: 10px;
    }
    </style>




    <footer>
    <center>
      <div>
        <p>
          Welcome to my portfolio website. I am an experienced Flutter developer with 2 years of experience. I can deliver high quality mobile apps in reasonable price.
        </p>
        <div id="usefulLinks">
          <p class="mediumFont2">Useful Links</p>
          <a href="../index.html">
            <p>Home</p>
          </a>
          <a href="../education.html">
            <p>Education</p>
          </a>
         <a href="../experience/experience.html">
            <p>Experience</p>
         </a>
         <a href="../careers/career.html">
          <p>Careers</p>
         </a>
         <a href="../travel/travel.html">
            <p>Travel</p>
         </a>
          <a href="../contact/contact_me.html">
            <p>Contact</p>
          </a>
        </div>
        <div id="getInTouch">
          <p class="mediumFont2">
            Get In Touch
          </p>
          <div id="socialMediaIcon">
           <a href="https://www.facebook.com/nootan123/" target="_blank"><img src="../assets/icons/facebook.png" alt="" height="20px" width="20px"></a> 
            <a href="https://www.google.com/" target="_blank"><img src="../assets/icons/google.png" alt="" height="20px" width="20px"></a>
            <a href="https://github.com/nootan123" target="_blank"><img src="../assets/icons/github.png" alt="" height="20px" width="20px"></a> 
           <a href="https://www.linkedin.com/in/nootan-bhattarai-63b413138/" target="_blank"><img src="../assets/icons/linkedIn.png" alt="" height="20px" width="20px"></a> 


          </div>
        </div>

      </div>

    </center>
  
  </footer>


    `
  }
 }


customElements.define('custom-footer', CustomFooter);
customElements.define('header-component', NavigationBar);