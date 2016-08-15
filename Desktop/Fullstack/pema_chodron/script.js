var currentText = "";

$(document).ready(function() {

var quotes = {
afraid : [
{quote: ' "To be fully alive, fully human, and completely awake is to be continually thrown out of the nest. To live fully is to be always in no-mans land, to experience each moment as completely new and fresh. To live is to be willing to die over and over again." ',

  source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

{quote: '“When things are shaky and nothing is working, we might realize that we are on the verge of something. We might realize that this is a very vulnerable and tender place, and that tenderness can go either way. We can shut down and feel resentful or we can touch in on that throbbing quality."',

  source: "When Things Fall Apart: Heartfelt Advice for Hard Times"},

{ quote: '“Letting there be room for not knowing is the most important thing of all. When there is a big disappointment, we do not know if that is the end of the story. It may just be the beginning of a great adventure. Life is like that. We do not know anything. We call something bad; we call it good. But really we just do not know.”',

  source: "When Things Fall Apart: Heartfelt Advice for Hard Times"},

  { quote :' “We can spend our whole lives escaping from the monsters of our minds." ',
    source:"When Things Fall Apart: Heartfelt Advice for Hard Times"},


  {quote : '"People get into a heavy-duty sin and guilt trip, feeling that if things are going wrong, that means that they did something bad and they are being punished. Thats not the idea at all. The idea of karma is that you continually get the teachings that you need to open your heart. To the degree that you did not understand in the past how to stop protecting your soft spot, how to stop armoring your heart, you are given this gift of teachings in the form of your life, to give you everything you need to open further."',
  source:"Comfortable with Uncertainty: 108 Teachings on Cultivating Fearlessness and Compassion" },

  {quote : '"Let your curiosity be greater than your fear."',
  source:"Unknown"},

  {quote :'"When things are shaky and nothing is working, we might realize that we are on the verge of something."',
  source:"When Things Fall Apart: Heartfelt Advice for Hard Times"},

  {quote : '"Hope and fear come from feeling that we lack something; they come from a sense of poverty. We cannot simply relax with ourselves. We hold on to hope, and hope robs us of the present moment."',
  source:"When Things Fall Apart: Heartfelt Advice for Hard Times"}
],

stressed : [
  {quote :'“We are like children building a sand castle. We embellish it with beautiful shells, bits of driftwood, and pieces of colored glass. The castle is ours, off limits to others. We’re willing to attack if others threaten to hurt it. Yet despite all our attachment, we know that the tide will inevitably come in and sweep the sand castle away. The trick is to enjoy it fully but without clinging, and when the time comes, let it dissolve back into the sea.”' ,
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times"},

  {quote : '“Without giving up hope—that there\'s somewhere better to be, that there’s someone better to be—we will never relax with where we are or who we are.”',
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times"},

  {quote : '“The most difficult times for many of us are the ones we give ourselves.” ',
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

  {quote :'“Trying to run away is never the answer to being a fully human. Running away from the immediacy of our experience is like preferring death to life.”',
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times"},

  {quote :'“You are the sky. Everything else – it’s just the weather.” ',
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times"},

  {quote :'“Fear is a natural reaction to moving closer to the truth.”',
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

  {quote :'“As long as our orientation is toward perfection or success, we will never learn about unconditional friendship with ourselves, nor will we find compassion.”',
  source: "Signs of Spiritual Progress" },

  {quote : '“We have a choice. We can spend our whole life suffering because we can’t relax with how things really are, or we can relax and embrace the open-endedness of the human situation, which is fresh, unfixated, unbiased.”',
  source: "Living Beautifully: with Uncertainty and Change" },

   {quote :'"It is a transformative experience to simply pause instead of immediately filling up the space. By waiting, we begin to connect with fundamental restlessness as well as fundamental spaciousness."',
   source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

   {quote :'"Sticking with that uncertainty, getting the knack of relaxing in the midst of chaos, learning not to panic - this is the spiritual path."',
   source: "When Things Fall Apart: Heartfelt Advice for Hard Times"  }
   ],

angry :[
    {quote :'“Rather than letting our negativity get the better of us, we could acknowledge that right now we feel like a piece of shit and not be squeamish about taking a good look.” ' ,
    source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

  {quote :'“When we protect ourselves so we will not feel pain, that protection becomes like armor, like armor that imprisons the softness of of the heart.” ' ,
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

  {quote :'“Feelings like disappointment, embarrassment, irritation, resentment, anger, jealousy, and fear, instead of being bad news, are actually very clear moments that teach us where it is that we’re holding back. They teach us to perk up and lean in when we feel we’d rather collapse and back away. They’re like messengers that show us, with terrifying clarity, exactly where we’re stuck. This very moment is the perfect teacher, and, lucky for us, it’s with us wherever we are.”',
  source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

  {quote :' “The most fundamental aggression to ourselves, the most fundamental harm we can do to ourselves, is to remain ignorant by not having the courage and the respect to look at ourselves honestly and gently.”',
  source: "Comfortable with Uncertainty: 108 Teachings on Cultivating Fearlessness and Compassion" },

    {quote :'“At the root of all the harm we cause is ignorance.”',
    source: "When Things Fall Apart: Heartfelt Advice for Hard Times"  },

   {quote : '"We habitually erect a barrier called blame that keeps us from communicating genuinely with others, and we fortify it with our concepts of who is right and who is wrong. We do that with the people who are closest to us and we do it with political systems, with all kinds of things that we don not like about our associates or our society. It is a very common, ancient, well-perfected device for trying to feel better. Blame others. Blaming is a way to protect your heart, trying to protect what is soft and open and tender in yourself. Rather than own that pain, we scramble to find some comfortable ground."',
   source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

   {quote : '“We are all capable of becoming fundamentalists because we get addicted to other people’s wrongness.”',
   source: "When Things Fall Apart: Heartfelt Advice for Hard Times" },

   {quote :'"The truth you believe and cling to makes you unavailable to hear anything new."',
   source: "Pema Chodron"  },

   {quote :'"We are afraid that this anger or sorrow or loneliness is going to last forever. Instead, acting it out is what makes it last."',
   source: "Start Where You Are: A Guide to Compassionate Living"  }
  ],
{quote :'“Everything is fresh, the essence of realization.”'  ,
source: "When Things Fall Apart"  },

{quote :'"We do not set out to save the world; we set out to wonder how other people are doing and to reflect on how our actions affect other peoples hearts."' ,
source: "When Things Fall Apart" },

{quote :'“We can spend our whole lives escaping from the monsters of our minds.” ',
source: "When Things Fall Apart"  },

{quote :'“So even if the hot loneliness is there, and for 1.6 seconds we sit with that restlessness when yesterday we could not sit for even one, that is the journey of the warrior.”' ,
source: "When Things Fall Apart"  },

 {quote : '“Nothing ever goes away until it has taught us what we need to know.”',
 source: "When Things Fall Apart"  },

  {quote :' "Compassionate action starts with seeing yourself when you start to make yourself right and when you start to make yourself wrong. At that point you could just contemplate the fact that there is a larger alternative to either of those, a more tender, shaky kind of place where you could live." ',
  source: "When Things Fall Apart"  },

   {quote : ' "When you begin to touch your heart or let your heart be touched, you begin to discover that it is bottomless, that it does not have any resolution, that this heart is huge, vast, and limitless. You begin to discover how much warmth and gentleness is there, as well as how much space."',
   source: "When Things Fall Apart"  },

{quote :'“Rejoicing in ordinary things is not sentimental or trite. It actually takes guts. Each time we drop our complaints and allow everyday good fortune to inspire us, we enter the warrior’s world.”',
source: "When Things Fall Apart"  },

{quote :'“To be fully alive, fully human, and completely awake is to be continually thrown out of the nest.”',
source: "When Things Fall Apart" },

{quote :'“Everybody loves something, even if it’s only tortillas.”',
source: "When Things Fall Apart" },

{quote :'“Each moment is just what it is. It might be the only moment of our life; it might be the only strawberry we’ll ever eat. We could get depressed about it, or we could finally appreciate it and delight in the preciousness of every single moment of our life.”',
source: "When Things Fall Apart"  },

{quote :'"We are like children building a sandcastle. We embellish it with beautiful shells, bits of driftwood, and pieces of coloured glass. The castle is ours, off limits to others. Yet despite all our attachment, we know that the tide will inevitably come in and sweep the sandcastle away. The trick is to enjoy it fully but without clinging, and when the time comes, let it dissolve back into the sea."',
source: "When Things Fall Apart"  },

{quote :'"Determination means to use every challenge you meet as an opportunity to open your heart and soften, determined to not withdraw." ',
source: "When Things Fall Apart"  },

{quote :'"Gloriousness and wretchedness need each other. One inspires us, the other softens us."',
 source: "When Things Fall Apart"  },

{quote :'"Welcome the present moment as if you had invited it. Why? Because it is all we ever have."',
source: "When Things Fall Apart" }
  ]
}

$("button").click(function() {

    if ($(this).attr("id") === "afraid") {
        $("#introText").replaceWith(getQuote('afraid'));
      }

    if ($(this).attr("id") === "stressed") {
        $("#introText").replaceWith(getQuote('stressed'));
      }

    if ($(this).attr("id") === "angry") {
        $("#introText").replaceWith(getQuote('angry'));
      }

    if ($(this).attr("id") === "random") {
        $("#introText").replaceWith(getQuote('random'));
      }

  function getQuote (str) {
    var quotesLength = quotes[str].length - 1;
    var index = Math.floor(Math.random() * (quotesLength));
    var quoteText = quotes[str][index].quote;
    var quoteSource = quotes[str][index].source;

    currentText = quoteText;
    currentSource = quoteSource;
    var used = false;
    var text;
    var usedQuotes = [];

    if (usedQuotes.indexOf(text) === -1) {
    text = '<div id="introText" class="new">' + currentText + '<div id = "quotesource">' + "-" + quoteSource + '</div>' + '</div>'  ;
    }
    if (usedQuotes.indexOf(text) > -1 ) {
     continue;
    }
    return text;
    usedQuotes.push(text);
  }

$("#tweetQuote").attr("href", "https://twitter.com/intent/tweet?text="+ currentText + " -Pema Chodron");
  });
});
