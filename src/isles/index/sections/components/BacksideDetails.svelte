<script lang="ts">
    import { css } from "../../../../../styled-system/css";

    export let media: string;
    export let cvc: string;

</script>


<div id="card_backside_container" class={css({ position: 'relative', width: '100%', height: '100%' })}>
    <img 
        src={media}
        alt="img_card__backside"
        class={css({ display: 'flex', position: 'absolute', zIndex: 0, top: '0', left: '0' })}
    >
    <div id="card_backside_details" class={css({ display: 'flex', position: 'absolute', zIndex: 1, top: { xsm: '58px', lg: '90px' }, right: { xsm: '30px', lg: '45px' }, width: 'fit-content', height: 'fit-content', fontSize: { xsm: '13px', lg: '16px' } })}>
        <span id="text_cardCvc" class={css({ fontFamily: 'spacegrotesk_bold', width: '31px', overflow: 'hidden', height: '100%', color: { xsm: 'black', lg: 'white' } })}>

            {cvc}

        </span>
    </div>
</div>