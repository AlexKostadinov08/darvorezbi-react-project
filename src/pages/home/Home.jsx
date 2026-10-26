import { useState } from 'react'
import { Link } from 'react-router'

import './Home.css'

// Изделията в карусела - id-тата са същите като в базата (/catalog/:id)
const featured = [
    { id: 6, name: 'Птици', category: 'Дърворезбено пано', price: 170, image: 'ptici_25-cut', description: 'Две птици една срещу друга, симетричен мотив от народната резба.' },
    { id: 2, name: 'Петле и слънце', category: 'Дърворезбено пано', price: 240, image: 'petle_i_slance_68-cut', description: 'Едри форми и дълбока резба. Пано, което държи стената само.' },
    { id: 4, name: 'Птица в елипса', category: 'Дърворезбено пано', price: 210, image: 'ptica_elipsa_40-1-cut', description: 'Елипсовидно пано с птица сред цветя и ажурна резба.' },
    { id: 1, name: 'Петле голямо', category: 'Фигура', price: 180, image: 'petle_goliamo_54-1-cut', description: 'Класически български мотив с ясен силует и плътна резба.' },
    { id: 3, name: 'Сова', category: 'Фигура', price: 160, image: 'sova_60-2-cut', description: 'Сова в профил с разперени криле и подробна работа по перата.' },
    { id: 8, name: 'Глухар', category: 'Дърворезбено пано', price: 260, image: 'c-gluhar-56-cut', description: 'Глухар с разтворена опашка. Едра, спокойна форма.' },
    { id: 7, name: 'Слънце', category: 'Дърворезбено пано', price: 150, image: 'slance_65-cut', description: 'Слънце с лъчи и лице - топъл мотив за кухня или антре.' },
    { id: 5, name: 'Птица с цвете', category: 'Дърворезбено пано', price: 195, image: 'ptica_elipsa_12-1-cut', description: 'Птица в елипса, вписана сред листа и цвят.' },
]

const contactEmail = 'mailto:office@darvorezbi.com'

