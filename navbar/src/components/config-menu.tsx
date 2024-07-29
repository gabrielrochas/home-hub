import { Menu, MenuItem } from "@mui/material";

interface ConfigMenuProps {
	anchorEl: HTMLElement | null;
	handleMenuClose: () => void;
	isMenuOpen: boolean;
	menuId: string;
}

export function ConfigMenu({
	anchorEl,
	handleMenuClose,
	isMenuOpen,
	menuId,
}: ConfigMenuProps) {
	return (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);
}
