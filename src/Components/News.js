import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "Ukraine tension: Biden says he thinks Putin will 'move in' - BBC News",
          "description": "The US president says he thinks Russia's leader will \"move in\" but does not want a \"full-blown war\".",
          "url": "https://www.bbc.com/news/world-europe-60061300",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F974/production/_122906836_hi072708623.jpg",
          "publishedAt": "2022-01-20T04:21:16Z",
          "content": "Media caption, Joe Biden: \"It is going to be a disaster for Russia if they further invade Ukraine\"\r\nUS President Joe Biden has said he thinks his Russian counterpart Vladimir Putin will \"move in\" on … [+3846 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Daniella Diaz and Evan Perez, CNN",
          "title": "FBI says it's conducting a 'court-authorized' search of Rep. Henry Cuellar's Texas home - CNN",
          "description": "The Federal Bureau of Investigation said in a statement Wednesday evening that it is doing a \"court-authorized\" search of the Texas home of Rep. Henry Cuellar.",
          "url": "https://www.cnn.com/2022/01/19/politics/henry-cuellar-fbi-texas-home/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190115033901-rep-henry-cuellar-010918-super-tease.jpg",
          "publishedAt": "2022-01-20T04:14:00Z",
          "content": "(CNN)The Federal Bureau of Investigation said in a statement Wednesday evening that it is doing a \"court-authorized\" search of the Texas home of Rep. Henry Cuellar.\r\n\"The FBI was present in the vicin… [+881 chars]"
        },
        {
          "source": {
            "id": "the-verge",
            "name": "The Verge"
          },
          "author": "Chris Welch",
          "title": "Roku outage leads to frozen TVs and unresponsive devices - The Verge",
          "description": "Roku experienced a service disruption on Wednesday evening, which led to frozen Roku TVs and streaming sticks. Customers report being stuck on the loading screen and in some cases can’t even use devices connected to their TV.",
          "url": "https://www.theverge.com/2022/1/19/22892590/roku-service-outage-frozen-tv-streaming-sticks",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/ZvqUEYOU0soeMs7Qq-jaerNmRUk=/0x169:2040x1237/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22448506/DSCF3624_Edited.jpg",
          "publishedAt": "2022-01-20T03:21:33Z",
          "content": "Roku customers reported being stuck on the loading screen\r\nPhoto by Chris Welch / The Verge\r\nRoku experienced a significant service disruption on Wednesday evening, which resulted in some of the comp… [+1622 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "ESPN"
          },
          "author": null,
          "title": "'Unbelievable from the start,' Joel Embiid scores 50 points in 27 minutes as Philadelphia 76ers win - ESPN",
          "description": "In a performance to remember, just when the 76ers needed it, Philadelphia star Joel Embiid tied his career high with 50 points in just 27 minutes en route to a dominant 123-110 victory over the Orlando Magic on Wednesday.",
          "url": "https://www.espn.com/nba/story/_/id/33104547/unbelievable-start-joel-embiid-scores-50-points-27-minutes-philadelphia-76ers-win",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0120%2Fr963690_1296x729_16%2D9.jpg",
          "publishedAt": "2022-01-20T03:17:53Z",
          "content": "PHILADELPHIA -- Joel Embiid tied his career high with 50 points in just 27 minutes, leading a dominant third quarter that carried the Philadelphia 76ers to a 123-110 victory over the Orlando Magic on… [+4332 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Investor's Business Daily"
          },
          "author": "Investor's Business Daily",
          "title": "Dow Jones Futures: Market Correction Extends Losses; Four Stocks In Beat-Up Sector Worth Watching - Investor's Business Daily",
          "description": "Strong open, weak close is classic bad market action. More leaders are cracking.",
          "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-correction-extends-losses-four-stocks-in-beat-up-sector-worth-watching/",
          "urlToImage": "https://www.investors.com/wp-content/uploads/2018/04/Stock-BearVista-01-adobe.jpg",
          "publishedAt": "2022-01-20T03:11:00Z",
          "content": "Dow Jones futures tilted higher, along with S&amp;P 500 futures and Nasdaq futures. The stock market extended losses Wednesday even as the 10-year Treasury yield retreated modestly.\r\nXAlcoa (AA) and … [+9504 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Variety"
          },
          "author": "Elizabeth Wagmeister",
          "title": "Britney Spears’ Lawyer Calls Jamie Spears’ Attorney a Liar in Fiery Courtroom Showdown - Variety",
          "description": "Popular on Variety Fireworks went off in court on Wednesday at Britney Spears’ latest hearing, as the singer and her father’s attorneys went head-to-head in a continuous and contentious legal battle that last roughly three hours. Though the conservatorship ha…",
          "url": "https://variety.com/2022/music/news/britney-spears-hearing-jamie-spears-money-legal-fees-1235157618/",
          "urlToImage": "https://variety.com/wp-content/uploads/2021/07/Britney-Spears-04-1.jpg?w=1000",
          "publishedAt": "2022-01-20T02:18:00Z",
          "content": "Fireworks went off in court on Wednesday at Britney Spears’ latest hearing, as the singer and her father’s attorneys went head-to-head in a continuous and contentious legal battle that last roughly t… [+4688 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Clare Foran, Ali Zaslav and Ted Barrett, CNN",
          "title": "Senate Republicans again block voting legislation put forward by Democrats - CNN",
          "description": "Senate Republicans once again blocked a voting rights bill put forward by Democrats in the latest partisan showdown over an issue Democrats are urgently seeking to spotlight despite lacking the votes to pass the legislation ahead of the midterm elections just…",
          "url": "https://www.cnn.com/2022/01/19/politics/senate-voting-legislation-filibuster/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211007045534-01-capitol-exterior-1006-super-tease.jpg",
          "publishedAt": "2022-01-20T02:05:00Z",
          "content": "(CNN)Senate Republicans once again blocked a voting rights bill put forward by Democrats in the latest partisan showdown over an issue Democrats are urgently seeking to spotlight despite lacking the … [+4760 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hollywood Reporter"
          },
          "author": "Chris Gardner",
          "title": "Chris Daughtry and Wife Deanna Reveal Daughter Hannah Price’s Cause of Death - Hollywood Reporter",
          "description": "Chris Daughtry is sharing details about the death of his stepdaughter, Hannah Price. In a join statement released Thursday with wife Deanna Daughtry, the couple revealed that Price died as a result of suicide while under the influence of narcotics. The couple…",
          "url": "https://www.hollywoodreporter.com/news/music-news/chris-daughtry-stepdaughter-suicide-cause-of-death-1235077826/",
          "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/01/Chris-Deanna-Daughtry-Split-Getty-Publicity-H-2022.jpg?w=1024",
          "publishedAt": "2022-01-20T02:02:16Z",
          "content": "Chris Daughtry is sharing details about the death of his stepdaughter, Hannah Price.\r\nIn a joint statement released Thursday with wife Deanna Daughtry, the couple revealed that Price, 25, died as a r… [+2582 chars]"
        },
        {
          "source": {
            "id": "politico",
            "name": "Politico"
          },
          "author": "Laura Barrón-López, Myah Ward",
          "title": "Biden: The GOP epiphany I predicted didn't come - POLITICO",
          "description": "The president’s press conference was a two hour affair filled with self-analysis, contrition and defiance.",
          "url": "https://www.politico.com/news/2022/01/19/biden-the-gop-epiphany-i-predicted-didnt-come-527414",
          "urlToImage": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/1155968404/797a4ae4-1657-4d89-9064-86603b6b66f1/5f59e8f0-a331-4353-b747-ef0b6ac20c2b/1280x720/match/image.jpg",
          "publishedAt": "2022-01-20T01:44:20Z",
          "content": "But, in total, the event was notable for the contrasts it set to his prior months in office. Biden had held only one other solo press conference at the White House during his presidency. For this one… [+5806 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Sheryl Gay Stolberg",
          "title": "Biden Will Provide 400 Million N95 Masks for Free - The New York Times",
          "description": "The masks will be distributed at pharmacies and community health centers, but some public health experts said the effort was coming too late.",
          "url": "https://www.nytimes.com/2022/01/19/health/biden-free-n95-masks.html",
          "urlToImage": "https://static01.nyt.com/images/2022/01/19/us/politics/19dc-masks-1/merlin_200357235_0b7ccabd-9f43-4287-88f9-0a7cd8505453-facebookJumbo.jpg",
          "publishedAt": "2022-01-20T01:37:31Z",
          "content": "An investigation by The New York Times published in March 2021 found that for years, the Strategic National Stockpile was heavily weighted toward protecting against bioterror attacks; throughout most… [+1284 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Saheli Roy Choudhury",
          "title": "China's central bank cuts key lending rates, including one for the first time in nearly 2 years - CNBC",
          "description": "The People's Bank of China cut the one-year loan prime rate by 10 basis points from 3.8% to 3.7%.",
          "url": "https://www.cnbc.com/2022/01/20/china-economy-pboc-cuts-loan-prime-rates-lpr-for-1-year-5-year.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/105949584-1559711930288gettyimages-1078405216.jpeg?v=1642642189",
          "publishedAt": "2022-01-20T01:30:00Z",
          "content": "Pedestrians walk past the People's Bank of China headquarters in Beijing, China.\r\nChina's central bank cut its benchmark lending rates again on Thursday amid concerns about an economic slowdown in th… [+3109 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Sony Stock Took a $20 Billion Hit After Xbox's Activision Deal - IGN Daily Fix - IGN",
          "description": "Today on IGN The Fix: Games, Sony's stock reportedly took a $20 billion dollar hit after Xbox announced that it is set to acquire Activision Blizzard. As det...",
          "url": "https://www.youtube.com/watch?v=HGQdCTDr9L0",
          "urlToImage": "https://i.ytimg.com/vi/HGQdCTDr9L0/hqdefault.jpg",
          "publishedAt": "2022-01-20T01:15:01Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Chloe Melas, CNN",
          "title": "Britney Spears sends cease-and-desist letter to sister demanding she stop talking about her on book tour - CNN",
          "description": "The public feud between Britney Spears and her sister Jamie Lynn Spears is far from over.",
          "url": "https://www.cnn.com/2022/01/19/entertainment/britney-spears-ceast-and-desist/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220119120344-britney-jamie-lynn-spears-split-super-tease.jpg",
          "publishedAt": "2022-01-20T00:47:00Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Sports Illustrated"
          },
          "author": "Albert Breer",
          "title": "Mailbag: Fits for Giants’, Raiders’, Bears’ and Broncos’ Jobs - Sports Illustrated",
          "description": "Where should various teams look to fill head coach and general manager vacancies? Plus, why Kliff Kingsbury is likely safe and more.",
          "url": "https://www.si.com/nfl/2022/01/20/mailbag-giants-raiders-bears-broncos-jobs",
          "urlToImage": "https://www.si.com/.image/t_share/MTg2ODE4MTgyMjczNTc0Mzgz/brian-daboll-buffalo-bills-coach-candidate.jpg",
          "publishedAt": "2022-01-20T00:03:52Z",
          "content": "Lots of mail. Lots of different topics. Let’s dive in …\r\nRich Barnes/USA TODAY Sports\r\nFrom Jim Diee (@JimDiee): Who is the best fit for the Giants’ GM job?\r\nJim, there’s reason to be encouraged: The… [+15617 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Supreme Court allows Trump documents to be released to January 6 panel | LiveNOW from FOX - LiveNOW from FOX",
          "description": "In a rebuff to former President Donald Trump, the Supreme Court is allowing the release of presidential documents sought by the congressional committee inves...",
          "url": "https://www.youtube.com/watch?v=zcQT3FdaVbo",
          "urlToImage": "https://i.ytimg.com/vi/zcQT3FdaVbo/maxresdefault.jpg",
          "publishedAt": "2022-01-19T23:50:47Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "NewsChannel5.com"
          },
          "author": "Chris Davis",
          "title": "Tennessee Titans change ticket transfer rules to hopefully limit the number of Bengals fans - NewsChannel5.com",
          "description": "If you ask Tennessee Titans fans, it doesn't really matter how you cheer or what you wear to a game.",
          "url": "https://www.newschannel5.com/news/tennessee-titans-change-ticket-transfer-rules-to-hopefully-limit-the-number-of-bengals-fans",
          "urlToImage": "https://ewscripps.brightspotcdn.com/dims4/default/5d20d07/2147483647/strip/true/crop/1920x1008+0+36/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F70%2Fe1%2F07a28dcf4770b89930dc5545f847%2Fraw-frame-25346.jpeg",
          "publishedAt": "2022-01-19T23:43:00Z",
          "content": "NASHVILLE, Tenn. (WTVF) If you ask Tennessee Titans fans, it doesn't really matter how you cheer or what you wear to a game. \r\n\"Tennessee underwear, Tennessee Titans socks, Tennessee Titans shoes,\" s… [+2234 chars]"
        },
        {
          "source": {
            "id": "abc-news",
            "name": "ABC News"
          },
          "author": "Sarah Kolinovsky, Libby Cathey, Molly Nagle, Justin Gomez",
          "title": "Biden defensive in rare solo news conference ahead of 1-year mark in office - ABC News",
          "description": "",
          "url": "https://abcnews.go.com/Politics/biden-hold-rare-solo-news-conference-ahead-year/story?id=82348209",
          "urlToImage": "https://s.abcnews.com/images/US/biden-rt-jt-220119_1642626816146_hpMain_16x9_992.jpg",
          "publishedAt": "2022-01-19T23:36:55Z",
          "content": "On the eve of the one-year anniversary of his inauguration, President Joe Biden held a formal news conference at the White House Wednesday, fielding reporter questions on his handling of the pandemic… [+8654 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Andrew Gregory",
          "title": "Antimicrobial resistance now a leading cause of death worldwide, study finds - The Guardian",
          "description": "Lancet analysis highlights need for urgent action to address antibiotic-resistant bacterial infections",
          "url": "https://amp.theguardian.com/society/2022/jan/20/antimicrobial-resistance-antibiotic-resistant-bacterial-infections-deaths-lancet-study",
          "urlToImage": null,
          "publishedAt": "2022-01-19T23:33:57Z",
          "content": "AntibioticsLancet analysis highlights need for urgent action to address antibiotic-resistant bacterial infections\r\nThu 20 Jan 2022 00.01 GMT\r\nAntimicrobial resistance poses a significant threat to hu… [+4673 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "Bruce Arians fined $50,000 for striking Buccaneers player during wild card win over Eagles - CBS Sports",
          "description": "Arians made on-field contact with Buccaneers safety Andrew Adams",
          "url": "https://www.cbssports.com/nfl/news/bruce-arians-fined-50000-for-striking-buccaneers-player-during-wild-card-win-over-eagles/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/28/78853556-df90-4a4a-b234-8ee629099887/thumbnail/1200x675/06ceb59f3905a4f23491b205c6304cf5/bruce-arians.jpg",
          "publishedAt": "2022-01-19T23:16:00Z",
          "content": "Buccaneers coach Bruce Arians was fined $50,000 after making contact with Tampa Bay safety Andrew Adams during the team's wild card win over the Eagles. Arians slapped Adams' helmet during Tampa Bay'… [+1326 chars]"
        },
        {
          "source": {
            "id": "polygon",
            "name": "Polygon"
          },
          "author": "Nicole Clark",
          "title": "Developer of unrelated Worldle app donates proceeds to charity - Polygon",
          "description": "Steven Cravotta made an iOS app named Wordle five years ago. When the browser game Wordle (created by Josh Wardle) became massively popular, Cravotta’s app took off as well. He’s now donating the proceeds to the Boost! West Oakland charity.",
          "url": "https://www.polygon.com/22891406/wordle-mobile-app-store-ios-creator-charity-donate",
          "urlToImage": "https://cdn.vox-cdn.com/thumbor/How_EeTrybujG6-EGFZyufosMR4=/0x101:2358x1336/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23180578/Screen_Shot_2022_01_19_at_2.55.11_PM.png",
          "publishedAt": "2022-01-19T23:07:33Z",
          "content": "Its early in 2022, but one thing is already clear: Wordle has become one of the breakout games of the year. And its success has given a boost to a five-year-old iOS app called Wordle which is totally… [+1612 chars]"
        }
      ]

    constructor(){
        super();
        console.log("This is a Constructor from News Component");
        this.state = {
            articles: this.articles,
            loading : false
        }
    }
    render() {
        return (
        <div className='container my-3'>
            <h2>NEWS_MONKEY - TOP HEADLINES</h2>
            <div className="row">
            {this.state.articles.map((element)=>{
                return <div className="col-md-4"  key={element.url}>
                     <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl = {element.url}/>

                     {/* .slice() is used to limit number of characters here starting from 0 to 88 characters */}
                     </div>

            })}
               
                
               
            </div>

        </div>
        )
    }
}

export default News;
