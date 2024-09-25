<script lang="ts">

    import { cx, css } from "../../../../../styled-system/css";
    import { grid, gridItem } from "../../../../../styled-system/patterns";

    import { useFormDetails } from "../../../../hooks/useFormDetails";

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

    export let frontsideCardDetails: FrontsideCardDetails;
    export let backsideCardDetails: BacksideCardDetails;
    export let isValidForm: boolean;


    const { 
        onCardholderNameChange,
        onCardNumberChange,
        onCardExpDateMonth,
        onCardExpDateYear,
        onCardCvcChange 
    } = useFormDetails(frontsideCardDetails, backsideCardDetails);

    
    const onSubmitForm = (event: SubmitEvent) => {
        event.preventDefault();
        console.log('Form submitted');

        isValidForm = (
            frontsideCardDetails.holderName.length > 0 &&
            frontsideCardDetails.cardNumber.length === 16 &&
            frontsideCardDetails.expDate.month.length === 2 &&
            frontsideCardDetails.expDate.year.length === 2 &&
            backsideCardDetails.cvc.length === 3
        );
    }

</script>

<form class={grid()} on:submit={onSubmitForm}>

    <div id="fcardholder_name_box" class={gridItem()}>
        <label for="fcardholder_name">CARDHOLDER NAME</label><br>
        <input type="text" id="fcardholder_name" name="fcardholder_name" placeholder="e.g. Jane Appleseed" minlength="2" maxlength="48" 
            required
            on:input={onCardholderNameChange}
        >
    </div>
    
    <div id="fcard_number_box" class={gridItem()}>
        <label for="fcard_number">CARD NUMBER</label><br>
        <input type="text" id="fcard_number" name="fcardholder_name" placeholder="e.g. Jane 1234 5678 9123 0000" minlength="16" maxlength="16" 
            required
            on:input={onCardNumberChange}
        >
    </div>
    
    <div id="fcard_expDate_cvc_box" class={cx( grid({ columns: 12 }), gridItem() )}>
        <fieldset id="fcard_cardDate_expDate_box" class={cx( grid({ columns: 12 }), gridItem({ colSpan: 6 }) )}>
            <legend>EXP. DATE (MM/YY)</legend>
            <div id="fcard_cardDate__MM_box" class={gridItem({ colSpan: 6 })}>
                <input type="number" id="fcard_expDate__MM" name="fcard_expDate" placeholder="MM" min="01" max="31" 
                    required
                    on:input={onCardExpDateMonth}
                >
            </div>
            <div id="fcard_cardDate__YY_box" class={gridItem({ colSpan: 6 }) }>
                <input type="number" id="fcard_expDate__YY" name="fcard_expDate" placeholder="YY" minlength="0" maxlength="99" 
                    required
                    on:input={onCardExpDateYear}
                >
            </div>
        </fieldset>
        <fieldset id="fcard_card_cvc_box" class={cx( gridItem({ colSpan: 6 }), css({ marginTop: '-3px' }) )}>
            <label for="fcard_cvc">CVC</label>
            <input type="number" id="fcard_cvc" name="fcard_cvc" placeholder="e.g. 123" min="000" max="999" 
                required
                on:input={onCardCvcChange}
            >
        </fieldset>
    </div>

    <button id="fcard_submitButton" type="submit">Confirm</button>
</form>