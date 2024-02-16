import { StaticImageData } from "next/image";

export type AllFrameTypes = "none" | "hill" | "home" | "tree" | "evil" | "brim" | "pond" | "void";
export type FrameParamsType = "coin" | "ruin";
export type AllActionTypes = "skill" | "simpl" | "season";

export type SeasonScoresType = { p1: number; p2: number; c: number; m: number };
export type GameStateType = {
  season: number;
  scores: SeasonScoresType[];
  freeSkills: number;
};

export type CoinTypes = "none" | "added" | "lost";
export type CoinWalletType = {
  id: string;
  coinType: CoinTypes;
};

export type RuinTypes = "none" | "added";

export type MapFramesType = {
  id: string;
  frameType: AllFrameTypes;
  frameSubType?: AllFrameTypes;
  coinType?: CoinTypes;
  ruinType?: RuinTypes;
};

type paramsKinds = { title: string; imgSrc: string };
export type CoinKinds = Record<CoinTypes, paramsKinds>;
export type RuinKinds = Record<RuinTypes, paramsKinds>;

export type frameToHisory = { count: number; kind: AllFrameTypes };
export type HistoryRowType = {
  id: string;
  stepMode: AllActionTypes;
  time: string | Date;
  coins?: number;
  ruin?: boolean;
  oldFrames?: frameToHisory[];
  newFrames?: frameToHisory[];
};
