export interface ITimeline {
  width: number;
  prices?: string[];
  isFirstElement?: boolean;
  isLastElement?: boolean;
  color?: string;
}

export enum EState {
  PRESENT,
  FUTURE,
  PAST,
  IN_APPROVAL,
  NULL
}

export interface ITimelineInput {
  start_date: Date;
  end_date: Date;
  prices: string[];
  state: EState;
}

export interface IInitialData {
  start_date: Date;
  end_date: Date;
  timelineInput: ITimelineInput[];
}
