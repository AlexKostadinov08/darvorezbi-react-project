import { Link } from "react-router";
import './Header.css'

export default function Header() {
    return (
        <main>
            <svg className="dh-sprite" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
                <symbol id="i-burger" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M3.5 7h17" /><path d="M3.5 12h17" /><path d="M3.5 17h17" /></g></symbol>
                <symbol id="i-close" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M5.8 5.8l12.4 12.4" /><path d="M18.2 5.8L5.8 18.2" /></g></symbol>
                <symbol id="i-search" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.8 4a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6z" /><path d="M15.8 15.8 20.4 20.4" /></g></symbol>
                <symbol id="i-bag" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 8.2h12.4L19.2 20H4.8z" /><path d="M9.2 8.2V6.4a2.8 2.8 0 0 1 5.6 0v1.8" /></g></symbol>
                <symbol id="i-user" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.6a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" /><path d="M5 20a7 7 0 0 1 14 0" /></g></symbol>
                <symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.6 6.2h16.8v11.6H3.6z" /><path d="M3.6 6.2 12 12.8l8.4-6.6" /></g></symbol>
                <symbol id="i-home" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.8 10.6 12 4.2l8.2 6.4V20H3.8z" /><path d="M9.6 20v-5.2h4.8V20" /></g></symbol>
                <symbol id="i-shop" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.6h16V20H4z" /><path d="M4 8.6 6.2 4h11.6L20 8.6" /><path d="M9.4 12.4h5.2" /></g></symbol>
                <symbol id="i-gallery" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.4h16v13.2H4z" /><path d="M4 15.2l4.4-4 3 2.8 2.6-2.6L20 16.4" /><path d="M9 9.4h.01" /></g></symbol>
                <symbol id="i-blog" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4.4 6.6h15.2" /><path d="M4.4 12h15.2" /><path d="M4.4 17.4h9.4" /></g></symbol>
                <symbol id="i-about" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.8 20.2 12 12 20.2 3.8 12z" /><path d="M12 8.6v6.8" /></g></symbol>
            </svg>

            <header id="dh" className="dh" role="banner">
                <a id="dh-skip" className="dh-skip" href="#dr-main">Към съдържанието</a>

                <div className="dh-bar">
                    <div className="dh-left">
                        <button id="dh-burger" className="dh-icon-btn dh-burger" type="button" aria-expanded="false" aria-controls="dh-mobile" aria-label="Отвори менюто">
                            <svg className="dh-i" width="24" height="24" aria-hidden="true" focusable="false"><use href="#i-burger"></use></svg>
                        </button>

                        <a id="dh-logo" className="dh-logo" href="/">
                            <img className="dh-logo-img" src="/wp-content/uploads/2026/08/darvorezbi-logo.svg"
                                alt="Дърворезби" width="219" height="56"
                                fetchpriority="high" decoding="sync"
                                data-no-lazy="1" />
                        </a>
                    </div>

                    <div className="dh-right">
                        <nav id="dh-nav" className="dh-nav" aria-label="Главна навигация">
                            <ul className="dh-nav-list">
                                <Link to="/">Начало</Link>
                                <Link to="/catalog/">Каталог</Link>
                                <Link to="/galeriya/">Галерия</Link>
                                <Link to="/blog/">Блог</Link>
                                <Link to="/za-nas/">За нас</Link>
                                <Link to="/kontakti/">Контакти </Link>
                            </ul>
                        </nav>

                        <span className="dh-rule" aria-hidden="true"></span>

                        <div className="dh-actions">
                            <div id="dh-search" className="dh-search" role="search" aria-label="Търсене на резби">
                                <button id="dh-search-toggle" className="dh-icon-btn" type="button" aria-expanded="false" aria-label="Търсене">
                                    <svg className="dh-i" width="21" height="21" aria-hidden="true" focusable="false"><use href="#i-search"></use></svg>
                                </button>

                                <div className="dh-pop" hidden>
                                    <form className="dh-pop-form" action="/" method="get" />
                                    <svg className="dh-i dh-i-gold" width="18" height="18" aria-hidden="true" focusable="false"><use href="#i-search"></use></svg>
                                    <input id="dh-search-input" className="dh-input" type="search" name="s" role="combobox"
                                        aria-expanded="false" aria-controls="dh-search-list" aria-autocomplete="list"
                                        autocomplete="off" aria-label="Търсене на резби" placeholder="Търсене на резби…" />
                                    <input type="hidden" name="post_type" value="product" />
                                    <span className="dh-kbd" aria-hidden="true">esc</span>
                                    <div id="dh-search-drop" className="dh-drop" hidden>
                                        <div id="dh-search-list" role="listbox" aria-label="Резултати от търсенето"></div>
                                    </div>
                                </div>
                            </div>

                            <a id="dh-cart" className="dh-icon-btn dh-cart" href="/kolichka/" aria-label="Количка">
                                <svg className="dh-i" width="23" height="23" aria-hidden="true" focusable="false"><use href="#i-bag"></use></svg>
                                <span id="dh-cart-badge" className="dh-badge" aria-live="polite" aria-hidden="true">0</span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div id="dh-scrim" className="dh-scrim" hidden></div>

            <div id="dh-mobile" className="dh-drawer" role="dialog" aria-modal="true" aria-label="Меню" />
            <div className="dh-drawer-top">
                <button id="dh-drawer-close" className="dh-icon-btn" type="button" aria-controls="dh-mobile" aria-label="Затвори менюто">
                    <svg className="dh-i" width="22" height="22" aria-hidden="true" focusable="false"><use href="#i-close"></use></svg>
                </button>
            </div>

            <div className="dh-drawer-search">
                <form className="dh-msearch" action="/" method="get" role="search" aria-label="Търсене в менюто" />
                <svg className="dh-i dh-i-gold" width="19" height="19" aria-hidden="true" focusable="false"><use href="#i-search"></use></svg>
                <input id="dh-mobile-search-input" className="dh-input" type="search" name="s" role="combobox"
                    aria-expanded="false" aria-controls="dh-mobile-search-list" aria-autocomplete="list"
                    autocomplete="off" aria-label="Търсене на резби" placeholder="Търсене на резби…" />
                <input type="hidden" name="post_type" value="product" />
                <div id="dh-mobile-search-drop" className="dh-drop dh-drop--mobile" hidden>
                    <div id="dh-mobile-search-list" role="listbox" aria-label="Резултати от търсенето"></div>
                </div>
            </div>

            <nav aria-label="Мобилна навигация">
                <ul id="dh-mobile-links" className="dh-rows">
                    <Link to="/">Начало</Link>
                    <Link to="/catalog/">Каталог</Link>
                    <Link to="/galeriya/">Галерия</Link>
                    <Link to="/blog/">Блог</Link>
                    <Link to="/za-nas/">За нас</Link>
                    <Link to="/kontakti/">Контакти </Link>
                </ul>

            </nav>

            <div className="dh-drawer-sep" aria-hidden="true"></div>

            <ul id="dh-mobile-actions" className="dh-rows">
                <li><a href="/profil/"><svg className="dh-i" width="20" height="20" aria-hidden="true" focusable="false"><use href="#i-user"></use></svg>Профил</a></li>
                <li><a href="/kolichka/"><svg className="dh-i" width="20" height="20" aria-hidden="true" focusable="false"><use href="#i-bag"></use></svg>Количка<span id="dh-mobile-cart-badge" className="dh-badge dh-badge--row" aria-live="polite" aria-hidden="true">0</span></a></li>
            </ul>
        </main>
    );
}