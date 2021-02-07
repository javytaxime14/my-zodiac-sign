function showNameFormValues(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#form-1");
  let birthday = document.querySelector(".form-label-2")
  birthday.innerHTML = `Hi ${nameInput.value}, what's your birthday date?`
}

let nameForm = document.querySelector("#name-form");
nameForm.addEventListener("submit", showNameFormValues);

let nameButton = document.querySelector(".main-button");
nameButton.addEventListener("click", showNameFormValues);

function zodiac() {
  let birthmonth = document.getElementById("month").value;
  let birthday = document.getElementById("day").value;
  
  if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18){
      result = ("Aquarius");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/aquarius-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "January 20 - February 18"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Air</li><li>Polarity: Positive</li><li>Quality: Fixed</li><li>Ruling Planet: Uranus</li><li>Spirit Color: Sky blue</li><li>Lucky Gem: Amethyst</li><li>Flower: Orchid</li></ul><br /><p>Independent and enigmatical, Aquarians are unique. There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group. Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them. Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, they may not necessarily believe they are the 'same' people they were when they were born. Aquarians have a strong sense of social justice and making the world a better place, and see themselves as just one link in an endless human chain. They are very concerned about others, not because of how others treat them or how they want others to treat them.Aquarians can sometimes seem as if they don't care about their individual relationships, or they are holding something else at a higher value. It's not personal, and it's not a bad thing. An Aquarian has a value system that's constantly prioritizing the people who need them the most, and sometimes, that puts the people they love in a lurch.</p>"  
    }
  
  if (birthmonth == 2 && birthday >= 19 || birthmonth == 3&& birthday <= 20){
      result = ("Pisces");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/pisces-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "February 19 – March 20"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Water</li><li>Polarity: Negative</li><li>Quality: Mutable</li><li>Ruling Planet: Neptune</li><li>Spirit Color: Sea green</li><li>Lucky Gem: Moonstone</li><li>Flower: Water lily</li></ul><br /><p>Smart, creative, and deeply intuitive, Pisces can be close to psychic. Pisces feel things deeply, and have incredibly strong gut reactions. A Pisces 'knows' things from deep within, and can often judge whether a person or situation is good or bad. That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent, Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces? Pisces are sensitive, and get along well in small groups of people. Sometimes, a Pisces may feel like they have an internal and external self, and they may need to spend a lot of time solo to recalibrate those two halves of themselves. A Pisces is rarely lonely when they are by themselves, and have an active imagination. Creative, Pisces love spending time reading, exploring or creating art or music, and understanding their emotions through art.</p>"
    }
  
  if (birthmonth == 3 && birthday >= 21 || birthmonth == 4 && birthday <= 19){
      result = ("Aries");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/aries-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "March 21 – April 19"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Fire</li><li>Polarity: Positive</li><li>Quality: Cardinal</li><li>Ruling Planet: Mars</li><li>Spirit Color: Red</li><li>Lucky Gem: Diamond</li><li>Flower: Thistle & honeysuckle</li></ul><br /><p>The first sign of the Zodiac, Aries are the trailblazers. Passionate and independent, Aries will never do something just because everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max, the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal, smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, and personal lives line up exactly with the dream life they've envisioned. Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, they'll have a friend for life. An Aries will always tell you what they're thinking, with a frankness that may occasionally border on rudeness. But even if an Aries seems overly blunt with their opinion, that's only because Rams value honesty above all else. And it works both ways. While an Aries may be the first to say if they think that you just phoned in a project, they'll also be the first to compliment you for a job well done.</p>"
    }
    
  if (birthmonth == 4 && birthday >= 20|| birthmonth == 5 && birthday <= 20){
      result = ("Taurus");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/taurus-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "April 20 – May 20"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Earth</li><li>Polarity: Negative</li><li>Quality: Fixed</li><li>Ruling Planet: Venus</li><li>Spirit Color: Pink</li><li>Lucky Gem: Emerald</li><li>Flower: Rose, Poppy, & Foxglove</li></ul><br /><p>Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. Amazing friends, colleagues, and partners, Taureans value honesty above all else and are proud that their personal relationships tend to be drama free. Bulls get the reputation of being stubborn, but they're not always stuck in their ways. This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy. They will shift their thinking only if they truly have a change of heart. With a rep as one of the hardest-working signs in the Zodiac, a Bull is never afraid to roll up those sleeves and get to work, and won't blink an eye at pulling an all-nighter to get the job done. Anchored by the earth, this passionate sign is all about sensuality, and is always seeking out pleasure. Whether they're indulging in luxurious massages, spending hours in bed with their lover, or going on a long run, Taureans love feeling present in their body and frequently need to get in touch with their physical self.</p>"
    }
    
  if (birthmonth == 5 && birthday >= 21 || birthmonth == 6 && birthday <= 20){
      result = ("Gemini");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/gemini-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "May 21 – June 20"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Air</li><li>Polarity: Positive</li><li>Quality: Mutable</li><li>Ruling Planet: Mercury</li><li>Spirit Color: Yellow</li><li>Lucky Gem: Tiger's Eye & Emerald</li><li>Flower: Lavender & Lily of the Valley</li></ul><br /><p>Smart, passionate, and dynamic, Gemini is characterized by the Twins, Castor and Pollux, and is known for having two different sides they can display to the world. Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs. Energetic and quick-witted, Gemini never gets stuck in the past and doesn't ruminate on what might have been. Instead, they move forward with glass-half-full optimism and an ability to always look on the bright side—and land on their feet—in nearly any situation. With a mind that's constantly racing, even when they're just quietly hanging out, the Twins never get bored. In fact, Gemini are happy keeping their own company, and can often turn their solitary daydreams into reality.</p>"
    }
  
  if (birthmonth == 6 && birthday >= 21 || birthmonth == 7&& birthday <= 22){
      result = ("Cancer");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/cancer-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "June 21 – July 22"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Water</li><li>Polarity: Negative</li><li>Quality: Cardinal</li><li>Ruling Planet: Moon</li><li>Spirit Color: Violet</li><li>Lucky Gem: Ruby, pearl</li><li>Flower: Orchid and white rose</li></ul><br /><p>Emotional, intuitive, and practically psychic; ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. Cancers may seem prickly and standoffish at first meeting, once they make the decision to become friends with someone, that person has a friend for life. Most Cancers have been called psychic at some point, and with good reason—Cancer can often intuit relationships, ideas, and motivations before anyone has actually spoken. That can make for challenging interactions with this sign—Cancer hates small talk, especially when it contains white lies (like saying, 'How nice to see you!' when it's clear that both parties would rather avoid each other). That's why social gatherings can be overwhelming for Cancers. They'd much rather spend time in small groups where everyone is on the same page. And even though Crabs can be intense, they also have a funny side with a wry sense of humor, and they're adept at observing and mimicking people around them.</p>"
    }
  
  if (birthmonth == 7 && birthday >= 23 || birthmonth == 8 && birthday <= 22){
      result = ("Leo");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/leo-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "July 23 – August 22"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Fire</li><li>Polarity: Positive</li><li>Quality: Fixed</li><li>Ruling Planet: Sun</li><li>Spirit Color: Gold</li><li>Lucky Gem: Carnelian</li><li>Flower: Sunflower & Marigold</li></ul><br /><p>Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. They don't believe in false modesty and will be the first to praise themselves for a job well done. But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that in order to be respected and admired, he or she needs to put in the effort worthy of a leader. But it's not all hard work for Lions. Intense and energetic, Leos thrive on social interactions and have no problem making friends—although pinning them down to spend time with you is another story. Leos put themselves first, and will turn down a plan that doesn't fit with their agenda or idea of fun. This trait has gained them an unfair reputation for arrogance. </p>"
    }
  
  if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
      result = ("Virgo");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/virgo-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "August 23 – September 22"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Earth</li><li>Polarity: Negative</li><li>Quality: Mutable</li><li>Ruling Planet: Mercury</li><li>Spirit Color: Silver</li><li>Lucky Gem: Peridot</li><li>Flower: Sunflower & Marigold</li></ul><br /><p>Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends, always there to lend a hand and also lend advice. Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, and what they're going to do today isn't a drag it makes them feel in control and secure. Virgo has a rich inner life, and can sometimes seem shy at first meeting. A Virgo won't spill secrets right away, and it's important to earn a Virgo's trust. But once you do, that Virgin will be a friend for life. And if you think that you're dating a shy Virgo, trust that those walls will fall down in the bedroom. One of the most passionate signs, Virgos specialize at connecting to their physicality, and this earth sign loves and celebrates physical connection with their partner.</p>"
    }
      
  if (birthmonth == 9 && birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/libra-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "September 23 – October 22"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Air</li><li>Polarity: Positive</li><li>Quality: Cardinal</li><li>Ruling Planet: Venus</li><li>Spirit Color: Blue</li><li>Lucky Gem: Sapphire</li><li>Flower: Rose</li></ul><br /><p>Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting mediation between others. This sign has a rich inner life yet loves other people, and they're always happiest with a large group of friends, family, and coworkers on whom they can count. An air sign, Libra can often be 'up in the clouds', and while he or she is amazing at making big plans, follow through can be tricky. Working with detail-oriented signs, like Virgos or Capricorns, can help Libras actually manifest their dreams into reality, especially in the workspace. But don't call out Librans for daydreaming—their imagination is one of their biggest assets, and they often put their imagination to work by finding careers in the arts or in literature.</p>"
    }
  
  if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
      result = ("Scorpio");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/scorpio-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "October 24 – November 21"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Water</li><li>Polarity: Negative</li><li>Quality: Fixed</li><li>Ruling Planet: Pluto, Mars</li><li>Spirit Color: Black</li><li>Lucky Gem: Topaz & opal</li><li>Flower: Hibiscus & geraniums</li></ul><br /><p>Passionate, independent, and unafraid to blaze their own trail no matter what others think, Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, and won't back down from a debate. They also hate people who aren't genuine, and are all about being authentic—even if authentic isn't pretty. Because of all of these traits, a Scorpio can seem intimidating and somewhat closed off to those who don't know them well. But what people don't realize is that even though Scorpio may seem brusque, as a water sign, they also are very in tune with their emotions, and sometimes may find themselves caught up in their feelings. This leads to Scorpio's central conflict: Their feelings are what drives them and strengthens them, but their mutability can scare them and make them feel vulnerable and out of control. Because of this conflict, Scorpios, like their namesake, the scorpion, put up an outer shell and may seem prickly.</p>"
    }
  
  if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
      result = ("Sagittarius");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/06/sagittarius-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "November 22 – December 21"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Fire</li><li>Polarity: Positive</li><li>Quality: Mutable</li><li>Ruling Planet: Jupiter</li><li>Spirit Color: Light Blue</li><li>Lucky Gem: Topaz</li><li>Flower: Carnations & crocuses</li></ul><p>Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, and love stretching their horizons through a good book or movie. Sagittarius is open-hearted, generous, and big-spirited, but Sagittarius is always truthful. Because of this, they may hurt others’ feelings, or may be called out for not having tact or empathy. The latter is not true. With their keen imagination, Sagittarius is adept at putting themselves in another person’s shoes—that’s why so many Sagittarius are successful actors—but they do not feel the need to beat around the bush or lie. You can trust a Sagittarius to tell you what they really think. You can also trust a Sagittarius, period.</p>"
    }
    
    if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
      result = ("Capricorn");
      document.getElementById("sign").innerHTML="<img src='https://thoughtcatalog.com/wp-content/uploads/2020/05/capricorn-symbol.jpg'width=75%>";
      document.getElementById("date-range").innerHTML = "December 22 – January 19"
      document.getElementById("horoscope-desc").innerHTML = "<ul><li>Element: Earth</li><li>Polarity: Negative</li><li>Quality: Cardinal</li><li>Ruling Planet: Saturn</li><li>Spirit Color: Dark blue</li><li>Lucky Gem: Lapis lazuli</li><li>Flower: Pansy</li></ul><p>Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as stubborn, but they simply know what they want, and also know how they wish other people would behave. Natural rule-followers, Capricorns thrive on order and love strict rules, hierarchies, and set ways to do things. Can a Capricorn think outside the box? Yes, they can, but they prefer when they have strict boundaries to constrain against—free reign can make them feel paralyzed by choice. Capricorns are great at climbing the corporate ladder, and especially adept at making (and investing) money. Capricorns love family, and put a lot of stock in traditions. A Capricorn might stress themselves out trying to do everything perfectly—a Capricorn may feel like they must present a home-cooked meal every day, and would never admit to doing drive-thru or takeout. Capricorns believe presentation is everything, and their homes are usually Insta-worthy. </p>"
    } 
  
  let h2 = document.querySelector("h2")
  h2.innerHTML= result;

}

let birthButton = document.querySelector("#button-2");
birthButton.addEventListener("click", zodiac);

function restart(event) {
  event.preventDefault();
  location.reload();
}

let refreshButton = document.querySelector("#button-3");
refreshButton.addEventListener("click", restart);

function show() {
  div = document.getElementById('screen-2');
  div.style.display = '';
}

function close() {
  div = document.getElementById('screen-2');
  div.style.display = 'none';
}

function firstHide() {
  let x = document.getElementById("screen-1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hideSecond() {
  let x = document.getElementById("screen-2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

