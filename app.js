const RAW_WORDS = `
1|inevitable|불가피한, 필연적인|unavoidable; inescapable; certain
2|sophisticated|정교한, 세련된|refined; complex; polished
3|predominant|지배적인, 우세한|dominant; prevailing; main
4|accommodate|수용하다, 편의를 제공하다|accept; house; adapt
5|deteriorate|악화되다, 나빠지다|worsen; decline; decay
6|inherent|내재된, 고유한|intrinsic; innate; built-in
7|ambiguous|모호한, 애매한|unclear; vague; equivocal
8|plausible|그럴듯한, 타당한|credible; believable; reasonable
9|scrutinize|면밀히 조사하다|inspect; examine; analyze
10|undermine|약화시키다, 훼손하다|weaken; subvert; damage
11|legitimate|합법적인, 정당한|lawful; valid; justified
12|manifest|명백한, 나타내다|obvious; evident; reveal
13|perpetuate|영속시키다|sustain; preserve; continue
14|negligible|무시해도 될 정도의|insignificant; minor; trivial
15|resilient|회복력 있는, 탄력적인|flexible; hardy; tough
16|autonomous|자율적인, 자치의|independent; self-governing; free
17|elaborate|정교한, 상세히 설명하다|detailed; intricate; explain
18|indispensable|필수적인, 없어서는 안 될|essential; necessary; vital
19|unprecedented|전례 없는|unparalleled; novel; unheard-of
20|compel|강요하다, 강제하다|force; oblige; pressure
21|fluctuate|변동하다, 오르내리다|vary; oscillate; shift
22|subsequent|그 후의, 뒤따르는|following; later; succeeding
23|prevalent|널리 퍼진, 유행하는|widespread; common; popular
24|contradict|모순되다, 반박하다|oppose; deny; refute
25|reinforce|강화하다, 보강하다|strengthen; support; fortify
26|contemplate|숙고하다, 심사숙고하다|ponder; consider; reflect
27|stagnant|정체된, 침체된|inactive; static; motionless
28|compatible|양립할 수 있는, 호환되는|consistent; harmonious; suitable
29|susceptible|영향을 받기 쉬운|vulnerable; prone; sensitive
30|obstruct|방해하다, 막다|block; hinder; impede
31|deliberate|신중한, 고의적인|careful; intentional; calculated
32|exaggerate|과장하다|overstate; embellish; magnify
33|acknowledge|인정하다, 감사를 표하다|admit; recognize; thank
34|substantial|상당한, 실질적인|considerable; significant; real
35|controversy|논란, 논쟁|dispute; debate; argument
36|distort|왜곡하다, 변형시키다|twist; deform; misrepresent
37|superficial|피상적인, 표면적인|shallow; surface-level; cursory
38|rigorous|엄격한, 철저한|strict; thorough; exacting
39|incentive|동기, 유인, 장려금|motivation; inducement; reward
40|alleviate|완화하다, 경감하다|ease; relieve; reduce
41|implicit|암묵적인, 내포된|implied; tacit; unspoken
42|diminish|줄어들다, 감소시키다|reduce; lessen; shrink
43|coherent|일관된, 논리적인|logical; consistent; clear
44|arbitrary|임의적인, 독단적인|random; capricious; subjective
45|proficient|능숙한, 숙달된|skilled; competent; adept
46|encompass|포함하다, 아우르다|include; cover; embrace
47|constraint|제약, 제한|limitation; restriction; restraint
48|deplete|고갈시키다, 소진하다|exhaust; drain; use up
49|speculate|추측하다, 투기하다|guess; conjecture; theorize
50|integral|필수적인, 완전한|essential; fundamental; complete
51|deviate|벗어나다, 이탈하다|diverge; stray; depart
52|formidable|만만치 않은, 강력한|intimidating; powerful; daunting
53|notorious|악명 높은|infamous; disreputable; scandalous
54|reconcile|화해시키다, 조화시키다|harmonize; settle; resolve
55|pragmatic|실용적인, 실리적인|practical; realistic; sensible
56|hinder|방해하다, 저해하다|obstruct; hamper; impede
57|tangible|실체가 있는, 구체적인|concrete; palpable; real
58|precede|선행하다, 앞서다|come before; antedate; lead
59|indifferent|무관심한, 냉담한|apathetic; detached; unconcerned
60|aggravate|악화시키다, 화나게 하다|worsen; intensify; irritate
61|exempt|면제된, 면제하다|excused; free; released
62|compelling|설득력 있는, 강렬한|persuasive; convincing; powerful
63|versatile|다재다능한, 다용도의|adaptable; flexible; all-purpose
64|intricate|복잡한, 정교한|complex; elaborate; detailed
65|adversity|역경, 불행|hardship; misfortune; difficulty
66|conducive|도움이 되는, 유익한|favorable; helpful; beneficial
67|feasible|실현 가능한, 타당한|possible; workable; practical
68|analogy|유추, 비유|comparison; parallel; resemblance
69|concede|인정하다, 양보하다|admit; yield; grant
70|tenacious|집요한, 끈질긴|persistent; determined; stubborn
71|altruistic|이타적인|selfless; charitable; generous
72|consolidate|통합하다, 강화하다|unify; merge; strengthen
73|discrepancy|불일치, 차이|inconsistency; gap; mismatch
74|empirical|경험적인, 실증적인|observational; experimental; factual
75|elicit|이끌어 내다, 유도하다|draw out; evoke; prompt
76|denounce|비난하다, 고발하다|condemn; accuse; criticize
77|redundant|불필요한, 여분의|unnecessary; surplus; extra
78|indigenous|토착의, 원주민의|native; local; original
79|paradigm|패러다임, 전형|model; pattern; framework
80|trajectory|궤적, 탄도|path; course; route
81|meticulous|꼼꼼한, 세심한|careful; precise; thorough
82|disposition|성향, 기질, 배치|tendency; temperament; arrangement
83|articulate|명확히 표현하다|express; enunciate; state clearly
84|concurrent|동시의, 동시 발생의|simultaneous; coexisting; parallel
85|catastrophe|대재앙, 참사|disaster; calamity; tragedy
86|expedite|촉진하다, 앞당기다|speed up; hasten; accelerate
87|mandate|명령, 위임하다|order; command; authorize
88|intervention|개입, 중재|involvement; mediation; interference
89|invoke|발동하다, 호소하다|trigger; call upon; appeal to
90|abstain|삼가다, 자제하다|refrain; desist; hold back
91|compliance|준수, 따름|obedience; conformity; adherence
92|decipher|해독하다, 판독하다|decode; interpret; figure out
93|habitat|서식지, 거주지|home; environment; dwelling
94|impartial|공정한, 편견 없는|unbiased; neutral; fair
95|malicious|악의적인|spiteful; hostile; harmful
96|nuance|뉘앙스, 미묘한 차이|subtlety; shade; distinction
97|obsolete|구식의, 쓸모없는|outdated; archaic; useless
98|perseverance|인내, 끈기|persistence; endurance; determination
99|skeptical|회의적인|doubtful; suspicious; unconvinced
100|unanimous|만장일치의|united; agreed; undisputed
101|vigorous|활발한, 원기 왕성한|energetic; robust; lively
102|warrant|정당화하다, 보증하다|justify; guarantee; authorize
103|relinquish|포기하다, 양도하다|surrender; give up; hand over
104|complacent|안주하는, 자만하는|self-satisfied; smug; overconfident
105|disparity|격차, 불균형|inequality; gap; imbalance
106|erratic|불규칙적인, 변덕스러운|irregular; unpredictable; inconsistent
107|futile|헛된, 무의미한|useless; vain; pointless
108|impede|방해하다, 저해하다|obstruct; hinder; delay
109|lucrative|수익성 있는|profitable; rewarding; gainful
110|opaque|불투명한|cloudy; unclear; obscure
111|resemble|닮다, 유사하다|look like; mirror; be similar to
112|subordinate|하위의, 종속시키다|lower; secondary; subdue
113|transient|일시적인, 순간적인|temporary; fleeting; brief
114|viable|실행 가능한, 생존 가능한|workable; feasible; survivable
115|circumvent|회피하다, 우회하다|avoid; bypass; evade
116|dubious|의심스러운, 수상한|questionable; suspicious; doubtful
117|efficacy|효능, 효과|effectiveness; potency; power
118|imminent|임박한, 절박한|impending; approaching; near
119|mitigate|완화하다, 경감하다|ease; reduce; soften
120|obscure|모호한, 가리다|unclear; conceal; hide
121|pertinent|관련된, 적절한|relevant; applicable; fitting
122|replenish|보충하다, 채우다|refill; restore; renew
123|scrutiny|정밀 조사, 면밀한 검토|examination; inspection; review
124|trivial|사소한, 하찮은|minor; insignificant; petty
125|vindicate|입증하다, 옹호하다|justify; clear; defend
126|withhold|보류하다, 억제하다|retain; suppress; hold back
127|adversary|적, 상대|opponent; enemy; rival
128|coerce|강압하다, 강제하다|force; compel; pressure
129|deprivation|박탈, 결핍|loss; shortage; lack
130|fallacy|오류, 그릇된 생각|misconception; error; false belief
131|hypothesis|가설|theory; assumption; proposition
132|indignant|분개하는, 화난|angry; outraged; resentful
133|hierarchy|위계, 계층 구조|ranking; order; structure
134|lethal|치명적인|deadly; fatal; mortal
135|nostalgia|향수, 그리움|longing; reminiscence; homesickness
136|proximity|근접, 가까움|nearness; closeness; adjacency
137|saturate|포화시키다, 흠뻑 적시다|soak; fill; drench
138|threshold|문턱, 기준점|limit; benchmark; starting point
139|ubiquitous|어디에나 있는|everywhere; omnipresent; pervasive
140|vulnerable|취약한, 상처받기 쉬운|exposed; defenseless; susceptible
141|ambivalent|양가적인, 상반된|mixed; conflicted; uncertain
142|demographic|인구통계학적인|population-based; statistical; social
143|jeopardize|위태롭게 하다|endanger; risk; threaten
144|litigation|소송|lawsuit; legal action; court case
145|mediocre|평범한, 보통의|ordinary; average; uninspired
146|nurture|양육하다, 기르다|raise; cultivate; foster
147|precarious|불안정한, 위험한|unstable; risky; insecure
148|ramification|결과, 영향, 파급|consequence; implication; effect
149|substantiate|입증하다, 실체화하다|prove; verify; confirm
150|unequivocal|명확한, 분명한|clear; explicit; unmistakable
151|clandestine|은밀한, 비밀의|secret; covert; hidden
152|deficiency|결핍, 부족|shortage; lack; insufficiency
153|epitome|전형, 요약|embodiment; model; summary
154|inclination|경향, 성향|tendency; leaning; preference
155|linger|남아 있다, 머무르다|remain; persist; stay
156|negate|무효화하다, 부정하다|nullify; deny; cancel
157|predecessor|전임자, 이전 것|forerunner; precursor; former holder
158|refute|반박하다, 논박하다|disprove; rebut; contradict
159|spontaneous|자발적인, 즉흥적인|voluntary; impulsive; unplanned
160|upheaval|대변동, 격변|disruption; turmoil; disturbance
161|benevolent|자비로운, 인자한|kind; charitable; generous
162|contempt|경멸, 모욕|scorn; disdain; disrespect
163|endorse|지지하다, 보증하다|approve; support; back
164|gratitude|감사, 고마움|thanks; appreciation; thankfulness
165|juxtapose|나란히 놓다, 병치하다|compare; place side by side; contrast
166|lethargic|무기력한, 나른한|sluggish; listless; tired
167|penchant|경향, 기호|liking; tendency; preference
168|retaliate|보복하다, 앙갚음하다|avenge; repay; strike back
169|succumb|굴복하다, 패배하다|yield; submit; give in
170|turbulent|격동의, 혼란스러운|stormy; unstable; chaotic
171|advocate|옹호하다, 지지자|support; champion; proponent
172|curtail|축소하다, 삭감하다|reduce; cut; limit
173|eccentric|별난, 기이한|odd; unconventional; peculiar
174|formulate|공식화하다, 구성하다|devise; frame; develop
175|impetus|자극, 추진력|momentum; stimulus; drive
176|latent|잠재적인, 숨은|hidden; dormant; undeveloped
177|obliterate|완전히 파괴하다|destroy; wipe out; erase
178|procrastinate|미루다, 지체하다|delay; postpone; put off
179|substantive|실질적인, 본질적인|essential; meaningful; real
180|verbose|장황한, 말이 많은|wordy; long-winded; talkative
181|aversion|혐오, 반감|dislike; repulsion; distaste
182|debilitate|약화시키다, 쇠약하게 하다|weaken; enfeeble; drain
183|eradicate|근절하다, 뿌리 뽑다|eliminate; wipe out; remove
184|immerse|몰입시키다, 담그다|absorb; submerge; involve deeply
185|meander|구불구불 나아가다|wander; wind; roam
186|ostensible|표면상의, 겉보기의|apparent; supposed; seeming
187|redundancy|중복, 잉여|duplication; surplus; excess
188|stipulate|규정하다, 명시하다|specify; require; state
189|transcend|초월하다|surpass; exceed; rise above
190|volatile|변덕스러운, 휘발성의|unstable; changeable; explosive
191|augment|증가시키다, 늘리다|increase; expand; add to
192|denouncement|비난, 규탄|condemnation; accusation; denunciation
193|exacerbate|악화시키다|worsen; intensify; aggravate
194|impoverish|빈곤하게 하다|make poor; deprive; weaken
195|consolidation|통합, 강화|unification; strengthening; merger
196|orthodox|정통의, 전통적인|conventional; traditional; accepted
197|proprietary|독점적인, 소유의|exclusive; owned; private
198|remnant|잔재, 나머지|leftover; residue; remainder
199|synopsis|개요, 줄거리|summary; outline; abstract
200|unilateral|일방적인|one-sided; independent; solo
201|acquaint|숙지시키다, 알리다|inform; familiarize; introduce
202|bureaucracy|관료주의, 관료제|administration; officialdom; red tape
203|combustion|연소, 흥분|burning; ignition; excitement
204|detrimental|해로운, 유해한|harmful; damaging; injurious
205|emancipate|해방시키다|liberate; free; release
206|fortify|강화하다, 요새화하다|strengthen; reinforce; secure
207|gregarious|사교적인, 군거하는|sociable; outgoing; social
208|homogeneous|동질적인, 균일한|uniform; alike; consistent
209|idiosyncratic|특이한, 독특한|peculiar; distinctive; individual
210|jurisdiction|관할권, 사법권|authority; domain; legal power
211|kinetic|운동의, 활동적인|moving; active; dynamic
212|luminous|빛나는, 밝은|glowing; radiant; bright
213|misconception|오해, 잘못된 생각|misunderstanding; false belief; fallacy
214|nomenclature|명명법, 용어|terminology; naming system; labels
215|oscillate|진동하다, 동요하다|swing; fluctuate; waver
216|peripheral|주변의, 부수적인|outer; secondary; marginal
217|quintessential|전형적인, 정수의|classic; perfect; typical
218|rationale|근거, 이론적 기초|reason; justification; basis
219|supposition|가정, 추측|assumption; guess; hypothesis
220|testimony|증언, 증거|evidence; statement; witness account
221|utilitarian|실용적인, 공리주의의|practical; useful; functional
222|vendetta|복수, 앙갚음|feud; revenge; retaliation
223|wield|휘두르다, 행사하다|brandish; exercise; use
224|exonerate|무죄를 입증하다|absolve; acquit; clear
225|yearn|갈망하다, 그리워하다|long for; crave; desire
226|connotation|함축, 내포|implication; suggestion; association
227|assimilate|동화시키다, 흡수하다|absorb; integrate; adapt
228|bilateral|양자의, 쌍방의|mutual; two-sided; reciprocal
229|capricious|변덕스러운|fickle; unpredictable; whimsical
230|dismantle|해체하다, 분해하다|take apart; disassemble; demolish
231|envisage|상상하다, 구상하다|imagine; foresee; picture
232|fluctuation|변동, 오르내림|variation; change; oscillation
233|hegemony|패권, 주도권|dominance; leadership; supremacy
234|incessant|끊임없는|constant; unending; continuous
235|judiciously|신중하게, 분별 있게|wisely; prudently; sensibly
236|magnanimous|관대한, 도량이 큰|generous; noble; forgiving
237|nonchalant|무관심한, 냉담한|calm; indifferent; casual
238|persevere|인내하다, 견디다|persist; endure; continue
239|repercussion|반향, 영향|consequence; reaction; effect
240|stigmatize|낙인찍다|mark; brand; shame
241|tenacity|집요함, 끈기|persistence; determination; grit
242|underpin|뒷받침하다, 지지하다|support; uphold; reinforce
243|vehement|격렬한, 열정적인|intense; forceful; passionate
244|watershed|분수령, 전환점|turning point; divide; milestone
245|corroborate|확증하다, 뒷받침하다|confirm; support; verify
246|dispel|불식시키다, 떨쳐내다|scatter; drive away; remove
247|encapsulate|요약하다, 캡슐에 넣다|summarize; contain; capture
248|flagrant|명백한, 극악한|glaring; blatant; outrageous
249|inadvertent|부주의한, 의도치 않은|accidental; unintentional; careless
250|proliferate|급증하다, 확산되다|multiply; spread; increase rapidly
`;

