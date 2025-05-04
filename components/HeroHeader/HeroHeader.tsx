import css from './HeroHeader.module.scss';
import Image from 'next/image'
import background from '@/public/abstract-logo.svg';
import logo from '@/public/lancsmx5-logo.svg'

export const HeroHeader = () => {

    return (
        <div className={css.header}>
            <div className={css['header_background-wrap']}>

            </div>
            <div className={css.header_logo}>
                <Image
                    alt="Lancs MX-5 Logo"
                    src={logo}
                />
            </div></div>
    )

}