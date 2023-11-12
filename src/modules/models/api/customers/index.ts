export type TCustommerResponse = {
  id: number;
  created_at?: string;
  updated_at: string;
  lastname: string;
  firstname: string;
  middlename: string;
  iin: string;
  marital_status_id: number;
  birth_date: string;
  gender_id: number;
  timezone: string;
  applications: [
    {
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
    },
  ];
  customer_works: string[];
  third_parties: string[];
  phones: string[];
  incomes: string[];
  expenses: string[];
};