const HIDDEN_RULES = [
  { keys: ["악화", "나빠"], values: ["더 나쁜 상태로 바뀜", "상황이나 건강이 쇠퇴함"] },
  { keys: ["강화", "보강", "요새화"], values: ["힘이나 설득력을 더함", "기반을 단단하게 만듦"] },
  { keys: ["완화", "경감"], values: ["강도나 부담을 낮춤", "부정적인 영향을 줄임"] },
  { keys: ["방해", "저해", "막다"], values: ["진행을 늦추거나 가로막음", "목표 달성을 어렵게 함"] },
  { keys: ["모호", "애매", "불투명"], values: ["의미가 분명하지 않음", "해석이 여러 방향으로 열려 있음"] },
  { keys: ["정교", "세심", "꼼꼼"], values: ["작은 부분까지 다듬어짐", "구조가 복잡하지만 치밀함"] },
  { keys: ["실질", "본질"], values: ["겉모습보다 실제 내용에 가까움", "핵심적인 의미나 가치"] },
  { keys: ["합법", "정당"], values: ["규칙이나 근거에 맞음", "인정받을 만한 타당성"] },
  { keys: ["논란", "논쟁"], values: ["의견이 크게 갈리는 사안", "찬반 토론의 중심 주제"] },
  { keys: ["영향", "파급", "반향"], values: ["나중에 이어지는 결과", "주변까지 번지는 효과"] },
  { keys: ["격차", "불균형", "불일치"], values: ["둘 사이의 차이", "기준과 실제가 맞지 않음"] },
  { keys: ["경향", "성향", "기질"], values: ["자주 보이는 방향성", "사람이나 사물의 기본 특성"] },
  { keys: ["인내", "끈기", "집요"], values: ["쉽게 포기하지 않는 태도", "오래 버티는 힘"] },
  { keys: ["위험", "취약", "위태"], values: ["피해를 받기 쉬운 상태", "안정성이 낮은 상황"] },
  { keys: ["명확", "분명", "명백"], values: ["오해의 여지가 적음", "눈에 띄게 드러남"] },
  { keys: ["해방", "자율", "자치"], values: ["스스로 결정할 수 있음", "속박이나 통제에서 벗어남"] },
  { keys: ["비난", "고발", "규탄"], values: ["잘못을 공개적으로 지적함", "책임을 묻는 표현"] },
  { keys: ["통합", "포함", "아우르다"], values: ["여러 요소를 하나로 묶음", "범위 안에 넣어 다룸"] },
  { keys: ["추측", "가정", "가설"], values: ["확정 전의 생각", "근거를 바탕으로 한 가능성"] },
  { keys: ["요약", "개요", "줄거리"], values: ["핵심만 압축한 내용", "전체 흐름을 짧게 보여줌"] },
  { keys: ["동시", "호환", "양립"], values: ["함께 존재하거나 작동할 수 있음", "충돌 없이 맞물림"] },
  { keys: ["무관심", "냉담"], values: ["감정적 반응이 적음", "거리감을 두는 태도"] },
  { keys: ["변덕", "불규칙", "변동"], values: ["예측하기 어렵게 바뀜", "안정적인 패턴이 부족함"] },
  { keys: ["사교", "자비", "관대"], values: ["타인에게 열린 태도", "넓게 이해하고 받아들임"] },
  { keys: ["근거", "증거", "입증"], values: ["주장을 받쳐 주는 자료", "믿을 수 있게 확인함"] }
];

const words = RAW_WORDS.trim().split("\n").map((line) => {
  const [id, word, meaningText, synonymText] = line.split("|").map((part) => part.trim());
  return {
    id: Number(id),
    word,
    meanings: meaningText.split(",").map((part) => part.trim()),
    synonyms: synonymText.split(";").map((part) => part.trim())
  };
});

