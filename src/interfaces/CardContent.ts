export interface CardContent {
    backgrounds:    Background;
    backsideCard:  BacksideCard;
    frontsideCard: FrontsideCard;
}

export interface Background {
    background_1040:    string;
    background_640:     string;
    background_340:     string;
    background_regular: string;
}

export interface BacksideCard {
    media: string;
    cvc: string;
}

export interface FrontsideCard {
    cardNumber: string;
    holderName: string;
    expDate:    ExpDate;
}

export interface ExpDate {
    month: string;
    year:  string;
}
