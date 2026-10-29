const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SOP = window.MASTER_SOP_DATA || {chapters:[], closing:[]};
const CHAPTERS = SOP.chapters || [];
const BY_NUM = Object.fromEntries(CHAPTERS.map(c => [String(c.number), c]));
const PENAL = window.PENAL_CODE_DATA || [];
const RADIO = window.RADIO_REFERENCE_DATA || {};
const DEPT = window.DEPARTMENT_DATA || {ranks:[],divisions:[],certifications:[]};

const DIVISION_LOGOS = {
  bcso: 'assets/bcso-patch.webp',
  cid: 'assets/divisions/bcso-cid.png',
  swat: 'assets/divisions/bcso-swat.png',
  teu: 'assets/divisions/bcso-teu.png',
  air1: 'assets/divisions/bcso-air1.png'
};
const DIVISION_LOGO_NAMES = {
  bcso: "Blaine County Sheriff's Office",
  cid: 'Criminal Investigation Division',
  swat: 'Special Weapons and Tactics',
  teu: 'Traffic Enforcement Unit / HEAT',
  air1: 'Air-1 Helicopter Division'
};
function divisionLogoPath(id) { return DIVISION_LOGOS[id] || DIVISION_LOGOS.bcso; }
function divisionLogo(id, className='division-logo-thumb') {
  return `<img class="${esc(className)}" src="${esc(divisionLogoPath(id))}" alt="${esc(DIVISION_LOGO_NAMES[id] || 'BCSO division')} patch" loading="lazy">`;
}

const NAV = {
 'home':{title:'Command Center',category:'HOME',sub:'Department policies, field procedures, qualifications, and local quick references.'},
 'manual':{title:'Master SOP Manual',category:'DEPARTMENT MANUAL',sub:'The BCSO standard operating procedures, arranged by chapter.'},
 'quick-reaction':{title:'Quick Reaction Guide',category:'FIELD OPERATIONS',sub:'High-use commands, scene limits, response classifications, hostage negotiations, and pursuit rules.'},
 'patrol':{title:'Patrol Operations',category:'FIELD OPERATIONS',sub:'Patrol responsibilities, proactive policing, safety, speed limits, and service calls.'},
 'response':{title:'Emergency Response & Scene Management',category:'FIELD OPERATIONS',sub:'Response classifications, arrival procedures, scene limits, and backup requests.'},
 'traffic':{title:'Traffic Enforcement & Vehicle Pursuits',category:'FIELD OPERATIONS',sub:'Traffic stops, pursuit authorization, communications, interventions, and post-pursuit procedures.'},
 'arrest':{title:'Arrest, Prisoner Handling & Reports',category:'FIELD OPERATIONS',sub:'Arrest authority, restraints, Miranda, transport, booking, MDT reports, and evidence.'},
 'communications':{title:'Radio Communications',category:'FIELD OPERATIONS',sub:'Radio discipline, channels, status updates, stop callouts, pursuit callouts, and emergency traffic.'},
 'impounding':{title:'Vehicle Impoundment',category:'FIELD OPERATIONS',sub:'Authorized impounds, documentation, locations, fines, release, and strike tracking.'},
 'conduct':{title:'Professional Conduct & Ethics',category:'POLICY',sub:'Professionalism, impartiality, integrity, confidentiality, and duty to report.'},
 'force':{title:'Use of Force & Rules of Engagement',category:'POLICY',sub:'Force continuum, firearms, less-lethal tools, pursuit interventions, and duty to intervene.'},
 'uniform':{title:'Uniforms & Personal Appearance',category:'POLICY',sub:'Authorized clothing, duty equipment, and professional appearance.'},
 'discipline':{title:'Code of Conduct & Discipline',category:'POLICY',sub:'Minor, moderate, and severe infractions, consequences, and records.'},
 'activity':{title:'Activity & Attendance',category:'POLICY',sub:'Minimum activity, leave requests, CID time records, and resignation.'},
 'off-duty':{title:'Off-Duty Conduct',category:'POLICY',sub:'Conduct, intervention, impairment, firearms, employment, and public representation.'},
 'roleplay':{title:'Roleplay Standards & Scenario Development',category:'POLICY',sub:'Fair, meaningful interactions and professional roleplay.'},
 'structure':{title:'Ranks, Authority & Department Structure',category:'DEPARTMENT',sub:'Rank responsibilities, chain of command, and specialized division assignments.'},
 'certifications':{title:'Special Certifications',category:'DEPARTMENT',sub:'Eligibility, training, weapon permissions, and deployment limits.'},
 'vehicles':{title:'Authorized Department Vehicles',category:'DEPARTMENT',sub:'Rank-based vehicle assignments and specialized vehicle restrictions.'},
 'training':{title:'Recruit Academy & Field Training',category:'DEPARTMENT',sub:'Orientation, classroom topics, field exercises, and final evaluation.'},
 'cid':{title:'Criminal Investigation Division',category:'SPECIALIZED DIVISION',sub:'CID case intake, evidence, investigations, warrants, informants, and case closure.'},
 'swat':{title:'SWAT',category:'SPECIALIZED DIVISION',sub:'Specialized tactical assignment and related department-wide operating policies.'},
 'teu':{title:'Traffic Enforcement Unit / HEAT',category:'SPECIALIZED DIVISION',sub:'Specialized traffic enforcement and high-speed interception.'},
 'air1':{title:'Air-1 / HRT',category:'SPECIALIZED DIVISION',sub:'Aviation certification and deployment conditions.'},
 'commands':{title:'Commands & Required Equipment',category:'QUICK REFERENCE',sub:'Common commands, restricted menu functions, and required duty equipment.'},
 'radio':{title:'Radio & 10-Code Reference',category:'QUICK REFERENCE',sub:'Searchable 10-codes, response codes, signals, and phonetic alphabet.'},
 'penal-code':{title:'RWRP Penal Code',category:'QUICK REFERENCE',sub:'Search statute groups, charges, classification, and supplied offense descriptions.'},
 'documents':{title:'Forms & Templates',category:'QUICK REFERENCE',sub:'Local operational reports, records, and leave templates that can be copied or printed.'},
 'wildlife':{title:'Illegal Hunting & Protected Wildlife',category:'FIELD OPERATIONS',sub:'Protected wildlife, prohibited hunting, and related enforcement references.'}
};

const ALIASES = {
 'quick-reaction':[4,6,7,8,10], 'patrol':[5], 'response':[6], 'traffic':[9,10], 'arrest':[11,12], 'communications':[13], 'impounding':[14],
 'cid':[], 'conduct':[3,16], 'force':[7], 'uniform':[15], 'discipline':[16], 'activity':[17], 'off-duty':[18], 'roleplay':[22], 'structure':[2,20], 'certifications':[19],
 'vehicles':[21], 'training':[23], 'commands':[4], 'air1':[19,21], 'teu':[19,21], 'swat':[20], 'wildlife':[25]
};

