import React from "react";
import { useDispatch } from "react-redux";
import { getNotepads } from "../../modules/Notepad/redux/actions";

interface IProps {
    children: JSX.Element;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getNotepads());
    }, []);
    return children;
}

export default MainLayout;
