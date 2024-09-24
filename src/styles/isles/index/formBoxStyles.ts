import { cva } from "../../../../styled-system/css";


export const formBoxStyles = cva({
	base: {
		width: {
			xsm: '100%',
			sm: '100%',
			md: '50%'
		}, 
		height: {
			xsm: '100%',
			sm: '90%',
			md: 'fit-content'
		}, 
		backgroundColor: 'white',
		marginTop: '30px',
		'& form': {
			flexDirection: 'column',
			justifyContent: 'space-between',
			height: { xsm: '70%', sm: '100%', md: '100%' },
			margin: { xsm: '5px 20px 20px 20px' },
			'& label, legend': {
				fontFamily: 'spacegrotesk_variable',
				fontSize: '14px',
				fontWeight: '600'
			},
			"& input": {
				fontFamily: 'spacegrotesk_variable',
				fontSize: '18px',
				fontWeight: '500',
				color: 'hsl(278, 68%, 11%)',
				padding: '10px',
				border: '1px solid hsl(270, 3%, 87%)',
				borderRadius: '5px',
				margin: '5px 0px',
				boxSizing: 'border-box',
				_placeholder: {
					color: 'gray.400',
					opacity: '0.5'
				}
			},
			"& input[id^='fcard']": {
				width: '100%', 
				margin: '0px 0px 15px 0px', 
				boxSizing: 'border-box'
			},
			"& div[id^='fcard_cardDate__']":{
				width: '100%'
			},
			"& button#fcard_submitButton": {
				width: '100%',
				padding: '15px',
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
		}
	}
})