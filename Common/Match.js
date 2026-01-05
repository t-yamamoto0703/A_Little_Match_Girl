"use strict";

const IgnorantTimeLimit = 30 * 1000;
const UnjustTimeLimit = 999.99 * 1000;
const UnjustEndurance = 52;
const ArrogantTimeLimit = 30 * 1000;

/************************
  BasicDivisions
************************/
const A_Little_Match_GirlDiv = document.querySelector(
  ".A_Little_Match_GirlDiv"
); //BaseScreen
const IgnorantDiv = document.querySelector(".IgnorantDiv"); //BattleScreen
const UnjustDiv = document.querySelector(".UnjustDiv"); //BattleScreen
const ArrogantDiv = document.querySelector(".ArrogantDiv"); //BattleScreen
const ResetDialogDiv = document.querySelector("#ResetDialogDiv"); //ResetDialog
/************************
  Pictures
************************/
const pictureA_Little_Match_Girl = document.querySelector(
  "#pictureA_Little_Match_Girl"
);
const pictureSelectMatchJapanese = document.querySelector(
  "#pictureSelectMatchJapanese"
);
const pictureSelectMatch = document.querySelector("#pictureSelectMatch");
const pictureSelectLanguage = document.querySelector("#pictureSelectLanguage");
const picturePlayAudio = document.querySelector("#picturePlayAudio");
const pictureGameClear = document.querySelector("#pictureGameClear");
const pictureGameOver = document.querySelector("#pictureGameOver");
const pictureEnglishPrologue = document.querySelector(
  "#pictureEnglishPrologue"
);
/************************
  SelectAudioMode
************************/
let allMuteFlag;
let bgm;
let clickSound;
let effectSound;
let battleSound;
////////////////////
picturePlayAudio.style.display = "block";
const playAudioButton = document.querySelector("#playAudioButton");
playAudioButton.style.display = "block";
playAudioButton.onclick = () => {
  allMuteFlag = false;
  audioSetCommon();
  bgm = [
    new Audio("Common/HelloThisIsYourBirthDay.ogg"),
    new Audio("Common/03_Suspense.ogg"),
    new Audio("Common/03_Passage_of_Eternal_Times.ogg"),
    new Audio("Common/ship3.ogg"),
    new Audio("Common/GameOver.ogg"),
  ];
  clickSound = new Audio("Common/Coin.ogg");
  effectSound = new Audio("Common/Starlight.ogg");
  battleSound = new Audio("Common/thunder1.ogg");
  playBGM();
  playClickSound();
};
const playAsMuteModeButton = document.querySelector("#playAsMuteModeButton");
playAsMuteModeButton.style.display = "block";
playAsMuteModeButton.onclick = () => {
  allMuteFlag = true;
  audioSetCommon();
};
const audioSetCommon = () => {
  picturePlayAudio.style.display = "none";
  playAudioButton.style.display = "none";
  playAsMuteModeButton.style.display = "none";
  pictureSelectLanguage.style.display = "block";
  englishButton.style.display = "block";
  japaneseButton.style.display = "block";
  sceneCount = 0;
};
const playBGM = () => {
  if (allMuteFlag === false) {
    bgm[sceneCount].loop = true;
    bgm[sceneCount].play();
  }
};
const playClickSound = () => {
  if (allMuteFlag === false) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
};
/************************
  Selectlanguage
************************/
let englishFlag;
let japaneseFlag;
////////////////////
const englishButton = document.querySelector("#englishButton");
englishButton.onclick = () => {
  englishFlag = true;
  pictureEnglishPrologue.style.display = "block";
  languageSet();
};
const japaneseButton = document.querySelector("#japaneseButton");
japaneseButton.onclick = () => {
  japaneseFlag = true;
  languageSet();
  matchIgnorantButton.innerText = "暗黒のマッチ";
  matchUnjustButton.innerText = "紅蓮のマッチ";
  matchArrogantButton.innerText = "星屑のマッチ";
};
const languageSet = () => {
  pictureSelectLanguage.style.display = "none";
  englishButton.style.display = "none";
  japaneseButton.style.display = "none";
  playClickSound();
  const prologueNextButton = document.querySelector("#prologueNextButton");
  prologueNextButton.style.display = "block";
};
/************************
  Prologue
************************/
let episode;
let page;
let scene;
////////////////////
const matchIgnorantButton = document.querySelector("#matchIgnorantButton");
const matchUnjustButton = document.querySelector("#matchUnjustButton");
const matchArrogantButton = document.querySelector("#matchArrogantButton");
prologueNextButton.onclick = () => {
  prologueNextButton.style.display = "none";
  if (japaneseFlag === true) {
    pictureSelectMatchJapanese.style.display = "block";
  } else if (englishFlag === true) {
    pictureEnglishPrologue.style.display = "none";
    pictureSelectMatch.style.display = "block";
  }
  matchIgnorantButton.style.display = "block";
  matchUnjustButton.style.display = "block";
  matchArrogantButton.style.top = "820px";
  matchArrogantButton.style.display = "block";
  playClickSound();
  selectEpisode();
};
const selectEpisode = () => {
  if (englishFlag === true) {
    episode = english;
  } else if (japaneseFlag === true) {
    episode = japanese;
  }
  page = [1, 2];
  scene = [];
};

const english = [
  "<br>(A Flashback From Time Immemorial)",
  '"It is not for me to decide who should live and who should die.',
  "If there is a god in this world, then it is for that god to decide…",
  "And if there is no god, then it is the universe itself<br>—its vast and indifferent order— that makes the choice.",
  "Yet religion cannot prove the existence of god,<br>and science cannot explain the universe.",
  "If you were to uncover every truth and judge it with your own eyes…",
  'Then, upon the vessel of knowledge, you would cross over all the sins."',
  "",
  '"…I do not have enough money to buy those matches.',
  "For today, this should be enough to keep you from starving.",
  'They are a little bruised, but still perfectly edible."',
  "（The girl received three pieces of fruit.）",
  "",
  "<br>(A Flashback From Time Immemorial)",
  '"When one smiles while hiding hatred, then two paths are revealed.',
  "Truth or False?",
  "Now then, hand over all the matches you possess.",
  'They are not something a child like you should be carrying."',
  "",
  '"Girl, the matches you have created are not mere ordinary goods.',
  "You must set aside notions of good and evil, and devote yourself to your duty as a neutral party.",
  "It will take time for you to understand and accept what that truly means…",
  "For now, just survive.",
  'We will speak again after that."',
  "（The girl received one gold coin.）",
  "",
  "<br>(A Flashback From Time Immemorial)",
  '"Since we have come this far, I will tell you the truth you should know.',
  "It concerns the fundamental nature of evil itself.",
  "Just as darkness is inevitably driven away by light…",
  "so too is evil destined to be driven out by justice.",
  "if you are not evil…",
  'then here and now, you must defeat me."',
  "",
  '"I, the most evil of all evils in this world, declare this:',
  "What is yours is mine, and your sins are my sins.",
  "Now, look to the sky.",
  'The gods themselves are praising your deeds."',
  "（Stars fell upon the girl, turning into silver coins.",
  "She obtained immense wealth, and the rank of second lieutenant.）",
  "",
  "The world has ended.",
  "",
];
const japanese = [
  "<br>（少女に覚醒した太古の記憶）",
  "「誰が生き、誰が死ぬべきか、それを決めるのは私ではない。",
  "それは仮にこの世界に神がいるのなら神が……",
  "いないのであれば宇宙という環境が決める事。",
  "しかし宗教は神を証明できず、科学もまた宇宙を説明できない。",
  "仮にあなたがすべての真実を解き明かし、その目で見定める事ができたなら……",
  "あなたは知識の船により、すべての罪を渡るでしょう」",
  "",
  "「……私の持ち合わせでそのマッチを購入する事はできません。",
  "今日のところはこれで飢えをしのぎなさい。",
  "少し傷んでいますが、まだ十分に食べられるでしょう」",
  "（少女は3果実を手に入れた）",
  "",
  "<br>（少女に覚醒した太古の記憶）",
  "「憎しみを隠して笑う時、2つの道が示される。",
  "Truth or False?",
  "さあ、お前が持つすべてのマッチ我々によこすがいい。",
  "それはお前のような子供が持っていてよい物ではないのだ」",
  "",
  "「少女よ、お前が開発したマッチは日用品のそれではない。",
  "お前は善悪の観念を離れ、中立者として自己の職務に専念するべきなのだ。",
  "その意味を理解し、受容できるようになるまで少し時間はかかるだろうが……",
  "まずは生き延びろ。",
  "話はそれからだ」",
  "（少女は1金貨を手に入れた）",
  "",
  "<br>（少女に覚醒した太古の記憶）",
  "「せっかくだから最後に一つ、すばらしい情報を教えてやろう。",
  "それは根本的な悪の性質についてだ。",
  "悪は必ず闇が光に駆逐されるのと同様に……",
  "必ず正義によって駆逐される性質を持つ。",
  "つまり、お前が悪でないのなら……",
  "お前は今ここで、必ず私に勝利する必要がある」",
  "",
  "「この世界の悪の中で最も悪である私が宣言しよう。",
  "お前のものは私のもので、お前の罪は私の罪だ。",
  "さあ、空を見るがいい！",
  "神々がお前の行いをほめたたえている」",
  "（少女の元に星が銀貨となり降ってきた。",
  "少女は莫大な富と少尉の階級を手に入れた）",
  "",
  "世界は滅亡した。",
  "",
];

