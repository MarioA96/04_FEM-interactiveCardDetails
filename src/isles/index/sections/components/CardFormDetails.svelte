<script lang="ts">
    import FormSection from "./FormSection.svelte";
    import SuccesfulCardDetails from "./SuccesfulCardDetails.svelte";

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
    let isValidForm: boolean = false;

</script>

{#if isValidForm}
    <SuccesfulCardDetails bind:isValidForm={isValidForm}/>
{:else}
    <FormSection 
        frontsideCardDetails={frontsideCardDetails} 
        backsideCardDetails={backsideCardDetails} 
        bind:isValidForm={isValidForm}
    />
{/if}