export default function Home() {
    // CSS-ът показва като активен слайд втория елемент в списъка (nth-child(2)).
    // Затова не местим слайдовете, а завъртаме масива: start е индексът на първия елемент.
    const [start, setStart] = useState(featured.length - 1)

    const rotated = [...featured.slice(start), ...featured.slice(0, start)]
    const active = rotated[1]
    const activeNumber = (start + 1) % featured.length + 1

    function nextHandler() {
        setStart(state => (state + 1) % featured.length)
    }

    function prevHandler() {
        setStart(state => (state - 1 + featured.length) % featured.length)
    }

    return (
        <div className="drh">

            <section className="drh-hero">
                <img className="drh-hero-img" src="/images/old-wooden-wall.jpg" srcSet="/images/old-wooden-wall-768x439.jpg 768w, /images/old-wooden-wall-1300x743.jpg 1300w, /images/old-wooden-wall-1536x878.jpg 1536w, /images/old-wooden-wall.jpg 2000w" sizes="100vw" width="2000" height="1143" alt="" fetchPriority="high" decoding="sync" />
                <span className="drh-hero-scrim" aria-hidden="true"></span>
                <div className="drh-wrap drh-hero-in">
                    <h1 className="drh-h1">Изкуство от дърво, направено със сърце и душа</h1>
                    <span className="drh-hair" aria-hidden="true"></span>
                    <p className="drh-hero-sub">Ръчна дърворезба от Пазарджик. Всяко изделие се изработва с длето и търпение и е единствено по рода си.</p>
                    <div className="drh-hero-cta">
                        <Link className="drh-btn drh-btn-p" to="/catalog">Разгледайте изделията</Link>
                    </div>
                </div>
            </section>

            <section className="drh-trust" aria-label="Защо да изберете нас">
                <ul className="drh-wrap drh-trust-l">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21l2.6-.6L19.4 6.6a2 2 0 0 0-2.8-2.8L2.8 17.6 3 21z"></path><path d="M14 6l4 4"></path></svg><span>Изцяло ръчна изработка</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21c-4.2-3.7-7-7-7-10.6A7 7 0 0 1 12 3a7 7 0 0 1 7 7.4C19 14 16.2 17.3 12 21z"></path><circle cx="12" cy="10" r="2.4"></circle></svg><span>Работилница в Пазарджик</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 6.5h11v9H2z"></path><path d="M13 9.5h3.6L20 13v2.5h-7"></path><circle cx="6.5" cy="17.6" r="1.6"></circle><circle cx="16.5" cy="17.6" r="1.6"></circle></svg><span>Безплатна доставка над 300 лв.</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z"></path></svg><a href="tel:+359 888 777 666">+359 888 777 666</a></li>
                </ul>
            </section>

            <section className="drh-s drh-cats">
                <div className="drh-wrap drh-cats-g">
                    <div>
                        <p className="drh-kicker">Какво предлагаме</p>
                        <h2 className="drh-h2">От идеята до последния детайл</h2>
                        <p className="drh-lede">Изработваме дърворезби по традиционни български мотиви и по идея на клиента. Всяко изделие минава през ръцете на майстора, от първата скица до последния щрих на длетото.</p>
                        <Link className="drh-link" to="/catalog">Вижте всички изделия <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="drh-tiles">
                        <Link className="drh-tile" to="/catalog"><img src="/images/petle_i_slance_68-700x878.jpg" width="700" height="878" loading="lazy" decoding="async" alt="Дърворезбено пано „Петле и слънце“" /><span className="drh-tile-n">Дърворезбени пана</span></Link>
                        <Link className="drh-tile" to="/catalog"><img src="/images/sova_60-2-700x878.jpg" width="700" height="878" loading="lazy" decoding="async" alt="Дърворезбена пластика „Сова“" /><span className="drh-tile-n">Пластики</span></Link>
                        <Link className="drh-tile" to="/catalog"><img src="/images/c-gluhar-56-700x878.jpg" width="700" height="878" loading="lazy" decoding="async" alt="Дърворезба на глухар" /><span className="drh-tile-n">Животински форми</span></Link>
                        <Link className="drh-tile drh-tile-notphoto" to="/catalog"><span className="drh-tile-tex" aria-hidden="true"></span><span className="drh-tile-n">Фризове и дърворезби</span></Link>
                        <Link className="drh-tile drh-tile-notphoto" to="/catalog"><span className="drh-tile-tex" aria-hidden="true"></span><span className="drh-tile-n">Декоративни рамки</span></Link>
                        <a className="drh-tile" href={contactEmail}><img src="/images/dleto-darvorezbi.webp" width="500" height="500" loading="lazy" decoding="async" alt="Длето за дърворезба" /><span className="drh-tile-n">Дърворезба по поръчка</span></a>
                    </div>
                </div>
            </section>

            <section className="drh-s drh-feat">
                <div className="drh-wrap">
                    <div className="drh-head">
                        <div>
                            <h2 className="drh-h2">Най-популярните ни творби</h2>
                        </div>
                        <Link className="drh-link drh-head-l" to="/catalog">Вижте всички изделия <span aria-hidden="true">→</span></Link>
                    </div>
                </div>

                <div className="drh-car" aria-roledescription="карусел" aria-label="Най-популярни изделия">
                    <span className="drh-car-glow" aria-hidden="true"></span>
                    <div className="drh-car-stage">
                        <div className="drh-car-list" id="drh-car-list">
                            {rotated.map((item, i) => (
                                <article key={item.id} className="drh-car-i" role="group" aria-roledescription="слайд" aria-label={item.name} aria-hidden={i !== 1} inert={i !== 1}>
                                    <img className="drh-car-img" src={`/images/${item.image}.webp`} srcSet={`/images/${item.image}-700x878.webp 700w, /images/${item.image}.webp 900w`} sizes="(max-width: 767px) 62vw, 30vw" width="900" height="1129" loading="lazy" decoding="async" alt={`${item.name}, ръчна дърворезба`} />
                                    <div className="drh-car-txt">
                                        <p className="drh-car-cat">{item.category}</p>
                                        <h3 className="drh-car-name">{item.name}</h3>
                                        <p className="drh-car-des">{item.description}</p>
                                        <p className="drh-car-price">{item.price} €</p>
                                        <Link className="drh-btn drh-btn-p drh-car-cta" to={`/catalog/${item.id}`}>Вижте изделието</Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div className="drh-wrap drh-car-nav">
                        <p className="drh-car-count">{activeNumber} / {featured.length}</p>
                        <div className="drh-car-btns">
                            <button className="drh-car-b" type="button" aria-label="Предишно изделие" aria-controls="drh-car-list" onClick={prevHandler}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"></path></svg>
                            </button>
                            <button className="drh-car-b" type="button" aria-label="Следващо изделие" aria-controls="drh-car-list" onClick={nextHandler}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>
                    <p className="drh-sr" aria-live="polite">{active.name}</p>
                </div>

                <div className="drh-wrap">
                    <Link className="drh-btn drh-btn-s drh-only-m" to="/catalog">Вижте всички изделия</Link>
                </div>
            </section>

            <section className="drh-s drh-custom">
                <div className="drh-wrap drh-custom-g">
                    <img className="drh-custom-img" src="/images/dleto-darvorezbi.webp" width="500" height="500" loading="lazy" decoding="async" alt="Длето, с което се изработва дърворезбата" />
                    <div>
                        <p className="drh-kicker">Индивидуална изработка</p>
                        <h2 className="drh-h2">Имате собствена идея?</h2>
                        <p className="drh-lede">Вие я вдъхновявате. Ние я изваяваме в дърво.</p>
                        <ol className="drh-steps">
                            <li><span className="drh-sn">1</span><span className="drh-st">Идея</span><span className="drh-sx">Изпращате ни снимка, скица или описание.</span></li>
                            <li><span className="drh-sn">2</span><span className="drh-st">Проект</span><span className="drh-sx">Уточняваме размери, дървесина и детайли.</span></li>
                            <li><span className="drh-sn">3</span><span className="drh-st">Изработка</span><span className="drh-sx">Идеята ви се превръща в уникална дърворезба.</span></li>
                        </ol>
                        <a className="drh-btn drh-btn-p" href={contactEmail}>Изпратете запитване</a>
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
                    </div>
                    <img className="drh-craft-img" src="/images/darveni-stargotini.webp" width="612" height="408" loading="lazy" decoding="async" alt="Дървени стърготини след ръчна резба" />
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
                            <div className="drh-faq-a"><p>Изберете изделие от каталога или ни изпратете запитване за индивидуална изработка. Може да се свържете с нас и по телефон.</p></div>
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
                        <a href="tel:+359888777666">+359 888 777 666</a>
                        <a href={contactEmail}>office@darvorezbi.com</a>
                    </div>
                    <a className="drh-btn drh-btn-p" href={contactEmail}>Изпратете запитване</a>
                </div>
            </section>

        </div>
    );
}
