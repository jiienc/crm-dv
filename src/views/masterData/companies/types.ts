export type GetCompanyListResponse = {
  data: Company[]
  total: number
}

export type Company = {
  name: string
  company_name: string
  phone_no: string
  email: string
  assigned: string
  pic: string
}

export type AllContactItem = {
  name: string;
}

export type AllContactResponse = {
  data: AllContactItem[];
}

export type LinkedItem = {
  link_doctype: string;
  link_name: string;
  parent: string;
}

export type LinkedResponse = {
  data: LinkedItem[];
  company: string;
  contact: string;
}

export type ToDoItem = {
  reference_name: string;
  reference_type: string;
  assigned_by_full_name: string;
}

export type ToDoResponse = {
  data: ToDoItem[];
}
