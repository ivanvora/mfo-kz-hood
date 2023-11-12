export type TApplication = {
  id: number;
  number: string;
  product_id: number;
  customer_id: number;
  request_loan_amount: string;
  request_loan_term: number;
  agreed_loan_amount: string;
  agreed_loan_term: number;
  selected_loan_amount: string;
  selected_loan_term: number;
  interest_rate_daily: string;
  penalty_rate_daily: string;
  status_type_id: number;
  application_source_id: number;
  application_type_id: number;
  created_at?: string;
  updated_at?: string;
  product: {
    id: number;
    name: string;
    max_sum: string;
    min_sum: string;
    max_term: number;
    min_term: number;
    interest_rate_daily: string;
    penalty_rate_daily: string;
    max_interest: string;
    max_sum_from_issue_sum: string;
    application_source_id: number;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
  };
  customer: {
    id: number;
    created_at: null;
    updated_at: string;
    lastname: string;
    firstname: string;
    middlename: string;
    iin: string;
    marital_status_id: number;
    birth_date: string;
    gender_id: number;
    timezone: string;
  };
  status_type: {
    id: number;
    label: string;
    code: string;
    is_end: false;
    created_at: string;
    updated_at: string;
  };
  application_source: {
    id: number;
    label: string;
    code: string;
    created_at: string;
    updated_at: string;
  };
  application_type: {
    id: number;
    label: string;
    code: string;
    created_at: string;
    updated_at: string;
  };
};

export type TLinks = {
  url?: string;
  label: string;
  active: boolean;
};

export type TApplicationsResponse = {
  current_page: number;
  data: TApplication[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: TLinks[];
  next_page_url?: string;
  path: string;
  per_page: number;
  prev_page_url?: string;
  to: number;
  total: number;
};

export type TApplicationResponse = {
  id: number;
  number: string;
  product_id: number;
  customer_id: number;
  request_loan_amount: string;
  request_loan_term: number;
  agreed_loan_amount: string;
  agreed_loan_term: number;
  selected_loan_amount: string;
  selected_loan_term: number;
  interest_rate_daily: string;
  penalty_rate_daily: string;
  status_type_id: number;
  application_source_id: number;
  application_type_id: number;
  created_at?: string;
  updated_at?: string;
};
