//Websites
import ABSAIMg from "../assets/ABSACover.png";
import SDSImg from "../assets/SDSImg.png";
import HabibiImg from "../assets/HabibiImg.png";

//Logo
import TapImg from "../assets/TapImg.jpg";
import DunfordImg from "../assets/DunfordImg.jpg";
import CannaImg from "../assets/CannaImg.jpg";

//GameUI
import ColourImg from "../assets/ColourImg.png";
import NightImg from "../assets/NightMoversImg.PNG";
import BrokenImg from "../assets/Broken Bonds/BrokenBonds.png";
import BoredomImg from "../assets/BoredomImg.PNG";
import PenguinImg from "../assets/SirPenguinImg.PNG";

//Digital Drawings
import EsquirelImg from "../assets/EsquirelImg.png";
import DesiresImg from "../assets/DesiresImg.png";
import ColdImg from "../assets/ColdImg.PNG";

//ABSA Screenshot
import BankingDNA from "../assets/ABSA/BankingDNA.png";
import Home from "../assets/ABSA/Home.png";
import MoneyIncome from "../assets/ABSA/MoneyIncome.png";
import MoneyOverview from "../assets/ABSA/MoneyOverview.png";
import MoneyProgress from "../assets/ABSA/MoneyProgress.png";
import SimulationSelection from "../assets/ABSA/SimulationSelection.png";
import StrategySelection from "../assets/ABSA/StrategySelection.png";
import MoneyExpenses from "../assets/ABSA/MoneyExpenses.png";
import MoneySavings from "../assets/ABSA/MoneySavings.png";
import StrategyFPB from "../assets/ABSA/StrategyPVRWF.png";
import SimulationPVR from "../assets/ABSA/PVR.png";

//ABSA
import SimulationWireframe from "../assets/ABSA/SimulationWireframe.png";
import StrategyPVRWF from "../assets/ABSA/StrategyPVRWF.png";
import StrategyWireframe from "../assets/ABSA/StrategyWireframe.png";
import SimulationFPBWF from "../assets/ABSA/SimualtionFPBWF.png";
import MoneyWireframe from "../assets/ABSA/MoneyWireframe.png";
import HomeWireframe from "../assets/ABSA/HomeWireframe.png";

//Broken Bonds
import BBComplete from "../assets/Broken Bonds/BBComplete.PNG";
import BBController from "../assets/Broken Bonds/BBController.png";
import BBKeyboard from "../assets/Broken Bonds/BBKeyboard.png";
import BrokenBonds from "../assets/Broken Bonds/BrokenBonds.png";

//Colour Chase
import CCBg from "../assets/ColourChase/CCBg.PNG";
import CCKeys from "../assets/ColourChase/CCKeys.PNG";
import CCRoom from "../assets/ColourChase/CCRoom.PNG";
import ColourChase from "../assets/ColourChase/ColourChase.png";

//Boredom Buster
import BoredomBusters from "../assets/BoredomBuster/BoredomBusters.PNG";
import BrbActivity from "../assets/BoredomBuster/BrbActivity.jpeg";
import BrBBack from "../assets/BoredomBuster/BrBBack.PNG";
import BrbDoor from "../assets/BoredomBuster/BrbDoor.jpeg";

//Night Movers
import NightMovers from "../assets/NightMovers/NightMovers.PNG";
import NMCall from "../assets/NightMovers/NMCall.PNG";
import NMintro from "../assets/NightMovers/NMIntro.PNG";
import NMPause from "../assets/NightMovers/NMPause.PNG";

//SirPenguin
import SirPenguin from "../assets/SirPenguin/SirPenguin.PNG";
import SPCOntrols from "../assets/SirPenguin/SPCOntrols.PNG";
import SPEnd from "../assets/SirPenguin/SPEnd.PNG";
import SPPause from "../assets/SirPenguin/SPPause.PNG";

