import React from "react";

export enum IconKey {
    COPY = 'COPY',
    ADD = 'ADD',
    DELETE = 'DELETE',
    ANGLE_DOWN = 'ANGLE_DOWN',
    ANGLE_UP = 'ANGLE_UP',
    ANGLE_RIGHT = 'ANGLE_RIGHT',
    NIGHT = 'NIGHT',
    DAY = 'DAY',
}

export const icons: { [key in IconKey]: JSX.Element } = {
    [IconKey.COPY]: <i className="fa-regular fa-copy"></i>,
    [IconKey.ADD]: <i className="fa-solid fa-plus"/>,
    [IconKey.DELETE]: <i className="fa-solid fa-trash"></i>,
    [IconKey.ANGLE_DOWN]: <i className="fa-solid fa-angle-down angle_icon"></i>,
    [IconKey.ANGLE_UP]: <i className="fa-solid fa-angle-up angle_icon"></i>,
    [IconKey.ANGLE_RIGHT]: <i className="fa-solid fa-angle-right angle_icon"></i>,
    [IconKey.NIGHT]: <i className="fa-solid fa-moon"></i>,
    [IconKey.DAY]: <i className="fa-solid fa-sun"></i>,
} as const

export type IconKeys = keyof typeof icons
