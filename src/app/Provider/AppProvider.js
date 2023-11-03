import React from "react";

export const AppContext = React.createContext()



export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: '',
            ...this.savedSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        } 
    }

    savedSettings() {
        let appData = JSON.parse(localStorage.getItem('cryptoDash'))
        if(!appData) {
            return {page: 'settings', firstVisit: true}
        }
        return {}
    }

    setPage = page => this.setState({page})

    confirmFavorites = (favorites) => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello'
        }))
        // this.setState({favorites})
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}