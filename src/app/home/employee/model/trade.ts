export class Trade {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public total: number,
    public itemQuantity: number,
    public customer_id: number
  ){}
}
