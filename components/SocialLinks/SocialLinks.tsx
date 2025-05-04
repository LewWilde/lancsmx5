import { ReactNode } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import css from './SocialLinks.module.scss'

export const SocialLinks = ({ children }: { children: ReactNode }) => {

    return (
        <div className={css.socialLinks}>{children}</div>
    )

}

export const SocialLink = ({ href, children, icon }: { href: string, children?: ReactNode, icon?: IconProp }) => {

    return (
        <a href={href} className={css.link}>
            {icon && <FontAwesomeIcon className={css.link_icon} icon={icon} />}
            {children && <div className={css.link_text}>{children}</div>}
        </a>
    )


}