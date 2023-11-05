let cardsShown = 9;

// Selectors
const toggle = document.querySelector('.toggle-control input');
const viewMoreBtn = document.querySelector('.view-more-btn');

// Card containers  
const palestineCards = document.querySelectorAll('#palestine-side .card');
const israelCards = document.querySelectorAll('#israel-side .card');


viewMoreBtn.addEventListener('click', () => {
  cardsShown += 6;
  updateCards();
});

function showCards(cards) {
  cards.forEach((card, i) => {
    if (i < cardsShown) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function hideCards(cards) {
  cards.forEach(card => {
    card.style.display = 'none';
  });
}


// Show more/less button code below

// Get all elements with the specified classes
var showMoreContents = document.getElementsByClassName('show-more-content');
var showMores = document.getElementsByClassName('show-more');
var showLesses = document.getElementsByClassName('show-less');

// Loop over each set of elements
for (let i = 0; i < showMores.length; i++) {
  let showMoreContent = showMoreContents[i];
  let showMore = showMores[i];
  let showLess = showLesses[i];

  // Initially hide the 'show-more-content' and 'show-less' elements
  showMoreContent.style.display = 'none';
  showLess.style.display = 'none';

  // Add event listener to 'show-more' element
  showMore.addEventListener('click', function () {
    showMoreContent.style.display = 'block';
    showLess.style.display = 'block';
    this.style.display = 'none';
  });

  // Add event listener to 'show-less' element
  showLess.addEventListener('click', function () {
    showMoreContent.style.display = 'none';
    showMore.style.display = 'block';
    this.style.display = 'none';
  });
}


// Inserting the data to cards

// Data sets

let palestineBrands = [
  {
  "id": 1,
  "brand": "Huda Beauty",
  "image_link": "https://mir-s3-cdn-cf.behance.net/projects/404/08384679201139.Y3JvcCw2ODUsNTM1LDgxMyww.jpg",
  "news": {
    "title": "Huda Kattan speaks out in support of Palestine",
    "brief": "Huda Kattan, founder of Huda Beauty, has repeatedly voiced support for Palestine on social media and called for humanitarian aid.",
    "detailed": "Huda Kattan responded to an Instagram troll criticizing her support for Palestine by saying she won't accept 'blood money.' She encourages donating to reputable humanitarian organizations providing food, shelter, medical care and education to people impacted by the conflict. On her social media, Kattan aims to raise awareness about the injustice, violence and trauma occurring in Palestine. She uses her platform to call for peace and respect for human rights."
  },
  "reference": "https://hudabeauty.com/us/en_US/blog-5-ways-you-can-support-palestine-right-now-77165.html",
},
{
  "id": 2,
  "brand": "ASOS",
  "image_link": "https://i.guim.co.uk/img/media/5a33d370a85a68494fb20002a96e18b671f17429/0_13_3500_2100/master/3500.jpg?width=1200&quality=85&auto=format&fit=max&s=aa45673173605fd3876eebb12d906a90",
  "news": {
    "title": "ASOS donates $120k to humanitarian aid for people in Palestine",
    "brief": "British fashion brand ASOS announced a $120,000 donation to provide humanitarian aid to people in Gaza amidst the 2021 escalation of conflict in Palestine.",
    "detailed": "ASOS stated on Instagram 'We stand in solidarity with Palestinians' and joined other fashion brands in pledging donations to relief efforts providing essential supplies and medical care. The funds are aimed to help people in Gaza severely impacted by the crisis with food, water, shelter and health services. ASOS said it strongly supports 'better and more peaceful times ahead' for the region."
  },
  "reference": "https://www.brandedgirls.com/palestinian-brands-to-shop-to-support-palestine/"
},
{
  "id": 3,

  "brand": "Anthropologie",
  "image_link": "https://upload.wikimedia.org/wikipedia/commons/7/73/Anthropologie_-_Store_%2851394733512%29.jpg",
  "news": {
    "title": "Anthropologie announces support and donates to children in Gaza",
    "brief": "Anthropologie posted on Instagram announcing a donation to UNICEF for children in Gaza impacted by the conflict and expressed solidarity with the Palestinian people.",
    "detailed": "The brand stated 'We stand against injustice, oppression and racism. We stand with humanity.' Anthropologie announced it was making a donation to UNICEF USA to provide urgent support and services to children and families in Gaza heavily impacted by the crisis. The funds will help UNICEF's efforts to give access to clean water, medical care, mental health services and education for children."
  },
  "reference": "https://blogote.com/brands-that-support-palestine-2023/",

  "id": 4,
  "brand": "Net-a-Porter",
  "image_link": "https://wwd.com/wp-content/uploads/2016/08/the-sporty-jacket-logo.jpg",
  "news": {
    "title": "Net-a-Porter donates $100k to children's aid groups in Palestine",
    "brief": "Luxury brand Net-a-Porter pledged a $100,000 donation to UNICEF and Save the Children to provide humanitarian aid and services for children impacted by the crisis in Palestine.",
    "detailed": "Net-a-Porter expressed solidarity with the Palestinian people and children caught up in the conflict. The funds are aimed to support urgent relief efforts by UNICEF and Save the Children in Palestine, including access to healthcare, clean water, mental health services and education assistance. Net-a-Porter said it hopes to see 'better and more peaceful times ahead' in the region."
  },
  "reference": "https://www.brandedgirls.com/palestinian-brands-to-shop-to-support-palestine/"
},
{
  "id": 5,
  "brand/country": "Zaghareed",
  "image_link": "https://m.media-amazon.com/images/I/51CCPMWX8HL._AC_UF1000,1000_QL80_.jpg",
  "news": {
    "title": "Support Palestinian beauty brand Zaghareed",
    "brief": "Zaghareed is a Palestinian-owned makeup and skincare brand that people can support by purchasing their olive oil-based products.",
    "detailed": "Buying from Palestinian cosmetics company Zaghareed helps empower the community economically and culturally. Zaghareed aims to share the beauty traditions and ingredients native to Palestine with the world through its brand. Their products have received backing from Huda Kattan of Huda Beauty to help boost their mission."
  },
  "reference": "https://buro247.me/fashion/buro-loves/palestinian-brands/"
},

{
  "id": 6,
  "brand/country": "SJP",
  "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6M00cHeCF7QWdKC1S9JH79POKseGeRTnzZPB3oKJ_qy-3A1w0zBUE9eUw3-kRIqitz_k&usqp=CAU",
  "news": {
    "title": "Sarah Jessica Parker's brand SJP donates to children in Gaza",
    "brief": "Sarah Jessica Parker announced her fashion brand SJP donated to UNICEF to provide humanitarian aid to children in Gaza impacted by the escalating crisis.",
    "detailed": "Sarah Jessica Parker posted on Instagram that her shoe and accessories brand SJP had made a donation to UNICEF to support their relief efforts for children and families in Gaza during the conflict. The funds will help UNICEF provide supplies, medical care, counseling services and access to education. SJP encouraged followers to learn more about the crisis impacting kids in the region."
  },
  "reference": "https://blogote.com/brands-that-support-palestine-2023/"
},

{
  "id": 7,
  "brand/country": "Olivia Hallie",
  "image_link": "https://i.ytimg.com/vi/hc2yWJh6A2o/maxresdefault.jpg",
  "news": {
    "title": "Support Palestinian makeup artist and influencer Olivia Hallie",
    "brief": "Olivia Hallie is a Palestinian makeup artist and influencer that uses her platform to raise awareness about the occupation and promote Palestinian culture.",
    "detailed": "Purchasing Palestinian influencer Olivia Hallie's makeup accessories and supporting her brand is a way to economically empower Palestinian creators. On her social media, Hallie shares insights into Palestinian culture, life under occupation, and promotes local brands and artists from the region. She aims to uplift Palestinian voices and provide a more just representation."
  },
  "reference": "https://buro247.me/fashion/buro-loves/palestinian-brands/"}
];

let palestineCountries = [
  {

    "id": 1,
    "country": "Turkey",
    "image_link": "https://www.al-monitor.com/sites/default/files/styles/article_header/public/almpics/2019/05/RTS19R85.jpg/RTS19R85.jpg?h=a5ae579a&itok=BbNvYeUV",
    "news": {
      "title": "Turkey voices support for Palestine",
      "brief": "Turkey has been a vocal supporter of Palestine and has condemned Israel's actions in the current conflict.",
      "detailed": "Turkey's President Erdogan has called for an end to the violence and has criticized Israel's actions as 'state terror.' The Turkish government has also sent aid to Gaza and has called for an emergency meeting of the Organization of Islamic Cooperation to discuss the situation."
    }
  },
  {
    "reference": "https://www.aljazeera.com/news/2023/10/23/which-countries-have-sent-aid-to-gaza-so-far",
    "id": 2,
    "country": "Iran",
    "image_link": "https://cdn.vox-cdn.com/thumbor/jlWKooXIp2FNHAKLs_tR3OXvcdY=/0x0:5472x3648/1200x800/filters:focal(2299x1387:3173x2261)/cdn.vox-cdn.com/uploads/chorus_image/image/72755984/1723107388.0.jpg",
    "news": {
      "title": "Iran voices support for Palestine",
      "brief": "Iran has been a vocal supporter of Palestine and has condemned Israel's actions in the current conflict.",
      "detailed": "Iran's Supreme Leader Ayatollah Ali Khamenei has called for an end to the violence and has criticized Israel's actions as 'genocide.' The Iranian government has also sent aid to Gaza and has called for an emergency meeting of the Organization of Islamic Cooperation to discuss the situation."
    },
    "reference": "https://www.aljazeera.com/news/2023/10/23/which-countries-have-sent-aid-to-gaza-so-far"
  },
  {
    "id": 3,
    "country": "Qatar",
    "image_link": "https://www.al-monitor.com/sites/default/files/styles/social_media_share/public/almpics/2018/12/rtx39tf1.jpg/rtx39tf1.jpg?h=a5ae579a&itok=6V1thqoL",
    "news": {
      "title": "Qatar voices support for Palestine",
      "brief": "Qatar has been a vocal supporter of Palestine and has condemned Israel's actions in the current conflict.",
      "detailed": "Qatar's Emir Sheikh Tamim bin Hamad Al Thani has called for an end to the violence and has criticized Israel's actions as 'barbaric.' The Qatari government has also sent aid to Gaza and has pledged $500 million in reconstruction aid for the region."
    },
    "reference": "https://www.aljazeera.com/news/2023/10/23/which-countries-have-sent-aid-to-gaza-so-far"
  },
  {
    "id": 4,
    "country": "Egypt",
    "image_link": "https://eipss-eg.org/wp-content/uploads/2021/03/Egyptian-Palestinian-Relations-Since-the-2013-Coup.jpg",
    "news": {
      "title": "Egypt voices support for Palestine",
      "brief": "Egypt has been a vocal supporter of Palestine and has condemned Israel's actions in the current conflict.",
      "detailed": "Egypt's President Abdel Fattah el-Sisi has called for an end to the violence and has criticized Israel's actions as 'unacceptable aggression.' The Egyptian government has also sent aid to Gaza and has opened the Rafah border crossing to allow injured Palestinians to receive medical treatment in Egypt."
    },
    "reference": "https://www.aljazeera.com/news/2023/10/23/which-countries-have-sent-aid-to-gaza-so-far"
  },
  {
    "id": 5,
    "country": "Pakistan",
    "image_link": "https://cbx57v6vu4bo.wpcdn.shift8cdn.com/wp-content/uploads/2021/11/Palestine-to-take-trade-tourism-ties-with-Pakistan-to-optimum-level-Ambassador-1068x561.jpg",
    "news": {
      "title": "Pakistan voices support for Palestine",
      "brief": "Pakistan has been a vocal supporter of Palestine and has condemned Israel's actions in the current conflict.",
      "detailed": "Pakistan's Prime Minister Imran Khan has called for an end to the violence and has criticized Israel's actions as 'war crimes.' The Pakistani government has also sent aid to Gaza and has called for an emergency meeting of the Organization of Islamic Cooperation to discuss the situation."
    },
    "reference": "https://www.aljazeera.com/news/2023/10/23/which-countries-have-sent-aid-to-gaza-so-far"
  },

  {
    "id": 6,
    "country": "Turkey",
    "image_link": "https://www.al-monitor.com/sites/default/files/styles/article_header/public/almpics/2019/05/RTS19R85.jpg/RTS19R85.jpg?h=a5ae579a&itok=BbNvYeUV",
    "news": {
      "title": "Turkey supports Palestine",
      "brief": "Turkey has been a vocal supporter of Palestine and has condemned Israel's actions in the region.",
      "detailed": "Turkey has been a vocal supporter of Palestine and has condemned Israel's actions in the region. Turkish President Recep Tayyip Erdogan has called for an end to the violence and has criticized Israel's use of force against Palestinian civilians. Turkey has also provided humanitarian aid to Gaza and has pledged to continue supporting Palestine."
    },
    "reference": "https://www.livemint.com/news/world/israelhamas-war-canada-turkey-iran-egypt-qatar-here-is-the-list-of-nations-that-have-supported-palestine-gaza-11697363499130.html"
  },
  {
    "id": 10,
    "country": "Sudan",
    "image_link": "https://www.aljazeera.com/wp-content/uploads/2020/06/bb6cd4f3065d4e1ca6fc0eff195f87ef_18.jpeg?resize=770%2C513&quality=80",
    "news": {
      "title": "Sudan supports Palestine",
      "brief": "Sudan has expressed support for Palestine and has condemned Israel's actions in the region.",
      "detailed": "Sudan has expressed support for Palestine and has condemned Israel's actions in the region. Sudanese leaders have called for an end to the violence and have criticized Israel's use of force against Palestinian civilians. Sudan has also provided humanitarian aid to Gaza and has pledged to continue supporting Palestine."
    },
    "reference": "https://www.livemint.com/news/world/israelhamas-war-canada-turkey-iran-egypt-qatar-here-is-the-list-of-nations-that-have-supported-palestine-gaza-11697363499130.html"
  },
  {
    "id": 11,
    "country": "Jordan",
    "image_link": "https://static01.nyt.com/images/2021/05/14/world/14israel-gaza-briefing-jordan/merlin_187604757_f3c70313-b212-4a58-bfa6-95650a6807c2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "news": {
      "title": "Jordan supports Palestine",
      "brief": "Jordan has expressed support for Palestine and has called for an end to the violence in the region.",
      "detailed": "Jordan has expressed support for Palestine and has called for an end to the violence in the region. Jordanian leaders have criticized Israel's actions in Gaza and have called for a ceasefire. Jordan has also provided humanitarian aid to Gaza and has pledged to continue supporting Palestine."
    },
    "reference": "https://www.livemint.com/news/world/israelhamas-war-canada-turkey-iran-egypt-qatar-here-is-the-list-of-nations-that-have-supported-palestine-gaza-11697363499130.html"
  },
  {
    "id": 12,
    "country": "Canada",
    "image_link": "https://www.newarab.com/sites/default/files/1232938622.jpeg",
    "news": {
      "title": "Canada supports Palestine",
      "brief": "Canada has expressed support for Palestine and has provided humanitarian aid to Gaza.",
      "detailed": "Canada has expressed support for Palestine and has provided humanitarian aid to Gaza. Canadian leaders have criticized Israel's actions in the region and have called for an end to the violence. Canada has pledged to continue supporting Palestine."
    },
    "reference": "https://www.livemint.com/news/world/israelhamas-war-canada-turkey-iran-egypt-qatar-here-is-the-list-of-nations-that-have-supported-palestine-gaza-11697363499130.html"
  }
];

let israelBrands = [{
  "id": 1,
  "brand": "Apple",
  "image_link": "https://static.timesofisrael.com/www/uploads/2016/08/000_FQ0UD.jpg",
  "news": {
      "title": "Apple to open new development center in Jerusalem",
      "brief": "Apple has announced plans to open a new development center in Jerusalem, which will focus on hardware and software development.",
      "detailed": "The center will employ hundreds of engineers and will be Apple's first development center in Israel. Apple CEO Tim Cook has said that the company is committed to supporting Israel's technology industry and sees the country as a key market for its products."
  },
  "reference": "https://www.timesofisrael.com/apple-to-open-new-development-center-in-jerusalem/"},{
  "id": 2,
  "brand": "Microsoft",
  "image_link": "https://media.licdn.com/dms/image/D4D22AQHSAA4GblzpHA/feedshare-shrink_800/0/1679903878949?e=1701302400&v=beta&t=EbNHoxFzl7Z3A-R6bIvXZv2OAmdsNNqeofr6ebYsJIA",
  "news": {
      "title": "Microsoft to open first cloud data center in Israel",
      "brief": "Microsoft has announced plans to open its first cloud data center in Israel, which will provide cloud services to customers in the region.",
      "detailed": "The data center will be located in the Tel Aviv area and will be part of Microsoft's global network of cloud data centers. The move is part of Microsoft's commitment to supporting Israel's technology industry and providing cloud services to customers in the region."
  },
  "reference": "https://www.timesofisrael.com/microsoft-to-open-first-cloud-data-center-in-israel/"
},
{       "id": 3,
  "brand": "Intel",
  "image_link": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iFq.iDmhOYho/v1/-1x-1.jpg",
  "news": {
      "title": "Intel to invest $10 billion in new Israeli chip plant",
      "brief": "Intel has announced plans to invest $10 billion in a new chip plant in Israel, which will produce advanced processors for use in data centers and other applications.",
      "detailed": "The new plant will be located in the southern city of Kiryat Gat and will employ thousands of workers. Intel CEO Pat Gelsinger has said that Israel has a major role to play in the company's revival and that the new plant will help to strengthen Israel's technology industry."
  },
  "reference": "https://en.globes.co.il/en/article-israel-has-major-role-to-play-in-intel-revival-1001385860"
},{
  "id": 4,
  "brand": "Hyundai",
  "image_link": "https://koreajoongangdaily.joins.com/data/photo/2023/10/17/885e9d62-4777-4da3-bdc7-459843561dbb.jpg",
  "news": {
      "title": "Amnesty International calls on Hyundai to end link with war crimes in Masafer Yatta",
      "brief": "Amnesty International has called on Hyundai to end its link with war crimes in Masafer Yatta, a Palestinian village in the West Bank.",
      "detailed": "Hyundai has been accused of providing construction equipment to Israeli authorities that has been used to demolish Palestinian homes and infrastructure in the village. Amnesty International has called on Hyundai to end its involvement in these activities and to respect human rights in the region."
  },
  "reference": "https://www.amnesty.org/en/latest/news/2023/03/israel-opt-hyundai-ce-must-end-link-with-war-crimes-in-masafer-yatta/"
},{
  "id": 5,
  "brand": "Puma",
  "image_link": "https://www.amostrust.org/media/4063/amos_trust_palestine_justice_change_the_record_boycott_puma_carousel.jpg",
  "news": {
      "title": "Puma faces boycott over sponsorship of Israeli soccer teams",
      "brief": "Puma is facing a boycott over its sponsorship of Israeli soccer teams, which critics say is a violation of international law.",
      "detailed": "Puma has been accused of supporting Israel's occupation of Palestinian territories by sponsoring soccer teams in Israeli settlements in the West Bank. The company has defended its sponsorship deals, saying that it does not support any political agenda and that it is committed to promoting peace and respect for human rights."
  },
  "reference": "https://www.theguardian.com/world/2021/nov/23/puma-faces-boycott-over-sponsorship-of-israeli-soccer-teams"
},{
  "id": 6,
  "brand": "Tom Ford",
  "image_link": "https://media.licdn.com/dms/image/D4E0BAQH9tPiLt38cxA/company-logo_200_200/0/1695305566079?e=2147483647&v=beta&t=er2z4E0XEEsougatDEiiqIlaKhIJ4JnbpT2yTPKZqbM",
  "news": {
      "title": "Tom Ford supports Israel",
      "brief": "Tom Ford, the fashion designer, has expressed support for Israel.",
      "detailed": "Tom Ford has been a vocal supporter of Israel and has visited the country several times. In an interview with The Jerusalem Post, Ford said that he was impressed by Israel's creativity and innovation and that he saw the country as a key market for his fashion brand."
  },
  "reference": "https://www.brandedgirls.com/international-makeup-brands-that-support-israel/"
},{
  "id": 7,
  "brand": "AXA XL",
  "image_link": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Faea844bc-1f2b-11e8-a895-1ba1f72c2c11?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
  "news": {
      "title": "AXA XL announces new leadership team in Israel",
      "brief": "AXA XL has announced a new leadership team in Israel, which will focus on expanding the company's presence in the region.",
      "detailed": "The new team will be led by Yael Ben-Ner, who has been appointed as country manager for Israel. AXA XL has said that it sees Israel as a key market for its insurance and risk management services and is committed to supporting the country's technology industry."
  },
  "reference": "https://axaxl.com/press-releases/axa-xl-announces-new-leadership-team"
},{
  "id": 8,
  "brand": "Papa John's",
  "image_link": "https://yeahthatskosher.com/wp-content/uploads/2021/08/papa-johns-pizza-kosher-israel-petach-tikva.jpg",
  "news": {
      "title": "Papa John's hires former Nike exec to learn from retailers",
      "brief": "Papa John's has hired a former Nike executive to help the company learn from retailers and improve its customer experience.",
      "detailed": "The move is part of Papa John's efforts to stay competitive in the fast-changing restaurant industry and to expand its presence in Israel. Papa John's has said that it sees Israel as a key market for its pizza delivery services and is committed to supporting the country's economy."
  },
  "reference": "https://www.pymnts.com/news/ecommerce/2023/papa-johns-hires-former-nike-exec-restaurants-learn-retailers/"
}];

let israelCountries = [{
  "id": 1,
  "name": "United States", 
  "image_link": "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_428,w_640/430464",
  "news": {
    "title": "US Affirms Unwavering Support for Israel's Right to Defend Itself",
    "brief": "The US has expressed strong support for Israel's right to defend itself and has not condemned its military actions in Gaza.",
    "detailed": "The US has blocked UN condemnations of Israel's actions [1]. The US gives $3.8 billion annually in military aid to Israel [2]. President Biden affirmed support for Israel's right to self-defense in call with Netanyahu [3]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.state.gov/israel-hamas-conflict-latest-updates/",
      "https://www.defense.gov/News/News-Stories/Article/Article/3551956/us-helps-israel-defend-against-hamas-attacks/"
  ]},{
  "id": 2,
  "name": "United Kingdom", 
  "image_link": "https://static.jewishnews.co.uk/jewishnews/uploads/2020/04/Israeli-British-flag.jpg",
  "news": {
    "title": "UK Joins US and Other Countries in Supporting Israel",
    "brief": "The UK has joined the US and other countries in expressing support for Israel's right to defend itself.",
    "detailed": "The leaders of France, Germany, Italy, and Britain made a joint statement of “steadfast and united support to the state of Israel” which condemned Hamas’ “appalling acts of terrorism” [4]. Other Western nations, including Australia, Canada, and New Zealand, have condemned Hamas and made statements of solidarity with Israel [1]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.smh.com.au/world/middle-east/which-side-countries-that-back-israel-and-those-that-oppose-it-20231011-p5ebiz.html"
  ]},{
  "id": 3,
  "name": "France", 
  "image_link": "https://static.timesofisrael.com/www/uploads/2014/07/France-Pro-Israel-Pro_Horo1.jpg",
  "news": {
    "title": "France Joins US and Other Countries in Supporting Israel",
    "brief": "France has joined the US and other countries in expressing support for Israel's right to defend itself.",
    "detailed": "The leaders of France, Germany, Italy, and Britain made a joint statement of “steadfast and united support to the state of Israel” which condemned Hamas’ “appalling acts of terrorism” [4]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.smh.com.au/world/middle-east/which-side-countries-that-back-israel-and-those-that-oppose-it-20231011-p5ebiz.html"
  ]},{
  "id": 4,
  "name": "Australia", 
  "image_link": "https://imengine.public.prod.mmg.navigacloud.com/?uuid=201027fe-53a5-597a-a690-08972a9044d9&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.75&x=0&y=0&width=1200&height=675",
  "news": {
    "title": "Australia Joins US and Other Countries in Supporting Israel",
    "brief": "Australia has joined the US and other countries in expressing support for Israel's right to defend itself.",
    "detailed": "Other Western nations, including Australia, Canada, and New Zealand, have condemned Hamas and made statements of solidarity with Israel [1]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.smh.com.au/world/middle-east/which-side-countries-that-back-israel-and-those-that-oppose-it-20231011-p5ebiz.html"
  ]},{
  "id": 5,
  "name": "Germany", 
  "image_link": "https://cdn.prod.www.spiegel.de/images/1740cbab-4e6b-4e47-b163-defc49c9240b_w640_r1.3496_fpx37.03_fpy49.98.jpg",
  "news": {
    "title": "Germany Joins US and Other Countries in Supporting Israel",
    "brief": "Germany has joined the US and other countries in expressing support for Israel's right to defend itself.",
    "detailed": "The leaders of France, Germany, Italy, and Britain made a joint statement of “steadfast and united support to the state of Israel” which condemned Hamas’ “appalling acts of terrorism” [4]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.smh.com.au/world/middle-east/which-side-countries-that-back-israel-and-those-that-oppose-it-20231011-p5ebiz.html"
  ]},{
  "id": 6,
  "name": "Italy", 
  "image_link": "https://www.israelhayom.com/wp-content/uploads/2021/02/israel-italy.jpg",
  "news": {
    "title": "Italy Joins US and Other Countries in Supporting Israel",
    "brief": "Italy has joined the US and other countries in expressing support for Israel's right to defend itself.",
    "detailed": "The leaders of France, Germany, Italy, and Britain made a joint statement of “steadfast and united support to the state of Israel” which condemned Hamas’ “appalling acts of terrorism” [4]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.smh.com.au/world/middle-east/which-side-countries-that-back-israel-and-those-that-oppose-it-20231011-p5ebiz.html"
  ]},{
  "id": 7,
  "name": "Canada", 
  "image_link": "https://thecjn.ca/wp-content/uploads/2015/11/Canada-Israel-Flag-e1561476924141.jpg",
  "news": {
    "title": "Canada Joins Other Western Nations in Supporting Israel",
    "brief": "Canada has joined other Western nations in condemning Hamas and expressing solidarity with Israel.",
    "detailed": "Other Western nations, including Australia, Canada, and New Zealand, have condemned Hamas and made statements of solidarity with Israel [1]."
  },
  "references": [
      "https://currentaffairs.adda247.com/list-of-countries-supporting-israel/",
      "https://www.smh.com.au/world/middle-east/which-side-countries-that-back-israel-and-those-that-oppose-it-20231011-p5ebiz.html"
  ]
}];

// Inserting the data to cards

function insertCardData(cardInfo, cardElement) {
  let imgElement = cardElement.querySelector('.card-img-top');
  let textElement = cardElement.querySelector('.card-text');
  let moreContentElement = cardElement.querySelector('.show-more-content p');

  if(imgElement) imgElement.src = cardInfo.image_link;
  if(textElement) textElement.textContent = cardInfo.news.brief;
  if(moreContentElement) moreContentElement.textContent = cardInfo.news.detailed;
}

function insertData(brandData, countryData, cardElements) {
  for (let i = 0; i < brandData.length; i++) {
    insertCardData(brandData[i], cardElements[i]);
  }

  for (let i = 0; i < countryData.length; i++) {
    insertCardData(countryData[i], cardElements[i + brandData.length]);
  }
}

function updateCards() {
  // Select the h1 and p elements
  const h1Element = document.querySelector('main .py-5 h1');
  const pElement = document.querySelector('main .py-5 p');

  // Show/hide based on toggle
  if (toggle.checked) {
    showCards(palestineCards);
    hideCards(israelCards);
    insertData(palestineBrands, palestineCountries, palestineCards);

    // Set the h1 and p content for the Palestine side
    h1Element.textContent = 'Stand with Palestine';
    pElement.textContent = 'Your source for supporting Palestine and advocating for justice.';
  } else {
    hideCards(palestineCards);
    showCards(israelCards);
    insertData(israelBrands, israelCountries, israelCards);

    // Set the h1 and p content for the Israel side
    h1Element.textContent = 'Boycott Israel: Nonviolent Activism for Palestinian Rights'; // replace with your actual text
    pElement.textContent = 'Together we can promote activism, boycotts, and nonviolent resistance to achieve justice.'; // replace with your actual text
  }
}

// Call updateCards when the page loads and when the toggle state changes
updateCards();
toggle.addEventListener('change', updateCards);