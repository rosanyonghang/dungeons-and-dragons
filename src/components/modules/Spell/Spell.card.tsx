import { ActionIcon, Badge, Card } from '@mantine/core';
import { Heart } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IBase } from './Spell.dto';
import { addToFavorites, removeFromFavorites } from '../../../store/modules/spell/actions';

export function SpellCard({ spell }: { spell: IBase }) {
	const navigate = useNavigate();
	const favorites = useSelector((state: any) => state.spellReducer.favorites);
	const dispatch = useDispatch();
	const checkIfExists = () => favorites.some((v:IBase) => v.index === spell.index);

	const toggleFavorites = () => {
		if (checkIfExists()) {
			dispatch(removeFromFavorites(spell.index));
		}	else {
			dispatch(addToFavorites(spell));
		}
	};

	return (
		<Card withBorder className="hover:bg-gray-200 cursor-pointer flex justify-between items-center">
			<div onClick={() => navigate(`/spell/${spell.index}`)}>
				<div className="font-bold text-xl">{spell.name}</div>
				<Badge className="font-bold text-sm">{spell.index}</Badge>
			</div>
			<div>
				<ActionIcon color={checkIfExists() ? 'red' : 'dark'} onClick={toggleFavorites}>
					<Heart />
				</ActionIcon>
			</div>
		</Card>
	);
}