export const websites = [
  {
    id: "absa",
    title: "ABSA Financial Advisor WebApp",
    desc: "ABSA SmartFinance. Designed for young professionals, this intuitive web app lets you view and track your finances, run real-life scenarios in interactive simulation labs, and follow personalised strategy tracks to reach your goals with confidence.",
    hasDetail: true,
    image: ABSAIMg,
    hasDetail: true,

    detail: {
      screenshots: [
        { label: "Home Screen", image: Home },
        { label: "Money Overview", image: MoneyOverview },
        { label: "Money Income", image: MoneyIncome },
        { label: "Money Expenses", image: MoneyExpenses },
        { label: "Money Savings", image: MoneySavings },
        { label: "Money Progress", image: MoneyProgress },
        { label: "Strategy Selection", image: StrategySelection },
        { label: "Strategy FPB", image: StrategyFPB },
        { label: "Simulation Selection", image: SimulationSelection },
        { label: "Simulation PVR", image: SimulationPVR },
        { label: "Banking DNA", image: BankingDNA },
      ],

      wireframes: [
        { label: "Home Wireframe", image: HomeWireframe },
        { label: "Strategy Wireframe", image: StrategyWireframe },
        { label: "Simulation Wireframe", image: SimulationWireframe },
        { label: "Strategy PVR Wireframe", image: StrategyPVRWF },
        { label: "Money Wireframe", image: MoneyWireframe },
      ],

      customerBackground:
        "Many high-earning young individuals in South Africa are within their first years of serious financial independence.",

      challenges: [
        "Feeling overwhelmed with financial decisions",
        "Tracking savings, investment, and debt",
        "Low long-term financial planning awareness",
        "Understanding financial jargon",
        "Money spread across multiple platforms",
        "Limited time due to demanding jobs",
      ],

      goals: [
        "Increase adoption of investment products",
        "Position Absa as a wealth partner",
        "Improve financial insights",
        "Increase engagement with young professionals",
      ],

      mood: "Dark, modern banking interface with purple accents and yellow highlights.",
    },
  },
  {
    id: "safedollar",
    title: "Safe Dollar Studios Website",
    desc: "Safe Dollar Studios is a game design company. The website showcases the studio's creative portfolio and the team behind its work. Visitors can explore the company's completed projects, learn about the designers and developers on staff, and get a clear sense of the studio's creative vision and expertise.",
    image: SDSImg,
    hasDetail: false,
  },
  {
    id: "habibi",
    title: "Habibi Vapes Website",
    desc: "Habibi Vapes is a vape retail company whose website is designed to sell products directly to customers. The site showcases the full range of available vapes, allowing visitors to browse different options and make purchases seamlessly online.",
    image: HabibiImg,
    hasDetail: false,
  },
];
export const gameUIs = [
  {
    id: "broken-bonds",
    title: "Broken Bonds",
    desc: "Broken Bonds is a narrative-driven game where players step into the stitched shoes of a once-beloved teddy bear, torn from its rightful owner by a troubled brother and locked away in a room that feels more like a prison. I designed the assets and UI for this project.",
    image: BrokenImg,
    detail:
      "A dark narrative game with a melancholic, hand-crafted aesthetic. The UI uses stitched textures, aged paper tones, and a limited palette to reinforce the emotional weight of the story. Every element was designed to feel worn and loved, mirroring the protagonist's own journey.",

    screenshots: [
      { label: "Main Menu", image: BBComplete },
      { label: "Controller UI", image: BBController },
      { label: "Keyboard UI", image: BBKeyboard },
      { label: "Broken Bonds Scene", image: BrokenBonds },
    ],
  },

  {
    id: "colour-chase",
    title: "Colour Chase",
    desc: "Colour Chase is a two-player arcade-style game featuring multiple mini-games within a single experience. I designed the entire user interface across all mini-games, using a cohesive pixel art aesthetic to unify the fast-paced, competitive gameplay.",
    image: ColourImg,
    detail:
      "Bold pixel art UI system built for competitive play. Every screen needed to read instantly at a glance, so high-contrast colours and large readable fonts were central to the design language. The consistent visual system ties together wildly different mini-game modes.",

    screenshots: [
      { label: "Background", image: CCBg },
      { label: "Key Controls", image: CCKeys },
      { label: "Room Scene", image: CCRoom },
      { label: "Game Logo", image: ColourChase },
    ],
  },

  {
    id: "boredom-buster",
    title: "Boredom Buster",
    desc: "Boredom Buster is a game app designed for children to help them decide which games to play. I designed the UI, with a focus on making the interface both readable and intriguing for young audiences, ensuring an engaging and child-friendly experience.",
    image: BoredomImg,
    detail:
      "Bright, friendly UI designed around accessibility for young readers. Rounded shapes, chunky icons, and a cheerful palette keep the experience welcoming and safe. Typography choices prioritise legibility for early readers.",

    screenshots: [
      { label: "Activity Screen", image: BrbActivity },
      { label: "Background", image: BrBBack },
      { label: "Door Scene", image: BrbDoor },
      { label: "Main Screen", image: BoredomBusters },
    ],
  },

  {
    id: "night-movers",
    title: "Night Movers",
    desc: "Night Movers is a horror game where players must move objects out of an abandoned house while enduring an unsettling, dread-filled atmosphere. I designed the UI and 3D assets; I crafted the assets to reinforce the horror feel and immerse players in the tense, ghostly environment.",
    image: NightImg,
    detail:
      "Horror UI built around dread and disorientation. Desaturated palettes, flickering text effects, and deliberate visual noise reinforce the atmosphere without overwhelming gameplay clarity. 3D assets were sculpted to feel decayed and unsettling.",

    screenshots: [
      { label: "Intro", image: NMintro },
      { label: "Call Screen", image: NMCall },
      { label: "Pause Menu", image: NMPause },
      { label: "Game Logo", image: NightMovers },
    ],
  },

  {
    id: "sirpenguin",
    title: "SirPenguin",
    desc: "Sir Penguin is a player-versus-player game where competitors battle to collect the most pebbles. I styled the entire UI, using a cartoon style to bring across a playful, icy aesthetic that matches the game's chilly, competitive world.",
    image: PenguinImg,
    detail:
      "Whimsical cartoon UI set in a frozen world. Soft icy blues and snappy animations give the game personality and make even losing feel fun. The penguin character's expressions and the trophy animations reward players with charm.",

    screenshots: [
      { label: "Controls", image: SPCOntrols },
      { label: "Pause Screen", image: SPPause },
      { label: "End Screen", image: SPEnd },
      { label: "Game Logo", image: SirPenguin },
    ],
  },
];

