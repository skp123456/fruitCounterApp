import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
    }))
  }

  eatBanana = () => {
    this.setState(prevState => ({
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-card-container">
          <h1 className="main-heading">
            Bob ate <span className="count">{mangoes}</span> mangoes{' '}
            <span className="count">{bananas}</span> bananas
          </h1>
          <div className="image-container">
            <div className="content-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="mango-image"
                alt="mango"
              />
              <br />
              <button className="button" type="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="content-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="mango-image"
                alt="banana"
              />
              <br />
              <button className="button" type="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