const REQUEST_WORDS = `
1|set|놓다, 설정하다|place; fix; arrange
2|fill|채우다, 메우다|load; occupy; complete
3|give|주다, 제공하다|provide; hand; offer
4|open|열다, 열려 있는|unlock; begin; accessible
5|arrange|마련하다, 정리하다/배열하다|organize; prepare; sort
6|regulate|규제하다, 조절하다|control; adjust; govern
7|establish|설립하다, 수립하다|found; create; set up
8|distribute|분배하다, 유통시키다|hand out; allocate; circulate
9|pass|지나가다/통과하다, 전달하다|go by; transfer; approve
10|book|책, 예약하다|volume; reserve; schedule
11|store|상점, 저장하다|shop; keep; preserve
12|stock|재고, 비축하다|inventory; supply; store
13|call out|부르다/호출하다, 소리쳐 말하다|summon; shout; criticize
14|tone down|누그러뜨리다, 부드럽게 하다|soften; moderate; reduce
15|back out of|빠지다, 약속을 저버리다|withdraw; cancel; retreat
16|stand up for|옹호하다, 지지하다|defend; support; advocate
17|divergent|갈라지는, 서로 다른|different; separating; varying
18|persistent|끈질긴, 지속되는|continuous; tenacious; lasting
19|redundant|불필요한, 쓸모없는|unnecessary; surplus; extra
20|extravagant|낭비하는/사치스러운, 과장된|wasteful; lavish; excessive
21|braced|버팀대를 댄, 대비한|supported; reinforced; prepared
22|clogged|막힌, 막혀 있는|blocked; obstructed; jammed
23|drowned|익사한, 물에 잠긴|submerged; overwhelmed; soaked
24|squeezed|짠, 압착된|pressed; compressed; forced
25|tolerant|관대한, 잘 견디는|accepting; patient; resistant
26|discreet|신중한, 조심스러운|careful; tactful; prudent
27|ambiguous|애매모호한, 여러 가지로 해석 가능한|unclear; vague; equivocal
28|meticulous|꼼꼼한, 세심한|careful; thorough; precise
29|unintuitive|직관적이지 않은, 이해하기 어려운|counterintuitive; unclear; awkward
30|implausible|믿기 어려운, 타당해 보이지 않는|unlikely; unbelievable; doubtful
31|indisputable|반론의 여지가 없는, 부인할 수 없는|undeniable; unquestionable; certain
32|unpersuasive|설득력 없는, 설득하지 못하는|unconvincing; weak; ineffective
33|feasible|실현 가능한, 실행할 수 있는|possible; workable; practical
34|amicable|우호적인, 원만한|friendly; peaceful; cordial
35|innocuous|악의 없는, 무해한|harmless; safe; inoffensive
36|prosperous|번영한, 번창한|successful; thriving; wealthy
37|feckless|무기력한, 무책임한|irresponsible; weak; ineffective
38|maniacal|미친 듯한, 광적인|frantic; wild; crazed
39|stupendous|엄청나게 큰, 거대한|enormous; amazing; tremendous
40|despondent|낙담한, 실의에 빠진|dejected; depressed; hopeless
41|cried|울었다, 외쳤다|wept; shouted; called
42|argued|다투었다, 주장했다|debated; claimed; contended
43|worried|걱정한, 걱정스러운|anxious; concerned; troubled
44|guessed|추측했다, 짐작했다|estimated; supposed; inferred
45|goods|상품/제품, 재산/화물|products; merchandise; cargo
46|events|사건, 행사|happenings; occasions; competitions
47|chances|가능성, 기회|possibilities; opportunities; odds
48|motions|움직임, 동작|movements; gestures; actions
49|served|제공했다, 차려 주었다|provided; delivered; attended
50|granted|승인했다/허락했다, 인정했다|allowed; approved; admitted
51|donated|기부했다, 기증했다|gave; contributed; presented
52|supplied|공급했다, 제공했다|provided; furnished; delivered
53|entry|입장/등장, 출입권/가입|entrance; admission; access
54|access|접근/입장, 접근권/접속|approach; entry; connection
55|passage|통로, 구절|corridor; excerpt; section
56|privilege|특권, 특혜|advantage; right; benefit
57|liability|법적 책임, 부채|responsibility; debt; burden
58|exposure|노출, 폭로|contact; revelation; publicity
59|immunity|면역력, 면제|resistance; exemption; protection
60|consensus|합의, 의견 일치|agreement; accord; unity
61|clientele|고객들, 의뢰인들|customers; clients; patrons
62|provisions|식량/물자, 공급/규정|supplies; food; terms
63|components|구성 요소, 부품|parts; elements; pieces
64|merchandise|상품, 물품|goods; products; wares
65|superstitions|미신, 미신적 믿음|beliefs; myths; folklore
66|manuscripts|원고, 필사본|drafts; texts; copies
67|submissions|제출/제출물, 항복/굴복|documents; proposals; surrender
68|monuments|기념물, 기념비|memorials; statues; landmarks
69|barriers|장벽, 장애물|obstacles; blocks; walls
70|margins|여백, 차이/이윤폭|edges; gaps; profits
71|limitations|제한, 한계|limits; restrictions; constraints
72|boundaries|경계, 한계선|borders; limits; edges
73|featuring|특징으로 하는, 포함하는|including; presenting; highlighting
74|infringing|위반하는, 침해하는|violating; breaching; encroaching
75|embarking|승선하는, 착수하는|boarding; starting; undertaking
76|elaborating|자세히 설명하는, 정교하게 만드는|explaining; expanding; detailing
77|omission|생략, 누락|exclusion; deletion; absence
78|deflection|굴절, 편향|deviation; bending; turning
79|contraction|수축/축소, 축약형|shrinking; reduction; shortening
80|suppression|진압, 억제|repression; restraint; control
81|possible|가능한(하거나 성취할 수 있는), (발생이) 가능한|viable; practical; realistic
82|available|구할[이용할] 수 있는, (사람들을 만날) 시간[여유]이 있는|for ˈsale; on the ˈmarket; on ˈsale
83|reachable|도달 가능한, 연락 가능한|
84|disposable|사용 후 버리게 되어 있는, 일회용의|throwaway; expendable; one-use
85|loosen|느슨하게[헐겁게] 하다[되다], 늦추다|make slack; slacken; slack
86|excuse|변명, 이유|forgive; pardon; absolve
87|release|(갇히거나 구속되어 있는 상태에서) 풀어 주다, 석방[해방]하다|ˌlet sb ˈgo; free; liberate
88|deliver|(물건·편지 등을) 배달하다, (사람을) 데리고 가다|bring; take; take round
89|inspired|(자질·능력이) 탁월한, 영감을 받아 한|outstanding; wonderful; marvellous
90|activated|활성화된|
91|connected|관련이 있는|linked; united; joined
92|approached|다가가다[오다], (특히 부탁·제안 등을 하기 위해) 접촉하다|touch; approximate; ˈborder on sth
93|imitate|모방하다, 본뜨다|emulate; copy; take as a model
94|suspend|중단하다, 정직시키다/매달다|
95|eliminate|없애다, 제거[삭제]하다|remove; get rid of; abolish
96|disregard|무시[묵살]하다, 무시|ignore; take no notice of; take no account of
97|prevalent|널리 퍼진, 일반적인|
98|lucrative|수익성이 좋은|profitable; profit-making; gainful
99|tentative|잠정적인, 머뭇거리는|provisional; unconfirmed; unsettled
100|affluent|부유한, 풍족한|
101|stick to|굳게 지키다, 방침을 고수하다|
102|turn on|켜다, 흥분시키다/공격하다|
103|look over|…을 대충 훑어보다[살펴보다]|
104|take after|…을 닮다|
105|conspicuous|눈에 잘 띄는, 튀는|easily seen; clear; visible
106|monotonous|단조로운, 지루할 만큼 반복적인|
107|synonymous|같은[비슷한] 뜻을 갖는, 동의어[유의어]의|
108|contemptuous|경멸하는, 업신여기는|scathing; mocking; scornful
109|enclose|(담·울타리 등으로) 두르다[둘러싸다], 에워[둘러]싸다|surround; circle; ring
110|immerse|(액체 속에) 담그다, ~에 몰두하다/몰두하게 만들다|submerge; plunge; dip
111|condense|응축하다, 요약하다|
112|minimize|(특히 좋지 못한 것을) 최소화하다, (덜 중요해 보이도록) 축소하다|keep down; keep at/to a minimum; reduce
113|defunct|(지금은) 현존하지[행해지지/사용되지] 않는|disused; no longer in use; unused
114|thwarted|좌절된, 어긋난|
115|mortified|굴욕감을 느낀, 몹시 당황한|
116|jostled|(많은 사람들 사이에서) 거칠게 밀치다[떠밀다]|bump into/against; knock into/against; bang into
117|nestled|포근히 자리 잡은, 안긴|
118|smeared|마구 바른, 얼룩진|
119|mustered|(지지 등을 최대한) 모으다, (용기 등을 최대한) 내다[발휘하다]|assemble; bring together; call together
120|joke|우스개(소리·행동), 농담|quip; prank; pun
121|play|놀다, (게임·놀이 등을) 하다|drama; comedy; tragedy
122|relax|쉬다, 긴장을 풀다|
123|sleep|자다, 잠을 재우다|
124|displaying|전시하는, 보여 주는|
125|appearing|…인 듯한(looking)|
126|exposing|노출하는, 공개하는|
127|issuing|발행하는, 발표하는|
128|installed|(장비·가구를) 설치[설비]하다, (컴퓨터에 새 프로그램을) 설치하다|put; position; place
129|corrected|바로잡은, 수정된|
130|recovered|(병등에서)회복한|
131|confirmed|확인된, 확정된|
132|designed|설계된, 계획된|
133|organized|(많은 사람들로) 조직화된, 조직적인|well ordered; in order; ordered
134|composed|구성된, 침착한|
135|structured|구조[구성, 조직]가 있는|
136|adjusting|조절|
137|modifying|(모양·성질·계획·의견 따위를) 변경하는, 수정하는.|
138|converting|전환하는, 개조하는|
139|transmitting|송신 [송화, 송파] 하는|
140|leaping|뛰어오르는, 도약하는|
141|striking|충돌하는/때리는, 눈에 띄는|
142|blaming|…을 탓하다, … 책임[때문]으로 보다|criticize; condemn; attack
143|pushing|미는, 밀치는|
144|instilling|스며들게 하는, 주입하는|
145|jeopardizing|위태롭게 하다|threaten; endanger; imperil
146|disqualifying|자격을 박탈하다, 실격시키다|ban; bar; debar
147|overthrowing|(지도자·정부를) 타도하다[전복시키다], 타도|downfall; fall; nemesis
148|bulkiest|부피가 큰[커서 옮기기 힘든], 덩치가 큰|large; big; great
149|hardiest|(척박한 환경에) 강한[강인한], 내한성의|robust; healthy; fit
150|nimblest|(동작이) 빠른, 날렵한|agile; lithe; sprightly
151|brawniest|건장한|strong; as strong as an ox; muscular
152|obstructed|막힌, 방해받은|
153|unimpeded|가로막는 것이 없는, 방해받지 않는|unrestricted; unconstrained; unhindered
154|exasperated|(특히 자기가 어떻게 할 수 없는 상황에 대해) 몹시 화가 난[격분한]|
155|antagonized|적대감을 불러일으키다|arouse hostility in; alienate; set someone against someone else
156|insert|삽입하다, 끼워 넣다|
157|register|등록하다, 신고하다|
158|confront|맞서다, 직면하다|
159|implement|시행하다, (흔히 옥외 활동에 쓰이는 간단한) 도구[기구]|tool; utensil; instrument
160|treaties|조약|agreement; settlement; pact
161|charters|(권리를 명시한) 헌장, (조직의 원칙·목적 등을 명시한) 헌장|authority; authorization; sanction
162|archives|공문서, 기록 보관소|
163|protocols|규약, 절차/의정서|
164|detained|구금된, 붙잡힌|
165|impaired|손상된, 제 기능을 못하는|damaged; flawed; faulty
166|extracted|추출한|
167|disrupted|방해하다, 지장을 주다|interrupt; upset; throw into confusion
168|shedding|흘리는, 벗어 버리는|
169|digesting|소화하는, 이해하는|
170|divulging|(비밀을) 알려주다[누설하다]|disclose; reveal; make known
171|inhibiting|억제하는, 방해하는|
172|awed|경외감을 느끼는, 깊은 인상을 받은|
173|poked|(손가락 등으로) 쿡 찌르다, (재빨리) 밀다[찌르다]|prod; jab; dig
174|vowed|맹세했다, 서약했다|
175|lauded|칭찬하다|praise; extol; hail
176|abolished|(법률·제도·조직을) 폐지하다|cancel; scrap; dismiss
177|invalidated|무효화한, 틀렸음을 입증한|
178|vanquished|패배한, 정복된|
179|squandered|낭비[허비]하다|waste; misspend; misuse
180|filial|(부모에 대한) 자식의|dutiful; devoted; loyal
181|pious|경건한, 독실한|religious; devout; devoted
182|benign|상냥한, 양성의/무해한|
183|clerical|사무직의, 성직자의|office; desk; back-room
184|tarnished|(금속 등이 광택을 잃고) 흐려지다[변색되다], 흐리게 하다|become discoloured; discolour; stain
185|ransacked|(무엇을 찾아서 어떤 곳을 엉망으로 만들며) 뒤지다[뒤집어엎다]|plunder; pillage; steal from
186|inundated|침수된, 쇄도한|
187|discharged|(어떤 장소나 직무에서) 떠나는 것을 허락하다, 해고하다|dismiss; remove; eject
188|stipulations|조건, 조항|
189|antecedents|선행 사건, 선조|ancestor; forefather; forebear
190|repercussions|영향, 파급 효과(주로 부정적)|
191|circumstances|사정, 상황|
192|garnering|모으는, 얻는|
193|beckoning|(오라고) 손짓하다, (손짓으로) 부르다|gesture; signal; wave
194|contracting|계약하는, 수축하는/병에 걸리는|
195|sanctioning|승인하는, 제재하는|
196|ascend|오르다, 올라가다|climb (up); come/go/move up; make one's/its way up
197|bolster|북돋우다, 강화[개선]하다|pillow; cushion; pad
198|perturb|(심리적으로) 동요하게 하다|worry; upset; unsettle
199|upbraid|질책하다, 호되게 나무라다|reprimand; rebuke; reproach
200|check|확인하다, 점검하다|
201|claim|주장하다, 요구하다|
202|serve|(식당 등에서 음식을) 제공하다, (음식을 상에) 차려 주다[내다]|feed; nourish; ˌdish ˈup
203|honor|영광, 명예/존경|
204|episode|사건/에피소드, 방송 한 회|
205|occasion|때/경우, 행사|
206|affection|애착, 보살핌|fondness; love; liking
207|appetizing|구미를 동하게 하는|mouth-watering; inviting; tempting
208|engaging|호감이 가는, 매력적인|charming; appealing; attractive
209|tempting|솔깃한, 구미가 당기는|enticing; alluring; attractive
210|alarming|걱정스러운, 두려운|frightening; startling; unnerving
211|illusory|(실제가 아니라) 환상에 불과한|delusory; delusional; delusive
212|inherent|내재하는|intrinsic; innate; immanent
213|immature|미숙한, 치기 어린|unripe; not ripe; not mature
214|inaccurate|부정확한, 오류가 있는|inexact; imprecise; incorrect
215|timid|소심한, 용기[자신감]가 없는|easily frightened; lacking courage; fearful
216|earnest|성실한, 진심 어린|serious; serious-minded; solemn
217|ecstatic|황홀해 하는, 열광하는|enraptured; elated; transported
218|prudent|신중한|wise; well judged; judicious
219|rigorous|철저한, 엄격한|meticulous; punctilious; conscientious
220|pertinent|(특정한 상황에) 적절한[관련 있는]|relevant; to the point; apposite
221|verifiable|증명할 수 있는, 입증[검증]할 수 있는|
222|mandatory|법에 정해진, 의무적인|obligatory; compulsory; binding
223|fanatical|광신[열광]적인|zealous; extremist; extreme
224|eloquent|웅변[연설]을 잘 하는, 유창한|persuasive; expressive; articulate
225|intrusive|방해가 되는, 지나치게 참견하는|
226|gratuitous|불필요한, 쓸데없는|unjustified; without reason; uncalled for
227|rake in|(돈 따위를) 긁어 모으다, 벌다.|
228|pass up|거절하다, 퇴짜놓다|
229|churn out|대량 생산하다, 잇달아 내다.|
230|carry over|(다른 상황에서 계속) 이어지다|
231|renounce|(직함·직책 등을 공식적으로) 포기[단념]하다, 포기를 선언하다|give up; relinquish; abandon
232|exacerbate|(특히 질병·문제를) 악화시키다|aggravate; make worse; worsen
233|antagonize|적대감을 불러일으키다|arouse hostility in; alienate; set someone against someone else
234|incapacitate|(질병 등이) 정상적인 생활을 하지 못하게 만들다|immobilize; paralyse; prostrate
235|impiety|신앙심이 없음, 경건하지 않음|godlessness; ungodliness; unholiness
236|travesty|엉터리, 졸렬한 모방|
237|profanity|욕설, 신성 모독|
238|ambiguity|애매성, 애매모호함|ambivalence; equivocation; obscurity
239|oppose|(계획·정책 등에) 반대하다, (시합 등에서 누구와) 겨루다|resist; fight; combat
240|commit|(그릇된 일·범죄를) 저지르다[범하다], 자살하다|carry out; do; perform
241|prevent|막다, 예방하다|
242|tension|(사람들 사이의) 긴장 상태, (필요·이해의 차이로 인한) 긴장[갈등]|aggression; hostility; antagonism
243|activity|(활발한) 움직임, 활기|action; rush; bustle
244|exercise|운동, 연습/실행|
245|practice|실행, 실천|application; exercise; use
246|accompanied|동행한, 동반한|
247|maintained|유지된, 관리된|
248|contained|포함된, 억제된|
249|included|함유된, 포함된|
250|exhibited|전시하다, (감정·특질 등을) 보이다[드러내다]|put on display; put on show; display
251|eliminated|없애다, 제거[삭제]하다|remove; get rid of; abolish
252|duplicated|복제된, 중복된|
253|postponed|연기하다, 미루다|put off; delay; defer
254|embrace|(껴)안다, 포옹하다|hug; take/hold in one's arms; hold
255|familiarize|익숙하게 하다|make conversant; make familiar; acquaint
256|standardize|표준화하다|systematize; make consistent; make uniform
257|accommodate|(살거나 지낼) 공간을 제공하다, 수용하다|house; ˌtake sb ˈin; billet
258|omitting|빠뜨리다, 누락[제외]시키다|leave out; exclude; fail to include
259|revoking|폐지[철회/취소]하다|cancel; repeal; rescind
260|repealing|폐지|
261|nullifying|(합의·명령 등을) 무효화하다, 효력 없게[무가치하게/무효로] 만들다|annul; declare null and void; render null and void
262|absorb|(액체·가스 등을) 흡수하다[빨아들이다], (큰 조직의 일부로) 흡수하다|soak up; suck up; draw up/in
263|squirt|가늘게 뿜다, 찍 짜다|
264|chase|뒤쫓다, 추적하다|pursue; run after; follow
265|rinse|(비누를 쓰지 않고 물에) 씻다, (비누 성분을) 씻어 내다[헹구다]|wash; wash out; wash lightly
266|escorted|호위한, 동행한|
267|evaluated|평가된, 검토된|
268|estimated|추정된, 어림잡은|
269|stigma|오명, (꽃의) 암술머리|shame; disgrace; dishonour
270|heresy|(특히 종교상의) 이단, (정통적이거나 일반적이 아닌) 이단[이설]|dissension; dissent; dissidence
271|scruple|양심, (양심의) 가책[거리낌]|hesitate; be reluctant; be loath
272|menace|위협적인[위험한] 존재, (어조·분위기 등으로 느껴지는) 위협[협박]|threat; ominousness; intimidation
273|deprivation|(필수적인 것의) 박탈[부족]|poverty; impoverishment; penury
274|inferiority|열등함|lowliness; inferior status; inferior position
275|affliction|고통, 고통의 원인|disorder; disease; malady
276|scarcity|부족, 결핍|
277|enforced|강요된, 강제적인|compulsory; obligatory; mandatory
278|dignified|위엄[품위] 있는|stately; noble; courtly
279|converted|전환[변환]된, 개장[개조]한|
280|compelled|강요[강제]하다, (필요에 따라) …하게 만들다|force; coerce into; pressurize into
281|plunged|(앞·아래로 갑자기) 거꾸러지다[거꾸러뜨리다], 급락하다|jump; dive; hurl oneself
282|retreated|후퇴[철수/퇴각]하다, 멀어져 가다|withdraw; retire; draw back
283|imparted|(정보·지식 등을) 전하다, (특정한 특성을) 주다|communicate; pass on; convey
284|degraded|질이 저하된, 타락한|
285|adamant|요지부동의, 단호한|unshakeable; immovable; inflexible
286|perpetual|(오랫동안) 끊임없이 계속되는, 빈번한|everlasting; never-ending; eternal
287|forfeit|몰수당하다, 기권하다|
288|unleash|(강력한 반응·감정 등을) 촉발시키다[불러일으키다]|let loose; release; free
289|displace|대신[대체]하다, (살던 곳에서) 쫓아내다|dislodge; dislocate; upset
290|transmit|전송[송신/방송]하다, 전염시키다|transfer; pass on; hand on
291|sufficiency|충분한 양|
292|proficiency|능숙함, 숙련도|
293|reputability|평판이 좋음, 존경할 만함|
294|attainability|달성할 수 있음, 획득할 수 있음.|
295|multiplying|늘어나는, 곱하는|
296|simmering|약한 불로 끓는, 감정이 끓어오르는|
297|dwindling|(점차) 줄어드는|
298|bulging|불거져[튀어] 나온|
299|terrain|지형, 지역|land; ground; territory
300|vanguard|(사회적인 운동의) 선봉[선두], (군대 공격대의) 선봉[전위]|forefront; van; advance guard
301|periphery|(어떤 범위의) 주변, (덜 중요한) 주변부|edge; outer edge; margin
302|panorama|전경(全景)|view; vista; wide view
303|strident|(소리가) 귀에 거슬리는[거친], 공격적인|harsh; raucous; rough
304|fallacious|잘못된, 틀린|erroneous; false; untrue
305|discordant|조화[화합]를 이루지 못하는, 불협화음의|in disagreement; at variance; at odds
306|abominable|혐오스러운, 끔찍한|
307|venerable|공경할 만한, 덕망[신망] 있는|respected; venerated; revered
308|sagacious|현명한, 판단력이 뛰어난|
309|assiduous|근면한, 끈기 있는|
310|inscrutable|(사람·표정이) 불가해한[헤아리기 어려운]|enigmatic; unreadable; impenetrable
311|decrepit|노후한, 노쇠한|feeble; enfeebled; infirm
312|aberrant|도리를 벗어난, 일탈적인|abnormal; odd; strange
313|fractious|성마른, 다루기 힘든|
314|congruent|일치하는, 합동의|
315|treat|(특정한 태도로) 대하다[다루다/취급하다/대우하다], 여기다|nurse; dose; process
316|accept|(기꺼이) 받아들이다, (적절하다고 보아) 받아 주다[수락하다]|face; come to ˈterms with sth; ˈlive with sth
317|charge|요금을 청구하다, 책임을 맡기다/기소하다|
318|gap|틈, 격차|
319|stay|머무르다, 계속 유지하다|
320|space|(비어 있는·이용할 수 있는) 공간[자리], (비어 있는) 공간[장소]|room; headroom; legroom
321|pause|잠시 멈추다, 일시 정지하다|
322|pale|창백한, 핼쑥한|white; grey; sallow
323|gentle|온화한, 순한|light; mild; kind
324|capable|…할 수 있는, 유능한|
325|familiar|익숙한, 잘 아는|
326|going against the grain|정상적인[자연스러운] 것에 어긋나다/어긋나게 하다|
327|a blessing in disguise|(문제인 줄 알았던 것이 가져다 준) 뜻밖의 좋은 결과[이득]|
328|a drop in the bucket|아주 적은 양, 미미한 것|
329|food for thought|(깊이) 생각할 거리|
330|combine|결합하다, 합치다|
331|ripe|익은, 숙성한|mature; ripened; fully developed
332|bland|특색 없는, 싱거운|
333|soggy|질척한, 질척거리는|soft and wet; mushy; squashy
334|coarse|거친, (알갱이·올 등이) 굵은|rough; spiky; leathery
335|intricate|(여러 부분·내용으로 되어 있어) 복잡한|complex; complicated; convoluted
336|manifold|(수가) 많은, 여러 가지의|many; numerous; multiple
337|stingy|(특히 돈에 대해) 인색한[쩨쩨한]|mean; miserly; parsimonious
338|nominal|명목상의, 이름뿐인|in name/title only; titular; formal
339|scrawny|뼈만 앙상한, 거죽만 남은|skinny; thin; thin as a rake
340|elusive|찾기[규정하기/달성하기] 힘든|difficult to catch/find; difficult to track down; evasive
341|incisive|(사물 인식 능력이) 예리한[날카로운], 기민한|penetrating; acute; sharp
342|devious|정직하지 못한, 기만적인|
343|abrasive|(문질러 닦는 데 쓰이는) 연마재의, 거친|grinding; rubbing; polishing
344|verve|열정, 활기|enthusiasm; vigour; energy
345|amity|우호, 친선|friendship; friendliness; peace
346|ennui|따분함, 권태감|boredom; tedium; listlessness
347|pique|불쾌감, 흥미를 자극하다|
348|pains|(육체적) 아픔, 통증|ache; suffering; discomfort
349|habits|버릇, 습관|practice; policy; ways
350|effects|영향, 효과|
351|illnesses|병, 아픔|sickness; ˌill ˈhealth; trouble
352|flexible|신축성[융통성] 있는, 잘 구부러지는|versatile; adjustable; convertible
353|portable|휴대[이동]가 쉬운, 휴대용의|transportable; movable; mobile
354|adjustable|조절[조정] 가능한|modifiable; alterable; adaptable
355|detachable|떼어낼[분리할] 수 있는|
356|relieves|(불쾌감·고통 등을) 없애[덜어] 주다, 안도하게[후련하게] 하다|alleviate; mitigate; assuage
357|releases|(갇히거나 구속되어 있는 상태에서) 풀어 주다, 석방[해방]하다|ˌlet sb ˈgo; free; liberate
358|displays|전시[진열]하다, 내보이다|exhibition; exposition; exhibit
359|dismisses|(고려할 가치가 없다고) 묵살[일축]하다, (생각·느낌을) 떨쳐 버리다|ˌbrush sb/sth aˈside; ˌshrug sth ˈoff/aˈside; discount
360|conventions|관습/관례, 협약|
361|coalitions|연합, 연립|
362|collapses|붕괴되다, 무너지다|crumble; ˌgive ˈway; disintegrate
363|clashes|(두 집단 간의 짧은 물리적) 충돌, (의견 차이 등에 의한) 충돌|confrontation; skirmish; brush
364|warrant|(체포·수색 등을 허락하는) 영장, 보증서|authorization; written order; licence
365|stamp|우표, (날짜 등이 나오는) 도장[압인]|trample; step; tread
366|treaty|조약|agreement; settlement; pact
367|duty|(도덕적·법률적) 의무, 직무|responsibility; obligation; commitment
368|imported|수입된, 외국에서 들여온|
369|generated|발생시키다, 만들어 내다|cause; give rise to; lead to
370|addressed|다루었다, 연설했다/말을 걸었다|
371|originated|비롯되다, 유래하다|arise; have its origin; derive
372|belong|제자리[알맞은 위치]에 있다, 소속감을 느끼다|have a place; be located; be situated
373|adhere|들러붙다, 부착되다|stick; stick fast; cling
374|migrate|이동하다, 이주[이동]하다|relocate; resettle; move
375|connect|잇다, 연결하다|attach; join; fasten
376|admissible|(특히 법정에서) 인정되는|allowable; allowed; permissible
377|gracious|(특히 아래 사람에게) 자애로운, 품위 있는|courteous; polite; civil
378|genuine|진짜의, 진품의|authentic; real; actual
379|judicial|사법[재판]의|legal; judiciary; juridical
380|deficient|(필수적인 것이) 부족한[결핍된], 결함이 있는|lacking; wanting; defective
381|mythical|신화 속에 나오는, 가공의|legendary; mythological; fabled
382|synthetic|(인위적으로) 합성한, 인조의|artificial; fake; false
383|prophetic|예언의, 예언적인|prescient; predictive; prophetical
384|bedrock|(튼튼한) 기반, 기반암|substratum; substructure; understructure
385|reservoir|저수지, 급수장|pool; lake; pond
386|sediment|침전물, 앙금|dregs; lees; deposit
387|multitude|아주 많은 수, 다수|a lot; a great/large number; a great/large quantity
388|hushed|(아무도 말을 하지 않아서) 조용한, (보통 때보다 더) 고요한|
389|lamented|한탄했다, 애도했다|
390|repressed|억압된, 억눌린|oppressed; subjugated; subdued
391|embedded|내장된, 박힌|
392|disciplines|학문 분야, 규율/훈련|
393|institutions|기관, 제도|
394|commissions|위원회, 수수료|
395|transcending|초월하다|go beyond; rise above; cut across
396|improvising|즉흥적으로 하는, 임기응변으로 처리하는|
397|delineating|(상세하게) 기술하다[그리다/설명하다]|describe; set forth; set out
398|contriving|용케[어떻게든] …하다, (어려운 가운데도) 성사시키다|bring about; engineer; cause to happen
399|dissipated|흩어진, 방탕한|
400|mistreated|학대당한|
401|undetected|아무에게도 들키지[발견되지] 않는|
402|inactivated|비활성화된, 작동이 멈춘|
403|depleted|고갈된, 다 써버린|
404|indulged|마음껏 한, 욕구를 충족시킨|
405|vandalized|공공 기물을 파손하다|wreck; trash; sabotage
406|instigating|(보통 공식적으로) 실시[착수]하게 하다, 부추기다|set in motion; put in motion; get under way
407|calibrating|보정하는, 눈금을 조정하는|
408|formulating|(세심히) 만들어 내다, (의견을 공들여) 표현[진술]하다|draw up; put together; work out
409|zest|열정, 열의|enthusiasm; gusto; relish
410|tang|싸한[톡 쏘는 듯한] 맛[냄새]|flavour; taste; savour
411|quirk|(사람의 성격에서) 별난 점, 기벽|idiosyncrasy; peculiarity; oddity
412|sheen|윤(기), 광택|shine; lustre; gleam
413|extricated|구출된, 곤경에서 벗어난|
414|extradited|(범죄인을 그 관할국에) 인도하다|deport; hand over; send back
415|repudiated|거부하다, 물리치다|reject; renounce; abandon
416|reciprocated|화답했다, 보답했다|
417|abolition|(법률·제도·조직의) 폐지|scrapping; ending; stopping
418|coronation|(새 왕의) 대관식|crowning; enthronement; enthroning
419|abomination|혐오[가증]스러운 것|atrocity; disgrace; horror
420|differentiation|차별(의 인정), 구별|distinction; distinctness; disparity
421|nab|(나쁜 짓을 하고 있는 사람을) 붙잡다[체포하다], 가지다|catch; arrest; apprehend
422|mar|손상시키다, 망치다|
423|wilt|시들다, 풀이 죽다|
424|coax|구슬리다, 달래다|persuade; wheedle; cajole
425|settled|(변화가 없이) 안정적인[안정된], (가정·직장 등에서) 자리를 잡은|
426|gathered|모인, 모은|
427|completed|완료한, 완성된|
428|assign|맡기다, 배정하다|
429|order|주문하다, 명령하다/순서|
430|enter|들어가다[오다], (조직·전문적인 직종 등에) 들어가다|ˌgo ˈin; ˌcome ˈin; set ˈfoot in/on sth
431|labeled|(··· 에) 표를 붙인, (··· 을) 분류한.|
432|identified|확인된, 식별된|
433|diagnosed|(질병·문제의 원인을) 진단하다|identify; determine; distinguish
434|prescribed|처방된, 규정된|
435|measure|측정하다, 조치/척도|
436|registry|등기소, 등록소|
437|balance|균형[평형] (상태), (몸의) 균형|stability; equilibrium; steadiness
438|invoice|송장(送狀), (물품 대금·작업비 등의) 청구서|bill; account; statement
439|response|반응, 응답|
440|reputation|평판, 명성|image; profile; name
441|impression|인상, 감명|
442|appearance|(겉)모습, 외모|look; manner; air
443|purified|정제한(精製~)|
444|opulent|호화로운, 엄청나게 부유한|luxurious; sumptuous; palatial
445|pristine|완전 새 것 같은, 아주 깨끗한|immaculate; in perfect condition; perfect
446|refined|정제된, 제련된|purified; pure; clarified
447|hasty|성급한, 서두른|
448|fickle|변덕스러운, 변화가 심한|capricious; changeable; variable
449|crude|조잡한, 가공하지 않은|
450|weary|(몹시) 지친, 피곤한|tired; tired out; worn out
451|fiscal|국가 재정[세제]의|tax; budgetary; revenue
452|lenient|(처벌·규칙 적용이) 관대한|soft; forgiving; merciful
453|precise|정확한, 정밀한|exact; accurate; correct
454|brawny|건장한|strong; as strong as an ox; muscular
455|irascible|화를 잘 내는|irritable; quick-tempered; short-tempered
456|prodigal|낭비하는, 방탕한|
457|let on|(비밀을) 말하다[털어놓다]|
458|sell out|다 팔리다[매진되다]|
459|make up|지어내다, 구성하다/화해하다|
460|talk back|(~에게) 말대답하다|
461|rely|의지하다, 신뢰하다|depend; count; bank
462|burn|(불이) 타오르다, 불에 타다|be on ˈfire; smoulder; ˌgo ˈup
463|trade|거래, 교역|business; market; operation
464|essential|필수적인, 극히 중요한|vital; crucial; critical
465|routine|일상, 일과/통상적인|
466|fluent|(언어, 특히 외국어 실력이) 유창한[능숙한]|articulate; eloquent; expressive
467|certifying|(특히 서면으로) 증명하다, 자격증[면허증]을 교부하다|verify; guarantee; attest
468|qualifying|자격을 주는, 한정하는|
469|authorizing|권한을 부여하는, 허가하는|
470|guaranteeing|보장하는, 확실히 해 주는|
471|excluded|제외되는|
472|dismissed|해고된, 묵살된|
473|suspended|일시 중단된, 정직된/매달린|
474|implied|함축된, 은연중의|implicit; indirect; hinted
475|obligated|의무가 있는, …해야 하는|
476|restrained|자제하는, 차분한|self-controlled; controlled; self-restrained
477|defects|결함, (정당·국가 등을) 버리다[떠나다]|fault; flaw; virus
478|struggles|투쟁[고투]하다, 몸부림치다|strive; try hard; endeavour
479|dilemmas|딜레마, 진퇴양난|
480|recall|기억해 내다, 상기하다|remember; recollect; call to mind
481|retain|(계속) 유지[보유]하다, (계속) 함유[간직]하다|keep; keep possession of; keep hold of
482|reserve|예약하다, (자리 등을) 따로 잡아[남겨] 두다|save; keep; hold
483|recollect|(특히 애를 써서) 기억해[생각해] 내다|remember; recall; call to mind
484|imposes|부과한다, 강요한다|
485|infringes|위반하다, (법적 권리를) 제한[침해]하다|contravene; violate; transgress
486|oversteps|(도를) 넘다|
487|trespasses|무단 침입[출입]하다, 잘못하다|enter without permission; intrude on; encroach on
488|arid|매우 건조한, 무미건조한|dry; dried up; waterless
489|limp|기운[활기]이 없는, 축 처진[늘어진]|hobble; walk with a limp; walk with difficulty
490|vapid|흥미롭지[지적이지] 못한|insipid; uninspired; colourless
491|dimension|(공간의) 크기, (높이·너비·길이의) 치수|proportions; measurements; extent
492|substance|물질, 실체|material; matter; stuff
493|volume|용량, 용적|book; publication; tome
494|portion|(더 큰 것의) 부분[일부], (음식의) 1인분|helping; serving; part
495|eminent|저명한, 탁월한|illustrious; distinguished; renowned
496|enigmatic|수수께끼 같은, 불가사의한|mysterious; puzzling; hard to understand
497|expansive|툭 트인, 광활한|extensive; sweeping; rolling
498|extraneous|(특정 상황이나 주제와) 관련 없는|irrelevant; immaterial; beside the point
499|decree|법령, 칙령|order; edict; command
500|verdict|(배심원단의) 평결, (숙고·확인 뒤에 내린) 의견[결정]|judgement; adjudication; adjudgement
501|concord|화합, (성·수·인칭의) 일치|agreement; harmony; accord
502|mandate|권한, 명령|
503|yielded|(수익·결과·농작물 등을) 내다[산출/생산하다], 항복[굴복]하다|produce; bear; give
504|divulged|(비밀을) 알려주다[누설하다]|disclose; reveal; make known
505|exploited|착취당한, 이용된|
506|hampered|방해받은, 지장을 받은|
507|submerged|잠수하다, 물[액체] 속에 잠기다|go under water; dive; sink
508|condensed|응축[응결]한, 요약한|abridged; shortened; cut
509|collided|충돌하다, 부딪치다|crash (into); come into collision (with); bang (into)
510|verified|(진실인지·정확한지) 확인하다, 입증하다|substantiate; confirm; prove
511|garnered|얻었다, 모았다|
512|provoked|유발한, 화나게 한|
513|accredited|승인받은, 공인된|official; appointed; legal
514|acute|격심한, 극심한|keen; sharp; good
515|devout|독실한|pious; religious; devoted
516|opaque|불투명한, 불투명[불분명]한|non-transparent; cloudy; filmy
517|concise|간결한, 축약된|succinct; short; brief
518|mangled|짓이기다, 심하게 훼손하다|mutilate; maim; disfigure
519|corroded|부식시키다, 좀먹다|rust; become rusty; tarnish
520|exhausted|기진맥진한, 진이 다 빠진|tired out; worn out; weary
521|abnegated|포기한, 버린|
522|porous|(구멍이 많은) 다공성[투과성]의|permeable; penetrable; pervious
523|tangible|분명히 실재하는[보이는], 유형(有形)의|touchable; palpable; tactile
524|resilient|(충격·부상 등에 대해) 회복력 있는, 탄력 있는|flexible; pliable; pliant
525|conducive|…에 도움이 되는, …을 촉진하는|
526|caustic|가성의, 부식성의|corrosive; corroding; mordant
527|virulent|악성의, 치명적인|poisonous; toxic; venomous
528|scathing|(비판이) 준열한[통렬한/가차 없는]|devastating; withering; blistering
529|retentive|잘 잊지 않는|
530|pretensions|허세, 가식|snobbery; airs; affectation
531|prerogatives|특권, 특혜|entitlement; right; privilege
532|reformations|개혁, 개선|
533|halt|멈추다, 서다|stop; come to a halt; come to a stop
534|bind|묶다, (붕대 등으로) 감다[싸다]|tie; tie up; fasten (together)
535|mute|말없는, 음소거하다|
536|mend|수리하다, 고치다|repair; fix; put back together
537|secluded|한적한, 외딴|sheltered; private; concealed
538|anecdotal|입증되지 않은, 일화적인|informal; unreliable; based on hearsay
539|segregated|분리된, 격리된|
540|confidential|비밀[기밀]의, 은밀한|private; personal; intimate
541|scarce|부족한, 드문|
542|barren|척박한, 황량한|unproductive; infertile; unfruitful
543|vacuous|공허한, 멍청한|
544|reclusive|세상을 버린, 은둔한|solitary; secluded; isolated
545|amplitude|(파동의) 진폭|magnitude; size; volume
546|lavishness|낭비, 헤픔|
547|abundance|풍부|profusion; plentifulness; profuseness
548|evade|피하다, 회피하다|
549|outwit|…보다 한 수 앞서다|outsmart; out-think; outmanoeuvre
550|perplex|(무엇을 이해할 수 없어서) 당혹하게 하다|puzzle; baffle; mystify
551|surpass|능가하다, 뛰어넘다|excel; be better than; be superior to
552|convoluted|대단히 난해한[복잡한], 나선형의|complicated; complex; involved
553|overlooked|못 보고 넘어가다, 간과하다|miss; fail to notice; fail to observe
554|exemplified|전형적인 예가 되다, 예를 들다|typify; epitomize; be a typical example of
555|undermined|(특히 자신감·권위 등을) 약화시키다, 기반을 약화시키다|erode; weaken; sap
556|hyperboles|과장법|exaggeration; overstatement; magnification
557|collocations|연어, 자주 함께 쓰이는 어구|
558|conundrums|난제, 수수께끼|
559|euphemisms|완곡 어구[표현]|polite term; substitute; mild alternative
560|untenable|방어[옹호]될 수 없는|indefensible; undefendable; unarguable
561|amenable|말을 잘 듣는, …을 잘 받아들이는|compliant; acquiescent; biddable
562|decorous|점잖은, 예의 바른|proper; seemly; decent
563|ominous|불길한|threatening; menacing; baleful
564|obliterate|완전히 없애다, 말살하다|
565|arrest|체포하다, (무엇의 진행을) 막다[저지하다]|catch; capture; take
566|rehabilitate|재활 치료하다, 사회 복귀를 돕다|
567|corroborate|(진술·이론 등을 뒷받침하는 증거나 정보를) 제공하다, 확증[입증]하다|confirm; verify; endorse
568|predicated|…을 근거로 한, 단정한|
569|expounded|자세히 설명하다|present; put forward; set forth
570|emblazoned|(상징·문구 등을) 선명히 새기다[장식하다]|adorn; decorate; ornament
571|inaugurated|취임한, 개시된|
`;

