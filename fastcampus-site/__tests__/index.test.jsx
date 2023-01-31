// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
import '@testing-library/jest-dom'

describe('App', () => {
  it('메뉴가 렌더링 되어야 한다', () => {
    const { getByRole } = render( <Home />);

    const menu = screen.getByRole('navigation', {
      name: 'fastcampus'
    });

    expect(menu).toBeInTheDocument();
  });

  it('배너가 렌더링 되어야 한다', () => {
    const { getByRole } = render( <Home />);

    const banner = screen.getByRole('banner', {
      name: ''
    });

    expect(banner).toBeInTheDocument();
  });

  it('강의 목록이 렌더링 되어야 한다', () => {
    const { getByTitle } = render( <Home />);

    const lectureList = screen.getByTitle('lectureList', {
      name: ''
    });

    expect(lectureList).toBeInTheDocument();
  });
})