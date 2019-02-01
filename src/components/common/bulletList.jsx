import React, { Fragment } from "react";

const bulletList = ({ data }) => {
  return (
    <Fragment>
      {data.map(item => {
        return (
          <div className="row mb-3">
            {/* <!-- Grid column --> */}
            <div className="col-1">
              <i className={data.icon} />
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-xl-10 col-md-11 col-10">
              <h5 className="font-weight-bold mb-3">{data.head}</h5>
              <p className="grey-text">{data.body}</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
        );
      })}
    </Fragment>
  );
};

export default bulletList;
