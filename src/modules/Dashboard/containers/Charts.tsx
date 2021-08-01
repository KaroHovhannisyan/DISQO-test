import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Chart } from "../../../common/components";
import { RootState } from "../../../redux/reducers";
import { getPublicGists } from "../redux/actions";

const Charts  = () => {
    const dispatch = useDispatch();
    const gistCreated: any = useSelector((state: RootState) => state.publicGists.gistCreated);
    const filesPerGist: any = useSelector((state: RootState) => state.publicGists.filesPerGist);


    React.useEffect(() => {
        dispatch(getPublicGists())
    }, [dispatch]);

    const gistCreatedData = React.useMemo(() => {
        return gistCreated.map((e: any) => ({
            name: moment(new Date(+e.date)).format("DD MMMM hh:mm:ss"),
            length: e.data.length,
        }))
    }, [gistCreated]);

    const filesPerGistData = React.useMemo(() => {
        return filesPerGist.map((e: any) => ({
            name: moment(e.created_at).format("DD MMMM hh:mm:ss"),
            length: Object.keys(e.files).length,
        }))
    }, [filesPerGist]);


    return (
        <div className="charts">
            <Button text="Load more" onClick={() => dispatch(getPublicGists())}/>
            <Chart title="Gists Created" data={gistCreatedData} />
            <Chart title="Files Per Gist" data={filesPerGistData} />
       </div>
    )
}

export default Charts;