const EXAMPLE_SENTENCES = {
  1: "The judge said an appeal was inevitable after the controversial verdict.",
  2: "The museum installed a sophisticated lighting system to protect the paintings.",
  3: "Rice remains the predominant crop in many parts of the region.",
  4: "The school expanded the library to accommodate more students after class.",
  5: "The roads began to deteriorate after several weeks of heavy rain.",
  6: "The historian argued that conflict was inherent in the old political system.",
  7: "The contract was ambiguous, so both sides interpreted it differently.",
  8: "Her explanation sounded plausible, but the detective still checked the records.",
  9: "The editor asked reporters to scrutinize every claim before publication.",
  10: "The leak threatened to undermine public trust in the agency.",
  11: "The court found that the protest was a legitimate form of political expression.",
  12: "His disappointment became manifest when the final results were announced.",
  13: "The law may perpetuate inequality if it is applied without reform.",
  14: "The cost was negligible compared with the long-term benefits.",
  15: "Coastal communities must be resilient as storms become more frequent.",
  16: "The researchers built an autonomous vehicle that could navigate the campus.",
  17: "The architect presented an elaborate plan for restoring the old theater.",
  18: "Clean water is indispensable to public health.",
  19: "The country faced an unprecedented wave of migration that winter.",
  20: "The evidence may compel the company to change its safety procedures.",
  21: "Oil prices often fluctuate when investors expect political instability.",
  22: "Subsequent studies confirmed the original research team's findings.",
  23: "Plastic waste has become prevalent along the coastline.",
  24: "The witness's statement seemed to contradict the video evidence.",
  25: "The new data helped reinforce the scientist's original conclusion.",
  26: "The mayor paused to contemplate the consequences of the proposal.",
  27: "The local economy remained stagnant despite several recovery plans.",
  28: "The new software is compatible with most older devices.",
  29: "Young plants are especially susceptible to sudden changes in temperature.",
  30: "Fallen trees continued to obstruct the mountain road.",
  31: "The board made a deliberate effort to include student opinions.",
  32: "Witnesses sometimes exaggerate details when they are under pressure.",
  33: "The principal began the speech by acknowledging the volunteers' work.",
  34: "The city made a substantial investment in public transportation.",
  35: "The documentary sparked controversy over the use of personal data.",
  36: "The advertisement was criticized for trying to distort the survey results.",
  37: "A superficial reading of the poem misses its political meaning.",
  38: "The medical trial followed a rigorous review process.",
  39: "Tax benefits gave companies an incentive to hire more workers.",
  40: "The charity delivered food to alleviate suffering after the flood.",
  41: "The message carried an implicit warning about future layoffs.",
  42: "The influence of the old law began to diminish over time.",
  43: "The essay was coherent because each paragraph supported the central claim.",
  44: "The committee rejected the arbitrary deadline set by the previous director.",
  45: "She became proficient in French after a year of daily practice.",
  46: "The course will encompass literature, history, and political theory.",
  47: "A shortage of nurses created a serious constraint on hospital care.",
  48: "Years of overfishing can deplete the ocean's natural resources.",
  49: "Analysts began to speculate about the cause of the sudden market drop.",
  50: "Public cooperation is integral to the success of the campaign.",
  51: "The plane had to deviate from its route because of the storm.",
  52: "The defending champion proved to be a formidable opponent.",
  53: "The mayor became notorious for ignoring environmental warnings.",
  54: "The treaty tried to reconcile economic growth with environmental protection.",
  55: "The engineer offered a pragmatic solution that could be built quickly.",
  56: "Poor lighting can hinder students who are trying to study at night.",
  57: "The report provided tangible evidence of economic recovery.",
  58: "A short introduction should precede the main discussion.",
  59: "The manager seemed indifferent to the concerns of part-time workers.",
  60: "Loud construction noise can aggravate stress in nearby residents.",
  61: "Small businesses were exempt from the new reporting requirement.",
  62: "The lawyer gave a compelling argument in favor of reform.",
  63: "The device is versatile enough to be used in classrooms and clinics.",
  64: "The watchmaker repaired the intricate mechanism by hand.",
  65: "The athlete learned to remain calm in the face of adversity.",
  66: "Quiet surroundings are conducive to careful reading.",
  67: "The plan was feasible because it required little new equipment.",
  68: "The teacher used an analogy between memory and a filing system.",
  69: "The candidate refused to concede defeat until every vote was counted.",
  70: "The journalist was tenacious in her search for the truth.",
  71: "His altruistic decision inspired others to donate blood.",
  72: "The company moved to consolidate its smaller offices into one building.",
  73: "A discrepancy between the two reports led to a new investigation.",
  74: "The theory was supported by empirical evidence from several experiments.",
  75: "The interviewer's questions were designed to elicit honest responses.",
  76: "Community leaders gathered to denounce the attack on the shelter.",
  77: "The second warning sign was redundant because the first one was clear.",
  78: "The exhibition focused on indigenous art from the northern coast.",
  79: "The discovery changed the dominant paradigm in modern physics.",
  80: "The chart traced the trajectory of the satellite around Earth.",
  81: "The scientist kept meticulous notes during the experiment.",
  82: "Her cheerful disposition made the long trip easier for everyone.",
  83: "The spokesperson could articulate the policy in simple language.",
  84: "Two concurrent investigations reached similar conclusions.",
  85: "The oil spill became an environmental catastrophe.",
  86: "The hospital hired extra staff to expedite patient registration.",
  87: "The election gave the new government a clear mandate for reform.",
  88: "Early intervention can prevent small reading problems from becoming serious.",
  89: "The president chose to invoke emergency powers after the earthquake.",
  90: "Several members decided to abstain from the final vote.",
  91: "The factory improved compliance with national safety standards.",
  92: "Archaeologists worked for months to decipher the ancient inscription.",
  93: "The wetland provides a habitat for rare birds.",
  94: "The judge promised to remain impartial throughout the trial.",
  95: "The company denied spreading malicious rumors about its rival.",
  96: "The translation lost the nuance of the original poem.",
  97: "Many obsolete machines were removed from the factory floor.",
  98: "Her perseverance allowed her to finish the marathon after an injury.",
  99: "Scientists remained skeptical until the results were repeated.",
  100: "The council reached a unanimous decision after a brief debate.",
  101: "The patient began a vigorous exercise program after recovery.",
  102: "The situation did not warrant such an expensive response.",
  103: "The general refused to relinquish control of the city.",
  104: "The team grew complacent after winning the first two games.",
  105: "The report highlighted the disparity between urban and rural schools.",
  106: "The bus schedule became erratic during the strike.",
  107: "Attempts to repair the bridge were futile after the second collapse.",
  108: "Heavy snow continued to impede rescue efforts.",
  109: "The small app became a lucrative business within two years.",
  110: "The law remained opaque to citizens without legal training.",
  111: "The new building was designed to resemble a traditional courtyard house.",
  112: "Local offices were subordinate to the national headquarters.",
  113: "The storm caused a transient loss of power across the city.",
  114: "The committee considered the proposal viable after reviewing the budget.",
  115: "Drivers used side roads to circumvent the flooded highway.",
  116: "The researcher found the company's explanation dubious.",
  117: "The efficacy of the treatment was tested in several hospitals.",
  118: "Residents prepared for the imminent arrival of the typhoon.",
  119: "Planting trees can mitigate the effects of urban heat.",
  120: "Fog began to obscure the lights along the harbor.",
  121: "The lawyer asked only questions pertinent to the case.",
  122: "Volunteers helped replenish food supplies at the shelter.",
  123: "The mayor's spending came under intense scrutiny.",
  124: "The error was too trivial to affect the final result.",
  125: "New evidence helped vindicate the scientist's controversial theory.",
  126: "Officials refused to withhold information from the public.",
  127: "The hero finally met his adversary at the city gate.",
  128: "The guards tried to coerce prisoners into signing false statements.",
  129: "Long periods of sleep deprivation can damage memory.",
  130: "The essay exposed the fallacy behind the politician's claim.",
  131: "The experiment was designed to test a simple hypothesis.",
  132: "Parents were indignant when the school canceled the program.",
  133: "The company created a strict hierarchy of managers and assistants.",
  134: "The disease can be lethal without early treatment.",
  135: "The old song filled the crowd with nostalgia.",
  136: "The school was chosen because of its proximity to the museum.",
  137: "Heavy rain began to saturate the fields by morning.",
  138: "The village stood at the threshold of major economic change.",
  139: "Smartphones have become ubiquitous in modern classrooms.",
  140: "Children are vulnerable to misinformation online.",
  141: "She felt ambivalent about leaving her hometown for college.",
  142: "The study compared demographic changes across three cities.",
  143: "The scandal could jeopardize the minister's career.",
  144: "The company faced years of litigation after the accident.",
  145: "Critics called the film mediocre despite its large budget.",
  146: "The program was created to nurture young artists.",
  147: "The hikers crossed a precarious bridge above the river.",
  148: "The decision had a ramification that no one expected.",
  149: "The documents helped substantiate the witness's account.",
  150: "The minister gave an unequivocal answer to the question.",
  151: "The newspaper uncovered a clandestine meeting between officials.",
  152: "A vitamin deficiency can cause fatigue and poor concentration.",
  153: "The small village became the epitome of sustainable living.",
  154: "He showed an inclination to solve problems through compromise.",
  155: "The smell of smoke continued to linger in the hallway.",
  156: "One positive test can negate months of careful preparation.",
  157: "The new model is faster than its predecessor.",
  158: "Researchers gathered data to refute the popular myth.",
  159: "The crowd gave a spontaneous cheer when the lights returned.",
  160: "The revolution caused a major upheaval in social life.",
  161: "The benevolent owner paid the workers during the shutdown.",
  162: "The speaker expressed contempt for corruption in public office.",
  163: "Several scientists agreed to endorse the climate statement.",
  164: "The family expressed gratitude to the rescue workers.",
  165: "The museum chose to juxtapose modern photographs with ancient maps.",
  166: "The heat made everyone feel lethargic by midafternoon.",
  167: "She had a penchant for collecting rare books.",
  168: "The country threatened to retaliate after the cyberattack.",
  169: "The exhausted soldiers refused to succumb to despair.",
  170: "The airline struggled during a turbulent year for tourism.",
  171: "Many doctors advocate regular exercise for older adults.",
  172: "The school had to curtail outdoor activities during the heat wave.",
  173: "The artist was known for his eccentric clothing and unusual methods.",
  174: "Researchers tried to formulate a new explanation for the pattern.",
  175: "The grant gave new impetus to the conservation project.",
  176: "A latent infection can remain unnoticed for years.",
  177: "The fire threatened to obliterate the historic archive.",
  178: "Students often procrastinate when an assignment feels overwhelming.",
  179: "The two leaders held substantive talks about border security.",
  180: "The editor shortened the verbose introduction.",
  181: "He developed an aversion to crowded trains after the accident.",
  182: "A long illness can debilitate even a healthy person.",
  183: "The campaign aims to eradicate malaria from the region.",
  184: "The novel can immerse readers in a completely different world.",
  185: "The river begins to meander through the valley below.",
  186: "The ostensible reason for the trip was a trade conference.",
  187: "The manager removed redundancy from the workflow.",
  188: "The contract will stipulate the exact delivery date.",
  189: "Great art can transcend national and historical boundaries.",
  190: "The stock market remained volatile throughout the week.",
  191: "The school used online lessons to augment classroom instruction.",
  192: "The governor's denouncement of violence was broadcast statewide.",
  193: "The drought may exacerbate food shortages in rural areas.",
  194: "War can impoverish families for generations.",
  195: "The merger led to consolidation in the telecommunications industry.",
  196: "The ceremony followed orthodox religious customs.",
  197: "The company protected its proprietary software from competitors.",
  198: "Only a remnant of the ancient wall remains today.",
  199: "The professor gave a brief synopsis of the novel before class.",
  200: "The nation made a unilateral decision to close the border.",
  201: "The guide tried to acquaint visitors with local customs.",
  202: "Many citizens blamed the delay on bureaucracy.",
  203: "The engine failed because combustion was incomplete.",
  204: "Excessive screen time can be detrimental to sleep.",
  205: "The new law sought to emancipate workers from unfair contracts.",
  206: "Engineers worked to fortify the seawall before the storm season.",
  207: "The gregarious student quickly made friends in the new school.",
  208: "The sample was nearly homogeneous after hours of mixing.",
  209: "The director became famous for an idiosyncratic visual style.",
  210: "The case fell outside the court's jurisdiction.",
  211: "The sculpture created a kinetic effect as the wind moved it.",
  212: "A luminous moon rose above the dark water.",
  213: "The teacher corrected a common misconception about evolution.",
  214: "Scientists use a precise nomenclature to classify species.",
  215: "Public opinion may oscillate during a long election campaign.",
  216: "The report mentioned only peripheral issues at the end.",
  217: "The cafe became the quintessential meeting place for young writers.",
  218: "The committee explained the rationale behind the new policy.",
  219: "The argument rested on a supposition that had never been proven.",
  220: "Her testimony changed the direction of the trial.",
  221: "The bridge has a utilitarian design rather than a decorative one.",
  222: "The feud grew into a vendetta that lasted for decades.",
  223: "The prime minister can wield considerable influence over the media.",
  224: "The DNA evidence helped exonerate the accused man.",
  225: "Many immigrants yearn for the neighborhoods they left behind.",
  226: "The word carries a negative connotation in political debate.",
  227: "New students often need time to assimilate into campus life.",
  228: "The two countries signed a bilateral trade agreement.",
  229: "The capricious weather made farming difficult that year.",
  230: "Workers began to dismantle the old railway station.",
  231: "The architect tried to envisage a city without traffic jams.",
  232: "Daily fluctuation in temperature affected the experiment.",
  233: "The empire maintained hegemony over its neighbors for centuries.",
  234: "Incessant noise from the factory disturbed nearby residents.",
  235: "The judge acted judiciously when reviewing the evidence.",
  236: "The champion was magnanimous in victory and praised his opponent.",
  237: "She remained nonchalant even after hearing the surprising news.",
  238: "The rescue team chose to persevere despite the freezing weather.",
  239: "The policy had a repercussion that affected small businesses.",
  240: "Society should not stigmatize people who ask for help.",
  241: "Her tenacity impressed everyone who watched the debate.",
  242: "Reliable data underpin every strong scientific argument.",
  243: "The mayor faced vehement criticism after the announcement.",
  244: "The court ruling became a watershed in civil rights history.",
  245: "Security footage helped corroborate the witness's story.",
  246: "The minister tried to dispel rumors about the hospital closure.",
  247: "A single photograph can encapsulate the mood of an era.",
  248: "The report described a flagrant violation of safety rules.",
  249: "An inadvertent error in the database delayed the shipment.",
  250: "Misinformation can proliferate quickly on social media."
};

