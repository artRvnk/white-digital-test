import 'react-native'

// note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

// note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />)
})
