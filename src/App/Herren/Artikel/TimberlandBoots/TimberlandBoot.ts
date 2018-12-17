export class TimberlandBoot {
  public name: string;
  public preis: number;
  public obermaterial: string;
  public innenmaterial: string;
  public decksohle: string;
  public sohle: string;
  public fütterungsdicke: string;
  public wetter: string;
  public schuhspitze: string;
  public details: string;
  public verschluss: string;
  public artikelnummer: string;

  constructor(
    name: string,
    preis: number,
    obermaterial: string,
    innenmaterial: string,
    decksohle: string,
    sohle: string,
    fütterungsdicke: string,
    wetter: string,
    schuhspitze: string,
    details: string,
    verschluss: string,
    artikelnummer: string
  ) {
    this.name = name;
    this.preis = preis;
    this.obermaterial = obermaterial;
    this.innenmaterial = innenmaterial;
    this.decksohle = decksohle;
    this.sohle = sohle;
    this.fütterungsdicke = fütterungsdicke;
    this.wetter = wetter;
    this.schuhspitze = schuhspitze;
    this.details = details;
    this.verschluss = verschluss;
    this.artikelnummer = artikelnummer;
  }
}

export const Artikel1 = new TimberlandBoot(
  "TimberlandBoot",
  199.0,
  "Nubuk",
  "Kombination aus Leder und Textilfutter",
  "Leder",
  "Kunststoff",
  "Warm gefüttert",
  "Schnee",
  "Rund",
  "Ziernähte",
  "Schnürung",
  "TI112C04A-702"
);