/************************
  SelectMatch
************************/
matchIgnorantButton.onclick = () => {
  selectMatch(0, 7, 1, "Ignorant", "Ignorant/Battle6_Match.ogg");
};
matchUnjustButton.onclick = () => {
  selectMatch(13, 18, 14, "Unjust", "Unjust/Battle7_Match.ogg");
};
matchArrogantButton.onclick = () => {
  selectMatch(26, 33, 27, "Arrogant", "Arrogant/Battle2_Match.ogg");
};
const selectMatch = (
  skipLine,
  finalLine,
  nextScene,
  NameOfbattleMode,
  bgmForBattle
) => {
  pictureSelectMatch.style.display = "none";
  pictureSelectMatchJapanese.style.display = "none";
  matchIgnorantButton.style.display = "none";
  matchUnjustButton.style.display = "none";
  matchArrogantButton.style.display = "none";
  storyNextButton.style.display = "block";
  pictureA_Little_Match_Girl.style.display = "none";
  sentenceCount = sentenceCount + skipLine;
  lastLine = finalLine;
  scene.push(nextScene);
  battleMode = NameOfbattleMode;
  battleBGM = new Audio(bgmForBattle);
  battleBGM.loop = true;
  if (allMuteFlag === false) {
    bgm[sceneCount].pause();
    effectSound.play();
  }
  changePage();
};
/************************
  StoryProcedures
************************/
let sentenceCount = 0;
let sceneCount = 0;
let lineCount;
let pageCount;
let lastLine;
let battleMode;
let battleBGM;
let pauseFlag;
let winFlag;
let loseFlag;
////////////////////
const storyNextButton = document.querySelector("#storyNextButton");
storyNextButton.onclick = () => {
  if (sentenceCount > lastLine) {
    return;
  }
  playClickSound();
  if (sentenceCount === lastLine) {
    if (winFlag != true && loseFlag != true) {
      A_Little_Match_GirlDiv.style.display = "none";
      pauseFlag = true;
      if (battleMode === "Ignorant") {
        totalCountIgnorant.style.backgroundImage = "url(Common/greenTurn.png)";
        totalCountIgnorant.style.left = "-15px";
        comLifeIgnorant.style.backgroundImage = "url(Common/redTurn.png)";
        comLifeIgnorant.style.top = "0px";
        comLifeIgnorant.style.left = " -15px";
        IgnorantDiv.style.display = "block";
        timeLimit = IgnorantTimeLimit;
        deckLength = 13;
        basicDamage = 333; //77
        numbersProcedure();
      } else if (battleMode === "Unjust") {
        totalCountUnjust.style.backgroundImage = "url(Common/greenTurn.png)";
        totalCountUnjust.style.left = "-15px";
        comLifeUnjust.style.backgroundImage = "url(Common/redTurn.png)";
        comLifeUnjust.style.top = "0px";
        comLifeUnjust.style.left = "-15px";
        ResetDialogDiv.style.top = "500px";
        resetButtonUnjust.style.top = "200px";
        resetButtonUnjust.style.left = "0px";
        UnjustDiv.style.display = "block";
        timeLimit = UnjustTimeLimit;
        deckLength = 52;
        cardsProcedure();
      } else if (battleMode === "Arrogant") {
        const ArrogantImg = document.querySelector("#ArrogantImg");
        ArrogantImg.style.left = "-25px";
        totalCountArrogant.style.backgroundImage = "url(Common/greenTurn.png)";
        totalCountArrogant.style.left = "-15px";
        comLifeArrogant.style.backgroundImage = "url(Common/redTurn.png)";
        comLifeArrogant.style.top = "0px";
        comLifeArrogant.style.left = " -15px";
        const pressStartArrogant = document.querySelector(
          "#pressStartArrogant"
        );
        pressStartArrogant.style.top = "-30px";
        startDivArrogant.style.top = "130px";
        startButtonArrogant.style.top = "60px";
        startDivArrogant.style.visibility = "visible";
        resetButtonArrogant.style.top = "190px";
        ResetDialogDiv.style.top = "350px";
        ArrogantDiv.style.display = "block";
        timeLimit = ArrogantTimeLimit;
        deckLength = 52;
        basicDamage = 333;
        dayDamage = 3307;
        calendarDamage = 3280;
        setAdjuster(defaultAdjusterIndex);
        setWaitTime(waitIndex);
        initializeValues();
        calendarProcedure();
      }
      if (allMuteFlag === false) {
        bgm[sceneCount].pause();
        battleSound.play();
        setTimeout(() => {
          battleBGM.play();
        }, 1000);
      }
    } else if (winFlag === true) {
      if (allMuteFlag === false) {
        bgm[sceneCount].pause();
      }
      sceneCount++;
      changeScene();
      pictureGameClear.style.display = "block";
      homeButton.style.display = "block";
    } else if (loseFlag === true) {
      changePage();
      pictureGameOver.style.left = "50px";
      pictureGameOver.style.display = "block";
      homeButton.style.top = "700px";
      homeButton.style.left = "220px";
      homeButton.innerHTML = "Tap And Go Home!";
      homeButton.style.display = "block";
    }
  } else if (sentenceCount === scene[sceneCount]) {
    changeScene();
    sceneCount++;
  } else if (sentenceCount === page[pageCount]) {
    changePage();
  } else {
    sentenceline[lineCount].innerHTML = episode[sentenceCount];
    sentenceCount++;
    lineCount++;
  }
};
const changeScene = () => {
  changePage();
  if (allMuteFlag === false) {
    bgm[sceneCount].pause();
    setTimeout(() => {
      playBGM();
    }, 0);
  }
};
const sentenceline = document.querySelectorAll(".sentenceLine");
const changePage = () => {
  for (lineCount = 0; lineCount < sentenceline.length; lineCount++) {
    sentenceline[lineCount].innerHTML = "";
  }
  lineCount = 0;
  sentenceline[lineCount].innerHTML = episode[sentenceCount];
  pageCount++;
  sentenceCount++;
  lineCount++;
};
const finishMatch = () => {
  if (battleMode === "Ignorant" && winFlag === true) {
    sentenceCount = 8;
    lastLine = 12;
  } else if (battleMode === "Ignorant" && loseFlag === true) {
    sentenceCount = 41;
    lastLine = 42;
    sceneCount = sceneCount + 2;
  } else if (battleMode === "Unjust" && winFlag === true) {
    sentenceCount = 19;
    lastLine = 25;
  } else if (battleMode === "Unjust" && loseFlag === true) {
    sentenceCount = 41;
    lastLine = 42;
    sceneCount = sceneCount + 2;
  } else if (battleMode === "Arrogant" && winFlag === true) {
    sentenceCount = 34;
    lastLine = 40;
  } else if (battleMode === "Arrogant" && loseFlag === true) {
    sentenceCount = 41;
    lastLine = 42;
    sceneCount = sceneCount + 2;
  }
  battleBGM.pause();
  A_Little_Match_GirlDiv.style.display = "block";
  boardIgnorant.style.display = "none";
  boardUnjust.style.display = "none";
  boardArrogant.style.display = "none";
  sceneCount++;
  changeScene();
};
const homeButton = document.querySelector("#homeButton");
homeButton.onclick = () => {
  window.open("A_LITTLE_MATCH_GIRL.html", "_self");
};
/************************
  ResetDialogue
************************/
const adjusterDiv = document.querySelector("#adjusterDiv");
let resetFlag = true;
const resetButtonIgnorant = document.querySelector("#resetButtonIgnorant");
const resetButtonUnjust = document.querySelector("#resetButtonUnjust");
const resetButtonArrogant = document.querySelector("#resetButtonArrogant");
resetButtonIgnorant.onclick = () => {
  ResetDialogue();
};
resetButtonUnjust.onclick = () => {
  ResetDialogue();
};
resetButtonArrogant.onclick = () => {
  ResetDialogue();
};
const ResetDialogue = () => {
  if (pauseFlag === true) {
    return;
  }
  pauseFlag = true;
  stopTimer();
  ResetDialogDiv.style.display = "block";
  const resumeBattleButton = document.querySelector("#resumeBattleButton");
  resumeBattleButton.onclick = () => {
    pauseFlag = false;
    startTimer();
    ResetDialogDiv.style.display = "none";
  };
  const resetBattleButton = document.querySelector("#resetBattleButton");
  resetBattleButton.style.top = "10px";
  resetBattleButton.onclick = () => {
    healSoundPlay();
    if (battleMode === "Ignorant") {
      numbersProcedure();
    }
    if (battleMode === "Unjust") {
      cardsProcedure();
    } else if (battleMode === "Arrogant") {
      answerWaitDiv.style.display = "none";
      adjusterDiv.style.display = "block";
      startDivArrogant.style.visibility = "visible";
      initializeTimers();
      initializeValues();
      calendarProcedure();
    }
    ResetDialogDiv.style.display = "none";
  };
  const loseButton = document.querySelector("#loseButton");
  loseButton.style.top = "20px";
  loseButton.onclick = () => {
    loseFlag = true;
    if (battleMode === "Arrogant") {
      totalTime = totalTime + parseInt(sec) + parseInt(millisec) / 100;
    }
    battleEnd();
    ResetDialogDiv.style.display = "none";
  };
  const returnTitleButton = document.querySelector("#returnTitleButton");
  returnTitleButton.style.top = "30px";
  returnTitleButton.onclick = () => {
    window.open("A_LITTLE_MATCH_GIRL.html", "_self");
  };
};
/************************
  SetBattleSounds
************************/
const hitSound = new Audio("Common/Shop2.ogg");
const hitsoundPlay = () => {
  if (allMuteFlag === false) {
    hitSound.currentTime = 0;
    hitSound.play();
  }
};
const missSound = new Audio("Common/Sword7.ogg");
const missSoundPlay = () => {
  if (allMuteFlag === false) {
    missSound.currentTime = 0;
    missSound.play();
  }
};
const healSound = new Audio("Common/heal1.ogg");
const healSoundPlay = () => {
  if (allMuteFlag === false) {
    healSound.currentTime = 0;
    healSound.play();
  }
};
const knockOutSound = new Audio("Common/Thunder9.ogg");
const knockOutSoundPlay = () => {
  if (allMuteFlag === false) {
    knockOutSound.currentTime = 0;
    knockOutSound.play();
  }
};
/************************
  BattleTimerVariables
************************/
let timeCount = 0;
let timerID = 0;
let average = 0;
let totalTime = 0;
let sec = (0).toString().padStart(2, "0");
let millisec = (0).toString().padStart(3, "0").slice(0, 2);
let passedTime = sec + "." + millisec + "sec";
/************************
  BattleTimerProcedures
************************/
const initializeTimers = () => {
  if (battleMode === "Ignorant") {
    timeCountIgnorant.innerHTML = "00.00sec";
    averageTimeIgnorant.innerHTML = "00.00sec";
    for (let i = 0; i < previousTimeIgnorant.length; i++) {
      previousTimeIgnorant[i].textContent = "00.00sec";
    }
  } else if (battleMode === "Unjust") {
    timeCountUnjust.innerHTML = "000.00sec";
  } else if (battleMode === "Arrogant") {
    timeCountArrogant.innerHTML = "00.00sec";
    averageTimeArrogant.innerHTML = "00.00sec";
    for (let i = 0; i < previousTimeArrogant.length; i++) {
      previousTimeArrogant[i].textContent = "00.00sec";
    }
  }
  sec = "00";
  millisec = "00";
  totalTime = 0;
};
const timeMarker = () => {
  timeCount = timeCount + 10;
  if (timeCount >= timeLimit) {
    if (battleMode === "Ignorant") {
      stopTimer();
      recordTime();
      resetTimer();
      numberMissed();
      drawValues();
      totalTime = totalTime + parseInt(sec) + parseInt(millisec) / 100;
      if (loseFlag != true) {
        startTimer();
      }
    } else if (battleMode === "Unjust") {
      TimeIsUpFlag = true;
      loseFlag = true;
      battleEnd();
    } else if (battleMode === "Arrogant") {
      attackDay(7);
    }
  }
  sec = Math.floor(timeCount / 1000)
    .toString()
    .padStart(2, "0");
  if (battleMode === "Unjust") {
    sec = Math.floor(timeCount / 1000)
      .toString()
      .padStart(3, "0");
  }
  millisec = (timeCount % 1000).toString().padStart(3, "0").slice(0, 2);
  passedTime = sec + "." + millisec + "sec";
  if (battleMode === "Ignorant") {
    timeCountIgnorant.innerHTML = passedTime;
  } else if (battleMode === "Unjust") {
    timeCountUnjust.innerHTML = passedTime;
  } else if (battleMode === "Arrogant") {
    timeCountArrogant.innerHTML = passedTime;
  }
};
const startTimer = () => {
  timerID = setInterval(timeMarker, 10);
};
const stopTimer = () => {
  clearInterval(timerID);
};
const resetTimer = () => {
  timeCount = 0;
};
const recordTime = () => {
  if (battleMode === "Ignorant") {
    previousTimeIgnorant[0].innerText = previousTimeIgnorant[1].textContent;
    previousTimeIgnorant[1].innerText = previousTimeIgnorant[2].textContent;
    previousTimeIgnorant[2].innerText = previousTimeIgnorant[3].textContent;
    previousTimeIgnorant[3].innerText = sec + "." + millisec + "sec";
  } else if (battleMode === "Arrogant") {
    previousTimeArrogant[0].innerText = previousTimeArrogant[1].textContent;
    previousTimeArrogant[1].innerText = previousTimeArrogant[2].textContent;
    previousTimeArrogant[2].innerText = previousTimeArrogant[3].textContent;
    previousTimeArrogant[3].innerText = sec + "." + millisec + "sec";
  }
};
/************************
  BattleCommonConstant
************************/
const pressNextInnerHTML =
  "<button id='battleNextButton' onclick='finishMatch()'>Next</button>";
