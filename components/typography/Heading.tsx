import css from './Heading.module.scss';
import { ReactNode } from 'react';

export const Heading = ({ children, level = 3, className }: { children: ReactNode, level?: number, className?: string }) => {

    const classNames = [css.h, css[`h--${level}`]]
    if (className) { classNames.push(className) }

    const H: any = `h${level}`;

    return (
        <H className={classNames.join(' ')}>{children}</H>
    )

}