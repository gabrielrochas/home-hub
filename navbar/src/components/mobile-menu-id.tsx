import { Menu, MenuItem, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";

interface MobileMenuIdProps {
	mobileMoreAnchorEl: HTMLElement | null;
	handleMobileMenuClose: () => void;
	handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
	mobileMenuId: string;
	isMobileMenuOpen: boolean;
}
export function MobileMenuId({
	mobileMoreAnchorEl,
	handleMobileMenuClose,
	mobileMenuId,
	handleProfileMenuOpen,
	isMobileMenuOpen,
}: MobileMenuIdProps) {
	return (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: "top",
				horizontal: "right",
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show new notifications"
					color="inherit"
				>
					<Badge badgeContent={0} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem>
				<IconButton size="large" aria-label="show new mails" color="inherit">
					<Badge badgeContent={0} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);
}
