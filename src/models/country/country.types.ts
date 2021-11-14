export interface ICountry {
  name: string,
  currencies: Array<ICurrency>,
  flags: flag
}

export interface ICurrency {
	code: string,
	name: string,
	symbol: string
}

export interface flag {
	svg: string,
	png: string
}