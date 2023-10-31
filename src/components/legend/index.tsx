import React, { ReactNode } from 'react';

import styles from './legend.module.css';

type Props = {
    title: string | number;
    position?: 'top'| 'left'| 'right'| 'bottom';
    children?: ReactNode | ReactNode[] | string | number;
};

export default function Legend({ title, position = 'top', children }: Props) {

    const positionstyle = styles[`position__${position}`];

    return (
        <div className={`${styles.body} ${positionstyle}`}>
            <div className={styles.title}>{title}</div>
            {children}
        </div>
    );
}