const BOOKMARK_STORAGE_KEY = "word-test-for-is-bookmarks-v1";


const REACTION_ASSETS = {
  correct: [
    "Photo/Correct Answer/KakaoTalk_20260625_145833162.jpg",
    "Photo/Correct Answer/KakaoTalk_20260625_145833162_01.jpg",
    "Photo/Correct Answer/correct-03.jpg",
    "Photo/Correct Answer/correct-04.jpg"
  ],
  wrong: [
    "Photo/Wrong Answer/15392582_1172855_1953_org.jpg",
    "Photo/Wrong Answer/KakaoTalk_20260625_145833162_02.jpg",
    "Photo/Wrong Answer/KakaoTalk_20260625_145833162_03.jpg"
  ]
};

const reactionBags = { correct: [], wrong: [] };
const lastReactionAssets = { correct: "", wrong: "" };
const reactionPreloads = new Map();
let reactionTimer = 0;
let reactionSequence = 0;

const MODE_CONFIG = {
  exam: {
    eyebrow: "Mock Test",
    title: "모의고사 30개",
    description: "전체 단어장 랜덤 30개"
  },
  high: {
    eyebrow: "High School 250",
    title: "High School 250",
    description: "고등학교 필수 영단어"
  },
  teps: {
    eyebrow: "TEPS",
    title: "Teps 기출 문제집 어휘",
    description: "OCR TEPS 기출 답 PDF 추출 어휘"
  },
  request: {
    eyebrow: "Requested Words",
    title: "인서요청추가단어",
    description: "이미지 선지 571개"
  },
  bookmarks: {
    eyebrow: "Saved Words",
    title: "북마크",
    description: "별표로 저장한 단어"
  }
};

