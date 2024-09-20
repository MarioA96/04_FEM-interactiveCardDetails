<script lang="ts">
    import { cx, css } from "../../../../../styled-system/css";
    import { container, grid, gridItem } from "../../../../../styled-system/patterns";

    export let cardDetails : { cardNumber: string, holderName: string, expDate: { month: string, year: string } };

</script>

<div id="card_front_details_container" class={cx( grid({rowGap: '5'}), container({}) )}>
    <div id="card_front_decoration_box" class={cx( gridItem({}), grid({columns: 12}) )}>
        <div id="card_front_decoration__bigCircle" class={ cx( gridItem({colSpan: 2}), css({ width: '25px', height: '25px', borderRadius: '100%', backgroundColor: 'white' }) ) }></div>
        <div id="card_front_decoration__smallCircle" class={ cx( gridItem({colSpan: 2}), css({ marginTop: '7px', width: '12px', height: '12px', border: '1px solid white', borderRadius: '50%'}) ) }></div>
    </div>
    <div id="card_front_details__cardNumber" class={cx( gridItem({}), grid({columns: 12}) )}>
        <span id="text_cardNumber" class={ cx( gridItem({colSpan: 12}), css({ width: 'fit-content', overflow: 'hidden', fontFamily: 'spacegrotesk_variable', fontWeight: '500', fontSize: '16px', color: 'white' }) ) }>
            
            {cardDetails.cardNumber}

        </span>
    </div>
    <div id="card_front_details__holderName__expDate" class={cx( gridItem({}), grid({columns: 12}) )}>
        <span id="text_cardHolderName" class={ cx( gridItem({colSpan: 10}), css({ fontFamily: 'spacegrote1sk_variable', fontWeight: '700', fontSize: '12px', color: 'white' }) )}>
            
            {cardDetails.holderName}

        </span>
        <div id="text_cardExpDate" class={ cx( grid({columns: 5}), gridItem({colSpan: 2}), css({ width: 'fit-content', overflow: 'hidden', fontFamily: 'spacegrote1sk_variable', fontWeight: '700', fontSize: '12px', color: 'white' }) )}>
           
            <span id="text_cardExpDate__month" class={ gridItem({ colSpan: 2 }) }>{cardDetails.expDate.month}</span>
            <span class={ gridItem({ colSpan: 1 }) }>/</span>
            <span id="text_cardExpDate__year" class={ gridItem({ colSpan: 2 }) }>{cardDetails.expDate.year}</span>

        </div>
    </div>
</div>