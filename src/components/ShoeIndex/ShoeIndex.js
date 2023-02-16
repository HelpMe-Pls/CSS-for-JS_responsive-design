import React from 'react'
import styled from 'styled-components/macro'

import { WEIGHTS, BREAKPOINTS } from '../../constants'

import Breadcrumbs from '../Breadcrumbs'
import Select from '../Select'
import Spacer from '../Spacer'
import ShoeSidebar from '../ShoeSidebar'
import ShoeGrid from '../ShoeGrid'

const ShoeIndex = ({ sortId, setSortId }) => {
	return (
		<Wrapper>
			<MainColumn>
				<Header>
					<Title>Running</Title>
					<Select
						label="Sort"
						value={sortId}
						onChange={(ev) => setSortId(ev.target.value)}
					>
						<option value="newest">Newest Releases</option>
						<option value="price">Price</option>
					</Select>
				</Header>
				<Spacer size={32} />
				<ShoeGrid />
			</MainColumn>
			<LeftColumn>
				<Breadcrumbs>
					<Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
					<Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
				</Breadcrumbs>
				<MobileDisplay>
					<Spacer size={42} />
				</MobileDisplay>
				<ShoeSidebar />
			</LeftColumn>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: baseline;
	gap: 32px;

	@media ${BREAKPOINTS.tabletAndSmaller} {
		flex-direction: column-reverse;
		gap: initial;
	}
`

const LeftColumn = styled.div`
	flex-basis: 248px;

	@media ${BREAKPOINTS.tabletAndSmaller} {
		flex: 0;
	}
`

const MobileDisplay = styled.span`
	@media ${BREAKPOINTS.tabletAndSmaller} {
		display: none;
	}
`

const MainColumn = styled.div`
	flex: 1;
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: ${WEIGHTS.medium};
`

export default ShoeIndex
