import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Grid, TextInput } from '@mantine/core';
import { loadSpells } from '../../store/modules/spell/actions';
import { IBase } from '../../components/modules/Spell/Spell.dto';
import { SpellCard } from '../../components/modules/Spell/Spell.card';

export function FavoritesScreen() {
	const favorites = useSelector((state: any) => state.spellReducer.favorites);
	const [filteredSpells, setFilteredSpells] = useState([]);
	const [keyword, setKeyword] = useState('');

	useEffect(() => {
		setFilteredSpells(favorites.filter((v: IBase) => v.name.toLowerCase().includes(keyword.toLowerCase())));
	}, [keyword, favorites]);

	return (
		<div className="spell-section">
			<div className="flex justify-between">
				<div className="text-3xl font-bold">Favorite Spells</div>
				<TextInput
					placeholder="Search Spells"
					label="Search Spells"
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</div>
			<Grid className="text-xl mt-xs">
				{filteredSpells.map((v: IBase, key: number) => (
					<Grid.Col md={3} sm={6} xs={12} key={key}>
						<SpellCard spell={v} />
					</Grid.Col>
				))}
			</Grid>
		</div>
	);
}
