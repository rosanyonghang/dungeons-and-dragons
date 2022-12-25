export function Logo({ size }: { size: string }) {
	return (
		<div className="logo">
			<img src={require('../../assets/images/logo.png')} alt="" height={size} style={{ aspectRatio: '16 / 9' }} />
		</div>
	);
}
