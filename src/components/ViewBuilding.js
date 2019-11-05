import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {newdata, buildinginfo} = this.props;
		if ((newdata[buildinginfo - 1]) && (newdata[buildinginfo - 1].coordinates)){
		return (
			<div>
				<p>
					{'Address: '}
					{newdata[buildinginfo - 1].address}
					{', Latitude: '}
					{newdata[buildinginfo - 1].coordinates.latitude.toString()}
					{', Longitude: '}
					{newdata[buildinginfo - 1].coordinates.longitude.toString()}
				</p>
			</div>
		);
		}
		else if (newdata[buildinginfo - 1]){
			return(
			<div>
				<p>
					{' '}
					{newdata[buildinginfo - 1].address}
				</p>
			</div>
			);
		}
		else {
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
		}
	}
}
export default ViewBuilding;
