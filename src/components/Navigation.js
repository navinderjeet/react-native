import { StackNavigation, TabNavigator } from 'react-navigation';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Navigation = TabNavigator({
    PeopleList: { screen: PeopleList },
    AddPerson: { screen: AddPerson },
    CompanyList: { screen: CompanyList },
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        showLabel: true,
        activeTintColor: 'white',
        style: {
            backgroundColor: '#26a69a',
        },
    },
    swipeEnabled: true,
});

export default Navigation;