/************************
  BattleCommonVariables
************************/
let myLife;
let comLife;
let totalCount;
let myCards;
let comCards;
let serialHit;
let perfectHit;
let deckLength;
let timeLimit;
let basicDamage;
let perfectFlag = true;
/************************
  BattleCommonProcedures
************************/
const initializeValues = () => {
  myLife = 9999;
  comLife = 9999;
  totalCount = 0;
  serialHit = 0;
  perfectHit = 0;
  cardsCount = 0;
  winFlag = false;
  loseFlag = false;
};
const drawValues = () => {
  if (battleMode === "Ignorant") {
    comLifeIgnorant.innerText = comLife;
    myLifeIgnorant.innerText = myLife;
    totalCountIgnorant.innerText = totalCount;
    perfectHitIgnorant.innerText = perfectHit;
    serialHitIgnorant.innerText = serialHit;
  } else if (battleMode === "Unjust") {
    comLifeUnjust.innerText = comLife;
    myLifeUnjust.innerText = myLife;
    totalCountUnjust.innerText = totalCount;
    perfectHitUnjust.innerText = perfectHit;
    serialHitUnjust.innerText = serialHit;
  } else if (battleMode === "Arrogant") {
    comLifeArrogant.innerText = comLife;
    myLifeArrogant.innerText = myLife;
    totalCountArrogant.innerText = totalCount;
    perfectHitArrogant.innerText = perfectHit;
    serialHitArrogant.innerText = serialHit;
  }
};
const getCardPath = (card) => {
  let path = "";
  if (battleMode === "Ignorant") {
    path = "Ignorant/" + card + ".png";
  } else if (battleMode === "Unjust") {
    path = "Unjust/" + card + ".png";
  } else if (battleMode === "Arrogant") {
    path = "Arrogant/" + card + ".png";
  }
  return path;
};
const judgement = () => {
  if (myLife <= 0) {
    myLife = 0;
    loseFlag = true;
    battleEnd();
  } else if (comLife <= 0) {
    comLife = 0;
    winFlag = true;
    battleEnd();
  } else if (serialPerfectHit > UnjustEndurance) {
    //51
    winFlag = true;
    battleEnd();
  }
  drawValues();
};
const battleEnd = () => {
  let result;
  pauseFlag = true;
  stopTimer();
  if (battleMode === "Ignorant") {
    totalTime = totalTime + parseInt(sec) + parseInt(millisec) / 100;
    average = (totalTime / (totalCount * 13 + cardsCount)) * 13;
    if (totalCount === 0) {
      result =
        "TotalTime:<br>" +
        totalTime.toString().slice(0, 6) +
        "sec<br>(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)<br>13Numbers/<br>Over" +
        totalTime.toString().slice(0, 4) +
        "sec";
      console.log(
        "%cTotalTime:\n" +
          totalTime.toString().slice(0, 6) +
          "sec\n(" +
          (totalTime / 60).toString().slice(0, 4) +
          "min)\nTotalCount:" +
          totalCount +
          "\n13Numbers/\nOver" +
          totalTime.toString().slice(0, 4) +
          "sec",
        "font-Size:20px;"
      );
    } else {
      result =
        "TotalTime:<br>" +
        totalTime.toString().slice(0, 6) +
        "sec<br>(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)<br>13Numbers/<br>" +
        average.toString().slice(0, 4) +
        "sec";
      console.log(
        "%cTotalTime:\n" +
          totalTime.toString().slice(0, 6) +
          "sec\n(" +
          (totalTime / 60).toString().slice(0, 4) +
          "min)\nTotalCount:" +
          totalCount +
          "\n13Numbers/\n" +
          average.toString().slice(0, 4) +
          "sec",
        "font-Size:20px;"
      );
    }
    for (let i = 0; i < myNumberCards.length; i++) {
      myNumberCards[i].style.zIndex = 0;
    }
    resultDivIgnorant.innerHTML = result;
    resultDivIgnorant.style.visibility = "visible";
    startDivIgnorant.innerHTML = pressNextInnerHTML;
    startDivIgnorant.style.visibility = "visible";
  } else if (battleMode === "Unjust") {
    totalTime = parseInt(sec) + parseInt(millisec) / 100;
    if (winFlag === true) {
      result =
        "TotalTime:<br>" +
        totalTime.toString().slice(0, 6) +
        "sec<br>(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)<br>" +
        "YouWin.";
    } else if (TimeIsUpFlag === true) {
      result =
        "TotalTime:<br>" +
        totalTime.toString().slice(0, 6) +
        "sec<br>(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)<br>" +
        "TimeIsUp.";
    } else if (loseFlag === true) {
      result =
        "TotalTime:<br>" +
        totalTime.toString().slice(0, 6) +
        "sec<br>(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)<br>" +
        "YouLose.";
    }
    console.log(
      "%cTotalTime:\n" +
        totalTime.toString().slice(0, 6) +
        "sec\n(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)\nTotalCount:" +
        totalCount,
      "font-Size:20px;"
    );
    resultDivUnjust.innerHTML = result;
    resultDivUnjust.style.visibility = "visible";
    startDivUnjust.innerHTML = pressNextInnerHTML;
    startDivUnjust.style.visibility = "visible";
  } else if (battleMode === "Arrogant") {
    correctRate = ((totalCount - missCount) / totalCount) * 100 || 0;
    result =
      "TotalTime:<br>" +
      totalTime.toString().slice(0, 6) +
      "sec<br>(" +
      (totalTime / 60).toString().slice(0, 4) +
      "min)<br>AverageTime:<br>" +
      average.toString().slice(0, 4) +
      "sec<br>CorrectRate:<br>" +
      correctRate.toString().slice(0, 4) +
      "%";
    console.log(
      "%cTotalTime:\n" +
        totalTime.toString().slice(0, 6) +
        "sec\n(" +
        (totalTime / 60).toString().slice(0, 4) +
        "min)\nAverageTime:\n" +
        average.toString().slice(0, 4) +
        "sec\nCorrectRate:\n" +
        correctRate.toString().slice(0, 4) +
        "%",
      "font-Size:20px;"
    );
    resultDivArrogant.innerHTML = result;
    resultDivArrogant.style.visibility = "visible";
    startDivArrogant.innerHTML = pressNextInnerHTML;
    startDivArrogant.style.top = "120px";
    document.querySelector("#battleNextButton").style.top = "70px";
    startDivArrogant.style.visibility = "visible";
  }
  knockOutSoundPlay();
};
/************************
  IgnorantElements
************************/
const boardIgnorant = document.querySelector("#boardIgnorant");
const myLifeIgnorant = document.querySelector("#myLifeIgnorant");
const comLifeIgnorant = document.querySelector("#comLifeIgnorant");
const totalCountIgnorant = document.querySelector("#totalCountIgnorant");
const perfectHitIgnorant = document.querySelector("#perfectHitIgnorant");
const serialHitIgnorant = document.querySelector("#serialHitIgnorant");
const timeCountIgnorant = document.querySelector("#timeCountIgnorant");
const averageTimeIgnorant = document.querySelector("#averageTimeIgnorant");
const previousTimeIgnorant = document.querySelectorAll(".previousTimeIgnorant");
const holderIgnorant = document.querySelector("#holderIgnorant");
const startDivIgnorant = document.querySelector("#startDivIgnorant");
const resultDivIgnorant = document.querySelector("#resultDivIgnorant");
const classMyCardsIgnorant = document.querySelectorAll(".classMyCardsIgnorant");
const classComCardsIgnorant = document.querySelectorAll(
  ".classComCardsIgnorant"
);
const numbersAnswer = document.querySelector("#numbersAnswer");
const damageScreen = document.querySelector("#damageScreen");
const myNumberCards = document.querySelectorAll("td.myNumberCards");
myNumberCards.forEach((td, index) => {
  td.onclick = () => numberAttack(index);
});
/************************
  IgnorantProcedures
************************/
const startButtonIgnorant = document.querySelector("#startButtonIgnorant");
startButtonIgnorant.onclick = () => {
  pauseFlag = false;
  startDivIgnorant.style.visibility = "hidden";
  setComNumberCards();
  openComNumberCards();
  totalTime = 0;
  cardsCount = 0;
  startTimer();
};
const numbersProcedure = () => {
  resetTimer();
  initializeTimers();
  initializeValues();
  drawValues();
  closeMyNumberCards();
  closeComNumberCards();
  startDivIgnorant.style.visibility = "visible";
  perfectFlag = true;
  pauseFlag = true;
};
const setComNumberCards = () => {
  comCards = [];
  for (let i = 0; i < classComCardsIgnorant.length; i++) {
    comCards.push(Math.floor(Math.random() * 10));
  }
};
const openComNumberCards = () => {
  for (let i = 0; i < classComCardsIgnorant.length; i++) {
    classComCardsIgnorant[i].setAttribute("src", getCardPath(comCards[i]));
  }
};
const closeComNumberCards = () => {
  for (let i = 0; i < deckLength; i++) {
    classComCardsIgnorant[i].setAttribute("src", "Ignorant/black2.png");
    classComCardsIgnorant[i].style.opacity = 1;
    if (i === deckLength - 1) {
      classComCardsIgnorant[i].setAttribute("src", "Ignorant/black.png");
      classComCardsIgnorant[i].style.opacity = 1;
    }
  }
};
const closeMyNumberCards = () => {
  for (let i = 0; i < deckLength; i++) {
    classMyCardsIgnorant[i].setAttribute("src", "Ignorant/black2.png");
    if (i === deckLength - 1) {
      classMyCardsIgnorant[i].setAttribute("src", "Ignorant/black.png");
    }
  }
};
const numberAttack = (cardindex) => {
  if (pauseFlag === true) {
    return;
  }
  if (cardindex === 10) {
    cardindex = 0;
  }
  for (let i = 0; i < deckLength - 1; i++) {
    classComCardsIgnorant[i].setAttribute("src", "Ignorant/black2.png");
  }
  classComCardsIgnorant[deckLength - 1].setAttribute(
    "src",
    "Ignorant/black.png"
  );
  if (cardindex === comCards[cardsCount]) {
    numberHit(cardindex);
  } else {
    numberMissed();
  }
  drawValues();
};
const numberHit = (cardindex) => {
  hitsoundPlay();
  classMyCardsIgnorant[cardsCount].setAttribute("src", getCardPath(cardindex));
  cardsCount++;
  comLife = comLife - basicDamage;
  if (comLife < 0) {
    comLife = 0;
    winFlag = true;
    openComNumberCards();
    for (let i = 0; i < deckLength; i++) {
      classComCardsIgnorant[i].style.opacity = 0.4;
    }
    if (cardsCount === deckLength) {
      totalCount++;
      cardsCount = 0;
      stopTimer();
      recordTime();
      totalTime = totalTime + parseInt(sec) + parseInt(millisec) / 100;
      if (perfectFlag === true) {
        perfectHit++;
        serialHit++;
      } else {
        serialHit = 0;
      }
    }
    battleEnd();
  } else if (cardsCount === deckLength) {
    if (perfectFlag === true) {
      perfectHit++;
      serialHit++;
    } else {
      serialHit = 0;
    }
    perfectFlag = true;
    totalCount++;
    cardsCount = 0;
    stopTimer();
    recordTime();
    totalTime = totalTime + parseInt(sec) + parseInt(millisec) / 100;
    setComNumberCards();
    openComNumberCards();
    closeMyNumberCards();
    timeMarker();
    resetTimer();
    startTimer();
  }
};
const numberMissed = () => {
  missSoundPlay();
  serialHit = 0;
  perfectFlag = false;
  myLife = myLife - basicDamage;
  if (myLife < 0) {
    myLife = 0;
    loseFlag = true;
  }
  const damageScreenIgnorant = document.querySelector("#damageScreenIgnorant");
  damageScreenIgnorant.classList.add("numberMissed");
  for (let i = 0; i < deckLength; i++) {
    classComCardsIgnorant[i].style.opacity = 0.4;
  }
  openComNumberCards();
  setTimeout(() => {
    damageScreenIgnorant.classList.remove("numberMissed");
    if (loseFlag != true) {
      closeComNumberCards();
    }
  }, 300);
  if (loseFlag === true) {
    battleEnd();
  }
};
/************************
  UnjustElements
************************/
const boardUnjust = document.querySelector("#boardUnjust");
const myLifeUnjust = document.querySelector("#myLifeUnjust");
const comLifeUnjust = document.querySelector("#comLifeUnjust");
const totalCountUnjust = document.querySelector("#totalCountUnjust");
const perfectHitUnjust = document.querySelector("#perfectHitUnjust");
const serialHitUnjust = document.querySelector("#serialHitUnjust");
const timeCountUnjust = document.querySelector("#timeCountUnjust");
const holderUnjust = document.querySelector("#holderUnjust");
const startDivUnjust = document.querySelector("#startDivUnjust");
const resultDivUnjust = document.querySelector("#resultDivUnjust");
const classMyCardsUnjust = document.querySelectorAll(".classMyCardsUnjust");
const classComCardsUnjust = document.querySelectorAll(".classComCardsUnjust");
classMyCardsUnjust.forEach((td, index) => {
  td.onclick = () => cardsAttack(index + 1);
});
/************************
  UnjustVariables
************************/
let cardsCount;
let serialPerfectHit;
let TimeIsUpFlag;
let usedCard;
/************************
  UnjustProcedures
************************/
const cardsProcedure = () => {
  cardsCount = 0;
  serialPerfectHit = 0;
  usedCard = [];
  resetTimer();
  initializeTimers();
  initializeValues();
  myLife = 9.9e9999;
  comLife = 9.9e9999;
  drawValues();
  setcomCards();
  openComCards();
  setMyCards();
  openMyCards();
  startDivUnjust.style.visibility = "visible";
  holderUnjust.style.visibility = "hidden";
};
const startButtonUnjust = document.querySelector("#startButtonUnjust");
startButtonUnjust.onclick = () => {
  pauseFlag = false;
  startDivUnjust.style.visibility = "hidden";
  closeComCards();
  openMyCards();
  holderUnjust.style.visibility = "visible";
  startTimer();
};
const setMyCards = () => {
  myCards = [];
  for (let i = 1; i <= deckLength; i++) {
    myCards.push(i);
    usedCard.push(false);
  }
};
const setcomCards = () => {
  comCards = [];
  for (let i = 1; i <= deckLength; i++) {
    comCards.push(i);
  }
  for (let i = 0; i < deckLength * 2; i++) {
    let j = Math.floor(Math.random() * deckLength);
    let k = Math.floor(Math.random() * deckLength);
    let l = comCards[j];
    comCards[j] = comCards[k];
    comCards[k] = l;
  }
};
const openMyCards = () => {
  for (let i = 0; i < classMyCardsUnjust.length; i++) {
    classMyCardsUnjust[i].setAttribute("src", getCardPath(myCards[i]));
  }
};
const openComCards = () => {
  for (let i = 0; i < classComCardsUnjust.length; i++) {
    classComCardsUnjust[i].setAttribute("src", getCardPath(comCards[i]));
  }
};
const closeComCards = () => {
  for (let i = 0; i < classComCardsUnjust.length; i++) {
    classComCardsUnjust[i].setAttribute("src", "Common/red.png");
  }
};
const cardsAttack = (cardIndex) => {
  cardIndex--;
  if (pauseFlag === true || usedCard[cardIndex] === true) {
    return;
  }
  if (cardsCount === 0) {
    closeComCards();
  }
  if (myCards[cardIndex] === comCards[cardsCount]) {
    hitsoundPlay();
    perfectHit++;
    serialHit++;
    serialPerfectHit++;
  } else {
    missSoundPlay();
    const damageScreenUnjust = document.querySelector("#damageScreenUnjust");
    damageScreenUnjust.classList.add("numberMissed");
    console.log("dome");
    for (let i = 0; i < deckLength; i++) {
      classComCardsUnjust[i].style.opacity = 0.4;
      console.log("dome");
    }
    openComCards();
    setTimeout(() => {
      for (let i = 0; i < deckLength; i++) {
        closeComCards();
        classComCardsUnjust[i].style.opacity = 1;
      }
      damageScreenUnjust.classList.remove("numberMissed");
      for (let i = 0; i < cardsCount; i++) {
        classComCardsUnjust[i].setAttribute("src", getCardPath(comCards[i]));
      }
    }, 300);
    console.log(cardsCount);
    serialHit = 0;
    serialPerfectHit = 0;
  }
  classMyCardsUnjust[cardIndex].setAttribute("src", "Common/blue.png");
  classComCardsUnjust[cardsCount].setAttribute(
    "src",
    getCardPath(comCards[cardsCount])
  );
  usedCard[cardIndex] = true;
  console.log(usedCard);
  cardsCount++;
  totalCount++;
  drawValues();
  judgement();
  roundCheck();
};
const roundCheck = () => {
  if (cardsCount >= deckLength) {
    openAllCards();
  }
};
const openAllCards = () => {
  usedCard = [];
  for (let i = 1; i <= deckLength; i++) {
    usedCard.push(false);
  }
  cardsCount = 0;
  serialPerfectHit = 0;
  openComCards();
  openMyCards();
};
const openButton = document.querySelector("#openButton");
openButton.onclick = () => {
  if (pauseFlag === true) {
    return;
  }
  healSoundPlay();
  openAllCards();
  serialHit = 0;
  drawValues();
};
/************************
  ArrogantElements
************************/
const boardArrogant = document.querySelector("#boardArrogant");
const myLifeArrogant = document.querySelector("#myLifeArrogant");
const comLifeArrogant = document.querySelector("#comLifeArrogant");
const totalCountArrogant = document.querySelector("#totalCountArrogant");
const perfectHitArrogant = document.querySelector("#perfectHitArrogant");
const serialHitArrogant = document.querySelector("#serialHitArrogant");
const timeCountArrogant = document.querySelector("#timeCountArrogant");
const averageTimeArrogant = document.querySelector("#averageTimeArrogant");
const previousTimeArrogant = document.querySelectorAll(".previousTimeArrogant");
const holderArrogant = document.querySelector("#holderArrogant");
const startDivArrogant = document.querySelector("#startDivArrogant");
const resultDivArrogant = document.querySelector("#resultDivArrogant");
const answerWaitDiv = document.querySelector("#answerWaitDiv");
const classMyCenturyCards = document.querySelectorAll(".classMyCenturyCards");
const classMyYearCards = document.querySelectorAll(".classMyYearCards");
const classMyMonthCards = document.querySelectorAll(".classMyMonthCards");
const classMyDateCards = document.querySelectorAll(".classMyDateCards");
const classMyDayCards = document.querySelectorAll(".classMyDayCards");
const idIntercalaryCard = document.querySelector("#idIntercalaryCard");
const classComYearCards = document.querySelectorAll(".classComYearCards");
const classComMonthCards = document.querySelectorAll(".classComMonthCards");
const classComDateCards = document.querySelectorAll(".classComDateCards");
const idComDayCards = document.querySelector("#idComDayCard");
const randDayArgLength = 366;
/************************
  ArrogantVariables
************************/
let julianDayNumber;
let centuryAnswer;
let yearAnswer;
let monthAnswer;
let dateAnswer;
let dayAnswer;
let centuryData;
let yearData;
let monthData;
let dateData;
let monthDay;
let myCenturyCards;
let myYearCards;
let myMonthCards;
let myDateCards;
let myDayCards;
let myCenturyCardsUsed;
let myYearCardsUsed;
let myMonthCardsUsed;
let myDateCardsUsed;
let myDayCardsUsed;
let comYearCards;
let comMonthCards;
let comDateCards;
let comDayCard;
let intercalary;
let intercalaryInt;
let myIntercalaryCardsUsed;
let weekDay;
let passedMonthDay;
let monthData13;
let randDay;
let randDayArg = [];
let rand00year = [];
let randDayCounter;
let rand00yearCounter;
let adjuster;
let defaultAdjusterIndex = 6;
let waitIndex = 4;
let answerWaitTime;
let selectedAnswer;
let calendarDamage;
let dayDamage;
let missCount;
let correctRate;
let correctFlag = true;
let fixYear = false;
/************************
  ArrogantProcedures
************************/
const startButtonArrogant = document.querySelector("#startButtonArrogant");
startButtonArrogant.onclick = () => {
  calendarStart();
};
const calendarStart = () => {
  idCorrectIncorrect.style.visibility = "hidden";
  resetButtonArrogant.style.display = "block";
  answerWaitDiv.style.display = "block";
  startDivArrogant.style.visibility = "hidden";
  adjusterDiv.style.display = "none";
  for (let i = 0; i < classComYearCards.length; i++) {
    classComYearCards[i].style.opacity = 1;
  }
  for (let i = 0; i < classComMonthCards.length; i++) {
    classComMonthCards[i].style.opacity = 1;
  }
  for (let i = 0; i < classComDateCards.length; i++) {
    classComDateCards[i].style.opacity = 1;
  }
  idComDayCards.style.opacity = 1;
  setRandDayArg();
  myCalendarFieldReady();
  setComYearCards();
  setComCentury();
  setComMonthCards();
  setComDateCards();
  setIntercalary();
  setComDayCard();
  openComYearCards();
  openComMonthCards();
  openComDateCards();
  openIntercalaryCard();
  resetTimer();
  startTimer();
  intercalary = false;
  myIntercalaryCardsUsed = false;
  pauseFlag = false;
};
const calendarProcedure = () => {
  monthDay = 31;
  missCount = 0;
  winFlag = false;
  loseFlag = false;
  closeComYearCards();
  closeComMonthCards();
  closeComDateCards();
  closeComDayCard();
  closeIntercalaryCard();
  myCalendarFieldReady();
  for (let i = 0; i < classComYearCards.length; i++) {
    classComYearCards[i].style.opacity = 1;
  }
};
function myCalendarFieldReady() {
  openMyCenturyCards();
  openMyYearCards();
  openMyMonthCards();
  openMyDateCards();
  openMyDayCards();
  drawValues();
}
const adjusterButton = document.querySelectorAll(".adjusterButton");
adjusterButton.forEach((td, index) => {
  td.onclick = () => setAdjuster(index);
});
function setAdjuster(index) {
  switch (index) {
    case 0:
      adjuster = 3;
      break;
    case 1:
      adjuster = 2;
      break;
    case 2:
      adjuster = 1;
      break;
    case 3:
      adjuster = 0;
      break;
    case 4:
      adjuster = 6;
      break;
    case 5:
      adjuster = 5;
      break;
    case 6:
      adjuster = 4;
      break;
  }
  for (let i = 0; i < adjusterButton.length; i++) {
    adjusterButton[i].style.opacity = 1;
  }
  adjusterButton[index].style.opacity = 0.5;
}
const answerWait = document.querySelectorAll(".answerWait");
answerWait.forEach((td, index) => {
  td.onclick = () => setWaitTime(index);
});
const setWaitTime = (index) => {
  switch (index) {
    case 0:
      answerWaitTime = 10 * 1000;
      break;
    case 1:
      answerWaitTime = 5 * 1000;
      break;
    case 2:
      answerWaitTime = 3 * 1000;
      break;
    case 3:
      answerWaitTime = 1 * 1000;
      break;
    case 4:
      answerWaitTime = 0.5 * 1000;
      break;
    case 5:
      answerWaitTime = 0.3 * 1000;
      break;
    case 6:
      answerWaitTime = 0.1 * 1000;
      break;
  }
  for (let i = 0; i < answerWait.length; i++) {
    answerWait[i].style.opacity = 1;
  }
  answerWait[index].style.opacity = 0.5;
};
const setRandDayArg = () => {
  for (randDay = 1; randDay <= randDayArgLength; randDay++) {
    randDayArg.push(randDay);
  }
  for (let i = 0; i < randDayArgLength * 2; i++) {
    let j = Math.floor(Math.random() * randDayArgLength);
    let k = Math.floor(Math.random() * randDayArgLength);
    let l = randDayArg[j];
    randDayArg[j] = randDayArg[k];
    randDayArg[k] = l;
  }
  randDayCounter = 0;
  rand00yearCounter = 0;
  for (let i = 0; i < 10; i++) {
    rand00year[i] = randDayArg[i];
  }
  rand00year.sort(compareForSort);
  for (let i = 0; i < randDayArgLength * 3; i++) {
    let j = Math.floor(Math.random() * randDayArgLength);
    let k = Math.floor(Math.random() * randDayArgLength);
    let l = randDayArg[j];
    randDayArg[j] = randDayArg[k];
    randDayArg[k] = l;
  }
};
const compareForSort = (a, b) => {
  return a - b;
};
const replaceSelectedAnswer = () => {
  switch (selectedAnswer) {
    case 0:
      selectedAnswer = "Sun";
      break;
    case 1:
      selectedAnswer = "Mon";
      break;
    case 2:
      selectedAnswer = "Tue";
      break;
    case 3:
      selectedAnswer = "Wed";
      break;
    case 4:
      selectedAnswer = "Thu";
      break;
    case 5:
      selectedAnswer = "Fri";
      break;
    case 6:
      selectedAnswer = "Sat";
      break;
    case 7:
      selectedAnswer = "TimeIsUp.";
      break;
  }
};
/************************
  CalendarCalculation
************************/
const calculateJulianDayNumber = () => {
  yearData = parseInt(yearData);
  let k = Math.floor((14 - monthData) / 12);
  julianDayNumber =
    Math.floor(((-k + yearData + 4800) * 1461) / 4) +
    Math.floor(((k * 12 + monthData - 2) * 367) / 12) -
    Math.floor((Math.floor((-k + yearData + 4900) / 100) * 3) / 4) +
    dateData -
    32075;
  return julianDayNumber;
};
const outPutAllDateData = () => {
  weekDay = "Sun";
  switch ((julianDayNumber + 1) % 7) {
    case 1:
      weekDay = "Mon";
      break;
    case 2:
      weekDay = "Tue";
      break;
    case 3:
      weekDay = "Wed";
      break;
    case 4:
      weekDay = "Thu";
      break;
    case 5:
      weekDay = "Fri";
      break;
    case 6:
      weekDay = "Sat";
      break;
  }
};
/****************************************************
  自陣
*****************************************************/
const openIntercalaryCard = () => {
  if (intercalary === true || monthData === 1 || monthData === 2) {
    idIntercalaryCard.setAttribute("src", getCardPath("intercalary"));
  } else {
    myIntercalaryCardsUsed = true;
  }
};
const openMyCenturyCards = () => {
  myCenturyCardsUsed = [];
  for (let i = 0; i < classMyCenturyCards.length; i++) {
    classMyCenturyCards[i].setAttribute("src", getCardPath(i));
    classMyCenturyCards[i].style.opacity = 1;
  }
};
const openMyYearCards = () => {
  myYearCardsUsed = [];
  for (let i = 0; i < classMyYearCards.length; i++) {
    classMyYearCards[i].setAttribute("src", getCardPath(i));
    classMyYearCards[i].style.opacity = 1;
  }
};
const openMyMonthCards = () => {
  myMonthCardsUsed = [];
  for (let i = 0; i < classMyMonthCards.length; i++) {
    classMyMonthCards[i].setAttribute("src", getCardPath(i + 10));
    classMyMonthCards[i].style.opacity = 1;
  }
};
const openMyDateCards = () => {
  myDateCardsUsed = [];
  for (let i = 0; i < classMyDateCards.length; i++) {
    classMyDateCards[i].setAttribute("src", getCardPath(i + 20));
    classMyDateCards[i].style.opacity = 1;
  }
};
const openMyDayCards = () => {
  myDayCardsUsed = [];
  for (let i = 0; i < classMyDayCards.length; i++) {
    classMyDayCards[i].setAttribute("src", getCardPath(i + 30));
    classMyDayCards[i].style.opacity = 1;
  }
};
const closeIntercalaryCard = () => {
  idIntercalaryCard.setAttribute("src", "Common/blue2.png");
  idIntercalaryCard.style.opacity = 1;
};
/****************************************************
  閏(I)
*****************************************************/
const setIntercalary = () => {
  intercalaryInt = 0;
  if ((yearData % 4 === 0 && yearData % 100 != 0) || yearData % 400 === 0) {
    intercalary = true;
    if (monthData === 1 || monthData === 2) {
      intercalaryInt = -1;
    }
  }
};
/****************************************************
  世紀(C)
*****************************************************/
const setComCentury = () => {
  centuryData = Math.floor(yearData / 100);
  centuryAnswer = Math.floor((centuryData % 4) * 5) % 7;
};
/****************************************************
  敵陣 年(Y)
*****************************************************/
const setComYearCards = () => {
  comYearCards = [];
  yearData = "";
  for (let i = 0; i < classComYearCards.length - 2; i++) {
    comYearCards.push(Math.floor(Math.random() * 10));
    yearData = yearData + comYearCards[i];
  }
  if (totalCount === rand00year[rand00yearCounter]) {
    comYearCards[10] = 0;
    yearData = yearData + comYearCards[10];
    comYearCards[11] = 0;
    yearData = yearData + comYearCards[11];
    rand00yearCounter++;
  } else {
    for (
      let i = classComYearCards.length - 2;
      i < classComYearCards.length;
      i++
    ) {
      comYearCards.push(Math.floor(Math.random() * 10));
      yearData = yearData + comYearCards[i];
    }
  }
  /********************************************************************************************
      comYearCards = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0];//カード表示 下の値と合わせること
      yearData = "000000002000";//任意日手入力用 スライスをかけるので文字列で渡す
    ********************************************************************************************/
  if (parseInt(yearData) < 2000) {
    yearData = "";
    comYearCards[0] = 1;
    for (let i = 0; i < classComYearCards.length; i++) {
      yearData = yearData + comYearCards[i];
    }
  }
  if (fixYear === true) {
    comYearCards = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0];
    yearData = "000000002000";
  }
  yearAnswer = parseInt(yearData.slice(10));
  yearAnswer = (yearAnswer + Math.floor(yearAnswer / 4) + 7 - adjuster) % 7;
};
const openComYearCards = () => {
  for (let i = 0; i < classComYearCards.length; i++) {
    classComYearCards[i].setAttribute("src", getCardPath(comYearCards[i]));
  }
  classComYearCards[2].style.opacity = 0.8;
  classComYearCards[3].style.opacity = 0.8;
  classComYearCards[6].style.opacity = 0.8;
  classComYearCards[7].style.opacity = 0.8;
  classComYearCards[10].style.opacity = 0.8;
  classComYearCards[11].style.opacity = 0.8;
};
const closeComYearCards = () => {
  for (let i = 0; i < classComYearCards.length; i++) {
    classComYearCards[i].setAttribute("src", "Common/red2.png");
  }
};
/****************************************************
  敵陣 月(M)
*****************************************************/
const setComMonthCards = () => {
  randDay = randDayArg[randDayCounter];
  if (randDay === 366) {
    while (intercalary != true) {
      setComYearCards();
      setComCentury();
      setIntercalary();
    }
  }
  comMonthCards = [];
  monthData13 = Math.floor((randDay + 122) / 30.61);
  passedMonthDay = Math.floor(monthData13 * 30.6) - 122;
  monthData = ((monthData13 - 2) % 12) + 1;
  if (monthData > 2) {
    monthAnswer = (passedMonthDay + 2 + adjuster) % 7;
  } else {
    monthAnswer = (passedMonthDay + 1 + adjuster) % 7;
  }
  if (monthData < 10) {
    comMonthCards.push(0 + 10);
    comMonthCards.push(monthData + 10);
  } else {
    comMonthCards.push(1 + 10);
    comMonthCards.push(monthData + 10 - 10);
  }
  /********************************************************************************************
      comMonthCards = [0 + 10, 2 + 10];//カード表示(クローバーなので+10)下の値と合わせること
      monthData = 2;//任意日手入力用
    ********************************************************************************************/
  randDayCounter++;
};
const openComMonthCards = () => {
  for (let i = 0; i < 2; i++) {
    classComMonthCards[i].setAttribute("src", getCardPath(comMonthCards[i]));
  }
};
const closeComMonthCards = () => {
  for (let i = 0; i < 2; i++) {
    classComMonthCards[i].setAttribute("src", "Common/red2.png");
  }
};
/****************************************************
  敵陣 日(D)
*****************************************************/
const setComDateCards = () => {
  comDateCards = [];
  dateData = randDay - passedMonthDay;
  if (dateData < 10) {
    comDateCards.push(0 + 20);
    comDateCards.push(dateData + 20);
  } else if (10 <= dateData && dateData < 20) {
    comDateCards.push(1 + 20);
    comDateCards.push(dateData + 20 - 10);
  } else if (20 <= dateData && dateData < 30) {
    comDateCards.push(2 + 20);
    comDateCards.push(dateData + 20 - 20);
  } else if (30 <= dateData) {
    comDateCards.push(3 + 20);
    comDateCards.push(dateData + 20 - 30);
  }
  /********************************************************************************************
      comDateCards = [2 + 20, 9 + 20];//カード表示(ダイヤなので+20) 下の値と合わせること
      dateData = 29;//任意日手入力用
    ********************************************************************************************/
  dateAnswer = dateData % 7;
};
const openComDateCards = () => {
  for (let i = 0; i < 2; i++) {
    classComDateCards[i].setAttribute("src", getCardPath(comDateCards[i]));
  }
};
const closeComDateCards = () => {
  for (let i = 0; i < 2; i++) {
    classComDateCards[i].setAttribute("src", "Common/red2.png");
  }
};
/****************************************************
  敵陣 曜(A)
*****************************************************/
const setComDayCard = () => {
  dayAnswer = (calculateJulianDayNumber() + 1) % 7;
  comDayCard = dayAnswer;
};
const openComDayCard = () => {
  idComDayCards.setAttribute("src", getCardPath(comDayCard + 40));
};
const closeComDayCard = () => {
  idComDayCards.setAttribute("src", "Common/red2.png");
};
/****************************************************
  Attack
*****************************************************/
const classAttackCentury = document.querySelectorAll(".classAttackCentury");
classAttackCentury.forEach((td, index) => {
  td.onclick = () => attackCentury(index);
});
const classAttackYear = document.querySelectorAll(".classAttackYear");
classAttackYear.forEach((td, index) => {
  td.onclick = () => attackYear(index);
});
const classAttackMonth = document.querySelectorAll(".classAttackMonth");
classAttackMonth.forEach((td, index) => {
  td.onclick = () => attackMonth(index);
});
const classAttackDate = document.querySelectorAll(".classAttackDate");
classAttackDate.forEach((td, index) => {
  td.onclick = () => attackDate(index);
});
const classAttackDay = document.querySelectorAll(".classAttackDay");
classAttackDay.forEach((td, index) => {
  td.onclick = () => attackDay(index);
});
/****************************************************
  ArrogantMissed
*****************************************************/

