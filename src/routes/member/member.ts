import membersJson from "./member.json";

export type Socials = {
  github?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
};

export type CallToAction = {
  text?: string;
  link?: string;
} | null;

export interface Member {
  name: string;
  std_id: string;
  avatar: string;
  cover_image: string;
  bio: string;
  socials: Socials;
  call_to_action?: CallToAction;
  tags: string[];
}

export const members = membersJson as Member[];