export const logoDesigns = [
  {
    id: "canna-joint",
    title: "Canna Joint",
    desc: "The logo for Canna Joint captures the essence of the brand, seamlessly blending the identity of the business with its core product: cannabis. After an in-depth process of reviewing various drafts and refining elements based on client feedback, the final design embodies both professionalism and approachability.",
    image: CannaImg,
    reverse: false,
  },
  {
    id: "dunford-lodge",
    title: "Dunford Lodge",
    desc: "I was tasked with creating a logo for the beautiful lodge, Dunford Lodge. This features a bald eagle gripping a key in its beak, symbolising both the freedom and security guests experience during their stay. The key signifies access to the natural beauty, serenity, and hospitality that define Dunford Lodge.",
    image: DunfordImg,
    reverse: true,
  },
  {
    id: "tap-map",
    title: "Tap Map",
    desc: "I was tasked with redesigning TAP MAP's logo. The redesigned logo incorporates the company's core values of mining and consulting. Retaining the brand's signature orange and black colour scheme, the logo introduces key mining elements, a wheel and a pickaxe.",
    image: TapImg,
    reverse: false,
  },
];

export const digitalDrawings = [
  {
    id: "cold-blooded-habits",
    title: "Cold-Blooded Habits",
    desc: "A digital illustration that anthropomorphises a frog dressed in a sleek jacket, smoking a cigarette. The piece humorously blends human fashion and vices with the natural world, blurring the line between instinct and identity. The artwork invites viewers to reflect on how easily human behaviours can be projected onto the animal kingdom.",
    image: ColdImg,
    reverse: false,
  },
  {
    id: "caged-desires",
    title: "Caged Desires",
    desc: "A digital artwork created for a story which reimagines power dynamics and challenges traditional gender roles through an unsettling lens. The figure of a man stands as both a symbol of vulnerability and subjugation. Within the context of the narrative, the piece explores the objectification of men, where they are locked in cages, dehumanising their bodies, and reducing them to mere vessels for reproduction.",
    image: DesiresImg,
    reverse: true,
  },
  {
    id: "esquirel-monarchy",
    title: "Esquirel Monarchy",
    desc: "A digital illustration created for a card game of strategy and battle. This powerful card features a squirrel clad in detailed knight's armor and ready for combat. This tiny warrior symbolises unexpected strength and cleverness.",
    image: EsquirelImg,
    reverse: false,
  },
];