const highSchoolWords = words.map((entry) => ({
  ...entry,
  key: `high:${entry.id}`,
  source: "high",
  sourceLabel: "High School 250",
  example: EXAMPLE_SENTENCES[entry.id] || ""
}));

const requestWords = REQUEST_WORDS.trim().split("\n").map((line) => {
  const [id, word, meaningText, synonymText = ""] = line.split("|").map((part) => part.trim());
  return {
    id: Number(id),
    word,
    meanings: meaningText.split(",").map((part) => part.trim()),
    synonyms: synonymText.split(";").map((part) => part.trim()).filter(Boolean),
    key: `request:${id}`,
    source: "request",
    sourceLabel: "인서요청추가단어",
    example: ""
  };
});

const tepsWords = uniqueByWord((window.TEPS_WORDS || []).map((entry) => ({
  ...entry,
  key: `teps:${normalizeWord(entry.word)}`,
  source: "teps",
  sourceLabel: "TEPS 기출 어휘"
})));

const allWords = uniqueByWord([...highSchoolWords, ...tepsWords, ...requestWords]);

const state = {
  activeMode: "exam",
  sessionPool: [],
  order: [],
  currentPosition: 0,
  currentRound: null,
  attempt: 1,
  locked: false,
  score: 0,
  streak: 0,
  answered: 0,
  wrongOptionKeys: new Set()
};

