import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchThreads } from "../actions/threadActions";
import { Link } from "react-router-dom";

export class SearchResults extends Component {
    
    constructor(){
        super();
        this.state = {
            threads: [],
        }
    }
    componentDidMount() {
        this.props.searchThreads(this.props.match.params.data);
        this.setState({threads: this.props.threads.threads});
        
      }
    
      componentWillReceiveProps(nextProps) {
       
        if (nextProps.threads) {
          this.props.searchThreads(this.props.match.params.data);
          this.setState({threads: this.props.threads.threads});
          console.log(this.state);
        }
      }
    render() {
        return (
            <div>
                { this.state.threads.map( t=> {
                    <Link to ={`/threads/${t.id}`}>{t.title}</Link>

                }

                )

                }
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    threads: state.threads
})

export default connect(mapStateToProps,{searchThreads})(SearchResults)

