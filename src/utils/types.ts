export enum PasswordContitions {
  HAS_AT_LEAST_EIGHT_CHARACTERS = 'HAS_AT_LEAST_EIGHT_CHARACTERS',
  HAS_AT_LEAST_ONE_UPPERCASE_LETTER = 'HAS_AT_LEAST_ONE_UPPERCASE_LETTER',
  HAS_ONE_UNIQUE_CHARACTER = 'HAS_ONE_UNIQUE_CHARACTER',
}

export type SessionData = {
  email_address: string;
  first_name: string;
  last_name: string;
  username: string;
  total_balance: number;
  total_returns: number;
  id: string;
};

export type HomeHeaderType = {
  userName?: string;
};

export type AccountCardType = {
  balance?: number | string;
  returns?: number | string;
};

export type PlanItemType = {
  id?: string;
  created_at?: string;
  plan_name?: string;
  invested_amount?: number;
  total_returns?: number;
  target_amount?: number;
  maturity_date?: string;
  user_id?: string;
};

export type ProgressBarType = {
  percentage: number;
};

export type CreatePlanNameComponentType = {
  next: () => void;
};

export type PlanAmountComponentType = {
  next: () => void;
};

export type CreatePlanContextType = {
  planForm: {
    name: string;
    amount: string;
    date: string;
  };
  setPlanForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      amount: string;
      date: string;
    }>
  >;
};

export type AppStateType = {
  rates: {
    buy_rate: number;
    sell_rate: number;
  };
};

export type AppContextType = {
  appData: AppStateType;
  setAppData: React.Dispatch<React.SetStateAction<AppStateType>>;
};

export type FundPlanType = {
  data: {
    icon: JSX.Element;
    title: string;
    timeline: string;
    rate: string;
    fee: string;
  };
  isLast: boolean;
  onPress: () => void;
};

export type BankItemType = {
  data: {
    accountNumber: string;
    bankName: string;
    accountName: string;
  };
  onPress: () => void;
};