const elements = {
  landingPage: document.querySelector("#landingPage"),
  appView: document.querySelector("#appView"),
  enterButton: document.querySelector("#enterButton"),
  modeEyebrow: document.querySelector("#modeEyebrow"),
  modeTitle: document.querySelector("#modeTitle"),
  tabButtons: [...document.querySelectorAll(".tab-button")],
  bookmarkPanel: document.querySelector("#bookmarkPanel"),
  bookmarkList: document.querySelector("#bookmarkList"),
  bookmarkQuizButton: document.querySelector("#bookmarkQuizButton"),
  emptyBookmarks: document.querySelector("#emptyBookmarks"),
  quizPanel: document.querySelector("#quizPanel"),
  progressText: document.querySelector("#progressText"),
  scoreText: document.querySelector("#scoreText"),
  streakText: document.querySelector("#streakText"),
  wordNumber: document.querySelector("#wordNumber"),
  wordText: document.querySelector("#wordText"),
  attemptText: document.querySelector("#attemptText"),
  bookmarkButton: document.querySelector("#bookmarkButton"),
  choices: document.querySelector("#choices"),
  feedback: document.querySelector("#feedback"),
  details: document.querySelector("#details"),
  mainMeaning: document.querySelector("#mainMeaning"),
  synonyms: document.querySelector("#synonyms"),
  exampleSentence: document.querySelector("#exampleSentence"),
  nextButton: document.querySelector("#nextButton"),
  restartButton: document.querySelector("#restartButton"),
  shuffleButton: document.querySelector("#shuffleButton"),
  reactionPop: document.querySelector("#reactionPop"),
  reactionImage: document.querySelector("#reactionImage")
};

preloadReactionAssets();

elements.enterButton.addEventListener("click", () => {
  elements.landingPage.hidden = true;
  elements.appView.hidden = false;
  startMode("exam");
});

elements.tabButtons.forEach((button) => {
  button.addEventListener("click", () => startMode(button.dataset.tab));
});

elements.bookmarkQuizButton.addEventListener("click", () => {
  const bookmarks = getBookmarkedWords();
  if (bookmarks.length > 0) {
    startQuiz("bookmarks", bookmarks);
  }
});

elements.bookmarkButton.addEventListener("click", toggleCurrentBookmark);
elements.nextButton.addEventListener("click", nextWord);
elements.restartButton.addEventListener("click", restart);
elements.shuffleButton.addEventListener("click", reshuffleFromHere);

function startMode(mode) {
  state.activeMode = mode;
  updateModeLabels(mode);
  updateTabs(mode);

  if (mode === "bookmarks") {
    renderBookmarks();
    elements.bookmarkPanel.hidden = false;
    elements.quizPanel.hidden = true;
    return;
  }

  elements.bookmarkPanel.hidden = true;
  elements.quizPanel.hidden = false;

  const poolByMode = {
    exam: shuffle(allWords).slice(0, 30),
    high: highSchoolWords,
    teps: tepsWords,
    request: requestWords
  };

  startQuiz(mode, poolByMode[mode] || allWords);
}

