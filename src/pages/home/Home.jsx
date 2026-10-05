import './Home.css'

export default function Home() {
    return (
        <div className="drh">

            <section className="drh-hero">
                <img className="drh-hero-img" src="/images/old-wooden-wall.jpg" srcSet="/images/old-wooden-wall-768x439.jpg 768w, /images/old-wooden-wall-1300x743.jpg 1300w, /images/old-wooden-wall-1536x878.jpg 1536w, /images/old-wooden-wall.jpg 2000w" sizes="100vw"width="2000" height="1143" alt="" fetchPriority="high" decoding="sync" />
                    <span className="drh-hero-scrim" aria-hidden="true"></span>
                    <div className="drh-wrap drh-hero-in">
                        <h1 className="drh-h1">Изкуство от дърво, направено със сърце и душа</h1>
                        <span className="drh-hair" aria-hidden="true"></span>
                        <p className="drh-hero-sub">Ръчна дърворезба от Пазарджик. Всяко изделие се изработва с длето и търпение и е единствено по рода си.</p>
                        <div className="drh-hero-cta">
                            <a className="drh-btn drh-btn-p" href="/magazin/">Разгледайте изделията</a>
                            <a className="drh-btn drh-btn-g" href="/kontakti/">Поръчайте по ваша идея</a>
                        </div>
                    </div>
            </section>

            <section className="drh-trust" aria-label="Защо да изберете нас">
                <ul className="drh-wrap drh-trust-l">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l2.6-.6L19.4 6.6a2 2 0 0 0-2.8-2.8L2.8 17.6 3 21z"></path><path d="M14 6l4 4"></path></svg><span>Изцяло ръчна изработка</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21c-4.2-3.7-7-7-7-10.6A7 7 0 0 1 12 3a7 7 0 0 1 7 7.4C19 14 16.2 17.3 12 21z"></path><circle cx="12" cy="10" r="2.4"></circle></svg><span>Работилница в Пазарджик</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 6.5h11v9H2z"></path><path d="M13 9.5h3.6L20 13v2.5h-7"></path><circle cx="6.5" cy="17.6" r="1.6"></circle><circle cx="16.5" cy="17.6" r="1.6"></circle></svg><span>Безплатна доставка над 300 лв.</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"></path></svg><a href="tel:+359898910633">+359 898 910 633</a></li>
                </ul>
            </section>

            <section className="drh-s drh-cats">
                <div className="drh-wrap drh-cats-g">
                    <div>
                        <p className="drh-kicker">Какво предлагаме</p>
                        <h2 className="drh-h2">От идеята до последния детайл</h2>
                        <p className="drh-lede">Изработваме дърворезби по традиционни български мотиви и по идея на клиента. Всяко изделие минава през ръцете на майстора, от първата скица до последния щрих на длетото.</p>
                        <a className="drh-link" href="/magazin/">Вижте всички изделия <span aria-hidden="true">→</span></a>
                    </div>
                    <div className="drh-tiles">
                        <a className="drh-tile" href="/product-category/%D0%BF%D0%B0%D0%BD%D0%BE/"><img src="/images/petle_i_slance_68-700x878.jpg"width="700" height="878" loading="lazy" decoding="async" alt="Дърворезбено пано „Петле и слънце“" /><span className="drh-tile-n">Дърворезбени пана</span></a>
                        <a className="drh-tile" href="/product-category/%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/"><img src="/images/sova_60-2-700x878.jpg"width="700" height="878" loading="lazy" decoding="async" alt="Дърворезбена пластика „Сова“" /><span className="drh-tile-n">Пластики</span></a>
                        <a className="drh-tile" href="/product-category/%D0%BF%D0%BB%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0/"><img src="/images/c-gluhar-56-700x878.jpg"width="700" height="878" loading="lazy" decoding="async" alt="Дърворезба на глухар" /><span className="drh-tile-n">Животински форми</span></a>
                        <a className="drh-tile drh-tile-notphoto" href="/kontakti/"><span className="drh-tile-tex" aria-hidden="true"></span><span className="drh-tile-n">Фризове и дърворезби</span></a>
                        <a className="drh-tile drh-tile-notphoto" href="/kontakti/"><span className="drh-tile-tex" aria-hidden="true"></span><span className="drh-tile-n">Декоративни рамки</span></a>
                        <a className="drh-tile" href="/kontakti/"><img src="/images/dleto-darvorezbi.webp"width="500" height="500" loading="lazy" decoding="async" alt="Длето за дърворезба" /><span className="drh-tile-n">Дърворезба по поръчка</span></a>
                    </div>
                </div>
            </section>

            <section className="drh-s drh-feat">
                <div className="drh-wrap">
                    <div className="drh-head">
                        <div>
                            <h2 className="drh-h2">Най-популярните ни творби</h2>
                        </div>
                        <a className="drh-link drh-head-l" href="/magazin/">Вижте всички продукти <span aria-hidden="true">→</span></a>
                    </div>
                </div>

                <div className="drh-car" id="drh-car" aria-roledescription="карусел" aria-label="Най-популярни изделия">
                    <span className="drh-car-glow" aria-hidden="true"></span>
                    <div className="drh-car-stage">
                        <div className="drh-car-list" id="drh-car-list">
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Птици">
                                <img className="drh-car-img" src="/images/ptici_25-cut.webp" srcSet="/images/ptici_25-cut-700x878.webp 700w, /images/ptici_25-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Птици, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Птици</h3>
                                        <p className="drh-car-des">Две птици една срещу друга, симетричен мотив от народната резба.</p>
                                        <p className="drh-car-price">118.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/%D0%BF%D1%82%D0%B8%D1%86%D0%B8/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Петле и слънце">
                                <img className="drh-car-img" src="/images/petle_i_slance_68-cut.webp" srcSet="/images/petle_i_slance_68-cut-700x878.webp 700w, /images/petle_i_slance_68-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Петле и слънце, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Петле и слънце</h3>
                                        <p className="drh-car-des">Едри форми и дълбока резба. Пано, което държи стената само.</p>
                                        <p className="drh-car-price">295.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/smart-watches-wood-edition/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Птица с цветя – елипса">
                                <img className="drh-car-img" src="/images/ptica_elipsa_40-1-cut.webp" srcSet="/images/ptica_elipsa_40-1-cut-700x878.webp 700w, /images/ptica_elipsa_40-1-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Птица с цветя – елипса, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Птица с цветя – елипса</h3>
                                        <p className="drh-car-des">Елипсовидно пано с птица сред цветя и ажурна резба.</p>
                                        <p className="drh-car-price">260.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/ptica-s-cvetia/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Петле, голямо">
                                <img className="drh-car-img" src="/images/petle_goliamo_54-1-cut.webp" srcSet="/images/petle_goliamo_54-1-cut-700x878.webp 700w, /images/petle_goliamo_54-1-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Петле, голямо, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Петле, голямо</h3>
                                        <p className="drh-car-des">Класически български мотив с ясен силует и плътна резба.</p>
                                        <p className="drh-car-price">224.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/petle-goliamo/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Сова – профил">
                                <img className="drh-car-img" src="/images/sova_60-2-cut.webp" srcSet="/images/sova_60-2-cut-700x878.webp 700w, /images/sova_60-2-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Сова – профил, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбена пластика</p>
                                        <h3 className="drh-car-name">Сова – профил</h3>
                                        <p className="drh-car-des">Сова в профил с разперени криле и подробна работа по перата.</p>
                                        <p className="drh-car-price">210.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/eames-lounge-chair/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Птица – глухар">
                                <img className="drh-car-img" src="/images/c-gluhar-56-cut.webp" srcSet="/images/c-gluhar-56-cut-700x878.webp 700w, /images/c-gluhar-56-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Птица – глухар, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Птица – глухар</h3>
                                        <p className="drh-car-des">Глухар с разтворена опашка. Едра, спокойна форма.</p>
                                        <p className="drh-car-price">185.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/%D0%BF%D1%82%D0%B8%D1%86%D0%B0-%D0%B3%D0%BB%D1%83%D1%85%D0%B0%D1%80/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Слънце">
                                <img className="drh-car-img" src="/images/slance_65-cut.webp" srcSet="/images/slance_65-cut-700x878.webp 700w, /images/slance_65-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Слънце, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Слънце</h3>
                                        <p className="drh-car-des">Слънце с лъчи и лице; топъл мотив за кухня или антре.</p>
                                        <p className="drh-car-price">185.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/%D1%81%D0%BB%D1%8A%D0%BD%D1%86%D0%B5/">Вижте изделието</a>
                                    </div>
                            </article>
                            <article className="drh-car-i" role="group" aria-roledescription="слайд" aria-label="Птица – елипса">
                                <img className="drh-car-img" src="/images/ptica_elipsa_12-1-cut.webp" srcSet="/images/ptica_elipsa_12-1-cut-700x878.webp 700w, /images/ptica_elipsa_12-1-cut.webp 900w" sizes="(maxWidth:767px) 62vw, 30vw"width="900" height="1129" loading="lazy" decoding="async" alt="Птица – елипса, ръчна дърворезба" />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">Дърворезбено пано</p>
                                        <h3 className="drh-car-name">Птица – елипса</h3>
                                        <p className="drh-car-des">Птица в елипса, вписана сред листа и цвят.</p>
                                        <p className="drh-car-price">165.00&nbsp;лв.</p>
                                        <a className="drh-btn drh-btn-p drh-car-cta" href="/produkt/%D0%BF%D1%82%D0%B8%D1%86%D0%B0-%D0%B5%D0%BB%D0%B8%D0%BF%D1%81%D0%B0/">Вижте изделието</a>
                                    </div>
                            </article>
                        </div>
                    </div>
                    <div className="drh-wrap drh-car-nav">
                        <p className="drh-car-count"><span id="drh-car-n">1</span> / 8</p>
                        <div className="drh-car-btns">
                            <button className="drh-car-b" id="drh-car-prev" type="button" aria-label="Предишно изделие" aria-controls="drh-car-list">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg>
                            </button>
                            <button className="drh-car-b" id="drh-car-next" type="button" aria-label="Следващо изделие" aria-controls="drh-car-list">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>
                    <p className="drh-sr" id="drh-car-live" aria-live="polite"></p>
                </div>

                <div className="drh-wrap">
                    <a className="drh-btn drh-btn-s drh-only-m" href="/magazin/">Вижте всички продукти</a>
                </div>
            </section>


            <section className="drh-s drh-custom">
                <div className="drh-wrap drh-custom-g">
                    <img className="drh-custom-img" src="/images/dleto-darvorezbi.webp"width="500" height="500" loading="lazy" decoding="async" alt="Длето, с което се изработва дърворезбата" />
                        <div>
                            <p className="drh-kicker">Индивидуална изработка</p>
                            <h2 className="drh-h2">Имате собствена идея?</h2>
                            <p className="drh-lede">Вие я вдъхновявате. Ние я изваяваме в дърво.</p>
                            <ol className="drh-steps">
                                <li><span className="drh-sn">1</span><span className="drh-st">Идея</span><span className="drh-sx">Изпращате ни снимка, скица или описание.</span></li>
                                <li><span className="drh-sn">2</span><span className="drh-st">Проект</span><span className="drh-sx">Уточняваме размери, дървесина и детайли.</span></li>
                                <li><span className="drh-sn">3</span><span className="drh-st">Изработка</span><span className="drh-sx">Идеята ви се превръща в уникална дърворезба.</span></li>
                            </ol>
                            <a className="drh-btn drh-btn-p" href="/kontakti/">Изпратете запитване</a>
                        </div>
                </div>
            </section>

            <section className="drh-s drh-craft">
                <div className="drh-wrap drh-craft-g">
                    <div>
                        <p className="drh-kicker">Занаят</p>
                        <h2 className="drh-h2">Дърворезбата в детайл</h2>
                        <p className="drh-body">Всяко изделие започва от парче дърво и завършва в ръцете на майстора. Резбата се изпълнява изцяло на ръка, с длета и търпение, така както се е правило поколения наред.</p>
                        <p className="drh-body">Работилницата ни е в Пазарджик, в сърцето на българската резбарска традиция. Оттук излизат пана, пластики и фигури, всяко от които носи следата на ръката, която го е издялала.</p>
                        <a className="drh-link" href="/za-nas/">Повече за нас <span aria-hidden="true">→</span></a>
                    </div>
                    <img className="drh-craft-img" src="/images/darveni-stargotini.webp"width="612" height="408" loading="lazy" decoding="async" alt="Дървени стърготини след ръчна резба" />
                </div>
            </section>

            <section className="drh-s drh-gal">
                <div className="drh-wrap">
                    <div className="drh-head">
                        <div>
                            <p className="drh-kicker drh-kicker-g">Галерия</p>
                            <h2 className="drh-h2 drh-on-dark">Резбата отблизо</h2>
                        </div>
                        <a className="drh-link-l drh-head-l" href="/galeriya/">Разгледайте галерията <span aria-hidden="true">→</span></a>
                    </div>
                    <div className="drh-mos">
                        <figure className="drh-m drh-m-big"><img src="/images/ptica_elipsa_40-1-700x878.jpg"width="700" height="878" loading="lazy" decoding="async" alt="Дърворезбено пано „Птица с цветя“" /></figure>
                        <figure className="drh-m "><img src="/images/ptici_25-430x540.jpg"width="430" height="540" loading="lazy" decoding="async" alt="Дърворезбено пано „Птици“" /></figure>
                        <figure className="drh-m "><img src="/images/petle_goliamo_54-1-430x540.jpg"width="430" height="540" loading="lazy" decoding="async" alt="Дърворезба „Петле“" /></figure>
                        <figure className="drh-m "><img src="/images/momiche_s_rozi_55-430x540.jpg"width="430" height="540" loading="lazy" decoding="async" alt="Дърворезбена пластика „Момиче с рози“" /></figure>
                        <figure className="drh-m "><img src="/images/nestinarka_37-1-430x557.jpg"width="430" height="557" loading="lazy" decoding="async" alt="Дърворезбено пано „Нестинарка“" /></figure>
                    </div>
                    <a className="drh-link-l drh-only-m drh-center" href="/galeriya/">Разгледайте галерията <span aria-hidden="true">→</span></a>
                </div>
            </section>

            <section className="drh-s drh-arts">
                <div className="drh-wrap">
                    <div className="drh-head">
                        <div>
                            <p className="drh-kicker">От работилницата</p>
                            <h2 className="drh-h2">Полезни статии</h2>
                        </div>
                        <a className="drh-link drh-head-l" href="/blog/">Вижте всички статии <span aria-hidden="true">→</span></a>
                    </div>
                    <div className="drh-art-g">
                        <a className="drh-art" href="/pesestenie-na-istoricheski-park/">
                            <span className="drh-art-img"><img src="/images/istoricheski-park-400x266.webp"width="400" height="266" loading="lazy" decoding="async" alt="" /></span>
                            <time className="drh-art-d" dateTime="2024-08-23">23 август 2024</time>
                            <span className="drh-art-r"><span className="drh-art-t">Потапяне в българската история: посещение на „Исторически парк“</span><span className="drh-arr" aria-hidden="true">→</span></span>
                        </a>
                        <a className="drh-art" href="/durvorezbata-v-bulgaria/">
                            <span className="drh-art-img"><img src="/images/pexels-photo-175709-400x280.jpeg"width="400" height="280" loading="lazy" decoding="async" alt="" /></span>
                            <time className="drh-art-d" dateTime="2023-10-27">27 октомври 2023</time>
                            <span className="drh-art-r"><span className="drh-art-t">Дърворезбата в България: традиции и бъдеще</span><span className="drh-arr" aria-hidden="true">→</span></span>
                        </a>
                        <a className="drh-art drh-hide-m" href="/reinterprets-the-classic-bookshelf/">
                            <span className="drh-art-img"><img src="/images/izkustvoto-na-darvorezbata-375x300.webp"width="375" height="300" loading="lazy" decoding="async" alt="" /></span>
                            <time className="drh-art-d" dateTime="2021-08-27">27 август 2021</time>
                            <span className="drh-art-r"><span className="drh-art-t">Изкуството на дърворезбата: магията на ръчната изработка</span><span className="drh-arr" aria-hidden="true">→</span></span>
                        </a>
                    </div>
                    <a className="drh-link drh-only-m drh-center" href="/blog/">Вижте всички статии <span aria-hidden="true">→</span></a>
                </div>
            </section>

            <section className="drh-s drh-faq">
                <div className="drh-wrap">
                    <h2 className="drh-h2 drh-faq-t">Често задавани въпроси</h2>
                    <div className="drh-faq-l">
                        <details className="drh-faq-i" open="">
                            <summary className="drh-faq-q"><span>Каква дървесина използвате?</span><span className="drh-faq-s" aria-hidden="true"></span></summary>
                            <div className="drh-faq-a"><p>Работим основно с липа, орех и дъб. Тези дървесини се поддават добре на резба и остават трайни във времето. За всяка поръчка подбираме материала според детайла на резбата и мястото, където ще стои изделието.</p></div>
                        </details>
                        <details className="drh-faq-i">
                            <summary className="drh-faq-q"><span>Изработвате ли изделия по поръчка?</span><span className="drh-faq-s" aria-hidden="true"></span></summary>
                            <div className="drh-faq-a"><p>Да. Изпратете ни снимка, скица или описание на идеята си и уточняваме размери, дървесина и детайли, преди да започне работа.</p></div>
                        </details>
                        <details className="drh-faq-i">
                            <summary className="drh-faq-q"><span>Колко време отнема изработката?</span><span className="drh-faq-s" aria-hidden="true"></span></summary>
                            <div className="drh-faq-a"><p>Зависи от размера и детайла на резбата. След като уточним проекта, ви казваме срок за конкретното изделие.</p></div>
                        </details>
                        <details className="drh-faq-i">
                            <summary className="drh-faq-q"><span>Как се поддържа дърворезбата?</span><span className="drh-faq-s" aria-hidden="true"></span></summary>
                            <div className="drh-faq-a"><p>Забърсвайте с мека суха кърпа и пазете изделието от пряко слънце и висока влажност. При нужда се освежава с подходящо масло за дърво.</p></div>
                        </details>
                        <details className="drh-faq-i">
                            <summary className="drh-faq-q"><span>Извършвате ли доставка?</span><span className="drh-faq-s" aria-hidden="true"></span></summary>
                            <div className="drh-faq-a"><p>Да, доставяме до адрес в цялата страна. За поръчки над 300 лв. доставката е безплатна.</p></div>
                        </details>
                        <details className="drh-faq-i">
                            <summary className="drh-faq-q"><span>Как мога да направя поръчка?</span><span className="drh-faq-s" aria-hidden="true"></span></summary>
                            <div className="drh-faq-a"><p>Изберете изделие от магазина или ни изпратете запитване за индивидуална изработка. Може да се свържете с нас и по телефон.</p></div>
                        </details>
                    </div>
                </div>
            </section>

            <section className="drh-cta">
                <span className="drh-cta-tex" aria-hidden="true"></span>
                <div className="drh-wrap drh-cta-in">
                    <h2 className="drh-h2 drh-on-dark">Имате идея? Нека я издяламе.</h2>
                    <p className="drh-cta-p">Свържете се с нас и ни разкажете какво си представяте.</p>
                    <div className="drh-cta-c">
                        <a href="tel:+359898910633">+359 898 910 633</a>
                        <a href="mailto:office@darvorezbi.com">office@darvorezbi.com</a>
                    </div>
                    <a className="drh-btn drh-btn-p" href="/kontakti/">Изпратете запитване</a>
                </div>
            </section>

        </div>
    );
}
