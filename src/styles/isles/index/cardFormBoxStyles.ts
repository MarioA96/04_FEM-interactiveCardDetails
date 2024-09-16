import { cva } from "../../../../styled-system/css";

export const cardFormBoxStyles = cva({
	base: {
		display: 'flex',
		width: { 
			xsm: '100%', 
			md: '66.666%' 
		}, 
		height: { 
			xsm: '60%',
			sm: '60%',
			md: '100%' 
		} 
	}
});