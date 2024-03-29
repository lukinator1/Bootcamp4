import React from 'react';
/*function filterItems(arr, query) {
	return arr.filter(function(el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
	})
}*/
class BuildingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		var { newdata, filterText } = this.props;

		var buildingList = newdata
		.filter(directory => {
		return directory.name.indexOf(filterText) >= 0	
		})
		.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td onClick = {() => this.props.selectedUpdate(directory.id)}> 
					{directory.name} </td>
				</tr>
			);
		});
		return <div>{buildingList}</div>;
	}
}
export default BuildingList;
