export class  Book {
  constructor(
    public id: number,
    public title: string,
    public subtitle: string,
    public author: string,
    public publisher: string,
    public publishedDate: string,
    public description: string,
    public retailPrice: number,
    public storePrice: number,
    public tradeInPrice: number,
    public genre: string,
    public quantity: number,
    public scannedISBN: string
  ){}
}
