const PAGES = {
home:{title:'Command Center',sub:'Central hub for BCSO policies, operations, divisions, and reference material.',category:'HOME'},
'quick-reaction':{title:'Quick Reaction Handbook',category:'OPERATIONS',sub:'Immediate-response framework for priority incidents.',draft:true,blocks:[['Priority Response','Define calls eligible for priority response, required notifications, supervisor involvement, and response limitations.'],['Scene Arrival','Define arrival responsibilities, scene security, command designation, and radio updates.'],['Critical Incidents','Define procedures for active threats, officer-down events, barricades, major crashes, and other high-risk incidents.'],['After Action','Define required reports, evidence preservation, supervisor review, and post-incident requirements.']]},
patrol:{title:'Patrol Operations',category:'OPERATIONS',sub:'Routine patrol expectations and field procedures.',draft:true,blocks:[['Patrol Status','Define available, unavailable, traffic, scene, transport, and other status rules.'],['Vehicle Checks','Define required vehicle and equipment checks before patrol.'],['Routine Stops','Define approach, identification, communication, records checks, and release procedures.'],['Supervisor Contact','Define when a supervisor must be notified or requested.']]},
communications:{title:'Communications & Radio',category:'OPERATIONS',sub:'Radio discipline, dispatch coordination, and communications standards.',draft:true,blocks:[['Radio Discipline','Keep transmissions concise, professional, and relevant. Replace this framework with the approved standard.'],['Priority Traffic','Define emergency traffic wording, channel restrictions, and dispatch priority procedures.'],['Identifiers','Define callsigns, unit numbers, department identifiers, and supervisor designations.'],['Dispatch Requests','Define BOLOs, tow requests, EMS requests, backup, records checks, and scene notifications.']]},
traffic:{title:'Traffic & Pursuits',category:'OPERATIONS',sub:'Traffic stops, pursuits, emergency driving, and intervention references.',draft:true,blocks:[['Traffic Stops','Define stop initiation, positioning, communication, records checks, and release/arrest workflow.'],['Vehicle Pursuits','Define initiation factors, supervisor oversight, radio updates, termination criteria, and reporting.'],['PIT / Intervention','Define authorized intervention methods, conditions, restrictions, and required documentation.'],['Emergency Driving','Define lights/siren use, intersections, speed expectations, and officer-safety requirements.']]},
arrest:{title:'Arrest & Booking',category:'OPERATIONS',sub:'Arrest processing, transport, booking, and release references.',draft:true,blocks:[['Arrest','Define probable cause, arrest procedures, rights advisement, searches, and documentation.'],['Transport','Define prisoner search, restraints, vehicle placement, destination, and transfer procedures.'],['Booking','Define property, charges, evidence, records, screenshots/forms, and release/transfer workflow.'],['Supervisor Review','Define cases requiring supervisor approval or additional documentation.']]},
impounding:{title:'Impounding',category:'OPERATIONS',sub:'Vehicle impound, tow, evidence, and release references.',draft:true,blocks:[['Impound Criteria','Define the circumstances under which a vehicle may be towed or impounded.'],['Inventory / Evidence','Define inventory requirements, evidence handling, photographs, and documentation.'],['Tow Requests','Define dispatch/tow procedures and required vehicle information.'],['Release','Define authorized release, fees, records, and documentation.']]},
conduct:{title:'Code of Conduct',category:'POLICY',sub:'Professional standards and member expectations.',draft:true,blocks:[['Professionalism','Define expected conduct toward civilians, fellow members, supervisors, and partner agencies.'],['Integrity','Define honesty, reporting obligations, evidence integrity, and conflicts of interest.'],['Department Resources','Define appropriate use of vehicles, equipment, communications, records, and internal systems.'],['Social Media / OOC','Define separation of roleplay and out-of-character conduct where applicable.']]},
force:{title:'Use of Force & Firearms',category:'POLICY',sub:'Use-of-force principles, reporting, and firearms references.',draft:true,blocks:[['Force Principles','Define authorized force, necessity, proportionality, de-escalation, and duty-to-act requirements.'],['Firearms','Define carry, display, discharge, storage, and authorization requirements.'],['Reporting','Define when force, firearm display, discharge, injury, or other critical events require reports.'],['Supervisor Review','Define mandatory supervisor response and administrative review thresholds.']]},
uniform:{title:'Uniform & Equipment',category:'POLICY',sub:'Uniform standards, issued equipment, and approved loadouts.',draft:true,table:[['Category','Reference'],['Patrol Uniform','Define shirt, pants, boots, vest, duty belt, and identifiers.'],['Supervisor Uniform','Define rank markings and supervisor-specific equipment.'],['Specialty Uniforms','Define CID, SWAT, TEU / HEAT, Air-1, and other specialty attire.'],['Equipment','Define approved equipment and any rank/unit restrictions.']]},
discipline:{title:'Discipline & Infractions',category:'POLICY',sub:'Internal accountability and administrative reference.',draft:true,blocks:[['Minor Infractions','Define coaching, documentation, retraining, and other responses.'],['Major Infractions','Define investigation, suspension, demotion, removal, or other authorized outcomes.'],['Reporting','Define complaint intake, evidence standards, confidentiality, and review.'],['Appeals','Define who may appeal and the approved process/timeline.']]},
activity:{title:'Activity & Leave',category:'POLICY',sub:'Activity expectations, LOA, inactivity, and return-to-duty references.',draft:true,blocks:[['Activity','Define minimum activity expectations and how activity is recorded.'],['Leave of Absence','Define LOA request process, maximum duration, extensions, and return procedures.'],['Inactivity','Define inactivity notifications, administrative review, and reinstatement requirements.'],['Return to Duty','Define retraining or supervisor review required after extended leave.']]},
'off-duty':{title:'Off-Duty Guidelines',category:'POLICY',sub:'Off-duty expectations and roleplay boundaries.',draft:true,blocks:[['Conduct','Define conduct that may affect department standing while off duty.'],['Equipment','Define when department equipment or vehicles may be used off duty.'],['Roleplay Separation','Define OOC disputes, Discord conduct, and roleplay boundaries.'],['Outside Agencies','Define interactions with other departments and conflicts of authority.']]},
structure:{title:'Department Structure & Branches',category:'DEPARTMENT',sub:'Branch map, division assignments, and department organization.',custom:'structure'},
certifications:{title:'Special Certifications',category:'DEPARTMENT',sub:'Certification tracks currently referenced in the BCSO portal.',custom:'certifications'},
applications:{title:'Division / Certification Applications',category:'DEPARTMENT',sub:'Build a Letter of Interest for a division or qualification.',custom:'applications'},
vehicles:{title:'Police Vehicles',category:'DEPARTMENT',sub:'Fleet, vehicle assignments, and approved configurations.',draft:true,table:[['Assignment','Vehicle Reference','Status'],['Patrol','Approved patrol fleet','DRAFT'],['Supervisor','Supervisor fleet','DRAFT'],['CID','Unmarked / investigative fleet','DRAFT'],['Special Operations','SWAT / TEU / Air-1 support','DRAFT']]},
training:{title:'Academy & FTO',category:'DEPARTMENT',sub:'Recruit training, field training, and evaluation references.',draft:true,timeline:[['01','Academy','Define classroom curriculum, practical exercises, testing, and graduation requirements.'],['02','FTO Phase','Define field-training phases, daily evaluations, remediation, and sign-off requirements.'],['03','Probation','Define probationary period, performance expectations, and final review.'],['04','Certification','Define specialty qualification pathways after basic field certification.']]},
cid:{title:'Criminal Investigation Division',category:'DEPARTMENT',sub:'CID organization, case handling, and investigative references.',draft:true,blocks:[['Case Intake','Define case assignment, priority, documentation, and supervisor oversight.'],['Investigations','Define interviews, evidence, surveillance, records, warrants, and interagency coordination.'],['Case Files','Define required documentation and retention.'],['Arrests','Define investigative arrest coordination and required notifications.']]},
swat:{title:'SWAT',category:'DEPARTMENT',sub:'Special Weapons and Tactics division reference.',draft:true,blocks:[['Activation','Define qualifying incidents and who may activate the unit.'],['Command','Define tactical command and incident-command relationships.'],['Equipment','Define approved specialty equipment and qualification requirements.'],['After Action','Define documentation, debrief, and review.']]},
teu:{title:'TEU / HEAT',category:'DEPARTMENT',sub:'Traffic Enforcement Unit / Highway Enforcement & Apprehension Team.',draft:true,blocks:[['Mission','Define the unit mission and patrol area.'],['Qualifications','Define selection, training, pursuit, motorcycle, and intervention qualifications.'],['Equipment','Define approved vehicles, equipment, and specialty tools.'],['Reporting','Define enforcement statistics, pursuit reporting, and supervisor review.']]},
air1:{title:'Air-1',category:'DEPARTMENT',sub:'BCSO aviation / helicopter division reference.',draft:true,blocks:[['Mission','Define patrol, pursuit support, search, rescue, and scene-support missions.'],['Pilot Qualifications','Define training, currency, check rides, and authorization.'],['Flight Operations','Define takeoff, landing, communications, airspace, emergency, and weather procedures.'],['Coordination','Define ground-unit requests, tactical support, and incident-command coordination.']]},
commands:{title:'Common Commands',category:'RESOURCES',sub:'Quick-access command reference for BCSO members.',draft:true,commands:[['/iv','Impound a nearby vehicle'],['/panic','Request assistance for a downed or in-trouble officer; alerts working officers with GPS location'],['/jail','Send someone to jail after arrest processing'],['F7 > Billing Menu > Create Invoice > Job Invoice','Create an invoice to fine a suspect'],['F6/F10 Police Menu','Search suspect, check identification, issue weapon license, handcuff / escort, and vehicle interactions; SOP says do not use menu jail or fines']]},
radio:{title:'Radio / 10-Codes',category:'RESOURCES',sub:'Searchable RWRP phonetic alphabet, 10-codes, response codes, signals, and Miranda wording.',custom:'radio'},
'penal-code':{title:'Penal Code',category:'RESOURCES',sub:'Searchable reference based on the uploaded RW RP Revised Statutes (Penal Code).',custom:'penal'},
documents:{title:'Forms & Documents',category:'RESOURCES',sub:'Central location for department forms and shared resources.',draft:true,links:[['Incident Report','Add your approved report form or document.'],['Arrest Report','Add your approved arrest/booking form.'],['Pursuit Report','Add your approved pursuit review form.'],['LOA Request','Add your approved leave request form.']]},
announcements:{title:'Announcements',category:'RESOURCES',sub:'Department updates and command notices.',draft:true,announcements:[['INITIAL RELEASE','The Red Willow BCSO policy portal is ready for approved policy, training, and command material.'],['VERIFY YOUR REVISION','Always use the current policy revision displayed by command before relying on a procedure.']]},
'creative-liberties':{title:'Creative Liberties',category:'ROLEPLAY',sub:'Guidance for fair, meaningful, interactive roleplay while serving as a deputy.'},
bike:{title:'BIKE / Motorcycle',category:'DEPARTMENT',sub:'Motorcycle certification eligibility and operational restrictions from the Special Certifications SOP.'}
};

