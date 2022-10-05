export interface BtnBaseType {
  currentState: string,
  value: string,
  click: (value:string, prev:string) => void
}

export interface BtnPrevType extends BtnBaseType {
  prev: string
}