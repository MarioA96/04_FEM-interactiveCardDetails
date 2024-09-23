<script lang="ts">
    import { cx, css } from "../../../../../styled-system/css";
    import { container, grid, gridItem } from "../../../../../styled-system/patterns";

    export let cardDetails : { cardNumber: string, holderName: string, expDate: { month: string, year: string } };

</script>

<div id="card_front_details_container" class={cx( grid({rowGap: '5'}), container({}) )}>
    
    <div id="card_front_decoration_box" class={cx( gridItem({}), grid({columns: 12}) )}>
        <div id="card_front_decoration__bigCircle" 
            class={ 
                cx( 
                    gridItem({colSpan: 2}), 
                    css({ 
                        width: {
                            xsm: '25px',
                            sm: '25px',
                            md: '40px'
                        }, 
                        height: {
                            xsm: '25px',
                            sm: '25px',
                            md: '40px'
                        }, 
                        borderRadius: '100%', 
                        backgroundColor: 'white' 
                    }) 
                ) 
            }
        ></div>
        <div id="card_front_decoration__smallCircle" 
            class={ 
                cx( 
                    gridItem({colSpan: 2}), 
                    css({ 
                        marginTop: '7px', 
                        width: {
                            xsm: '12px',
                            sm: '12px',
                            md: '18px'
                        }, 
                        height: {
                            xsm: '12px',
                            sm: '12px',
                            md: '18px'
                        },
                        border: '1px solid white', 
                        borderRadius: '50%'
                    }) 
                ) 
            }
        ></div>
    </div>

    <div id="card_front_details__cardNumber" class={cx( gridItem({}), grid({columns: 12}) )}>
        <span id="text_cardNumber" 
            class={ 
                cx( 
                    gridItem({colSpan: 12}), 
                    css({ 
                        width: 'fit-content', 
                        overflow: 'hidden', 
                        fontFamily: 'spacegrotesk_bold', 
                        fontWeight: '500', 
                        letterSpacing: '2px',
                        marginTop: {
                            xsm: '0px',
                            sm: '0px',
                            md: '40px'
                        },
                        fontSize: {
                            xsm: '13px',
                            sm: '16px',
                            md: '21px'
                        }, 
                        color: 'white' 
                    }) 
                ) 
            }
        >
            
            {cardDetails.cardNumber}

        </span>
    </div>

    <div id="card_front_details__holderName__expDate" class={cx( gridItem({}), grid({columns: 12}) )}>
        <span id="text_cardHolderName" 
            class={ 
                cx( 
                    gridItem({colSpan: 10}), 
                    css({ 
                        fontFamily: 'spacegrotesk_bold', 
                        fontWeight: '500', 
                        letterSpacing: '1px',
                        fontSize: {
                            xsm: '12px',
                            sm: '14px',
                            md: '14px'
                        }, 
                        color: 'white' 
                    }) 
                )
            }
        >
            
            {cardDetails.holderName}

        </span>
        <div id="text_cardExpDate" 
            class={ 
                cx( 
                    grid({columns: 5}), 
                    gridItem({colSpan: 2}), 
                    css({ 
                        width: '48px', 
                        overflow: 'hidden', 
                        fontFamily: 'spacegrote1sk_variable', 
                        fontWeight: '700', 
                        fontSize: {
                            xsm: '12px',
                            sm: '14px',
                            md: '14px'
                        }, 
                        color: 'white' 
                    }) 
                )
            }
        >
           
            <span id="text_cardExpDate__month" class={ gridItem({ colSpan: 2 }) }>{cardDetails.expDate.month}</span>
            <span class={ gridItem({ colSpan: 1 }) }>/</span>
            <span id="text_cardExpDate__year" class={ gridItem({ colSpan: 2 }) }>{cardDetails.expDate.year}</span>

        </div>
    </div>

</div>