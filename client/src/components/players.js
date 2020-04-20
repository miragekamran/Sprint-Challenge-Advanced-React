import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    console.log("In CDM");
    fetch("http://localhost:5000/api/players")
      .then((res) => res.json())
      .then((results) => {
        console.log("Results", results);
        this.setState({ players: results });
      });
  }
  render() {
    return (
      <div className="container">
        {this.state.players.map((thePlayer) => (
          <Card key={thePlayer.id} className="cardRoot" variant="outlined">
            <CardContent>
              <Typography
                className="typography"
                color="textSeconary"
                gutterBottm
              >
                {thePlayer.country}
              </Typography>
              <Typography variant="h3" component="h2">
                {thePlayer.name}
              </Typography>
              <Typography className="typo" color="textSecondary">
                <b>Searches: </b> {thePlayer.searches}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}
