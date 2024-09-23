type FrontsideCardDetails = {
    holderName: string;
    cardNumber: string;
    expDate: {
        month: string;
        year: string;
    };
}

type BacksideCardDetails = {
    cvc: string;
}

export function useFormDetails(frontsideCardDetails: FrontsideCardDetails, backsideCardDetails: BacksideCardDetails) {
    
    //! Lo recomendable seria que el contenido fuese leido de forma dinamica basado en un estado y no que se actualice directamente de esta forma
    //? Se podria hacer uso de un store para manejar el estado de los datos de la tarjeta y que estos se actualicen de forma dinamica
    //? en el componente FrontsideDetails.svelte se podria hacer uso de un store para manejar el estado de los datos de la tarjeta y que estos se actualicen de forma dinamica
    //? Otra idea seria meter el initial state dentro de un componente superior que pueda ser manejable de froma dinamica 
    //? y no de forma estatica como ahora mismo la maneja astro en el niver superior del index

    const cardHolderNameElement = document.getElementById('text_cardHolderName') as HTMLInputElement;
    const cardNumberElement = document.getElementById('text_cardNumber') as HTMLInputElement;
    const cardExpDateElement_month = document.getElementById('text_cardExpDate__month') as HTMLInputElement;
    const cardExpDateElement_year = document.getElementById('text_cardExpDate__year') as HTMLInputElement;

    const cardCvcElement = document.getElementById('text_cardCvc') as HTMLInputElement;


    let cardNumber = frontsideCardDetails.cardNumber;


    const onCardholderNameChange = (e: Event) => {
        frontsideCardDetails.holderName = (e.target as HTMLInputElement).value;
        cardHolderNameElement.innerHTML = frontsideCardDetails.holderName;
    }
    const onCardNumberChange = (e: Event) => {
        
        cardNumber = (e.target as HTMLInputElement).value
        const matched = cardNumber.match(/.{1,4}/g);

        cardNumberElement.innerHTML = matched?.join(' ') || '';
        frontsideCardDetails.cardNumber = cardNumber;

    }
    const onCardExpDateMonth = (e: Event) => {
        frontsideCardDetails.expDate.month = (e.target as HTMLInputElement).value;
        cardExpDateElement_month.innerHTML = frontsideCardDetails.expDate.month;
    }
    const onCardExpDateYear = (e: Event) => {
        frontsideCardDetails.expDate.year = (e.target as HTMLInputElement).value;
        cardExpDateElement_year.innerHTML = frontsideCardDetails.expDate.year;
    }
    const onCardCvcChange = (e: Event) => {
        backsideCardDetails.cvc = (e.target as HTMLInputElement).value;
        cardCvcElement.innerHTML = backsideCardDetails.cvc;
    }



    return {
        onCardholderNameChange,
        onCardNumberChange,
        onCardExpDateMonth,
        onCardExpDateYear,
        onCardCvcChange
    };

}