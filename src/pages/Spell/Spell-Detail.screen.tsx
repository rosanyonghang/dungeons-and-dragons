import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {
	Badge, ActionIcon, Card, Grid,
} from '@mantine/core';
import { Heart } from 'tabler-icons-react';
import { addToFavorites, loadSpell, removeFromFavorites } from '../../store/modules/spell/actions';
import { IBase, ISpellDetail } from '../../components/modules/Spell/Spell.dto';

export function SpellDetailScreen() {
	const spell: ISpellDetail = useSelector((state: any) => state.spellReducer.spell);
	const { id } = useParams();
	const dispatch: any = useDispatch();
	const favorites = useSelector((state: any) => state.spellReducer.favorites);
	const checkIfExists = () => favorites.some((v:IBase) => v.index === spell.index);

	const toggleFavorites = () => {
		if (checkIfExists()) {
			dispatch(removeFromFavorites(spell.index));
		}	else {
			dispatch(addToFavorites({
				index: spell.index,
				name: spell.name,
				url: spell.url,
			}));
		}
	};
	const loadSpellData = async () => {
		await dispatch(loadSpell(id));
	};
	useEffect(() => {
		loadSpellData();
	}, [id]);

	return (
		<div className="spell-details-screen">
			{spell?.name && (
				<Card withBorder>
					<div className="flex justify-between">
						<div className="text-3xl font-bold">{spell.name}</div>
						<div>
							<ActionIcon color={checkIfExists() ? 'red' : 'dark'} onClick={toggleFavorites}>
								<Heart />
							</ActionIcon>
						</div>
					</div>
					<Badge>{spell.index}</Badge>
					<div className="spell-description mt-md">
						<div className="text-lg font-bold">Description</div>
						{spell.desc.map((v: string, key: number) => (
							<div key={`description-${key}`}>
								{v}
							</div>
						))}
					</div>
					<div className="spell-material mt-md">
						<div className="text-lg font-bold">Material</div>
						<div>{spell.material}</div>
					</div>
					<div className="spell-material mt-md">
						<div className="text-lg font-bold">Higher Level</div>
						{spell.higher_level.map((v: string, key: number) => (
							<div key={`higher-level-${key}`}>
								{v}
							</div>
						))}
					</div>
					<Grid className="mt-md">
						<Grid.Col md={6} sm={6} xs={12}>
							<Card withBorder>
								<div className="text-xl">Attack Details</div>
								<div className="attack-details">
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>Attack Type:</div>
										<span className="ml-md">{spell.attack_type}</span>
									</div>
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>Casting time:</div>
										<span className="ml-md">{spell.casting_time}</span>
									</div>
									{' '}
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>Damage Type:</div>
										<span className="ml-md">{spell?.damage?.damage_type.name}</span>
									</div>
									{' '}
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>Duration:</div>
										<span className="ml-md">{spell.duration}</span>
									</div>
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>Range:</div>
										<span className="ml-md">{spell.range}</span>
									</div>
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>Ritual:</div>
										<span className="ml-md">{spell.ritual ? 'Yes' : 'No'}</span>
									</div>
									<div className="font-bold capitalize flex">
										<div style={{ minWidth: '105px' }}>School:</div>
										<span className="ml-md">{spell.school.name}</span>
									</div>
								</div>
							</Card>
						</Grid.Col>
						<Grid.Col md={6} sm={6} xs={12}>
							<Card withBorder>
								<div>
									<div className="text-lg font-bold text-secondary-700">Classes</div>
									{spell.classes.map((v, key) => (<Badge key={`classes${key}`}>{v.name}</Badge>))}
								</div>
								<div>
									<div className="text-lg font-bold text-secondary-700 mt-md">Sub Classes</div>
									{spell.subclasses.map((v, key) => (<Badge key={`classes${key}`}>{v.name}</Badge>))}
								</div>
							</Card>
						</Grid.Col>
					</Grid>
				</Card>
			)}
		</div>
	);
}
