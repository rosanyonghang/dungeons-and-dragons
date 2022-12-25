import { Navbar } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export function NavPartial({ hidden, width }:any) {
	const links = [
		{ label: 'Spell', path: '/' },
		{ label: 'Favorites', path: '/favorites' },
	];
	return (
		<Navbar
			hiddenBreakpoint="sm"
			hidden={hidden}
			width={width}
			className="px-md py-md"
		>
			<div className="flex flex-col w-full">
				{links.map((v, key: number) => (
					<NavLink
						className="nav-link cursor-pointer py-sm rounded-xl px-md"
						to={v.path}
						key={key}
					>
						{v.label}
					</NavLink>
				))}
			</div>
		</Navbar>
	);
}