const nav = [...document.querySelectorAll('#sidebar a[data-route]')];
const main = document.querySelector('#main');

function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function pageShell(p, body, banner=''){
  return `<section class="page"><div class="crumb"><a href="#home">Command Center</a> <span>/</span> ${esc(p.title)}</div><header class="page-head"><div class="eyebrow">${esc(p.category||'DEPARTMENT')}</div><h1>${esc(p.title)}</h1><p>${esc(p.sub||'')}</p></header>${banner?`<div class="draft-banner"><b>${esc(banner.title||banner)}</b><span>${esc(banner.text||'This section contains source-based reference data. Confirm official policy wording before relying on unverified items.')}</span></div>`:''}${body}</section>`;
}

function renderSourceSopPage(doc){
  const parts=doc.parts||[]; let body=''; let i=0; const headings=[];
  function headingId(text,index){return 'sopsec-'+index+'-'+text.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,42)}
  while(i<parts.length){
    const part=parts[i];
    if(part.type==='heading'){
      const id=headingId(part.text,i); headings.push({text:part.text,id,level:part.level});
      const tag=part.level===2?'h2':'h3';
      body+=`<${tag} class="sop-heading" id="${id}">${esc(part.text)}</${tag}>`;
      i++; continue;
    }
    if(part.type==='list'){
      const group=[]; while(i<parts.length && parts[i].type==='list'){group.push(parts[i]);i++;}
      const ordered=group.length>0 && group.every(x=>/^\d+[.)]\s+/.test(x.text));
      const tag=ordered?'ol':'ul';
      body+=`<${tag} class="sop-list${ordered?' ordered':''}">${group.map(x=>`<li>${esc(ordered?x.text.replace(/^\d+[.)]\s+/,''):x.text)}</li>`).join('')}</${tag}>`;
      continue;
    }
    body+=`<p class="sop-paragraph">${esc(part.text)}</p>`; i++;
  }
  const toc=headings.length?`<details class="sop-toc"><summary>On this page · ${headings.length} sections</summary><div class="sop-toc-links">${headings.map(h=>`<a href="#${h.id}">${esc(h.text)}</a>`).join('')}</div></details>`:'';
  const fullText=parts.map(x=>x.text).join(' ');
  const meta=`<div class="sop-source-meta"><div><span class="source-label">SOURCE SOP PDF</span><b>${parts.length} content blocks</b><small>Imported from supplied PDF; original section order retained.</small></div><a class="btn-mini btn-mini-gold" href="${esc(doc.sourceUrl)}" target="_blank" rel="noopener">Open original SOP ↗</a></div>`;
  const callout=`<div class="source-callout"><b>Using this SOP</b><span>This page transcribes the supplied BCSO PDF. Wording and department-specific terminology are preserved. If another SOP or a later command notice conflicts with this page, follow the currently approved command direction.</span></div>`;
  let supplemental='';
  if(doc.id==='structure'){
    const dm=window.DEPARTMENT_DATA||{branches:[]};
    const cards=(dm.branches||[]).map(b=>`<article class="branch-card"><div class="branch-top"><span class="branch-tag">PORTAL GROUPING</span><span class="review-status">SOURCE LINKED</span></div><h2>${esc(b.name)}</h2><p>${esc(b.summary)}</p><div class="branch-subhead">Coverage</div><ul>${b.topics.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><div class="branch-links">${b.links.map(l=>`<a href="#${esc(l.route)}">${esc(l.label)} →</a>`).join('')}</div></article>`).join('');
    supplemental=`<div class="section-head compact-head"><div><div class="eyebrow">DEPARTMENT BRANCHES</div><h2>Portal branch map</h2></div><p>This map groups the SOP pages into operational areas. The official rank ladder and chain-of-command wording from the supplied Department Structure SOP follows below.</p></div><div class="branch-grid">${cards}</div>`;
  }
  if(doc.id==='certifications'){
    const dm=window.DEPARTMENT_DATA||{divisions:[],certifications:[]};
    const divisions=(dm.divisions||[]).map(x=>`<a class="btn-mini btn-mini-gold" href="#applications?target=${encodeURIComponent(x.name)}&amp;type=Division">Apply: ${esc(x.name)}</a>`).join(' ');
    const certs=(dm.certifications||[]).map(x=>`<a class="btn-mini" href="#applications?target=${encodeURIComponent(x.name)}&amp;type=Certification">Apply: ${esc(x.name)}</a>`).join(' ');
    supplemental=`<div class="panel application-shortcuts"><div class="eyebrow">APPLICATION SHORTCUTS</div><h2>Division applications</h2><div class="unit-link-row">${divisions}</div><h2 style="margin-top:24px">Certification applications</h2><div class="unit-link-row">${certs}</div><p class="muted">The form creates a copyable Letter of Interest; it does not send the application automatically.</p></div>`;
  }
  if(doc.id==='cid'){
    supplemental=`<div class="source-callout"><b>Apply to CID</b><span>The CID SOP says applicants must submit a formal application through the department's email system and be approved by the Division Head and Command Staff. <a class="inline-link" href="#applications?target=${encodeURIComponent('Criminal Investigation Division (CID)')}&amp;type=Division">Prepare a Letter of Interest →</a></span></div>`;
  }
  return pageShell({title:doc.title,category:doc.category,sub:doc.summary},`${supplemental}${meta}${callout}${toc}<article class="source-sop-body" data-sop-text="${esc(fullText.toLowerCase().slice(0,1800))}">${body}</article><div class="source-doc-footer"><span>Source: ${esc(doc.sourceFile)}</span><a href="#applications">Division / certification applications →</a></div>`);
}
function renderUnitDetailPage(key,p){
  const blocks={
    swat:{title:'Special Weapons & Tactics (SWAT)',sub:'Special division application route.',facts:[['What the SOP confirms','SWAT is listed in the Special Certifications SOP among the teams that require a division application.'],['Eligibility and deployment','The supplied PDF set does not include a separate SWAT SOP or specific minimum rank, activation criteria, staffing minimum, or equipment requirements. Do not infer these from the unit name; use current command direction.']],links:[['Special Certifications','certifications'],['Applications','applications']]},
    teu:{title:'Traffic Enforcement Unit / HEAT',sub:'Traffic Enforcement Unit and HEAT Interceptor references.',facts:[['HEAT rank requirement','Deputy 2 is required to certify and to use HEAT.'],['Vehicle ratio','One HEAT vehicle for every three officers clocked in. Six officers allow two HEAT vehicles; nine allow three. Maximum: three HEAT vehicles at once.'],['Pursuit restrictions','HEAT and BIKE must not PIT or transport; only one HEAT / BIKE unit per chase; they are not everyday patrol vehicles.'],['Patrol restriction','Patrol Operations says HEAT or BIKE should not be used unless the suspect vehicle is a supercar or known to reach extreme speeds. Only one HEAT vehicle OR one motorcycle is allowed on a vehicle pursuit.']],links:[['Special Certifications','certifications'],['Patrol Operations','patrol'],['Traffic Enforcement & Pursuits','traffic'],['Apply','applications']]},
    air1:{title:'Air-1 / HRT',sub:'Helicopter certification and deployment conditions.',facts:[['Rank requirement','Deputy 2 is required to certify and use HRT (Air-1 / Helicopters).'],['Deployment minimum','There must be five officers clocked in and on patrol to pull out Air-1.'],['Authorized helicopter models','The Police Vehicles SOP lists Maverick and Conda under Police Helicopters at Deputy 2.'],['Separate flight SOP','No standalone flight operations SOP was included in the supplied PDF set. Use any additional approved command direction.']],links:[['Special Certifications','certifications'],['Police Vehicles','vehicles'],['Apply','applications']]},
    bike:{title:'BIKE / Motorcycle',sub:'Motorcycle certification and operational restrictions.',facts:[['Rank requirement','Deputy 2 is required to certify and use BIKE.'],['Vehicle ratio','One motorcycle for every three officers clocked in; six officers allow two bikes and nine allow three. Maximum: three bikes at once.'],['Pursuit restrictions','HEAT and BIKE must not PIT or transport; only one HEAT / BIKE unit per chase; they are not everyday patrol vehicles.'],['Patrol restriction','Patrol Operations says HEAT or BIKE should not be used unless the suspect vehicle is a supercar or known to reach extreme speeds.']],links:[['Special Certifications','certifications'],['Police Vehicles','vehicles'],['Apply for certification','applications']]}
  };
  const d=blocks[key];
  const cards=d.facts.map(([h,t])=>`<section class="policy"><h2>${esc(h)}</h2><p>${esc(t)}</p></section>`).join('');
  const applyTarget=({swat:'Special Weapons & Tactics (SWAT)',teu:'Traffic Enforcement Unit (TEU) / HEAT',air1:'Air-1',bike:'BIKE (Motorcycle)'})[key]||d.title;
  const applyType=key==='bike'?'Certification':'Division';
  const links=d.links.map(([label,route])=>`<a class="btn-mini" href="#${route}${route==='applications'?'?target='+encodeURIComponent(applyTarget)+'&amp;type='+applyType:''}">${esc(label)} →</a>`).join(' ');
  const note=key==='swat'?{title:'SOURCE LIMIT',text:'Only the division-application requirement is specified in the supplied PDFs; the missing SWAT SOP has not been fabricated.'}:null;
  return pageShell({title:d.title,category:'SPECIAL DIVISION / CERTIFICATION',sub:d.sub},`<div class="grid2">${cards}</div><div class="unit-link-row">${links}</div>`,note);
}
function renderStructurePage(p){
  const d=window.DEPARTMENT_DATA||{branches:[],divisions:[],branchMapStatus:'Department data did not load.'};
  const branchCards=d.branches.map(b=>`<article class="branch-card"><div class="branch-top"><span class="branch-tag">BRANCH FRAMEWORK</span><span class="review-status">COMMAND REVIEW</span></div><h2>${esc(b.name)}</h2><p>${esc(b.summary)}</p><div class="branch-source">${esc(b.sourceStatus)}</div><div class="branch-subhead">Branch coverage</div><ul>${b.topics.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><div class="branch-links">${b.links.map(l=>`<a href="#${esc(l.route)}">${esc(l.label)} →</a>`).join('')}</div></article>`).join('');
  const divCards=d.divisions.map(x=>`<article class="division-detail"><div class="division-detail-head"><span class="division-icon">${x.id==='cid'?'⌕':x.id==='swat'?'✚':x.id==='teu'?'◇':'✈'}</span><span class="review-status">${esc(x.targetType)}</span></div><h3>${esc(x.name)}</h3><p>${esc(x.summary)}</p><div class="branch-source">${esc(x.status)}</div><div class="branch-subhead">SOP topics to finalize</div><ul>${x.scope.map(s=>`<li>${esc(s)}</li>`).join('')}</ul><a class="btn-mini" href="#${esc(x.id)}">Open unit page</a><a class="btn-mini btn-mini-gold" href="#applications?target=${encodeURIComponent(x.name)}&amp;type=Division">Start application</a></article>`).join('');
  const body=`<div class="source-callout"><b>Branch map status</b><span>${esc(d.branchMapStatus)}</span></div><div class="section-head compact-head"><div><div class="eyebrow">DEPARTMENT BRANCHES</div><h2>How the portal is organized</h2></div><p>These branch groupings organize the existing portal topics; they are not a substitute for the official chain-of-command chart.</p></div><div class="branch-grid">${branchCards}</div><div class="section-head compact-head"><div><div class="eyebrow">SPECIALIST UNITS</div><h2>Divisions officers can explore</h2></div><p>Current V3 portal units are listed below. Apply only when command has an open position or has confirmed recruitment is active.</p></div><div class="division-detail-grid">${divCards}</div><div class="source-callout muted-callout"><b>Missing from the uploaded material</b><span>The attached penal code and 10-code workbook do not define the official rank ladder, branch commanders, vacancies, selection thresholds, or required minimum rank. These fields remain for command to fill from the complete SOP.</span></div>`;
  return pageShell(p,body,{title:'DRAFT — CONFIRM WITH BCSO COMMAND',text:'This branch map is organized from the existing V3 portal categories and unit names. Exact department authority, ranks, eligibility, and application policy must come from the approved SOP.'});
}
function renderCertificationsPage(p){
  const d=window.DEPARTMENT_DATA||{certifications:[]};
  const cards=d.certifications.map(c=>`<article class="cert-card"><div class="cert-icon">★</div><div class="cert-head"><span class="review-status">${esc(c.targetType)}</span><span class="review-status">REQUIREMENTS PENDING</span></div><h2>${esc(c.name)}</h2><p>${esc(c.summary)}</p><div class="cert-fact"><b>Eligibility</b><span>${esc(c.eligibility)}</span></div><div class="cert-fact"><b>Training / completion</b><span>${esc(c.requirements)}</span></div><div class="cert-fact"><b>Source status</b><span>${esc(c.sourceStatus)}</span></div><a class="btn btn-primary" href="#applications?target=${encodeURIComponent(c.name)}&amp;type=Certification">Prepare application</a></article>`).join('');
  const body=`<div class="source-callout"><b>Before applying</b><span>These are the qualification tracks currently referenced by the portal. The attached files do not provide official eligibility thresholds, minimum rank, testing, renewal, or approval procedures. Those requirements should be filled from the full SOP / command direction.</span></div><div class="cert-grid">${cards}</div><div class="panel" style="margin-top:18px"><div class="eyebrow">COMMAND MAINTENANCE</div><h2>Keep this list current</h2><p>When command adds or retires a certification, update <code>data/department-data.js</code>. The card, application dropdown, and search index use that data file.</p></div>`;
  return pageShell(p,body,{title:'REFERENCE LIST — DETAILS NEED COMMAND APPROVAL',text:'The tracks are sourced from the existing portal framework; this page does not invent requirements or guarantee a vacancy.'});
}
function renderApplicationsPage(p, query=''){
  const d=window.DEPARTMENT_DATA||{divisions:[],certifications:[]};
  const body=`<div class="application-layout"><section class="panel application-form"><div class="eyebrow">LETTER OF INTEREST BUILDER</div><h2>Prepare your application</h2><p>Fill in the fields below to generate a consistent Letter of Interest (LOI). The page runs in your browser and does not save or submit the form.</p>
  <label class="field-label" for="applicantName">Name / callsign</label><input id="applicantName" type="text" placeholder="Your in-game name and callsign">
  <label class="field-label" for="applicantRank">Current rank</label><input id="applicantRank" type="text" placeholder="Your current BCSO rank">
  <label class="field-label" for="applicationType">Application type</label><select id="applicationType"><option value="Division">Division / unit</option><option value="Certification">Certification / qualification</option></select>
  <label class="field-label" for="applicationTarget">Applying for</label><select id="applicationTarget"></select>
  <label class="field-label" for="applicationExperience">Relevant experience / qualifications</label><textarea id="applicationExperience" rows="3" placeholder="Relevant patrol, training, specialist experience, and qualifications"></textarea>
  <label class="field-label" for="applicationReason">Why are you applying?</label><textarea id="applicationReason" rows="4" placeholder="Explain your interest and what you would contribute"></textarea>
  <label class="field-label" for="applicationAvailability">Availability</label><input id="applicationAvailability" type="text" placeholder="Usual availability / scheduling notes">
  <label class="field-label" for="applicationNotes">Additional notes (optional)</label><textarea id="applicationNotes" rows="2" placeholder="Anything else command should know"></textarea>
  <div class="form-actions"><button type="button" class="btn btn-primary" id="generateLOI">Generate / refresh LOI</button><button type="button" class="btn btn-ghost" id="clearLOI">Clear fields</button></div>
  </section><section class="panel application-output"><div class="eyebrow">APPLICATION PREVIEW</div><h2>Copy-ready LOI</h2><textarea id="loiOutput" rows="20" readonly aria-label="Generated Letter of Interest preview"></textarea><div class="form-actions"><button type="button" class="btn btn-primary" id="copyLOI">Copy LOI</button><button type="button" class="btn btn-ghost" id="printLOI">Print</button></div><div class="notice"><b>How to submit</b><p>No application form or Discord channel URL was included in the supplied files. After copying, paste this LOI into the official BCSO application channel or follow command's current instructions. This page does not transmit or store your application.</p></div></section></div>`;
  const html=pageShell(p,body,{title:'CLIENT-SIDE APPLICATION TOOL',text:'The form creates an LOI locally in your browser. It does not submit to GitHub, Discord, or a database; connect an approved form/channel when available.'});
  return html;
}
function renderPenalPage(p, query=''){
  const data=window.PENAL_CODE_DATA||[]; const groups=[]; data.forEach(r=>{const k=r.statute+'|'+r.category;if(!groups.some(g=>g.value===k))groups.push({value:k,label:r.statute+' | '+r.category});});
  const opts=groups.map(g=>`<option value="${esc(g.value)}">${esc(g.label)}</option>`).join('');
  const rows=data.map((r,i)=>`<tr data-penal-row data-category="${esc(r.statute+'|'+r.category)}" data-search="${esc([r.statute,r.category,r.charge,r.sourceCharge,r.classification,r.description,r.reviewNotes||''].join(' ').toLowerCase())}"><td class="statute-cell">${esc(r.statute)}</td><td>${esc(r.category)}</td><td><strong>${esc(r.charge)}</strong>${r.sourceCharge!==r.charge?`<small class="source-subline">Source heading: ${esc(r.sourceCharge)}</small>`:''}</td><td><span class="class-chip ${r.classification==='Not specified'?'class-unknown':''}">${esc(r.classification)}</span></td><td>${esc(r.description)}${r.reviewNotes?`<small class="review-note">Review: ${esc(r.reviewNotes)}</small>`:''}</td></tr>`).join('');
  const issues=(window.PENAL_CODE_ISSUES||[]).map(x=>`<div class="review-issue"><b>${esc(x.title)}</b><span>${esc(x.detail)}</span></div>`).join('');
  const body=`<div class="reference-count-row"><div class="reference-count"><b>${data.length}</b><span>searchable entries</span></div><div class="reference-count"><b>${groups.length}</b><span>statute groups</span></div><div class="reference-count"><b>Source-based</b><span>No fines or jail terms invented</span></div></div><div class="source-callout"><b>Source: RW RP Revised Statutes (Penal Code).docx</b><span>Charge wording is kept from the supplied document. Some grouped subitems are split into separate searchable rows for navigation, without adding penalties or new classifications.</span></div><div class="reference-toolbar"><input id="penalSearch" type="search" placeholder="Search charge, statute, class, or definition..." aria-label="Search penal code" value="${esc(query)}"><select id="penalCategory" aria-label="Filter by statute group"><option value="">All statute groups</option>${opts}</select><span id="penalCount" class="results-count">${data.length} entries</span></div><div class="table-wrap penal-table-wrap"><table class="penal-table"><thead><tr><th>Statute</th><th>Code group</th><th>Charge</th><th>Class</th><th>Description (source wording)</th></tr></thead><tbody id="penalRows">${rows}</tbody></table></div><div class="section-head compact-head"><div><div class="eyebrow">CONTENT REVIEW</div><h2>Items to verify with command</h2></div><p>These notes call out missing or potentially inconsistent source text without silently rewriting it.</p></div><div class="review-issue-grid">${issues}</div>`;
  return pageShell(p,body,{title:'REFERENCE IMPORTED — COMMAND REVIEW ADVISED',text:'The supplied statute document includes incomplete entries and no fine / jail schedule. Check the notes below before treating the reference as final.'});
}
function renderRadioPage(p, query=''){
  const d=window.RADIO_REFERENCE_DATA||{phonetic:[],tenCodes:[],responseCodes:[],signals:[],miranda:[],blankDescriptions:[],reviewNotes:[]};
  const tenRows=d.tenCodes.map(r=>`<tr data-radio-search="${esc((r[0]+' '+r[1]).toLowerCase())}"><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td></tr>`).join('');
  const phoneticRows=d.phonetic.map(r=>`<div class="phonetic-item" data-radio-search="${esc((r[0]+' '+r[1]).toLowerCase())}"><b>${esc(r[0])}</b><span>${esc(r[1])}</span></div>`).join('');
  const responseRows=d.responseCodes.map(r=>`<tr data-radio-search="${esc((r[0]+' '+r[1]).toLowerCase())}"><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td></tr>`).join('');
  const signalRows=d.signals.map(r=>`<tr data-radio-search="${esc((r[0]+' '+r[1]).toLowerCase())}"><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td></tr>`).join('');
  const mirandaRows=d.miranda.map((r,i)=>`<li data-radio-search="${esc((String(i+1)+' '+r).toLowerCase())}"><span>${i+1}</span><p>${esc(r)}</p></li>`).join('');
  const blankHtml=d.blankDescriptions.map(c=>`<span class="blank-code" data-radio-search="${esc((c+' no description in supplied workbook').toLowerCase())}">${esc(c)}</span>`).join('');
  const notes=d.reviewNotes.map(n=>`<div class="review-issue"><span>${esc(n)}</span></div>`).join('');
  const body=`<div class="source-callout"><b>Source: ${esc(d.source)}</b><span>The workbook's supplied descriptions and spellings are displayed as provided. Verify blank definitions and duplicated response meanings before final publication.</span></div><div class="reference-toolbar"><input id="radioSearch" type="search" placeholder="Search radio codes, phonetics, signals, or rights..." aria-label="Search radio references" value="${esc(query)}"><span id="radioCount" class="results-count">${d.tenCodes.length} defined 10-codes</span></div><div class="section-head compact-head"><div><div class="eyebrow">10-CODES</div><h2>Radio codes</h2></div><p>Use the search field above to filter across the radio-reference tables.</p></div><div class="table-wrap"><table><thead><tr><th>Code</th><th>Description</th></tr></thead><tbody>${tenRows}</tbody></table></div><div class="section-head compact-head"><div><div class="eyebrow">PHONETIC ALPHABET</div><h2>Letter references</h2></div></div><div class="phonetic-grid">${phoneticRows}</div><div class="two-col"><div><div class="section-head compact-head"><div><div class="eyebrow">RESPONSE CODES</div><h2>Code 0–8</h2></div></div><div class="table-wrap"><table><thead><tr><th>Code</th><th>Description</th></tr></thead><tbody>${responseRows}</tbody></table></div></div><div><div class="section-head compact-head"><div><div class="eyebrow">SIGNALS</div><h2>Signal references</h2></div></div><div class="table-wrap"><table><thead><tr><th>Signal</th><th>Description</th></tr></thead><tbody>${signalRows}</tbody></table></div></div></div><div class="section-head compact-head"><div><div class="eyebrow">SOURCE SCRIPT</div><h2>Miranda rights text</h2></div><p>Roleplay wording from the supplied workbook; follow the server's approved script.</p></div><ol class="miranda-list">${mirandaRows}</ol><div class="section-head compact-head"><div><div class="eyebrow">MISSING DEFINITIONS</div><h2>Codes with blank descriptions</h2></div><p>These codes appear in the workbook without a description.</p></div><div class="blank-code-grid">${blankHtml}</div><div class="section-head compact-head"><div><div class="eyebrow">SOURCE REVIEW</div><h2>Workbook notes</h2></div></div><div class="review-issue-grid">${notes}</div>`;
  return pageShell(p,body,{title:'REFERENCE IMPORTED — VERIFY SOURCE GAPS',text:'This page reflects the uploaded 10-code workbook. It does not assign missing meanings to blank codes.'});
}
function filterPenal(query){
  const q=(query ?? document.querySelector('#penalSearch')?.value ?? '').toLowerCase().trim();
  const cat=document.querySelector('#penalCategory')?.value||''; let shown=0;
  document.querySelectorAll('[data-penal-row]').forEach(row=>{const ok=(!q||row.dataset.search.includes(q))&&(!cat||row.dataset.category===cat);row.hidden=!ok;if(ok)shown++;});
  const count=document.querySelector('#penalCount');if(count)count.textContent=`${shown} matching entries`;
}
function filterRadio(query){
  const q=(query ?? document.querySelector('#radioSearch')?.value ?? '').toLowerCase().trim();let shown=0;
  document.querySelectorAll('[data-radio-search]').forEach(el=>{const ok=!q||el.dataset.radioSearch.includes(q);el.hidden=!ok;if(ok)shown++;});
  const count=document.querySelector('#radioCount');if(count)count.textContent=`${shown} matching references`;
}
function setupApplications(query=''){
  const d=window.DEPARTMENT_DATA||{divisions:[],certifications:[]};
  const typeEl=document.querySelector('#applicationType'), targetEl=document.querySelector('#applicationTarget');
  if(!typeEl||!targetEl)return;
  function options(type){
    const items=type==='Certification'?d.certifications:d.divisions;
    targetEl.innerHTML=items.map(x=>`<option value="${esc(x.name)}">${esc(x.name)}</option>`).join('')+`<option value="Other / Command Review">Other / Command Review</option>`;
  }
  typeEl.addEventListener('change',()=>{options(typeEl.value);generateLOI();});
  options('Division');
  const queryTarget=query||new URLSearchParams((location.hash.split('?')[1]||'')).get('target')||'';
  const queryType=new URLSearchParams((location.hash.split('?')[1]||'')).get('type')||'';
  if(queryType==='Certification')typeEl.value='Certification'; options(typeEl.value);
  if(queryTarget){const opt=[...targetEl.options].find(o=>o.value.toLowerCase()===decodeURIComponent(queryTarget).toLowerCase()||o.text.toLowerCase()===decodeURIComponent(queryTarget).toLowerCase());if(opt)targetEl.value=opt.value;}
  ['applicantName','applicantRank','applicationTarget','applicationExperience','applicationReason','applicationAvailability','applicationNotes'].forEach(id=>document.querySelector('#'+id)?.addEventListener('input',generateLOI));
  document.querySelector('#applicationTarget')?.addEventListener('change',generateLOI);
  document.querySelector('#generateLOI')?.addEventListener('click',generateLOI);
  document.querySelector('#clearLOI')?.addEventListener('click',()=>{['applicantName','applicantRank','applicationExperience','applicationReason','applicationAvailability','applicationNotes'].forEach(id=>document.querySelector('#'+id).value='');typeEl.value='Division';options('Division');generateLOI();});
  document.querySelector('#copyLOI')?.addEventListener('click',async()=>{const out=document.querySelector('#loiOutput');try{await navigator.clipboard.writeText(out.value);const b=document.querySelector('#copyLOI');const old=b.textContent;b.textContent='Copied';setTimeout(()=>b.textContent=old,1000);}catch{out.focus();out.select();document.execCommand('copy');}});
  document.querySelector('#printLOI')?.addEventListener('click',()=>{const content=document.querySelector('#loiOutput').value;const w=window.open('','_blank','width=800,height=900');if(!w){alert('Allow pop-ups to print the application.');return;}w.document.write('<!doctype html><title>BCSO Letter of Interest</title><pre style="white-space:pre-wrap;font:14px/1.55 Arial,sans-serif;padding:32px">'+esc(content)+'</pre>');w.document.close();w.focus();w.print();});
  generateLOI();
}
function generateLOI(){
  const get=id=>(document.querySelector('#'+id)?.value||'').trim();
  const type=get('applicationType')||'Division';
  const target=get('applicationTarget')||'Other / Command Review';
  const text=`RED WILLOW RP — BLAINE COUNTY SHERIFF'S OFFICE\nLETTER OF INTEREST / APPLICATION\n\nApplicant: ${get('applicantName')||'[Name / callsign]'}\nCurrent Rank: ${get('applicantRank')||'[Current rank]'}\nApplication Type: ${type}\nRequested Assignment: ${target}\n\nRELEVANT EXPERIENCE / QUALIFICATIONS\n${get('applicationExperience')||'[Add relevant experience and qualifications]'}\n\nREASON FOR APPLYING\n${get('applicationReason')||'[Explain your interest and what you would contribute]'}\n\nAVAILABILITY\n${get('applicationAvailability')||'[Add typical availability]'}\n\nADDITIONAL NOTES\n${get('applicationNotes')||'None provided'}\n\nI understand that this Letter of Interest is a request for consideration and does not guarantee acceptance or activation. I will follow the current BCSO SOP and any instructions issued by command.\n`;
  const out=document.querySelector('#loiOutput');if(out)out.value=text;
}

