
export enum VisitPurpose {
  DINE_IN = "Dine-in Restaurant",
  BUTCHERY = "Butchery & Gourmet Shop",
  BOTH = "Both"
}

export interface SurveyData {
  name?: string;
  purpose: string;
  referral: string[];
  meatQuality: number;
  steakDoneness: string;
  foodTemp: string;
  menuVariety: string;
  staffFriendliness: number;
  serverKnowledge: string;
  serviceSpeed: string;
  rawProductQuality: number;
  foundEverything: string;
  cleanliness: number;
  ambiance: number;
  nps: number;
  improvements: string;
  phoneNumber: string;
}

export const INITIAL_DATA: SurveyData = {
  name: "",
  purpose: "",
  referral: [],
  meatQuality: 0,
  steakDoneness: "",
  foodTemp: "",
  menuVariety: "",
  staffFriendliness: 0,
  serverKnowledge: "",
  serviceSpeed: "",
  rawProductQuality: 0,
  foundEverything: "",
  cleanliness: 0,
  ambiance: 0,
  nps: 0,
  improvements: "",
  phoneNumber: ""
};
