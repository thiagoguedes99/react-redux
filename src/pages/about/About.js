import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { helo } from '../../actions';

import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('foi no About component')
  }

  componentDidMount() {
    this.props.myComponentAction();
  }
  
  render() {
    console.log('pros', this.props)
    return (
      <article>
        foi aqui About
      </article>
    );
  }
}

// // datas
// const mapStateToProps = (state) => {
//   console.log('mapStateToProps state', state)
//   return {
//     myMesagem: state.msg
//   }
// }

// //actions
// const mapDispatchToProps = (dispatch) => {
//   return {
//     myComponentAction: () => dispatch(helo())
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(About);
export default About;