function startQuiz(mode, pool) {
  state.activeMode = mode;
  state.sessionPool = [...pool];
  state.order = shuffle(state.sessionPool.map((_, index) => index));
  state.currentPosition = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = 0;
  state.locked = false;
  state.wrongOptionKeys = new Set();

  elements.bookmarkPanel.hidden = mode !== "bookmarks";
  elements.quizPanel.hidden = false;
  updateModeLabels(mode);
  updateTabs(mode);
  renderRound();
}

function updateModeLabels(mode) {
  const config = MODE_CONFIG[mode] || MODE_CONFIG.exam;
  elements.modeEyebrow.textContent = config.eyebrow;
  elements.modeTitle.textContent = config.title;
}

function updateTabs(mode) {
  elements.tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === mode);
  });
}

function renderRound() {
  if (state.sessionPool.length === 0) {
    renderEmptyQuiz();
    return;
  }

  const entry = state.sessionPool[state.order[state.currentPosition]];
  const options = buildOptions(entry);

  state.currentRound = { entry, options };
  state.attempt = 1;
  state.locked = false;
  state.wrongOptionKeys = new Set();

  elements.progressText.textContent = `${state.currentPosition + 1} / ${state.sessionPool.length}`;
  elements.scoreText.textContent = String(state.score);
  elements.streakText.textContent = String(state.streak);
  elements.wordNumber.textContent = `${entry.sourceLabel} · No. ${entry.id}`;
  elements.wordText.textContent = entry.word;
  elements.attemptText.textContent = "첫 번째 선택";
  elements.feedback.textContent = "";
  elements.feedback.className = "feedback";
  elements.nextButton.disabled = true;
  elements.details.hidden = true;
  updateBookmarkButton(entry);

  elements.choices.innerHTML = "";
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.dataset.key = option.key;
    button.innerHTML = `
      <span class="choice-index">${index + 1}</span>
      <span class="choice-meaning">${escapeHtml(option.label)}</span>
    `;
    button.addEventListener("click", () => selectOption(option, button));
    elements.choices.append(button);
  });
}

function renderEmptyQuiz() {
  elements.progressText.textContent = "0 / 0";
  elements.scoreText.textContent = "0";
  elements.streakText.textContent = "0";
  elements.wordNumber.textContent = "No words";
  elements.wordText.textContent = "단어 없음";
  elements.attemptText.textContent = "북마크를 먼저 저장해 주세요";
  elements.bookmarkButton.disabled = true;
  elements.choices.innerHTML = "";
  elements.feedback.textContent = "";
  elements.details.hidden = true;
  elements.nextButton.disabled = true;
}

function selectOption(option, button) {
  if (state.locked || state.wrongOptionKeys.has(option.key)) return;

  const isCorrect = option.key === state.currentRound.entry.key;
  if (isCorrect) {
    button.classList.add("correct");
    showReaction("correct");
    finishRound(true);
    return;
  }

  button.classList.add("wrong");
  showReaction("wrong");
  button.disabled = true;
  state.wrongOptionKeys.add(option.key);

  if (state.attempt === 1) {
    state.attempt = 2;
    elements.attemptText.textContent = "두 번째 선택";
    elements.feedback.textContent = "한 번 더 고를 수 있어요.";
    elements.feedback.className = "feedback bad";
    return;
  }

  const correctButton = elements.choices.querySelector(`[data-key="${cssEscape(state.currentRound.entry.key)}"]`);
  correctButton?.classList.add("correct");
  finishRound(false);
}

function preloadReactionAssets() {
  Object.values(REACTION_ASSETS).flat().forEach((asset) => {
    const image = new Image();
    image.decoding = "async";
    image.src = encodeURI(asset);
    reactionPreloads.set(asset, image);
  });
}

function getNextReactionAsset(type) {
  const assets = REACTION_ASSETS[type] || [];
  if (assets.length === 0) return "";

  if (reactionBags[type].length === 0) {
    const nextBag = shuffle(assets);
    if (nextBag.length > 1 && nextBag[0] === lastReactionAssets[type]) {
      [nextBag[0], nextBag[1]] = [nextBag[1], nextBag[0]];
    }
    reactionBags[type] = nextBag;
  }

  const asset = reactionBags[type].shift();
  lastReactionAssets[type] = asset;
  return asset;
}

function showReaction(type) {
  const image = getNextReactionAsset(type);
  if (!elements.reactionPop || !elements.reactionImage || !image) return;

  const sequence = ++reactionSequence;
  window.clearTimeout(reactionTimer);
  elements.reactionPop.classList.remove("show", "correct", "wrong");
  elements.reactionPop.setAttribute("aria-hidden", "true");
  elements.reactionImage.onload = null;
  elements.reactionImage.onerror = null;

  let revealStarted = false;
  const reveal = () => {
    if (revealStarted || sequence !== reactionSequence) return;
    revealStarted = true;
    elements.reactionImage.onload = null;
    elements.reactionImage.onerror = null;

    const startAnimation = () => {
      if (sequence !== reactionSequence) return;
      elements.reactionPop.classList.remove("show", "correct", "wrong");
      void elements.reactionPop.offsetWidth;
      elements.reactionPop.setAttribute("aria-hidden", "false");
      elements.reactionPop.classList.add(type, "show");

      reactionTimer = window.setTimeout(() => {
        if (sequence !== reactionSequence) return;
        elements.reactionPop.classList.remove("show", "correct", "wrong");
        elements.reactionPop.setAttribute("aria-hidden", "true");
        elements.reactionImage.removeAttribute("src");
      }, 1050);
    };

    if (typeof elements.reactionImage.decode === "function") {
      elements.reactionImage.decode().catch(() => {}).finally(startAnimation);
    } else {
      startAnimation();
    }
  };

  elements.reactionImage.onload = reveal;
  elements.reactionImage.onerror = () => {
    if (sequence !== reactionSequence) return;
    elements.reactionPop.setAttribute("aria-hidden", "true");
    elements.reactionImage.removeAttribute("src");
  };
  elements.reactionImage.src = encodeURI(image);

  if (elements.reactionImage.complete && elements.reactionImage.naturalWidth > 0) {
    reveal();
  }
}

function finishRound(wasCorrect) {
  state.locked = true;
  state.answered += 1;
  elements.attemptText.textContent = "정답 확인";
  if (wasCorrect) {
    state.score += 1;
    state.streak += 1;
    elements.feedback.textContent = state.attempt === 1 ? "정답입니다." : "두 번째 기회에서 정답입니다.";
    elements.feedback.className = "feedback good";
  } else {
    state.streak = 0;
    elements.feedback.textContent = "정답을 확인했어요.";
    elements.feedback.className = "feedback bad";
  }

  elements.scoreText.textContent = String(state.score);
  elements.streakText.textContent = String(state.streak);
  elements.nextButton.disabled = false;
  disableRemainingChoices();
  revealDetails();
}

function disableRemainingChoices() {
  elements.choices.querySelectorAll(".choice-button").forEach((button) => {
    button.disabled = true;
  });
}

function revealDetails() {
  const entry = state.currentRound.entry;
  const example = buildExample(entry);
  const exampleBlock = elements.exampleSentence.closest(".detail-block");

  elements.mainMeaning.textContent = getMainMeaning(entry);
  renderChips(elements.synonyms, entry.synonyms);
  elements.exampleSentence.textContent = example;
  if (exampleBlock) {
    exampleBlock.hidden = example.length === 0;
  }
  elements.details.hidden = false;
}

function renderChips(container, values) {
  const cleanValues = (values || []).filter(Boolean);
  const block = container.closest(".detail-block");
  if (block) {
    block.hidden = cleanValues.length === 0;
  }

  container.innerHTML = "";
  cleanValues.forEach((value) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = value;
    container.append(chip);
  });
}

function buildOptions(entry) {
  const sourcePool = state.sessionPool.length >= 4 ? state.sessionPool : allWords;
  const correctMeaning = getMainMeaning(entry);
  const distractors = shuffle(uniqueByWord(sourcePool).filter((candidate) => {
    const meaning = getMainMeaning(candidate);
    return candidate.key !== entry.key && meaning !== correctMeaning && isMeaningUsable(meaning);
  }))
    .slice(0, 3)
    .map((candidate) => ({
      key: candidate.key,
      label: getMainMeaning(candidate)
    }));

  return shuffle([
    { key: entry.key, label: correctMeaning },
    ...distractors
  ]);
}

function getMainMeaning(entry) {
  return entry.meanings.slice(0, 2).join(", ");
}

function isMeaningUsable(meaning) {
  const text = String(meaning || "").trim();
  return text.length > 1 && !/[?\ufffd]/.test(text);
}

function buildExample(entry) {
  return entry.example || "";
}

function nextWord() {
  state.currentPosition += 1;
  if (state.currentPosition >= state.order.length) {
    state.currentPosition = 0;
    state.order = shuffle(state.sessionPool.map((_, index) => index));
  }
  renderRound();
}

function restart() {
  if (state.activeMode === "exam") {
    startQuiz("exam", shuffle(allWords).slice(0, 30));
    return;
  }
  if (state.activeMode === "bookmarks") {
    startQuiz("bookmarks", getBookmarkedWords());
    return;
  }

  startMode(state.activeMode);
}

function reshuffleFromHere() {
  if (state.sessionPool.length === 0) return;
  const currentIndex = state.order[state.currentPosition];
  const remaining = state.order.filter((index) => index !== currentIndex);
  state.order = [currentIndex, ...shuffle(remaining)];
  renderRound();
}

function toggleCurrentBookmark() {
  const entry = state.currentRound?.entry;
  if (!entry) return;

  const bookmarks = getBookmarks();
  if (bookmarks[entry.key]) {
    delete bookmarks[entry.key];
  } else {
    bookmarks[entry.key] = {
      key: entry.key,
      id: entry.id,
      source: entry.source,
      sourceLabel: entry.sourceLabel,
      word: entry.word,
      meanings: entry.meanings,
      synonyms: entry.synonyms,
      example: entry.example
    };
  }

  saveBookmarks(bookmarks);
  updateBookmarkButton(entry);
  if (state.activeMode === "bookmarks") {
    renderBookmarks();
  }
}

function updateBookmarkButton(entry) {
  const saved = Boolean(getBookmarks()[entry.key]);
  elements.bookmarkButton.disabled = false;
  elements.bookmarkButton.textContent = saved ? "★" : "☆";
  elements.bookmarkButton.classList.toggle("saved", saved);
  elements.bookmarkButton.setAttribute("aria-label", saved ? "북마크 해제" : "북마크 저장");
  elements.bookmarkButton.title = saved ? "북마크 해제" : "북마크 저장";
}

function renderBookmarks() {
  const bookmarks = getBookmarkedWords();
  elements.bookmarkList.innerHTML = "";
  elements.emptyBookmarks.hidden = bookmarks.length > 0;
  elements.bookmarkQuizButton.disabled = bookmarks.length === 0;

  bookmarks.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "bookmark-card";
    card.innerHTML = `
      <strong>${escapeHtml(entry.word)}</strong>
      <span>${escapeHtml(entry.sourceLabel)}</span>
      <p>${escapeHtml(getMainMeaning(entry))}</p>
    `;
    elements.bookmarkList.append(card);
  });
}

function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem(BOOKMARK_STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveBookmarks(bookmarks) {
  localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(bookmarks));
}

function getBookmarkedWords() {
  return Object.values(getBookmarks()).sort((a, b) => a.word.localeCompare(b.word));
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[nextIndex]] = [copy[nextIndex], copy[index]];
  }
  return copy;
}

function uniqueByWord(entries) {
  const seen = new Set();
  return entries.filter((entry) => {
    const key = normalizeWord(entry.word);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function normalizeWord(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function cssEscape(value) {
  if (window.CSS?.escape) return CSS.escape(value);
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
