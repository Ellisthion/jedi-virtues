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
};

export const questions: Question[] = [
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Compassion',

    origPrompt: 'Entrusted to deliver an uncounted purse of gold, thou dost meet a poor beggar. Dost thou',
    origFirst: 'deliver the gold knowing the Trust in thee was well-placed',
    origSecond: "show Compassion, giving the Beggar a coin, knowing it won't be missed",
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Valour',

    origPrompt: 'Thou has been prohibited by thy absent Lord from joining thy friends in a close pitched battle. Dost thou',
    origFirst: 'refrain, so thou may Honestly claim obedience',
    origSecond: 'show Valor, and aid thy comrades, knowing thou may deny it later',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Justice',

    origPrompt: 'A merchant owes thy friend money, now long past due. Thou dost see the same merchant drop a purse of gold. Dost thou',
    origFirst: 'Honestly return the purse intact',
    origSecond: 'Justly give thy friend a portion of the gold first?',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Sacrifice',

    origPrompt: 'Thee and thy friend are valiant but penniless warriors. Thou both go out to slay a mighty dragon. Thy friend thinks he slew it, thee did. When asked, dost thou',
    origFirst: 'Truthfully claim the gold',
    origSecond: 'Allow thy friend the large reward',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Honour',

    origPrompt: 'Thou art sworn to protect thy Lord at any cost, yet thou knowest he hath committed a crime. Authorities ask thee of the affair, dost thou',
    origFirst: 'break thine oath by Honestly speaking',
    origSecond: 'uphold Honor by silently keeping thine oath',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thy friend seeks admittance to thy Spiritual order. Thou art asked to vouch for his purity of Spirit, of which thou art unsure. Dost thou',
    origFirst: 'Honestly express thy doubt',
    origSecond: 'Vouch for him, hoping for his Spiritual improvement',
  },
  {
    firstVirtue: 'Honesty',
    secondVirtue: 'Humility',

    origPrompt: 'Thy Lord mistakenly believes he slew a dragon. Thou hast proof that thy lance felled the beast. When asked, dost thou',
    origFirst: 'Honestly claim the kill and the prize',
    origSecond: 'Humbly permit thy Lord his belief',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Valour',

    origPrompt: 'Thou dost manage to disarm thy mortal enemy in a duel. He is at thy mercy. Dost thou',
    origFirst: 'show Compassion by permitting him to yield',
    origSecond: 'slay him as expected of a Valiant duelist',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Justice',

    origPrompt: 'After 20 years thou hast found the slayer of thy best friends. The villain proves to be a man who provides the sole support for a young girl. Dost thou',
    origFirst: 'spare him in Compassion for the girl',
    origSecond: 'slay him in the name of Justice',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Sacrifice',

    origPrompt: 'Thee and thy friends have been routed and ordered to retreat. In defiance of thy orders, dost thou',
    origFirst: 'stop in Compassion to aid a wounded companion',
    origSecond: 'Sacrifice thyself to slow the pursuing enemy, so others can escape',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Honour',

    origPrompt: 'Thou art sworn to uphold a Lord who participates in the forbidden torture of prisoners. Each night their cries of pain reach thee. Dost thou',
    origFirst: 'Show Compassion by reporting the deeds',
    origSecond: 'Honor thy oath and ignore the deeds',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thou hast been taught to preserve all life as sacred. A man lies fatally stung by a venomous serpent. He pleads for a merciful death. Dost thou',
    origFirst: 'show Compassion and end his pain',
    origSecond: 'heed thy Spiritual beliefs and refuse',
  },
  {
    firstVirtue: 'Compassion',
    secondVirtue: 'Humility',

    origPrompt: 'As one of the King\'s Guard, thy Captain has asked that one amongst you visit a hospital to cheer the children with tales of thy valiant deeds. Dost thou',
    origFirst: 'Show thy Compassion and play the braggart',
    origSecond: 'Humbly let another go',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Justice',

    origPrompt: 'Thou hast been sent to secure a needed treaty with a distant Lord. Thy host is agreeable to the proposal but insults thy country at dinner. Dost thou',
    origFirst: 'Valiantly bear the slurs',
    origSecond: 'Justly rise and demand an apology',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Sacrifice',

    origPrompt: 'A mighty knight accosts thee and demands thy food. Dost thou',
    origFirst: 'Valiantly refuse and engage the knight',
    origSecond: 'Sacrifice thy food unto the hungry knight',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Honour',

    origPrompt: 'During battle thou art ordered to guard thy commander\'s empty tent. The battle goes poorly and thou dost yearn to aid thy fellows. Dost thou',
    origFirst: 'Valiantly enter the battle to aid thy companions',
    origSecond: 'Honor thy post as guard',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Spirituality',

    origPrompt: 'A local bully pushes for a fight. Dost thou',
    origFirst: 'Valiantly trounce the rogue',
    origSecond: 'Decline, knowing in thy Spirit that no lasting good will come of it',
  },
  {
    firstVirtue: 'Valour',
    secondVirtue: 'Humility',

    origPrompt: 'Although a teacher of music, thou art a skillful wrestler. Thou hast been asked to fight in a local championship. Dost thou',
    origFirst: 'accept the invitation and Valiantly fight to win',
    origSecond: 'Humbly decline knowing thou art sure to win',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Sacrifice',

    origPrompt: 'During a pitched battle, thou dost see a fellow desert his post, endangering many. As he flees, he is set upon by several enemies. Dost thou',
    origFirst: 'Justly let him fight alone',
    origSecond: 'Risk Sacrificing thine own life to aid him',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Honour',

    origPrompt: 'Thou hast sworn to do thy Lord\'s bidding in all. He covets a piece of land and orders the owner removed. Dost thou',
    origFirst: 'serve Justice, refusing to act, thus being disgraced',
    origSecond: 'Honor thine oath and unfairly evict the landowner',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thou dost believe that virtue resides in all people. Thou dost see a rogue steal from thy Lord. Dost thou',
    origFirst: 'call him to Justice',
    origSecond: 'personally try to sway him back to the Spiritual path of good',
  },
  {
    firstVirtue: 'Justice',
    secondVirtue: 'Humility',

    origPrompt: 'Unwitnessed, thou hast slain a great dragon in self defense. A poor warrior claims the offered reward. Dost thou',
    origFirst: 'Justly step forward to claim the reward',
    origSecond: 'Humbly go about life, secure in thy self-esteem',
  },
  {
    firstVirtue: 'Sacrifice',
    secondVirtue: 'Honour',

    origPrompt: 'Thou art a bounty hunter sworn to return an alleged murderer. After his capture, thou believest him to be innocent. Dost thou',
    origFirst: 'Sacrifice thy sizeable bounty for thy belief',
    origSecond: 'Honor thy oath to return him as thou hast promised',
  },
  {
    firstVirtue: 'Sacrifice',
    secondVirtue: 'Spirituality',

    origPrompt: 'Thou hast spent thy life in charitable and righteous work. Thine uncle the innkeeper lies ill and asks you to take over his tavern. Dost thou',
    origFirst: 'Sacrifice thy life of purity to aid thy kin',
    origSecond: 'decline & follow thy Spirit\'s call',
  },
  {
    firstVirtue: 'Sacrifice',
    secondVirtue: 'Humility',

    origPrompt: 'Thou art an elderly, wealthy eccentric. Thy end is near. Dost thou',
    origFirst: 'donate all thy wealth to feed hundreds of starving children, and receive public adulation',
    origSecond: 'Humbly live out thy life, willing thy fortune to thy heirs',
  },
  {
    firstVirtue: 'Honour',
    secondVirtue: 'Spirituality',

    origPrompt: 'In thy youth thou pledged to marry thy sweetheart. Now thou art on a sacred quest in distant lands. Thy sweetheart asks thee to keep thy vow. Dost thou',
    origFirst: 'Honor thy pledge to wed',
    origSecond: 'follow thy Spiritual crusade',
  },
  {
    firstVirtue: 'Honour',
    secondVirtue: 'Humility',

    origPrompt: 'Thou art at a crossroads in thy life. Dost thou',
    origFirst: 'Choose the Honorable life of a Paladin, striving for Truth and Courage',
    origSecond: 'Choose the Humble life of a Shepherd, and a world of simplicity and peace',
  },
  {
    firstVirtue: 'Spirituality',
    secondVirtue: 'Humility',

    origPrompt: 'Thy parents wish thee to become an apprentice. Two positions are available. Dost thou',
    origFirst: 'Become an acolyte in the Spiritual order',
    origSecond: 'Become an assistant to a humble village cobbler',
  },
];
