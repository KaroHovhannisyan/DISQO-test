import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Chart } from "../../../common/components";
import { getPublicGists } from "../redux/actions";

const Charts  = () => {
    const dispatch = useDispatch();
    const publicGists: any = useSelector(
        (state: any) => state.publicGists.data,
      );

    React.useEffect(() => {
        dispatch(getPublicGists())
    }, []);

    const createdGists = React.useMemo(() => {
        console.log(publicGists);
        return publicGists.map((e: any) => ({
            name: moment(new Date(+e.date)).format("DD MMMM hh:mm:ss"),
            length: e.data.length,
        }))
    }, [publicGists]);


    return (
        <div className="charts">
            <Chart title="Gists Created" data={createdGists} onLoadMore={() => dispatch(getPublicGists())} />
            {/* <Chart title="Files Per Gist" data={[]} /> */}
       </div>
    )
}

export default Charts;