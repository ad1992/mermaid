import type { RectData } from '../common/commonTypes';

export interface Box {
  name: string;
  wrap: boolean;
  fill: string;
  actorKeys: string[];
}

export interface Actor {
  box?: Box;
  name: string;
  description: string;
  wrap: boolean;
  prevActor?: string;
  nextActor?: string;
  links: Record<string, string>;
  properties: Record<string, string>;
  actorCnt: number | null;
  rectData: RectData;
  type: string;
  stopx: number;
  stopy: number;
  height: number;
  startx: number;
  starty: number;
  width: number;
  x: number;
  y: number;
}

export interface Message {
  from?: { actor: string };
  to?: { actor: string };
  message:
    | string
    | {
        start: number;
        step: number;
        visible: boolean;
      };
  wrap: boolean;
  answer?: unknown;
  type?: number;
  activate?: boolean;
  placement?: string;
}

export interface AddMessageParams {
  from: string;
  to: string;
  msg: string;
  signalType: number;
  type:
    | 'addMessage'
    | 'sequenceIndex'
    | 'addParticipant'
    | 'createParticipant'
    | 'destroyParticipant'
    | 'activeStart'
    | 'activeEnd'
    | 'addNote'
    | 'addLinks'
    | 'addALink'
    | 'addProperties'
    | 'addDetails'
    | 'boxStart'
    | 'boxEnd'
    | 'loopStart'
    | 'loopEnd'
    | 'rectStart'
    | 'rectEnd'
    | 'optStart'
    | 'optEnd'
    | 'altStart'
    | 'else'
    | 'altEnd'
    | 'setAccTitle'
    | 'parStart'
    | 'parAnd'
    | 'parEnd'
    | 'and'
    | 'criticalStart'
    | 'criticalOption'
    | 'option'
    | 'criticalEnd'
    | 'breakStart'
    | 'breakEnd'
    | 'parOverStart'
    | 'parOverEnd'
    | 'parOverAnd'
    | 'parOverEnd';

  activate: boolean;
}

export interface Note {
  actor: { actor: string };
  placement: Message['placement'];
  message: string;
  wrap: boolean;
}

export interface TextAttrs {
  class?: string;
  fill?: string;
  stroke?: string;
  'font-size'?: string;
  'font-family'?: string;
  'font-weight'?: string;
}

export interface LoopModel {
  startx: number;
  starty: number;
  stopx: number;
  stopy: number;
  title: string;
  wrap: boolean;
  width: number;
  height: number;
  fill: string;
  sections: Array<{ x: number; y: number; height: number }>;
  sectionTitles?: Array<{ message: string }>;
}
