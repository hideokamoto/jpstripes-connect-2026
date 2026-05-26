export type SpeakerLink = {
  label: string;
  url: string;
};

export type Speaker = {
  id: string;
  name: string;
  nameReading?: string;
  org?: string;
  title?: string;
  image?: string;
  bio?: string;
  links?: SpeakerLink[];
};
