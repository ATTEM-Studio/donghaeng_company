import { proofCards } from "@/content/site";
import { Reveal } from "./Reveal";
export function ProofSection(){return <section className="dark-section proof-section"><div className="shell"><Reveal><p className="eyebrow">OWNED MEDIA</p><div className="big-stat">100,000<span>+</span></div><p className="stat-label">직접 운영하는 먹플루언서 미디어</p></Reveal><div className="proof-grid">{proofCards.map(([t,b],i)=><Reveal key={t} delay={i*70} className="proof-card"><small>{t}</small><strong>{b}</strong></Reveal>)}</div></div></section>}
