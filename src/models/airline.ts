export enum providerType { domestic, international }

export interface airline {
  id: number,
  providerName: string,
  providerCode: string,
  providerType: providerType
}
