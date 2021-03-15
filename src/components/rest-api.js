import React from 'react';
import Axios from 'axios';

class RestApi extends React.Component {
    state = {
        region: null,
        runtime: null,
        error: null
    };

    callRestApi = () => {
        Axios.get("https://4v4h0nqgr2.execute-api.us-east-1.amazonaws.com/Dev")
            .then((result) => {
                console.log(result.data.statusCode);
                console.log(result.data.body);
                this.setState(
                    {
                        region: result.data.body.region,
                        runtime: result.data.body.runtime,
                        error: null
                    });
            })
            .catch(error => {
                //display error on UI
                console.log('Catch :', error)
                this.setState({
                    region: null,
                    runtime: null,
                    error: error
                });
            })
    };

    render() {
        return (
            <div style={{ marginTop: "5em" }}>
                <p>Rest API call</p>
                <button onClick={this.callRestApi} className="btn btn-primary"> Click me </button>

                { (this.state.region != null) && <div style={{ marginTop: "3em" }} >
                    <div>Region : {this.state.region}</div>
                    <div>Runtime : {this.state.runtime}</div>
                </div>
                }

            </div>
        );
    }
}

export default RestApi;