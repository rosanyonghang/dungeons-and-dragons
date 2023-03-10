import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Grid, LoadingOverlay, TextInput } from '@mantine/core';
import { loadSpells } from '../../store/modules/spell/actions';
import { IBase } from '../../components/modules/Spell/Spell.dto';
import { SpellCard } from '../../components/modules/Spell/Spell.card';

export function SpellScreen() {
	const navigate = useNavigate();
	const dispatch: any = useDispatch();
	const spells = useSelector((state: any) => state.spellReducer.spells);
	const [filteredSpells, setFilteredSpells] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [visible, setVisible] = useState(false);

	const loadSpellData = async () => {
		setVisible(true);
		await dispatch(loadSpells());
		setVisible(false);
	};

	useEffect(() => {
		loadSpellData();
	}, []);

	useEffect(() => {
		setFilteredSpells(spells);
	}, [spells]);

	useEffect(() => {
		setFilteredSpells(spells.filter((v: IBase) => v.name.toLowerCase().includes(keyword.toLowerCase())));
	}, [keyword]);

	return (
		<div className="spell-section">
			<LoadingOverlay visible={visible} overlayBlur={2} />
			<div className="flex justify-between">
				<div className="text-3xl font-bold">Spells</div>
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