function shell(p, body, eyebrow=''){
  return `<section class="page"><div class="crumb"><a href="#home">Command Center</a><span>/</span><span>${esc(p.title)}</span></div><header class="page-head"><div class="eyebrow">${esc(eyebrow||p.category||'BCSO')}</div><h1>${esc(p.title)}</h1><p>${esc(p.sub||'')}</p></header>${body}</section>`;
}
function chapterCard(c){return `<a class="chapter-card" href="#chapter-${c.number}"><span class="chapter-number">CHAPTER ${String(c.number).padStart(2,'0')}</span><h3>${esc(c.title)}</h3><p>${esc(c.summary||'')}</p><span class="card-link">Read chapter →</span></a>`;}
function manualIndex(){
 const groups=[['Department foundations',1,4],['Field operations',5,14],['Personnel policy',15,18],['Special assignments & fleet',19,21],['Roleplay, training & references',22,25],['Office of the Sheriff',26,26]];
 return shell(NAV.manual,`<div class="manual-intro"><div class="policy"><h2>Department-wide policy</h2><p>This manual applies to all BCSO personnel. Use the chapter index to open the full procedure or search the portal for a specific topic.</p></div><div class="policy"><h2>Fast reference</h2><p>Operational commands, the penal code, radio codes, and report templates are available in their own sections of this portal.</p><div class="unit-link-row"><a class="btn-mini btn-mini-gold" href="#commands">Commands</a><a class="btn-mini" href="#radio">Radio / 10-Codes</a><a class="btn-mini" href="#penal-code">Penal Code</a></div></div></div>${groups.map(([name,from,to])=>`<section class="chapter-group"><div class="section-head compact-head"><div><div class="eyebrow">SOP CHAPTERS ${String(from).padStart(2,'0')}–${String(to).padStart(2,'0')}</div><h2>${esc(name)}</h2></div></div><div class="chapter-grid">${CHAPTERS.filter(c=>c.number>=from&&c.number<=to).map(chapterCard).join('')}</div></section>`).join('')}`);
}
function renderBlocks(blocks, options={}){
 let html=''; let list=[]; let listOrdered=false;
 const flush=()=>{if(list.length){const tag=listOrdered?'ol':'ul';html+=`<${tag} class="sop-list${listOrdered?' ordered':''}">${list.map(x=>`<li>${esc(x.text)}</li>`).join('')}</${tag}>`;list=[];}};
 for(let i=0;i<(blocks||[]).length;i++){
  const b=blocks[i];
  // Example headings become a visually distinct block without altering the approved wording.
  if((b.type==='h2'||b.type==='h3') && /^(field\s+example|example)(\b|\s*[—:-])/i.test(String(b.text||'').trim())){
    flush(); let j=i+1;
    while(j<blocks.length && !['h2','h3','signature'].includes(blocks[j].type)) j++;
    const exampleBody=renderBlocks(blocks.slice(i+1,j),options);
    html+=`<aside class="sop-example-card"><div${b.htmlId?` id="${esc(b.htmlId)}"`:''} class="sop-example-label">${esc(b.text)}</div>${exampleBody}</aside>`;
    i=j-1; continue;
  }
  if(b.type==='listItem'){if(list.length&&listOrdered!==!!b.ordered)flush();listOrdered=!!b.ordered;list.push(b);continue;}
  flush();
  if(b.type==='h2') html+=`<h2${b.htmlId?` id="${esc(b.htmlId)}"`:''} class="sop-heading">${esc(b.text)}</h2>`;
  else if(b.type==='h3') html+=`<h3${b.htmlId?` id="${esc(b.htmlId)}"`:''} class="sop-subheading">${esc(b.text)}</h3>`;
  else if(b.type==='p'){
    const text=String(b.text||'');
    const callout=text.match(/^(Important|Warning|Reminder|Note|Policy note)\s*:\s*(.*)$/i);
    const shortCaps=text.length<=75 && text===text.toUpperCase() && /[A-Z]/.test(text);
    if(callout) html+=`<aside class="sop-note"><strong>${esc(callout[1])}</strong><p>${esc(callout[2])}</p></aside>`;
    else if(shortCaps) html+=`<p class="sop-label-line">${esc(text)}</p>`;
    else html+=`<p class="sop-paragraph">${esc(text)}</p>`;
  }
  else if(b.type==='table') html+=renderTable(b.rows);
  else if(b.type==='internalLink') html+=`<a class="resource-link-card" href="#${esc(b.route)}"><strong>${esc(b.label)}</strong><span>Open in this portal →</span></a>`;
  else if(b.type==='signature'){
    const lines=Array.isArray(b.lines)?b.lines:[];
    html+=`<div class="sop-signature"><div class="signature-rule"></div><strong>${esc(lines[0]||'BLAINE COUNTY SHERIFF\'S OFFICE')}</strong><span>${esc(lines[1]||'OFFICE OF THE SHERIFF')}</span><b class="signature-motto">${esc(lines[2]||'Duty. Integrity. Accountability.')}</b><small>${esc(lines[3]||'END OF STANDARD OPERATING PROCEDURES.')}</small></div>`;
  }
 }
 flush(); return html;
}
function renderTable(rows){
 if(!rows?.length)return '';
 const head=rows[0].map(x=>String(x||'').trim().toLowerCase());
 const vehicleTable=head.length===2 && head[0]==='vehicle' && head[1]==='price';
 const colgroup=vehicleTable?'<colgroup><col class="vehicle-name-column"><col class="vehicle-price-column"></colgroup>':'';
 return `<div class="table-wrap${vehicleTable?' vehicle-table-wrap':''}"><table${vehicleTable?' class="vehicle-table"':''}>${colgroup}<thead><tr>${rows[0].map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}
function renderClosingChapter(ch){
 const previous=BY_NUM['25'];
 return shell({title:`Chapter 26 — ${ch.title}`,category:'OFFICE OF THE SHERIFF',sub:'A final word on service, judgment, and accountability.'},`
   <article class="closing-ceremony">
     <header class="closing-emblem">
       <img src="assets/bcso-patch.webp" alt="Blaine County Sheriff's Office patch">
       <div class="eyebrow">RED WILLOW RP · OFFICE OF THE SHERIFF</div>
       <h2>Our Commitment to Service</h2>
       <p class="closing-deck">The badge carries authority. Our conduct gives that authority meaning.</p>
     </header>
     <div class="closing-message">
       <p>Service in the Blaine County Sheriff's Office means more than making arrests, issuing citations, or completing a call. Every deputy represents the department through decisions made in the field, the respect shown to the public, and the support given to fellow personnel.</p>
       <p>The success of this office is not measured solely by arrests, seized vehicles, or pursuits completed. It is reflected in sound judgment, professionalism under pressure, effective response to emergencies, and our contribution to a safe, believable, and engaging community.</p>
       <p>Deputies are expected to enforce the law fairly, communicate with integrity, and create meaningful interactions. Exercise authority with restraint, consider the consequences of each decision, and remember that the people we encounter are part of the same community we serve.</p>
       <blockquote>Every deputy is entrusted with the authority of the badge. Each is accountable for how that authority is used.</blockquote>
     </div>
     <footer class="closing-signoff">
       <div class="closing-divider"><span></span><b>BCSO</b><span></span></div>
       <strong>BLAINE COUNTY SHERIFF'S OFFICE</strong>
       <span class="closing-office">OFFICE OF THE SHERIFF</span>
       <b class="closing-motto">Duty. Integrity. Accountability.</b>
       <small>END OF STANDARD OPERATING PROCEDURES</small>
     </footer>
   </article>
   <div class="chapter-nav"><a class="btn-mini" href="#chapter-${previous.number}">← ${esc(previous.title)}</a><a class="btn-mini btn-mini-gold" href="#home">Return to Command Center →</a></div>`);
}
function renderChapter(ch){
 if(ch.number===26)return renderClosingChapter(ch);
 const headingLinks=(ch.blocks||[]).filter(b=>b.type==='h2'||b.type==='h3').map((b,i)=>({text:b.text,id:`sec-${ch.number}-${i}`}));
 let idx=0;
 const preparedBlocks=(ch.blocks||[]).map(b=>{
   if(b.type==='h2'||b.type==='h3'){const id=headingLinks[idx++].id;return {...b,htmlId:id};}return b;
 });
 const blocks=renderBlocks(preparedBlocks,{vehicleMode:ch.number===21});
 const toc=headingLinks.length?`<details class="sop-toc"><summary>Jump to section · ${headingLinks.length}</summary><div class="sop-toc-links">${headingLinks.map((h,i)=>`<a href="#sec-${ch.number}-${i}">${esc(h.text)}</a>`).join('')}</div></details>`:'';
 const prev=BY_NUM[String(ch.number-1)], next=BY_NUM[String(ch.number+1)];
 const articleClass=ch.number===26?'source-sop-body closing-document':ch.number===21?'source-sop-body vehicle-sop-body':'source-sop-body';
 return shell({title:`Chapter ${String(ch.number).padStart(2,'0')} — ${ch.title}`,category:'MASTER SOP MANUAL',sub:ch.summary},`${toc}<article class="${articleClass}">${blocks}</article><div class="chapter-nav">${prev?`<a class="btn-mini" href="#chapter-${prev.number}">← ${esc(prev.title)}</a>`:'<span></span>'}${next?`<a class="btn-mini btn-mini-gold" href="#chapter-${next.number}">${esc(next.title)} →</a>`:`<a class="btn-mini btn-mini-gold" href="#home">Return to Command Center →</a>`}</div>`);
}
function renderDivisionTiles(){
 const tiles=[
  {id:'structure',label:'RANKS & CHAIN OF COMMAND',sub:'CADET THROUGH SHERIFF',logo:null,icon:'♜'},
  {id:'cid',label:'CRIMINAL INVESTIGATION DIVISION',sub:'CID • CASES • EVIDENCE • WARRANTS',logo:'cid'},
  {id:'swat',label:'SPECIAL WEAPONS & TACTICS',sub:'SWAT • SPECIALIZED TACTICAL ASSIGNMENT',logo:'swat'},
  {id:'teu',label:'TEU / HEAT',sub:'TRAFFIC • INTERCEPTOR OPERATIONS',logo:'teu'},
  {id:'air1',label:'AIR-1 / HRT',sub:'AVIATION QUALIFICATION',logo:'air1'}
 ];
 return `<div class="division-grid">${tiles.map(t=>`<a href="#${t.id}" class="division">${t.logo?divisionLogo(t.logo,'division-logo-thumb'):`<span class="division-icon">${t.icon}</span>`}<div><b>${esc(t.label)}</b><small>${esc(t.sub)}</small></div><span class="division-arrow">→</span></a>`).join('')}</div>`;
}
function renderDivisionDetailCard(d){
 return `<article class="division-detail"><div class="division-detail-head">${divisionLogo(d.id,'division-detail-logo')}<span class="branch-tag">${esc(d.type)}</span></div><h3>${esc(d.name)}</h3><p>${esc(d.summary)}</p><ul class="clean-list">${d.requirements.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="division-card-actions"><a class="btn-mini btn-mini-gold" href="#${esc(d.id)}">Open division page →</a></div></article>`;
}

function renderHome(){
 const top=CHAPTERS.slice(0,4);
 const facts=[['8 hours','Minimum duty activity per two-week cycle'],['5 deputies','Minimum personnel actively on patrol before Air-1 deployment'],['3 patrol vehicles','Standard active pursuit vehicle limit'],['5 minutes','Minimum pursuit time before PIT, with supervisor authorization']];
 return `<section class="page home-page"><div class="hero"><div class="hero-copy"><span class="eyebrow">BLAINE COUNTY SHERIFF’S OFFICE</span><h1>Duty. Integrity.<br><em>Accountability.</em></h1><p class="hero-lead">The Red Willow BCSO department portal brings your operating procedures, rank structure, division qualifications, fleet assignments, penal code, and radio references into one searchable location.</p><div class="hero-actions"><a class="btn btn-primary" href="#manual">Open SOP Manual</a><a class="btn btn-ghost" href="#quick-reaction">Quick Reaction Guide</a></div><div class="status-row"><span class="status-dot"></span><span>Department SOP & Field Reference</span><span class="pill">26 Chapters</span></div></div><div class="hero-patch"><div class="patch-glow"></div><img src="assets/bcso-patch.webp" alt="Blaine County Sheriff’s Office patch"></div></div>
 <section class="section"><div class="section-head"><div><div class="eyebrow">START HERE</div><h2>Department Quick Access</h2></div><p>Jump to the reference needed for a shift, incident, training assignment, or specialized assignment.</p></div><div class="card-grid four-cards"><a class="feature-card" href="#manual"><span class="card-kicker">01</span><h3>Master SOP Manual</h3><p>All 26 chapters of the departmental policy, field operations, training, and roleplay manual.</p><span class="card-link">Browse chapters →</span></a><a class="feature-card" href="#radio"><span class="card-kicker">02</span><h3>Radio & 10-Codes</h3><p>Search 10-codes, response codes, signal codes, and the phonetic alphabet.</p><span class="card-link">Open radio reference →</span></a><a class="feature-card" href="#penal-code"><span class="card-kicker">03</span><h3>Penal Code</h3><p>Find statute groups, charge names, classifications, and offense descriptions.</p><span class="card-link">Search penal code →</span></a><a class="feature-card" href="#certifications"><span class="card-kicker">04</span><h3>Divisions & Certifications</h3><p>Review rank eligibility, authorized equipment, training, and deployment restrictions.</p><span class="card-link">Explore qualifications →</span></a></div></section>
 <section class="section"><div class="section-head"><div><div class="eyebrow">FIELD QUICK REFERENCE</div><h2>Common Operational Rules</h2></div></div><div class="facts-grid">${facts.map(([n,t])=>`<div class="fact-card"><strong>${esc(n)}</strong><span>${esc(t)}</span></div>`).join('')}</div><div class="quick-grid"><a class="quick" href="#commands"><b>⌘</b><span>Commands & Equipment</span><small>/iv, /panic, /jail, F7, F6/F10</small></a><a class="quick" href="#response"><b>◉</b><span>Emergency Response</span><small>Code response and scene limits</small></a><a class="quick" href="#traffic"><b>▣</b><span>Traffic & Pursuits</span><small>Stops, pursuits, timers, interventions</small></a><a class="quick" href="#impounding"><b>▰</b><span>Vehicle Impoundment</span><small>Hold periods, fines and strikes</small></a></div></section>
 <section class="section"><div class="section-head"><div><div class="eyebrow">DEPARTMENT ORGANIZATION</div><h2>Ranks & Specialized Assignments</h2></div></div>${renderDivisionTiles()}</section>
 <section class="section closing-panel"><div class="eyebrow">OFFICE OF THE SHERIFF</div><h2>Duty. Integrity. Accountability.</h2><p>Every deputy contributes to the department’s reputation through sound judgment, professional conduct, and fair enforcement.</p><a class="btn btn-ghost" href="#chapter-26">Read the Sheriff’s final message →</a></section></section>`;
}
function renderQuickReaction(){
 const commands=[['/iv','Impound a nearby vehicle. For player-owned vehicles, select “Retrievable by owner” in the menu.'],['/panic','Alert working deputies with GPS location for immediate assistance.'],['/jail','Process a suspect into jail after arrest and booking are complete.'],['F7 → Create Invoice → Job Invoice','Issue a fine associated with the appropriate charges.'],['F6/F10 Police Menu','Use for search, ID, weapon license, restraints, escort, vehicle interactions and placing objects. Do not use menu jail or fines.']];
 return shell(NAV['quick-reaction'],`<div class="command-grid">${commands.map(([c,t])=>`<div class="command"><code>${esc(c)}</code><span>${esc(t)}</span><button data-copy="${esc(c)}">Copy</button></div>`).join('')}</div><div class="facts-grid compact-facts"><div class="fact-card"><strong>Scene limits</strong><span>Criminals + 2 deputies; standard max 5 criminals / 7 deputies; recognized gang max 8 / 10. Panic is All Call with no limit.</span></div><div class="fact-card"><strong>Hostage demands</strong><span>Free and safe passage is automatic. One demand per hostage. No-pit requires two or more hostages.</span></div><div class="fact-card"><strong>Pursuit control</strong><span>Establish pursuit order. Primary Code 3; additional units Code 2. Max 3 patrol vehicles plus 1 parallel unit.</span></div><div class="fact-card"><strong>PIT</strong><span>Not within the first 5 minutes; track the timer and obtain the required supervisory authorization. See the PIT speed limits in the manual.</span></div></div><div class="unit-link-row"><a class="btn-mini btn-mini-gold" href="#chapter-4">Commands & equipment →</a><a class="btn-mini" href="#chapter-6">Emergency response →</a><a class="btn-mini" href="#chapter-8">Hostage negotiations →</a><a class="btn-mini" href="#chapter-10">Pursuits →</a></div>`);
}
function renderAlias(key){
 const p=NAV[key]||NAV.home; const nums=ALIASES[key]||[]; const chapters=nums.map(n=>BY_NUM[String(n)]).filter(Boolean);
 if(key==='structure'){
   const rankCards=(DEPT.ranks||[]).map((r,i)=>`<article class="rank-card"><span class="card-kicker">RANK ${String(i).padStart(2,'0')}</span><h3>${esc(r.name)}</h3><p>${esc(r.summary)}</p></article>`).join('');
   return shell(p,`<div class="rank-grid">${rankCards}</div><div class="chapter-shortcuts"><h2>Department structure & specialized divisions</h2>${chapters.map(ch=>chapterCard(ch)).join('')}</div>`);
 }
 if(key==='certifications') return renderCertifications();
 if(key==='vehicles') return shell(p,`${chapters.map(ch=>`<section class="chapter-excerpt vehicle-sop-body"><h2>Chapter ${ch.number} — ${esc(ch.title)}</h2>${renderBlocks(ch.blocks,{vehicleMode:true})}</section>`).join('')}`);
 if(key==='training') return shell(p,`${chapters.map(ch=>`<section class="chapter-excerpt"><h2>Chapter ${ch.number} — ${esc(ch.title)}</h2>${renderBlocks(ch.blocks)}</section>`).join('')}`);
 if(key==='swat'||key==='teu'||key==='air1') return renderUnit(key);
 if(key==='cid') return renderCid();
 return shell(p,`${chapters.map(ch=>`<section class="chapter-excerpt"><div class="eyebrow">CHAPTER ${String(ch.number).padStart(2,'0')}</div><h2>${esc(ch.title)}</h2>${renderBlocks(ch.blocks)}<a class="btn-mini btn-mini-gold" href="#chapter-${ch.number}">Open full chapter →</a></section>`).join('')}`);
}
function renderCertifications(){
 const cards=(DEPT.certifications||[]).map(c=>`<article class="cert-card"><div class="cert-icon">★</div><h2>${esc(c.name)}</h2><p>${esc(c.rank)}</p><ul class="clean-list">${c.requirements.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article>`).join('');
 const divs=(DEPT.divisions||[]).map(renderDivisionDetailCard).join('');
 return shell(NAV.certifications,`<div class="policy"><h2>Division and certification requests</h2><p>Applications are handled through the BCSO Discord using Appy. This portal documents eligibility, training requirements, and operating restrictions; submit requests through the department's Discord workflow.</p></div><section class="section compact-section"><div class="eyebrow">DIVISIONS</div><h2>Division Assignments</h2><div class="division-detail-grid">${divs}</div></section><section class="section compact-section"><div class="eyebrow">QUALIFICATIONS</div><h2>Special Certifications</h2><div class="cert-grid">${cards}</div><p class="muted">Rank eligibility does not replace required certification, training, or deployment conditions. Motorcycle certification is documented within the TEU / HEAT section.</p></section>`);
}
function renderUnit(key){
 const map={
  swat:{name:'Special Weapons & Tactics (SWAT)',chapter:20,logo:'swat',summary:'Specialized tactical operations. Personnel remain subject to department-wide use-of-force, chain-of-command, pursuit, and documentation rules.'},
  teu:{name:'Traffic Enforcement Unit / HEAT',chapter:19,logo:'teu',summary:'Specialized traffic enforcement, high-speed interception, and support for qualifying high-risk incidents.'},
  air1:{name:'Air-1 / HRT',chapter:19,logo:'air1',summary:'Aviation support for patrol, pursuits, searches, and major incidents. Air-1 deployment requires HRT qualification and the applicable staffing threshold.'}
 }[key];
 const chapter=BY_NUM[String(map.chapter)];
 const hero=`<div class="unit-hero"><div class="unit-hero-art">${divisionLogo(map.logo,'unit-hero-patch')}</div><div class="unit-hero-copy"><div class="eyebrow">BCSO SPECIALIZED ASSIGNMENT</div><h2>${esc(map.name)}</h2><p>${esc(map.summary)}</p><div class="unit-hero-actions"><a class="btn btn-primary" href="#certifications">Eligibility & certifications</a><a class="btn btn-ghost" href="#chapter-${map.chapter}">Read master SOP chapter</a></div></div></div>`;
 if(key==='teu'){
   const usage=['Bank Robbery','Vangelico Robbery','10-13s','Ammunition Robbery','Money Truck Robbery','Pacific Bank Robbery','High Tier Boost','Paleto Bank Robbery','Store Robbery','Truck Robbery','Train Robbery'];
   return shell(NAV.teu,`${hero}
    <section class="section compact-section teu-document-intro"><div class="section-head"><div><div class="eyebrow">UNIT STANDARD OPERATING PROCEDURES</div><h2>Purpose & accountability</h2></div></div><p>The purpose of this document is to standardize the instruction, procedures, and conduct expected of Traffic Enforcement Unit members. Failure to follow required procedures may lead to disciplinary action, including suspension or termination of TEU certification.</p><div class="unit-lead-grid"><div><span>UNIT LEAD</span><strong>Undersheriff Tyson Rios</strong></div><div><span>DEPARTMENT LEAD</span><strong>BCSO · Elliot Salem</strong></div></div></section>
    <section class="section compact-section"><div class="section-head"><div><div class="eyebrow">MEMBERSHIP</div><h2>Requirements & roles</h2></div><p>A supervisor recommendation is required before applying. Applicants should demonstrate a willingness to develop the necessary driving, communication, and decision-making skills.</p></div>
      <div class="teu-role-grid"><article class="teu-role-card"><div class="teu-role-label">ROLE 01</div><h3>Passenger</h3><ul class="clean-list"><li>Hold the rank of Deputy 2.</li><li>Maintain a clean disciplinary history or at least 30 days without disciplinary action.</li><li>Demonstrate effective communication.</li></ul></article><article class="teu-role-card"><div class="teu-role-label">ROLE 02</div><h3>Driver</h3><ul class="clean-list"><li>Maintain a clean disciplinary history or at least 30 days without disciplinary action.</li><li>Demonstrate quick decision-making.</li><li>Operate the vehicle or motorcycle safely and under control.</li><li>Communicate effectively and maintain the safety of everyone in the vehicle.</li></ul></article></div>
      <aside class="teu-callout"><strong>Membership requests</strong><p>Use the BCSO Discord Appy workflow to submit a division or certification request. A supervisor recommendation is required before applying; a TEU instructor can guide applicants through the qualification process.</p></aside>
    </section>
    <section class="section compact-section"><div class="section-head"><div><div class="eyebrow">FIELD OPERATIONS</div><h2>Deployment standards</h2></div></div><div class="teu-rule-grid"><article class="teu-rule-card"><span class="rule-number">01</span><h3>Statewide response</h3><p>TEU members are expected to respond to calls statewide and must follow normal unit restrictions, scene caps, and unit-balance requirements.</p></article><article class="teu-rule-card"><span class="rule-number">02</span><h3>Deployment threshold</h3><p>Do not deploy TEU during periods of limited criminal activity. A minimum of two active patrol vehicles is required for TEU deployment.</p></article><article class="teu-rule-card"><span class="rule-number">03</span><h3>Specialized units on scene</h3><p>No more than one HEAT vehicle or motorcycle should be on the same scene under the TEU SOP.</p></article><article class="teu-rule-card"><span class="rule-number">04</span><h3>No civilian transport</h3><p>TEU members must not transport civilians while operating as TEU.</p></article></div>
      <aside class="teu-callout"><strong>Uniform & equipment</strong><p>Follow the department-wide BCSO uniform and equipment policy.</p><a class="btn-mini" href="#uniform">Open Uniforms & Equipment →</a></aside>
    </section>
    <section class="section compact-section teu-certification-section"><div class="section-head"><div><div class="eyebrow">TEU / HEAT CERTIFICATIONS</div><h2>HEAT Interceptors & Motorcycle Units</h2></div><p>BIKE is managed as part of the TEU / HEAT program, not as a separate division.</p></div>
      <div class="teu-role-grid"><article class="teu-role-card"><div class="teu-role-label">CERTIFICATION 01</div><h3>HEAT — Interceptors</h3><p><strong>Minimum rank:</strong> Deputy 2 to certify and operate.</p><p>HEAT vehicle availability follows a three-deputy-to-one-vehicle ratio.</p><div class="table-wrap"><table class="compact-table"><thead><tr><th>Deputies Clocked In</th><th>Max HEAT Vehicles</th></tr></thead><tbody><tr><td>3</td><td>1</td></tr><tr><td>6</td><td>2</td></tr><tr><td>9</td><td>3</td></tr></tbody></table></div><p>No more than three HEAT vehicles may be active at one time.</p></article>
      <article class="teu-role-card"><div class="teu-role-label">CERTIFICATION 02</div><h3>BIKE — Motorcycle</h3><p><strong>Minimum rank:</strong> Deputy 2 to certify and operate.</p><p>Motorcycle availability follows the same three-deputy-to-one-unit ratio.</p><div class="table-wrap"><table class="compact-table"><thead><tr><th>Deputies Clocked In</th><th>Max BIKE Units</th></tr></thead><tbody><tr><td>3</td><td>1</td></tr><tr><td>6</td><td>2</td></tr><tr><td>9</td><td>3</td></tr></tbody></table></div><p>No more than three BIKE units may be active at one time.</p></article></div>
      <aside class="teu-callout"><strong>Shared HEAT / BIKE restrictions</strong><ul class="clean-list"><li>No suspect transportation unless absolutely necessary.</li><li>Only one HEAT or BIKE unit may participate in a single pursuit.</li><li>These units are not everyday patrol vehicles.</li><li>Pursuit deployment is limited to supercars or vehicles known to reach extreme speeds.</li><li>The TEU unit SOP also limits the scene to no more than one HEAT vehicle or motorcycle.</li></ul></aside>
    </section>
    <section class="section compact-section"><div class="section-head"><div><div class="eyebrow">AUTHORIZED USE</div><h2>TEU deployment scenarios</h2></div><p>The unit SOP lists the following examples of situations in which TEU use may be justified.</p></div><div class="teu-incident-grid">${usage.map((item,i)=>`<div class="teu-incident"><span>${String(i+1).padStart(2,'0')}</span><strong>${esc(item)}</strong></div>`).join('')}</div></section>
    <aside class="teu-final-notice"><div class="eyebrow">CERTIFICATION & CONDUCT</div><p>Violations of the TEU SOP may result in disciplinary action and, where applicable, revocation of certification. All TEU members remain bound by the Master SOP Manual, scene limits, and specialized vehicle restrictions.</p></aside>
    <section class="section compact-section"><div class="section-head"><div><div class="eyebrow">RELATED BCSO REFERENCES</div><h2>Continue reading</h2></div></div><div class="chapter-grid">${[19,10,21].map(n=>BY_NUM[String(n)]).filter(Boolean).map(chapterCard).join('')}</div><div class="unit-link-row"><a class="btn-mini" href="#traffic">Traffic Enforcement & Pursuits</a><a class="btn-mini" href="#vehicles">Authorized Vehicles</a><a class="btn-mini btn-mini-gold" href="#certifications">Special Certifications</a></div></section>`);
 }
 const related=[2,7,10,19,20,21].map(n=>BY_NUM[String(n)]).filter(ch=>ch&&(ch.number===map.chapter||[2,7,10].includes(ch.number)||key==='air1'&&ch.number===21));
 return shell({title:map.name,category:'SPECIALIZED ASSIGNMENT',sub:map.summary},`${hero}<div class="policy"><h2>Operating rules</h2><p>${esc(map.summary)}</p></div><div class="chapter-shortcuts"><h2>Related master SOP chapters</h2><div class="chapter-grid">${related.map(chapterCard).join('')}</div></div>`);
}
function renderCid(){
 const cid=window.CID_SOP_DATA||[];const body=renderBlocks(cid);
 const hero=`<div class="unit-hero"><div class="unit-hero-art">${divisionLogo('cid','unit-hero-patch')}</div><div class="unit-hero-copy"><div class="eyebrow">SPECIALIZED DIVISION</div><h2>Criminal Investigation Division</h2><p>Serious criminal investigations, long-term cases, evidence handling, warrants, informants, and case management.</p><div class="unit-hero-actions"><a class="btn btn-primary" href="#certifications">Eligibility & certifications</a><a class="btn btn-ghost" href="#chapter-20">Specialized division policy</a></div></div></div>`;
 return shell(NAV.cid,`${hero}<div class="policy"><h2>Division organization</h2><p>CID investigations are organized around trainees, detectives, supervisors, and command. CID personnel remain subject to the department rank structure and chain of command.</p></div><article class="source-sop-body">${body}</article>`);
}
function renderCommands(){
 const rows=[['/iv','Impound a nearby vehicle. For a player-owned vehicle, select “Retrievable by owner” and set the appropriate impound fine.'],['/panic','Request immediate assistance from working law-enforcement personnel; the alert includes GPS location.'],['/jail','Send a suspect to jail after arrest processing and booking.'],['F7 → Create Invoice → Job Invoice','Issue a fine associated with the applicable charges.'],['F6/F10 Police Menu','Search, identification checks, weapon license, handcuffs, escort, vehicle interactions, and place/remove from vehicle. Do not use the menu’s jail or fines functions.']];
 const ch=BY_NUM['4'];
 return shell(NAV.commands,`<div class="command-grid">${rows.map(([c,t])=>`<div class="command"><code>${esc(c)}</code><span>${esc(t)}</span><button data-copy="${esc(c)}">Copy</button></div>`).join('')}</div><div class="section-head compact-head"><div><div class="eyebrow">REQUIRED ON-DUTY LOADOUT</div><h2>Equipment checklist</h2></div></div>${renderTable([['Equipment','Required Quantity'],['MDT','1'],['Bodycam','1'],['Radio','1'],['Bandages','50'],['Heavy Armor','2'],['Handcuffs','1'],['9mm Ammunition','150'],['Flashlight','1'],['Nightstick','1'],['Taser','1'],['Service Pistol','1'],['Spike Strips','2']])}<a class="btn-mini btn-mini-gold" href="#chapter-4">Read Chapter 4 — Duty Equipment & Departmental Commands →</a>`);
}
function renderRadio(query=''){
 const ten=RADIO.tenCodes||[], resp=RADIO.responseCodes||[], sig=RADIO.signals||[], phon=RADIO.phonetic||[];
 const radioTable=(rows,firstLabel)=>`<div class="table-wrap"><table class="reference-table"><thead><tr><th>${esc(firstLabel)}</th><th>Meaning</th></tr></thead><tbody>${rows.map(r=>`<tr data-radio-row data-search="${esc((r[0]+' '+(r[1]||'')).toLowerCase())}"><td class="statute-cell">${esc(r[0])}</td><td>${esc(r[1]||'—')}</td></tr>`).join('')}</tbody></table></div>`;
 return shell(NAV.radio,`<div class="reference-toolbar"><input id="radioSearch" type="search" placeholder="Search radio codes, meanings, signals…" value="${esc(query)}"><span class="results-count" id="radioCount"></span></div><section class="section compact-section"><div class="eyebrow">10-CODES</div><h2>Radio codes</h2>${radioTable(ten,'Code')}</section><section class="section compact-section"><div class="eyebrow">RESPONSE CODES</div><h2>Response & incident codes</h2>${radioTable(resp,'Code')}</section><section class="section compact-section"><div class="eyebrow">SIGNALS</div><h2>Signal codes</h2>${radioTable(sig,'Signal')}</section><section class="section compact-section"><div class="eyebrow">PHONETIC ALPHABET</div><h2>Spelling reference</h2><div class="phonetic-grid">${phon.map(([l,w])=>`<div class="phonetic-item" data-radio-row data-search="${esc((l+' '+w).toLowerCase())}"><b>${esc(l)}</b><span>${esc(w)}</span></div>`).join('')}</div></section><div class="policy"><p>For Code 1, Code 2, and Code 3 vehicle response classifications, follow Chapter 6 of the Master SOP Manual.</p><a class="btn-mini btn-mini-gold" href="#chapter-13">Radio communications SOP →</a></div>`);
}
function renderPenal(query=''){
 const groups=[...new Set(PENAL.map(r=>`${r.statute}|${r.category}`))];
 const opts=groups.map(g=>{const [n,c]=g.split('|');return `<option value="${esc(g)}">${esc(n)} — ${esc(c)}</option>`}).join('');
 const rows=PENAL.map((r)=>`<tr data-penal-row data-category="${esc(r.statute+'|'+r.category)}" data-search="${esc([r.statute,r.category,r.charge,r.classification,r.description].join(' ').toLowerCase())}"><td class="statute-cell">${esc(r.statute)}</td><td>${esc(r.category)}</td><td><strong>${esc(r.charge)}</strong></td><td>${r.classification?`<span class="class-chip">${esc(r.classification)}</span>`:'—'}</td><td>${esc(r.description||'—')}</td></tr>`).join('');
 return shell(NAV['penal-code'],`<div class="reference-count-row"><div class="reference-count"><b>${PENAL.length}</b><span>offense entries</span></div><div class="reference-count"><b>${groups.length}</b><span>statute groups</span></div><div class="reference-count"><b>Local</b><span>Reference stored in this portal</span></div></div><div class="reference-toolbar"><input id="penalSearch" type="search" placeholder="Search charge, statute, or description…" value="${esc(query)}"><select id="penalCategory"><option value="">All statute groups</option>${opts}</select><span id="penalCount" class="results-count"></span></div><div class="table-wrap penal-table-wrap"><table><thead><tr><th>Statute</th><th>Category</th><th>Charge</th><th>Class</th><th>Description</th></tr></thead><tbody>${rows}</tbody></table></div><p class="muted">Use the classifications and descriptions supplied by the RWRP penal code. Jail durations and fines are not shown in this reference table.</p>`);
}
function filterPenal(){const q=($('#penalSearch')?.value||'').toLowerCase().trim(),cat=$('#penalCategory')?.value||'';let n=0;$$('[data-penal-row]').forEach(r=>{const show=(!q||r.dataset.search.includes(q))&&(!cat||r.dataset.category===cat);r.hidden=!show;if(show)n++;});const c=$('#penalCount');if(c)c.textContent=`${n} results`;}
function filterRadio(){const q=($('#radioSearch')?.value||'').toLowerCase().trim();let n=0;$$('[data-radio-row]').forEach(r=>{const show=!q||r.dataset.search.includes(q);r.hidden=!show;if(show)n++;});const c=$('#radioCount');if(c)c.textContent=`${n} results`;}
function renderDocuments(){
 const forms=[['Incident Report','Records the facts, location, involved parties, evidence, and actions taken.'],['Arrest Report','Documents arrest authority, charges, search, transport, booking, and custody transfer.'],['Pursuit Report','Captures reason for pursuit, unit roles, callouts, speed, interventions, termination, and outcome.'],['Vehicle Impound Record','Records vehicle, owner, reason, photographs, inventory, impound number, holding period, fine, and MDT strike.'],['CID Case Summary','Records case number, offense, investigators, leads, evidence, interviews, warrants, and case status.'],['Leave of Absence Request','Records requested leave duration and any information needed for the department process.'],['FTO Evaluation','Tracks academy and field-training tasks, performance notes, and sign-off.']];
 return shell(NAV.documents,`<div class="policy"><h2>Local templates</h2><p>Select a template, fill out the fields, then generate a copy-ready record for the department's approved recordkeeping process.</p></div><div class="application-layout"><section class="panel application-form"><label class="field-label" for="templateType">Template</label><select id="templateType">${forms.map((f,i)=>`<option value="${i}">${esc(f[0])}</option>`).join('')}</select><div id="templateDescription" class="muted" style="margin:10px 0"></div><label class="field-label" for="recordDate">Date / time</label><input id="recordDate" placeholder="Enter date and time"><label class="field-label" for="recordAuthor">Deputy name / callsign</label><input id="recordAuthor" placeholder="Name and callsign"><label class="field-label" for="recordSubject">Subject / case / vehicle</label><input id="recordSubject" placeholder="Relevant subject, case number, or vehicle"><label class="field-label" for="recordLocation">Location</label><input id="recordLocation" placeholder="Location"><label class="field-label" for="recordDetails">Details</label><textarea id="recordDetails" rows="8" placeholder="Document relevant facts, actions, evidence, and outcome."></textarea><div class="form-actions"><button class="btn btn-primary" id="makeTemplate" type="button">Generate record</button><button class="btn btn-ghost" id="clearTemplate" type="button">Clear</button></div></section><section class="panel application-output"><div class="eyebrow">RECORD PREVIEW</div><h2>Copy-ready template</h2><textarea id="templateOutput" rows="24" readonly></textarea><div class="form-actions"><button class="btn btn-primary" id="copyTemplate" type="button">Copy record</button><button class="btn btn-ghost" id="printTemplate" type="button">Print</button></div></section></div>`);
}
function setupDocuments(){
 const templates=[['Incident Report','Records the facts, location, involved parties, evidence, and actions taken.'],['Arrest Report','Documents arrest authority, charges, search, transport, booking, and custody transfer.'],['Pursuit Report','Captures reason for pursuit, unit roles, callouts, speed, interventions, termination, and outcome.'],['Vehicle Impound Record','Records vehicle, owner, reason, photographs, inventory, impound number, holding period, fine, and MDT strike.'],['CID Case Summary','Records case number, offense, investigators, leads, evidence, interviews, warrants, and case status.'],['Leave of Absence Request','Records requested leave duration and any information needed for the department process.'],['FTO Evaluation','Tracks academy and field-training tasks, performance notes, and sign-off.']];
 const select=$('#templateType');if(!select)return;const setDesc=()=>$('#templateDescription').textContent=templates[Number(select.value)][1];select.addEventListener('change',setDesc);setDesc();
 const gen=()=>{$('#templateOutput').value=`${templates[Number(select.value)][0].toUpperCase()}\nRED WILLOW RP — BCSO\n\nDate / Time: ${$('#recordDate').value||'________________'}\nDeputy / Callsign: ${$('#recordAuthor').value||'________________'}\nSubject / Case / Vehicle: ${$('#recordSubject').value||'________________'}\nLocation: ${$('#recordLocation').value||'________________'}\n\nDetails\n${$('#recordDetails').value||'________________________________________________'}\n\nEvidence / Attachments: ________________________________\nSupervisor / Follow-up: ________________________________\nOutcome / Disposition: ________________________________\n\nPrepared by: ${$('#recordAuthor').value||'________________'}`;};
 $('#makeTemplate')?.addEventListener('click',gen);$('#clearTemplate')?.addEventListener('click',()=>{$$('.application-form input,.application-form textarea').forEach(x=>x.value='');$('#templateOutput').value='';});$('#copyTemplate')?.addEventListener('click',async()=>{if(!$('#templateOutput').value)gen();try{await navigator.clipboard.writeText($('#templateOutput').value);$('#copyTemplate').textContent='Copied';setTimeout(()=>$('#copyTemplate').textContent='Copy record',1000)}catch{const x=$('#templateOutput');x.focus();x.select();document.execCommand('copy')}});$('#printTemplate')?.addEventListener('click',()=>{if(!$('#templateOutput').value)gen();const w=window.open('','_blank','width=800,height=800');if(!w)return;w.document.write(`<title>BCSO Record</title><pre style="white-space:pre-wrap;font:14px/1.6 Arial;padding:25px">${esc($('#templateOutput').value)}</pre>`);w.document.close();w.print();});
}
function renderPage(key,params){
 if(key==='home')return renderHome();
 if(key==='manual')return manualIndex();
 if(key==='quick-reaction')return renderQuickReaction();
 if(key==='radio')return renderRadio(params.get('q')||'');
 if(key==='penal-code')return renderPenal(params.get('q')||'');
 if(key==='commands')return renderCommands();
 if(key==='documents')return renderDocuments();
 if(Object.prototype.hasOwnProperty.call(ALIASES,key))return renderAlias(key);
 const match=key.match(/^chapter-(\d+)$/);if(match&&BY_NUM[match[1]])return renderChapter(BY_NUM[match[1]]);
 if(key==='chapter-24'&&!BY_NUM['24'])return renderChapter(CHAPTERS.find(c=>c.number===24));
 return manualIndex();
}
let modal=$('#searchModal'), searchInput=$('#searchInput'), searchResults=$('#searchResults');
function buildSearchIndex(){
 const out=[];
 for(const ch of CHAPTERS){out.push({title:`Chapter ${ch.number} — ${ch.title}`,desc:ch.summary||'',route:`chapter-${ch.number}`,text:(ch.title+' '+(ch.blocks||[]).map(b=>b.text||((b.rows||[]).flat().join(' '))).join(' ')).toLowerCase()});}
 for(const [route,p] of Object.entries(NAV)){out.push({title:p.title,desc:p.sub,route,text:(p.title+' '+p.sub).toLowerCase()});}
 for(const r of PENAL)out.push({title:r.charge,desc:[r.statute,r.category,r.classification,r.description].filter(Boolean).join(' · '),route:'penal-code',filter:r.charge,text:JSON.stringify(r).toLowerCase()});
 for(const r of RADIO.tenCodes||[])out.push({title:r[0],desc:r[1]||'Radio code',route:'radio',filter:r[0],text:(r[0]+' '+(r[1]||'')).toLowerCase()});
 for(const r of RADIO.responseCodes||[])out.push({title:r[0],desc:r[1],route:'radio',filter:r[0],text:(r[0]+' '+r[1]).toLowerCase()});
 for(const r of RADIO.signals||[])out.push({title:r[0],desc:r[1],route:'radio',filter:r[0],text:(r[0]+' '+r[1]).toLowerCase()});
 for(const r of RADIO.phonetic||[])out.push({title:`${r[0]} — ${r[1]}`,desc:'Phonetic alphabet',route:'radio',filter:r[1],text:(r[0]+' '+r[1]).toLowerCase()});
 for(const r of DEPT.divisions||[])out.push({title:r.name,desc:r.summary,route:r.id,text:JSON.stringify(r).toLowerCase()});
 if(true)out.push({title:'TEU Unit SOP — Requirements & Deployment',desc:'Passenger and driver eligibility, supervisor recommendation, staffing threshold, scene limits, transport restriction, and authorized scenarios.',route:'teu',text:'traffic enforcement unit TEU HEAT passenger driver deputy 2 disciplinary history 30 days instructor application uniform equipment statewide two active patrol vehicles no civilian transport bank robbery vangelico 10-13 ammunition money truck pacific bank high tier boost paleto bank store truck train robbery'});
 for(const r of DEPT.certifications||[])out.push({title:r.name,desc:r.rank,route:'certifications',text:JSON.stringify(r).toLowerCase()});
 return out;
}
let SEARCH_INDEX=buildSearchIndex();
function openSearch(){modal.classList.remove('hidden');modal.setAttribute('aria-hidden','false');searchInput.value='';drawSearchResults();searchInput.focus();}
function closeSearch(){modal.classList.add('hidden');modal.setAttribute('aria-hidden','true');}
function drawSearchResults(){const q=searchInput.value.toLowerCase().trim();const found=SEARCH_INDEX.filter(x=>!q||x.title.toLowerCase().includes(q)||x.desc.toLowerCase().includes(q)||x.text.includes(q)).slice(0,28);searchResults.innerHTML=found.length?found.map(x=>`<a class="result" href="#${x.route}${x.filter?'?q='+encodeURIComponent(x.filter):''}"><strong>${esc(x.title)}</strong><small>${esc(x.desc)}</small></a>`).join(''):'<p class="muted">No matching entries.</p>';}
function copyButtons(){ $$('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{const v=btn.dataset.copy;try{await navigator.clipboard.writeText(v);const t=btn.textContent;btn.textContent='Copied';setTimeout(()=>btn.textContent=t,900)}catch{prompt('Copy this reference:',v)}})); }
function route(){const raw=location.hash.replace(/^#/,'')||'home';const [keyRaw,qs='']=raw.split('?');const key=keyRaw||'home';const params=new URLSearchParams(qs);$('#main').innerHTML=renderPage(key,params);$$('#sidebar a[data-route]').forEach(a=>a.classList.toggle('active',a.dataset.route===key||(['chapter-1','chapter-2','chapter-3'].includes(key)&&a.dataset.route==='manual')));if(!modal.classList.contains('hidden'))closeSearch();if(key==='radio'){$('#radioSearch')?.addEventListener('input',filterRadio);filterRadio();}if(key==='penal-code'){$('#penalSearch')?.addEventListener('input',filterPenal);$('#penalCategory')?.addEventListener('change',filterPenal);if(params.get('q'))$('#penalSearch').value=params.get('q');filterPenal();}if(key==='documents')setupDocuments();copyButtons();window.scrollTo(0,0);}
$('#searchBtn').addEventListener('click',openSearch);$('#closeSearch').addEventListener('click',closeSearch);modal.addEventListener('click',e=>{if(e.target===modal)closeSearch()});searchInput.addEventListener('input',drawSearchResults);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();}});$('#menuBtn').addEventListener('click',()=>{const sb=$('#sidebar'),open=sb.classList.toggle('mobile-open');$('#menuBtn').setAttribute('aria-expanded',String(open));});$('#sidebar').addEventListener('click',()=>{if(window.innerWidth<=850)$('#sidebar').classList.remove('mobile-open')});window.addEventListener('hashchange',route);route();
