import React from "react";
import { connect } from "react-redux";


const ReduxStateChecker = (props) => {
    return (
      <div>
        <h1>campaigns logged</h1>
        {console.log(props.campaignsView)};
      </div>
    );
}


const mapStateToProps = state => {
    return {
      campaignsView: state.viewCampaign
    };
  };

  export default connect( mapStateToProps )(ReduxStateChecker); 