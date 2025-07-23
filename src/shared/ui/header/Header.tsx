import { ReactNode } from 'react'
import s from './Header.module.css'
import { NavigationLink } from '../navigationLink/NavigationLink'

type Props = {
  renderAccountBar: () => ReactNode
}

export const Header = ({ renderAccountBar }: Props) => {
  return (
    <header className={s.header}>
      <div className={s.navContainer}>
        <nav className={s.navLinks}>
          <NavigationLink title={'Playlists'} to={'/'} />
          <NavigationLink title={'My Playlists'} to={'/my-playlists'} />
          <NavigationLink title={'Temp page'} to={'/oauth/callback'} />
        </nav>
        <div className={s.accountBar}>{renderAccountBar()}</div>
      </div>
    </header>
  )
}
