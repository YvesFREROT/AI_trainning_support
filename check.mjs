import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
const root=path.dirname(fileURLToPath(import.meta.url));
const d=JSON.parse(fs.readFileSync(path.join(root,'deck.json'),'utf8'));
assert.equal(d.slides.length,118);assert.equal(new Set(d.slides.map(s=>s.slide_id)).size,118);
for(const s of d.slides){assert(s.title&&s.original&&s.speaker&&s.layout);assert.equal(s.slide_id,'S'+String(s.source_row).padStart(3,'0'));for(const key of ['asset','image'])if(s[key])assert(fs.existsSync(path.join(root,'assets',s[key])));if(s.launch?.asset)assert(fs.existsSync(path.join(root,'assets',s.launch.asset)));for(const r of s.sources)assert(/^(https:\/\/|file:\/\/\/)/.test(r.url));}
const html=fs.readFileSync(path.join(root,'dist','Presentation_IA_complete.html'),'utf8');assert(!html.includes('__DATA__'));assert(!/<(?:script|link)[^>]+(?:src|href)=["']https?:/i.test(html));
const audioSlide=d.slides.find(s=>s.launch?.kind==='audio');if(audioSlide){assert(html.includes(audioSlide.launch.asset));assert(html.includes('data:audio/mp4;base64,'));}
const meta=JSON.parse(fs.readFileSync(path.join(root,'metadata.json'),'utf8'));assert.equal(meta.type,'tutorial');assert.equal(meta.language,'fr');
assert(d.slides.filter(s=>['NIVEAU — INSTRUCTION PERMANENTE','NIVEAU — BON PROMPT','NIVEAU — ASSISTANCE SPÉCIALISÉE','NIVEAU — PROJET'].includes(s.title)).every(s=>s.layout==='editorial-river'));
console.log('Structure, identifiants, sources, ressources locales et continuité du fleuve validés.');
