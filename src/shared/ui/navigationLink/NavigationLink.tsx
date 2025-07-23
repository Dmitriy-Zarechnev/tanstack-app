import { Link, LinkProps } from '@tanstack/react-router'
import s from './NavigationLink.module.css'

type Props = LinkProps & {
  title: string
}

export const NavigationLink = ({ title, ...rest }: Props) => {
  return (
    <Link {...rest} className={s.navLink}>
      {title}
    </Link>
  )
}
