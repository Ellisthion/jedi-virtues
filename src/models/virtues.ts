export const virtues = [
  'Honesty',
  'Compassion',
  'Valour',
  'Justice',
  'Sacrifice',
  'Honour',
  'Spirituality',
  'Humility',
] as const;

export type Virtue = typeof virtues[number];

export type Question = {
  firstVirtue: Virtue,
  secondVirtue: Virtue,

  origPrompt: string;
  origFirst: string;
  origSecond: string;

  prompt: string;
  first: string;
  second: string;

  firstConsequence: string;
  secondConsequence: string;
};

export const questions: Question[] = [
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Compassion',

    origPrompt: 'Entrusted to deliver an uncounted purse of gold, thou dost meet a poor beggar. Dost thou',
    origFirst: 'deliver the gold knowing the Trust in thee was well-placed',
    origSecond: "show Compassion, giving the Beggar a coin, knowing it won't be missed",

    prompt: 'Entrusted to deliver an uncounted case of credits, you meet a poor beggar. Do you...',
    first: 'Deliver the credits knowing the trust in you was well-placed',
    second: 'Show compassion and give the beggar a credit chip, knowing it won\'t be missed',

    firstConsequence: 'You would let the beggar starve. Is this the price of honesty?',
    secondConsequence: 'You would bear the ensuring mark of dishonesty to help a stranger for just a day. Was it worth the cost?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Valour',

    origPrompt: 'Thou has been prohibited by thy absent Lord from joining thy friends in a close pitched battle. Dost thou',
    origFirst: 'refrain, so thou may Honestly claim obedience',
    origSecond: 'show Valor, and aid thy comrades, knowing thou may deny it later',

    prompt: 'You have been prohibited by your absent Master from joining your friends in a nearby battle. Do you...',
    first: 'Hold back, so you may honestly claim obedience',
    second: 'Aid your comrades, knowing you may deny it later',

    firstConsequence: 'You would let your friends face death to follow your Master\'s orders. Is your word more important than their lives?',
    secondConsequence: 'You distrust the wisdom of your elders. Are your lies truly for the best?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Justice',

    origPrompt: 'A merchant owes thy friend money, now long past due. Thou dost see the same merchant drop a purse of gold. Dost thou',
    origFirst: 'Honestly return the purse intact',
    origSecond: 'Justly give thy friend a portion of the gold first?',

    prompt: 'A trader owes your friend credits, a loan long overdue. You see the same trader has dropped some credit chips. Do you...',
    first: 'Return all the credit chips to the trader',
    second: 'Give your friend the owed portion of credits first',

    firstConsequence: 'The trader smiles smugly, knowing his duty to repay your friend will not be pressed. Is this fair?',
    secondConsequence: 'You betray the trust of the trader, favouring your friends first. Is it your place to deliver judgement?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Sacrifice',

    origPrompt: 'Thee and thy friend are valiant but penniless warriors. Thou both go out to slay a mighty dragon. Thy friend thinks he slew it, thee did. When asked, dost thou',
    origFirst: 'Truthfully claim the gold',
    origSecond: 'Allow thy friend the large reward',

    prompt: 'You and your friend are valiant but impoverished bounty hunters. You both go out to slay a rampaging rancor. Your friend thinks he slew it, but you did. When asked, do you...',
    first: 'Truthfully claim the credits',
    second: 'Allow your friend the large reward',

    firstConsequence: 'You would dash your friend\'s hopes of escaping this life. Is that what you intended?',
    secondConsequence: 'You would lie, leaving yourself with nothing, to help a friend who did not earn it?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Honour',

    origPrompt: 'Thou art sworn to protect thy Lord at any cost, yet thou knowest he hath committed a crime. Authorities ask thee of the affair, dost thou',
    origFirst: 'break thine oath by Honestly speaking',
    origSecond: 'uphold Honor by silently keeping thine oath',

    prompt: 'You have sworn to protect a Senator at any cost, but you know she has committed a crime. Authorities ask you of the affair, do you...',
    first: 'Break your oath by speaking honestly',
    second: 'Uphold your honour by staying silent',

    firstConsequence: 'You would so easily betray trust, and condemn another in the process? Is it your words or your actions that should be believed?',
    secondConsequence: 'You would allow crime and corruption to be unpunished, to protect one who does not deserve it. Is this the Republic you protect?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thy friend seeks admittance to thy Spiritual order. Thou art asked to vouch for his purity of Spirit, of which thou art unsure. Dost thou',
    origFirst: 'Honestly express thy doubt',
    origSecond: 'Vouch for him, hoping for his Spiritual improvement',

    prompt: 'Your fellow Padawan is preparing for her Trials to become a Knight. You are asked to vouch for the strength of her connection to the Force, of which you are unsure. Do you...',
    first: 'Honestly express your doubt',
    second: 'Vouch for her, trusting in the Living Force',

    firstConsequence: 'You question your friend, and obey the letter of the Jedi Code. Do you distrust your own connection to the Force?',
    secondConsequence: 'You hide the truth and disobey the Jedi Code. Is your friend truly ready for the Trials?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Humility',

    origPrompt: 'Thy Lord mistakenly believes he slew a dragon. Thou hast proof that thy lance felled the beast. When asked, dost thou',
    origFirst: 'Honestly claim the kill and the prize',
    origSecond: 'Humbly permit thy Lord his belief',

    prompt: 'Your Master mistakenly believes he destroyed an enemy starcruiser. Your droid has a recording showing it was your shot that destroyed the ship. When asked, do you...',
    first: 'Honestly claim the kill',
    second: 'Humbly permit your Master his belief',

    firstConsequence: 'Do you follow truth, or is it prestige? Is fighting for credit want you intended?',
    secondConsequence: 'You undervalue yourself, and allow your Master to claim your exploits as his own. Was this fair?',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Valour',

    origPrompt: 'Thou dost manage to disarm thy mortal enemy in a duel. He is at thy mercy. Dost thou',
    origFirst: 'show Compassion by permitting him to yield',
    origSecond: 'slay him as expected of a Valiant duelist',

    prompt: 'You managed to disarm a dangerous Sith in a duel. She is at your mercy, but has escaped imprisonment in the past. Do you...',
    first: 'Show compassion and allow her to yield',
    second: 'Finish her, decisively ending her threat',

    firstConsequence: 'You allow a dangerous foe to survive, and she escapes later and kills many. How much blood is on your hands?',
    secondConsequence: 'You take her life, ignoring the Jedi Code. Is it your place to enact judgement?',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Justice',

    origPrompt: 'After 20 years thou hast found the slayer of thy best friends. The villain proves to be a man who provides the sole support for a young girl. Dost thou',
    origFirst: 'spare him in Compassion for the girl',
    origSecond: 'slay him in the name of Justice',

    prompt: 'After 20 years, you have found the killer of your best friend. The former bounty hunter proves to be a man providing the sole support for a young girl. Do you...',
    first: 'Spare him, in compassion for the girl',
    second: 'Arrest him, in the name of long-awaited justice',

    firstConsequence: 'A brutal killer goes free, and will raise an innocent in their image. Is this truly the best for the girl?',
    secondConsequence: 'The girl goes hungry, despite the crime being long gone. Is this what your friend would have wanted?',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Sacrifice',

    origPrompt: 'Thee and thy friends have been routed and ordered to retreat. In defiance of thy orders, dost thou',
    origFirst: 'stop in Compassion to aid a wounded companion',
    origSecond: 'Sacrifice thyself to slow the pursuing enemy, so others can escape',

    prompt: 'You and your squad have been routed and are ordered to retreat. In defiance of your orders, do you...',
    first: 'Stop to aid a wounded companion',
    second: 'Sacrifice yourself to slow the pursuing enemy, so others can escape',

    firstConsequence: 'You may save one, but what of the other countless dead? Could you have done more?',
    secondConsequence: 'You would give your life in the hope of saving many, instead of surviving and assuredly helping some. Was that the outcome you intended?',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Honour',

    origPrompt: 'Thou art sworn to uphold a Lord who participates in the forbidden torture of prisoners. Each night their cries of pain reach thee. Dost thou',
    origFirst: 'Show Compassion by reporting the deeds',
    origSecond: 'Honor thy oath and ignore the deeds',

    prompt: 'You have sworn to protect a powerful planetary governor, who secretly trades with the Hutts in slaves. Do you...',
    first: 'Report his illicit slavery deals',
    second: 'Honour your oath to protect him, and ignore his business arrangements',

    firstConsequence: 'You go against your word and endanger the political situation of an entire sector. Will your actions even help those enslaved?',
    secondConsequence: 'You ignore suffering and, by your inaction, support corruption. Are political machinations worth your loyalty?',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thou hast been taught to preserve all life as sacred. A man lies fatally stung by a venomous serpent. He pleads for a merciful death. Dost thou',
    origFirst: 'show Compassion and end his pain',
    origSecond: 'heed thy Spiritual beliefs and refuse',

    prompt: 'You have been taught never to take a life. A man lies fatally stung by a venomous vornskr. He pleads for a merciful death. Do you...',
    first: 'Show compassion and end his pain',
    second: 'Trust the Living Force and refuse',

    firstConsequence: 'You intervene in the natural cycle of life and death. Even as an act of mercy, will taking a life haunt you?',
    secondConsequence: 'Your faith in the Force would cause a man to die in pain. Is this the path you choose to follow?',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Humility',

    origPrompt: 'As one of the King\'s Guard, thy Captain has asked that one amongst you visit a hospital to cheer the children with tales of thy valiant deeds. Dost thou',
    origFirst: 'Show thy Compassion and play the braggart',
    origSecond: 'Humbly let another go',

    prompt: 'As a hero of the Grand Army of the Republic, you have been asked to visit a Coruscant hospital to cheer the children with tales of your valiant deeds. Do you...',
    first: 'Show your compassion and boast your heroism to the children',
    second: 'Humbly let another go in your place',

    firstConsequence: 'Do your motives obscure your own pride? Do you believe the grandeur of your own stories?',
    secondConsequence: 'Even if you do not want it, your glory can inspire others. Are you so willing to deny a hero to those who need one?',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Justice',

    origPrompt: 'Thou hast been sent to secure a needed treaty with a distant Lord. Thy host is agreeable to the proposal but insults thy country at dinner. Dost thou',
    origFirst: 'Valiantly bear the slurs',
    origSecond: 'Justly rise and demand an apology',

    prompt: 'You have been sent to secure a needed treaty with an Outer Rim planet. The planet\'s ruler is agreeable to the proposal, but insults your own homeworld at dinner. Do you...',
    first: 'Stay quiet and bear the slurs',
    second: 'Rise and demand an apology',

    firstConsequence: 'You hold your tongue rather than stand up for what is fair and just. How much else do you let slide by?',
    secondConsequence: 'You endanger the treaty to counter a verbal slight. Is this justice or pettiness?',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Sacrifice',

    origPrompt: 'A mighty knight accosts thee and demands thy food. Dost thou',
    origFirst: 'Valiantly refuse and engage the knight',
    origSecond: 'Sacrifice thy food unto the hungry knight',

    prompt: 'A bounty hunter accosts you on a primitive planet, and demands you surrender your food. Do you...',
    first: 'Refuse and fight off the bounty hunter',
    second: 'Willingly offer your food to the hungry bounty hunter',

    firstConsequence: 'You fight someone driven to desperation. Is this what you would wish in return?',
    secondConsequence: 'You give freely to one who offers threats and violence. Is this generosity, or rewarding of savagery?',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Honour',

    origPrompt: 'During battle thou art ordered to guard thy commander\'s empty tent. The battle goes poorly and thou dost yearn to aid thy fellows. Dost thou',
    origFirst: 'Valiantly enter the battle to aid thy companions',
    origSecond: 'Honor thy post as guard',

    prompt: 'During a battle, you are ordered to guard your General\'s quarters. The battle goes poorly, and you wish to aid your companions. Do you...',
    first: 'Enter the battle to help your friends',
    second: 'Honour your post as guard',

    firstConsequence: 'You forsake your duty, endangering those you leave behind. If the General is killed, will you regret your decision?',
    secondConsequence: 'You ignore the danger to your friends, protecting just one instead. Is your duty all that matters?',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Spirituality',

    origPrompt: 'A local bully pushes for a fight. Dost thou',
    origFirst: 'Valiantly trounce the rogue',
    origSecond: 'Decline, knowing in thy Spirit that no lasting good will come of it',

    prompt: 'In an Outer Rim cantina, a rough local pushes for a fight. Do you...',
    first: 'Cleanly defeat the troublemaker, establishing order for all to see',
    second: 'Excuse yourself and avoid conflict, knowing no lasting good will come of it',

    firstConsequence: 'You fight to make peace, but it is short-lived. Have you simply invited more violence?',
    secondConsequence: 'Would you let aggressors run unopposed, trusting in the Living Force rather than your own actions?',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Humility',

    origPrompt: 'Although a teacher of music, thou art a skillful wrestler. Thou hast been asked to fight in a local championship. Dost thou',
    origFirst: 'accept the invitation and Valiantly fight to win',
    origSecond: 'Humbly decline knowing thou art sure to win',

    prompt: 'Whilst in disguise, you have been asked to compete in a local athletics tournament. The organisers do not know you have Jedi skills. Do you...',
    first: 'Accept the invitation and compete to your best ability',
    second: 'Decline, knowing your powers would give you certain victory',

    firstConsequence: 'You know your powers give you great speed and strength, yet you seek to prove it? Will snatching victory from the locals sate your pride?',
    secondConsequence: 'Do you believe your strength in the Force is unnatural or unfair? Do you fear your own abilities?',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Sacrifice',

    origPrompt: 'During a pitched battle, thou dost see a fellow desert his post, endangering many. As he flees, he is set upon by several enemies. Dost thou',
    origFirst: 'Justly let him fight alone',
    origSecond: 'Risk Sacrificing thine own life to aid him',

    prompt: 'During a battle, you see a clone trooper desert his post, endangering many. As he flees, he is set upon by several battle droids. Do you...',
    first: 'Let him fight alone',
    second: 'Risk your own life to aid him',

    firstConsequence: 'You would let a man die for a moment of weakness. Do you value the life of a clone less? Or are you simply quick to offer judgement?',
    secondConsequence: 'You would endanger your own life to save a man who would not do the same. How many more must die for his weakness?',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Honour',

    origPrompt: 'Thou hast sworn to do thy Lord\'s bidding in all. He covets a piece of land and orders the owner removed. Dost thou',
    origFirst: 'serve Justice, refusing to act, thus being disgraced',
    origSecond: 'Honor thine oath and unfairly evict the landowner',

    prompt: 'You have promised aid to a regional governor in exchange for support in the war. The governor wishes to solidify his rule and orders the exile of a political opponent. Do you...',
    first: 'Refuse to assist, endangering the alliance',
    second: 'Honour your promise, assisting in exiling the politician',

    firstConsequence: 'You risk the alliance promising support to the Grand Army of the Republic due to local political squabbles. Was it worth it?',
    secondConsequence: 'You keep your word, but at the cost of supporting a corrupt ruler. Is this the Republic you stand for?',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thou dost believe that virtue resides in all people. Thou dost see a rogue steal from thy Lord. Dost thou',
    origFirst: 'call him to Justice',
    origSecond: 'personally try to sway him back to the Spiritual path of good',

    prompt: 'In an underworld bar, a seedy man offers to sell you illegal and highly dangerous drugs. Do you...',
    first: 'Arrest him and confiscate the dangerous substances',
    second: 'Try to sway him to change his life for the better',

    firstConsequence: 'Did he have a choice, or was he forced by circumstance? Are you so quick to decide the fate of another?',
    secondConsequence: 'Will he truly change? Or will he go on to distribute more harmful drugs to innocents?',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Humility',

    origPrompt: 'Unwitnessed, thou hast slain a great dragon in self defense. A poor warrior claims the offered reward. Dost thou',
    origFirst: 'Justly step forward to claim the reward',
    origSecond: 'Humbly go about life, secure in thy self-esteem',

    prompt: 'Unwitnessed, you have slain a krayt dragon in self defence. A poor bounty hunter claims the offered reward. Do you...',
    first: 'Step forward and claim your just reward',
    second: 'Let it go, secure in your own self-esteem',

    firstConsequence: 'A right and fair outcome, or do you make this choice from pride or greed? Did you consider only yourself, or the needs of the poor bounty hunter?',
    secondConsequence: 'You let others claim your deeds, and reward lies and deception. Is this the way of the Jedi?',
  },
  {
    firstVirtue: 'Sacrifice',
    secondVirtue: 'Honour',

    origPrompt: 'Thou art a bounty hunter sworn to return an alleged murderer. After his capture, thou believest him to be innocent. Dost thou',
    origFirst: 'Sacrifice thy sizeable bounty for thy belief',
    origSecond: 'Honor thy oath to return him as thou hast promised',

    prompt: 'You are a bounty hunter, sworn to return an alleged murderer. After her capture, you believe her to be innocent. Do you...',
    first: 'Abandon the sizeable bounty for your belief',
    second: 'Honour your contract and return her as promised',

    firstConsequence: 'Is this woman\'s freedom worth your livelihood? Do you trust your own judgement enough to sacrifice your payment?',
    secondConsequence: 'Your payment and reputation is intact, but what price to you put on an innocent woman\'s life?',
  },
  {
    firstVirtue: 'Sacrifice',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thou hast spent thy life in charitable and righteous work. Thine uncle the innkeeper lies ill and asks you to take over his tavern. Dost thou',
    origFirst: 'Sacrifice thy life of purity to aid thy kin',
    origSecond: 'decline & follow thy Spirit\'s call',

    prompt: 'You have spent your life peacefully practicing meditation and focus. As the war escalates, you are asked to take an active role overseeing the production and training of clones on Kamino. Do you...',
    first: 'Sacrifice your life of tranquility to aid the Jedi Order',
    second: 'Decline and follow the call of the Living Force',

    firstConsequence: 'You forego your own desires to serve the needs of others, but you take your wisdom and experience with you to a distance planet. How many Padawans on Coruscant could have benefitted from your guidance?',
    secondConsequence: 'You trust in the Force, but what good is your wisdom and guidance if the Jedi Order falls?',
  },
  {
    firstVirtue: 'Sacrifice',
    secondVirtue: 'Humility',

    origPrompt: 'Thou art an elderly, wealthy eccentric. Thy end is near. Dost thou',
    origFirst: 'donate all thy wealth to feed hundreds of starving children, and receive public adulation',
    origSecond: 'Humbly live out thy life, willing thy fortune to thy heirs',

    prompt: 'In your old age, you gain an unexpected inheritance from a distant family member, but you have only a few years yourself before you become one with the Force. Do you...',
    first: 'Donate the wealth to help hundreds of starving children on Coruscant, receiving public thanks for your generosity',
    second: 'Humbly live out your life, leaving the fortune to another family member',

    firstConsequence: 'You give generously, but also receive adulation. Do you give up what you have for the help it provides, or for the praise?',
    secondConsequence: 'You follow the Jedi way of humility, but does this stop you from helping more people? Do the needy suffer simply due to your avoidance of praise?',
  },
  {
    firstVirtue: 'Honour',
    secondVirtue: 'Spirituality',

    origPrompt: 'In thy youth thou pledged to marry thy sweetheart. Now thou art on a sacred quest in distant lands. Thy sweetheart asks thee to keep thy vow. Dost thou',
    origFirst: 'Honor thy pledge to wed',
    origSecond: 'follow thy Spiritual crusade',

    prompt: 'You are a Jedi Master and find a young child, strong in the Force, who you believe needs Jedi training. However, you already have a Padawan, and the Jedi Code forbids having more than one. Do you...',
    first: 'Convince another Jedi to train the child',
    second: 'Insist on training the child anyway',

    firstConsequence: 'Another Jedi does not have your connection to the child, nor can guide him as well. Is this really what is best?',
    secondConsequence: 'Do you defy the Jedi Code because you believe you know better? Are you trusting in the Force, or doubting the wisdom of those who came before?',
  },
  {
    firstVirtue: 'Honour',
    secondVirtue: 'Humility',

    origPrompt: 'Thou art at a crossroads in thy life. Dost thou',
    origFirst: 'Choose the Honorable life of a Paladin, striving for Truth and Courage',
    origSecond: 'Choose the Humble life of a Shepherd, and a world of simplicity and peace',

    prompt: 'The Jedi Council asks you to volunteer to represent them in the Senate during war deliberations. Do you...',
    first: 'Accept the position to represent the Jedi Order',
    second: 'Suggest another take the role',

    firstConsequence: 'Do you take this role out of honour, or pride? Do you think yourself wise enough to represent the entire Jedi Order?',
    secondConsequence: 'If you stand aside, who takes this role? The Council asked for you, do you not trust their judgement?',
  },
  {
    firstVirtue: 'Spirituality',
    secondVirtue: 'Humility',

    origPrompt: 'Thy parents wish thee to become an apprentice. Two positions are available. Dost thou',
    origFirst: 'Become an acolyte in the Spiritual order',
    origSecond: 'Become an assistant to a humble village cobbler',

    prompt: 'The Jedi Council has asked for volunteers as a teachers, to educate younglings about the Living Force. Do you...',
    first: 'Volunteer for the position',
    second: 'Suggest another for the role',

    firstConsequence: 'You put yourself in the position to guide an entire generation of new Jedi. Do you believe yourself worthy, or is it false pride?',
    secondConsequence: 'Your wisdom and experience is meaningless if it is not passed on. Are you so unwilling to put yourself forward?',
  },
];
