import React, {FC} from 'react';

interface IProps {
    show?:  boolean,
    up?: boolean
}

const SortAngle: FC<IProps> = ({up, show}) => {

    if (!show) return null;

    return (
        <span>
            {up
                ? <i className="fa-solid fa-angle-up"></i>
                : <i className="fa-solid fa-angle-down"></i>}
        </span>
    );
};

export default SortAngle;