export type Segment = {
  anchor: boolean;
  id: number;
  levels?: {
    level_hsk: string;
    level_hsk_3: string;
  };
  pos: string;
  word: string;
};
