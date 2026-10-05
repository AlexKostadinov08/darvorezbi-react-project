import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router'
import './Header.css'

const navLinks = [
    { to: '/', label: 'Начало', icon: 'i-home' },
    { to: '/catalog', label: 'Каталог', icon: 'i-shop' },
    // { to: '/gallery', label: 'Галерия', icon: 'i-gallery' },
    // { to: '/blog', label: 'Блог', icon: 'i-blog' },
    // { to: '/about', label: 'За нас', icon: 'i-about' },
    // { to: '/contacts', label: 'Контакти', icon: 'i-mail' },
]
const activeClass = ({ isActive }) => (isActive ? 'is-active' : undefined)

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const closeMenu = () => setIsMenuOpen(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dh-locked', isMenuOpen)
        return () => document.documentElement.classList.remove('dh-locked')
    }, [isMenuOpen])

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false)
                setIsSearchOpen(false)
            }
        }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [])

    const searchSubmitHandler = (e) => {
        e.preventDefault()
        const query = search.trim()
        navigate(query ? `/catalog?search=${encodeURIComponent(query)}` : '/catalog')
        setSearch('')
        setIsSearchOpen(false)
        closeMenu()
    }

    return (
        <>
            {/* SVG спрайт с иконките - ползват се с <use href="#i-..."> */}
            <svg className="dh-sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <symbol id="i-burger" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3.5 7h17" /><path d="M3.5 12h17" /><path d="M3.5 17h17" /></g></symbol>
                <symbol id="i-close" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M5.8 5.8l12.4 12.4" /><path d="M18.2 5.8L5.8 18.2" /></g></symbol>
                <symbol id="i-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.8 4a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6z" /><path d="M15.8 15.8 20.4 20.4" /></g></symbol>
                <symbol id="i-user" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" /><path d="M5 20a7 7 0 0 1 14 0" /></g></symbol>
                <symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.6 6.2h16.8v11.6H3.6z" /><path d="M3.6 6.2 12 12.8l8.4-6.6" /></g></symbol>
                <symbol id="i-home" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3.8 10.6 12 4.2l8.2 6.4V20H3.8z" /><path d="M9.6 20v-5.2h4.8V20" /></g></symbol>
                <symbol id="i-shop" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8.6h16V20H4z" /><path d="M4 8.6 6.2 4h11.6L20 8.6" /><path d="M9.4 12.4h5.2" /></g></symbol>
                <symbol id="i-gallery" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5.4h16v13.2H4z" /><path d="M4 15.2l4.4-4 3 2.8 2.6-2.6L20 16.4" /><path d="M9 9.4h.01" /></g></symbol>
                <symbol id="i-blog" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4.4 6.6h15.2" /><path d="M4.4 12h15.2" /><path d="M4.4 17.4h9.4" /></g></symbol>
                <symbol id="i-about" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.8 20.2 12 12 20.2 3.8 12z" /><path d="M12 8.6v6.8" /></g></symbol>
            </svg>

            <header id="dh" className={isScrolled ? 'dh is-scrolled' : 'dh'}>
                <a className="dh-skip" href="#dr-main">Към съдържанието</a>

                <div className="dh-bar">
                    <div className="dh-left">
                        <button
                            className="dh-icon-btn dh-burger"
                            type="button"
                            aria-expanded={isMenuOpen}
                            aria-controls="dh-mobile"
                            aria-label="Отвори менюто"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="dh-i" width="24" height="24" aria-hidden="true" focusable="false"><use href="#i-burger" /></svg>
                        </button>

                        <Link to="/" className="dh-logo" onClick={closeMenu}>
                            <img
                                className="dh-logo-img"
                                src="/images/darvorezbi-logo.svg"
                                alt="Дърворезби"
                                width="219"
                                height="56"
                                fetchPriority="high"
                            />
                        </Link>
                    </div>

                    <div className="dh-right">
                        <nav className="dh-nav" aria-label="Главна навигация">
                            <ul className="dh-nav-list">
                                {navLinks.map(link =>
                                    <li key={link.to}><NavLink to={link.to}>{link.label}</NavLink></li>
                                )}
                            </ul>
                        </nav>

                        <span className="dh-rule" aria-hidden="true"></span>

                        <div className="dh-actions">
                            <div className="dh-search" role="search">
                                <button
                                    className="dh-icon-btn"
                                    type="button"
                                    aria-expanded={isSearchOpen}
                                    aria-label="Търсене"
                                    onClick={() => setIsSearchOpen((open) => !open)}
                                >
                                    <svg className="dh-i" width="21" height="21" aria-hidden="true" focusable="false"><use href="#i-search" /></svg>
                                </button>

                                {isSearchOpen && (
                                    <div className="dh-pop">
                                        <form className="dh-pop-form" onSubmit={searchSubmitHandler}>
                                            <svg className="dh-i dh-i-gold" width="18" height="18" aria-hidden="true" focusable="false"><use href="#i-search" /></svg>
                                            <input
                                                className="dh-input"
                                                type="search"
                                                name="search"
                                                autoComplete="off"
                                                aria-label="Търсене на резби"
                                                placeholder="Търсене на резби…"
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                                autoFocus
                                            />
                                            <span className="dh-kbd" aria-hidden="true">esc</span>
                                        </form>
                                    </div>
                                )}
                            </div>

                            <Link className="dh-icon-btn" to="/login" aria-label="Профил">
                                <svg className="dh-i" width="22" height="22" aria-hidden="true" focusable="false"><use href="#i-user" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className={isMenuOpen ? 'dh-scrim is-open' : 'dh-scrim'} onClick={closeMenu}></div>

            <div
                id="dh-mobile"
                className={isMenuOpen ? 'dh-drawer is-open' : 'dh-drawer'}
                role="dialog"
                aria-modal="true"
                aria-label="Меню"
            >
                <div className="dh-drawer-top">
                    <button className="dh-icon-btn" type="button" aria-label="Затвори менюто" onClick={closeMenu}>
                        <svg className="dh-i" width="22" height="22" aria-hidden="true" focusable="false"><use href="#i-close" /></svg>
                    </button>
                </div>

                <div className="dh-drawer-search">
                    <form className="dh-msearch" role="search" onSubmit={searchSubmitHandler}>
                        <svg className="dh-i dh-i-gold" width="19" height="19" aria-hidden="true" focusable="false"><use href="#i-search" /></svg>
                        <input
                            className="dh-input"
                            type="search"
                            name="search"
                            autoComplete="off"
                            aria-label="Търсене на резби"
                            placeholder="Търсене на резби…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>

                <nav aria-label="Мобилна навигация">
                    <ul className="dh-rows">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <NavLink to={link.to} end={link.to === '/'} className={activeClass} onClick={closeMenu}>
                                    <svg className="dh-i" width="20" height="20" aria-hidden="true" focusable="false"><use href={`#${link.icon}`} /></svg>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="dh-drawer-sep" aria-hidden="true"></div>

                <ul className="dh-rows">
                    <li>
                        <NavLink to="/login" className={activeClass} onClick={closeMenu}>
                            <svg className="dh-i" width="20" height="20" aria-hidden="true" focusable="false"><use href="#i-user" /></svg>
                            Профил
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
