import React from 'react';
import ItemPlop from './components/itemPlop';
import SuperCard from './components/super-card';
import icon1 from "./img/icon-work.svg"
import icon2 from "./img/icon-play.svg"
import icon3 from "bg-color-study"
import icon4 from "bg-color-exercise"
import icon5 from "bg-color-social"
import icon6 from "bg-color-self-care"

class App extends React.Component {

  state = {time:"daily"}

  onNavigationParent = (destination) => {
    this.setState({
      time : destination
    })
  }

  render() {
    const customData = require('./data.json');
    // const customColor = ["bg-color-work","bg-color-play","bg-color-study","bg-color-exercise","bg-color-social","bg-color-self-care"]
    // const customIcon = [icon1,icon2,icon3,icon4,icon5,icon6]

    return (
      <div className="container d-flex align-items-center my-3 my-lg-5">
        <div className="row my-lg-5">
          <div className="col-12 col-sm-4 col-lg-3 mb-4">
            <SuperCard onNavigation={this.onNavigationParent}/>
          </div>
          <div className=" col-12 col-sm-8 col-lg-9">
            <div className="row"> 
              {/* {customData.map((element,index) =>
                <div className="col-12 col-sm-6 col-lg-4">
                  <ItemPlop 
                    bgcolor={customColor[index]}
                    icon={customIcon[index]}
                    title={element.title}
                    hrs={element.timeframes[this.state.time].current}
                    week={element.timeframes[this.state.time].previous} 
                  />
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
