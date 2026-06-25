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
  example: EXAMPLE_SENTENCES[entry.id] || `The class discussed ${entry.word} during a short reading activity.`
}));

const tepsWords = uniqueByWord((window.TEPS_WORDS || []).map((entry) => ({
  ...entry,
  key: `teps:${normalizeWord(entry.word)}`,
  source: "teps",
  sourceLabel: "TEPS 기출 어휘"
})));

const allWords = uniqueByWord([...highSchoolWords, ...tepsWords]);

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
  shuffleButton: document.querySelector("#shuffleButton")
};

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
    teps: tepsWords
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
    finishRound(true);
    return;
  }

  button.classList.add("wrong");
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
  elements.mainMeaning.textContent = getMainMeaning(entry);
  renderChips(elements.synonyms, entry.synonyms);
  elements.exampleSentence.textContent = buildExample(entry);
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
  const distractors = shuffle(uniqueByWord(sourcePool).filter((candidate) =>
    candidate.key !== entry.key && getMainMeaning(candidate) !== getMainMeaning(entry)
  ))
    .slice(0, 3)
    .map((candidate) => ({
      key: candidate.key,
      label: getMainMeaning(candidate)
    }));

  return shuffle([
    { key: entry.key, label: getMainMeaning(entry) },
    ...distractors
  ]);
}

function getMainMeaning(entry) {
  return entry.meanings.slice(0, 2).join(", ");
}

function buildExample(entry) {
  return entry.example || `The class discussed ${entry.word} during a short reading activity.`;
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
