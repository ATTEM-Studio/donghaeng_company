import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
test('approved brand flow and hero copy are implemented', () => { const content = read('content/site.ts'); for (const value of ['발견','확산','검색','확신','방문']) assert.match(content,new RegExp(value)); assert.match(content,/좋은 매장이/); assert.match(content,/더 많은 사람에게/); assert.match(content,/발견되도록/); });
test('approved pricing contract is preserved', () => { const content=read('content/site.ts'); assert.match(content,/월 55만원/); assert.match(content,/VAT 포함/); assert.match(content,/최소 3개월/); assert.match(content,/이후 1개월 단위 연장/); });
test('page includes the complete persuasion sequence', () => { const page=read('app/page.tsx'); for(const component of ['Hero','ProblemSection','DiscoverySection','ProofSection','ViralNetwork','PivotSection','DonghaengFlow','InstagramToNaver','ServicesSection','WhyDonghaeng','LocalPhilosophy','PricingSection','FinalCta']) assert.match(page,new RegExp(component)); });
test('accessibility-safe motion is present', () => { const css=read('app/globals.css'); const reveal=read('components/Reveal.tsx'); assert.match(css,/prefers-reduced-motion/); assert.match(reveal,/IntersectionObserver/); });
