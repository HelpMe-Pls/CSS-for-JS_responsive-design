import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, BREAKPOINTS } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false)

	// For our mobile hamburger menu, we'll want to use a button
	// with an onClick handler, something like this:
	//
	// <button onClick={() => setShowMobileMenu(true)}>

	return (
		<header>
			<SuperHeader />
			<MainHeader>
				<LogoWrapper>
					<Logo />
				</LogoWrapper>
				<DesktopNav>
					<NavLink href="/sale">Sales</NavLink>
					<NavLink href="/new">New&nbsp;Releases</NavLink>
					<NavLink href="/men">Men</NavLink>
					<NavLink href="/women">Women</NavLink>
					<NavLink href="/kids">Kids</NavLink>
					<NavLink href="/collections">Collections</NavLink>
				</DesktopNav>
				<SmallerDisplays>
					<UnstyledButton>
						<Icon id="shopping-bag" />
					</UnstyledButton>
					<UnstyledButton>
						<Icon id="search" />
					</UnstyledButton>
					<UnstyledButton>
						<Icon id="menu" onClick={() => setShowMobileMenu(true)} />
					</UnstyledButton>
				</SmallerDisplays>
				<Filler />
			</MainHeader>

			<MobileMenu
				isOpen={showMobileMenu}
				onDismiss={() => setShowMobileMenu(false)}
			/>
		</header>
	)
}

const MainHeader = styled.div`
	display: flex;
	align-items: baseline;
	padding: 18px 32px;
	overflow: auto;
	border-bottom: 1px solid var(--gray-100);

	@media ${BREAKPOINTS.tabletAndSmaller} {
		border-top: 4px solid var(--gray-900);
	}
	@media ${BREAKPOINTS.phoneAndSmaller} {
		/* For maintainability: you only need to update top-bottom padding once, from the common padding above */
		padding-left: 16px;
		padding-right: 16px;
	}
`

const LogoWrapper = styled.div`
	flex: 1;

	@media ${BREAKPOINTS.tabletAndSmaller} {
		flex: revert;
	}
`

const DesktopNav = styled.nav`
	display: flex;
	gap: clamp(1rem, 9.2vw - 4.5rem, 3rem);
	margin: 0px 48px;

	@media ${BREAKPOINTS.tabletAndSmaller} {
		display: none;
	}
`

const SmallerDisplays = styled.div`
	display: none;

	@media ${BREAKPOINTS.tabletAndSmaller} {
		display: flex;
		gap: 32px;
		align-self: stretch;
		margin-left: auto;
	}
	@media ${BREAKPOINTS.phoneAndSmaller} {
		gap: 16px;
	}
`

const Filler = styled.div`
	flex: 1;
	@media ${BREAKPOINTS.tabletAndSmaller} {
		display: none;
	}
`

const NavLink = styled.a`
	font-size: 1.125rem;
	text-transform: uppercase;
	text-decoration: none;
	color: var(--gray-900);
	font-weight: ${WEIGHTS.medium};

	&:first-of-type {
		color: var(--color-secondary);
	}
`

export default Header
