export type GetProductImprovementListResponse = {
    data: ProductImprovement[]
    total: number
  }
  
  export type ProductImprovement = {
    name: string
    status: string
  }
  