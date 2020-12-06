import React from "react";
import { connect } from "react-redux";


const ReduxStateChecker = (props) => {
    return (
      <div>
        <h1>campaigns logged</h1>
        {console.log(props.campaigns)};
      </div>
    );
}


const mapStateToProps = state => {
    return {
      campaigns: state.currentCampaigns
    };
  };

  export default connect(mapStateToProps)(ReduxStateChecker);