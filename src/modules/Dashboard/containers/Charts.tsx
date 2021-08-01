import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Chart } from "../../../common/components";
import { RootState } from "../../../redux/reducers";
import { IGist } from "../interfaces";
import { getPublicGists } from "../redux/actions";

const Charts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const gistCreated: IGist[] = useSelector(
    (state: RootState) => state.publicGists.gistCreated
  );
  const filesPerGist: IGist[] = useSelector(
    (state: RootState) => state.publicGists.filesPerGist
  );

  React.useEffect(() => {
    dispatch(getPublicGists());
  }, [dispatch]);

  const gistCreatedData = React.useMemo(() => {
    return gistCreated.map((e: IGist) => ({
      name: moment(new Date(+e.date)).format("DD MMMM hh:mm:ss"),
      length: e.data.length,
    }));
  }, [gistCreated]);

  const filesPerGistData = React.useMemo(() => {
    return filesPerGist.map((e: IGist) => ({
      name: moment(e.created_at).format("DD MMMM hh:mm:ss"),
      length: Object.keys(e.files).length,
    }));
  }, [filesPerGist]);

  const handleLoadMore = () => {
    dispatch(getPublicGists());
    setLoading(true);
    // It's not a right way but have not enough time for implemetation )
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="charts">
      <Button text={loading ?"Loading..." :" Load more"} onClick={handleLoadMore} disabled={loading} />
      <Chart title="Gists Created" data={gistCreatedData} />
      <Chart title="Files Per Gist" data={filesPerGistData} />
    </div>
  );
};

export default Charts;
