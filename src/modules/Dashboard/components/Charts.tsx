import React from "react";
import { useDispatch } from "react-redux";
import { Chart } from "../../../common/components";
import { getPublicGists } from "../redux/actions";

const Charts  = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getPublicGists())
    }, [])
    return (
        <div className="charts">
            <Chart title="Gists Created" data={[]} />
            <Chart title="Files Per Gist" data={[]} />
       </div>
    )
}

export default Charts;