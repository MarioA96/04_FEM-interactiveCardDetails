<script lang="ts">
    import { css, cx, cva } from "../../../../../styled-system/css";
    import { grid, gridItem } from "../../../../../styled-system/patterns";

    export let isValidForm: boolean;

    const ButtonStyles = cva({
        base: {
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            backgroundColor: 'hsl(278, 68%, 11%)',
            color: 'white',
            fontFamily: 'spacegrotesk_variable',
            fontSize: '18px',
            fontWeight: '400',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            "&:hover": {
                backgroundColor: 'hsl(279, 6%, 55%)'
            }
        }
    })

    const onReturnToForm = () => {
        isValidForm = false;
    }
</script>


<section class={ cx( grid({}), css({ marginTop: { xsm: '50px', lg: '0px' } }) )}>
    <div class={cx( grid({}), gridItem({}), css({ alignContent: 'center', justifyItems: 'center' }) )}>
        <div class={css({ alignContent: 'center', width: '50px', height: '50px', borderRadius: '50%', bgGradient: 'to-b', gradientFrom: 'hsl(249, 99%, 64%)', gradientTo: 'hsl(278, 94%, 30%)' })}>
            <span class={css({ marginLeft: '32%', color: 'white', fontSize: '25px' })}>
                ✓
            </span>
        </div>
    </div>
    <div class={cx( grid({}), gridItem({}), css({ alignContent: 'center', justifyItems: 'center' }) )}>
        <span class={css({ fontFamily: 'spacegrotesk_bold', fontSize: { xsm: '18px', lg: '32px' }, color: 'violet.950'})}>
            THANK YOU!
        </span>
    </div>
    <div class={cx( grid({}), gridItem({}), css({ alignContent: 'center', justifyItems: 'center' }) )}>
        <span class={css({ fontFamily: 'spacegrotesk_bold', fontSize: { xsm: '12px', lg: '16px' }, color: 'gray.500'})}>
            We've added your card details.
        </span>
    </div>
    <div class={cx( grid({}), gridItem({}) )}>
        <button class={ButtonStyles({})} on:click={onReturnToForm}>CONTINUE</button>
    </div>
</section>