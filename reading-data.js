(() => {
  const labels = { set1: "SET 1", set2: "SET 2", bonus: "추가 문제" };
  const categoryFor = (number) => number <= 8 ? "blank" : number <= 10 ? "connector" : number <= 12 ? "outlier" : number <= 16 ? "topic" : number <= 22 ? "correct" : "inference";
  const q = (set, number, passage, question, choices, answer, explanation) => ({
    id: `${set}-${number}`, set, setLabel: labels[set], number,
    category: categoryFor(number), passage: passage.trim(), question, choices, answer, explanation
  });

  window.READING_QUESTIONS = [
    q("set1", 1, `Dear Ms. Roy,

Greenhill University is sending you this email to inform you that _____. We thank you for considering our institution. You will be informed via email of our final admissions decision no later than March 31. If you have any questions, please feel free to contact us. For reference, your application number is 50078.

Greenhill University Admissions`,
      "Choose the option that best completes the passage.",
      ["your application has been received", "you have been accepted into our program", "we have extended our application deadline", "we have officially begun accepting applications"], 0,
      "최종 입학 결정은 추후 따로 통보한다고 했으므로 현재 메일은 지원서 접수 사실을 알리는 내용이다."),

    q("set1", 2, `The chocolate makers at Choc-O-Chunk are delighted to _____! For years, fans of our Megachunk bar have been asking for an even more extreme chocolate experience. Now, Choc-O-Chunk is ready to deliver with our Megachunk X! This bar uses the same classic ingredients as the original but with double the thickness. Megachunk X makes even our chunkiest bars look thin by comparison. Try one today!`,
      "Choose the option that best completes the passage.",
      ["present our thickest bar to date", "rerelease one of our previous bars", "announce a bite-sized chocolate bar", "introduce a new ingredient to our bar"], 0,
      "기존 제품보다 두 배 두껍고 다른 제품도 얇아 보이게 한다고 했으므로 역대 가장 두꺼운 바를 소개한다는 내용이다."),

    q("set1", 3, `Certain organs in the human body are considered vestigial, meaning they once served a purpose but are now unessential. For example, a person can survive seemingly unharmed even if the spleen is removed. However, recent research has uncovered that, far from being useless, the spleen actually plays a key role in the immune system. Other supposedly expendable organs are likewise turning out to have valuable functions; the appendix, for instance, helps maintain healthy gut bacteria. These discoveries show that _____.`,
      "Choose the option that best completes the passage.",
      ["the human body has multiple unnecessary organs", "several organs in the body fill unexplainable roles", "these so-called vestigial organs remain for a reason", "removing vestigial organs helps the body to function"], 2,
      "쓸모없다고 여긴 비장과 충수에도 중요한 기능이 있으므로 이 기관들이 남아 있는 데에는 이유가 있다는 결론이 맞다."),

    q("set1", 4, `A few months ago, my husband and I felt that it was time to send our son to preschool. We first looked into a private school at the recommendation of my sister. The school itself was great, but the tuition fees were quite high. So we took a tour of a public school, which costs considerably less, and we were suitably impressed. We went home and thought about the pros and cons of each school. Ultimately, we decided that _____. Seeing that our son loves his school, we have never regretted our choice. We are also happy to have started a college fund with the money we saved.`,
      "Choose the option that best completes the passage.",
      ["it would be best to take my sister's advice", "it was too early to enroll our son in preschool", "the public school did not meet our expectations", "the private school's expense outweighed its benefits"], 3,
      "저렴한 공립학교에 만족했고 절약한 돈으로 대학 자금도 마련했으므로 사립학교의 높은 비용이 장점보다 컸다는 판단이다."),

    q("set1", 5, `A growing number of financial commentators have been sounding alarms about the rate of retirement savings in the US, which they say could lead to disastrous consequences down the road. Yet their projections do not always square with reality. In tightened financial circumstances, retirees often adapt by cutting back on spending. They also tend to leave their savings intact and simply withdraw what is earned in interest. This prevents larger withdrawals even in cases where the sum in the bank is ample. When looking at these tendencies, it seems as though financial commentators _____.`,
      "Choose the option that best completes the passage.",
      ["misjudge the difficulty of saving for retirement", "do not fully comprehend people's desire to retire", "expect retirees to drastically change their spending habits", "are underestimating people's ability to live within their means"], 3,
      "은퇴자들은 지출을 줄이고 원금을 보존하므로 논평가들이 이들의 생활비 조절 능력을 과소평가한다는 결론이 적절하다."),

    q("set1", 6, `The government is pleased to announce that an agreement has been reached on the Unionville Correctional Facility. Since the company originally hired to renovate the facility went bankrupt, many of the subcontractors working on the site have not received full payment for their services. As part of today's agreement between the government, banks, and a new builder, the renovations will resume and the subcontractors will receive what they are owed. We are pleased to have reached an agreement which _____.`,
      "Choose the option that best completes the passage.",
      ["rewards workers' loyalty with bonus package options", "settles all past payments while planning for the future", "holds the old builder accountable for the failed project", "shuts down the project in a fair way for all those involved"], 1,
      "미지급 대금을 지급하고 새 시공사와 공사를 재개하므로 과거의 지급 문제와 향후 공사를 함께 해결한다."),

    q("set1", 7, `Bluesky Media Corporation remains in dire straits financially despite _____. Compared with last quarter, operating costs fell from $95 million to $85 million, while revenue jumped roughly 10% from $1.66 billion to $1.81 billion. Bluesky said that this increase could be attributed to its growing television viewers. But even with this boost, Bluesky has had difficulty staying afloat. With plummeting film revenue and minimal profits from its online ventures, its dramatic growth in this single area has been the company's only saving grace.`,
      "Choose the option that best completes the passage.",
      ["its move to offer streaming services", "a revenue surge from TV productions", "an unprecedented spike in film revenue", "its recent acquisition of a major competitor"], 1,
      "TV 시청자 증가로 매출이 늘었지만 여전히 어렵다고 했으므로 TV 제작 부문의 매출 급증이 빈칸에 맞다."),

    q("set1", 8, `Disagreements surrounding the concept of free speech may be due to the fact that _____. The oldest concept of free speech, isegoria, can be traced to fifth-century Athens. While commonly translated as “freedom of speech,” the word literally means “equal speech in public.” In practice, this provided all citizens the right to debate publicly during assemblies. A later concept, parrhesia, is also commonly translated as “freedom of speech,” but it connotes speaking honestly and even offensively in non-formal settings. Today, we often wrestle with these contrasting concepts when discussing the right to free speech.`,
      "Choose the option that best completes the passage.",
      ["the phrase evolved in ancient Greek society", "public and private speech have subtle differences", "its role in ancient Greece is largely misunderstood", "it originated from two fundamentally distinct ideas"], 3,
      "표현의 자유가 공적 발언의 평등과 솔직한 비공식 발언이라는 서로 다른 두 개념에서 출발했다고 설명한다."),

    q("set1", 9, `Although most of Antarctica is covered in ice and snow, its Dry Valleys are an exception. The valleys are protected from sea ice by nearby mountains and are too far inland to receive much moisture from the ocean's waters. They also experience powerful winds that evaporate all water, ice, and snow. This leads to extremely low humidity and a complete lack of precipitation. _____, Antarctica's Dry Valleys are believed to be the driest place on Earth.`,
      "Choose the best connector.", ["In fact", "Similarly", "Regardless", "For instance"], 0,
      "앞의 건조한 조건을 종합해 실제로 가장 건조한 곳이라는 강조 결론을 제시하므로 In fact가 적절하다."),

    q("set1", 10, `Research indicates that highly confident people are more likely to become leaders. This is in part because people who lack confidence are less inclined to pursue, or feel secure in, leadership positions. _____, leaders actually perform better when they underestimate their own ability. Self-doubt seems to foster greater deliberation, preventing leaders from taking unnecessary risks.`,
      "Choose the best connector.", ["Moreover", "To be sure", "Nonetheless", "Put another way"], 2,
      "자신감이 지도자가 되는 데 유리하다는 앞 내용과 자기 의심이 수행에는 유리하다는 뒤 내용이 대조되므로 Nonetheless가 맞다."),

    q("set1", 11, `Multitasking may make you feel efficient, but experts warn that it can actually decrease your productivity.`,
      "Identify the sentence that does NOT belong.",
      ["This is because our brains lack the capacity to perform many high-level cognitive functions at the same time.", "When we attempt to multitask, our brains are actually switching back and forth from one task to the next.", "These shifts of focus take time and repetition to be restored, slowing down our work.", "Also, some tasks, such as listening to music, do not significantly interrupt our neural pathways."], 3,
      "앞의 문장들은 멀티태스킹이 집중 전환을 일으켜 생산성을 낮춘다는 흐름이다. 음악처럼 방해가 적은 과업의 예외는 중심 흐름에서 벗어난다."),

    q("set1", 12, `Glendale County's new mandatory school uniform policy has been met with a backlash from parents and teachers alike.`,
      "Identify the sentence that does NOT belong.",
      ["Parents are worried that this could be a needless expense which will also upset their children.", "Teachers are concerned about enforcement, arguing that policing student attire will be a burden.", "Indeed, studies have shown that students clad in conservatively designed uniforms behave better.", "Adding to the discontent has been the school board's failure to inform the public prior to voting."], 2,
      "부모와 교사의 반발 이유를 나열하는 글에서 교복의 긍정적 효과를 말하는 문장은 흐름과 맞지 않는다."),
    q("set1", 13, `Recently, new technologies have been developed that allow bees to deliver pesticides to crops. The idea is simple: First, pesticide powder is placed inside a beehive. Then, bees coated with the powder fly to various plants, spreading it as they go. Crops ranging from blueberries to bell peppers can be protected through this technique. But the method is only recommended for use inside greenhouses, since it offers little control over where pesticides are spread.`,
      "What is the passage mainly about?",
      ["The effect of pesticides on bee populations", "The various methods of applying pesticides", "The advantages of natural pesticide delivery", "The use of bees to deliver pesticides to crops"], 3,
      "글 전체가 벌에 살충제 가루를 묻혀 작물에 전달하는 기술의 방식과 한계를 설명하므로 벌을 이용한 살충제 전달이 주제이다."),

    q("set1", 14, `MEMO
Subject: Dress Code Policy

Westfield Capital is modifying its dress code. Currently, the number of dress code regulations for female employees exceeds those for male employees. We feel that this does not reflect our commitment to equality. Internal regulations have therefore been updated to remove these additional requirements, such as the one regarding high heels.

If you have any questions regarding what is appropriate, please email HR Director Shauna Lee at s.lee@westcap.com.`,
      "What is mainly being announced?",
      ["Revisions to the dress code for women", "Changes to make the dress code less casual", "New consequences for dress code violations", "Additional dress code requirements for males"], 0,
      "여성에게만 더 많았던 규정을 삭제해 복장 규정을 평등하게 바꾼다는 공지이므로 여성 복장 규정의 개정이 핵심이다."),

    q("set1", 15, `Early pirates were able to thrive in the rocky coastlines of the eastern Mediterranean. The shore's hidden coves allowed pirates to launch ambushes on coastal trade routes. Since the coastal soil was rocky, it was unsuited to agriculture, so most coastal residents fished for their living. When these poor fishermen skilled at navigating local waters looked out and saw rich merchant vessels passing by, it is easy to imagine why they might have been tempted to turn to piracy and improve their lot in life.`,
      "What is the passage mainly about?",
      ["The navigational skills of Mediterranean pirates", "The raiding tactics used by Mediterranean pirates", "The conditions giving rise to Mediterranean piracy", "The trade between Mediterranean locals and pirates"], 2,
      "숨은 만, 척박한 토지, 가난한 어부, 부유한 상선이라는 조건들이 해적 행위의 발생 배경이 되었음을 설명한다."),

    q("set1", 16, `Research has shown that teachers hired in the US during the 2008 economic recession improved students' academic performance more effectively than those hired at other times. This is less surprising than it seems. When the economy falters, many highly capable and educated people lack job opportunities. In this case, these people, seeking positions offering competitive pay in an otherwise unstable time, appear to have turned to vacancies in the education sector. This effect was bolstered by the relative lack of high paying positions in other sectors during the recession.`,
      "What is the writer mainly saying about the impact of the economic crisis on US education?",
      ["A tough job market brought competent people into teaching.", "Many people went back to school to gain a competitive edge.", "The financial crisis encouraged more investment in education.", "Higher standards for new teachers improved teaching quality."], 0,
      "불황으로 다른 분야의 좋은 일자리가 줄면서 유능한 사람들이 교직으로 이동했고 그 결과 학생 성과가 향상되었다."),

    q("set1", 17, `NOTICE OF PUBLIC AUCTION

The City of Hillside is excited to announce a public auction to benefit the city council. The auction's featured items are two used police motorcycles, one Speed Star and one Motor-X, both well maintained. The vehicles will be on display at Central Police Station on January 31, and the auction will take place on February 1, at the city courthouse. Stop by the station to see the motorcycles along with the other lots up for auction.

The City of Hillside`,
      "Which of the following is correct according to the announcement?",
      ["The auction's proceeds go directly to the police department.", "The viewing and auction are being held at separate places.", "The auction will be held a week from the public viewing.", "The motorcycles are the only items being auctioned off."], 1,
      "공개 관람은 경찰서에서, 경매는 시 법원에서 열리므로 두 행사는 서로 다른 장소에서 진행된다."),

    q("set1", 18, `In the early twentieth century, a single gray wolf was responsible for the death of around $25,000 worth of livestock—the equivalent of about $300,000 today—over a ten-year period. It was nicknamed Custer Wolf, after the city near which it wreaked havoc. A bounty on the wolf rose steadily to $500, but the creature proved elusive; one man tracked it unsuccessfully for five years. It was eventually shot by experienced federal hunter H. P. Williams after a seven-month hunt. Locals were surprised to learn that the supposed “enormous beast” was of a relatively normal size and weight.`,
      "Which of the following is correct about Custer Wolf?",
      ["It was named after the hunter who killed it.", "The bounty placed on it was first set at $500.", "H. P. Williams tracked it for about five years.", "It was no larger than a standard gray wolf."], 3,
      "거대한 괴물일 것이라는 예상과 달리 실제로는 정상적인 크기와 무게였으므로 표준 회색늑대보다 크지 않았다는 진술이 맞다."),

    q("set1", 19, `THE FUTURE OF BATTERY POWER

BE Electronics has announced a new technology that will allow smartphones to charge five times faster. The secret is graphene, a form of carbon which can convey electricity 140 times faster than silicon does. Graphene batteries will reduce charging times from one hour to 12 minutes and have a range of other benefits. They can boost the battery capacity of smartphones by as much as 45% and remain stable at up to 60°C, potentially making them useful in future electric vehicles. The company recently applied to patent its new technology.`,
      "Which of the following is NOT stated as a benefit of graphene?",
      ["It can charge smartphones in as little as 12 minutes.", "It can extend smartphone battery capacity by up to 45%.", "It can maintain stability at temperatures as high as 60°C.", "It can transfer electricity five times faster than silicon does."], 3,
      "그래핀은 실리콘보다 전기를 140배 빠르게 전달한다. 5배는 스마트폰 충전 속도에 관한 수치이므로 마지막 선택지는 본문과 다르다."),

    q("set1", 20, `In 1928, neuroscientist Santiago Ramón y Cajal declared that neurogenesis—the birth of new neurons—was impossible in adult human brains. His findings went unchallenged for decades until Fernando Nottebohm revealed evidence of newly created neurons in the brains of adult birds. This spurred new studies demonstrating neurogenesis in adult cats, mice, and other animals, overturning Cajal's seemingly outdated findings. But common wisdom may be shifting once again; recent research by Arturo Alvarez-Buylla found no new neurons in the hippocampus region of brains from live or deceased adult humans. His findings remain contested, but time will eventually settle this debate.`,
      "Which of the following is correct according to the passage?",
      ["Cajal's research was never accepted by the scientific community.", "Nottebohm challenged Cajal's theory through human study.", "Alvarez-Buylla's research supports Cajal's original findings.", "Alvarez-Buylla found evidence of neurogenesis only in live humans."], 2,
      "Alvarez-Buylla는 성인 인간의 뇌에서 새 뉴런을 찾지 못했으므로 성인 인간에게 신경 발생이 불가능하다는 Cajal의 원래 주장과 같은 방향이다."),

    q("set1", 21, `FILMING NOTICE

Lowell University campus will serve as a filming location from Monday, May 13 to Wednesday, May 15. As a result, some parking restrictions will be in place. Beginning Sunday evening, May 12, no parking will be allowed on University Avenue. Loading docks in Reynolds Club, Mandell Hall, and Bartlett Hall will remain accessible. Traffic will still be able to flow freely along the street at all hours, and parking will be permitted once again on the evening of May 15, when filming ends.`,
      "Which of the following is correct according to the announcement?",
      ["Parking restrictions on campus will start on May 13.", "University Avenue will be closed to traffic during filming.", "Loading trucks will have no access to Mandell Hall.", "Parking restrictions will be lifted on Wednesday."], 3,
      "촬영이 끝나는 5월 15일 수요일 저녁부터 다시 주차가 허용되므로 수요일에 주차 제한이 해제된다."),

    q("set1", 22, `Whether they play the games themselves or just watch, many young Americans enjoy online gaming. Indeed, a survey recently found that 73% of Americans between ages 14 and 21 had played or watched video games online in the previous year. Among them, 59% reported having played games, while 58% said they had watched online streams of games, and 45% said they had both played and watched. Online gaming is popular among both genders; nine out of ten young males play or watch online video games, along with more than half of young females.`,
      "What did the survey reveal about Americans aged 14 to 21?",
      ["Online gaming is almost equally popular among males and females.", "More than half of females neither play nor watch online video games.", "Nearly three-quarters of them either play or watch online video games.", "Almost half of them have watched other people playing online video games."], 2,
      "14~21세의 73%가 온라인 게임을 하거나 시청했다고 했으므로 거의 4분의 3이라는 진술이 맞다."),

    q("set1", 23, `When I landed my first leading role in a romantic comedy, I was ecstatic. The movie was a success, and it led to a string of films. But soon I realized that my big break had actually been a curse. Movie directors pegged me as the romantic comedy guy and never took me seriously. I was desperate to reinvent myself. I eventually turned to the stage, where I could demonstrate my acting ability. I never looked back and am happier than ever.`,
      "What can be inferred about the writer from the passage?",
      ["He was unable to match the success of his first movie.", "He had a hard time adjusting to sudden fame initially.", "He was mostly offered similar types of roles in movies.", "He plans to transition back into acting in romantic comedies."], 2,
      "감독들이 그를 로맨틱 코미디 배우로만 보았으므로 영화에서는 비슷한 유형의 역할만 제안받았음을 추론할 수 있다."),

    q("set1", 24, `Some believe that meat grown using cellular agriculture (CA)—the practice of growing animal products from cell cultures instead of livestock—is the food of the future. But is CA the healthy and environmentally friendly solution it is made out to be? Lab-grown meat will simply enable our habit of excessive meat consumption. Advocates tout the health benefits of CA over ordinary meat, but they fail to mention the risk that overconsumption of any kind of animal-based protein entails. Furthermore, some studies suggest that the environmental impact of large-scale factory-grown meat production would not be so different from that of current meat production.`,
      "Which statement would the speaker most likely agree with?",
      ["It is infeasible to use CA to mass-produce meat.", "Proponents of CA are overselling its actual benefits.", "Meat consumption trends make CA unlikely to catch on.", "CA poses greater health risks than traditional agriculture does."], 1,
      "글쓴이는 건강·환경상의 이점이 과장되었고 과도한 육류 소비 문제도 해결하지 못한다고 비판한다."),
    q("set2", 1, `Attention Staff:

After carefully considering employees' suggestions, management has decided to _____. Starting next month, all staff members will be allowed to complete their 8 hours of daily work at any time between 6 a.m. and 10 p.m. Employees should clock in and out daily using the office communication system. We hope that this change pleases our staff, especially those who have been asking for a less rigid work schedule.

Tremblay Advertising`,
      "Choose the option that best completes the passage.",
      ["push back the required starting time", "reduce the number of working hours", "change the office hours for some staff", "grant employees flexible working hours"], 3,
      "직원들이 오전 6시부터 오후 10시 사이 원하는 시간에 8시간을 채울 수 있으므로 유연 근무 시간을 허용한다는 내용이다."),

    q("set2", 2, `When it comes to raising successful children, many parents make the same mistake. They praise their children for successes but ignore the hard work required for such outcomes. As children will inevitably fail from time to time, it is their effort that truly deserves praise. By shifting the focus of praise, adults can reward children for the dedication that will set them up for more consistent and lasting future successes. In short, parents should always try to _____.`,
      "Choose the option that best completes the passage.",
      ["highlight even minor accomplishments", "recognize effort more than achievement", "reserve praise for truly exceptional work", "express joy about their children's success"], 1,
      "결과보다 그 결과를 만든 노력과 헌신을 칭찬해야 한다고 했으므로 성취보다 노력을 인정해야 한다."),

    q("set2", 3, `After the recent election, there was an unusual show of unity between Liberals and Conservatives on the issue of infrastructure. Leaders from both parties called for concerted action to repair crumbling roads, bridges, and dams. However, progress on an infrastructure spending bill has been delayed by a major issue. Conservatives want to incentivize private sector investment by offering tax credits and entering public-private partnerships. Meanwhile, Liberals are insisting that the government cover the cost by raising tax revenues or increasing deficit spending. Some fear that work may never actually start because of _____.`,
      "Choose the option that best completes the passage.",
      ["serious conflicts within both parties", "disagreement over funding methods", "unexpected damage to infrastructure", "disputes about which projects to fund"], 1,
      "양당은 보수 필요성에는 동의하지만 민간 투자와 정부 재정이라는 자금 조달 방식에서 충돌한다."),

    q("set2", 4, `To Mega Burgers:

We applaud your decision announced six months ago to eventually cease using beef from producers that feed cattle antibiotics. However, you did not provide a deadline by which you would meet this commitment and have made no publicly visible progress toward your goal. We believe that a clearer agenda would reassure customers who feel strongly about this issue. We are therefore asking that you _____.

Dianne Silverman
Policy Director, Friends of Our Planet`,
      "Choose the option that best completes the passage.",
      ["provide a complete list of products containing antibiotics", "define your stance on using antibiotics in beef production", "release a precise timeline for moving to antibiotic-free beef", "reverse your policy on the use of meat containing antibiotics"], 2,
      "중단 약속은 있었지만 마감 시점과 진행 상황이 없다고 지적하므로 구체적인 전환 일정을 공개하라는 요구가 맞다."),

    q("set2", 5, `Evidence shows that the dinosaurs went extinct after a massive asteroid slammed into Earth approximately 66 million years ago. Recently, some scientists have hypothesized that the impact was exceptionally devastating in part because of _____. They note that the area around the crater in present-day Mexico is rich in hydrocarbons and sulfurous materials. When the asteroid hit, the hydrocarbons blasted into the atmosphere would have blocked sunlight and disrupted photosynthesis. At the same time, the sulfurous materials would have triggered acid rain, upsetting marine ecosystems. The effects might have been far less destructive had the asteroid struck elsewhere.`,
      "Choose the option that best completes the passage.",
      ["the composition of the ground at the crash site", "atmospheric conditions near the collision site", "the tremendous speed of the asteroid upon impact", "the types of materials contained within the asteroid"], 0,
      "충돌 지점 주변의 탄화수소와 황 성분이 햇빛 차단과 산성비를 일으켰으므로 피해 규모는 충돌 지점의 지질 구성과 관련된다."),

    q("set2", 6, `For years, doctors' first impulse when treating patients with lower back pain was to reach for the prescription pad. Recently, however, the American College of Physicians released updated guidelines recommending that doctors explore various treatment options before prescribing medications. The guidelines advise patients to avoid painkillers, muscle relaxants, and anti-inflammatory medications until they have tried treatments such as acupuncture and physiotherapy. These guidelines represent a _____.`,
      "Choose the option that best completes the passage.",
      ["shift toward medicines not requiring a prescription", "renewed attempt to provide advanced medical care", "retreat from medications as the first line of treatment", "growing reliance on physicians for back pain therapies"], 2,
      "새 지침은 약을 처방하기 전에 침술과 물리치료를 먼저 시도하라고 하므로 약물을 첫 치료 수단으로 삼던 관행에서 물러난 것이다."),

    q("set2", 7, `Wembly Airlines is currently in discussions with the manufacturer of our fleet of aircraft to _____. Three recently purchased jumbo jets have been grounded for repairs because of faulty batteries. We have had to cancel flights, rebook customers on other airlines, or offer full refunds. This resulted in significant expenditures that we believe are the responsibility of the plane maker. While an agreement has not yet been reached, talks have been productive.`,
      "Choose the option that best completes the passage.",
      ["negotiate the price to replace faulty batteries", "determine the cause of a battery malfunction", "recoup costs incurred due to defective batteries", "provide stranded passengers with compensation"], 2,
      "결함 배터리 때문에 발생한 취소·재예약·환불 비용을 제작사 책임으로 보므로 그 비용을 돌려받기 위한 협상이다."),

    q("set2", 8, `Many of the world's super-rich people park a large chunk of their assets in offshore tax havens, which allow people to pay little or no taxes. Because the wealthy can conceal ownership of assets there, it is difficult to estimate their actual net worth. Without this information, economists cannot easily assess the true size of the gulf between the haves and have-nots. This is why offshore tax havens _____.`,
      "Choose the option that best completes the passage.",
      ["compel wealthy people to relocate overseas", "expose the unfair advantages of rich people", "mask the true extent of economic inequality", "use international tax policies to attract wealth"], 2,
      "조세 피난처는 부유층의 실제 자산을 숨겨 빈부 격차의 정확한 규모를 파악하기 어렵게 한다."),

    q("set2", 9, `Certain groups of chimpanzees have been observed in the wild using tools in unique ways. For instance, chimpanzees in the Congo travel with sticks of two different lengths to collect ants. _____, chimps in Gabon prepare up to five different tools in advance to collect honey. These findings question the belief that humans are the only species capable of complex, pre-planned tool use.`,
      "Choose the best connector.", ["Similarly", "Generally", "Specifically", "Alternatively"], 0,
      "콩고 침팬지의 사례에 이어 가봉 침팬지의 유사한 도구 사용 사례를 덧붙이므로 Similarly가 적절하다."),

    q("set2", 10, `Psychological studies show that people make false statements with surprising frequency. While men and women make a roughly equal number of false statements, they do so for distinct reasons. Women tend to do so to make their conversation partner more comfortable. _____, men often do so to enhance their personal image in the eyes of their conversation partner.`,
      "Choose the best connector.", ["Likewise", "Conversely", "Accordingly", "Furthermore"], 1,
      "여성과 남성이 거짓말하는 서로 다른 이유를 대조하므로 Conversely가 맞다."),

    q("set2", 11, `Several factors contributed to making the 1666 Great Fire of London incredibly destructive.`,
      "Identify the sentence that does NOT belong.",
      ["The fire could have caused greater damage had the Thames River not prevented it from moving southward.", "At that time, buildings in the city were made of wood and were covered in highly flammable pitch.", "Additionally, most buildings were tightly packed together, which allowed the blaze to spread easily.", "A strong wind also facilitated the fire's rapid spread by pushing its flames and cinders westward."], 0,
      "목재 건물, 가연성 피치, 밀집 배치, 강풍은 화재 확산 원인이다. 강이 남쪽 확산을 막았다는 문장은 피해를 제한한 요인이다."),

    q("set2", 12, `The American author William S. Burroughs popularized an innovative method of composing novels.`,
      "Identify the sentence that does NOT belong.",
      ["He took several manuscripts that he had previously written using more typical novelistic techniques.", "Then, he sliced these up into sections and reorganized them in a manner similar to creating a collage.", "He was often dogged by accusations of obscenity, however, due to the contents of many of his works.", "He believed that this random juxtaposition of narrative elements revealed new depths in literature."], 2,
      "나머지 문장들은 원고를 잘라 재배열하는 작법과 그 목적을 설명한다. 외설성 논란은 작법 과정과 관계가 없다."),
    q("set2", 13, `To Westside Deli Customers:

As the year comes to an end, we'd like to thank our customers, suppliers, and neighbors for their support. After five wonderful years, we're saddened to say that Westside Deli is going out of business. Our last day in business will be April 1. It was a privilege to serve our home-cooked meals to this community. We'll be having a final send-off soon. Stay tuned.

Jim Harris
Proprietor, Westside Deli`,
      "What is mainly being announced about Westside Deli?", ["It is closing.", "It is relocating.", "It is reopening.", "It is having a party."], 0,
      "going out of business와 마지막 영업일을 직접 언급하므로 가게 폐업을 알리는 공지이다."),

    q("set2", 14, `Many people say that it's important to separate personal time from work time to maintain work-life balance. To me, this claim has always been hard to understand. Am I going to ignore an urgent text message from a friend just because I'm at the office? No. At the same time, I often have my best ideas for work while jogging in the evening. These two worlds can't be kept totally separate—and trying to keep them apart isn't a path to happiness.`,
      "What is the writer mainly saying?",
      ["He is trying to achieve greater work-life balance.", "His success is due to sacrifices in his personal life.", "His work frequently interferes with his personal life.", "He is inclined to let his work and personal life overlap."], 3,
      "개인 생활과 일을 완전히 분리할 수 없고 굳이 나누는 것이 행복의 길도 아니라고 보므로 두 영역의 중첩을 받아들이는 입장이다."),

    q("set2", 15, `TREASURE TROVE OF ARTWORKS FOUND

Members of the cash-strapped Summerville School Board were delighted when a collection of 19th-century paintings was discovered in a school storage room. Paintings by these celebrated local artists have fetched large sums at auction before. The superintendent has ruled out putting the paintings up for sale, but she is looking at other ways of using the collection to generate income. These include displaying the artworks and reproducing them on calendars and posters.`,
      "What is mainly being reported about the Summerville School Board?",
      ["It has solved its financial problems by auctioning artworks.", "It has decided against marketing newly discovered paintings.", "It is attempting to assess the value of artworks in its possession.", "It is considering ways of profiting from recently found artworks."], 3,
      "그림을 팔지는 않지만 전시하거나 달력·포스터로 복제해 수익을 내는 방안을 검토하고 있다."),

    q("set2", 16, `The tsunami that struck Japan in 2011 could have unexpected impacts in the coming years. Its massive waves carried debris from ruined structures thousands of kilometers away to North America. Many structures were encrusted with marine species such as mollusks that were foreign to the continent. In some cases, these species are starting to establish themselves in their new homes, a process whose final outcome is unknown.`,
      "What is the main topic of the passage?",
      ["The effect of a tsunami on conservation efforts", "The unexpected survival of species after a tsunami", "The adaptation of species to tsunami-damaged areas", "The spread of species to new environments by a tsunami"], 3,
      "쓰나미 잔해에 붙은 해양 생물이 북미까지 이동해 정착하기 시작했으므로 쓰나미로 인한 종의 새로운 환경 확산이 주제이다."),

    q("set2", 17, `EXECUTIVE SUMMARY: REPORT ON STUDENT DEBT IN ELLINGTON

The high cost of post-secondary education is causing students to take on large amounts of debt.

• Undergraduates receive about half of tuition costs from parents, while post-graduates receive almost no parental assistance.
• For post-graduates, about 15% is covered through grants and scholarships, a quarter through personal earnings, and the remainder mostly through loans.
• Post-graduates can expect an annual salary increase of $20,000 compared with undergraduates.`,
      "Which of the following is correct according to the report?",
      ["Undergraduates get more parental support than post-graduates.", "Parents pay over half of tuition costs for post-graduate students.", "Financial awards cover about half of post-graduate tuition costs.", "Post-graduate degree holders earn about $24,000 more per year."], 0,
      "학부생은 등록금의 약 절반을 부모에게 지원받지만 대학원생은 부모 지원이 거의 없다고 했다."),

    q("set2", 18, `Scientists are investigating a possible connection between the hormone ghrelin and cognitive function. Whenever the stomach is empty for a few hours, cells in the stomach lining respond to hunger signals by releasing ghrelin. A surprising effect is that it contributes to the growth of new brain cells. Ghrelin is therefore believed by some to improve memory and boost learning capabilities.`,
      "Which of the following is correct about ghrelin?",
      ["It is produced in the brain in response to hunger.", "Its levels decrease after a few hours of hunger.", "It is involved in the development of brain cells.", "Its production inhibits cognitive functioning."], 2,
      "ghrelin은 공복 시 위에서 분비되며 새 뇌세포의 성장에 기여하므로 뇌세포 발달에 관여한다."),

    q("set2", 19, `The tomb of the ancient Egyptian king Tutankhamun was discovered in 1922 by archaeologist Howard Carter. Although the tomb had been raided on at least two occasions in antiquity, it remained largely intact. Tutankhamun's sarcophagus housed three nested coffins, the inner one made of solid gold and the outer two gold-coated. The king's mummified body still sits at its discovery site in Luxor today.`,
      "Which of the following is correct about Tutankhamun?",
      ["His tomb had been mostly destroyed by robbers.", "His tomb had been robbed prior to its 1922 discovery.", "His status was reflected by his solid gold sarcophagus.", "His body was transferred from its initial site to Luxor."], 1,
      "무덤은 1922년 발견 이전 고대에 최소 두 차례 도굴되었지만 대부분 온전한 상태로 남아 있었다."),

    q("set2", 20, `STEVE BARRY'S RETURN

Disgraced hedge fund manager Steve Barry is returning to the industry. Barry received a yearlong ban from managing other people's money after an insider trading probe. Although he was not implicated directly, he was reprimanded for failing to oversee employees, several of whom received prison sentences. With the ban lifted, Barry is now raising capital for a new fund.`,
      "Why did Steve Barry receive a ban on capital management?",
      ["He attempted to conceal his employees' crimes.", "He failed to properly supervise law-breaking staff.", "He participated in an illegal scheme to raise capital.", "He conspired with staff to engage in insider trading."], 1,
      "Barry가 직접 범죄에 가담한 것은 아니지만 범죄를 저지른 직원들을 제대로 감독하지 못해 제재를 받았다."),

    q("set2", 21, `The Dancing Forest in Russia is known for unusual trees whose trunks are deformed into bizarre spirals. Human intervention, extreme winds, and unstable sandy soil have all been proposed as causes. However, the prevailing theory is that the young trees were ravaged by an invasion of moth caterpillars. The harm caused the trees to grow at strange angles, though they later resumed natural growth upwards toward the sun.`,
      "What is the most widely held theory about the cause of the trees' deformities?",
      ["Instability of sandy soil", "Exposure to harsh weather", "Lack of exposure to sunlight", "Damage due to insect attacks"], 3,
      "prevailing theory가 나방 애벌레의 피해라고 했으므로 곤충 공격으로 인한 손상이 정답이다."),

    q("set2", 22, `Australian Aboriginals have cultural taboos regarding interactions between certain clan members. Brothers and sisters can interact freely as children but must maintain distance after a certain age. A more extreme case involves men and their mothers-in-law. To show respect, a son-in-law avoids speaking to his mother-in-law or looking at her directly, and an intermediary is used when communication is necessary.`,
      "Which of the following is correct about Australian Aboriginal men?",
      ["They cannot interact with their sisters as children.", "They avoid their mothers-in-law to show courtesy.", "They must face their mothers-in-law during conversation.", "They cannot occupy the same room as their mothers-in-law."], 1,
      "사위가 장모에게 직접 말하거나 쳐다보지 않는 행동은 존중을 표시하기 위한 것이다."),

    q("set2", 23, `When I was young, my father pushed me to pursue a well-paid career. I listened and went to law school, but wondered what life would have been like had I pursued music. After I became a father myself, all my doubts vanished. I realized that what mattered most was my ability to provide for my family.`,
      "What can be inferred about the writer from the passage?",
      ["He is grateful for his father's advice.", "He is planning to change his career.", "He values music more than money.", "He has a well-paid musical career."], 0,
      "자신도 아버지가 된 뒤 가족을 부양하는 것이 가장 중요하다고 깨달았으므로 고소득 직업을 권한 아버지의 조언을 긍정적으로 보게 되었다."),

    q("set2", 24, `STANFORD TO TAKE CHARGE OF KINGS

Retired basketball legend Pete Lee rejects speculation that rising star John Stanford will flounder after teammate Al Watson leaves. Lee recalls the retirement of his own star teammate Johnny Webber. After his better-known teammate's departure, Lee became the focus of the offense and had the most productive year of his career. Lee sees a similar fate for the up-and-coming Stanford.`,
      "What can be inferred from the article?",
      ["Stanford is a lesser-known player than Watson.", "Lee attempted to persuade Webber not to retire.", "Stanford is a better basketball player than Lee was.", "Watson's basketball career has ended due to injury."], 0,
      "더 유명한 팀 동료가 떠난 뒤 성장한 자신의 경험을 Stanford에게 빗대므로 Stanford 역시 Watson보다 덜 알려진 선수라고 추론할 수 있다."),
    q("bonus", 19, `GR TECH — RESIGNATION PROTOCOL

In the event that an employee resigns, supervisors must take the following actions:

• Upon receiving an employee's notice of resignation, written or oral, supervisors must respond with a written confirmation.
• Supervisors must then submit a Separation Notice form with the employee. Up-to-date contact details must be included, as tax documents will be mailed to the employee's home address.
• Supervisors must ensure that the employee hands in all company materials on the last day of employment.`,
      "Which of the following is correct according to the passage?",
      ["The protocol applies solely to supervisors' resignations.", "Supervisor confirmations may be either written or oral.", "Contact details are required on the Separation Notice form.", "Employees are handed tax documents prior to their final day."], 2,
      "세금 서류를 직원의 집으로 보내기 위해 Separation Notice form에 최신 연락처를 포함해야 한다."),

    q("bonus", 20, `The Okavango Delta of northwest Botswana is one of the world's largest inland deltas. Annual flooding from the Okavango River during Botswana's dry season and rain during its rainy season feed the delta's permanent swamps and seasonally flooded grasslands. Native plants and animals are harmonized with the seasonal rains and floods. As the delta lacks an outlet to the sea, its water drains into the sands of the Kalahari Desert.`,
      "Which of the following is correct about the Okavango Delta?",
      ["It dries up completely during Botswana's dry season.", "It gets too little rain to maintain swamps year-round.", "Its seasonal flooding harms local plants and wildlife.", "Its water does not flow directly out into the ocean."], 3,
      "바다로 나가는 출구가 없고 물이 칼라하리 사막의 모래로 스며드므로 물이 직접 바다로 흐르지 않는다."),

    q("bonus", 21, `FILMFLOW MAKING MOVES

Online movie streaming giant FilmFlow will increase its monthly subscription fee next month. The move was not unexpected, with analysts predicting it for months. FilmFlow cited the need to cover the costs of new original content, expected to begin airing in a few weeks. Shares had dropped 2% last month due to spending concerns, but the share price is already rallying on today's announcement.`,
      "Which of the following is correct about FilmFlow?",
      ["Its user fee increase will take effect in a few months.", "It took the industry by surprise with its fee increase.", "It has already begun releasing its new original content.", "Its share price rose with the news of its fee increase."], 3,
      "요금 인상 발표 당일 주가가 이미 반등하고 있다고 했으므로 요금 인상 소식과 함께 주가가 올랐다."),

    q("bonus", 22, `The textile and fashion industry in Brazil is huge, ranking as the second-largest source of employment in the country. Roughly 30,000 textile companies operate within the nation and are known for adhering to fair labor standards. Such standards, however, have resulted in production costs that exceed those in other countries. The industry has focused on the domestic market, where 85% of output stays, forcing it to grapple with cheap Chinese imports without a strong overseas customer base.`,
      "What is one reason that Brazil's textile industry is facing difficulties?",
      ["It is excessively reliant on supplying export markets.", "It has faced criticism for unfair treatment of workers.", "Its labor standards have led to high production costs.", "Its workforce lacks adequate skills to compete globally."], 2,
      "공정한 노동 기준을 준수한 결과 다른 나라보다 생산비가 높아졌다고 직접 설명한다."),

    q("bonus", 23, `Last year, my daughter asked me to look after my four-year-old granddaughter during the workday. I only asked her to cover meals and activities. Eventually my daughter admitted that she had not expected the cost to be so high. I explained that I liked taking my granddaughter out but could not afford it on my fixed income. We reached a compromise, and now I have found many ways of entertaining my granddaughter at home.`,
      "What can be inferred about the writer from the passage?",
      ["She has frequent arguments with her daughter.", "She pays for most of her granddaughter's activities.", "She has cut down on spending for her granddaughter.", "She gave up working to take care of her granddaughter."], 2,
      "비용 문제를 해결하기 위해 외출 대신 집에서 손녀를 돌보므로 손녀를 위해 쓰는 지출을 줄였다고 추론할 수 있다."),

    q("bonus", 24, `RESTAURATEUR BETTING BIG ON JAPANESE CUISINE

Despite the popularity of Japanese cuisine, there has long been a lack of quality ramen restaurants in Miltonburg. This is changing with Tokyo Noodles, opened by restaurateur Gilbert Blake.

After offering ramen at his sushi restaurant, Blake realized there was demand for a good ramen place. He opened a new restaurant dedicated to authentic ramen prepared by a Japanese chef. Although it will not outshine Blake's sushi place any time soon, it has created a buzz among food critics.`,
      "What can be inferred about Gilbert Blake from the restaurant review?",
      ["He is adapting ramen to suit the taste of Miltonburg locals.", "Ramen was popular among customers of his sushi restaurant.", "His new place is successful despite receiving lukewarm reviews.", "Tokyo Noodles is attracting more customers than his sushi place."], 1,
      "기존 초밥집에서 라멘을 제공한 뒤 수요가 있음을 확인했으므로 그 고객들에게 라멘이 인기가 있었음을 추론할 수 있다.")
  ];
})();