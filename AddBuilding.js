import React from 'react';
class AddBuilding extends React.Component {
    submitInput(){
        const newbuilding = this.monkey.value;
        const newdirectory = newbuilding.split(",");
        this.props.addnewbuilding(newdirectory)
    }
	render() {
        return (
            <form>
            <input 
            type="text" 
            ref = { (value) => this.monkey = value}
            placeholder = "Add a new listing, format as:Code, Name, Latitude, Longitude, Address (double click this bar to submit)"
            onDoubleClick = {this.submitInput.bind(this)}
             />
        </form>
        );
	}
}
export default AddBuilding;