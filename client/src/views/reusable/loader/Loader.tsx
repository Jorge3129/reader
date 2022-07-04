import React, {FC} from 'react';
import {LoaderStyle} from "./Loader.style";

interface ILoader {
    className?: string;
    light?: boolean
}

const Loader: FC<ILoader> = ({className}) => {

    return (
        <LoaderStyle light>
            <div className="loader">
                <div className="loader_inside">

                </div>
            </div>
        </LoaderStyle>
    );
};

export default Loader;