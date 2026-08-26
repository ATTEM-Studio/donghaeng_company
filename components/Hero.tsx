import { hero, site } from "@/content/site";
import { Reveal } from "./Reveal";
import { ReelPhone } from "./ReelPhone";
export function Hero() { return <section className="hero" id="top"><div className="shell hero-grid">
  <div className="hero-copy"><Reveal><p className="eyebrow">{hero.eyebrow}</p></Reveal><h1><Reveal>{hero.headline[0]}</Reveal><Reveal delay={70}><span className="orange">{hero.headline[1]}</span></Reveal><Reveal delay={140}>{hero.headline[2]}</Reveal></h1><Reveal delay={210}><div className="hero-body">{hero.body.map(x => <p key={x}>{x}</p>)}</div><a className="button" href={site.consultationHref}>{hero.cta} <span>→</span></a><div className="trust-tags">{hero.tags.map(t => <span key={t}>{t}</span>)}</div></Reveal></div>
  <Reveal className="hero-visual" delay={120}><div className="orbit orbit-a"/><div className="orbit orbit-b"/><ReelPhone/><div className="proof-badge badge-a"><strong>100K+</strong><span>OWNED MEDIA</span></div><div className="proof-badge badge-b"><strong>LOCAL</strong><span>CREATOR NETWORK</span></div><div className="signal">Instagram <b>→</b> Naver <b>→</b> Visit</div></Reveal>
</div></section> }
