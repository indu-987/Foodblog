import React from "react";
import '../Styles/Home.css'
import bread from '../Images/bread.jpg'
import waffle from "../Images/waffle.jpg"
import sweet from '../Images/sweet.jpg'


const Home = () => {
  return (
    <div className="HomePage">
      <div className="maincomp">
        <div className="imgdiv">
        <img  style={ { paddingLeft:"130px",
          height:'550px', width:'620px'}} src={bread} alt="" />
        </div>

        <div className="imgDetails">
          <p style={{marginLeft:'40px'}}>FEATURED BLOGS</p>
          <h1 style={{marginLeft:'40px'}}>
            Love  the<br></br>Delicious & <br></br> teasty Food
          </h1>
          <p className="imgpara" style={{marginLeft:'40px',color:'grey'}}>
            A small river named Duden flows <br></br> by their place and
            supplies it<br></br> with the necessary regelialia
          </p>

          <button style={{marginLeft:'40px'}}>Read More</button>
        </div>

        <div></div>
      </div>

      <div className="Recent">
        <h1>Recent Stories</h1>

        <div className="RecentBlock">
          <div>
            <div className="firstrow">
              <div className="blockdiv">
                <img
                  src={waffle}
                  alt=""
                  width={300}
                  height={280}
                />
                <p>Tasty & Delicious Foods</p>
              </div>

              <div className="blockdiv">
                <div className="secndpic">
                  <img
                    width={300}
                    height={300}
                    src={sweet}
                    alt=""
                  />
                </div>
                <p className="ptag">
                  Tasty & Delicious Foods from <br></br> Scotland
                </p>
              </div>
            </div>

            <div className="secondrow">
              <div className="blockdiv">
                <img
                  src="https://images.unsplash.com/photo-1526016650454-68a6f488910a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  width={300}
                  height={280}
                />
                <p className="ptag">Tasty & Delicious Foods</p>
              </div>

              <div className="blockdiv">
                <div className="secndpic">
                  <img
                    width={300}
                    height={300}
                    src="https://images.squarespace-cdn.com/content/v1/560c84dae4b05486deb306ad/1556514636658-SS0Z4DZNFRL5AGY4WO2A/how+to+eat+sauerkraut?format=750w"
                    alt=""
                  />
                </div>
                <p className="ptag">Tasty & Delicious Foods</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              alt=""
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
