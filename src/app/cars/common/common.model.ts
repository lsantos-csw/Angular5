export enum EState {
  PRESENT,
  FUTURE,
  PAST,
  IN_APPROVAL,
  NULL
}

export interface ITimelinePiece {
  start_date: Date;
  end_date: Date;
  prices?: string[];
  state: EState;
}

export interface ITimelineData {
  // start_date: Date;
  // end_date: Date;
  timelineInput: ITimelinePiece[];
}

export interface IModel {
  id: number;
  model: string;
  sub_models: ICar[];
  // carInformation: ITimelinePiece[];
}

export interface ICar {
  name: string;
  price_info: ITimelinePiece[];
}
