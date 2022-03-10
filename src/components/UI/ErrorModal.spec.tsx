import ErrorModal from './ErrorModal';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

/**
 * Shallow rendering is useful to constrain yourself to testing a component as a unit,
 * and to ensure that your tests aren't indirectly asserting on behavior of child components.
 */
describe('Error Modal', () => {
    it('should contain <h2>An Error Occurred!</h2>', () => {
        const wrapper = shallow(<ErrorModal onClose={() => {}} />);
        expect(wrapper.contains(<h2>An Error Occurred!</h2>)).toBe(true);
    });

    it('should call onClose function on click', () => {
        const onButtonClick = jest.fn();
        const wrapper = shallow(<ErrorModal onClose={onButtonClick} />);
        wrapper.find('button').simulate('click');
        expect(onButtonClick).toBeCalled();
    });
});