function renderHome(){
  return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><div class="kicker">RED WILLOW ROLE PLAY • BLAINE COUNTY</div><h1>BLAINE COUNTY<br><em>SHERIFF'S OFFICE</em></h1><div class="hero-rule"></div><p>STANDARD OPERATING PROCEDURES</p><small>SERVICE • INTEGRITY • COMMUNITY • PROFESSIONALISM</small></div><img class="hero-patch" src="assets/bcso-patch.webp" alt=""><div class="hero-stamp">BCSO<br><b>COMMAND</b><br>PORTAL</div></div></section>
  <section class="content"><div class="statusbar"><div><span>PORTAL STATUS</span><b class="live">● ONLINE</b></div><div><span>REVISION</span><b>V5</b></div><div><span>CONTENT STATE</span><b>18 SOURCE SOPs IMPORTED</b></div><div><span>JURISDICTION</span><b>BLAINE COUNTY</b></div></div>
  <div class="welcome"><div class="panel"><div class="eyebrow">WELCOME</div><h2>One portal for the whole department.</h2><p>Browse all 18 imported BCSO SOP PDFs, search the uploaded penal code and radio-code workbook, review current rank / vehicle / certification rules, or prepare a Letter of Interest for a division or qualification.</p><div class="callout"><strong>Source SOP</strong><span>The current Google Sites SOP is the authority for final policy decisions. <a class="inline-link" href="https://sites.google.com/view/rwrpsop/home" target="_blank" rel="noopener">Open current SOP reference ↗</a></span></div></div><div class="panel"><div class="eyebrow">FIELD READY</div><h2>Fast access</h2><p>Jump straight to the references officers are likely to use during a shift.</p><a class="quick" href="#commands"><b>⌘</b><span>Common Commands</span><small>Commands to verify</small></a><a class="quick" href="#radio"><b>◉</b><span>Radio / 10-Codes</span><small>Imported workbook</small></a><a class="quick" href="#penal-code"><b>§</b><span>Penal Code</span><small>Search statutes & charges</small></a><a class="quick" href="#applications"><b>✉</b><span>Apply to a Unit</span><small>Build an LOI</small></a></div></div>
  <div class="section-head"><div><div class="eyebrow">OPERATIONS</div><h2>Quick Access</h2></div></div><div class="quick-grid"><a class="quick" href="#quick-reaction"><b>⚡</b><span>Quick Reaction</span><small>Immediate response</small></a><a class="quick" href="#patrol"><b>✦</b><span>Patrol Operations</span><small>Routine patrol</small></a><a class="quick" href="#communications"><b>◉</b><span>Communications</span><small>Radio & dispatch</small></a><a class="quick" href="#traffic"><b>▣</b><span>Traffic & Pursuits</span><small>Stops & pursuits</small></a><a class="quick" href="#force"><b>⬟</b><span>Use of Force</span><small>Force & firearms</small></a></div>
  <div class="section-head"><div><div class="eyebrow">SPECIALIZED UNITS</div><h2>Department Divisions</h2></div></div><div class="division-grid"><a href="#cid" class="division"><span class="division-icon">⌕</span><div><b>CRIMINAL INVESTIGATIONS DIVISION</b><small>CID • CASES • EVIDENCE • WARRANTS</small></div><span>→</span></a><a href="#swat" class="division"><span class="division-icon">✚</span><div><b>SPECIAL WEAPONS & TACTICS</b><small>SWAT • HIGH-RISK OPERATIONS</small></div><span>→</span></a><a href="#teu" class="division"><span class="division-icon">◇</span><div><b>TRAFFIC ENFORCEMENT UNIT / HEAT</b><small>TRAFFIC • ENFORCEMENT • HIGHWAY</small></div><span>→</span></a><a href="#air1" class="division"><span class="division-icon">✈</span><div><b>AIR-1</b><small>AVIATION • OVERWATCH • SEARCH</small></div><span>→</span></a></div>
  <div class="two-col"><div class="panel announce"><div class="panel-title">⚑ DEPARTMENT ANNOUNCEMENTS</div><article><time>INITIAL RELEASE</time><h3>BCSO SOP PORTAL</h3><p>Command-approved policies can be published here as they are finalized.</p></article><article><time>POLICY</time><h3>VERIFY YOUR SOP REVISION</h3><p>Always use the current approved revision before relying on a procedure.</p></article></div><div class="panel"><div class="panel-title">▤ DOCUMENT STATUS</div><div class="doc-status"><span>ACTIVE</span><b>Published SOPs</b><small>Approved policy content</small></div><div class="doc-status draft"><span>DRAFT</span><b>Pending Command Review</b><small>Not active until approved</small></div><div class="doc-status ref"><span>REFERENCE</span><b>Training Materials</b><small>Supporting material</small></div></div></div></section>`;
}
function renderPage(key,p,query=''){
  const sourceDoc=(window.SOP_DOCUMENTS||[]).find(d=>d.id===key);
  if(sourceDoc) return renderSourceSopPage(sourceDoc);
  if(['swat','teu','air1','bike'].includes(key)) return renderUnitDetailPage(key,p);
  if(p.custom==='structure') return renderStructurePage(p);
  if(p.custom==='certifications') return renderCertificationsPage(p);
  if(p.custom==='applications') return renderApplicationsPage(p,query);
  if(p.custom==='radio') return renderRadioPage(p,query);
  if(p.custom==='penal') return renderPenalPage(p,query);
  const banner=p.banner || (p.draft?'DRAFT / VERIFY':'');
  let body='';
  if(p.blocks) body+=`<div class="grid2">${p.blocks.map(x=>`<section class="policy"><h2>${esc(x[0])}</h2><p>${esc(x[1])}</p></section>`).join('')}</div>`;
  if(p.table) body+=`<div class="table-wrap"><table><thead><tr>${p.table[0].map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${p.table.slice(1).map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  if(p.commands) body+=`<div class="command-grid">${p.commands.map(x=>`<div class="command"><code>${esc(x[0])}</code><span>${esc(x[1])}</span><button data-copy="${esc(x[0])}">Copy</button></div>`).join('')}</div>`;
  if(p.org) body+=`<div class="org">${p.org.map((x,i)=>`<div class="org-box"><small>${esc(x[0])}</small><strong>${esc(x[1])}</strong>${i===0?'<p>Replace this organizational framework with the current approved command chart.</p>':''}</div>`).join('')}</div>`;
  if(p.timeline) body+=`<div class="timeline">${p.timeline.map(x=>`<div class="timeline-row"><div class="timeline-num">${esc(x[0])}</div><div class="timeline-body"><h3>${esc(x[1])}</h3><p>${esc(x[2])}</p></div></div>`).join('')}</div>`;
  if(p.links) body+=`<div class="grid2">${p.links.map((x,i)=>`<a class="policy" href="#" onclick="return false"><div class="eyebrow">RESOURCE ${String(i+1).padStart(2,'0')}</div><h2>${esc(x[0])}</h2><p>${esc(x[1])}</p><span class="card-link">ADD LINK →</span></a>`).join('')}</div>`;
  if(p.announcements) body+=p.announcements.map(x=>`<section class="policy" style="margin-bottom:12px"><div class="eyebrow">${esc(x[0])}</div><p>${esc(x[1])}</p></section>`).join('');
  return `<section class="page"><div class="crumb"><a href="#home">Command Center</a> <span>/</span> ${esc(p.title)}</div><header class="page-head"><div class="eyebrow">${esc(p.category)}</div><h1>${esc(p.title)}</h1><p>${esc(p.sub)}</p></header>${banner?`<div class="draft-banner"><b>${esc(banner)}</b><span>${p.banner?'This page intentionally contains no fabricated statute numbers or sentencing values.':'This is a framework page. Replace the placeholders with approved Red Willow BCSO material before treating it as authoritative.'}</span></div>`:''}${body}</section>`;
}
function route(){
  const raw=location.hash.replace(/^#/, '') || 'home';
  const split=raw.split('?');
  const key=split[0] || 'home';
  const params=new URLSearchParams(split.slice(1).join('?'));
  const query=params.get('q')||'';
  const p=PAGES[key] || PAGES.home;
  if(!modal.classList.contains('hidden')) closeSearch();
  main.innerHTML=key==='home'?renderHome():renderPage(key,p,query);
  nav.forEach(a=>a.classList.toggle('active',a.dataset.route===key));
  window.scrollTo(0,0);
  document.querySelectorAll('[data-copy]').forEach(btn=>btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(btn.dataset.copy);const old=btn.textContent;btn.textContent='Copied';setTimeout(()=>btn.textContent=old,900)}catch{prompt('Copy this command:',btn.dataset.copy)}}));
  if(key==='penal-code'){
    const inp=document.querySelector('#penalSearch'); const cat=document.querySelector('#penalCategory');
    inp?.addEventListener('input',()=>filterPenal()); cat?.addEventListener('change',()=>filterPenal()); if(query&&inp)inp.value=query;filterPenal();
  }
  if(key==='radio'){
    const inp=document.querySelector('#radioSearch'); inp?.addEventListener('input',()=>filterRadio()); if(query&&inp)inp.value=query;filterRadio();
  }
  if(key==='applications') setupApplications(params.get('target')||'');
}
function buildSearchEntries(){
  const arr=Object.entries(PAGES).map(([k,p])=>({k,title:p.title,desc:p.sub||'',text:JSON.stringify(p).toLowerCase(),filter:null}));
  (window.SOP_DOCUMENTS||[]).forEach(d=>arr.push({k:d.id,title:d.title,desc:d.summary,text:(d.title+' '+d.summary+' '+(d.parts||[]).map(p=>p.text).join(' ')).toLowerCase(),filter:null}));
  (window.PENAL_CODE_DATA||[]).forEach(r=>arr.push({k:'penal-code',title:r.charge,desc:`${r.statute} | ${r.category} | ${r.classification} — ${r.description}`,text:JSON.stringify(r).toLowerCase(),filter:r.charge}));
  const rd=window.RADIO_REFERENCE_DATA||{};
  (rd.tenCodes||[]).forEach(r=>arr.push({k:'radio',title:r[0],desc:r[1],text:(r[0]+' '+r[1]).toLowerCase(),filter:r[0]}));
  (rd.phonetic||[]).forEach(r=>arr.push({k:'radio',title:`${r[0]} — ${r[1]}`,desc:'Phonetic alphabet',text:(r[0]+' '+r[1]).toLowerCase(),filter:r[1]}));
  (rd.responseCodes||[]).forEach(r=>arr.push({k:'radio',title:r[0],desc:r[1],text:(r[0]+' '+r[1]).toLowerCase(),filter:r[0]}));
  (rd.signals||[]).forEach(r=>arr.push({k:'radio',title:r[0],desc:r[1],text:(r[0]+' '+r[1]).toLowerCase(),filter:r[0]}));
  (rd.blankDescriptions||[]).forEach(c=>arr.push({k:'radio',title:c,desc:'No description in supplied workbook',text:(c+' no description').toLowerCase(),filter:c}));
  const dm=window.DEPARTMENT_DATA||{};
  (dm.divisions||[]).forEach(r=>arr.push({k:r.id,title:r.name,desc:r.summary,text:JSON.stringify(r).toLowerCase(),filter:null}));
  (dm.certifications||[]).forEach(r=>arr.push({k:'certifications',title:r.name,desc:r.summary,text:JSON.stringify(r).toLowerCase(),filter:null}));
  return arr;
}
let entries=buildSearchEntries();
function openSearch(){modal.classList.remove('hidden');modal.setAttribute('aria-hidden','false');input.value='';input.focus();drawResults();}
function closeSearch(){modal.classList.add('hidden');modal.setAttribute('aria-hidden','true');}
function drawResults(){
  const q=input.value.toLowerCase().trim();
  const found=entries.filter(x=>!q||x.title.toLowerCase().includes(q)||x.desc.toLowerCase().includes(q)||x.text.includes(q)).slice(0,24);
  results.innerHTML=found.length?found.map(x=>{const suffix=x.filter?'?q='+encodeURIComponent(x.filter):'';return `<a class="result" href="#${x.k}${suffix}"><strong>${esc(x.title)}</strong><small>${esc(x.desc)}</small></a>`}).join(''):'<p style="color:#96a1aa">No matching pages or reference entries.</p>';
}
document.querySelector('#searchBtn').addEventListener('click',openSearch);document.querySelector('#closeSearch').addEventListener('click',closeSearch);modal.addEventListener('click',e=>{if(e.target===modal)closeSearch()});input.addEventListener('input',drawResults);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSearch();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch()}});
const menuBtn=document.querySelector('#menuBtn');menuBtn.addEventListener('click',()=>{const sb=document.querySelector('#sidebar');const open=sb.classList.toggle('mobile-open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelector('#sidebar').addEventListener('click',()=>{if(window.innerWidth<=850)document.querySelector('#sidebar').classList.remove('mobile-open')});
window.addEventListener('hashchange',route);route();
