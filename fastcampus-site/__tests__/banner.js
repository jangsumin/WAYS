import { render } from '@testing-library/react'
import Banner from '../components/Banner';
import '@testing-library/jest-dom';

describe('Banner는', () => {
  it('banner라는 텍스트를 가지고 있어야 한다.', () => {
    const { getByText } = render( <Banner /> );

    const bannerText = getByText('banner');
    expect(bannerText).toBeInTheDocument();
  });
})