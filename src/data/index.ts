interface IOption {
  name: string;
  colherCha: number;
  xicara: number;
  copoAmericano: number;
  colherSopa: number;
  colherDeSobremesa: number;
}

export const optionsIngredients = [
  {
    name: "Farinha de Trigo",
    value: 0,
  },
  {
    name: "Açúcar",
    value: 1,
  },
  {
    name: "Chocolate em Pó",
    value: 2,
  },
  {
    name: "Líquidos",
    value: 3,
  },
  {
    name: "Amido de Milho",
    value: 4,
  },
  {
    name: "Polvilho",
    value: 5,
  },
  {
    name: "Fubá",
    value: 6,
  },
  {
    name: "Manteiga",
    value: 7,
  },
  {
    name: "Café",
    value: 8,
  },
  {
    name: "Coco Ralado",
    value: 9,
  },
];

export const optionsMeasure = [
  {
    name: "Xícara de Chá",
    value: "xicara",
  },
  {
    name: "Copo Americano",
    value: "copoAmericano",
  },
  {
    name: "Colher de Chá",
    value: "colherCha",
  },
  {
    name: "Colher de Sopa",
    value: "colherSopa",
  },
  {
    name: "Colher de Sobremesa",
    value: "colherDeSobremesa",
  },
];

export const optionsG: IOption[] = [
  {
    name: "Farinha de Trigo",
    colherCha: 3.5,
    xicara: 120,
    copoAmericano: 165,
    colherSopa: 7.5,
    colherDeSobremesa: 5,
  },
  {
    name: "Açúcar",
    colherCha: 4,
    xicara: 200,
    copoAmericano: 200,
    colherSopa: 14,
    colherDeSobremesa: 9,
  },
  {
    name: "Chocolate em Pó",
    colherCha: 3,
    xicara: 128,
    copoAmericano: 175,
    colherSopa: 9,
    colherDeSobremesa: 4.5,
  },
  {
    name: "Líquidos",
    colherCha: 3,
    xicara: 128,
    copoAmericano: 175,
    colherSopa: 9,
    colherDeSobremesa: 3,
  },
  {
    name: "Amido de Milho",
    colherCha: 2.5,
    xicara: 126,
    copoAmericano: 172,
    colherSopa: 7.5,
    colherDeSobremesa: 2.5,
  },
  {
    name: "Polvilho",
    colherCha: 7,
    xicara: 200,
    copoAmericano: 273,
    colherSopa: 20,
    colherDeSobremesa: 6.6,
  },
  {
    name: "Fubá",
    colherCha: 6.5,
    xicara: 80,
    copoAmericano: 110,
    colherSopa: 18,
    colherDeSobremesa: 13,
  },
  {
    name: "Manteiga",
    colherCha: 2,
    xicara: 100,
    copoAmericano: 140,
    colherSopa: 7,
    colherDeSobremesa: 5,
  },
  {
    name: "Café",
    colherCha: 2,
    xicara: 100,
    copoAmericano: 140,
    colherSopa: 7,
    colherDeSobremesa: 5,
  },
  {
    name: "Coco Ralado",
    colherCha: 2,
    xicara: 100,
    copoAmericano: 140,
    colherSopa: 7,
    colherDeSobremesa: 5,
  },
];
