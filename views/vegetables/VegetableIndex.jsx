const React = require("react")


class VegetableIndex extends React.Component {
  render() {
    const { vegetables } = this.props
    return(
      <div>
        <h1> Vegetable Index Page </h1>
        <ul>
        <nav>
          <a href = "/vegetables/New">Create a new Vegetable</a>
        </nav>
          {
            vegetables.map((vegetable, i) => {
              return (
                <li>
                  The{' '}
                    <a href={`/vegetables/${i}`}>
                      {vegetable.name}
                    </a>
                    {' '}
                    is {vegetable.color} <br></br>
                    {
                      vegetable.readyToEat ? 
                        `It is ready to eat`
                      : 
                        `It is not ready to eat`
                    }
                                      <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

module.exports = VegetableIndex