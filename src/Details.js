import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  render() {
    console.log(this.state);
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, images, city, state, description, name } =
      this.state;
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
      hero = images[0];
    }

    return (
      <div className="details">
        <div className="row">
          <div className="col-sm-1" >
            <img src={hero} height={200} alt={name} />
          </div>
          <div className="col-sm-11">
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
            <button>Adopt {name}</button>
          </div>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