const ArrogantMissed = () => {
  missSoundPlay();
  const damageScreenArrogant = document.querySelector("#damageScreenArrogant");
  damageScreenArrogant.classList.add("numberMissed");
  setTimeout(() => {
    damageScreenArrogant.classList.remove("numberMissed");
  }, 300);
  myLife = myLife - basicDamage;
  perfectFlag = false;
};

/****************************************************
  攻撃 閏(I)
*****************************************************/
const attackIntercalary = (cardIndex) => {
  if (pauseFlag === true || myIntercalaryCardsUsed === true) {
    return;
  }
  if (cardIndex === intercalary && (monthData === 1 || monthData === 2)) {
    hitsoundPlay();
    myIntercalaryCardsUsed = true;
  } else {
    ArrogantMissed();
    idIntercalaryCard.setAttribute("src", "Common/red2.png");
    myIntercalaryCardsUsed = true;
    judgement();
  }
  idIntercalaryCard.style.opacity = 0.6;
  myLifeArrogant.innerText = myLife;
};
/****************************************************
  攻撃 世紀(C)
*****************************************************/
const attackCentury = (cardIndex) => {
  if (pauseFlag === true || myCenturyCardsUsed[cardIndex] === true) {
    return;
  }
  if (cardIndex === centuryAnswer) {
    hitsoundPlay();
    myCenturyCardsUsed[cardIndex] = true;
    for (let i = 0; i < classMyCenturyCards.length; i++) {
      if (myCenturyCardsUsed[i] === true) {
        continue;
      }
      classMyCenturyCards[i].setAttribute("src", "Common/blue2.png");
      for (let i = 0; i < classMyCenturyCards.length; i++) {
        classMyCenturyCards[i].style.opacity = 0.6;
      }
      myCenturyCardsUsed[i] = true;
    }
  } else if (cardIndex != centuryAnswer) {
    ArrogantMissed();
    classMyCenturyCards[cardIndex].setAttribute("src", "Common/red2.png");
    myCenturyCardsUsed[cardIndex] = true;
    judgement();
  }
  classMyCenturyCards[cardIndex].style.opacity = 0.6;
  myLifeArrogant.innerText = myLife;
};
/****************************************************
  攻撃 年(Y)
*****************************************************/
const attackYear = (cardIndex) => {
  if (pauseFlag === true || myYearCardsUsed[cardIndex] === true) {
    return;
  }
  if (cardIndex === yearAnswer) {
    hitsoundPlay();
    myYearCardsUsed[cardIndex] = true;
    for (let i = 0; i < classMyYearCards.length; i++) {
      if (myYearCardsUsed[i] === true) {
        continue;
      }
      classMyYearCards[i].setAttribute("src", "Common/blue2.png");
      for (let i = 0; i < classMyYearCards.length; i++) {
        classMyYearCards[i].style.opacity = 0.6;
      }
      myYearCardsUsed[i] = true;
    }
  } else if (cardIndex != yearAnswer) {
    ArrogantMissed();
    classMyYearCards[cardIndex].setAttribute("src", "Common/red2.png");
    myYearCardsUsed[cardIndex] = true;
    judgement();
  }
  classMyYearCards[cardIndex].style.opacity = 0.6;
  myLifeArrogant.innerText = myLife;
};
/****************************************************
  攻撃 月(M)
*****************************************************/
const attackMonth = (cardIndex) => {
  if (pauseFlag === true || myMonthCardsUsed[cardIndex] === true) {
    return;
  }
  if (cardIndex === monthAnswer) {
    hitsoundPlay();
    myMonthCardsUsed[cardIndex] = true;
    for (let i = 0; i < classMyMonthCards.length; i++) {
      if (myMonthCardsUsed[i] === true) {
        continue;
      }
      classMyMonthCards[i].setAttribute("src", "Common/blue2.png");
      for (let i = 0; i < classMyMonthCards.length; i++) {
        classMyMonthCards[i].style.opacity = 0.6;
      }
      myMonthCardsUsed[i] = true;
    }
  } else if (cardIndex != monthAnswer) {
    ArrogantMissed();
    myLife = myLife - basicDamage;
    perfectFlag = false;
    classMyMonthCards[cardIndex].setAttribute("src", "Common/red2.png");
    myMonthCardsUsed[cardIndex] = true;
    judgement();
  }
  classMyMonthCards[cardIndex].style.opacity = 0.6;
  myLifeArrogant.innerText = myLife;
};
/****************************************************
  攻撃 日(D)
*****************************************************/
const attackDate = (cardIndex) => {
  if (pauseFlag === true || myDateCardsUsed[cardIndex] === true) {
    return;
  }
  if (cardIndex === dateAnswer) {
    hitsoundPlay();
    myDateCardsUsed[cardIndex] = true;
    for (let i = 0; i < classMyDateCards.length; i++) {
      if (myDateCardsUsed[i] === true) {
        continue;
      }
      classMyDateCards[i].setAttribute("src", "Common/blue2.png");
      for (let i = 0; i < classMyDateCards.length; i++) {
        classMyDateCards[i].style.opacity = 0.6;
      }
      myDateCardsUsed[i] = true;
    }
  } else if (cardIndex != dateAnswer) {
    ArrogantMissed();
    classMyDateCards[cardIndex].setAttribute("src", "Common/red2.png");
    myDateCardsUsed[cardIndex] = true;
    judgement();
  }
  classMyDateCards[cardIndex].style.opacity = 0.6;
  myLifeArrogant.innerText = myLife;
};
/****************************************************
  攻撃 曜(A)
*****************************************************/
const attackDay = (cardIndex) => {
  if (pauseFlag === true || myDayCardsUsed[cardIndex] === true) {
    return;
  }
  stopTimer();
  recordTime();
  if (cardIndex === comDayCard) {
    hitsoundPlay();
    correctFlag = true;
    comLife = comLife - calendarDamage;
    outPutAllDateData();
    idCorrectIncorrect.innerHTML =
      "JulianDayNumber<br>" +
      julianDayNumber +
      "<br>WeekDay:" +
      weekDay +
      "<br>" +
      sec +
      "." +
      millisec +
      "sec<br>" +
      "○ CORRECT<br><br>" +
      "CenturyAnswer:" +
      centuryAnswer +
      "<br>YearAnswer:" +
      yearAnswer +
      "<br>MonthAnswer:" +
      monthAnswer +
      "<br>DateAnswer:" +
      dateAnswer +
      "<br>intercalary:" +
      intercalaryInt +
      "<br>Total:" +
      parseInt(
        centuryAnswer + yearAnswer + monthAnswer + dateAnswer + intercalaryInt
      );
    myDayCardsUsed[cardIndex] = true;
    for (let i = 0; i < classMyDayCards.length; i++) {
      if (myDayCardsUsed[i] === true) {
        continue;
      }
      classMyDayCards[i].setAttribute("src", "Common/blue2.png");
      myDayCardsUsed[cardIndex] = true;
    }
  } else if (cardIndex != comDayCard) {
    ArrogantMissed();
    correctFlag = false;
    outPutAllDateData();
    idCorrectIncorrect.innerHTML =
      "JulianDayNumber<br>" +
      julianDayNumber +
      "<br>WeekDay:" +
      weekDay +
      "<br>" +
      +sec +
      "." +
      millisec +
      "sec<br>" +
      "×INCORRECT<br><br>" +
      "CenturyAnswer:" +
      centuryAnswer +
      "<br>YearAnswer:" +
      yearAnswer +
      "<br>MonthAnswer:" +
      monthAnswer +
      "<br>DateAnswer:" +
      dateAnswer +
      "<br>intercalary:" +
      intercalaryInt +
      "<br>Total:" +
      parseInt(
        centuryAnswer + yearAnswer + monthAnswer + dateAnswer + intercalaryInt
      );
    myLife = myLife - dayDamage;
    perfectFlag = false;
    missCount++;
    classMyDayCards[cardIndex].setAttribute("src", "Common/red.png");
    myDayCardsUsed[cardIndex] = true;
    if (cardIndex === 7) {
      correctFlag = false;
      outPutAllDateData();
      idCorrectIncorrect.innerHTML =
        "JulianDayNumber<br>" +
        julianDayNumber +
        "<br>WeekDay:" +
        weekDay +
        "<br>" +
        sec +
        "." +
        millisec +
        "sec<br>" +
        "×TimeIsUp.<br><br>" +
        "CenturyAnswer:" +
        centuryAnswer +
        "<br>YearAnswer:" +
        yearAnswer +
        "<br>MonthAnswer:" +
        monthAnswer +
        "<br>DateAnswer:" +
        dateAnswer +
        "<br>intercalary:" +
        intercalaryInt +
        "<br>Total:" +
        parseInt(
          centuryAnswer + yearAnswer + monthAnswer + dateAnswer + intercalaryInt
        );
    }
  }
  selectedAnswer = cardIndex;
  replaceSelectedAnswer();
  if (perfectFlag === true) {
    perfectHit++;
    serialHit++;
  } else if (perfectFlag === false) {
    serialHit = 0;
  }
  for (let i = 0; i < classComYearCards.length; i++) {
    classComYearCards[i].style.opacity = 0.6;
  }
  for (let i = 0; i < classComMonthCards.length; i++) {
    classComMonthCards[i].style.opacity = 0.6;
  }
  for (let i = 0; i < classComDateCards.length; i++) {
    classComDateCards[i].style.opacity = 0.6;
  }
  idComDayCards.style.opacity = 0.6;
  idIntercalaryCard.style.opacity = 0.6;
  for (let i = 0; i < 7; i++) {
    myCenturyCardsUsed[i] = true;
    myYearCardsUsed[i] = true;
    myMonthCardsUsed[i] = true;
    myDateCardsUsed[i] = true;
    myDayCardsUsed[i] = true;
  }
  totalCount++;
  comLifeArrogant.innerText = comLife;
  myLifeArrogant.innerText = myLife;
  totalCountArrogant.innerText = totalCount;
  perfectHitArrogant.innerText = perfectHit;
  serialHitArrogant.innerText = serialHit;
  openComDayCard();
  idComDayCards.style.opacity = 1;
  outPutAllDateData();
  if (correctFlag === true) {
    console.log(
      "%c○ CORRECT\n" +
        "SelectedAnswer:" +
        selectedAnswer +
        "\n" +
        passedTime.toString().slice(0, 5) +
        "sec" +
        "\nFullYear:" +
        yearData +
        "\nRD:" +
        randDay +
        " RDC:" +
        randDayCounter +
        "\nJDN:" +
        julianDayNumber +
        "\n\nCentury:" +
        centuryData.toString().slice(-2) +
        "  CA=" +
        centuryAnswer +
        "\nYear   :" +
        yearData.toString().slice(-2) +
        "  YA=" +
        yearAnswer +
        "\nMonth  :" +
        ("0" + monthData.toString()).slice(-2) +
        "  MA=" +
        monthAnswer +
        "\nDate   :" +
        ("0" + dateData.toString()).slice(-2) +
        "  DA=" +
        dateAnswer +
        "(" +
        dateData +
        ")" +
        "\nIntercalary:   " +
        intercalaryInt +
        "\nWeekDay:" +
        weekDay +
        " WD=" +
        parseInt(
          (centuryAnswer +
            yearAnswer +
            monthAnswer +
            dateAnswer +
            intercalaryInt) %
            7
        ) +
        "(" +
        parseInt(
          centuryAnswer + yearAnswer + monthAnswer + dateAnswer + intercalaryInt
        ) +
        "," +
        parseInt(
          centuryAnswer + yearAnswer + monthAnswer + dateData + intercalaryInt
        ) +
        ")",
      "font-Size:20px;"
    );
  } else {
    console.log(
      "%c×INCORRECT\n" +
        "SelectedAnswer:" +
        selectedAnswer +
        "\n" +
        passedTime.toString().slice(0, 5) +
        "sec" +
        "\nFullYear:" +
        yearData +
        "\nRD:" +
        randDay +
        " RDC:" +
        randDayCounter +
        "\nJDN:" +
        julianDayNumber +
        "\n\nCentury:" +
        centuryData.toString().slice(-2) +
        "  CA=" +
        centuryAnswer +
        "\nYear   :" +
        yearData.toString().slice(-2) +
        "  YA=" +
        yearAnswer +
        "\nMonth  :" +
        ("0" + monthData.toString()).slice(-2) +
        "  MA=" +
        monthAnswer +
        "\nDate   :" +
        ("0" + dateData.toString()).slice(-2) +
        "  DA=" +
        dateAnswer +
        "(" +
        dateData +
        ")" +
        "\nIntercalary:   " +
        intercalaryInt +
        "\nWeekDay:" +
        weekDay +
        " WD=" +
        parseInt(
          (centuryAnswer +
            yearAnswer +
            monthAnswer +
            dateAnswer +
            intercalaryInt) %
            7
        ) +
        "(" +
        parseInt(
          centuryAnswer + yearAnswer + monthAnswer + dateAnswer + intercalaryInt
        ) +
        "," +
        parseInt(
          centuryAnswer + yearAnswer + monthAnswer + dateData + intercalaryInt
        ) +
        ")",
      "font-Size:20px;"
    );
  }
  totalTime = totalTime + parseInt(sec) + parseInt(millisec) / 100;
  average = totalTime / totalCount;
  if (battleMode === "Ignorant") {
    averageTimeIgnorant.innerText = average.toString().slice(0, 5) + "sec";
  }
  if (battleMode === "Arrogant") {
    averageTimeArrogant.innerText = average.toString().slice(0, 5) + "sec";
  }
  if (totalCount === 0) {
    averageTimeIgnorant.innerText =
      "over" + totalTime.toString().slice(0, 5) + "s";
  }
  idCorrectIncorrect.style.visibility = "visible";
  idCorrectIncorrect.style.opacity = 1;
  classMyDayCards[cardIndex].style.opacity = 1;
  judgement();
  if (winFlag === true || loseFlag === true) {
    idCorrectIncorrect.style.visibility = "hidden";
  }
  if (winFlag !== true && loseFlag !== true)
    setTimeout(calendarStart, answerWaitTime);
};
